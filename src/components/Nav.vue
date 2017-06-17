<template>
  <div class="navbar">
    <h1>My Weather App</h1>
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
