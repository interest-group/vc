import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home'
import component from './pages/component'
import notFound from './pages/404'
import develop from './pages/develop'

Vue.use(VueRouter)

let pagesRoutes = [
  {
    path: '/',
    name: 'home-page',
    component: home
  },
  {
    path: '/component',
    name: 'component-page',
    component: component,
    children: []
  },
  {
    path: '/develop',
    name: 'develop-page',
    component: develop
  },
  {
    path: '*',
    name: 'not-found',
    component: notFound
  }
]

export const componentRoutes = pagesRoutes.find(route => route.name === 'component-page').children = []

const requireRouter = require.context('./docs', true, /\.md$/)

requireRouter.keys().forEach(requireName => {
  const fileName = requireName.match(/(?<=(\/)).*(?=\.md)/)[0]
  const eName = fileName.match(/\w+/)[0].toLowerCase()
  const route = {
    meta: {
      name: fileName
    },
    path: eName,
    name: eName,
    component: (resolve) => require([`./docs/${fileName}.md`], resolve)
  }
  componentRoutes.push(route)
})

const router = new VueRouter({
  routes: [ ...pagesRoutes ]
})

export default router
