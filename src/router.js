import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import Contacts from "./views/Contact.vue";
import DoctorsIndex from "./views/doctors/Index.vue";
import DoctorsShow from "./views/doctors/Show.vue";

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
  ],
});

export { router };
