<template>
  <div>
    <app-loading v-if="!weatherData"></app-loading>
    <div v-else>
      <h1 class="forecast-header">Results for: {{$route.query.city}}</h1>  
      <div class="forecast-container">
        <app-simple-day 
          v-for="day in weatherData.fiveDayWeather" 
          :day="day"
          :key="day.dt"
          @showDetailed="getDetailedView($event)"
        ></app-simple-day>
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
        dayData: '',
      }
    },
    components: {
      appLoading: Loading,
      appSimpleDay: SimpleDay,
    },
    methods: {
      getDetailedView(day) {
        this.dayData = day;
        this.$router.push({
          path: `details/${JSON.stringify(day, null, 3)}`,
          params: {day: 'test'},
          query: {city: this.$route.query.city}
        });
      }
    },
    created() {
      api.getWeatherData(this.$route.query.city)
        .then( data => this.weatherData = data);
    }  
  }
</script>

