<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
export default {
  props: ["genre"],
  async created() {
    await this.getMoviesByGenre(this.genre);
  },
  computed: {
    ...mapStores(useMoviesStore),
    ...mapState(useMoviesStore, ["movies"]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMoviesByGenre"]),
  },
};
</script>
<template>
  <p v-for="movie of movies" :key="movie.id">
    {{ movie.title }} - {{ movie.id }}
  </p>
</template>
<style></style>
