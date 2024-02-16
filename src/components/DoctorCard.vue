<template>
  <div v-if="item" class="pb-4 pb-lg-0">
    <!-- Router link che
    permette il click diretto sulla card, per collegarsi alla show id
    del dottore -->
    <router-link :to="{ name: 'doctors.show', params: { id: item.id } }"
      class="col-12  col-md-5 col-lg-3 text-decoration-none">

      <div class="card-cust h-100"
        :class="{ 'card-cust': true, 'sponsor-background': isSponsor, 'sponsor-hover': isSponsor }">
        <div class="card-top">
          <!-- image-doctor -->
          <figure>
            <img v-if="item" :src="store.Url + item.photo" alt="" class="rounded-circle img-thumbnail" />
            <img v-else-if="data" :src="store.Url + data.photo" alt="" class="rounded-circle img-thumbnail" />
          </figure>
        </div>

        <div class="card-bottom h-100">
          <!-- name/ sponsor -->
          <div>
            <div>

            </div>
            <div class="d-flex justify-content-between align-items-center">
              <!-- name -->
              <span class="d-flex align-items-center">
                <p class="pe-3 "><font-awesome-icon icon="fa-solid fa-user-doctor" /></p>
                <p class="card-fullname fw-bold">{{ item.user.name }} {{ item.user.surname }}</p>
              </span>
              <!-- sponsor -->
              <p v-if="isSponsor" class="sponsor-icon "><font-awesome-icon icon="fa-solid fa-crown" class="crown" /></p>
            </div>
          </div>

          <!-- specializations -->
          <div class="specializations d-flex">
            <font-awesome-icon icon="fa-solid fa-stethoscope" />
            <ul v-if="item" class="list">
              <li class=" specializations" v-for="(specializzazione, index) in item.specializations" :key="index">
                {{ specializzazione.name }}
              </li>
            </ul>
            <ul v-else-if="data" class="list">
              <li v-for="(specializzazione, index) in data.specializations" :key="index">
                {{ specializzazione.name }}
              </li>
            </ul>
          </div>

          <!-- total review -->
          <div class="">
            <div class="d-flex align-items-center">
              <p class="pe-3"><font-awesome-icon icon="fa-solid fa-square-poll-vertical" /></p>
              <p><strong>Numero di recensioni:</strong> {{ item.reviews_count }}</p>
            </div>

            <!-- total vote -->
            <div v-if="calcVote > 0" class="star-vote">
              <div class="information mb-3">
                <div class="d-flex justify-content-center ">
                  <span class="pe-2"><strong>Voto:</strong></span>
                  <span class="star-icon" v-for="item in calcVote"><font-awesome-icon icon="fa-solid fa-star" /></span>
                  <span class="star-icon" v-for="item in 5 - calcVote">&star;</span>
                </div>
              </div>
            </div>
            <div v-else class="mb-3 d-flex justify-content-center">
              <strong class="pe-2">Voto:</strong>
              <span class="information">nessun voto</span>
            </div>

          </div>
          <p v-if="item">
            <router-link :to="{ name: 'doctors.show', params: { id: item.id } }">Vai al profilo...</router-link>
          </p>
          <p v-else-if="data">
            <router-link :to="{ name: 'doctors.show', params: { id: data.id } }">Vai al profilo...</router-link>
          </p>
        </div>
      </div>

    </router-link>
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

    isSponsor: {
      type: Boolean,
      required: false,
    }
  },

  computed: {
    calcVote() {
      return Math.trunc(this.item.media_voti);
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

  &:hover {
    box-shadow: 0px 3px 3px 3px #73b760;
    border-radius: 20px 20px 0px 0px;
    transform: scale(1.1);
  }

  figure {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    max-width: 250px;
    aspect-ratio: 1/1;

    img {
      display: block;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .specializations {
    height: 130px;
  }

  .star-icon {
    color: #e2cc01;
  }

  .sponsor-icon {
    color: #daa520;
    font-size: 20px;
  }

  .card-fullname {
    font-size: 18px;
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


.sponsor-hover:hover {
  box-shadow: 0px 3px 3px 3px #e2cc01;
}

.sponsor-background {
  background-color: #eff161;
}
</style>
