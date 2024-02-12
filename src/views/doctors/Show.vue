<template>
  <div>
    <section class="profile">
      <div class="container">
        <div class="d-flex justify-content-center gap-4">
          <!-- profilo -->
          <div class="col-6">
            <!-- header profile -->
            <div class="head-profile">
              <div class="d-flex gap-4 align-items-end">
                <!-- image doctor -->
                <img
                  class="img-profile img-thumbnail rounded-circle"
                  src="https://picsum.photos/100"
                  alt=""
                />
                <div class="">
                  <!-- fullname doctor -->
                  <h3>Nome e Cognome dottore</h3>
                  <!-- sponsor doctor -->
                  <p>
                    <em>(Sponsorizzato) -></em>
                    <font-awesome-icon icon="fa-solid fa-crown" class="crown" />
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
                    <h5 class="badge-special">Specializzazione</h5>
                  </div>
                  <!-- phone number doctor -->
                  <div class="d-flex align-items-center">
                    <span class="title-profile pe-3"><strong>numero di telefono:</strong></span>
                    <p class="p-profile mb-0">numero</p>
                  </div >
                  <!-- address doctor -->
                  <div class="d-flex align-items-center mb-3 ">
                    <span class="title-profile pe-3"><strong>Indirizzo lavoro:</strong></span>
                    <p class="p-profile mb-0">via delle via</p>
                  </div>
                  <!-- cv pdf doctor -->
                  <div class="d-flex align-items-center mb-3">
                    <span class="title-profile pe-3"><strong>cv del dottore:</strong></span>
                    <p class="mb-0">pdf</p>
                  </div>
                  <!-- medical_specialization doctor -->
                  <div class="mb-3">
                    <span class="title-profile  pe-3"><strong>prestazioni:</strong></span>
                    <p class="p-profile mb-0">
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Facere rerum architecto hic quos nostrum
                      iusto veniam totam placeat aliquam exercitationem
                      consequuntur porro nam natus ab quaerat amet quae animi
                      expedita similique ipsum in omnis iure, harum voluptatem?
                      Quos, nisi at!
                    </p>
                  </div>
                  <!-- vote doctor -->
                  <div class="d-flex align-items-center justify-content-center mb-4">
                    <span class="title-profile  pe-3"><strong>Voto:</strong></span>
                    <p class="p-profile mb-0">il voto totale</p>
                  </div>
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
                <MessageForm v-else @close="closeForm" />
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
      doctor: [],
      showForm: false,
      showReviewForm: false,
    };
  },
  methods: {
    /* fetchDoctor() {
      axios.get(`${this.store.BASE_URL}/doctors/${this.id}`).then((res) => {
        console.log(res);
        this.doctor = res.data.doctor;
        console.log(this.doctor);
      });
    }, */
    showDoctor(doctors, param) {
      console.log(this.store.allDoctors);
      const doctorID = doctors.filter((doctor) => doctor.id == param);
      this.doctor = [...doctorID];
      console.log(this.doctor);
    },

    closeForm() {
      this.showForm = false;
    },
    closeReviewForm() {
      this.showReviewForm = false;
    },
  },

  created() {
    // this.fetchDoctor();
    // console.log("created show", this.$route.params);
    // this.showDoctor(this.store.allDoctors, this.id);
  },
  mounted() {
    // this.showDoctor(this.store.allDoctors, id);
    console.log(this.doctor);
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
  background-color: #c3e2a5;
  border-radius: 80px 80px 0px 0px;
}

.img-profile {
  width: 160px;
}

.body-profile {
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
</style>
