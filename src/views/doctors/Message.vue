<template>
  <section class="message">
    <h1>Manda un messaggio</h1>
    <div class="container">
      <form action="" method="POST">
        <div class="d-flex gap-5 mb-2">
          <div>
            <div class="label-cust">
              <label for="name">Inserisci nome:</label>
            </div>
            <input
              class="input-cust"
              type="text"
              placeholder="Francesco"
              name="name"
            />
          </div>
          <div>
            <div class="label-cust">
              <label for="surname">Inserisci cognome:</label>
            </div>
            <input
              class="input-cust"
              type="text"
              placeholder="Rossi"
              name="surname"
            />
          </div>
          <div>
            <div class="label-cust">
              <label for="surname">Inserisci cellulare:</label>
            </div>
            <input
              type="tel"
              name="phone number"
              id="phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>
        <div class="mb-2">
          <div class="label-cust">
            <label for="name">Inserisci mail:</label>
          </div>
          <input
            class="input-cust"
            type="email"
            name="Inserisci la tua mail"
            id="email"
            placeholder="francescorossi@gmail.com"
          />
        </div>
        <div class="mb-2">
          <div class="label-cust mb-2">
            <label for="name">Scrivi messaggio:</label>
          </div>
          <textarea
            class="input-cust"
            name="message"
            id=""
            cols="100"
            rows="10"
            placeholder="messaggio"
          ></textarea>
        </div>
        <input class="btn-cust" type="submit" value="Invia" />
      </form>
        <form action="" method="POST">
              <div class="d-flex gap-5  mb-2 ">
                <div>
                  <div class="label-cust">
                      <label for="name">Inserisci nome:</label>
                  </div>
                  <input class="input-cust " type="text" placeholder="Francesco" name="name" v-model="nameParam">
                </div>
                <div>
                  <div class="label-cust">
                      <label for="surname">Inserisci cognome:</label>
                  </div>
                  <input class="input-cust " type="text" placeholder="Rossi" name="surname" v-model="surnameParam">
                </div>
                <div>
                  <div class="label-cust">
                      <label for="surname">Inserisci cellulare:</label>   
                  </div>
                  <input type="tel" name="phone number" id="phone number" pattern="[0-9]{10}" required v-model="phoneParam">
                </div>  
              </div>
              <div class="mb-2">
                  <div class="label-cust">
                      <label for="name">Inserisci mail:</label>
                  </div>
                  <input class="input-cust " type="email" name="Inserisci la tua mail" id="email" placeholder="francescorossi@gmail.com" v-model="emailParam">
              </div>
              <div class="mb-2">
                  <div class="label-cust mb-2">
                      <label for="name">Scrivi messaggio:</label>
                  </div>
                  <textarea class="input-cust" name="message" id="" cols="100" rows="10" placeholder="messaggio" v-model="textParam"></textarea>
              </div>
            <input class="btn-cust" type="submit" value="Invia">
        </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nameParam:'giogio',
      surnameParam:'pergiogio',
      phoneParam:'02030445',
      emailParam:'mail',
      textParam:'cose',
      BASE_URL:'http://127.0.0.1:8000'
    }
  },

  methods: {
    // sendMessage() {
    //   axios.post('http://127.0.0.1:8000/api/messages?name=Prova Fede&surname=Prova Surname&phone_number=123456789&email=prova@prova.com&message=blablabla&doctor_id=2').then (res=>{
    //     console.log(res.data)

    //   })
    // }
  },

  mounted() {
    // this.sendMessage()
    console.log(this.nameParam,this.surnameParam,this.phoneParam,this.emailParam,this.textParam)
  }
};
</script>

<style lang="scss" scoped>
.message {
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
</style>
