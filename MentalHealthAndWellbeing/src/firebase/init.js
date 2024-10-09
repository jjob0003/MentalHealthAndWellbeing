import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbMmIvr_v_zYpVUN_xPIdzIbI56Y6R32A",
    authDomain: "mentalhealthandwellbeing-41687.firebaseapp.com",
    projectId: "mentalhealthandwellbeing-41687",
    storageBucket: "mentalhealthandwellbeing-41687.appspot.com",
    messagingSenderId: "678062868236",
    appId: "1:678062868236:web:0fc20e693a72d06799ab29"
  };

  initializeApp(firebaseConfig);
  const db = getFirestore()
  export default db