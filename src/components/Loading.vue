<template>
  <div class="loading-container">
    <p class="loading-text">Loading{{ellipses}}</p>
  </div>  
</template>

<script>
  let ellipseInterval;

  export default {
    data() {
      return {
        ellipses: '',
      }
    },
    created() {
      ellipseInterval = setInterval( () => {
        if(this.ellipses == '...') {
          this.ellipses = '';
        } else {
          this.ellipses += '.';
        }
        console.log('im running right now')
      }, 300);
    },
    beforeDestroy() {
      clearInterval(ellipseInterval);
    }
  }
</script>
