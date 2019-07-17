/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Register/Login.vue'
import Register from './views/Register/Register.vue'
import Dasboard from './views/Dasboard.vue'

/*


import Vacancies from './components/Vacancy'
import VacancyShow from './components/Vacancy/Show'
import VacancyEdit from './components/Vacancy/Edit'
import VacancyNew from './components/Vacancy/New'
*/

import NotFountComponent from './views/404'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      component: NotFountComponent
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }

    /*
    ,
    {
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies
    },
    {
      path: '/vacancies/:id',
      name: 'vacancy',
      component: VacancyShow,
      props: true
    },
    {
      path: '/vacancies/create',
      name: 'vacancy-create',
      component: VacancyNew,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/vacancies/update/:id',
      name: 'vacancy-edit',
      component: VacancyEdit,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dasboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    }
    */
  ]
})

// ==================== Nav Guard ====================
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('currentToken')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (localStorage.getItem('currentToken')) {
      next({
        path: '/dashboard',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

/*
meta: {
  requiresAuth: true
}

meta: {
  requiresGuest: true
}
*/
