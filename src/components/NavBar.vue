<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
			<router-link class="navbar-brand" to="/">
			<img width="50" alt="Vue logo" src="../assets/images/icon.png">
			</router-link>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active"><router-link class="nav-link" :to="{name: 'home'}">Moon-IT</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/jobs">Todas Vagas </router-link></li>
				<li class="nav-item"><a href="contact.html" class="nav-link">Contactos</a></li>
				<li class="nav-item cta mr-md-1"><a href="new-post.html" class="nav-link">Anunciar Vaga</a></li>
				<li class="nav-item cta cta-colored"><a href="job-post.html" class="nav-link">Quero uma Vaga</a></li>
	        </ul>

	      </div>
	    </div>
	  </nav>
    <!-- END nav -->


  </div>
</template>
