<template>
  <div class="home">
    <ModalAsk ref= "modalAskRef"/>
    <Gallows ref = "gallowsRef" />
    <Frase ref = "fraseRef" :frase = "frase" />
    <div class="guess">
      <form class="guess__form" @submit.prevent="submitLetter" action="">
        <label class = "guess__field">
          <div class="guess__hint">Guess letter: </div>
          <input
            @focus.once = "removePlaceholder"
            :placeholder="guess__text__placeholder ? 'E' : ''"
            maxlength = "1"
            ref = "guess__text"
            class = "guess__text"
            type="text"/>
        </label>
        <button class ="guess__submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Frase from '@/components/Frase.vue'
import Gallows from '@/components/Gallows.vue'
import ModalAsk from '@/components/ModalAsk.vue'
import { EventBus } from '@/main.js'

export default {
  name: 'home',
  components: {
    Frase,
    Gallows,
    ModalAsk
  },
  data: function () {
    return {
      guess__text__placeholder: true,
      frase: ''
    }
  },
  mounted: function () {
    this.$refs['modalAskRef'].show('Enter the frase', 'setFrase')
  },
  created: function () {
    EventBus.$on('setFrase', (frase) => {
      this.$refs['modalAskRef'].hide()
      console.log(frase)
      this.frase = frase
    })
  },
  methods: {
    removePlaceholder: function () {
      this.guess__text__placeholder = false
    },
    submitLetter: function () {
      let letterToAdd = this.$refs.guess__text.value
      this.$refs.fraseRef.addLetter(letterToAdd)
      this.$refs.guess__text.value = ''
    }
  }
}
</script>
<style lang="css">
  .gallows{
    margin: 0 auto;
    width: 300px;
  }

  .guess{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }

  .guess__form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .guess__submit{
    width: 10em;
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    border: 1px solid #000;
    padding: 10px 0;
  }

  .theme_dark .guess__submit{
    background-color: var(--background_theme_dark);
    color: var(--fontColor_theme_dark);
    border-color: var(--background_theme_light);
  }

  .guess__field{
    align-items: center;
    display: flex;
    margin-bottom: 15px;
  }

  .guess__hint{
    font-size: 1.5em;
  }

  .guess__text{
    display: block;
    font-size: 2em;
    width: 1.5em;
    text-align: center;
    height: 2em;
    margin-left: 0.4em;
    border: 1px solid #000;
    text-transform: uppercase;

  }

  .theme_dark .guess__text{
    background-color: var(--background_theme_dark);
    color: var(--fontColor_theme_dark);
    border-color: var(--background_theme_light) ;
  }

  .frase{
    margin: 40px auto 0px auto;
  }
</style>
