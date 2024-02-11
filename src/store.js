import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  searchQuery: "",
  // userProfile: {},
  BASE_URL: "http://127.0.0.1:8000/api",
  Url: "http://127.0.0.1:8000/",
  specializations: [],
  allDoctors: [],
  doctorsPerSpecialization: [],
  filtr: {
    order: '',
    specialization_id: '',
    avg_vote: '',
  }
});

export function getSpecialization() {
  axios.get(`${store.BASE_URL}/specializations`).then((res) => {
    // console.log('Risultato axios specializazione',res.data.results);
    store.specializations = res.data.results;
  });
}

export function getDoctors(queryParams) {
  console.log('Axios queryParams', queryParams);
  axios.get(`http://127.0.0.1:8000/api/doctors`, {
    params: queryParams
  }).then((res) => {
    console.log('Axios doctors', res);
    store.allDoctors = res.data.results;
  });
}

