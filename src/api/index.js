import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')
import { setToken, setCurrentUser } from '../api/session'

// const BASE_URL = process.env.API_URL || 'http://localhost:3000'
//const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com/api/v1'

const apiClient = Axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// ============================== POST VACANCY =============================
export function postVacancy (vacancy) {
  return new Promise((resolve, reject) => {
    apiClient.post('/vacancies',{
      title: vacancy.title,
      companyName: vacancy.companyName,
      jobType: vacancy.jobType,
      location: vacancy.location,
      description: vacancy.description,
      city: vacancy.city,
      salary: vacancy.salary,
      user_id: vacancy.user_id,
      status: vacancy.status,
      user_id: "ib05LTlaFYQcJ70IcTPf3aGUPfl1" //localStorage.getItem('currentUserId')
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to post vacancy')
      reject(error)
    })
  })
}

// ============================== GET VACANCIES =============================
export function getVacancies () {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies')
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to get vacancies')
      reject(error.message)
    })
  })
}

// ============================== GET 3 LASTS VACANCIES =============================
export function getLastVacancies () {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies_lasts')
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to get vacancies')
      reject(error.message)
    })
  })
}

// ============================== GET VACANCY =============================
export function getVacancy (id) {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies/' + id)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to get vacancy')
      reject(error.message)
    })
  })
}
