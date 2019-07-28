<template>
  <div style="margin: 100px 0">
    <div class="container">
      <h1>Minhas Vagas</h1>
      <hr>
      <br>
      <div class="row no-padding">
        <VacancyCard v-for="vac in myVacancies" :vacancy="vac" :key="vac.id" />
      </div>

    </div>
  </div>
</template>




<script>
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
    created () {
      getMyVacancies()
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
