<template>
  <li
    class="vc-menu__item"
    :class="{
      'is-router': menu.router,
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
  inject: ['menu'],
  props: {
    route: Object
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    activeStyle () {
      if (this.active) {
        return { color: this.menu.activeTextColor }
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
      if (this.menu.router) this.$router.push(this.route)
      EventBus.$emit('menu-item-click', this)
    },
    onMouseEnter () {
      this.$el.style.backgroundColor = this.menu.activeBackgroundColor
    },
    onMouseLeave () {
      this.$el.style.backgroundColor = ''
    }
  }
}
</script>
