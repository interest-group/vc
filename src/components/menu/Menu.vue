<template>
  <div class="vc-menu__wrapper">
    <ul class="vc-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import EventBus from './event-bus'
import mixin from './mixin'
export default {
  name: 'vc-menu',
  props: {
    router: Boolean,
    defaultOpenedMenus: Array,
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
    },
    closeChild: Boolean,
    unique: Boolean
  },
  mixins: [mixin],
  data () {
    return {
      // 存放menuItem组件实例
      menuItems: {},
      // 存放subMenu组件实例
      subMenus: {},
      // 存放最靠近的子级subMenu实例
      childSubMenus: {},
      // 存放打开menu，值为menu的name值
      openedMenus: this.defaultOpenedMenus.map(name => String(name))
    }
  },
  computed: {
    isRootMenu: {
      get: () => {
        return true
      },
      set: () => {
        throw new Error('内置属性，不允许修改')
      }
    }
  },
  watch: {
    defaultOpenedMenus (value) {
      this.openedMenu = value.map(name => String(name))
    }
  },
  provide () {
    return {
      rootMenu: this,
      parentMenu: this
    }
  },
  created () {
    EventBus.$on('menu-item-created', this.getMenuItems)
    EventBus.$on('sub-menu-created', this.getSubMenus)
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
    },
    getSubMenus (subMenu) {
      this.$set(this.subMenus, subMenu.name, subMenu)
      this.$set(this, 'openedMenus', this.defaultOpenedMenus.map(name => String(name)))
    },
    addChildSubMenu (subMenu) {
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    }
  }
}
</script>
