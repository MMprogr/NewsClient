import Vue from 'vue'

import router from './router/index'
import logo from './components/Logo.vue'


Vue.component('logo', logo)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  mounted () {
  }
})
