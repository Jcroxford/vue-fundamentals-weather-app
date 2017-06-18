<template>
  <div>
    <app-loading v-if="!weatherData"></app-loading>
    <div v-else>
      <h1>hello forecast view</h1>  
      <p>city: {{$route.query.city}}</p>
    </div>
  </div>
</template>

<script>
  import Loading from './Loading.vue';

  import api from '../utils/api';

  export default {
    data() {
      return {
        weatherData: null,
      }
    },
    components: {
      appLoading: Loading,
    },
    created() {
      api.getWeatherData(this.$route.query.city)
        .then( data => this.weatherData = data );
    }  
  }

// simple view: day, month, monthday, weather image city as header

// detail view: weather image, date info, location, weather description, min/max temp, humidity
</script>

