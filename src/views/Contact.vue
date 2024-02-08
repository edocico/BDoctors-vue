<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <DoctorCard
          v-for="(doctor, index) in store.allDoctors"
          :key="index"
          :item="doctor"
        />
      </div>
    </div>
  </section>
</template>

<script>
import DoctorCard from "../components/DoctorCard.vue";
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    DoctorCard,
  },
  methods: {
    fetchAllDoctors() {
      (this.store.allDoctors = []), (this.store.doctorsPerSpecialization = []);
      axios.get(`${this.store.BASE_URL}/doctors`).then((res) => {
        console.log(res);
        this.store.allDoctors = res.data.results;
        console.log(this.store.allDoctors);
      });
    },
  },
  created() {
    this.fetchAllDoctors();
  },
};
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
