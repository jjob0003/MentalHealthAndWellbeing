<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emailDetails = ref({
    email: '',
    subject: '',
    message: ''
  });

const clearForm = ref({
    email: null,
    subject: null,
    message: null
  })

const submitEmail = async () => {
    console.log('success!' + emailDetails.value.email + emailDetails.value.subject + emailDetails.value.message);

    // else{
    //     emailDetails.value.email = clearForm.value.email;
    //     emailDetails.value.subject = clearForm.value.subject;
    //     emailDetails.value.message = clearForm.value.message;
    // }
}

</script>

<template>
<div class="container mt-5">
    <div class="row col-md-8 offset-md-2"  style="background-color: #515b49;">
        <div class="text-center">
            <h2 style="color: whitesmoke;">
                Send an Email
            </h2>
        </div>
        <form @submit.prevent="submitEmail">
            <div class="col-md-8 offset-md-2">
                <label for="email" class="form-label" style="color: whitesmoke;">Email</label>
                <input type="email" placeholder="To" class="form-control" id="email" v-model="emailDetails.email" required>
            </div>
            <div class="col-md-8 offset-md-2">
                <label for="subject" class="form-label" style="color: whitesmoke;">Subject</label>
                <input type="text" placeholder="Enter a subject" class="form-control" id="subject" v-model="emailDetails.subject">
            </div>
            <div class="col-md-8 offset-md-2">
                <label for="message" class="form-label" style="color: whitesmoke;">Message</label>
                <textarea placeholder="Enter a message" class="form-control" id="message" v-model="emailDetails.message" required></textarea>
            </div>
            <div class="text-center">
                <button type="submit"class="btn btn-primary me-2 mt-3" style="background-color: #1c4513;">Send email</button>
            </div>
        </form>
    </div>
</div>
</template>


<style>
.custom-color{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>