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
              <input
                class="input-cust-name"
                type="text"
                placeholder="inserisci nome e cognome"
                name="name"
                required
                pattern="[A-Za-z]+"
                v-model="nameParam"
              />
            </div>
          </div>
          <div class="mb-2">
            <div class="label-cust">
              <label for="vote">lascia un voto</label>
            </div>
            <select name="vote" id="vote" required v-model="voteParam">
              <option value="1">insufficiente</option>
              <option value="2">sufficiente</option>
              <option value="3">buono</option>
              <option value="4">ottimo</option>
              <option value="5">eccellente</option>
            </select>
          </div>
          <div class="mb-2">
            <div class="label-cust mb-2">
              <label for="name">Recensione</label>
            </div>
            <textarea
              class="input-cust-review"
              name="review"
              id=""
              cols="100"
              rows="10"
              placeholder="recensione"
              v-model="reviewParam"
            ></textarea>
          </div>
          <input
            class="btn-cust"
            type="submit"
            value="Invia"
            @click="sendReview()"
          />
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
      reviewParam: "",
    };
  },
  methods: {
    sendReview() {
      if (!this.nameParam || !this.voteParam) {
        alert("compila i campi obbligatori mancanti");
        console.log("condizione");
      } else {
        this.procNameParam = this.nameParam.trim();
        this.procReviewParam = this.reviewParam.trim();
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
      }
    }
  }
}
</style>
