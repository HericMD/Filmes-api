import axios from "axios";

export default class MoviesAPI {
  async getMoviesByGenre(genre_id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=c16459acab2e659b5ab1164dbd0cba50&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
}
