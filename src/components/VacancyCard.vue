<template>
  <div class="col-md-12 ">
    <div class="job-post-item py-4 d-block d-lg-flex align-items-center">
      <div class="one-third mb-4 mb-md-0">
        <div class="job-post-item-header d-flex align-items-center">
          <h2 class="mr-3 text-black"><a href="#">{{vacancy.title}}</a></h2>
          <div class="badge-wrap">
           <span v-bind:class="color">{{vacancy.jobType}}</span>
          </div>
        </div>
        <div class="job-post-item-body d-block d-md-flex">
          <div class="mr-3"><span class="icon-layers"></span> <a href="#">{{vacancy.companyName}}</a></div>
          <div><span class="icon-my_location"></span> <span>{{vacancy.location}}, {{vacancy.city}}</span></div>
        </div>
      </div>

      <div class="one-forth ml-auto d-flex align-items-center">
        <div>
          <a href="#" class="icon text-center d-flex justify-content-center align-items-center icon mr-2">
            <span class="icon-heart"></span>
          </a>
        </div>
        <a href="/" class="btn btn-primary py-2">Aplicar</a>
      </div>
    </div>
  </div><!-- end -->

</template>

<script>
  import { currencyFormat, jobColor } from '@/controllers'

  export default {
    props: {
      vacancy: Object
    },
    data () {
      return {
        salary: null
      }
    },
    created () {
      this.salary = currencyFormat(this.vacancy.salary),
      this.color = jobColor(this.vacancy.jobType)
    }

  }
</script>
