<template>
 <div id="newsbar">
   <div id="bar" class="container-full animated">
     <div class="carousel">
       <div><img src='http://via.placeholder.com/1920x90' id="slider0" class="slider-element animated flash" alt=""></div>
       <div><img src='http://via.placeholder.com/1920x91' id="slider1" class="slider-element animated flash hidden" alt=""></div>
       <div><img src='http://via.placeholder.com/1920x92' id="slider2" class="slider-element animated flash hidden" alt=""></div>
     </div>
   </div>
 </div>
</template>

<script>
  export default{
    name: 'newsbar',
    created(){
     x();
    }
  }

  var x = function(){
    var i = 0;
    setInterval(function () {

      if(i == 2) i = 0;
      else i++;
      
      var sliderElements = document.getElementById('bar').querySelectorAll('.slider-element');
      sliderElements.forEach(function(element) {
        element.classList.add('hidden');
      }, this);

      var el = document.getElementById('slider' + i).classList.remove('hidden');
    }, 3000);
  }

</script>

<style scoped>
  .carousel{
    position: relative;
  }

  .carousel div{
    float: left;
  }

  .slider-element{
    position: absolute;
    top:0;
    left: 0;
  }

  .hidden{
    display: none;
  }

  #bar{
    height: 90px;

  }
</style>
