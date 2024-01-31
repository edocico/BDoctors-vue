<template>
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="d-flex justify-content-between">
                    <div class="pt-2">
                        <h5 >
                            <router-link :to="{ name: 'home' }" 
                            class="decoration-none text-light-green">
                                <img class="logo-full-color" src="../assets/logo-color.png" alt="">
                            </router-link>
                        </h5>
                        <p class="text-medium-footer">Per qualunque informazione ci troverai nella sezione
                            <router-link :to="{ name: 'contacts' }" class="decoration-none text-light">
                                <strong class="text-light-green">Contattaci</strong>
                            </router-link>    
                        </p>
                        <ul class="d-flex gap-4">
                            <li>fb</li>
                            <li>insta</li>
                            <li>in</li>
                            <li>yt</li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="text-large-footer  text-center">
                            <router-link :to="{ name: 'doctors.index' }" class="decoration-none text-light-green" >I nostri specialisti</router-link>    
                        </h5>
                        <div class="d-flex justify-content-between">
                            <ul class="text-medium-footer ">
                                <li class="mb-2">Neurologia</li>
                                <li class="mb-2">Neuropsichiatria infantile</li>
                                <li class="mb-2">Psichiatria</li>
                                <li class="mb-2">Dermatologia</li>
                                <li class="mb-2">Cardiologia</li>
                            </ul>
                            <ul class="text-medium-footer ">
                                <li class="mb-2">Ortopedia</li>
                                <li class="mb-2">Gastroenterologia</li>
                                <li class="mb-2">Oncologia</li>
                                <li class="mb-2">Endocrinologia</li>
                                <li class="mb-2">Nefrologia</li>
                            </ul>
                            <ul class="text-medium-footer ">
                                <li class="mb-2">Oculistica</li>
                                <li class="mb-2">Pediatria</li>
                                <li class="mb-2">Chirurgia generale</li>
                                <li class="mb-2">Radiologia</li>
                                <li class="mb-2">Ginecologia</li>
                            </ul>
                            <ul class="text-medium-footer ">
                                <li class="mb-2">Urologia</li>
                                <li class="mb-2">Pneumologia</li>
                                <li class="mb-2">Otorinolaringoiatria</li>
                                <li class="mb-2">Reumatologia</li>
                                <li class="mb-2">Allergologia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="text-small-footer text-center">Copyright &#169; 2024 <strong class="text-light-green ">BDoctors-team 6</strong>,tutti i diritti sono riservati</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

footer {
    background-color: #274b16;
    color: white;
}

.logo-full-color {
    width: 140px;
}
.text-small-footer {
    font-size: 12px;
}

.text-medium-footer {
    font-size: 15px;
}

.text-large-footer {
    font-size: 18px;
}

li:hover {
    color: #b0e29d;
    cursor: pointer;
    font-weight: 500;
}

.footer-top {
    padding-top: 30px;
}

.footer-bottom {
    padding: 30px 0px;
}
</style>
