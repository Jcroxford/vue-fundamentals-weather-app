<template>
  <h1>detail</h1>  
</template>

<script>
  export default {
    props: ['day'],
    created() {
      console.log(this.$route.query.city, this.$route.query.day);
    } 
  }
</script>
