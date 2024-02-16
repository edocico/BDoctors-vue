<template>
  <main class="pt-2">

    <!-- filter-dropdown -->
    <section class="search-header mb-2">
      <div class="container">
        <div class="d-flex flex-row gap-3 align-items-center justify-content-end">
          <!-- FORM FILTRI -->

          <!-- filter vote -->
          <div class="btn bg-middle-green dropdown">
            <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <font-awesome-icon icon="fa-solid fa-arrow-down-wide-short" class="icon fs-5 pe-lg-3" />
              <span class="d-none d-lg-inline-block fs-5"> Filtro voti </span>
            </a>
            <div class="dropdown-menu">
              <form action="/action_page.php">
                <!-- numerical order reviews -->
                <div>
                  <span class="d-flex gap-2 mb-0">
                    <input class="checkbox" type="radio" value="1" v-model="store.filtr.avg_vote" @change="filtrPage()">
                    <label>1</label>
                  </span>
                  <span class="d-flex gap-2">
                    <input class="checkbox" type="radio" value="2" v-model="store.filtr.avg_vote" @change="filtrPage()">
                    <label>2</label>
                  </span>
                  <span class="d-flex gap-2">
                    <input class="checkbox" type="radio" value="3" v-model="store.filtr.avg_vote" @change="filtrPage()">
                    <label>3</label>
                  </span>
                  <span class="d-flex gap-2">
                    <input class="checkbox" type="radio" value="4" v-model="store.filtr.avg_vote" @change="filtrPage()">
                    <label>4</label>
                  </span>
                  <span class="d-flex gap-2">
                    <input class="checkbox" type="radio" value="5" v-model="store.filtr.avg_vote" @change="filtrPage()">
                    <label>5</label>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <!-- filter oreder review -->
          <div class="btn bg-middle-green dropdown">
            <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <font-awesome-icon icon="fa-solid fa-sliders" class="icon fs-5 pe-lg-3" />
              <span class="d-none d-lg-inline-block fs-5"> Filtro numero recensioni </span>
            </a>

            <div class="dropdown-menu">
              <form action="/action_page.php">
                <!-- oreder ASC/ DESC -->
                <input class="me-2 checkbox" type="radio" value="asc" v-model="store.filtr.order" @change="filtrPage()">
                <label for="html">Crescente</label><br>
                <input class="me-2 checkbox" type="radio" value="desc" v-model="store.filtr.order" @change="filtrPage()">
                <label for="css">Decrescente</label><br>
              </form>
            </div>
          </div>

          <!-- filter specializations -->
          <div class="btn bg-middle-green dropdown">
            <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <font-awesome-icon icon="fa-solid fa-user-tag" class="icon fs-5 pe-lg-3" />
              <span class="d-none d-lg-inline-block fs-5">Filtro specializzazione </span>
            </a>

            <ul class="dropdown-menu">
              <li>
                <label for="tutti">
                  <input id="tutti" name="tutti" type="radio" value="" v-model="store.filtr.specialization_id"
                    style="position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;" @change="filtrPage()">
                  Tutti
                </label>
              </li>
              <!-- list of specializations -->
              <li v-for="(specialization, index) in store.specializations" :key="index">
                <label :for="specialization.name">
                  <input :id="specialization.name" :name="specialization.name" type="radio" :value="specialization.id"
                    v-model="store.filtr.specialization_id"
                    style="position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;" @change="filtrPage()">
                  {{ specialization.name }}
                </label>
              </li>
            </ul>
          </div>

          <!-- BUTTON AZZERA -->
          <button class="btn bg-middle-green dropdown text-light" @click="removeChecked(), axiosDoctors()">
            <font-awesome-icon :icon="['far', 'trash-can']" class="icon fs-5 pe-lg-3" />
            <span class="d-none d-lg-inline-block fs-5">
              Azzera filtri
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Print card doctors -->
    <div v-if="store.allDoctors.length > 0 || store.allSponsor.length > 0">
      <section class="search-results">
        <div class="container">
          <!-- Risultati di ricerca - nome specializazzione -->
          <div class="d-black d-lg-flex mb-4 gap-3 align-items-center ">
            <p v-if="store.allDoctors.length > 0">
              <span class="results text-dark-green">{{ store.allDoctors.length + store.allSponsor.length }}
                risultati</span>
            </p>
            <p class="text-dark-green fst-italic fs-5">
              stai visualizzando:
              <span class="text-uppercase fw-bold fs-3 mx-2">
                {{ findSpecName(store.specializations) }}
              </span>
            </p>
          </div>

          <div class="card-container d-block mb-2 d-md-flex gap-lg-5 justify-content-evenly">
            <!-- sponsored profiles -->
            <template v-if="store.allSponsor.length > 0">
              <DoctorCard v-for="(doctor, index) in store.allSponsor" :key="index" :item="doctor" :isSponsor=true />
            </template>

            <!-- no sponsored profiles -->
            <template v-if="store.allDoctors.length > 0">
              <DoctorCard v-for="(doctor, index) in store.allDoctors" :key="index" :item="doctor" />
            </template>
          </div>
        </div>
      </section>
    </div>
    
    <div v-else class="loading">
      Non ci sono risultati
    </div>
  </main>
</template>

<script>
import SearchBar from "../../components/SearchBar.vue";
import DoctorCard from "../../components/DoctorCard.vue";
import { store, getSpecialization, getDoctors, filtr, clearInputChecked } from "../../store";
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
    };
  },
  methods: {
    removeChecked() {
      clearInputChecked()
    },
    fetchData() {
      getSpecialization();
    },
    axiosDoctors(query) {
      getDoctors(query);
    },
    //Funzione che crea nuova url da utilizzare in chiamata axios
    filtrPage() {
      let router = this.$router;
      filtr(router)
      // //Nuovo query
      // let newQuery = {};

      // //Cicliamo variabili per costruire nuova query 
      // for (let key in this.store.filtr) {
      //   //Se il valore della variabile non e null, questa nome della variabile e il suo valore viene aggiunto nel newQuery 
      //   if (this.store.filtr[key]) {
      //     newQuery[key] = this.store.filtr[key]
      //   }
      // }
      // //Inseriamo nuova query nel url
      // this.$router.push({ path: '/medici', query: newQuery })
      // //Uttilizziamo nuova url per fare chiamata axios
      // this.axiosDoctors(newQuery);
    },
    findSpecName(results) {
      let id = this.$route.query.specialization_id;
      // console.log('SPEC ID', id);

      const matchingObject = results.find((obj) => obj.id == id);
      if (matchingObject) {
        return matchingObject.name;
      } else {
        return "tutti i dottori presenti";
      }
    },
  },
  created() {
    this.fetchData();
    this.axiosDoctors(this.$route.query);
  },
  mounted() {
  },
  beforeUpdated() {
  },
  updated() {
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
    padding: 5px 0px;
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



