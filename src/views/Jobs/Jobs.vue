<template>
  <div class="">

    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8   text-center text-md-left mb-5">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Todas as vagas da área IT </a></span></p>
            <h1 class="mb-3 bread">Todas as vagas</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section bg-light">
			<div class="container">
				<div class="row">
					<div class="col-md-12">

						<div class="row justify-content-center pb-3">
		          <div class="col-md-12 heading-section">
		          	<span class="subheading">Plataforma 100% Angolana, para recrutamento na area de I.T</span>
		            <h2 class="mb-4">Todas as vagas disponíveis</h2>
		          </div>
		        </div>

            <hr>

						<div class="row">
              <VacancyCard v-for="vac in vacanciesList" :vacancy="vac" :key="vac.id">
              </VacancyCard>

		          <div class="col-md-12 ftco-animate">
		            <div class="job-post-item py-4 d-block d-lg-flex align-items-center">
		              <div class="one-third mb-4 mb-md-0">
		                <div class="job-post-item-header d-flex align-items-center">
		                  <h2 class="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
		                  <div class="badge-wrap">
		                   <span class="bg-danger text-white badge py-2 px-3">Temporary</span>
		                  </div>
		                </div>
		                <div class="job-post-item-body d-block d-md-flex">
		                  <div class="mr-3"><span class="icon-layers"></span> <a href="#">New York Times</a></div>
		                  <div><span class="icon-my_location"></span> <span>Western City, UK</span></div>
		                </div>
		              </div>

		              <div class="one-forth ml-auto d-flex align-items-center">
		              	<div>
			                <a href="#" class="icon text-center d-flex justify-content-center align-items-center icon mr-2">
			                	<span class="icon-heart"></span>
			                </a>
		                </div>
		                <a href="job-single.html" class="btn btn-primary py-2">Apply Job</a>
		              </div>
		            </div>
		          </div><!-- end -->
		        </div>



		      </div>
				</div>
			</div>
	</section>



		<section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7 text-center heading-section heading-section-white">
              <h2>Subscreve para Newsletter</h2>
              <p>Suscreve na nossa plataforma para estar dentro de todas as vagas na área de I.T. Sem esquecer das grandes empresas que estão sempre a recrutar</p>
              <div class="row d-flex justify-content-center mt-4 mb-4">
                <div class="col-md-12">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Seu e-mail">
                      <input type="submit" value="Subscrever" class="submit px-3">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import VacancyCard from '@/components/VacancyCard.vue';
  import {getVacancies} from '@/api'

  export default {
    name: 'jobs',
    data () {
      return {
        vacanciesList: []
      }
    },
    components: {
      VacancyCard
    },
    created () {
      getVacancies()
      .then(vacancies => {
        this.vacanciesList = vacancies
      })
      .catch(error => {
        console.log(error);
      })
    }

  }
</script>

<style scoped>
  .hero-wrap.hero-wrap-2 {
    height: 270px !important;
  }

  .ftco-section {
      padding: 30px 0;
      position: relative;
  }
</style>
