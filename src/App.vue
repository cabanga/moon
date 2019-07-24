<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <Footer v-if="['home', 'dashboard', 'jobs', 'job-details'].indexOf($route.name) > -1" />

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      NavBar,
      Footer
    },
    computed: {

    }
  }
</script>
