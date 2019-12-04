import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home'

Vue.use(VueRouter)

const pagesRoutes = [
  {
    path: '/',
    component: home
  }
]

export const componentRoutes = []

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
  componentRoutes.push(route)
})

const router = new VueRouter({
  routes: [ ...pagesRoutes, ...componentRoutes ]
})

export default router
