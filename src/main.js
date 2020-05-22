import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

// import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/permission' // permission control

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
