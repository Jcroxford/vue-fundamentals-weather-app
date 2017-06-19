<template>
  <div class="container">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  //TODO: create error page for when user enters invalid data
  //TODO: change detailed view to show current weather info for 
  //      the current day instaed of using the 5 day weather info
  //TODO: add ability to go back to simple vue from detailed vue
  //TODO: fix URL bar? lol
  import Nav from './components/Nav.vue';

  export default {
    components: {
      appNav: Nav,
    },
  }
</script>

<style>

</style>
