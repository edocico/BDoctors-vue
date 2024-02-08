<template>
  <div class="col-12 col-md-5 col-lg-3 ">
    <div class="card-cust ">
      <figure>
        <img v-if="item" :src="store.Url + item.photo" alt="" class="img-cust rounded-circle img-thumbnail" />
        <img v-else-if="data" :src="store.Url + data.photo" alt="" class="img-cust rounded-circle img-thumbnail" />
      </figure>
      <div class="card-bottom ">
        <div>
          <font-awesome-icon icon="fa-solid fa-user-doctor" />
          <p>name dottore</p>
        </div>
        <div class="h-100">
          <font-awesome-icon icon="fa-solid fa-stethoscope" />
          <ul v-if="item">
            <li v-for="(specializzazione, index) in item.specializations" :key="index">
              {{ specializzazione.name }}
            </li>
          </ul>
          <ul v-else-if="data">
            <li v-for="(specializzazione, index) in data.specializations" :key="index">
              {{ specializzazione.name }}
            </li>
          </ul>
          <!-- <p>specializzazione dottore</p> -->
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-square-poll-vertical" />
          <p v-if="item">{{ item.phone_number }}</p>
          <p v-else-if="data">{{ data.phone_number }}</p>
        </div>
        <p v-if="item">
          <router-link :to="{ name: 'doctors.show', params: { id: item.id } }">Vai al profilo...</router-link>
        </p>
        <p v-else-if="data">
          <router-link :to="{ name: 'doctors.show', params: { id: data.id } }">Vai al profilo...</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  props: {
    item: {
      type: Object,
    },
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

figure {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-cust {
    width: 200px;
    height: 200px;
  }

}


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
