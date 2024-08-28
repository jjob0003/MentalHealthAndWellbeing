import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '@/views/CreateAccount.vue'
import LoginForm from '@/views/LoginForm.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
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