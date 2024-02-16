import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDownWideShort,
  faCircleCheck,
  faEnvelope,
  faMagnifyingGlass,
  faSliders,
  faStar,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// REGULAR
import { faTrashCan as farTrashCan } from "@fortawesome/free-regular-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";

// qua inseriamo singolarmente le icon da usare

library.add(
  faEnvelope,
  faCrown,
  faUser,
  faUserDoctor,
  faAddressBook,
  faStethoscope,
  faSquarePollVertical,
  faFacebook,
  faSquareInstagram,
  faLinkedin,
  faYoutube,
  faMagnifyingGlass,
  faStar,
  faCircleCheck,
  faStar,
  faSliders,
  faUserTag,
  faArrowDownWideShort,
  farTrashCan,
  faXmark
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
