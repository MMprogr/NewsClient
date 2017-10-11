<template>
  <div id="login">
    <h2>{{title}}</h2>
    <form @submit.prevent="login()">
      <input type="text" placeholder="nick" v-model="credentials.username">
      <input type="password" placeholder="password" v-model="credentials.password">
      <input value="LOGIN"  type="submit">
    </form>
  </div>
</template>

<script>
  import {auth} from '../auth.js'

  export default {
    name: 'login',
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        title: 'To jest Login.Vue'
      }
    },
    methods: {
      login() {
        auth.login(this.credentials)
      }
    }
  }
</script>

<style>
</style>
