<template>
    <header class="bg-middle-green">
        <div class="container-fluid">
            <nav class="nav-bar">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo-home">
                        <h3>LOGO</h3>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="menu-item">
                        <ul class="d-flex align-items-center gap-4 ">
                            <li class="header-item">I nostri medici</li>
                            <li class="header-item">Contatti</li>
                            <li class="header-item">Accedi (icona)</li>
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

header {
    color: white;
    padding: 20px 0px;
}

.header-item {
    padding: 5px;
    vertical-align: 5px;
    font-size: 16px;
    font-weight: 800;
}

li:hover {
    color: white;
    // font-weight: 700;
    background-color: #43762b;
    border-radius: 99px;
}

</style>