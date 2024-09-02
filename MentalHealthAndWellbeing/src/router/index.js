import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '@/views/CreateAccount.vue'
import LoginForm from '@/views/LoginForm.vue'
import MainPage from '@/views/MainPage.vue'
import EmergencyPage from '@/views/EmergencyPage.vue'
import About from '@/views/About.vue'
import StaffDashboard from '@/views/staffDashboard.vue'
import UserDashboard from '@/views/userDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
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
    path: '/EmergencyPage',
    name: 'Emergency',
    component: EmergencyPage
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/staffDashboard',
    name: 'staffDashboard',
    component: StaffDashboard
  },
  {
    path: '/userDashboard',
    name: 'userDashboard',
    component: UserDashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router