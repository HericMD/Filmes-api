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
    <RouterLink to="/populares">Populares</RouterLink>
    <RouterLink to="/aclamados">Aclamados</RouterLink>
    <RouterLink to="/categorias">Categorias</RouterLink>
  </header>
</template>
