<template>
  <div class="">

    <div class="hero-wrap hero-wrap-2" style="background-image: url('/images/black.png');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-8   text-center text-md-left mb-5">
          </div>
        </div>
      </div>
    </div>



    <section class="ftco-section">
      <div class="container">
        <div class="row" style="position: absolute; top: -160px;">
          <div class="col-sm-6">
            <div class="avatar">
                <img src="/images/default.png" alt="Circle Image" class="img-raised rounded-circle img-fluid">
            </div>
          </div>

          <div class="col-sm-6">
            <h2 style="margin-top: 170px">{{ user.name }}</h2>
            <h4>{{ user.position }}</h4>
            <p>{{ user.email }}</p>
            <p>{{ user.cell_phone }}</p>
          </div>
        </div>



      </div>
    </section>


  </div>
</template>

<script>
  import { getMyProfile } from '@/api'

  export default {
    name: 'profile',
    data () {
      return {
        user: {}
      }
    },
    created () {
      getMyProfile()
      .then(profile => {
        this.user = profile
      })
      .catch(error => {
        console.log(error)
      })
    }



  }



</script>

<style scoped>
  .hero-wrap.hero-wrap-2 {
    height: 350px !important;
  }

  .ftco-section {
      padding: 30px 0;
      position: relative;
  }



  .name h6 {
      margin-top: 10px;
      margin-bottom: 10px;
  }

  a .material-icons {
      vertical-align: middle;
  }

  .profile-page .page-header {
      height: 380px;
      background-position:center;
  }

  .page-header {
      height: 100vh;
      background-size: cover;
      margin: 0;
      padding: 0;
      border: 0;
      display: flex;
      align-items: center;
  }
  .profile-page .profile {
      text-align: center;
  }

  .profile-page .profile img {
      max-width: 160px;
      width: 100%;
      margin: 0 auto;
      -webkit-transform: translate3d(0,-50%,0);
      -moz-transform: translate3d(0,-50%,0);
      -o-transform: translate3d(0,-50%,0);
      -ms-transform: translate3d(0,-50%,0);
      transform: translate3d(0,-50%,0);
  }

  .img-raised {
      box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
  }

  .rounded-circle {
      border-radius: 50%!important;
  }

  .img-fluid, .img-thumbnail {
      max-width: 100%;
      height: auto;
  }

  .title {
      margin-top: 30px;
      margin-bottom: 25px;
      min-height: 32px;
      color: #3C4858;
      font-weight: 700;
      font-family: "Roboto Slab","Times New Roman",serif;
  }

  .profile-page .description {
      margin: 1.071rem auto 0;
      max-width: 600px;
      color: #999;
      font-weight: 300;
  }

  .profile-page .profile-tabs {
      margin-top: 4.284rem;
  }

  .nav-pills, .nav-tabs {
      border: 0;
      border-radius: 3px;
      padding: 0 15px;
  }

  .nav .nav-item {
      position: relative;
      margin: 0 2px;
  }

  .nav-pills.nav-pills-icons .nav-item .nav-link {
      border-radius: 4px;
  }

  .nav-pills .nav-item .nav-link.active {
      color: #fff;
      background-color: #9c27b0;
      box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);
  }

  .nav-pills .nav-item .nav-link {
      line-height: 24px;
      font-size: 12px;
      font-weight: 500;
      min-width: 100px;
      color: #555;
      transition: all .3s;
      border-radius: 30px;
      padding: 10px 15px;
      text-align: center;
  }

  .nav-pills .nav-item .nav-link:not(.active):hover {
      background-color: rgba(200,200,200,.2);
  }


  .nav-pills .nav-item i {
      display: block;
      font-size: 30px;
      padding: 15px 0;
  }

  .tab-space {
      padding: 20px 0 50px;
  }

  .profile-page .gallery {
      margin-top: 3.213rem;
      padding-bottom: 50px;
  }

  .profile-page .gallery img {
      width: 100%;
      margin-bottom: 2.142rem;
  }

  .profile-page .profile .name{
      margin-top: -80px;
  }

  img.rounded {
      border-radius: 6px!important;
  }

  .tab-content>.active {
      display: block;
  }

  /*buttons*/
  .btn {
      position: relative;
      padding: 12px 30px;
      margin: .3125rem 1px;
      font-size: .75rem;
      font-weight: 400;
      line-height: 1.428571;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0;
      border: 0;
      border-radius: .2rem;
      outline: 0;
      transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
      will-change: box-shadow,transform;
  }

  .btn.btn-just-icon {
      font-size: 20px;
      height: 41px;
      min-width: 41px;
      width: 41px;
      padding: 0;
      overflow: hidden;
      position: relative;
      line-height: 41px;
  }

  .btn.btn-just-icon fa{
      margin-top: 0;
      position: absolute;
      width: 100%;
      transform: none;
      left: 0;
      top: 0;
      height: 100%;
      line-height: 41px;
      font-size: 20px;
  }
  .btn.btn-link{
      background-color: transparent;
      color: #999;
  }

</style>
