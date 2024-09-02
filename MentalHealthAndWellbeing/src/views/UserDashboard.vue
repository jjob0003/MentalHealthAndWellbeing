<script setup>

</script>

<template>
<div class="col-md-12">
        <nav class="navbar navbar-expand-lg">
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item  custom-position" style="background-color: whitesmoke;">
                        <router-link  class="nav-link custom-font" to="/">Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</div>

<div class="container-fluid col-md-12 text-center custom-font" style="height: 300px; margin-top: 4%; background-color: #ecf3f9;">
        <div style="position: absolute; right: 0; margin-right: 2%;">
            <h3>Logged in as user</h3>
        </div>
        <div style="padding-top: 8%;">
            <h1>Dashboard</h1>
        </div>
</div>

<div class="container-fluid col-md-12 text-center custom-font" style="height: 100px;">
    </div>
    <div class="row">
        <div class="container-fluid col-md-3 text-center custom-font" style="height: 150px; background-color: #ecf3f9; border-style: groove;">
                <h2 style="padding-top: 5%;">View your upcoming appointments</h2>
        </div>
        <div class="container-fluid col-md-3 text-center custom-font" style="height: 150px; background-color: #ecf3f9; border-style: groove;">
                <h2 style="padding-top: 5%;">Book a new appointment now</h2>
        </div>
        <div class="container-fluid col-md-3 text-center custom-font" style="height: 150px; background-color: #ecf3f9; border-style: groove;">
                <h2 style="padding-top: 5%;">Reports</h2>
        </div>
    </div>

    <div class="container-fluid col-md-12" style="height: 130px;">
    </div>
    <div class="container-fluid col-md-12" style="height: 150px; background-color: #515b49;">
    </div>

</template>

<style scoped>
.custom-position{
    position: absolute;
    right: 0;
    margin-right: 2%;
    background-color: #515b49;
    border-style:groove;
}
.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #1c4513;
}
</style>