<template>
  <li
    class="vc-menu__item"
    :class="{
      'is-router': rootMenu.router,
      'is-active': active,
      'is-disabled': disabled
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
    disabled: Boolean,
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
      if (this.disabled) return
      if (this.rootMenu.router && !this.rootMenu.equalCurrentRoute(this)) this.$router.push(this.route)
      EventBus.$emit('menu-item-click', this)
    },
    onMouseEnter () {
      if (this.disabled) return
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
