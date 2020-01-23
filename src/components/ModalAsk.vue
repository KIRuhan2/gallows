<template>
  <div ref = "modalAskRef" class="modalAsk">
    <div ref = "askRef" class="ask">
        <form class = "ask__form" @submit.prevent = "submitAnswer" action="">
            <label for="" class="ask_field">
                <div class="ask__text">{{message}}</div>
                <input ref = "ask__inputRef" class = "ask__input" type="text"/>
                <button class = "ask__submit">Submit</button>
            </label>
        </form>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
export default {
  name: 'ModalAsk',
  data: function () {
    return {
      actionToCall: '',
      message: ''
    }
  },
  methods: {
    submitAnswer: function () {
      if (!this.actionToCall) { return }
      let answer = this.$refs['ask__inputRef'].value
      EventBus.$emit(this.actionToCall, answer)
    },
    show: function (message, actionToCall) {
      this.message = message
      this.actionToCall = actionToCall
      this.$refs['modalAskRef'].style.display = 'flex'
      this.$refs['askRef'].style.transform = 'translate(0, 0)'
    },
    hide: function () {
      this.$refs['askRef'].style.transform = 'translate(0, -600px)'
      this.$refs['modalAskRef'].style.display = 'none'
    }
  }
}
</script>

<style scoped>

.modalAsk{
    background-color: rgba(39, 39, 39, 0.8);
    position: fixed;
    overflow: hidden;
    display: none;
    flex-direction: column;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
}

.ask{
    transition: .3s;
    transform: translate(0, -600px);
    margin: 30px auto;
    padding: 20px;
    background-color: var(--background_theme_light);
    border-radius: 20px;
    border: 2px solid var(--background_theme_dark);
    min-width: 250px;
    max-width: 90%;
}

.ask_field{
    display: block;
}

input, button{
    display: block;
}

.ask__submit{
    padding: 5px 10px;
    font-size: 18px;
    border: 1px solid var(--background_theme_light);
}

.theme_dark .ask__submit{
    color: var(--fontColor_theme_dark);
    background-color: var(--background_theme_dark);
}

.ask__text{
    text-align: left;
    font-size: 1.5em;
    margin-bottom: 10px;
}

.ask__input{
    background-color:  var(--background_theme_dark);
    height:1.5em;
    font-size: 18px;
    padding-left: 0.3em;
    border: 1px solid var(--background_theme_light);
    margin-bottom: 1em;
}

.theme_dark .ask{
    color: var(--fontColor_theme_dark);
    background-color: var(--background_theme_dark);
    border-color: var(--background_theme_light);
}

.theme_dark .ask__input{
    color: var(--fontColor_theme_dark);
}

.ask, .ask__form{
    min-height: 100px;
}

</style>
