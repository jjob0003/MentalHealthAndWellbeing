<script>

export default{
    mounted(){
        const name = this.$route.query.firstName;
        const email = this.$route.query.email;

        this.name = name;
        this.email = email;
    },

    data(){
        return{
            name: this.name,
            email: this.email
        };
    }
}

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
            <h1>Welcome, {{ name }}</h1>
        </div>
</div>

<div class="container-fluid col-md-12 text-center custom-font" style="height: 100px;">
    </div>
    <div class="row">
        <div class="container-fluid col-md-3 text-center custom-font" style="height: auto; background-color: #ecf3f9;">
            <router-link class="custom-font" to="/SendEmails">
                <div class="container-fluid">
                <img src="@/assets/emailimg.jpg" class="img-fluid" alt="email icon" style="margin-top: 8%;">
                </div>
                <h2 style="padding-top: 5%;">Emails</h2>
                <h5>Check and manage your emails here</h5>
            </router-link>
        </div>
        <div class="container-fluid col-md-3 text-center custom-font" style="height: auto; background-color: #ecf3f9;">
            <router-link class="custom-font" to="/ClinicMap">
                <div class="container-fluid">
                <img src="@/assets/directions.jpg" class="img-fluid" alt="map icon" style="margin-top: 8%;">
                </div>
                <h2 style="padding-top: 5%;">Find a mental health clinic near you</h2>
                <h5>Find mental health support service locations near you using our maps</h5>
            </router-link>
        </div>
        <div class="container-fluid col-md-3 text-center custom-font" style="height: auto; background-color: #ecf3f9;">
            <div class="container-fluid">
                <img src="@/assets/graphs.jpg" class="img-fluid" alt="reports image" style="margin-top: 8%;">
            </div>
            <h2 style="padding-top: 5%;">Your reports</h2>
            <h5>View and download your reports</h5>
        </div>
    </div>

    <div class="container-fluid col-md-12" style="height: 130px;">
        <div class="text-center">
            <h5 class="mt-5 custom-font"> <router-link to="/StaffRecords">Find a mental health provider</router-link></h5>
        </div>
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
    text-decoration: none;
}
</style>