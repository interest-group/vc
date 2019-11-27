const requireComponents = require.context('../components', true, /\w+\/index\.js/)

const components = {}

requireComponents.keys().forEach(fileName => {
  const name = fileName.match(/(?<=(\/))\w+(?=\/index\.js)/)[0]
  const component = require(`${fileName}`).default

  components[name] = component
})

export default {
  install: (Vue) => {
    for (let key in components) {
      if (!components[key].name) {
        throw new Error('组件必须添加"name"属性，格式为："vc-{组件名称}"')
      }
      Vue.component(components[key].name, components[key])
    }
  }
}
