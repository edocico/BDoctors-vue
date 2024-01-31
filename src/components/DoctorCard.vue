<template>
  <div class="card">
    <figure>
      <img src="https://picsum.photos/100" alt="" class="rounded-circle" />
    </figure>
    <div class="card-bottom">
      <p>nome dottore</p>
      <p>specializzazione</p>
      <p>
        <router-link :to="{ name: 'doctors.show' }"
          >Vai al profilo...</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  border-color: transparent;
  background-color: #c3e2a5;
  min-height: 100px;

  figure {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
  }

  .card-bottom {
    padding: 10px 20px;
    color: white;
  }
}
</style>
