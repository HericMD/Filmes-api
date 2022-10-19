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
  const moviesByGenre = computed(() => {
    return (id) => {
      console.log(id);
      console.log(movies.value.find((m) => m.id == id).results);
      return movies.value.find((m) => m.id == id).results;
    };
  });
  const moviesByGenreId = (id) => {
    console.log(id);
    const index = movies.value.findIndex((p) => p.id == id);
    if (index > -1) {
      return movies.value[index];
    }
    return {};
  };

  return { movies, moviesByGenre, moviesByGenreId, getMoviesByGenre };
});
