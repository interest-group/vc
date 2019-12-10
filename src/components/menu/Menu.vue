<template>
  <ul class="vc-menu">
    <slot></slot>
  </ul>
</template>
<script>
import { oneOf, broadcast } from '../../utils/assist'
export default {
  name: 'vc-menu',
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      },
      default: 'vertical'
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
      activeName: this.value,
      openedNames: []
    }
  },
  watch: {
    /** 外部属性 **/
    value (value) {
      if (value !== this.activeName) {
        this.activeName = value
      }
    },
    openNames (names) {
      this.openedNames = names
    },
    /** 内部属性 **/
    activeName () {
      this.updateActiveName()
    },
    openedNames (names) {
      if (this.accordion && names.length > 1) {
        this.openedNames = [names[0]]
      } else {
        this.updateOpenedNames()
      }
    }
  },
  mounted () {
    this.openedNames = [...this.openNames]
    this.$on('menu-item-active', this.changeActive)
    this.$on('sub-menu-active', this.changeOpened)
  },
  methods: {
    changeActive (name) {
      this.activeName = name
      this.$emit('input', name)
    },
    changeOpened (name) {
      this.openedNames.unshift(name)
    },
    updateActiveName () {
      broadcast(this, 'vc-menu-item', 'update-active', this.activeName)
    },
    updateOpenedNames () {
      broadcast(this, 'vc-sub-menu', 'update-active', this.openedNames)
    }
  }
}
</script>
