<template>
  <main>
    <section class="search-bar bg-middle-green">
      <div class="container-fluid">
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
