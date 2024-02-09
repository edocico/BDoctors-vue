<template>
  <main class="pt-2">
    <div
      v-if="
        store.allDoctors.length > 0 || store.doctorsPerSpecialization.length > 0
      "
    >
      <section class="">
        <div class="container">
          <div class="d-flex align-items-center flex-row-reverse">
            <div class="btn bg-middle-green dropdown">
              <a
                class="decoration-none text-light header-item"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon
                  icon="fa-solid fa-user"
                  class="icon fs-5 pe-3"
                />
                <span class="d-none d-md-inline-block fs-5">
                  Specializzazioni
                </span>
              </a>
              <ul class="dropdown-menu">
                <li
                  class=""
                  v-for="(specialization, index) in store.specializations"
                  :key="index"
                  @click="
                    FilteredDoctors(
                      store.filteredDoctors,
                      store.allDoctors,
                      specializzazione.id
                    )
                  "
                >
                  <RouterLink
                    :to="{ name: 'doctors.index' }"
                    class="text-light decoration-none"
                  >
                    {{ specialization.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="search-results">
        <div class="container">
          <span>
            <p v-if="store.filteredDoctors.length === 0">
              <span class="results text-dark-green"
                >{{ store.allDoctors.length }} risultati</span
              >
            </p>
            <p v-else-if="store.filteredDoctors.length > 0">
              <span class="">{{ store.filteredDoctors.length }} risultati</span>
            </p>
          </span>
          <!-- <p v-if="store.allDoctors.length > 0">
          {{ store.allDoctors.length }}
          risultati
        </p>
        <p v-else-if="store.doctorsPerSpecialization.length > 0">
          {{ store.doctorsPerSpecialization.length }} risultati
        </p> -->
          <div
            class="card-container d-block mb-2 d-md-flex gap-5 justify-content-evenly"
          >
            <template v-if="store.filteredDoctors.length === 0">
              <DoctorCard
                v-for="(doctor, index) in store.allDoctors"
                :key="index"
                :item="doctor"
              />
            </template>

            <template v-if="store.filteredDoctors.length > 0">
              <DoctorCard
                v-for="(doctor, index) in store.filteredDoctors"
                :key="index"
                :data="doctor"
              />
            </template>
            <!-- <div v-else-if="store.doctorsPerSpecialization.length = 0">
              <p>nussun dottore trovato</p>
            </div> -->
          </div>
        </div>
      </section>
    </div>
    <div v-else class="loading">Caricamento...</div>
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

  data() {
    return {
      store: store,
    };
  },
  methods: {
    fetchData() {
      getSpecialization();
    },
    axiosDoctors(id) {
      getDoctors(id);
    },
    FilteredDoctors(array, doctors, param) {
      console.log(this.store.allDoctors);
      this.store.filteredDoctors = [];

      for (let doctor of doctors) {
        for (let specializzazione of doctor.specializations) {
          if (specializzazione.id === param) {
            array.push(doctor);
          }
        }
      }

      console.log(array);
      return array;
    },
  },
  created() {
    this.fetchData();
    // this.fetchAllDoctors();
  },
  mounted() {
    this.axiosDoctors();
    console.log(this.store.allDoctors);
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
