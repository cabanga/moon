/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Register/Login.vue'
import Register from './views/Register/Register.vue'

import Dasboard from './views/Dasboard.vue'

import Jobs from './views/Jobs/Jobs.vue'
import JobsDetails from './views/Jobs/JobsDetails.vue'
import NewJob from './views/Jobs/New-Job.vue'
import EditJob from './views/Jobs/Edit-Job.vue'

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
      path: '/dashboard',
      name: 'dashboard',
      component: Dasboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'job-details',
      component: JobsDetails,
      props: true
    },
    {
      path: '/new-job',
      name: 'new-jobs',
      component: NewJob,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jobs/update/:id',
      name: 'edit-jobs',
      component: EditJob,
      props: true,
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
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
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
