<template>
  <div class="container">
    <app-nav></app-nav>
    <app-home></app-home>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Home from './components/Home.vue';

  import api from './utils/api';

  export default {
    data () {
      return {
        msg: 'HELLO WORLD'
      }
    },
    components: {
      appNav: Nav,
      appHome: Home,
    },
    methods: {
      getWeather: api.getCurrentWeather,
    }
  }
</script>

<style>

</style>
