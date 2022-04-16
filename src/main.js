import { createApp } from 'vue';
import App from './App.vue';

// FontAwesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCircle, faX);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");

