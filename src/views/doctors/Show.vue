<template>
  <div>
    <h1>show</h1>
    <section class="profile">
      <div class="container">
        <div class="head-profile">
          <div class="d-flex gap-4 align-items-end">
            <img
              class="img-profile img-thumbnail rounded-circle"
              src="https://picsum.photos/100"
              alt=""
            />
            <div class="">
              <h3>Nome e Cognome dottore</h3>
              <p>
                <em>Sponsorizzato</em>
                <font-awesome-icon icon="fa-solid fa-crown" class="crown" />
              </p>
            </div>
          </div>
        </div>
        <div class="body-profile">
          <div class="d-block ">
            <div class="information-profile d-block d-md-col-9">
              <div>
                <h4 class="badge-specialization">Specializzazione</h4>
                <h4>Altra Specializzazione</h4>
              </div>
              <div class="mb-3">
                <p>indirizzo</p>
                <p>numero di telefono</p>
              </div>
              <div class="mb-3">
                <p>cv del dottore</p>
              </div>
              <div class="mb-3">
                <p>
                  PRESTAZIONI---Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Facere rerum architecto hic quos nostrum
                  iusto veniam totam placeat aliquam exercitationem consequuntur
                  porro nam natus ab quaerat amet quae animi expedita similique
                  ipsum in omnis iure, harum voluptatem? Quos, nisi at!
                </p>
              </div>
              <div class="mb-4">VOTO</div>
            </div>
            <div
              class="contact-profile d-inline-block"
            >
              <div class="message mb-3">
                <div class="btn-cust">
                  <span class="icon"
                    ><font-awesome-icon icon="fa-solid fa-envelope" />
                  </span>
                  <router-link
                    :to="{ name: 'doctors.show.message' }"
                    class="decoration-none text-light"
                  >
                    Mando un messaggio
                  </router-link>
                </div>
              </div>
              <div class="review mb-3">
                <div class="btn-cust">
                  <router-link
                    :to="{ name: 'doctors.show.review' }"
                    class="decoration-none text-light"
                  >
                    Lascia una recensione
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile {
  padding: 50px 0px 100px 0px;
}

.head-profile {
  padding: 15px 15px;
  background-color: #c3e2a5;
  border-radius: 80px 80px 0px 0px;
}

.img-profile {
  width: 160px;
}

.body-profile {
  border: 5px solid #c3e2a5;
  padding: 20px;
}

.btn-cust {
  line-height: 2.5em;
}

.crown {
  color: goldenrod;
}
</style>
