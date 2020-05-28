<template>
  <div class="v-swiper__container">
    <div class="v-swiper" ref="swiper" :style="styles" @transitionend="afterSlide">
      <slot />
    </div>
    <template v-if="direction">
      <span class="v-swiper__direction left" @click="slideTo(currentValue - 1)">
        <v-icon name="arrow-lift"></v-icon>
      </span>
      <span class="v-swiper__direction right" @click="slideTo(currentValue + 1)">
        <v-icon name="arrow-right"></v-icon>
      </span>
    </template>
    <div class="v-swiper__control" v-if="control">
      <span v-for="(d, idx) in items" :class="{active: idx === currentValue}" :key="idx" @click="slideTo(idx)"></span>
    </div>
  </div>
</template>
<script>
import VIcon from '../icon'
import { findChildComponents } from '../../utils/findComponents'

export default {
  name: 'v-swiper',
  components: {
    VIcon
  },
  props: {
    // 当前第几个
    value: {
      type: Number,
      default: 0
    },
    // 切换速度
    speed: {
      type: Number,
      default: 500
    },
    // 显示前后控制
    direction: {
      type: Boolean,
      default: false
    },
    // 显示指示点
    control: {
      type: Boolean,
      default: false
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 自动播放时动画停留时间，单位毫秒
    delay: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      currentValue: 0,
      slideValue: 0,
      items: [],
      styles: null,
      timer: 0 // 控制自动播放
    }
  },
  computed: {
  },
  watch: {
    value (value) {
      if (this.currentValue !== value) {
        this.currentValue = value
        this.slideTo(this.currentValue)
      }
    },
    currentValue (currentValue) {
      if (this.value !== currentValue) {
        this.$emit('input', currentValue)
      }
    }
  },
  created () {
    this.cloneNodes = []
  },
  mounted () {
    this.update()
    this.startAutoplay()
  },
  methods: {
    // 更新实例
    update () {
      this.findSwiperItems()
      this.slideTo(this.currentValue, 0)
    },
    // 切换到指定slide
    slideTo (idx, speed = this.speed) {
      this.stopAutoplay()
      const { length } = this.items
      const index = (idx + length) % length
      this.slideValue = (idx + 1 + length + 2) % (length + 2)
      this.$refs.swiper.style.transition = `transform ${speed}ms`
      this.styles = {
        transform: `translateX(-${100 * this.slideValue}%)`,
        height: `${this.children[index].$el.getBoundingClientRect().height}px`
      }
      this.startAutoplay()
    },
    // 更新Items
    findSwiperItems () {
      // 清除原克隆节点
      this.cloneNodes.forEach(dom => dom.parentNode.removeChild(dom))
      this.children = findChildComponents(this, 'v-swipe-item')
      this.items = new Array(this.children.length)
      if (this.children.length) {
        // 复制节点
        const start = this.children[0].$el
        const cloneStart = this.children[0].$el.cloneNode(true)
        this.$refs.swiper.appendChild(cloneStart)
        const cloneEnd = this.children[this.children.length - 1].$el.cloneNode(true)
        this.$refs.swiper.insertBefore(cloneEnd, start)
        this.cloneNodes = [cloneStart, cloneEnd]
      }
    },
    // 切换完毕
    afterSlide () {
      if (this.slideValue === 0) {
        // 已滚动至第一个
        this.currentValue = this.items.length - 1
        return this.slideTo(this.currentValue, 0)
      } else if (this.slideValue === this.items.length + 1) {
        // 已滚动至最后一个
        this.currentValue = 0
        return this.slideTo(this.currentValue, 0)
      }
      this.currentValue = this.slideValue - 1
    },
    startAutoplay () {
      if (this.autoplay) {
        // 每隔一定的时单，点下一个
        this.timer = setTimeout(() => {
          this.slideTo(this.currentValue + 1)
        }, this.delay)
      }
    },
    stopAutoplay () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = 0
      }
    }
  }
}
</script>
