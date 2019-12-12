export default {
  methods: {
    getClosedChildSubMenu (childSubMenus) {
      let closedNames = []
      // 递归关闭当前subMenu的子级subMenu
      if (Object.keys(childSubMenus).length) {
        for (let key in childSubMenus) {
          closedNames.push(key)

          if (childSubMenus[key].childSubMenus) {
            closedNames = closedNames.concat(this.getClosedChildSubMenu(childSubMenus[key].childSubMenus))
          }
        }
      }
      return closedNames
    },
    closeSubMenu (subMenu) {
      let self = this.isRootMenu ? this : this.rootMenu
      let openedMenus = new Set(self.openedMenus)

      openedMenus.delete(subMenu.name)
      // 关闭所有子级菜单
      if (this.closeChild && Object.keys(subMenu.childSubMenus).length) {
        const closedNames = this.getClosedChildSubMenu(subMenu.childSubMenus)

        for (let name of closedNames) {
          openedMenus.delete(name)
        }
      }
      this.$set(self, 'openedMenus', [...openedMenus])
    },
    openSubMenu (subMenu) {
      let self = this.isRootMenu ? this : this.rootMenu
      let childSubMenus = new Set(Object.keys(this.childSubMenus))
      let openedMenus = new Set(self.openedMenus)

      if (this.unique) {
        openedMenus = new Set([...openedMenus].filter(name => !childSubMenus.has(name)))
        openedMenus.add(subMenu.name)
      } else {
        openedMenus.add(subMenu.name)
      }
      this.$set(self, 'openedMenus', [...openedMenus])
    },
    toggleChildSubMenu (subMenu) {
      let self = this.isRootMenu ? this : this.rootMenu

      if (~self.openedMenus.indexOf(subMenu.name)) {
        this.closeSubMenu(subMenu)
      } else {
        this.openSubMenu(subMenu)
      }
    }
  }
}
