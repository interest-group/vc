const requireRouter = require.context('../docs/guide', true, /\.md$/)

export default requireRouter.keys().map(requireName => {
  const fileName = requireName.replace(/(^\.\/)|(\.md)/ig, '')
  const name = fileName.replace(/^\d/ig, '')
  return {
    meta: {
      name
    },
    path: name,
    name: name,
    component: (resolve) => require([`../docs/guide/${fileName}.md`], resolve)
  }
})
