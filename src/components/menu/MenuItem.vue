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
  inject: ['rootMenu'],
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
    }
  }
}
</script>
