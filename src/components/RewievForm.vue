<template>
  <section class="review">
    <div class="container wrap">
      <h3>Lascia una recensione</h3>
      <p class="rule">(*) campi obbligatori</p>
      <div class="container review-form">
        <form action="" method="POST">
          <!-- input fullname -->
          <div class="mb-5">  
            <div class="label-cust">
              <label for="name">Inserisci il tuo nome: *</label>
            </div>
            <div class="position-relative">
              <input class="input-cust"
              :class="{ 'error-input': errorMessage && (!nameParam || nameParam.trim().length < 3 || nameParam.trim().length > 100) }" 
              type="text" placeholder="Francesco Rossi" name="name" 
              v-model="nameParam" />
              <div v-if="errorMessage" class="error-message">
                Il campo del nome è obbligatorio e deve essere almeno tre
                caratteri
              </div>
            </div>
          </div>
          <!-- input vote -->
          <div class="mb-4">
            <div class="label-cust">
              <label for="vote">lascia un voto *</label>
            </div>
            <select
             name="vote" id="vote" required v-model="voteParam" 
             class="select-vote input-cust position-relative"
             :class="{ 'error-input': errorMessage && !voteParam }">
              <option value="1">insufficiente</option>
              <option value="2">sufficiente</option>
              <option value="3">buono</option>
              <option value="4">ottimo</option>
              <option value="5">eccellente</option>
            </select>
            <div v-if="errorMessage" class="error-message">
              Campo obbligatorio
            </div>
          </div>
          <!-- input rewiev -->
          <div class="mb-2">
            <div class="label-cust mb-2">
              <label for="name">Recensione <span class="optional">(opzionale)</span></label>
            </div>
            <textarea class="input-cust" name="review" id="" cols="50" rows="6" placeholder="recensione"
              v-model="reviewParam"></textarea>
          </div>

          <div class="d-flex gap-5">
            <input class="btn-cust" type="submit" value="Invia" />
            <button class="btn-cust-red" @click="closeReviewForm()">Chiudi</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nameParam: "",
      voteParam: "",
      allowedValues: [1, 2, 3, 4, 5],
      reviewParam: "",
      errorMessage: false,
      showReviewForm: false,
      rewievSend: false,

    };
  },
  watch: {
    voteParam() {
      if (!this.allowedValues.includes(this.voteParam)) {
        this.voteParam = "";
        console.log("parametro non in range");
      }
    },
  },
  methods: {
    closeReviewForm() {
      this.$emit('close');
    },

    sendReview() {
      if (
        !this.nameParam ||
        this.nameParam.trim().length < 3 ||
        this.nameParam.trim().length > 100 ||
        !this.voteParam
      ) {
        this.errorMessage = true;
        console.log("condizione");
      } else {
        this.procNameParam = this.nameParam.trim();
        this.procReviewParam = this.reviewParam.trim();
        this.errorMessage = false;
        console.log(this.procNameParam);
        console.log(this.procReviewParam);
      }
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
</style>