<template>
  <FaceBuilder/>
</template>

<script>
import FaceBuilder from './components/FaceBuilder.vue';

export default {
  name: 'App',
  components: {
    FaceBuilder
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
