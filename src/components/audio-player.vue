<script>
  import VueHowler from 'vue-howler'

  export default {
    mixins: [VueHowler]
  }
</script>

<template>
  <div>
    <span>Total duration: {{ duration }} seconds</span>
    <span>Progress: {{ parseFloat(progress * 100 * (duration / 100)).toFixed(2) }} - {{ duration }}</span>
    <span @click="togglePlayback">
      <icon name="pause" v-if="playing"></icon>
      <icon name="play" v-else></icon>
    </span>
    <button @click="stop">Stop</button>
  </div>
</template>

<style scoped>
  span {
    font-size: 10px;
  }
</style>