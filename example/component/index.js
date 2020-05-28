const requireComponents = require.context('./', true, /\.vue/)

let list = []

requireComponents.keys().forEach(fileName => {
  const component = require(`${fileName}`).default
  list = list.concat(component)
})

export default {
  install: (Vue) => {
    for (let key of list) {
      Vue.component(key.name, key)
    }
  }
}
