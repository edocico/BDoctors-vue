<template>
  <footer>
    <div class="container">
      <div class="footer-top">
        <div class="d-lg-flex justify-content-between">
          <div class="order-lg-2 d-md-col-9">
            <h5 class="text-large-footer text-center">
              <router-link
                :to="{ name: 'doctors.index' }"
                class="decoration-none text-light-green"
                >I nostri specialisti</router-link
              >
            </h5>
            <div class="container">
              <ul
                class="d-block d-md-flex flex-wrap gap-1 justify-content-between"
              >
                <li
                  class="col-3 ju"
                  v-for="(specialization, index) in store.specializations"
                  :key="index"
                >
                <router-link 
                    class="text-light decoration-none"
                    :to="{ name: 'doctors.index', query: { specialization_id: specialization.id } }"
                    >
                    {{ specialization.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="order-lg-1 d-md-col-3 pt-2">
            <div class="text-center">
              <router-link
                :to="{ name: 'home' }"
                class="decoration-none text-light-green"
              >
                <img
                  class="logo-full-color"
                  src="../assets/logo-color.png"
                  alt=""
                />
              </router-link>
            </div>
            <p class="text-medium-footer text-center">
              Per qualunque informazione ci troverai nella sezione
              <router-link
                :to="{ name: 'contacts' }"
                class="decoration-none text-light"
              >
                <strong class="text-light-green">Contattaci</strong>
              </router-link>
            </p>
            <ul class="d-flex justify-content-center gap-5">
              <li class="social-icon">
                <a class="text-light-green" href="#"
                  ><font-awesome-icon icon="fa-brands fa-facebook"
                /></a>
              </li>
              <li class="social-icon">
                <a class="text-light-green" href="#"
                  ><font-awesome-icon icon="fa-brands fa-square-instagram"
                /></a>
              </li>
              <li class="social-icon">
                <a class="text-light-green" href="#"
                  ><font-awesome-icon icon="fa-brands fa-linkedin"
                /></a>
              </li>
              <li class="social-icon">
                <a class="text-light-green" href="#"
                  ><font-awesome-icon icon="fa-brands fa-youtube"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="text-small-footer text-center">
          Copyright &#169; 2024
          <strong class="text-light-green">BDoctors-team 6</strong>,tutti i
          diritti sono riservati
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { store, getSpecialization, getDoctors } from "../store.js";
import axios from "axios";

export default {
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

    /* fetchPerSpecialization(index) {
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
    }, */
  },

  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #274b16;
  color: white;
  box-shadow: 0px 0px 10px #274b16;
}

.logo-full-color {
  width: 140px;
}
.text-small-footer {
  font-size: 12px;
}

.text-medium-footer {
  font-size: 15px;
}

.text-large-footer {
  font-size: 18px;
}

li:hover {
  color: #b0e29d;
  cursor: pointer;
  font-weight: 500;
}

.footer-top {
  padding-top: 30px;

  .social-icon {
    font-size: 24px;

    // &:hover {
    //   color: #73b760;
    // }
  }
}

.footer-bottom {
  padding: 30px 0px;
}
</style>
