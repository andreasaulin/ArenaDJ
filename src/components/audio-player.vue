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
    <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
    <button @click="stop">Stop</button>
  </div>
</template>