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
    ...mapState(useMoviesStore, ["moviesByGenre"]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMoviesByGenre", "moviesByGenreId"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w200${poster_path}`;
    },
    MostraFilme(movie) {
      this.$router.push(`movie/${movie.id}`);
    },
  },
};
</script>
<template>
  <div class="row">
    <p v-for="movie of moviesByGenreId(genre).results" :key="movie.id">
      <img
        :src="getImgUrl(movie.poster_path)"
        class="poster"
        @click="MostraFilme(movie)"
      />
    </p>
  </div>
</template>
<style></style>
