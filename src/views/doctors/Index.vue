<template>
  <main>
    <section class="search-bar bg-middle-green">
      <div class="">
        <div class="dropdown">
          <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-user" class="icon fs-3" />
            <span  class="d-none d-md-inline-block"> Specializzazioni </span>  
          </a>
          <ul class="dropdown-menu">
            <li v-for="specialization in 20">Specializzazione</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="search-results">
      <div class="container">
        <p>(n) risultati</p>
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
import SearchBar from "../../components/SearchBar.vue";
import DoctorCard from "../../components/DoctorCard.vue";

export default {
  components: {
    SearchBar,
    DoctorCard,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 80px;

  .search-bar {
    padding: 15px 0px;
    border-bottom: 1px solid black;

    .container-fluid {
      display: flex;
      justify-content: center;
    }
  }

  .dropdown {
    background-color: #43762b;
    line-height: 40px;
    padding: 5px 10px;
    
    .dropdown-menu {
    background-color: #43762b;
    color: white;

      .dropdown-item {
        font-weight: 600;
      }

      .dropdown-item:hover {
        color: #b0e29d;
        background-color: #43762b;
      }
    }

    li {
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
  

  .search-results {
    .container {
      padding: 20px 0px;

      .card-container {
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px; */
        flex-wrap: wrap;
        .column {
          padding: 15px 10px;
        }
      }
    }
  }
}
</style>
