<template>
  <div class="day-container">
    <!--<img :src="`assets/images/weather-icons/${day.weather[0].icon}.svg`" alt="weather icon">-->
    <img :src="`src/assets/images/weather-icons/${day.weather[0].icon}.svg`" alt="weather icon">
    <h2 class="subheader">{{date.englishDay}}, {{date.month}} {{date.monthDay}}</h2>
  </div>
</template>

<script>
  import dates from '../utils/dates';

  export default {
    props: ['day'],
    data() {
      return {
        date: null,
      }
    },
    created() {
      this.date = dates.getDate(this.day.dt);
    }
  }
</script>
