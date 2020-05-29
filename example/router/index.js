import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home'
import component from '../pages/component'
import notFound from '../pages/404'
import develop from '../pages/develop'
// import guide from './guide'
// import components from './components'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/guide',
      name: 'guide',
      component: component,
      children: []
    },
    {
      path: '/component',
      name: 'component-page',
      component: component,
      children: []
    },
    {
      path: '/develop',
      name: 'develop',
      component: develop
    },
    {
      path: '*',
      name: 'not-found',
      component: notFound
    }
  ]
})
