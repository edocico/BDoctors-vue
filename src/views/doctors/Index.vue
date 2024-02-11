<template>
  <main class="pt-2">
    <div v-if="store.allDoctors.length > 0 || store.doctorsPerSpecialization.length > 0">
      <section class="search-header mb-4">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <form action="/action_page.php">
              <p>Please select your favorite Web language:</p>
              <input type="radio" value="asc" v-model="store.filtr.order" @change="filtrPage()">
              <label for="html">ASCE</label><br>
              <input type="radio" value="desc" v-model="store.filtr.order" @change="filtrPage()">
              <label for="css">DESC</label><br>

              <input type="radio" value="1" v-model="store.filtr.avg_vote" @change="filtrPage()">
              <label>1</label>
              <input type="radio" value="2" v-model="store.filtr.avg_vote" @change="filtrPage()">
              <label>2</label>
              <input type="radio" value="3" v-model="store.filtr.avg_vote" @change="filtrPage()">
              <label>3</label>
              <input type="radio" value="4" v-model="store.filtr.avg_vote" @change="filtrPage()">
              <label>4</label>
              <input type="radio" value="5" v-model="store.filtr.avg_vote" @change="filtrPage()">
              <label>5</label>
            </form>

            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <!-- <form action="/action_page.php">
              <p>Please select your favorite Web language:</p>
              <ul>
                <li v-for="(specialization, index) in store.specializations" :key="index">
                  <input type="radio" id="html" name="fav_language" :value=specialization.id
                    v-model="store.filtr.specialization_id" @change="filtrPage()">
                  <label for="html">{{ specialization.name }} </label>
                </li>
              </ul>
            </form> -->
            <span>
              <p v-if="store.allDoctors.length > 0">
                <span class="results text-dark-green">{{ store.allDoctors.length }} risultati</span>
              </p>
              <!-- <p v-else-if="store.doctorsPerSpecialization.length > 0">
                <span class="">{{ store.doctorsPerSpecialization.length }} risultati</span>
              </p> -->
            </span>
            <div class="btn bg-middle-green dropdown">
              <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-user" class="icon fs-5 pe-3" />
                <span class="d-none d-md-inline-block fs-5"> Specializzazioni </span>
              </a>
              <ul class="dropdown-menu">
                <li class="" v-for="(specialization, index) in store.specializations" :key="index">
                  <input type="radio" id="html" name="fav_language" :value=specialization.id
                    v-model="store.filtr.specialization_id" @change="filtrPage()">
                  <label for="html">{{ specialization.name }} </label>
                  <!-- <RouterLink :to="{ name: 'doctors.index' }" class="text-light decoration-none">
                    {{ specialization.name }}
                  </RouterLink> -->
                  <!-- <router-link :to="{ name: 'doctors.index', query: { specialization_id: specialization.id } }"
                    class="text-light decoration-none">
                    {{ specialization.name }}</router-link> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="search-results">
        <div class="container">

          <!-- <p v-if="store.allDoctors.length > 0">
          {{ store.allDoctors.length }}
          risultati
        </p>
        <p v-else-if="store.doctorsPerSpecialization.length > 0">
          {{ store.doctorsPerSpecialization.length }} risultati
        </p> -->
          <div class="card-container d-block mb-2 d-md-flex gap-5 justify-content-evenly">
            <template v-if="store.allDoctors.length > 0">
              <DoctorCard v-for="(doctor, index) in store.allDoctors" :key="index" :item="doctor" />
            </template>

            <template v-if="store.allDoctors.length === 0 &&
              store.doctorsPerSpecialization.length > 0
              ">
              <DoctorCard v-for="(doctor, index) in store.doctorsPerSpecialization" :key="index" :data="doctor" />
            </template>
            <!-- <div v-else-if="store.doctorsPerSpecialization.length = 0">
              <p>nussun dottore trovato</p>
            </div> -->
          </div>
        </div>
      </section>
    </div>
    <div v-else class="loading">
      Caricamento...
    </div>

  </main>
</template>

<script>
import SearchBar from "../../components/SearchBar.vue";
import DoctorCard from "../../components/DoctorCard.vue";
import { store, getSpecialization, getDoctors } from "../../store";
import axios from "axios";

export default {
  components: {
    SearchBar,
    DoctorCard,
  },

  props: {
    id: String,
  },

  data() {
    return {
      store: store,
      storeFiltr: store.filtr.asc,
      // filtr: {
      //   asc: '',
      //   specialization_id: '',
      //   filtr_reviews: '',
      // }
    };
  },
  methods: {
    fetchData() {
      getSpecialization();
    },
    axiosDoctors(query) {
      getDoctors(query);
    },
    filtrPage() {
      //Nuovo query
      let newQuery = {};

      //Cicliamo variabili per costruire nuova query 
      for (let key in this.store.filtr) {
        if (this.store.filtr[key]) {
          newQuery[key] = this.store.filtr[key]
        }
      }
      console.log('NUOVA QUERY', newQuery);
      this.$router.push({ path: '/medici', query: newQuery })
      this.axiosDoctors(newQuery);
    }
  },
  created() {
    console.log('Created route query', this.$route.query)
    this.fetchData();
    this.axiosDoctors(this.$route.query);
  },
  mounted() {
  },
  beforeUpdated() {
    // this.fetchAllDoctors();
  },
  updated() {
    // this.fetchAllDoctors();
  },
};
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  font-size: 100px;
  padding: 100px 0px;
}

main {
  padding-bottom: 80px;

  .search-bar {
    padding: 15px 0px;
    border-bottom: 1px solid black;

    .container-fluid {
      display: flex;
      justify-content: center;
    }
  }

  .results {
    padding: 0px 10px;
    font-size: 18px;
    font-weight: 700;
    border: 5px solid #73b760;
    border-radius: 99px;
  }

  .dropdown {
    background-color: #73b760;
    line-height: 40px;
    padding: 5px 10px;

    .dropdown-menu {
      background-color: #43762b;
      color: white;
      overflow-y: scroll;
      height: 350px;
      padding: 10px;

      .dropdown-item {
        font-weight: 500;
      }

      .dropdown-item:hover {
        color: #b0e29d;
        background-color: #43762b;
      }
    }

    li {
      margin-bottom: 5px;
      font-weight: 600;
    }
  }

  .search-results {
    .container {
      padding: 20px 0px;

      .card-container {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
