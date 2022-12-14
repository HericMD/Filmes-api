import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieinfoView from "../views/MovieinfoView.vue";
import MoviesbygenreView from "../views/MoviesbygenreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movie/:id",
      name: "movieinfo",
      component: MovieinfoView,
      props: true,
    },
    {
      path: "/:id",
      name: "moviebygenre",
      component: MoviesbygenreView,
      props: true,
    },
  ],
});

export default router;
