<template>
  <form class="zipcode-container" :style="chooseFlexDir">
    <input type="text"  placeholder="St. George, Utah" class="form-control">
    <button class="btn btn-success my-btn">Get weather</button>
  </form>
</template>

<script>
  export default {
    props: ['flexDir'],
    data() {
      return {
        chooseFlexDir: {
          'flex-direction': this.flexDir,
        }
      }
    }
  }
</script>

<style scoped>
  .my-btn {
    margin: 10px;
  }
</style>
