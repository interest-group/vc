<template>
  <div class="vc-menu__wrapper" :style="{ backgroundColor: this.backgroundColor }">
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
    router: {
      type: Boolean,
      default: false
    },
    defaultActiveName: {
      type: String,
      default: ''
    },
    defaultOpenedMenus: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
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
      activeItemName: String(this.defaultActiveName),
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
    },
    defaultActiveName (value) {
      this.activeItemName = String(value)
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
  mounted () {
    this.initActiveMenItem()
  },
  methods: {
    initActiveMenItem () {
      if (!this.router && !this.activeItemName) return

      if (this.router && this.activeItemName) {
        !this.equalCurrentRoute(this.menuItems[this.activeItemName]) && this.$router.push(this.menuItems[this.activeItemName].route)
      }

      if (this.router && !this.activeItemName) {
        this.activeItemName = this.getActiveItemName() || ''
      }

      if (this.activeItemName) {
        this.menuItems[this.activeItemName].openParentSubMenus()
      }
    },
    equalCurrentRoute (menuItem) {
      if (
        typeof menuItem.route === 'string' && menuItem.route === this.$route.path
      ) {
        return menuItem.name
      }

      if (
        typeof menuItem.route === 'object' &&
        (menuItem.route.path === this.$route.path || menuItem.route.name === this.$route.name)
      ) {
        return menuItem.name
      }

      return false
    },
    getActiveItemName () {
      const menuItems = this.menuItems
      for (let key in menuItems) {
        let name = this.equalCurrentRoute(menuItems[key])
        if (name) {
          return name
        }
      }
    },
    checkMenuItemRoute (menuItem) {
      return (typeof menuItem.route === 'string' && menuItem.route) || (typeof menuItem.route === 'object' && menuItem.route.path)
    },
    getMenuItems (menuItem) {
      // if (this.router && !this.checkMenuItemRoute(menuItem)) {
      //   throw new Error('当开启<vc-menu-item> 组件开启 router 属性，<vc-menu-item> 组件必须添加 route 属性')
      // }
      this.$set(this.menuItems, menuItem.name, menuItem)
    },
    onMenuItemClick (menuItem) {
      this.$set(this, 'activeItemName', menuItem.name)
      this.$set(this.menuItems, menuItem.name, menuItem)
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
