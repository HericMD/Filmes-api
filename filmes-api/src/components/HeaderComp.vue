<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
export default {
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
    <select v-model="teste">
      <option value="5">Categorias</option>
      <option v-for="genre of genres" :key="genre.id" value="1">
        {{ genre.name }} - {{ genre.id }}
      </option>
    </select>
    <p>teste:{{ teste }}</p>
  </header>
</template>
