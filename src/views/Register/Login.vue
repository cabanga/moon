<template>
  <div class="">
    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/jobs-1.jpg');" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4 col-sm-12 box-color bg-white d-flex justify-content-center">
            <div class="box-login ">
              <h1>fazer login</h1>
              <form @submit.prevent="login">

                <label class="font-weight-bold" for="email">Email</label>
                <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Endereço email" required="">

                <label class="font-weight-bold" for="email">Password</label>
                <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Endereço email" required="">

                <br>

                <input type="submit" value="Iniciar Sessão" class="btn btn-primary  py-2 px-5">

               </form>
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
    name: 'login',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      createJob () {
        postVacancy(this.vacancy)
        .then(response => {
          this.$router.push('/dasboard')
        })
        .catch(error => {
          console.log('error to post vacancy : ', error)
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
    margin-top: 15%;
  }

  .box-login{
    padding: 20px 15px;
  }


</style>
