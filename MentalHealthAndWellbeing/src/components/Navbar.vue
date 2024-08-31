<template>
<div class="col-md-12">
        <nav class="navbar navbar-expand-lg custom-color">
            <h2 class="navbar-brand custom-font" style="padding: 1%;">Little Sanctuary</h2>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link custom-font" to="/">Home</router-link >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-font" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-font" href="#">Donate</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link custom-font" to="/LoginForm">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link custom-font" to="/CreateAccount">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-font" href="#">Emergency help</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
</template>

<script>

</script>

<style scoped>
.custom-color{
    background-color: #515b49;
    font-size: larger;
}

.custom-font{
    color: whitesmoke;
    font-family: fantasy;
}


</style>