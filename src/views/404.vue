<template>
  <section class="page-404">
    <div class="container">
      <div class="row">
        <div class="mb-5">
          <h1 class="h-404 text-center ">errore 404</h1>
          <h2 class="text-center">pagina non trovata</h2>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn-cust">
            <router-link class="decoration-none text-light" :to="{ name: 'home' }">Ritorna alla Home</router-link>
          </button> 
        </div>  
      </div>  
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.page-404 {
  padding-top: 30px;
  padding-bottom: 100px;
  
  .h-404 {
    font-size: 80px;
  }
}

.btn-cust {
  font-size: 35px;
}
</style>
