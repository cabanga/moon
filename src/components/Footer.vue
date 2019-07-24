<template>
  <div>
    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">

        	<div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Moon I.T</h2>
              <p>É a primeira plataforma e 100% Angolana, focada na divulgação de vagas na área de I.T</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li class=" "><a href="#"><span class="icon-twitter"></span></a></li>
                <li class=" "><a href="#"><span class="icon-facebook"></span></a></li>
                <li class=" "><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>

          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            </div>
          </div>


          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Em caso de duvidas</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">Pedro de Castro. Belas, Luanda, Angola</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+244 913 747 220</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">geral@moon.ao</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>

          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">

            </div>
          </div>


        </div>


        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; {{dateYear}} All rights reserved | Created With
              <i class="icon-heart text-danger" aria-hidden="true"></i> by
              <a href="https://google.com" target="_blank">ZuluHub</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script>
  export default {
    name: 'jobs',
    data () {
      return {
        dateYear: new Date().getFullYear()
      }
    }
  }
</script>
