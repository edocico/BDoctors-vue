<template>
  <main>
    <section class="search-bar bg-middle-green">
      <div class="container-fluid">
        <SearchBar />
      </div>
    </section>
    <section class="search-results">
      <div class="container-fluid">
        <p>(n) risultati</p>
        <div class="card-container">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
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
    .container-fluid {
      padding: 20px 200px;

      .card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
    }
  }
}
</style>
