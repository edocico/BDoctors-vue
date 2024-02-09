<template>
  <section class="review">
    <!-- controllo invio messaggio - SE:
        le vadiazioni non vengono rispettate si resta nel form 
        finchè i dati non saranno tutti corretti  -->
    <div v-if="!reviewSent" class="container wrap">
      <h3>Lascia una recensione</h3>
      <p class="rule">(*) campi obbligatori</p>
      <div class="container review-form">
        <form @submit.prevent="reviewForm" action="" method="POST">
          <!-- input fullname -->
          <div class="mb-5">
            <div class="label-cust">
              <label for="name">Inserisci il tuo nome: *</label>
            </div>
            <div class="position-relative">
              <input class="input-cust" :class="{ 'error-input': hasErrors('fullName') }" type="text"
                placeholder="Francesco Rossi" name="name" v-model="fullNameParam" />
              <div v-if="hasErrors('fullName')" class="error-message">
                {{ fullNameError }}
              </div>
            </div>
          </div>

          <!-- input vote -->
          <div class="mb-4">
            <div class="label-cust">
              <label for="vote">Lascia un voto *</label>
            </div>
            <select name="vote" id="vote" required v-model="voteParam" class="select-vote input-cust position-relative"
              :class="{ 'error-input': hasErrors('vote') && formSubmitted }">
              <option value="">Seleziona un voto</option>
              <option v-for="value in allowedValues" :key="value" :value="value">
                {{ getVoteLabel(value) }}
              </option>
            </select>
            <div v-if="hasErrors('vote') && formSubmitted" class="error-message">
              Campo obbligatorio *
            </div>
          </div>

          <!-- input review -->
          <div class="mb-2">
            <div class="label-cust mb-2">
              <label for="review">Recensione <span class="optional">(opzionale)</span></label>
            </div>
            <textarea class="input-cust" name="review" id="review" cols="50" rows="6" placeholder="recensione"
              v-model="reviewParam"></textarea>
          </div>

          <div class="d-flex gap-5">
            <input class="btn-cust" type="submit" value="Invia" />
            <button class="btn-cust-red" @click="closeReviewForm()">Chiudi</button>
          </div>
        </form>
      </div>
    </div>
     <!-- ALTRIMENTI: 
      i dati sono corretti, allora si chiude il form -->
    <div v-else class="success">
      <div class="d-flex align-items-center mb-4">
        <font-awesome-icon class="pe-2 text-middle-green icon-success" icon="fa-solid fa-circle-check" />
        <p class="mb-0 msg-success">Recensione inviata con successo</p>

      </div>
      <div class="d-flex justify-content-center">
        <button class="btn-cust-red" @click="closeReviewForm">Chiudi</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // dati ricavati dagli input del form
      fullNameParam: "",
      voteParam: "",
      allowedValues: [1, 2, 3, 4, 5],
      reviewParam: "",
      //messaggio di errore, validazioni del form
      fullNameError: "",
      voteError: "",

      // varibile per controllare form, serve a mostrare gli errori 
      // solo dopo che utente  ha tentatodi inviare i dati al form
      formSubmitted: false, 

      //variabile chiusura del form/ compilazione ed invio dati 
      reviewSent: false,
    };
  },
  methods: {
    closeReviewForm() {
      this.$emit('close');
    },

    reviewForm() {
      //reset dei messaggi errore
      this.resetErrorMessages();

      //impostazione di default dello stato della recensione
      this.reviewSent = false,

      this.formSubmitted = true;

      if (!this.validateFullName()) {
        this.fullNameError = 'Il nome deve avere tra 2 e 100 caratteri';
      }

      if (!this.voteParam) {
        this.voteError = 'Seleziona almeno un voto';
      }

      if (!this.fullNameError && !this.voteError) {
        console.log("Simulazione di dati inviati al backend:", {
          fullName: this.fullNameParam,
          vote: this.voteParam,
          review: this.reviewParam,
        });

        // nel caso in cui tutte le validazioni sono state inviate correttamente,
        // allora verrà mostrato un messaggio di completamento
        this.reviewSent = true;

      }
    },

    validateFullName() {
      return this.fullNameParam.trim() !== '' && this.fullNameParam.trim().length >= 2 && this.fullNameParam.trim().length <= 100;
    },


    // hasErrors() {
    //   return this.fullNameError || this.voteError
    // },

    hasErrors(field) {
      if (field === 'fullName') {
        return this.fullNameError !== '';
      } else if (field === 'vote') {
        return !this.voteParam && this.formSubmitted;
      }
    },

    getVoteLabel(value) {
      switch (value) {
        case 1:
          return 'Insufficiente';
        case 2:
          return 'Sufficiente';
        case 3:
          return 'Buono';
        case 4:
          return 'Ottimo';
        case 5:
          return 'Eccellente';
        default:
          return '';
      }
    },

    resetErrorMessages() {
      this.fullNameError = '';
      this.voteError = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.review {
  padding: 10px 10px;
  border: 5px solid #c3e2a5;
  box-shadow: 0px 0px 10px #c3e2a5;
  border-radius: 20px 20px 20px 20px;

  .rule {
    font-size: 14px;
    font-weight: 600;
  }

  .wrap {
    display: flex;
    align-items: center;
    flex-direction: column;

    .select-vote {
      margin-bottom: 5px;
    }

    .review-form {
      padding: 10px 10px;

      .input-cust-name {
        min-width: 250px;
        padding-left: 5px;
        border-radius: 30px 30px 30px 30px;
        margin-bottom: 5px;
      }
    }
  }
}

.optional {
  font-size: 16px;
  font-weight: 400;
}

.success {
    padding: 5px;

    .icon-success {
      font-size: 50px;
    }

    .msg-success {
      font-size: 25px;
      text-align:center;
    }
  }
</style>
