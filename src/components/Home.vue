<template>
  <div class="home">
    <div class="container-main offer-list">
      <div class="section-title">
        <h1>NAJNOWSZE WIADOMOŚCI</h1>
      </div>
      <router-link v-for="news of newsData" :to="{ path: 'article/' + news.id}">
      <a>
         <div class="offer">
            <div class="offer-main">
              <img class="offerImage" src="http://via.placeholder.com/320x150" alt="Badania neiniszczące">
              <div class="offer-icon">
                <img src="../assets/img/Dot64white.png" class="dead-center">
              </div>
            </div>
            <h3 class="offer-name">{{news.text}}</h3>
          </div>
          </a>
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return{
      newsData: [
      {
        id: 1,
        link: 'http://via.placeholder.com/320x150',
        text: 'Neque porro quisquam est qui dolorem ipsum quia '
      },
      {
        id: 2,
        link: 'http://via.placeholder.com/320x150',
        text: 'Nequee porro quisquam est qui dolorem ipsum quia '
      },
      {
        id: 3,
        link: 'http://via.placeholder.com/320x150',
        text: 'Nequeee porro quisquam est qui dolorem ipsum quia'
      }
    ]
    }
  }
}
</script>

<style scoped>
/* Styles */

.offer {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.offer-main {
  width: 320px;
  height: 150px;
  position: relative;
}

.offerImage {
  object-fit: cover;
  height: 150px;
  width: 100%;
}

.offer-icon {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 38, 77, 0.82);
  width: 100%;
  height: 100%;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -ms-transition: 0.2s;
}

.offer-icon img {
  width: 50px;
}

.offer-name {
  color: white;
  margin: 0;
  padding: 0;
  transition: 0.2s;
  position: absolute;
  bottom: -1px;
  left: 2px;
  text-transform: uppercase;
  -webkit-transition: 0.2s;
  -ms-transition: 0.2s;
  text-align: left;
}

.offer-list {
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
}


/* Hovers */

.offer:hover {
  cursor: pointer;
}

.offer:hover .offer-icon {
  opacity: 0;
  transition: 0.2s;
  transform: translate(250px, 50px);
  -webkit-transition: 0.2s;
  -ms-transition: 0.2s;
  -webkit-transform: translate(250px, 50px);
  -ms-transform: translate(250px, 50px);
}

.offer:hover .offer-name {
  transition: 0.2s;
  color: #001f3f;
  background-color: rgba(255, 255, 255, 0.4);
  bottom: 10px;
  left: 10px;
}
</style>
