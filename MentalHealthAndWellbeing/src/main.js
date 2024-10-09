// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import store from './store/store';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCbMmIvr_v_zYpVUN_xPIdzIbI56Y6R32A",
//   authDomain: "mentalhealthandwellbeing-41687.firebaseapp.com",
//   projectId: "mentalhealthandwellbeing-41687",
//   storageBucket: "mentalhealthandwellbeing-41687.appspot.com",
//   messagingSenderId: "678062868236",
//   appId: "1:678062868236:web:0fc20e693a72d06799ab29"
// };

// initializeApp(firebaseConfig);

const app = createApp(App);

app.use(PrimeVue,{
    theme: {
        preset: Aura
    }
});

app.use(router);
app.use(store);
app.mount('#app');
