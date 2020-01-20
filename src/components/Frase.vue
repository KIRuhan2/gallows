<template>
  <div class = "frase">
    <div
      v-for="(word, i) in fraseArray"
      :key="i"
      class = "word"
    >
      <div
        v-for="(letter, y) in word"
        :key = y
        class = "letter"
      >{{letter}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phrase',
  props: {
    frase: String
  },
  computed: {
    fraseArray: function () {
      return this.frase.split(' ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frase{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 0.1rem;
  justify-content: center;
  /* margin: 0 auto; */
}

.word{
  display: flex;
  margin: 0 0.9em 1.4em 0.9em;
}

.letter{
  cursor: pointer;
  height: 1.2em;
  width: 1.2em;
  font-size: 2em;
  font-weight: 400;
  margin: 0 4px;
  border-bottom: 3px solid #000;
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
