<template>
  <div id="logo">
    <img
      src="https://vignette.wikia.nocookie.net/logopedia/images/6/6a/Java-logo.jpg/revision/latest/scale-to-width-down/640?cb=20150321072347">
    <br>
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script>
  import { auth } from '../auth.js'

  export default {
    name: 'login',
    data() {
      return {
        title: 'Ten napis i obrazek pochodzi z Logo.Vue'
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
