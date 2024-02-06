<template>
  <div class="d-sm-col-12 d-md-col-3 d-xl-col-2">
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
          <p>{{ item.medical_services }}</p>
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
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
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
