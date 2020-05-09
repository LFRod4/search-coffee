import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./../node_modules/bulma/css/bulma.css";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBO_CMla1qyfVW0eVs8m-rI4FTW5FrYrbQ",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
