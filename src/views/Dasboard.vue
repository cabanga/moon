<template>
  <div class="dashboard container">
    <br>
    <h1>My vacancies</h1>
    <br>
    <div class="row no-padding">
      <VacancyCard v-for="vac in myVacancies" :vacancy="vac" :key="vac.id" />
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  // eslint-disable-next-line
  import { getMyVacancies } from '@/api'
  import VacancyCard from '@/components/CardDashboard.vue'

  export default {
    name: 'dashboard',
    data () {
      return {
        myVacancies: []
      }
    },
    components: {
      VacancyCard
    },
    async created () {
      await getMyVacancies()
      .then(res => {
        this.myVacancies = res        
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .dashboard{
    margin-top: -3%;
  }
  
  .nav-link-m{
    display: -webkit-inline-box;
    padding: .5rem 1rem;
    color: #b63c06;
  }
</style>