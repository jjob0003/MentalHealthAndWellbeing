import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '@/views/CreateAccount.vue'
import LoginForm from '@/views/LoginForm.vue'
import MainPage from '@/views/MainPage.vue'
import Donate from '@/views/Donate.vue'
import EmergencyPage from '@/views/EmergencyPage.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/LoginForm',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/CreateAccount',
    name: 'Signup',
    component: CreateAccount
  },
  {
    path: '/Donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/EmergencyPage',
    name: 'Emergency',
    component: EmergencyPage
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router