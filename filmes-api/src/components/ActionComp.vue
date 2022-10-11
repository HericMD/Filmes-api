<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useActionStore } from "@/stores/actions";
export default {
  async created() {
    await this.get_results();
  },
  computed: {
    ...mapStores(useActionStore),
    ...mapState(useActionStore, ["result"]),
  },
  methods: {
    ...mapActions(useActionStore, ["get_results"]),
  },
};
</script>
<template>
  <p v-for="result of results" :key="result.id">
    {{ result.title }} - {{ result.id }}
  </p>
</template>
<style></style>
