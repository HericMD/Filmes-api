<script>
import MoviesAPI from "@/api/movies";
const movieApi = new MoviesAPI();
export default {
  props: ["id"],
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    this.movie = await movieApi.getMoviesById(this.id);
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w400${poster_path}`;
    },
    mostraGenero(id) {
      this.$router.push(`filmes-porgenero/${id}`);
    },
  },
};
</script>

<template>
  <div class="movieinfo">
    <h1>{{ movie.title }}</h1>
    <div class="infoimg">
      <img :src="getImgUrl(movie.poster_path)" class="poster" />
    </div>
    <div class="infos">
      <p>Duração: {{ movie.runtime }} minutos</p>
      <p>Avaliação: {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
      <p>Sinopse: {{ movie.overview }}</p>
    </div>
  </div>
</template>
