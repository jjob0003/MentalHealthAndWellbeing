<template>
    <div class="col-md-12">
        <nav class="navbar navbar-expand-lg custom-color">
            <h1 class="navbar-brand custom-font" style="padding: 1%;">Little Sanctuary</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link custom-font" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-font" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-font" href="#">Donate</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle custom-font" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More activities
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                            <a class="dropdown-item" href="#">Action 3</a>
                        </div>
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
    background-color: #1c4513;
}

.custom-font{
    color: whitesmoke;
    font-family: fantasy;
}

</style>