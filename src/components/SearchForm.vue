<template>
  <form class="zipcode-container" :style="chooseFlexDir">
    <input 
      type="text"  
      placeholder="St. George, Utah" 
      class="form-control"
      v-model="location"
    >
    <button 
      class="btn btn-success my-btn" 
      @click="getWeather"
      :disabled="location == ''"
    >
      Get weather
    </button>
  </form>
</template>

<script>
  export default {
    props: ['flexDir'],
    data() {
      return {
        chooseFlexDir: {
          'flex-direction': this.flexDir,
        },
        location: '',
      }
    },
    methods: {
      getWeather(e) {
        e.preventDefault();
        this.$router.push({path: 'forecast', query: {city: this.location} });
        this.location = '';
        // api.getCurrentWeather(this.location);
        // api.getFiveDayWeather(this.location);
      } 
    }
  }
</script>

<style scoped>
  .my-btn {
    margin: 10px;
  }
</style>
