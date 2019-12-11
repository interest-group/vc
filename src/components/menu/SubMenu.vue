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
export default {
  name: 'vc-sub-menu',
  components: {
    [SlideDown.name]: SlideDown
  },
  props: {
    title: String,
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['subMenu'],
  provide () {
    return {
      subMenu: this
    }
  },
  data () {
    return {
      isShow: false,
      childSubMenus: {}
    }
  },
  created () {
    EventBus.$emit('sub-menu-created', this)
    this.subMenu.addChildSubMenu(this)
  },
  methods: {
    onClick () {
      this.subMenu.toggleChildSubMenu(this)
      this.$nextTick(() => {
        if (!this.isShow) {
          this.closeChildSubMen(this.childSubMenus)
        }
      })
    },
    closeChildSubMen (childSubMenus) {
      // 递归关闭当前subMenu的子级subMenu
      if (Object.keys(childSubMenus).length) {
        for (let key in childSubMenus) {
          childSubMenus[key].isShow = false

          if (childSubMenus[key].childSubMenus) {
            this.closeChildSubMen(childSubMenus[key].childSubMenus)
          }
        }
      }
    },
    addChildSubMenu (subMenu) {
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    },
    toggleChildSubMenu (subMenu) {
      if (this.unique && !subMenu.isShow) {
        for (let key in this.childSubMenus) {
          this.childSubMenus[key].isShow = false
        }
      }

      subMenu.isShow = !subMenu.isShow
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    }
  }
}
</script>
