<template>
  <header class="bg-middle-green">
    <div class="container-fluid">
      <nav class="nav-bar">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo-home">
            <router-link
              :to="{ name: 'home' }"
              class="decoration-none text-light"
              >LOGO</router-link
            >
            <!-- <img src="" alt=""> -->
          </div>
          <div class="menu-item">
            <ul class="d-flex align-items-center gap-4">
              <li class="header-item">
                <router-link
                  :to="{ name: 'doctors.index' }"
                  class="decoration-none text-light"
                  >I nostri medici</router-link
                >
              </li>
              <li class="header-item">
                <router-link
                  :to="{ name: 'contacts' }"
                  class="decoration-none text-light"
                  >Contattaci</router-link
                >
              </li>
              <li class="header-item" v-if="!authenticated">
                <a href="http://127.0.0.1:8000/login">Accedi (icona)</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  color: white;
  padding: 20px 0px;
}

.header-item {
  padding: 5px;
  vertical-align: 5px;
  font-size: 16px;
  font-weight: 800;
}

li:hover {
  color: white;
  // font-weight: 700;
  background-color: #43762b;
  border-radius: 99px;
}
</style>
