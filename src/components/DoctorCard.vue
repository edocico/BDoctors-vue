<template>
  <div class="d-sm-col-12 d-md-col-3 d-xl-col-2">
    <div class="card-cust h-100">
      <div class="card-top">
        <figure>
          <img
            v-if="item"
            :src="store.Url + item.photo"
            alt=""
            class="rounded-circle img-thumbnail"
          />
          <img
            v-else-if="data"
            :src="store.Url + data.photo"
            alt=""
            class="rounded-circle img-thumbnail"
          />
        </figure>
      </div>
      <div class="card-bottom">
        <div>
          <font-awesome-icon icon="fa-solid fa-user-doctor" />
          <p>name dottore</p>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-stethoscope" />
          <ul v-if="item" class="list">
            <li
              v-for="(specializzazione, index) in item.specializations"
              :key="index"
            >
              {{ specializzazione.name }}
            </li>
          </ul>
          <ul v-else-if="data" class="list">
            <li
              v-for="(specializzazione, index) in data.specializations"
              :key="index"
            >
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
          <router-link :to="{ name: 'doctors.show', params: { id: item.id } }"
            >Vai al profilo...</router-link
          >
        </p>
        <p v-else-if="data">
          <router-link :to="{ name: 'doctors.show', params: { id: data.id } }"
            >Vai al profilo...</router-link
          >
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
.card-cust {
  border-color: transparent;
  background-color: #c3e2a5;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 0px 10px #c3e2a5;

  figure {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    max-width: 250px;
    aspect-ratio: 1/1;

    img {
      display: block;
    }
  }

  .card-bottom {
    padding: 10px 20px;
    color: black;
    background-color: white;

    .list {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }

  .card-top {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
}
</style>
