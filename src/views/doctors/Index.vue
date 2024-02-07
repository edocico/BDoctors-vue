<template>
  <main>
    <section class="search-bar bg-middle-green">
      <div class="">
        <div class="dropdown">
          <a
            class="decoration-none text-light header-item"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon icon="fa-solid fa-user" class="icon fs-3" />
            <span class="d-none d-md-inline-block"> Specializzazioni </span>
          </a>
          <ul class="dropdown-menu">
            <li
              v-for="(specialization, index) in store.specializations"
              :key="index"
              @click="fetchPerSpecialization(specialization.id)"
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
    </section>
    <section class="search-results">
      <div class="container">
        <p v-if="store.allDoctors.length > 0">
          {{ store.allDoctors.length }}
          risultati
        </p>
        <p v-else-if="store.doctorsPerSpecialization.length > 0">
          {{ store.doctorsPerSpecialization.length }} risultati
        </p>
        <div class="card-container d-block mb-2 d-md-flex gap-4">
          <template v-if="store.allDoctors.length > 0">
            <DoctorCard
              v-for="(doctor, index) in store.allDoctors"
              :key="index"
              :item="doctor"
            />
          </template>

          <template
            v-if="
              store.allDoctors.length === 0 &&
              store.doctorsPerSpecialization.length > 0
            "
          >
            <DoctorCard
              v-for="(doctor, index) in store.doctorsPerSpecialization"
              :key="index"
              :data="doctor"
            />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from "../../components/SearchBar.vue";
import DoctorCard from "../../components/DoctorCard.vue";
import { store, getSpecialization } from "../../store";
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
    fetchAllDoctors() {
      (this.store.allDoctors = []),
       (this.store.doctorsPerSpecialization = []);
      axios.get(`${this.store.BASE_URL}/doctors`).then((res) => {
        console.log(res);
        this.store.allDoctors = res.data.doctors;
      });
    },
    fetchPerSpecialization(index) {
      (this.store.allDoctors = []), 
      console.log(index);
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
  },
  created() {
    this.fetchData();
    // this.fetchAllDoctors();
  },

  mounted() {
    // this.fetchAllDoctors();
  }
};
</script>

<style lang="scss" scoped>
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
        font-weight: 600;
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
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px; */
        flex-wrap: wrap;
        /*  */
      }
    }
  }
}
</style>
