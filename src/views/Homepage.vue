<template>
  <main>
    <section class="home-search">
      <div class="container">
        <figure>
          <img src="../assets/logo-color.png" alt="" class="logo" />
        </figure>
        <div class="search">
          <h3>Cerca un medico</h3>
          <SearchBar />
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

export default {
  components: {
    SearchBar,
    DoctorCard,
  },
};
</script>

<style lang="scss" scoped>
.home-search {
  padding: 100px 20px 20px 20px;
  // background-image: url(../assets/logo-color.png);
  background-size: 700px;
  background-repeat: no-repeat;
  background-position: inherit;
  background-position-x: 120px;

  figure {
    display: flex;
    justify-content: center;

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
