<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home' // 추가해주세요.
import NaverKeywords from './components/NaverKeywords' // 추가해주세요.

export default {
  name: 'app',
  components: {
    Home, // 추가해주세요.
    NaverKeywords // 추가해주세요.
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
