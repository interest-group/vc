import Vue from 'vue'
import App from './App.vue'
import router from './router'
import examples from './component'

import VC from '../src'
import DemoBlock from '../md/demo-block'

import '../src/styles/index.scss'
import '../md/styles/index.scss'
import './docs-styles/index.scss'

Vue.use(examples)
Vue.use(VC)
Vue.use(DemoBlock)

Vue.config.productionTip = false
Vue.prototype.$example = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
