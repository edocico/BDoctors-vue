<template>
  <main>
    <section class="home-search">
      <div class="container">
        <div class="search">
          <h3>Cerca un medico</h3>
          <SearchBar />
        </div>
      </div>
    </section>
    <section class="top-rated">
      <div class="container">
        <h2>top rated</h2>
        <div class="card-container">
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
  padding: 150px 20px;

  .search {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.top-rated {
  padding: 70px 0px;
  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
}
</style>
