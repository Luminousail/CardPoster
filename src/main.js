import Vue from 'vue'
import App from './App.vue'

import './plugins/element.js'
import router from './router'
// import store from './store'
import store from './vuex/store'
import "@/common/font/font.css"



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
