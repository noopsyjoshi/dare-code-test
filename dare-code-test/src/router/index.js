import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blusher from "../views/Blusher.vue";
import Mascara from "../views/Mascara.vue";
import Brushes from "../views/Brushes.vue";
import Perfume from "../views/Perfume.vue";
import Hair from "../views/Hair.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blusher",
    name: "Blusher",
    component: Blusher
  },
  {
    path: "/mascara",
    name: "Mascara",
    component: Mascara
  },
  {
    path: "/brushes",
    name: "Brushes",
    component: Brushes
  },
  {
    path: "/perfume",
    name: "Perfume",
    component: Perfume
  },
  {
    path: "/hair",
    name: "Hair",
    component: Hair
  }
];

const router = new VueRouter({
  routes
});

export default router;
