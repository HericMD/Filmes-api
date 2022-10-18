<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
export default {
  data() {
    return {
      genre_id: "",
    };
  },
  async created() {
    await this.get_genres();
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["get_genres"]),
  },
};
</script>
<template>
  <header>
    <RouterLink to="/"
      ><img src="@/assets/img/Logo.png" alt="NetPrime"
    /></RouterLink>
    <RouterLink to="/series">Séries</RouterLink>
    <RouterLink to="/filmes">Filmes</RouterLink>
    <RouterLink to="/populares">Populares</RouterLink>
    <RouterLink to="/aclamados">Aclamados</RouterLink>
    <select v-model="genre_id">
      <option value="teste">Categorias</option>
      <option v-for="genre of genres" :key="genre.id" :value="genre.id">
        <a :href="`#genre.id`">{{ genre.name }} - {{ genre.id }}</a>
      </option>
    </select>
    <p>id: {{ genre_id }}</p>
  </header>
</template>
