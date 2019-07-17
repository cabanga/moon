<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal text-center under-text">{{ $t('textLogin') }}</h1>

      <br>

      <div class="alert alert-danger" v-if="error">
        <span>{{error}}</span>
      </div>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <br>

      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <br>

      <button type="submit" class="btn btnSubmit-login btn-sm ">{{ $t('signin') }}</button>

      <br>
      <br>

      <h5 class="text-center font-weight-normal">Or</h5>
      <button v-on:click="authFacebook" class="btn btnSubmit-login btn-sm btn-facebook">{{ $t('signin') }} Facebook</button>
    </form>
  </div>
</template>

<script>
  /* eslint func-call-spacing: ["error", "never"] */
  /* eslint function-paren-newline: ["error", "multiline"] */
  /* eslint-disable */

  import { signIn, facebookAutProvider } from '../api'
  import '@/assets/css/login.css'

  // import store from '@/services/store';

  export default {
    name: 'Login',
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
          this.$router.go('/dasboard')
        })
        .catch(error =>{
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


