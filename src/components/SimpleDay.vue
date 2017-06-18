<template>
  <div class="day-container" @click="showDetailed">
    <img 
      :src="`src/assets/images/weather-icons/${day.weather[0].icon}.svg`" 
      alt="weather icon"
      class="weather"
    >
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
    methods: {
      showDetailed() {
        this.$emit('showDetailed', this.day);
      }
    },
    created() {
      this.date = dates.getDate(this.day.dt);
    }
  }
</script>
