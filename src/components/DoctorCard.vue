<template>
  <div class="card">
    <figure>
      <img src="https://picsum.photos/100" alt="" />
    </figure>
    <div class="card-bottom">
      <p>nome dottore</p>
      <p>specializzazione</p>
      <a href="#">vai al profilo</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  border-color: transparent;
  background-color: #73b760;
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
