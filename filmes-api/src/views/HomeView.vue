<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  data() {
    return {
      genre_id: "",
    };
  },
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
  watch: {
    genre_id() {
      window.location.href = `#${this.genre_id}`;
    },
  },
};
</script>
<template>
  <select v-model="genre_id" class="fixed">
    <option value="teste">Categorias</option>
    <option v-for="genre of genres" :key="genre.id" :value="genre.id">
      {{ genre.name }} - {{ genre.id }}
    </option>
  </select>
  <div v-for="genre of genres" :key="genre.id" class="movies">
    <h1 :id="genre.id" style="padding: 20px"></h1>
    <RouterLink :to="`${genre.id}`" class="genre-title"
      >{{ genre.name }}
    </RouterLink>

    <MoviesComp :genre="genre.id" />
  </div>
</template>
<style scoped>
.fixed {
  position: fixed;
  margin-left: 720px;
  margin-top: 7px;
  padding: 7px;
}
</style>
