<template>
  <header class="bg-middle-green">
    <div class="container-fluid">
      <nav class="nav-bar">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo-home">
            <router-link
              :to="{ name: 'home' }"
              class="decoration-none text-light"
            >
              <img
                class="logo-full-header d-none d-md-inline-block"
                src="../assets/logo-white.png"
                alt="BDoctors"
              />
              <img
                class="logo-small-header d-md-none pb-4 pt-2"
                src="../assets/logo-small-white.png"
                alt="BDoctors"
              />
            </router-link>
          </div>
          <div class="menu-item">
            <ul class="d-flex align-items-end gap-4">
              <li class="header-item" @click="storeCleaner()">
                <router-link
                  :to="{ name: 'doctors.index' }"
                  class="decoration-none text-light"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-user-doctor"
                    class="icon fs-3"
                  />
                  <span class="d-none d-md-inline-block">I nostri medici</span>
                </router-link>
              </li>

              <li class="header-item">
                <router-link
                  :to="{ name: 'contacts' }"
                  class="decoration-none text-light"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-address-book"
                    class="icon fs-3"
                  />
                  <span class="d-none d-md-inline-block">Contattaci</span>
                </router-link>
              </li>

              <li class="dropdown">
                <a
                  class="decoration-none text-light header-item"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-user"
                    class="icon fs-3"
                  />
                  <span v-if="!authenticated" class="d-none d-md-inline-block"
                    >profilo dottore
                  </span>
                  <span v-else="authenticated" class="d-none d-md-inline-block"
                    >{{ doctorLog.name }} {{ doctorLog.surname }}</span
                  >
                </a>
                <ul class="dropdown-menu">
                  <div v-if="!authenticated">
                    <li>
                      <a
                        class="dropdown-item"
                        href="http://127.0.0.1:8000/login"
                        >Login</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="http://127.0.0.1:8000/register"
                        >Register</a
                      >
                    </li>
                  </div>
                  <div v-else="authenticated">
                    <li>
                      <a
                        class="dropdown-item"
                        href="http://127.0.0.1:8000/login"
                        >Logout</a
                      >
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      authenticated: false,
      doctorLog: { doctorId: 1, name: "francesco", surname: "rossi" },
      store: store,
    };
  },

  methods: {
    fetchAllDoctors() {
      (this.store.allDoctors = []), (this.store.doctorsPerSpecialization = []);
      axios.get(`${this.store.BASE_URL}/doctors`).then((res) => {
        console.log(res);
        this.store.allDoctors = res.data.results;
        console.log(this.store.allDoctors);
      });
    },
    storeCleaner() {
      this.store.filteredDoctors = [];
    },
  },

  created() {
    // this.fetchUser()
  },
};
</script>

<style lang="scss" scoped>
header {
  color: white;
  padding: 5px 0px 0px 0px;
  box-shadow: 0px 0px 10px #73b760;
}

.dropdown-menu {
  background-color: #43762b;

  .dropdown-item {
    color: white;
    font-weight: 600;
  }

  .dropdown-item:hover {
    color: #b0e29d;
    background-color: #43762b;
  }
}

.logo-small-header {
  width: 70px;
}

.logo-full-header {
  width: 150px;
}

.header-item {
  padding: 5px;
  vertical-align: 5px;
  font-size: 16px;
  font-weight: 800;
}

li:hover {
  color: white;
  // font-weight: 700;
  background-color: #43762b;
  border-radius: 99px;
}

.icon {
  margin-right: 5px;
}
</style>
