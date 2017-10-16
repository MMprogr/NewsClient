<template>
  <div class="article">
    <h1 class="title">STARY CHUJ OBRABOWAŁ BANK</h1>
    <article>
      <p>
        Książka jest wznowionym wydaniem "Filozofia Kaizen. Jak mały krok może zmienić Twoje życie". Nawet najdłuższa podróż zaczyna się od jednego kroku Pragniesz udoskonalić swoje życie, ale każda zmiana Cię paraliżuje? Nie masz siły ani czasu, by zadbać o polepszenie jakości własnych dni? Masz serce przepełnione marzeniami, lecz coś nie pozwala Ci w pełni ich zrealizować? Najwyższa pora poznać potęgę drobnych kroczków Idea jest prosta -- należy tak zmylić wrodzone opory przed przyjmowaniem nowego sposobu zachowania, by już zawsze móc cieszyć się osiągniętym sukcesem, a jednocześnie nie wywoływać w swoim życiu emocjonalnej rewolucji. Bez względu na to, czy chcesz rzucić palenie, pozbyć się zbędnych kilogramów, zadbać o rozwój kompetencji, czy stworzyć udany związek -- filozofia kaizen jest dla Ciebie. Ta mądrość rodem z Kraju Kwitnącej Wiśni niweluje ukryty w każdym z nas lęk, szczególnie zaś chemiczną reakcję "walki lub ucieczki" (leżącą u podstaw strachu przed zmianą). Autor nauczy Cię, jak: samodzielnie korzystać z mechanizmów działania kaizen, nastawić się wobec innowacji w taki sposób, by nie ulec strachowi, uczynić swoje życie bardziej efektywnym, zarówno w domu, jak i w pracy, polubić zmiany. "To pozycja o wielkiej sile przekonywania, opisująca bardzo spokojny i zrównoważony sposób radzenia sobie z codziennymi problemami. Po jej przeczytaniu nie sposób nie pozwolić sobie na oddech ulgi." dr Robert Maurer
      </p>
    </article>
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
 .title{
   margin: 20px;
   margin-right: 0;
   padding: 20px;
   font-size: 300%;
 }

  article{
    padding: 5%;
    max-width: 1000px;
    margin-right: 0;
  }

  p{
    font-size: 19px;
  }
</style>
