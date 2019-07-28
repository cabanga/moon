<template>
  <div class="">

    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8 text-center text-md-left mb-5">
          	<p class="breadcrumbs mb-0">
              <span class="mr-3">
                <router-link :to="{name: 'jobs' }">Vagas</router-link> <i class="ion-ios-arrow-forward" style="margin-left: 15px"></i>
              </span>

              <span>{{ vacancy.title }}</span></p>
              <h1 class="mb-3 bread">{{ vacancy.title }}</h1>
          </div>
        </div>

        <div class="row">

          <div class="col-md-12 col-lg-8">
            <label class="font-weight-bold">Instituição Empresárial</label>
            <p class="">{{ vacancy.companyName }}</p>
            <br>
            <label class="font-weight-bold">Salário</label>
            <p class="">{{ salary }}</p>
            <br>
            <label class="font-weight-bold">Tipo de Vaga</label>
            <p class="">{{ vacancy.jobType }}</p>
            <br>
            <label class="font-weight-bold">Localização</label>
            <p class="">{{ vacancy.location }}, {{ vacancy.city }}</p>
            <br>

            <label class="font-weight-bold">Descrição da Vaga</label>
            <p class="">{{ vacancy.description }}</p>

            <hr>
            <div class="row form-group">
              <div class="col-md-12">
                <button v-if="!already_applied" class="btn btn-primary  py-2 px-5" v-on:click="apply_candidate(vacancy.id)">Aplicar Agora</button>
                <button v-else="!already_applied" class="btn btn-success  py-2 px-5">Já aplicaste nesta vaga</button>
                <router-link class="btn btn-secondary  py-2 px-5" style="margin-left: 15px" :to="{name: 'dashboard'}">Cancelar</router-link>
              </div>
            </div>
            <br>
          </div>

          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">Contacto Info</h3>
              <p class="mb-0 font-weight-bold">Endereço</p>
              <p class="mb-4">Pedro de Castro Vandune-Loy, Belas, Luanda, Angola</p>
              <p class="mb-0 font-weight-bold">Telemóvel</p>
              <p class="mb-4"><a href="#">+244 913 747 220</a></p>
              <p class="mb-0 font-weight-bold">Endereço Email</p>
              <p class="mb-0"><a href="#"><span class="__cf_email__">suport@moon.ao</span></a></p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import { getVacancy, applyCandidate, alreadyApplied } from '@/api'
  // import { getVacancy } from '@/api'
  import { userLogged } from '@/api/session'

  import { skillsConvert, currencyFormat } from '@/controllers'

  export default {
    props: ['id'],
    data () {
      return {
        vacancy: {},
        salary: null,
        already_applied: false
      }
    },
    created () {
      getVacancy(this.id)
      .then(vacancy => {
        this.vacancy = vacancy
        this.salary = currencyFormat(this.vacancy.salary)
      })
      .catch(error => {
        console.log(error)
      }),

      alreadyApplied(this.id)
      .then(was => {
        if (userLogged) {
          this.already_applied = was && true
        } else {
          this.already_applied = was && false
        }
      })
      .catch(error => {
        console.log(error)
      })

    },

    methods: {
      apply_candidate (id) {

        if (confirm('Tens certeza que queres candidatar-se a esta vaga?')) {
          if (localStorage.getItem('currentToken')) {
            applyCandidate(id)
              .then(res => {
                this.$router.push('/dashboard')
              })
              .catch(error => {
                this.error = error
              })
          } else {
            this.$router.push({ name: 'login', query: { redirect: `/vacancies/${id}` } })
          }
        }


      }


    }
  }
</script>


<style scoped>
  .hero-wrap.hero-wrap-2 {
    height: 300px !important;
  }

  .ftco-section {
      padding: 1px 0;
      position: relative;
  }
</style>
