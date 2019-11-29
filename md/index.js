const utils = require('./utils')

module.exports = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

    // ```code`` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function(...args){
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [require('markdown-it-container'), 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return `<vc-demo-block><div slot="source">${tokens[idx + 1].content}</div><div slot="highlight">`
        } else {
          return '</div></vc-demo-block>\n'
        }
      }
    }],
    [require('markdown-it-container'), 'tip'],
    /* or */
    [require('markdown-it-container'), 'warning']
  ]
}
