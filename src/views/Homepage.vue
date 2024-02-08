<template>
  <main>
    <section class="home-search">
      <div class="container">
        <figure>
          <img src="../assets/logo-color.png" alt="" class="logo" />
        </figure>
        <div class="search">
          <h3>Seleziona una specializzazione</h3>
          <div class="d-block d-md-flex justify-content-between">
            <ul class="row justify-content-center gap-2">
              <li
                class="badge-special col-auto"
                v-for="(specializzazione, index) in store.specializations"
                :key="index"
                @click="
                  newFilteredDoctors(
                    filtDoctors,
                    store.allDoctors,
                    specializzazione.id
                  )
                "
              >
                {{ specializzazione.name }}
                <!-- <RouterLink
                  :to="{ name: 'doctors.index' }"
                  class="text-light decoration-none"
                >
                  {{ specializzazione.name }}</RouterLink
                > -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="top-rated">
      <div class="container">
        <ul>
          <li v-for="(doctor, index) in filtDoctors">
            {{ doctor.phone_number }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import DoctorCard from "../components/DoctorCard.vue";
import { store, getSpecialization } from "../store";
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
      filtDoctors: [],
    };
  },
  methods: {
    fetchData() {
      getSpecialization();
    },
    fetchPerSpecialization(index) {
      (this.store.allDoctors = []), console.log(index);
      axios
        .get(`${this.store.BASE_URL}/doctors`, {
          params: {
            specialization_ids: [index],
          },
        })
        .then((res) => {
          console.log(res.data);
          this.store.doctorsPerSpecialization = res.data.results;
          console.log(this.store.doctorsPerSpecialization);
        });
    },
    storeCleaner() {
      this.store.filteredDoctors = [];
    },
    fetchAllDoctors() {
      console.log(this.store.specializations);
      axios.get(`${this.store.BASE_URL}/doctors`).then((res) => {
        console.log(res);
        this.store.allDoctors = res.data.results;
        console.log(this.store.allDoctors);
      });
    },
    newFilteredDoctors(array, doctors, param) {
      console.log(this.store.allDoctors);

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
    this.fetchAllDoctors();
  },
};
</script>

<style lang="scss" scoped>
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
    /* display: grid;
    grid-template-columns: repeat(1, 1fr); */
    // gap: 30px;
    margin-top: 50px;
    flex-wrap: wrap;

    .column {
      padding: 15px 10px;
    }
  }
}
</style>
