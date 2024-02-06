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
                  <h3>Nome e Cognome dottore</h3>
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
                  <!-- <router-link :to="{ name: 'doctors.show.message' }" class="decoration-none text-light">
                    Mando un messaggio
                  </router-link> -->
                </button>
                <MessageForm v-else />
              </div>
            </div>

            <!-- form reviews  -->
            <div>
              <div class="review mb-3" v-if="!showForm">
                <button class="btn-cust" v-if="!showReviewForm" @click="showReviewForm = true">
                  <span>recensione</span>
                  <!-- <router-link :to="{ name: 'doctors.show.review' }" class="decoration-none text-light">
                  Lascia una recensione
                </router-link> -->
                </button>
                <section class="review" v-else>
                  <div class="container wrap">
                    <h1>Lascia una recensione</h1>
                    <div class="container review-form">
                      <form action="" method="POST">
                        <div class="d-flex gap-5 mb-2">
                          <div>
                            <div class="label-cust">
                              <label for="name">Inserisci il tuo nome</label>
                            </div>
                            <input class="input-cust-name" type="text" placeholder="inserisci nome e cognome" name="name"
                              required pattern="[A-Za-z]+" v-model="nameParam" />
                            <div v-if="errorMessage" class="fail-message">
                              Il campo del nome è obbligatorio e deve essere almeno tre
                              caratteri
                            </div>
                          </div>
                        </div>
                        <div class="mb-2">
                          <div class="label-cust">
                            <label for="vote">lascia un voto</label>
                          </div>
                          <select name="vote" id="vote" required v-model="voteParam" class="select-vote">
                            <option value="1">insufficiente</option>
                            <option value="2">sufficiente</option>
                            <option value="3">buono</option>
                            <option value="4">ottimo</option>
                            <option value="5">eccellente</option>
                          </select>
                          <div v-if="errorMessage" class="fail-message">
                            Campo obbligatorio
                          </div>
                        </div>
                        <div class="mb-2">
                          <div class="label-cust mb-2">
                            <label for="name">Recensione</label>
                          </div>
                          <textarea class="input-cust-review" name="review" id="" cols="40" rows="10"
                            placeholder="recensione" v-model="reviewParam"></textarea>
                        </div>
                        <div class="d-flex gap-5">
                          <input class="btn-cust" type="submit" value="Invia" @click="sendReview()" />
                          <button class="btn btn-danger" @click="closeReviewForm()">Chiudi</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- form messaggio -->




    </section>
  </div>
</template>

<script>
import MessageForm from '../../components/MessageForm.vue';

export default {
  components: {
    MessageForm,
  },

  data() {
    return {
      showForm: false,
      showReviewForm: false

    }
  },
  methods: {
    closeForm() {
      this.showForm = false;
    },
    closeReviewForm() {
      this.showReviewForm = false;
    }
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
