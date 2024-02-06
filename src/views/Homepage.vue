<template>
  <main>
    <section class="home-search">
      <div class="container">
        <figure>
          <img src="../assets/logo-color.png" alt="" class="logo" />
        </figure>
        <div class="search">
          <h3>Seleziona una specializzazione</h3>
          <div class="d-block d-md-flex justify-content-between">
              <ul>
                <li class="badge-special" v-for="specializzazione in store.specializations" :key="specializzazione">
                  {{specializzazione.name}}
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="top-rated">
      <div class="container">
        <h2>top rated</h2>
        <div class="card-container d-md-flex">
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
          <div class="column d-sm-block col-md-4 col-xl-2">
            <DoctorCard />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import DoctorCard from "../components/DoctorCard.vue";
import { store, prova } from "../store";

export default {
  components: {
    SearchBar,
    DoctorCard,
  },
  data(){
    return{
      store:store,

    }
  },
  methods: {
    fetchData(){
      prova()
    }
  },
  created(){
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>

.badge-special {
  background-color: #43762b;
  color: white;
  font-size: 25px;
  padding: 0px 20px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  border-radius: 10px;

  &:hover {
    color: #c3e2a5;
  }
}

.home-search {
  padding: 20px 20px 20px 20px;
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: inherit;
  background-position-x: 120px;

  figure {
    display: flex;
    justify-content: center;
    width: 350px;

    .logo {
      display: block;
      max-width: 100%;
    }
  }

  .search {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #c3e2a5;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #c3e2a5;
  }
}

.top-rated {
  padding: 70px 0px;
  .card-container {
    /* display: grid;
    grid-template-columns: repeat(1, 1fr); */
    // gap: 30px;
    margin-top: 50px;
    flex-wrap: wrap;

    .column {
      padding: 15px 10px;
    }
  }
}
</style>
