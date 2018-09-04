<template>
  <div>
    <fullscreen :fullscreen.sync="fullscreen">
      Content
    </fullscreen>
    <button type="button" @click="toggle" >Fullscreen</button>
  </div>
</template>
<script>
  import fullscreen from 'vue-fullscreen'
  import Vue from 'vue'
  Vue.use(fullscreen)
  export default {
    methods: {
      toggle () {
        this.fullscreen = !this.fullscreen
      }
    },
    data() {
      return {
        fullscreen: false
      }
    }
  }
</script> 