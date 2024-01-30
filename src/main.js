import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// qua inseriamo singolarmente le icon da usare

//library.add(...)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
