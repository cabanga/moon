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
            <li class="nav-item"><a href="#" class="nav-link">Contactos</a></li>
            <li class="nav-item cta mr-md-1"><router-link class="nav-link" :to="{name: 'new-jobs'}">Anunciar Vaga</router-link></li>
            <li class="nav-item cta cta-colored"><router-link class="nav-link" :to="{name: 'login'}">Fazer Login</router-link></li>

            <li class="nav-item">
              <button v-on:click="logOut" class="nav-link">Sair</button>
            </li>

          </ul>

	      </div>
	    </div>
	  </nav>
    <!-- END nav -->
  </div>
</template>


<script>
  import { signOut } from '@/api';

  export default {
    methods: {
      logOut() {
        signOut()
        .then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
