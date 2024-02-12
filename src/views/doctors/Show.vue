<template>
  <div>
    <h1>show</h1>
    <section class="profile">
      <div class="container">
        <div class="d-flex gap-4">
          <!-- profilo -->
          <div class="col-6">
            <div class="head-profile">
              <div class="d-flex gap-4 align-items-end">
                <img class="img-profile img-thumbnail rounded-circle" src="https://picsum.photos/100" alt="" />
                <div class="">
                  <h3>nome e cognome</h3>
                  <p>
                    <em>Sponsorizzato</em>
                    <font-awesome-icon icon="fa-solid fa-crown" class="crown" />
                  </p>
                </div>
              </div>
            </div>
            <div class="body-profile">
              <div class="d-block">
                <div class="information-profile d-block d-md-col-9">
                  <div>
                    <h4 class="badge-specialization">Specializzazione</h4>
                    <h4>Altra Specializzazione</h4>
                  </div>
                  <div class="mb-3">
                    <p>indirizzo</p>
                    <p>numero di telefono</p>
                  </div>
                  <div class="mb-3">
                    <p>cv del dottore</p>
                  </div>
                  <div class="mb-3">
                    <p>
                      PRESTAZIONI---Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Facere rerum architecto hic quos nostrum
                      iusto veniam totam placeat aliquam exercitationem consequuntur
                      porro nam natus ab quaerat amet quae animi expedita similique
                      ipsum in omnis iure, harum voluptatem? Quos, nisi at!
                    </p>
                  </div>
                  <div class="mb-4">VOTO</div>
                </div>
              </div>
            </div>
          </div>
          <!-- form messages  -->
          <div>
            <div class="contact-profile d-inline-block col-auto">
              <div class="message mb-3" v-if="!showReviewForm">
                <button class="btn-cust" v-if="!showForm" @click="showForm = true">
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </span>
                  <span>
                    Messaggio
                  </span>
                </button>
                <MessageForm v-else @close="closeForm" />
              </div>
            </div>
            <!-- form reviews  -->
            <div>
              <div class="review mb-3" v-if="!showForm">
                <button class="btn-cust" v-if="!showReviewForm" @click="showReviewForm = true">
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-star" />
                  </span>
                  <span> Recensione</span>
                </button>
                <RewievForm v-else @close="closeReviewForm"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MessageForm from '../../components/MessageForm.vue';
import RewievForm from '../../components/RewievForm.vue';
import { store } from '../../store'
import axios from 'axios'


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
      doctor: null,
      showForm: false,
      showReviewForm: false

    }
  },
  methods: {
    fetchDoctor() {
      axios.get(`${this.store.BASE_URL}/doctors/${this.id}`)
      .then((res) => {
        console.log(res)
        this.doctor = res.data.doctor
        console.log(this.doctor)
      })
    },


    closeForm() {
      this.showForm = false;
    },
    closeReviewForm() {
      this.showReviewForm = false;
    }
  },

  created() {
    this.fetchDoctor();
    console.log('created show', this.$route.params)
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>
