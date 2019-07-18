/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Login from './views/Register/Login.vue'
//import Register from './views/Register/Register.vue'
//import Dasboard from './views/Dasboard.vue'

import Jobs from './views/Jobs/Jobs.vue'
import JobsDetails from './views/Jobs/JobsDetails.vue'
import NewJob from './views/Jobs/New-Job.vue'

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
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/job-details',
      name: 'job-details',
      component: JobsDetails,
      //props: true
    },
    {
      path: '/jobs/new',
      name: 'new-jobs',
      component: NewJob
    }
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
