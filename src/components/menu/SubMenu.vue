<template>
  <li
    class="vc-sub-menu"
    :class="{
      'is-opened': isShow
    }">
    <div
      class="vc-sub-menu__title"
      @click="onClick"
      :style="{...titleHoverStyle}"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave">
      <template v-if="title">{{title}}</template>
      <slot v-else name="title"></slot>
      <vc-icon name="arrow-right2"></vc-icon>
    </div>
    <vc-slide-down v-model="isShow">
      <ul><slot></slot></ul>
    </vc-slide-down>
  </li>
</template>

<script>
import Icon from '../icon'
import SlideDown from '../slide-down'
import EventBus from './event-bus'
import mixin from './mixin'
export default {
  name: 'vc-sub-menu',
  components: {
    [SlideDown.name]: SlideDown,
    [Icon.name]: Icon
  },
  props: {
    title: String,
    name: {
      type: [Number, String],
      required: true
    }
  },
  inject: ['rootMenu', 'parentMenu'],
  provide () {
    return {
      parentMenu: this
    }
  },
  mixins: [mixin],
  data () {
    return {
      childSubMenus: {},
      isHover: false
    }
  },
  computed: {
    isShow () {
      return this.rootMenu.openedMenus.indexOf(this.name) > -1 || this.rootMenu.openedMenus.indexOf(Number(this.name)) > -1
    },
    titleHoverStyle () {
      if (this.isHover) {
        return { backgroundColor: this.rootMenu.activeBackgroundColor }
      } else {
        return {}
      }
    }
  },
  created () {
    EventBus.$emit('sub-menu-created', this)
    this.parentMenu.addChildSubMenu(this)
  },
  methods: {
    onClick () {
      this.parentMenu.toggleChildSubMenu(this)
    },
    onMouseEnter () {
      this.isHover = true
    },
    onMouseLeave () {
      this.isHover = false
    },
    addChildSubMenu (subMenu) {
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    }
  }
}
</script>
