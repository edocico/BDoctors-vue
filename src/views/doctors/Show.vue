<template>
  <!-- controllo caricamento:
  Se i dati sono stati ricevuti allora stamperò il contenuto -->
  <div v-if="!loading">
    <section class="profile">
      <div class="container">
        <div class="d-flex justify-content-center gap-4">
          <!-- profilo -->
          <div class="col-6">
            <!-- header profile -->
            <div
              class="head-profile"
              v-bind:style="{
                backgroundColor: hasSponsor ? '#eff161' : '#c3e2a5',
              }"
            >
              <div class="d-flex gap-4 align-items-end">
                <!-- image doctor -->
                <img
                  class="img-profile img-thumbnail rounded-circle"
                  :src="store.Url + doctor.photo"
                  alt=""
                />
                <div class="">
                  <!-- fullname doctor -->
                  <h3>{{ doctor.user.name }} {{ doctor.user.surname }}</h3>
                  <!-- sponsor doctor -->
                  <p>
                    <span v-if="hasSponsor">
                      <em class="sponsor">Consigliato</em>
                      <font-awesome-icon
                        icon="fa-solid fa-crown"
                        class="crown"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <!-- body profile -->
            <div class="body-profile">
              <div class="d-block">
                <div class="information-profile d-block d-md-col-9">
                  <!-- specialization doctor -->
                  <div class="d-flex">
                    <div class="title-profile">
                      <strong>Specializzazione:</strong>
                    </div>
                    <ul>
                      <li
                        v-for="(
                          specialization, index
                        ) in doctor.specializations"
                        :key="index"
                        class=""
                      >
                        {{ specialization.name }}
                      </li>
                    </ul>
                  </div>
                  <!-- phone number doctor -->
                  <div class="d-flex align-items-center">
                    <span class="title-profile pe-3"
                      ><strong>numero di telefono:</strong></span
                    >
                    <p class="p-profile mb-0">{{ doctor.phone_number }}</p>
                  </div>
                  <!-- address doctor -->
                  <div class="d-flex align-items-center mb-3">
                    <span class="title-profile pe-3"
                      ><strong>Indirizzo lavoro:</strong></span
                    >
                    <p class="p-profile mb-0">{{ doctor.address }}</p>
                  </div>
                  <!-- cv pdf doctor -->
                  <div class="d-flex align-items-center mb-3">
                    <span class="title-profile pe-3"
                      ><strong>cv del dottore:</strong></span
                    >
                    <p class="mb-0">
                      <a :href="`${store.Url}${doctor.curriculum}`"
                        >Vedi Curriculum</a
                      >
                    </p>
                  </div>
                  <!-- medical_specialization doctor -->
                  <div class="mb-3">
                    <span class="title-profile pe-3"
                      ><strong>prestazioni:</strong></span
                    >
                    <p class="p-profile mb-0">
                      {{ doctor.medical_services }}
                    </p>
                  </div>
                  <!-- vote doctor -->
                  <!-- <div
                    class="d-flex align-items-center justify-content-center mb-4"
                  >
                    <span class="title-profile pe-3"
                      ><strong>Voto:</strong></span
                    >
                    <p class="p-profile mb-0">il voto totale</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- form messages  -->
          <div>
            <div class="contact-profile d-inline-block col-auto">
              <div class="message mb-3" v-if="!showReviewForm">
                <button
                  class="btn-cust"
                  v-if="!showForm"
                  @click="showForm = true"
                >
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </span>
                  <span> Messaggio </span>
                </button>
                <MessageForm v-else @close="closeForm" :doctorId="id" />
              </div>
            </div>
            <!-- form reviews  -->
            <div>
              <div class="review mb-3" v-if="!showForm">
                <button
                  class="btn-cust"
                  v-if="!showReviewForm"
                  @click="showReviewForm = true"
                >
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-star" />
                  </span>
                  <span> Recensione</span>
                </button>
                <RewievForm v-else @close="closeReviewForm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Altrimenti:
  stampa "Carimento" durante il processo di acquisizione dati -->
  <div v-else class="loading">Caricamento...</div>
</template>

<script>
import MessageForm from "../../components/MessageForm.vue";
import RewievForm from "../../components/RewievForm.vue";
import { store } from "../../store";
import axios from "axios";

export default {
  components: {
    MessageForm,
    RewievForm,
  },

  props: {
    id: String,
  },

  data() {
    return {
      store: store,
      doctor: {},
      showForm: false,
      showReviewForm: false,
      loading: true,
      hasSponsor: false,
    };
  },
  methods: {
    fetchDoctor() {
      axios.get(`${this.store.BASE_URL}/doctors/${this.id}`).then((res) => {
        console.log(res.data);
        this.doctor = res.data.results;
        console.log(this.doctor);
        if (res.data.is_sponsored) {
          this.hasSponsor = true;
        } /* else {
          this.hasSponsor = false;
        } */
        // quando arrivano i dati loading diventa false, così da interrompere il carimento
        this.loading = false;
      });
    },
    /*  showDoctor(doctors, param) {
      console.log(this.store.allDoctors);
      const doctorID = doctors.filter((doctor) => doctor.id == param);
      this.doctor = [...doctorID];
      console.log(this.doctor);
    }, */

    closeForm() {
      this.showForm = false;
    },
    closeReviewForm() {
      this.showReviewForm = false;
    },
  },
  computed: {
    calcVote() {
      return Math.trunc(this.item.media_voti);
    },
  },

  created() {
    this.fetchDoctor();
    // console.log("created show", this.$route.params);
    // this.showDoctor(this.store.allDoctors, this.id);
    console.log(this.doctor);
  },
  mounted() {
    // this.showDoctor(this.store.allDoctors, id);
    console.log(this.doctor);
    console.log(this.hasSponsor);
  },
};
</script>

<style lang="scss" scoped>
.title-profile {
  font-size: 24px;
}

.p-profile {
  font-size: 20px;
}

.profile {
  padding: 50px 0px 100px 0px;
}

.head-profile {
  padding: 15px 15px;

  border-radius: 80px 80px 0px 0px;
}

.img-profile {
  width: 160px;
}

.body-profile {
  border: 5px solid #c3e2a5;
  padding: 20px;
}

.sponsored-body-profile {
  border: 5px solid #c3e2a5;
  padding: 20px;
}

.btn-cust {
  line-height: 2.5em;
}

.crown {
  color: goldenrod;
  font-size: 35px;
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

.sponsor {
  font-weight: 900;
}
</style>
