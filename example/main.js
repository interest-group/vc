import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VC from '../src'
import './assets/md.scss'
import '../src/styles/index.scss'
import './demo-styles/index.scss'

Vue.use(VC)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
