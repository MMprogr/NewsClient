import Vue from 'vue'

import router from './router/index'
import navbar from './components/Navbar.vue'
import newsbar from './components/Newsbar.vue'

Vue.component('navbar', navbar)
Vue.component('newsbar', newsbar)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  mounted () {
  }
})
