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
  Idspec: "",
});

export function getSpecialization() {
  axios.get(`${store.BASE_URL}/specializations`).then((res) => {
    console.log(res.data.results);
    store.specializations = res.data.results;
  });
}

export function getDoctors(index) {
  console.log(index, "index");
  store.Idspec = index;
  axios
    .get(`http://127.0.0.1:8000/api/doctors`, {
      params: {
        specialization_ids: [index],
      },
    })
    .then((res) => {
      console.log(res, "chiamata prova");
      store.allDoctors = res.data.results;
    });
}
