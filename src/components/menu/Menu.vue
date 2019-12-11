<template>
  <ul :class="classes"><slot></slot></ul>
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
      activeName: this.value,
      openedNames: []
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
    openNames (names) {
      this.openedNames = names
    },
    /** 内部属性 **/
    activeName () {
      this.updateActiveName()
    },
    openedNames () {
      this.updateOpenedNames()
    }
  },
  mounted () {
    this.$on('menu-item-active', this.changeActive)
    this.$on('sub-menu-active', this.changeOpened)
    this.openedNames = [...this.openNames]
    this.updateActiveName()
  },
  methods: {
    // 切换激活菜单
    changeActive (name) {
      this.activeName = name
      this.$emit('input', name)
      this.$emit('change', name)
    },
    // 切换展开子菜单
    changeOpened (name, active) {
      if (active && this.accordion) {
        this.openedNames = [name]
      } else if (active) {
        this.openedNames.push(name)
      } else {
        this.openedNames = this.openedNames.filter(item => item !== name)
      }
      this.$emit('open-change', this.openedNames)
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
