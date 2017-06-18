<template>
  <div class="container">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  //import Home from './components/Home.vue';
  import Nav  from './components/Nav.vue';

  export default {
    components: {
      appNav: Nav,
      //appHome: Home,
    },
  }
</script>

<style>

</style>
