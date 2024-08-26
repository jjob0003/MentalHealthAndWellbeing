<template>
    <div class ="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Log in</h1>
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
                        <button type="submit"class="btn btn-primary me-2">Log in</button>
                    </div>
                    <div>
                        <h6 class="text-center">Don't have an account? Sign Up here</h6>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template> 

<script setup>
import { ref } from 'vue';
  
  const formData = ref({
      username: '',
      password: ''
  });

</script>

<style scoped>

</style>