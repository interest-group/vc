import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VC from '../src'
import DemoBlock from './demo-block'
import './assets/md.scss'
import '../src/styles/index.scss'
import './demo-styles/index.scss'

Vue.use(VC)
Vue.use(DemoBlock)

Vue.config.productionTip = false
Vue.prototype.$example = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
