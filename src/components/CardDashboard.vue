<template>
  <div class="col-sm-4">
    <div :class="{'vacancy-closed': isClose}">
      <div class="card card-moon">
        <div class="card-title">
          <br>
          <h5 class="text-center color-default">{{vacancy.title}}</h5>
        </div>
        <div class="card-body">
          <p><span>{{vacancy.companyName}}</span> </p>
          <p class="p-info"><strong>{{ $t('salary') }} : </strong> <span>{{ salary }}</span> </p>
          <p class="p-info"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.location}}</span> </p>
          <p class="p-info"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>
          <br>

          <button v-if="!isClose" v-on:click="close_vacancy(vacancy.id)" class="btn btn-sm btn-close" >
            Encerrar
          </button>

          <router-link v-if="!isClose" class="btn btn-sm btn-update" :to="{name: 'vacancy-edit', params: {id: vacancy.id}}">
            Editar
          </router-link>

          <router-link class="btn btnSubmit-login btn-sm" :to="{name: 'vacancy', params: {id: vacancy.id}}">
            Ver detalhes
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { closeVacancy } from '@/api'
  import { currencyFormat } from '@/controllers'

  export default {
    props: {
      vacancy: Object
    },
    computed: {
      isClose: function () {
        return this.vacancy.status === 0
      }
    },
    methods: {
      close_vacancy (id) {
        if (confirm('Tens certeza que queres encerrar esta vaga?')) {
          closeVacancy(id)
            .then(res => {
              this.$router.go('/dasboard')
            })
            .catch(error => {
              this.error = error
            })
        }
      }
    },
    data () {
      return {
        salary: null
      }
    },
    created () {
      this.salary = currencyFormat(this.vacancy.salary)
    }
  }
</script>

<style scoped>
  .vacancy-closed{
    background-color: #f1b174;
  }
</style>
