<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import ActionComp from "@/components/ActionComp.vue";
export default {
  components: { ActionComp },
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
  <ActionComp />
</template>
<style></style>
import CardComp from "@/components/CardComp.vue"; export default { components: {
CardComp }, };
