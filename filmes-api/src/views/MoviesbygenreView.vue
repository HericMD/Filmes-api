<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
export default {
  props: ["id"],
  async created() {
    console.log(this.id);
    await this.getMoviesByGenre(this.id);
  },
  computed: {
    ...mapStores(useMoviesStore),
    ...mapState(useMoviesStore, ["moviesByGenre"]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMoviesByGenre", "moviesByGenreId"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    },
    MostraFilme(movie) {
      this.$router.push(`movie/${movie.id}`);
    },
  },
};
</script>
<template>
  <div class="movie-in-block">
    <p v-for="movie of moviesByGenreId(id).results" :key="movie.id">
      <img
        :src="getImgUrl(movie.poster_path)"
        class="poster"
        @click="MostraFilme(movie)"
        style="margin: 0px 10px"
      />
    </p>
  </div>
</template>
<style></style>
