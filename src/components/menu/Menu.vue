<template>
  <ul :class="classes"><slot></slot></ul>
</template>
<script>
import { oneOf } from '../../utils/assist'
import emitter from '../../mixins/emitter'
export default {
  name: 'vc-menu',
  mixins: [emitter],
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      },
      default: 'vertical'
    },
    theme: {
      validator (value) {
        return oneOf(value, ['light', 'dark'])
      },
      default: 'light'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    openNames: {
      type: Array,
      default () {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeName: this.value
    }
  },
  computed: {
    classes () {
      return [
        'vc-menu',
        `vc-menu-${this.mode}`,
        `vc-menu-${this.theme}`
      ]
    }
  },
  watch: {
    /** 外部属性 **/
    value (value) {
      if (value !== this.activeName) {
        this.activeName = value
      }
    },
    /** 内部属性 **/
    activeName () {
      this.broadcastActive()
    }
  },
  mounted () {
    this.$on('menu-item-active', this.handleUpdateActive)
    this.$on('sub-menu-active', this.handleUpdateOpened)
    this.broadcastActive()
    // 所有子组件初始化激活状态
    this.broadcast('vc-sub-menu', true, 'update-active', this.openNames)
  },
  methods: {
    // 切换激活菜单
    handleUpdateActive (name) {
      this.activeName = name
      this.$emit('input', name)
      this.$emit('change', name)
    },
    // 激活子组件
    handleUpdateOpened (name) {
      // 手风琴模式关闭其他子组件
      if (this.accordion) {
        this.broadcast('vc-sub-menu', false, 'update-active', [name])
      }
    },
    broadcastActive () {
      this.broadcast('vc-menu-item', true, 'update-active', this.activeName)
    }
  }
}
</script>
