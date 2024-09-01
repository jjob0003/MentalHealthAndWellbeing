<script setup>
import { ref } from 'vue';

    const userInput = ref({
      firstName: '',
      lastName: '',
      emailID: '',
      gender: '',
      username: '',
      password: '',
      role: ''
    });

    const errors = ref({
      firstName: null,
      lastName: null,
      emailID: null,
      gender: null,
      username: null,
      password: null,
      role: null
    });

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
        const hasSpecialChar = /[!@#$%^&*(),.?":(}|<>]/.test(password);

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

    const submitDetails = (blur) => {
        // console.log('Done!')

        //send data to datatable

        //redirect to login page (router)

    }

</script>

<template>
    <div class ="container mt-5">
        <div class="row">
            <form @submit.prevent="submitDetails"> 
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center custom-font">Sign Up</h1>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstName" v-model="userInput.firstName">
                        </div>
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" v-model="userInput.lastName">
                        </div>
                        <div class="col-md-6">
                            <label for="emailID" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailID" v-model="userInput.emailID" required>
                        </div>
                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" v-model="userInput.gender" required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="none">Prefer not to say</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="username" class="form-label">Create a username</label>
                            <input type="text" class="form-control" id="username" 
                            @blur="() => validateUsername(true)"
                            @input="() => validateUsername(false)"
                            v-model="userInput.username">
                            <div v-if="errors.username" class="text-danger"> {{ errors.username }} </div>
                        </div>
                        <div class="col-md-6">
                            <label for="password" class="form-label">Choose a password</label>
                            <input type="password" class="form-control" id="password" 
                            @blur="() => validatePassword(true)"
                            @input="() => validatePassword(false)"
                            v-model="userInput.password">
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                        <div class="col-md-6 offset-md-3">
                            <label for="role" class="form-label">Sign up as a</label>
                            <select class="form-select" id="role" v-model="userInput.role" required>
                                <option value="user">User</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit"class="btn btn-primary me-2" style="background-color: #1c4513;">Sign up</button>
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