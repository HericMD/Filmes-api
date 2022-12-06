import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PopularesView from "../views/PopularesView.vue";
import CategoriasView from "../views/CategoriasView.vue";
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
      path: "/populares",
      name: "populares",
      component: PopularesView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/movie/:id",
      name: "movieinfo",
      component: MovieinfoView,
      props: true,
    },
    {
      path: "/genre/:id",
      name: "moviebygenre",
      component: MoviesbygenreView,
      props: true,
    },
  ],
});

export default router;
