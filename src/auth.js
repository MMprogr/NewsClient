import Vue from 'Vue'

import Url from './Url.js'
import events from './events.js'
import route from './router/index'

import VueResource from 'vue-resource'

Vue.use(VueResource)

class Auth {
  login (credentials) {
    if (!this.checkAuth()) {
      Vue.http.post(Url.LOGIN_URL,
				credentials).then((response) => {
  this.token = response.headers.map.authorization
  localStorage.setItem('Authorization', this.token)
  events.$emit('logged', true)
  route.go('/')
  console.log(response)
}, response => {
  events.$emit('logged', false)
  console.log(response)
})
    } else {
      console.log('U can not login when u are logged in')
    }
  }

  logout () {
    if (this.checkAuth()) {
      localStorage.removeItem('Authorization')
      events.$emit('logout')
    } else {
      console.log('U can not logout when u are not logged in')
    }
  }

  checkAuth () {
    this.token = localStorage.getItem('Authorization')
    this.authorization = !!this.token
    return this.authorization
  }
}

export const auth = new Auth()
