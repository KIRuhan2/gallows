<template>
  <div id="app">
    <div id="nav">
      <router-link to="/game">Game</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button tabindex="0" @click = "switchTheme" class = "themeSwitcher">Make me {{ darkTheme ? "Light" : "Dark" }}</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    darkTheme: function () {
      return this.$store.state.darkTheme
    }
  },
  watch: {
    darkTheme: function (newValue, oldvalue) {
      if (newValue) {
        document.body.classList.add('theme_dark')
      } else {
        document.body.classList.remove('theme_dark')
      }
    }
  },
  beforeMount: function () {
    let preferDark = window.matchMedia('(prefers-color-scheme : dark)').matches
    if (preferDark) {
      this.$store.commit('setDarkTheme')
    } else {
      this.$store.commit('setLightTheme')
    }
  },
  methods: {
    switchTheme () {
      this.$store.commit('changeTheme')
    }
  }
}
</script>

<style>

:root{
  --background_theme_light : #fff;
  --background_theme_dark : #000;
  --gallowsColor_theme_dark : #fff;
  --gallowsColor_theme_light : #000;
  --fontColor_theme_dark : #fff;
  --fontColor_theme_light : #000;
}

* {
  /* transition: background-color 0.5s, fill 0.5s, stroke 0.5s; */
  margin: 0;
  padding: 0;
  border: 0;
}

.themeSwitcher{
  display: block;
  top: 2%;
  left: 2%;
  font-size: 1em;
  height: 3em;
  padding: 0 1em;
  background-color: var(--background_theme_light);
  border: 1px solid var(--background_theme_dark);
  position: fixed;
}

.theme_dark .themeSwitcher{
  background-color: var(--background_theme_dark);
  color: var(--fontColor_theme_dark);
  border-color: var(--background_theme_light);
}

.theme_dark {
  background: var(--background_theme_dark);
  color: var(--fontColor_theme_dark);
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}
</style>
