<template>
  <div>
    <!--<h1>hello forecast view</h1>  
    <p>city: {{$route.query.city}}</p>-->
    <app-loading></app-loading>
  </div>
</template>

<script>
  import Loading from './Loading.vue';

  export default {
    components: {
      appLoading: Loading,
    },
    created() {
      console.log(this.$route.query.city);
    }  
  }
</script>

