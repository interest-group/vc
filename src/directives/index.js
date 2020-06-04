const files = require.context('../directives/', true, /\w+\/index\.js/)

export default {
  install: (Vue) => {
    files.keys().forEach(fileName => {
      // 获取文件夹名称
      const name = fileName.replace(/(^\.\/)|(\/index\.js)/ig, '')
      // 注册
      Vue.directive(name, require(`${fileName}`).default)
    })
  }
}
