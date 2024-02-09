<template>
    <section class="message" >
        <h1>Contatta il medico</h1>
        <div class="container">
          <h2 class="mb-4">Invia Messaggio</h2>
          <p class="rule">(*) campi obbligatori</p>
          <form v-on:submit.prevent="messageForm" action="" method="POST">

              <div class="d-flex flex-column flex-md-row gap-5 mb-5">
                <div class="d-flex flex-column pe-5">
                    <div class="label-cust">
                      <label for="name">Inserisci nome: *</label>
                    </div>
                    <div class="postion-relative">
                      <input :class="{ 'input-cust' : true, 'error-input' : nameError  } " type="text" placeholder="Francesco" name="name" v-model="nameParam">
                      <div class="error-message" v-if="nameError">{{ nameError }}</div>
                    </div>    
                </div>

                <div class="d-flex flex-column">
                    <div class="label-cust">
                      <label for="surname">Inserisci cognome: *</label>
                    </div>
                    <div class="postion-relative">
                      <input :class="{ 'input-cust' : true, 'error-input' : surnameError  } " type="text" placeholder="Rossi" name="surname" v-model="surnameParam">
                      <div class="error-message" v-if="surnameError">{{ surnameError }}</div>
                    </div>   
                </div>
              </div>

              <div class="d-flex flex-column flex-md-row gap-5 mb-2">
                <div class="d-flex flex-column pe-5">
                    <div class="label-cust">
                      <label for="phone">Inserisci cellulare: *</label>
                    </div>
                    <div class="postion-relative">
                      <input :class="{ 'input-cust' : true, 'error-input' : phoneError  } "  type="tel" name="phone" id="phone" required v-model="phoneParam">
                      <div class="error-message" v-if="phoneError">{{ phoneError }}</div>
                    </div>  
                </div>
                <div class="d-flex flex-column mb-4">
                    <div class="label-cust">
                    <label for="email">Inserisci mail: *</label>
                    </div>
                    <div class="postion-relative">
                      <input :class="{ 'input-cust' : true, 'error-input' : emailError  } "  type="email" name="email" id="email"
                      placeholder="francescorossi@gmail.com" v-model="emailParam">
                      <div class="error-message" v-if="emailError">{{ emailError }}</div>
                    </div>   
                </div>
              </div>

              <div class="mb-5">
                <div class="label-cust mb-2">
                    <label for="name">Scrivi messaggio: *</label>
                </div>
                <div class="postion-relative">
                  <textarea :class="{ 'input-cust' : true, 'error-input' : textError  } " name="message" id="" cols="100" rows="6" placeholder="messaggio"
                    v-model="textParam"></textarea>
                  <div class="error-message" v-if="textError">{{ textError }}</div>
                </div> 
              </div>
              <div class="d-flex gap-5">
                <input class="btn-cust" type="submit" value="Invia">
                <div class="btn-cust-red" @click="closeForm">Chiudi</div>
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

      // if (this.hasErrors()) {
      //   alert('Validazione del modulo fallita. Controlla i tuoi inserimenti:\n' +
      //     `- ${this.nameError}\n` +
      //     `- ${this.surnameError}\n` +
      //     `- ${this.phoneError}\n` +
      //     `- ${this.emailError}\n` +
      //     `- ${this.textError}`);
      //   return;
      // }
      
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
    // console.log(this.nameParam,this.surnameParam,this.phoneParam,this.emailParam,this.textParam)
  }
};
</script>

<style lang="scss" scoped>
.message {
  padding: 10px 10px;
  border: 5px solid #c3e2a5;
  box-shadow: 0px 0px 10px #c3e2a5;
  border-radius: 20px 20px 20px 20px;

  .rule {
    font-size: 14px;
    font-weight: 600;
  }
}



</style>