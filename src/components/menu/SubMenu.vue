<template>
  <li :class="classes">
    <div class="vc-sub-menu-title" @click="handleClick">
      <slot name="title">{{title}}</slot>
      <Icon class="vc-sub-menu-icon" name="arrow-down2"></Icon>
    </div>
    <SlideDown v-model="active"><slot></slot></SlideDown>
  </li>
</template>

<script>
import Icon from '../icon'
import SlideDown from '../slide-down'
import emitter from '../../mixins/emitter'
export default {
  name: 'vc-sub-menu',
  mixins: [emitter],
  components: { SlideDown, Icon },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return [
        'vc-sub-menu',
        {
          'vc-sub-menu-active': this.active,
          'vc-sub-menu-disabled': this.disabled
        }
      ]
    }
  },
  mounted () {
    this.$on('update-active', this.handleUpdateActive)
    this.$on('sub-menu-active', this.handleUpdateOpened)
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.active = !this.active
      if (this.active) {
        // 通知父组件激活
        this.bubbling(['vc-menu', 'vc-sub-menu'], false, 'sub-menu-active', this.name)
      } else {
        // 关闭所有子嵌套组件
        this.broadcast('vc-sub-menu', true, 'update-active', [])
      }
    },
    // 检查是否保持激活
    handleUpdateActive (names) {
      this.active = names.includes(this.name)
    },
    handleUpdateOpened (name) {
      const [parent] = this.findParentComponents('vc-menu')
      if (parent && parent.accordion) {
        // 手风琴模式关闭其他子组件
        this.broadcast('vc-sub-menu', false, 'update-active', [name])
      }
    }
  }
}
</script>
