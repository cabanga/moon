<template>
  <div class="">

    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8   text-center text-md-left mb-5">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Todas as vagas da área IT </a></span></p>
            <h1 class="mb-3 bread">Moon</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section services-section bg-primary">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-3 d-flex align-self-stretch">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-resume"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Milhões de empregos</h3>
                <p>Nunca foi tão facil encontrar empregos na área de IT em Angola</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-collaboration"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Fácil de gerenciar trabalhos</h3>
                <p>Plublica e encontra vagas e candidatos facimente.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-promotions"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Principais carreiras em IT</h3>
                <p>Todas especialidades na área de IT em um unico espaço.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-employee"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Candidatos direcionados</h3>
                <p>Buscas simplemente o que voçe precisar sem rodeios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      	<div class="container">

      		<div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center  ">
            	<span class="subheading">Categorias das Vagas</span>
              <h2 class="mb-4">Príncipais carreiras</h2>
            </div>
          </div>

          <div class="row">

          	<div class="col-md-3">
          		<ul class="category">
          			<li><a href="#">Web Development <br><span class="number">354</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          			<li><a href="#">Graphic Designer <br><span class="number">143</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          		</ul>
          	</div>

          	<div class="col-md-3">
          		<ul class="category">
          			<li><a href="#">Education &amp; Training <br><span class="number">100</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          			<li><a href="#">Social Media <br><span class="number">300</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          		</ul>
          	</div>

          	<div class="col-md-3">
          		<ul class="category">
          			<li><a href="#">Project Management <br><span class="number">100</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
                <li><a href="#">Software Development <br><span class="number">425</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          		</ul>
          	</div>

          	<div class="col-md-3">
          		<ul class="category">
          			<li><a href="#">Web Designer <br><span class="number">324</span> <span>Open position</span></span><i class="ion-ios-arrow-forward"></i></a></li>
          			<li><a href="#">Marketing &amp; Sales <br><span class="number">234</span> <span>Open position</span><i class="ion-ios-arrow-forward"></i></a></li>
          		</ul>
          	</div>
          </div>

      	</div>
      </section>

    <section class="ftco-section img" style="background-image: url(images/jobs-1.jpg); background-position: top center;">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6">
    				<div class="browse-job p-5">
    					<span class="icon-search2 icon"></span>
    					<span class="subheading">Search Job</span>
    					<h2>Empregos por especificações</h2>
    					<p>Reunimos e oferecemos um processo de maneira intuitiva, bem como
                perfis de candidatos que podem estar apto e demonstrar suas habilidades.
                Em pouco tempo consegui agendar entrevistas e ser inserir no mercado de trabalho.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

  	<section class="ftco-section bg-light">
  		<div class="container">
  			<div class="row">
  				<div class="col-lg-9 pr-lg-5">
  					<div class="row justify-content-center pb-3">
      				<div class="col-md-12 heading-section  ">
      				<span class="subheading">As vagas mais recentes</span>
      				<h2 class="mb-4">Vagas Recentes</h2>
      				</div>
      			</div>

      			<div class="row">

              <VacancyCard v-for="vac in vacanciesList" :vacancy="vac" :key="vac.id">
              </VacancyCard>

      			</div>

  			</div>

  			<div class="col-lg-3 sidebar">
  			<div class="row justify-content-center pb-3">
  				<div class="col-md-12 heading-section  ">
  				<span class="subheading">Empresas que recrutam aqui</span>
  				<h2 class="mb-4">Top Empresas</h2>
  				</div>
  			</div>
  			<div class="sidebar-box  ">
  				<div class="border">
  					<a href="#" class="company-wrap"><img src="images/anuncio.png" class="img-fluid" alt="Colorlib Free Template"></a>
  					<div class="text p-3">
  						<p><span class="number">540</span> <span style="margin-left: 15px">Visualizações</span></p>
  					</div>
  				</div>
  			</div>
  			<div class="sidebar-box  ">
  				<div class="border">
  					<a href="#" class="company-wrap"><img src="images/anuncio.png" class="img-fluid" alt="Colorlib Free Template"></a>
  					<div class="text p-3">
  						<p><span class="number">34</span> <span style="margin-left: 15px">Visualizações</span></p>
  					</div>
  				</div>
  			</div>

  			</div>
  			</div>
  		</div>
  	</section>

    <section class="ftco-section ftco-candidates bg-primary">

      <div class="container">
    		<div class="row justify-content-center pb-3">
    			<div class="col-md-10 heading-section heading-section-white text-center  ">
      			<span class="subheading">Candidatos</span>
      			<h2 class="mb-4">Candidatos Mais Recentes</h2>
    			</div>
    		</div>
  		</div>

      <div class="container">

     <div class="row justify-content-md-center">

       <div class="col col-sm-3">
         <div class="item">
           <a href="#" class="team text-center">
             <div class="img" style="background-image: url(images/avatar/1.png);"></div>
             <h2>Edvaldo Martins</h2>
             <span class="position">Mobile Developer</span>
           </a>
         </div>
       </div>

       <div class="col col-sm-3">
         <div class="item">
           <a href="#" class="team text-center">
             <div class="img" style="background-image: url(images/avatar/2.png);"></div>
             <h2>Adário Muatelembe</h2>
             <span class="position">FullStack Dev</span>
           </a>
         </div>
       </div>

        <div class="col col-sm-3">
          <div class="item">
            <a href="#" class="team text-center">
              <div class="img" style="background-image: url(images/avatar/3.png);"></div>
              <h2>Agostinho Bismar</h2>
              <span class="position">Design de Interface</span>
            </a>
          </div>
        </div>

     </div>

    </div>

    </section>

  </div>
</template>

<script>
  import VacancyCard from '@/components/VacancyCard.vue';
  import { getLastVacancies } from '@/api'

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
      getLastVacancies()
      .then(vacancies => {
        this.vacanciesList = vacancies
      })
      .catch(error => {
        console.log(error);
      })
    }

  }
</script>
