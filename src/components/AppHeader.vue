<template>
    <header class="bg-middle-green">
        <div class="container">
            <nav class="nav-bar">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo-home">
                        <h3>LOGO</h3>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="menu-item">
                        <ul class="d-flex align-items-center gap-3 ">
                            <li class="header-item cursor-pointer">i nostri medici</li>
                            <li class="header-item cursor-pointer">contatti</li>
                            <li class="header-item cursor-pointer">accedi (icona)</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.cursor-pointer {
    cursor: pointer;
}

li:hover {
    color: #ddf5c5;
}



header {
    color: white;
    background-color: red;
    padding: 20px 0px;
}

.header-item {
    // border:1px solid black;
    padding: 5px;
    vertical-align: 5px;
    font-size: 16px;
    font-weight: 800;
}

//testi colori
.text-extra-light-green {
    color: #c3e2a5;
}
.text-light-green {
    color: #b0e29d;
}

.text-middle-green {
    color: #73b760;
}

.text-dark-green {
    color: #43762b;
}

//background colori
.bg-extra-light-green {
    background-color: #c3e2a5;
}
.bg-light-green {
    background-color: #b0e29d;
}

.bg-middle-green {
    background-color: #73b760;
}

.bg-dark-green {
    background-color: #43762b;
}
</style>