import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SeriesView from "../views/SeriesView.vue";
import FilmesView from "../views/FilmesView.vue";
import AclamadosView from "../views/AclamadosView.vue";
import PopularesView from "../views/PopularesView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import MovieinfoView from "../views/MovieinfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/aclamados",
      name: "aclamados",
      component: AclamadosView,
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
  ],
});

export default router;
