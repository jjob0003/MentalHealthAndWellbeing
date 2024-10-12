import { createRouter, createWebHistory } from 'vue-router'
import CreateAccount from '@/views/CreateAccount.vue'
import LoginForm from '@/views/LoginForm.vue'
import MainPage from '@/views/MainPage.vue'
import EmergencyPage from '@/views/EmergencyPage.vue'
import About from '@/views/About.vue'
import StaffDashboard from '@/views/StaffDashboard.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import PatientRecords from '@/views/PatientRecords.vue'
import UserReports from '@/views/UserReports.vue'
import ClinicMap from '@/views/ClinicMap.vue'
import SendEmails from '@//views/SendEmails.vue'

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
  {
    path: '/PatientRecords',
    name: 'PatientRecords',
    component: PatientRecords
  },
  {
    path: '/UserReports',
    name: 'UserReports',
    component: UserReports
  },
  {
    path: '/ClinicMap',
    name: 'ClinicMap',
    component: ClinicMap
  },
  {
    path: '/SendEmails',
    name: 'SendEmails',
    component: SendEmails
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router