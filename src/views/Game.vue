<template>
  <div class="home">
    <Gallows/>
    <Frase frase="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Frase from '@/components/Frase.vue'
import Gallows from '@/components/Gallows.vue'
export default {
  name: 'home',
  components: {
    Frase,
    Gallows
  }
}
</script>
<style lang="css">
  .gallows{
    margin: 0 auto;
    width: 300px;
  }

  .frase{
    margin: 40px auto 0px auto;
  }
</style>
