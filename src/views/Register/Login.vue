<template>
  <div class="">
    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4 col-sm-12 box-color bg-white">
            <div class="box-login ">
              <h1 class="text-center">fazer login</h1>
              <form @submit.prevent="login">

                <label class="font-weight-bold" for="email">Email</label>
                <input v-model="email" type="email" id="email" class="form-control" placeholder="Endereço email" required="">

                <label class="font-weight-bold" for="password">Password</label>
                <input v-model="password" type="password" id="password" class="form-control" placeholder="password" required="">

                <br>

                <input type="submit" value="Iniciar Sessão" class="btn btn-secondary btn-block">
                <br>

                <div class="row">
                  <div class="col">
                    <button v-on:click="authFacebook" class="btn btn-block btn-sm btn-facebook">Com Facebook</button>
                  </div>

                  <div class="col">
                    <button v-on:click="authTwitter" class="btn btn-block btn-sm btn-twitter">Com Twitter</button>
                  </div>
                </div>

                <br>
                <router-link style="color: #1da1f2;" class="text-center font-weight-normal" :to="{name: 'register'}">Fazer Registo</router-link>

               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import { signIn, facebookAutProvider } from '@/api'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        error: ''
      }
    },

    methods: {
      login() {
        const creandials = {email: this.email, password: this.password}
        signIn(creandials)
        .then( currentToken =>{
          this.$router.go('/dashboard')
        })
        .catch(error =>{
          this.error = error
        })
      },
      authTwitter () {
        twitterAutProvider ()
        .then(res => {
          this.$router.go('/dashboard')
        })
        .catch(error => {
          console.log("erro : ", error);
          this.error = error
        })
      },
      authFacebook () {
        facebookAutProvider ()
        .then(res => {
          this.$router.go('/dashboard')
        })
        .catch(error => {
          this.error = error
        })
      }
    }
  }
</script>



<style scoped>
  .hero-wrap.hero-wrap-2{
    height: 100% !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
  }

  .box-color{
    margin-top: 13%;
  }

  .box-login{
    padding: 20px 15px;
  }


</style>
