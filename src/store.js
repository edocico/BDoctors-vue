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
  filteredDoctors: [],
});
export function getSpecialization() {
  axios.get(`${store.BASE_URL}/specializations`).then((res) => {
    // console.log(res.data.results);
    store.specializations = res.data.results;
  });
}
