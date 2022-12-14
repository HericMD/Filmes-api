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
    <RouterLink to="/">Populares</RouterLink>
    <RouterLink to="/">Aclamados</RouterLink>
    <RouterLink to="/">Categorias</RouterLink>
  </header>
</template>
<style scoped>
header {
  position: fixed;
  background-color: black;
  padding: 10px 0px;
  width: 100%;
  margin-top: -21px;
}
header h1 {
  color: red;
}
header a {
  color: gray;
  padding: 10px;
}
</style>
