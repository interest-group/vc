import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VC from '../src'
import '../src/styles/index.scss'

import DemoBlock from '../md/demo-block'
import '../md/styles/md.scss'
import './docs-styles/index.scss'

Vue.use(VC)
Vue.use(DemoBlock)

Vue.config.productionTip = false
Vue.prototype.$example = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
