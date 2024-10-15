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
  });


const submitEmail = async () => {
try{
    await axios.post('http://localhost:3000/sendEmail',{
        email: emailDetails.value.email,
        subject: emailDetails.value.subject,
        message: emailDetails.value.message
    });
}catch(error){
    console.error('error! Could not send email.', error);
    emailDetails.value.email = clearForm.value.email;
    emailDetails.value.subject = clearForm.value.subject;
    emailDetails.value.message = clearForm.value.message;
}
};


</script>

<template>
<div class="container mt-5">
    <div class="row col-md-8 offset-md-2"  style="background-color: #ecf3f9">
        <div class="text-center custom-color">
            <h2 style="color:  #1c4513;">
                Send an Email
            </h2>
        </div>
        <form @submit.prevent="submitEmail">
            <div class="col-md-8 offset-md-2">
                <label for="email" class="form-label" style="color: #1c4513;">Email</label>
                <input type="email" placeholder="To" class="form-control" id="email" v-model="emailDetails.email" required>
            </div>
            <div class="col-md-8 offset-md-2">
                <label for="subject" class="form-label" style="color: #1c4513;">Subject</label>
                <input type="text" placeholder="Enter a subject" class="form-control" id="subject" v-model="emailDetails.subject">
            </div>
            <div class="col-md-8 offset-md-2">
                <label for="message" class="form-label" style="color: #1c4513;">Message</label>
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