<template>
  <div id="navbar">
    <div id="logo" class="font-largest">
      WIADOMOŚCI / LOGO
    </div>
    <div id="menu">
      <ul>
        <li>Opcja</li>
        <li>Opcja</li>
        <li>Opcja</li>
        <li>Opcja</li>
        <li>Opcja</li>
        <li>Opcja</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { auth } from '../auth.js'

  export default {
    name: 'navbar',
    data() {
      return {
      }
    },
    methods: {
      login() {
        auth.login(this.credentials)
      }
    }
  }
</script>

<style scoped>
  #navbar{
    background-color: #00264d;
    color: #F8F3F3;
    width: 100vw;
    height: 39px;
  }

  #logo{
    float: right;
    padding: 3px;
    margin-right: 50px;
  }

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 6px;
    margin-left: 7%;
  }

  li{
    padding: 0px 10px;
  }

  li:hover{
    color: #3882D4;
    cursor: pointer;
  }

</style>
