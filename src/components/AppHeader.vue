<template>
  <header class="bg-middle-green">
    <div class="container-fluid">
      <nav class="nav-bar">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo-home">
            <router-link :to="{ name: 'home' }" class="decoration-none text-light">
              <img class="logo-full-header" src="../assets/logo-white.png" alt="BDoctors" />
            </router-link>
          </div>
          <div class="menu-item">
            <ul class="d-flex align-items-center gap-4">
              <li class="header-item">
                <font-awesome-icon icon="fa-solid fa-user-doctor" class="icon" />
                <router-link :to="{ name: 'doctors.index' }" class="decoration-none text-light">I nostri
                  medici</router-link>
              </li>
              <li class="header-item">
                <font-awesome-icon icon="fa-solid fa-address-book" class="icon" />
                <router-link :to="{ name: 'contacts' }" class="decoration-none text-light">Contattaci</router-link>
              </li>

              <div class="dropdown">
                <a class="decoration-none text-light header-item" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <font-awesome-icon icon="fa-solid fa-user" class="icon" />
                  <span v-if="!authenticated">profilo dottore </span>
                  <span v-if="authenticated">{{ doctorLog.name }} {{  doctorLog.surname  }}</span>
                </a>
                <ul class="dropdown-menu">
                  <div v-if="!authenticated">
                    <li>
                      <a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a>
                    </li>
                  </div>
                  <div v-if="authenticated">
                    <li>
                      <a class="dropdown-item" href="http://127.0.0.1:8000/login">Logout</a>
                    </li>
                  </div>
                </ul>
              </div>
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
      doctorLog: { doctorId: 1, name: 'francesco', surname: 'rossi' },
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  color: white;
  padding: 20px 0px 0px 0px;
  box-shadow: 0px 0px 10px #73b760;
}

.dropdown-menu {
  background-color: #43762b;

  .dropdown-item {
    color: white;
    font-weight: 600;
  }

  .dropdown-item:hover {
    color: #b0e29d;
    background-color: #43762b;
  }
}

.logo-full-header {
  width: 150px;
  width: 150px;
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

.icon {
  margin-right: 5px;
}
</style>
