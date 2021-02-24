<template>
  <div id="app">
    <!-- 这里要给一个 router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/Login.vue'

// 这个地方改了
export default {
  name: 'App',
  components: {
    Login
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
