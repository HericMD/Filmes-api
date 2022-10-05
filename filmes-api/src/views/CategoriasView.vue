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
  <p v-for="genre of genres" :key="genre.id">
    <RouterLink to="/">{{ genre.name }} - {{ genre.id }}</RouterLink>
  </p>
</template>
<style></style>
