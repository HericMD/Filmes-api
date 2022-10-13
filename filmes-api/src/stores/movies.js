import { ref } from "vue";
import { defineStore } from "pinia";
import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref([]);
  async function getMoviesByGenre(id) {
    movies.value = await moviesApi.getMoviesByGenre(id);
  }

  return { movies, getMoviesByGenre };
});
