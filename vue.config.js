// vue.config.js
const path = require('path')

module.exports = {
  lintOnSave: 'error',
  chainWebpack: config => {
    config.entryPoints
      .get('app')
      .clear()
      .add(path.resolve(__dirname, 'example/main.js'))
    config.resolve.alias
      .delete('@')
      .set('@', path.resolve(__dirname, 'example'))
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
