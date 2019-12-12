<template>
  <li class="vc-sub-menu">
    <div class="vc-sub-menu__title" @click="onClick">
      <template v-if="title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <vc-slide-down v-model="isShow">
      <ul><slot></slot></ul>
    </vc-slide-down>
  </li>
</template>

<script>
import SlideDown from '../slide-down'
import EventBus from './event-bus'
import mixin from './mixin'
export default {
  name: 'vc-sub-menu',
  components: {
    [SlideDown.name]: SlideDown
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
      childSubMenus: {}
    }
  },
  computed: {
    isShow () {
      return this.rootMenu.openedMenus.indexOf(this.name) > -1 || this.rootMenu.openedMenus.indexOf(Number(this.name)) > -1
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
    addChildSubMenu (subMenu) {
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    }
  }
}
</script>
