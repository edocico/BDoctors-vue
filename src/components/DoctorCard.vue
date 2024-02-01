<template>
  <div class="card-cust">
    <figure>
      <img
        src="https://picsum.photos/100"
        alt=""
        class="rounded-circle img-thumbnail"
      />
    </figure>
    <div class="card-bottom">
      <div>
        <font-awesome-icon icon="fa-solid fa-user-doctor" />
        <p>nome dottore</p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-stethoscope" />
        <p>specializzazione</p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-square-poll-vertical" />
        <p>voto</p>
      </div>
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
.card-cust {
  border-color: transparent;
  background-color: #c3e2a5;
  //   min-height: 100px;
  padding: 5px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 0px 10px #c3e2a5;

  figure {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
  }

  .card-bottom {
    padding: 10px 20px;
    color: black;
    background-color: white;
  }
}
</style>
