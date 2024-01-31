import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import Contacts from "./views/Contact.vue";
import DoctorsIndex from "./views/doctors/Index.vue";
import DoctorsShow from "./views/doctors/Show.vue";
import SpecializationArchive from "./views/specializations/Archive.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/medici",
      name: "doctors.index",
      component: DoctorsIndex,
    },
    {
      path: "/medici/:slug",
      name: "doctors.show",
      props: true,
      component: DoctorsShow,
    },
    {
      path: "/specializzazione/:slug",
      name: "specializations.archive",
      props: true,
      component: SpecializationArchive,
    },

  ],
});

export { router };
