const requireComponents = require.context('../components', true, /\w+\/index\.js/)

let list = []

requireComponents.keys().forEach(fileName => {
  const component = require(`${fileName}`).default
  list = list.concat(component)
})

export default {
  install: (Vue) => {
    for (let key of list) {
      if (!new RegExp('^vc-.*$').test(key.name)) {
        throw new Error(`组件必须添加"name"属性，格式为："vc-{组件名称}, 错误组件为${key.name}`)
      }
      Vue.component(key.name, key)
    }
  }
}
