<script setup>

import { ref } from 'vue';
  
  const userInput = ref({
      username: '',
      password: ''
  });

  const errors = ref({
    username: null,
    password: null
  })

  const validateUsername = (blur) => {
    if(userInput.value.username.length <= 3){
        if(blur) errors.value.username = "Error! Username must be over 3 characters long";
    }else{
        errors.value.username = null;
    }
    }

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

</script>

<template>
    <div class ="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center custom-font">Log in</h1>
                    <div class="row mb-3">
                        <div class="col-md-8 offset-md-2">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" 
                            @blur="() => validateUsername(true)"
                            @input="() => validateUsername(false)"
                            v-model="userInput.username">
                            <div v-if="errors.username" class="text-danger"> {{ errors.username }} </div>
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
        </div>
    </div>
</template> 

<style scoped>

.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
