import Vue from 'vue'
import App from './App.vue'
import VC from '../src'
import '../src/styles/index.scss'

Vue.use(VC)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
