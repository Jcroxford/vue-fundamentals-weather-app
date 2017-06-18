<template>
  <div class="navbar">
    <router-link to="/" tag="h1" class="logo">My Weather App</router-link>
    <app-search-form flexDir="row"></app-search-form>
  </div>
</template>

<script>
  import SearchForm from './SearchForm.vue';

  export default {
    components: {
      appSearchForm: SearchForm,
    }
  }
</script>

<style scoped>
  .logo:hover {
    cursor: pointer;
  }
</style>
