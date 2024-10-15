<script>
import { ref } from 'vue';

const emailDetails = ref({
    emailID: '',
    subject:'',
    message:''
})

</script>

<template>
<div class="container mt-5">
    <div class="row col-md-8 offset-md-2"  style="background-color: #515b49;">
        <div class="text-center">
            <h2 style="color: aliceblue;">
                Send an Email
            </h2>
        </div>
        <form @submit.prevent="submitDetails">

        </form>
    </div>
</div>
</template>

<style>
.custom-color{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>