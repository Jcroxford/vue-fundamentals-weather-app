<template>
  <div>
    <app-loading v-if="!weatherData"></app-loading>
    <div v-else>
      <h1 class="forecast-header">Results for: {{$route.query.city}}</h1>  
      <div class="forecast-container">
        <app-simple-day v-for="day in weatherData.fiveDayWeather" :day="day"></app-simple-day>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading   from './Loading.vue';
  import SimpleDay from './SimpleDay.vue';

  import api from '../utils/api';

  export default {
    data() {
      return {
        weatherData: null,
      }
    },
    components: {
      appLoading: Loading,
      appSimpleDay: SimpleDay,
    },
    created() {
      api.getWeatherData(this.$route.query.city)
        .then( data => this.weatherData = data);
    }  
  }

// simple view: day, month, monthday, weather image city as header

// detail view: weather image, date info, location, weather description, min/max temp, humidity
</script>

