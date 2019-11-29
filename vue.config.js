const path = require('path')
const configs = require('./md')

module.exports = {
  lintOnSave: false, // 'error',
  chainWebpack: config => {
    config.entryPoints
      .get('app')
      .clear()
      .add(path.resolve(__dirname, 'example/main.js'))
    config.resolve.alias
      .delete('@')
      .set('@', path.resolve(__dirname, 'example'))
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        ...configs
      })
  }
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }
}
