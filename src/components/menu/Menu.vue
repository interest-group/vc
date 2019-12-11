<template>
  <div class="vc-menu__wrapper">
    <ul class="vc-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import EventBus from './event-bus'
export default {
  name: 'vc-menu',
  props: {
    router: Boolean,
    textColor: {
      type: String,
      default: '#353c42'
    },
    activeTextColor: {
      type: String,
      default: '#5575c8'
    },
    activeBackgroundColor: {
      type: String,
      default: '#f9f9fb'
    }
  },
  data () {
    return {
      // 存放menuItem组件实例
      menuItems: {}
    }
  },
  provide () {
    return {
      menu: this
    }
  },
  created () {
    EventBus.$on('menu-item-created', this.getMenuItems)
    EventBus.$on('menu-item-click', this.onMenuItemClick)
  },
  methods: {
    getMenuItems (menuItem) {
      this.$set(this.menuItems, menuItem._uid, menuItem)
    },
    onMenuItemClick (menuItem) {
      for (let key in this.menuItems) {
        this.menuItems[key].active = false
      }
      menuItem.active = true
      this.$set(this.menuItems, menuItem._uid, menuItem)
    }
  }
}
</script>
