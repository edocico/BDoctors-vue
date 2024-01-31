<template>
  <section class="contact">
    <h1>Pagina contatti</h1>
    <div class="container">
        <form action="" method="POST">
              <div class="d-flex gap-5  mb-2 ">
                <div>
                  <div class="label-cust">
                      <label for="name">Inserisci il tuo nome</label>
                  </div>
                  <input class="input-cust " type="text" placeholder="Francesco" name="name">
                </div>
                <div>
                  <div class="label-cust">
                      <label for="surname">Inserisci il tuo cognome</label>
                  </div>
                  <input class="input-cust " type="text" placeholder="Rossi" name="surname">
                </div>  
              </div>
              <div class="mb-2">
                  <div class="label-cust">
                      <label for="name">Inserisci la tua mail</label>
                  </div>
                  <input class="input-cust " type="email" name="Inserisci la tua mail" id="email" placeholder="francescorossi@gmail.com">
              </div>
              <div class="mb-2">
                  <div class="label-cust mb-2">
                      <label for="name">Inserisci un messaggio</label>
                  </div>
                  <textarea class="input-cust" name="message" id="" cols="100" rows="10" placeholder="messaggio"></textarea>
              </div>
            <input class="btn-cust" type="submit" value="Invia">
        </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.contact {
  padding: 30px 15px;
}

.label-cust {
  font-weight: bold;
  font-size: 20px;
}

.input-cust {
  text-align: 30px;
  font-size: 16px;
  width: 70%;
}

// .btn {
//   color: white;
//   font-size: 25px;
//   text-align: 40px;
//   padding: 0px 15px;
//   font-weight: bold;
//   background-color: #73b760;
// }

// .btn:hover {
//   background-color: #43762b;
// }

</style>
