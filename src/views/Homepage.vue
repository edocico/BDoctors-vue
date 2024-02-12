<template>
  <main>
    <div v-if="store.specializations.length > 0">
      <section class="home-search">
        <div class="container">
          <figure>
            <img src="../assets/logo-color.png" alt="" class="logo" />
          </figure>
          <div class="search">
            <h3>Seleziona una specializzazione</h3>
            <div class="d-block d-md-flex justify-content-between">
              <ul class="row justify-content-center gap-2">
                <li class="badge-special col-auto" v-for="(specializzazione, index) in store.specializations"
                  :key="index">
                  <router-link 
                    class="text-light decoration-none"
                    :to="{ name: 'doctors.index', query: { specialization_id: specializzazione.id } }"
                    >
                    {{ specializzazione.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="top-rated">
        <div class="container">
          <h2 class="text-center mb-5">
            Top rated (quelli che hanno pagato per farsi vedere)
          </h2>
          <div class="d-block mb-2 d-md-flex gap-5 justify-content-evenly">
            <template v-if="store.allDoctors.length > 0">
              <DoctorCard
                v-for="(doctor, index) in store.allDoctors.slice(0, 4)"
                :key="index"
                :item="doctor"
              />
            </template>

            <!-- <div class="card-container d-md-flex">
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
            <div class="column d-sm-block col-md-4 col-xl-2">
              <DoctorCard />
            </div>
          </div> -->
          </div>
        </div>
      </section>
    </div>

    <div v-else class="loading">Caricamento...</div>
  </main>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import DoctorCard from "../components/DoctorCard.vue";
import { store, getSpecialization, getDoctors } from "../store";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  components: {
    SearchBar,
    DoctorCard,
    RouterLink,
  },
  data() {
    return {
      store: store,
    };
  },
  methods: {
    fetchData() {
      getSpecialization();
    },
    axiosDoctors(query) {
      getDoctors(query);
    },
  },
  created() {
    this.fetchData();
    this.axiosDoctors();
  },
};
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  font-size: 100px;
  padding: 130px 0px;
}

li:hover {
  color: #c3e2a5;
}

.badge-special {
  background-color: #43762b;
  color: white;
  font-size: 25px;
  padding: 0px 20px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  border-radius: 10px;

  &:hover {
    color: #c3e2a5;
  }
}

.home-search {
  padding: 20px 20px 20px 20px;
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: inherit;
  background-position-x: 120px;

  figure {
    display: flex;
    justify-content: center;
    width: 350px;

    .logo {
      display: block;
      max-width: 100%;
    }
  }

  .search {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #c3e2a5;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #c3e2a5;
  }
}

.top-rated {
  padding: 70px 0px;

  .card-container {
    margin-top: 50px;
    flex-wrap: wrap;

    .column {
      padding: 15px 10px;
    }
  }
}
</style>
