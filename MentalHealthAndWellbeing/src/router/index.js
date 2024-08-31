import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '@/views/CreateAccount.vue'
import LoginForm from '@/views/LoginForm.vue'
import MainPage from '@/components/MainPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router