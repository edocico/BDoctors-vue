<template>
    <section class="review">
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
      showReviewForm: false

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
  padding: 50px 0px;

  .wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 10px solid #c3e2a5;
    box-shadow: 0px 0px 10px #c3e2a5;
    border-radius: 20px 20px 20px 20px;

    .fail-message {
      font-size: 10px;
      color: red;
      padding-left: 5px;
    }

    .select-vote {
      margin-bottom: 5px;
    }

    .review-form {
      padding: 30px 50px;

      .btn-cust {
        border: transparent;
        line-height: 2em;
        box-shadow: 0px 0px 10px #c3e2a5;
      }

      .input-cust-name {
        min-width: 250px;
        padding-left: 5px;
        border-radius: 30px 30px 30px 30px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>