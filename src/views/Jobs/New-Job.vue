<template>
  <div class="">

    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8   text-center text-md-left mb-5">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Todas as vagas da área IT </a></span></p>
            <h1 class="mb-3 bread">Publicar nova vaga</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="ftco-section bg-light">
      <div class="container">
        <div class="row">
       
          <div class="col-md-12 col-lg-8 mb-5">
          
			     <form class="p-5 bg-white" @submit.prevent="createJob">

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-price-1">
                    <input type="checkbox" id="option-price-1"> <span class="text-success">$500</span> For 30 days
                  </label>
                </div>
                
                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-price-2">
                    <input type="checkbox" id="option-price-2"> <span class="text-success">$300</span> / Monthly Recurring
                  </label>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="fullname">Titulo da Vaga</label>
                  <input v-model="vacancy.title" type="text" id="fullname" class="form-control" placeholder="ex. Programador Ruby on Rails" required="">
                </div>
              </div>

              <div class="row form-group mb-5">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="company">Instituição Empresárial</label>
                  <input v-model="vacancy.company" type="text" id="company" class="form-control" placeholder="ex. Moon LDA, Inc.">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12"><h3>Tipo de Vaga</h3></div>
                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-1">
                    <input v-model="vacancy.jobType" type="radio" id="option-job-type-1" name="job-type"> Full Time
                  </label>
                </div>
                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-2">
                    <input v-model="vacancy.jobType" type="radio" id="option-job-type-2" name="job-type"> Part Time
                  </label>
                </div>

                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-3">
                    <input v-model="vacancy.jobType" type="radio" id="option-job-type-3" name="job-type"> Freelance
                  </label>
                </div>

                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input v-model="vacancy.jobType" type="radio" id="option-job-type-4" name="job-type"> Internship
                  </label>
                </div>

                <div class="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input v-model="vacancy.jobType" type="radio" id="option-job-type-4" name="job-type"> Temporário
                  </label>
                </div>

              </div>

              <div class="row form-group mb-4">
                <div class="col-md-12"><h3>Localização</h3></div>
                <div class="col-md-12 mb-3 mb-md-0">
                  <input v-model="vacancy.location" type="text" class="form-control" placeholder="Samba, rua 2">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12"><h3>Descrição da Vaga</h3></div>
                <div class="col-md-12 mb-3 mb-md-0">
                  <textarea v-model="vacancy.description" name="" class="form-control" id="" cols="30" rows="5"></textarea>
                </div>
              </div>


              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Publicar Nova Vaga" class="btn btn-primary  py-2 px-5">
                  <router-link class="btn btn-secondary  py-2 px-5" :to="{name: 'dashboard'}">Cancelar</router-link>
                </div>
              </div>

            </form>
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
  import { postVacancy } from '@/api'

  export default {
    name: 'new-job',
    data () {
      return {
        vacancy: {}
      }
    },
    methods: {
      createJob () {
        postVacancy(this.vacancy)
        .then(response => {
          this.$router.push('/dashboard')
        })
        .catch(error => {
          console.log('error to post vacancy : ', error)
        })
      }
    }
  }
</script>
