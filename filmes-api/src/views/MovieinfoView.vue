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
    <div class="title">
      <h1>{{ movie.title }}</h1>
    </div>
    <div class="poster-info">
      <div class="infoimg">
        <img :src="getImgUrl(movie.poster_path)" class="poster" />
      </div>
      <div class="infos">
        <p>Duração: {{ movie.runtime }} minutos</p>
        <p>Avaliação: {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
        <p>Sinopse: {{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.movieinfo {
  background: rgb(40, 40, 40);
  padding: 20px;
  padding-top: 40px;
  margin: 20px 50px;
}
</style>
