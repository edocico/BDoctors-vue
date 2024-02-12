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

export function filtr(router){
  //Nuovo query
  let newQuery = {};

  //Cicliamo variabili per costruire nuova query 
  for (let key in store.filtr) {
    //Se il valore della variabile non e null, questa nome della variabile e il suo valore viene aggiunto nel newQuery 
    if (store.filtr[key]) {
      newQuery[key] = store.filtr[key]
    }
  }
  //Inseriamo nuova query nel url
  router.push({ path: '/medici', query: newQuery })
  //Uttilizziamo nuova url per fare chiamata axios
  getDoctors(newQuery);
};

export function clearAllDoctors(){
  store.allDoctors = [];
  store.filtr.order = '';
  store.filtr.specialization_id = '';
  store.filtr.avg_vote = '';
  console.log('DOTORI PULITI', store.allDoctors)
};

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
