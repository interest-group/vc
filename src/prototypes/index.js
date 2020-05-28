const files = require.context('../prototypes/', true, /\w+\/index\.js/)

export default {
  install (Vue, options = {}) {
    files.keys().forEach(fileName => {
      // 获取文件夹名称
      const name = fileName.replace(/(^\.\/)|(\/index\.js)/ig, '')
      // 注册
      Vue.prototype[`$${name}`] = require(`${fileName}`).default
    })
  }
}
