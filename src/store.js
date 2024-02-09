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
  savedData: [1, 2],
});

export function getSpecialization() {
  axios.get(`${store.BASE_URL}/specializations`).then((res) => {
    console.log(res.data.results);
    store.specializations = res.data.results;
  });
}

export function getDoctors() {
  console.log(JSON.parse(JSON.stringify(store.savedData)), "saveddata");
  axios
    .get(`http://127.0.0.1:8000/api/doctors`, {
      params: {
        specialization_ids: JSON.parse(JSON.stringify(store.savedData)),
      },
    })
    .then((res) => {
      console.log(res, "chiamata prova");
      store.allDoctors = res.data.results;
    });
}
