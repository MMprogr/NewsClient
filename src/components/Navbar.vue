<template>
  <div id="navbar">
    <div id="logo" class="font-largest">
      WIADOMOŚCI / LOGO
    </div>
    <div>
      <form action="">
        <input type="text" placeholder="Szukaj w serwisie" class="search" >
        <button type="submit" class="search-button">
            <img src="../../src/assets/img/magnify-black.png" class="btn-black" width="39" height="39" alt="submit" />
            <img src="../../src/assets/img/magnify-white.png" class="btn-white" width="39" height="39" alt="submit" />
        </button>
      </form>
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

  .search-button{
    border: 0;
    background: transparent;
    float: right;
    height: 39px;
    width: 39px;
    padding: 6px;
    margin: 0;
    border-radius: 90px;
    margin-right: 5px;
    outline: none;
  }

  .btn-black{
    display: none;
  }

  .search-button:hover{
    transition: 0.2s;
    background: rgba(255, 255, 255, 0.15);
  }

  .search-button:hover .btn-white{
    display: none;
  }
 
  .search-button:hover .btn-black{
    display: block;
  }

  .search{
    float: right;
    height: 39px;
    width: 250px;
    padding: 10px;
    margin-right: 20%;
    background-color: #00346A;
    border: none;
    border-radius: 5px;
    color: gray;
    outline: none;
  }

  .search:focus{
    color: #E0E0E0;
  }

  .search:focus::-webkit-input-placeholder{
    color: #C7C7C7;
    transition: 0.1s;
  }

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
