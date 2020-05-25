const requireRouter = require.context('../docs/components', true, /\.md$/)

export default requireRouter.keys().map(requireName => {
  // 获取文件路径
  const fileName = requireName.replace(/(^\.\/)|(\.md)/ig, '')
  // 分割文件字符串
  const [module, mdName] = fileName.split('/')
  // 得到md名
  const name = mdName.replace(/[\W\s]+/, '').toLowerCase()
  return {
    meta: {
      name: mdName,
      module
    },
    path: name,
    name: name,
    component: (resolve) => require([`../docs/components/${fileName}.md`], resolve)
  }
})
