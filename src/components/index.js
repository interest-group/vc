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
      Vue.component(`vc-${key}`, components[key])
    }
  }
}



