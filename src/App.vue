<template>
  <div id="app">
    <Park/>
  </div>
</template>

<script>
import Park from './components/Park.vue'

export default {
  name: 'app',
  components: {
    Park,
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
