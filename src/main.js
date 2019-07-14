import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css"; //to init css
// import VueMeta from "vue-meta"; // for meta

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // VueMeta,
  render: h => h(App)
}).$mount("#app");
