import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VC from '../src'
import './assets/md.scss'
import '../src/styles/index.scss'
import './demo-styles/index.scss'
import demoBlock from './components/demo-block'

Vue.use(VC)
Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false
Vue.prototype.$example = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
