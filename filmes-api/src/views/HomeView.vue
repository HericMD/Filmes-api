<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  components: { MoviesComp },
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
  <div v-for="genre of genres" :key="genre.id">
    <h1 :id="genre.id">{{ genre.name }} - {{ genre.id }}</h1>
    <MoviesComp :genre="genre.id" />
  </div>
</template>
<style></style>
