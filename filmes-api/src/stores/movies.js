import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref([]);
  async function getMoviesByGenre(id) {
    const results = await moviesApi.getMoviesByGenre(id);
    movies.value.push({
      id,
      results,
    });
  }
  const moviesByGenre = computed((id) => movies.value.find((m) => m.id === id).results
  );

  return { movies, moviesByGenre, getMoviesByGenre };
});
