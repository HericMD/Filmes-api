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
      this.$router.push(`/${id}`);
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
        <button
          @click="mostraGenero(genre.id)"
          v-for="genre of movie.genres"
          :key="genre.id"
        >
          {{ genre.name }}
        </button>
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
button {
  margin: 0px 3px;
  background-color: rgb(40, 40, 40);
  color: white;
  border: solid 1px;
  border-radius: 10px;
  padding: 5px 20px;
}
button:hover {
  background-color: blue;
  border-radius: 5px;
  transition: all 0.5s;
}
</style>
