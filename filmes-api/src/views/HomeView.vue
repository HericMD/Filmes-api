<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useResultStore } from "@/stores/results";
export default {
  async created() {
    await this.get_results();
  },
  computed: {
    ...mapStores(useResultStore),
    ...mapState(useResultStore, ["results"]),
  },
  methods: {
    ...mapActions(useResultStore, ["get_results"]),
  },
};
</script>
<template>
  <p v-for="result of results" :key="result.id">
    {{ result.title }} - {{ result.id }} - {{ result.poster_path }}
  </p>
  <p v-for="result of results" :key="result.id">
    {{ result.poster_path }}
  </p>
</template>
<style></style>
