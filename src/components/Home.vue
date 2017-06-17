<template>
  <div class="home-container home-img">
    <h1 class="header">Enter a City and State</h1>
    <app-search-form flexDir="column"></app-search-form>
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
  .home-img {
    background-image: url('../assets/images/pattern.svg');
  }
  
</style>
