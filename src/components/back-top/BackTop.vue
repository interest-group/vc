<template>
  <!-- 组件本身就应该是按钮，而不是容器 -->
  <transition name="fade-in">
    <div class="back-top"
         v-if="visible"
         @click="handleClick">
      <slot>
        <div class="back-top-target">返回</div>
      </slot>
    </div>
  </transition>

</template>
<script>
export default {
  name: 'vc-backtop',
  props: {
    // 滚动容器，默认为父组件$el
    target: {
      validator (node) {
        return !node || node.addEventListener
      }
    },
    // 滚动多少距离开始显示组件
    offset: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      visible: false, // 是否可见
      container: null // 滚动容器
    }
  },
  watch: {
    // 监听target变化
    target () {
      this.bindContainer()
    }
  },
  mounted () {
    this.bindContainer()
  },
  beforeDestroy () {
    this.unbindListener()
  },
  methods: {
    // 设置滚动容器
    bindContainer () {
      if (this.container) {
        this.unbindListener()
      }
      this.container = this.target || this.$parent.$el
      this.bindListener()
    },
    // 监听
    bindListener () {
      this.container.addEventListener('scroll', this.handleScroll)
    },
    // 取消监听
    unbindListener () {
      if (this.container) {
        this.container.removeEventListener('scroll', this.handleScroll)
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
