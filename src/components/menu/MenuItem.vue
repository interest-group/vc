<template>
  <li
    class="vc-menu__item"
    :class="{
      'is-router': rootMenu.router,
      'is-active': active
    }"
    :style="{ ...activeStyle }"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
    <span><slot></slot></span>
  </li>
</template>

<script>
import EventBus from './event-bus'
export default {
  name: 'vc-menu-item',
  inject: ['rootMenu', 'parentMenu'],
  props: {
    route: [Object, String],
    name: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    active () {
      return this.name === this.rootMenu.activeItemName
    },
    activeStyle () {
      if (this.active) {
        return { color: this.rootMenu.activeTextColor }
      } else {
        return {}
      }
    }
  },
  created () {
    EventBus.$emit('menu-item-created', this)
  },
  methods: {
    onClick () {
      if (this.rootMenu.router) this.$router.push(this.route)
      EventBus.$emit('menu-item-click', this)
    },
    onMouseEnter () {
      this.$el.style.backgroundColor = this.rootMenu.activeBackgroundColor
    },
    onMouseLeave () {
      this.$el.style.backgroundColor = ''
    },
    getParentSubMenuNames (parentMenu) {
      let names = [parentMenu.name]
      if (parentMenu.parentMenu && parentMenu.parentMenu.name && !parentMenu.isRootMenu) {
        parentMenu = parentMenu.parentMenu
        names = names.concat(this.getParentSubMenuNames(parentMenu))
      }
      return names
    },
    openParentSubMenus () {
      if (!this.parentMenu || !this.parentMenu.name) return
      let names = this.getParentSubMenuNames(this.parentMenu)
      this.$set(this.rootMenu, 'openedNames', names)
    }
  }
}
</script>
