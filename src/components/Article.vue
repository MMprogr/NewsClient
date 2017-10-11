<template>
  <div class="article">
    <h1>{{id}}</h1>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'

  export default {
  name: 'article',
  data(){
    return{
      id: location.pathname.split('/')[2]
    }
  },
}
</script>

<style scoped>

</style>
