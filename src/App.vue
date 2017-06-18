<template>
  <div class="container">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  //TODO: create error page for when user enters invalid data
  import Nav from './components/Nav.vue';

  export default {
    components: {
      appNav: Nav,
    },
  }
</script>

<style>

</style>
