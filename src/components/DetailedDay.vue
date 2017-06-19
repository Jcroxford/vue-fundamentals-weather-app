<template>
  <div class="description-container my-btn" @click="returnToSimple">
    <app-simple-day :day="dayData"></app-simple-day>
    <p>{{city}}</p>
    <p>{{dayData.weather[0].description}}</p>
    <p>Min Temp: {{dayData.temp.min}}</p>
    <p>Max Temp: {{dayData.temp.max}}</p>
    <p>Humidity: {{dayData.humidity}}</p>
  </div>
</template>

<script>
  import SimpleDay from './SimpleDay.vue'
  export default {
    props: ['day'],
    data() {
      return {
        city: '',
        dayData: null,
      }
    },
    methods: {
      returnToSimple() {
        this.$router.go(window.history.back());
      }
    },
    components: {
      appSimpleDay: SimpleDay,
    },
    created() {
      this.city = this.$route.query.city;
      this.dayData = JSON.parse(this.day);
    } 
  }
// detail view: weather image, date info, location, weather description, min/max temp, humidity
</script>

<style scoped>
  .my-btn {
    cursor: pointer;
  }

  p {
    margin: 20px auto;
  }
</style>
