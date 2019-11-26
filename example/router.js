import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []
const requireRouter = require.context('./pages', true, /\.vue$/)

requireRouter.keys().forEach(fileName => {
  const name = fileName.match(/(?<=(\/))\w+(?=\.vue)/)[0]
  const route = {
    path: `/${name}`,
    component: (resolve) => require([`./pages/${name}.vue`], resolve)
  }

  routes.push(route)
})

const router = new VueRouter({
  routes
})

export default router