<script setup>
import { ref } from 'vue';

    const userInput = ref({
      firstName: '',
      lastName: '',
      emailID: '',
      gender: '',
      username: '',
      password: ''
    });

    const errors = ref({
      firstName: null,
      lastName: null,
      emailID: null,
      gender: null,
      username: null,
      password: null
    });

</script>

<template>
    <div class ="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center custom-font">Sign Up</h1>
                    <div class="row mb-3">
                        <div class="col-md-8 offset-md-2">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" v-model="userInput.username">
                        </div>
                        <div class="col-md-8 offset-md-2">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="userInput.password">
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit"class="btn btn-primary me-2" style="background-color: #1c4513;">Sign up</button>
            </div>
        </div>
    </div>
</template> 

<style scoped>

.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>