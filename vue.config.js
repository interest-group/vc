const path = require('path')
const configs = require('./md')

module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: 'error',
  chainWebpack: config => {
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
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `@import "./src/styles/aa.scss";`
  //     }
  //   }
  // },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
