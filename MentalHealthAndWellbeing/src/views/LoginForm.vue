<script setup>

import router from '@/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useStore } from 'vuex';
  
  const userInput = ref({
      email: '',
      password: ''
  });

  const errors = ref({
    email: null,
    password: null
  })


    const validatePassword = (blur) => {
        const password = userInput.value.password;
        const minlength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*( )-_=+\|{};:/?.>]/.test(password);

        if (password.length < minlength){
            if(blur) errors.value.password = `Error! Password must be at least ${minlength} characters long`;
        } else if(!hasUpperCase){
            if(blur) errors.value.password = "Error! Password must have at least one uppercase letter";
        } else if(!hasLowerCase){
            if(blur) errors.value.password = "Error! Password must have at least one lowercase letter";
        } else if(!hasNumber){
            if(blur) errors.value.password = "Error! Password must have at least one number";
        } else if(!hasSpecialChar){
            if(blur) errors.value.password = "Error! Password must have at least one special character";
        } else{
            errors.value.password = null;
        }
    }

    // const store = useStore();
    const auth = getAuth()

    const checkUser = () => {
        // const allUserData = store.state.userDetailsArray;
        // const checkUserData = allUserData.filter(user => user.username == userInput.value.username && user.password == userInput.value.password)

        // if(checkUserData.length == 1){
        //     const user = checkUserData[0];
            
        //     if(user.role == 'staff'){
        //         //route to staff page
        //         router.push('/staffDashboard')
        //     }
        //     else if(user.role == 'user'){
        //         //route to user page 
        //         router.push('/userDashboard')
        //     }
        // }else {
        //     console.log('Error! Username or Password not found')

        //     userInput.value.username = errors.value.username;
        //     userInput.value.password = errors.value.password;
        // }

        signInWithEmailAndPassword(auth, userInput.value.email, userInput.value.password)
        .then((data) => {
            console.log("Sign in successful!")
            // router.push('/staffDashboard')
            console.log(auth.currentUser) //change
        }).catch((error) => {
            console.log(error.code);
        })
    };

</script>

<template>
    <div class ="container mt-5">
        <div class="row">
            <form @submit.prevent="checkUser"> 
                <div class="col-md-8 offset-md-2">
                    <h1 class="text-center custom-font">Log in</h1>
                        <div class="row mb-3">
                            <div class="col-md-8 offset-md-2">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="userInput.email" required>
                            </div>
                            <div class="col-md-8 offset-md-2">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" 
                                @blur="() => validatePassword(true)"
                                @input="() => validatePassword(false)"
                                v-model="userInput.password">
                                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit"class="btn btn-primary me-2" style="background-color: #1c4513;">Log in</button>
                        </div>
                        <div class="text-center">
                            <h5 class="mt-3 custom-font">Don't have an account? <router-link to="/CreateAccount">Sign Up here</router-link></h5>
                        </div>
                </div>
            </form>
        </div>
    </div>
</template> 

<style scoped>

.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
