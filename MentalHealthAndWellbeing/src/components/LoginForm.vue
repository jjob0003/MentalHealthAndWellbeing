<script setup>

import Navbar from './Navbar.vue';

import { ref } from 'vue';
  
  const formData = ref({
      username: '',
      password: ''
  });

</script>

<template>
    <Navbar/>
    <div class ="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center custom-font">Log in</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-12">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" v-model="formData.username">
                        </div>
                        <div class="col-md-12">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="formData.password">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit"class="btn btn-primary me-2" style="background-color: #1c4513;">Log in</button>
                    </div>
                    <div class="text-center">
                        <h5 class="mt-3 custom-font">Don't have an account? <a href="https://www.google.com.au/">Sign Up here</a></h5>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template> 

<style scoped>

.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
