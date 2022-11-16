<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
export default {
  props: ["id"],
  async created() {
    await this.getMoviesByGenre(this.id);
  },
  computed: {
    ...mapStores(useMoviesStore),
    ...mapState(useMoviesStore, ["moviesByGenre"]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMoviesByGenre", "moviesByGenreId"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w200${poster_path}`;
    },
  },
};
</script>

<template>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
  <h1>{{ movie.title }}</h1>
</template>
