<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="register">
      <h1 class="h3 mb-3 font-weight-normal text-center under-text">Fazer Registro</h1>

      <br>


      <h5 class="text-center font-weight-normal">With</h5>
      <button v-on:click="authFacebook" class="btn btnSubmit-login btn-sm btn-facebook">Fazer registro com Facebook</button>
    </form>
  </div>
</template>

<script>
  /* eslint func-call-spacing: ["error", "never"] */
  /* eslint function-paren-newline: ["error", "multiline"] */
  /* eslint-disable */

  import { signUp, facebookAutProvider } from '../api'
  import '@/assets/css/login.css'

  // import store from '@/services/store';

  export default {
    name: 'Register',
    data () {
      return {
        email: '',
        password: '',
        error: ''
      }
    },

    methods: {
      register () {
        const creandials = {email: this.email, password: this.password}

        signUp(creandials)
        .then( user =>{
          console.log("Register successful user : ", user.email );
          this.$router.push('/dasboard');
        })
        .catch( error =>{
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
  .form-control{
    border-radius: 50px;
  }
</style>
