<template>
  <div class = "frase">
    <div
      v-for="(word, i) in fraseArray"
      :key = "i"
      class = "word"
    >
      <div
        v-for="(letter, y) in word"
        :key = "y"
        class = "letter"
      >{{lettersToShow.includes(letter) ? letter : ''}}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'

export default {
  name: 'Phrase',
  props: {
    hide: Boolean,
    frase: String
  },
  data: function () {
    return {
      lettersToShow: []
    }
  },
  methods: {
    addLetter (letter) {
      let formatLetter = letter[0]?.toUpperCase()
      let fraseLetters = this.fraseArray.join('').split('')
      if (formatLetter) {
        this.lettersToShow.push(formatLetter)
        if (!fraseLetters.includes(formatLetter)) {
          EventBus.$emit('gallowsStateIncrement')
        }
      }
    }
  },
  computed: {
    fraseArray: function () {
      return this.frase.toUpperCase().split(' ')
    },
    darkTheme: function () {
      return this.$store.state.darkTheme
    }
  }
}
</script>

<style scoped>
.frase{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  color : var(--fontColor_theme_light);
  flex-basis: 0.1rem;
  justify-content: center;
  /* margin: 0 auto; */
}

.theme_dark .frase{
  color: var(--fontColor_theme_dark);
}

.word{
  display: flex;
  margin: 0 0.9em 1.4em 0.9em;
}

.theme_dark .letter{
    border-bottom: 3px solid var(--gallowsColor_theme_dark);
}

.letter{
  cursor: pointer;
  height: 1.2em;
  width: 1.2em;
  font-size: 2em;
  font-weight: 400;
  margin: 0 4px;
  border-bottom: 3px solid var(--gallowsColor_theme_light);
  padding-bottom: 4px;
}

.letter:hover{
  background: #ededed;
  transition: .2s;
}

.letter__space{
  width: 1.5em;
  border: none;
}
</style>
