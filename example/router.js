import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './pages/home'
import component from './pages/component'
import notFound from './pages/404'

Vue.use(VueRouter)

const pagesRoutes = [
  {
    path: '/',
    name: 'home-page',
    component: home
  },
  {
    path: '/component',
    name: 'component-page',
    component: component,
    redirect: '/component/',
    children: []
  },
  {
    path: '*',
    name: 'not-found',
    component: notFound
  }
]

export const componentRoutes = pagesRoutes.find(route => route.name === 'component-page').children = []

const requireRouter = require.context('./docs', true, /\.md$/)

requireRouter.keys().forEach(fileName => {
  const name = fileName.match(/(?<=(\/)).*(?=\.md)/)[0]
  const route = {
    meta: {
      name
    },
    path: `${name.match(/\w+/)[0].toLowerCase()}`,
    name: name.match(/\w+/)[0].toLowerCase(),
    component: (resolve) => require([`./docs/${name}.md`], resolve)
  }
  componentRoutes.push(route)
})

const router = new VueRouter({
  routes: [ ...pagesRoutes ]
})

export default router
