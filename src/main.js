import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import './registerServiceWorker'
import firebase from 'firebase/app'
import config from '@/services/firebase'


firebase.initializeApp(config)
Vue.config.productionTip = false

let app

if (!app) {
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
