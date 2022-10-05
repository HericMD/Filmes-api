import axios from "axios";

export default class GenreAPI {
  async getAllGenres() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c16459acab2e659b5ab1164dbd0cba50&language=pt-BR"
    );
    return data.genres;
  }
}
