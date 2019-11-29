import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = []
const requireRouter = require.context('./docs', true, /\.md$/)

requireRouter.keys().forEach(fileName => {
  const name = fileName.match(/(?<=(\/)).*(?=\.md)/)[0]
  const route = {
    meta: {
      name
    },
    path: `/${name}`,
    component: (resolve) => require([`./docs/${name}.md`], resolve)
  }
  routes.push(route)
})

const router = new VueRouter({
  routes
})

export default router
