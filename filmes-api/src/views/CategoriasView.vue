<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  components: { MoviesComp },
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
  watch: {
    genre_id() {
      window.location.href = `#${this.genre_id}`;
    },
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
