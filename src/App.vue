<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    components: {
      NavBar
    },
    computed: {
      isBlack: function () {
        return this.$route.name === 'login'
      }
    }
  }
</script>
