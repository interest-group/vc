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
    openNames: Array,
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
    unique: Boolean
  },
  data () {
    return {
      // 存放menuItem组件实例
      menuItems: {},
      // 存放subMenu组件实例
      subMenus: {},
      // 存放最靠近的子级subMenu实例
      childSubMenus: {}
    }
  },
  computed: {
    closeNames () {
      const subMenuNames = Object.keys(this.subMenus)
      const openNames = new Set(this.openNames)
      const closeNames = [...subMenuNames].filter(openName => !openNames.has(openName) && !openNames.has(Number(openName)))
      return closeNames
    }
  },
  watch: {
    openNames (value) {
      this.openSubMenus(value)
    }
  },
  provide () {
    return {
      menu: this,
      subMenu: this
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
      this.openSubMenus()
    },
    addChildSubMenu (subMenu) {
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    },
    toggleChildSubMenu (subMenu) {
      // 关闭同级的subMenu
      if (this.unique && !subMenu.isShow) {
        for (let key in this.childSubMenus) {
          this.childSubMenus[key].isShow = false
        }
      }

      subMenu.isShow = !subMenu.isShow
      this.$set(this.childSubMenus, subMenu.name, subMenu)
    },
    openSubMenus (openNames) {
      openNames = openNames || this.openNames

      openNames.forEach(name => {
        this.subMenus[name] && this.toggleSubMenu(this.subMenus[name], true)
      })

      this.closeNames.forEach(name => {
        this.subMenus[name] && this.toggleSubMenu(this.subMenus[name], false)
      })
    },
    toggleSubMenu (subMenu, status) {
      subMenu.isShow = status
      this.$set(this.subMenus, subMenu.name, subMenu)
    }
  }
}
</script>
