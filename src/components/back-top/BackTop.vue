<template>
  <transition name="v-fade-in">
    <div class="v-back-top" v-if="visible" @click="handleClick">
      <slot>
        <div class="v-back-top__target"><v-icon name="rising1"></v-icon></div>
      </slot>
    </div>
  </transition>
</template>
<script>
import VIcon from '../icon'
import { debounce } from '../../utils/pipe'

// 可滚动父级元素
function findParentScroll (el) {
  let parentNode = el.parentNode
  while (parentNode) {
    if (parentNode instanceof HTMLElement) {
      if (parentNode.scrollTop > 0) {
        return parentNode
      } else {
        parentNode.scrollTop++
        const top = parentNode.scrollTop
        if (top > 0) {
          parentNode.scrollTop = 0
          return parentNode
        }
      }
      parentNode = parentNode.parentNode
    } else {
      break
    }
  }
}

export default {
  name: 'v-back-top',
  components: {
    VIcon
  },
  props: {
    // 滚动容器，默认为父组件$el
    target: {
      type: HTMLElement,
      default: null
    },
    // 滚动多少距离开始显示组件!
    offset: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      container: null, // 滚动容器
      visible: this.offset <= 0, // 是否可见
      scrollHandler: debounce((e) => this.handleScroll(e), 100)
    }
  },
  watch: {
    target () {
      this.setContainer()
    }
  },
  mounted () {
    this.setContainer()
  },
  beforeDestroy () {
    this.removeListener()
  },
  methods: {
    // 设置滚动容器
    setContainer () {
      if (this.container) this.removeListener()
      this.container = this.target || findParentScroll(this.$el)
      this.container.addEventListener('scroll', this.scrollHandler)
    },
    // 取消监听
    removeListener () {
      if (this.container) {
        this.container.removeEventListener('scroll', this.scrollHandler)
        this.container = null
      }
    },
    // 回到顶部
    handleClick () {
      // 设置滚动行为改为平滑的滚动
      this.container.scrollTo({ top: 0, behavior: 'smooth' })
      this.$emit('click')
    },
    // 当高度大于设定高度，则显示组件
    handleScroll ({ target }) {
      this.visible = target.scrollTop > this.offset
    }
  }
}
</script>
