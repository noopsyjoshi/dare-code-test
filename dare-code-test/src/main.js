import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Navigation from "./utils/navigation.js";

Vue.config.productionTip = false;

new Vue({
  router,

  created() {},

  mounted() {
    Navigation();
  },

  destroyed() {},

  updated() {},

  render: h => h(App)
}).$mount("#app");
