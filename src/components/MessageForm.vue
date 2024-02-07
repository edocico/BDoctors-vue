<template>
    <section class="message" >
        <h1>Nuovo Messaggio</h1>
        <div class="container">
        <form v-on:submit.prevent="messageForm" action="" method="POST">
            <div class="d-flex flex-column flex-md-row gap-5 mb-2">
            <div class="d-flex flex-column">
                <div class="label-cust">
                <label for="name">Inserisci nome:</label>
                </div>
                <input class="input-cust" type="text" placeholder="Francesco" name="name" v-model="nameParam">
                <div class="error-message" v-if="nameError">{{ nameError }}</div>
            </div>
            <div class="d-flex flex-column">
                <div class="label-cust">
                <label for="surname">Inserisci cognome:</label>
                </div>
                <input class="input-cust" type="text" placeholder="Rossi" name="surname" v-model="surnameParam">
                <div class="error-message" v-if="surnameError">{{ surnameError }}</div>
            </div>
            </div>
            <div class="d-flex flex-column flex-md-row gap-5 mb-2">
            <div class="d-flex flex-column">
                <div class="label-cust">
                <label for="phone">Inserisci cellulare:</label>
                </div>
                <input type="tel" name="phone" id="phone" pattern="[0-9]{10}" required v-model="phoneParam">
                <div class="error-message" v-if="phoneError">{{ phoneError }}</div>
            </div>
            <div class="d-flex flex-column">
                <div class="label-cust">
                <label for="email">Inserisci mail:</label>
                </div>
                <input class="input-cust" type="email" name="email" id="email"
                placeholder="francescorossi@gmail.com" v-model="emailParam">
                <div class="error-message" v-if="emailError">{{ emailError }}</div>
            </div>
            </div>

            <div class="mb-2">
            <div class="label-cust mb-2">
                <label for="name">Scrivi messaggio:</label>
            </div>
            <textarea class="input-cust" name="message" id="" cols="40" rows="10" placeholder="messaggio"
                v-model="textParam"></textarea>
            <div class="error-message" v-if="textError">{{ textError }}</div>
            </div>
            <div class="d-flex gap-5">
            <input class="btn-cust" type="submit" value="Invia">
            <button class="btn btn-danger" @click="closeForm">Chiudi</button>
            </div>

        </form>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nameParam: '',
      surnameParam: '',
      phoneParam: '',
      emailParam: '',
      textParam: '',
      BASE_URL:'http://127.0.0.1:8000',
      nameError: '',
      surnameError: '',
      phoneError:'',
      emailError: '',
      textError: '',
      showForm: false,
    }
  },

  methods: {
    closeForm() {
      this.$emit('close');
    },

    messageForm() {

      this.resetErrorMessages();

      if(!this.validateName()) {
        this.nameError = 'Il nome deve avere un min 2 max 100 caratteri'
      }

      if(!this.validateSurname()) {
        this.surnameError = 'Il cognome deve avere un min 2 max 100 caratteri'
      }

      if(!this.validatePhoneNumber()) {
        this.phoneError = 'Il numero di telefono deve contenere almeno 10 cifre'
      }

      if(!this.emailParam) {
        this.emailError = 'Inserisci una mail valida'
      }

      if(!this.validateText()) {
        this.textError = 'Il messaggio deve contenere come minimo 5 caratteri'
      }

      if (this.hasErrors()) {
        alert('Validazione del modulo fallita. Controlla i tuoi inserimenti:\n' +
          `- ${this.nameError}\n` +
          `- ${this.surnameError}\n` +
          `- ${this.phoneError}\n` +
          `- ${this.emailError}\n` +
          `- ${this.textError}`);
        return;
      }
      
    },

    validateName() {
      return this.nameParam.trim() !== '' && this.nameParam.trim().length >= 2 && this.nameParam.trim().length <= 100;
    },

    validateSurname() {
      return this.surnameParam.trim() !== '' && this.surnameParam.trim().length >= 2 && this.surnameParam.trim().length <= 100;;
    },

    validatePhoneNumber() {
      return /^[0-9]{10}$/.test(this.phoneParam);
    },

    // validateEmail() {
    //   return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(this.emailParam);
    // },

    validateText() {
      return this.textParam.trim() !== '' && this.textParam.trim().length >= 5;
    },

    resetErrorMessages() {
      
      this.nameError = '';
      this.surnameError = '';
      this.phoneError = '';
      this.emailError = '';
      this.textError = '';

    },

    hasErrors() {
      return this.nameError || this.surnameError || this.phoneError || this.emailError || this.textError;
    }
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

.error-message {
  color: red;
  padding-top: 3px;
}
</style>