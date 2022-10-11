import { ref } from "vue";
import { defineStore } from "pinia";
import ActionAPI from "../api/action";
const actionApi = new ActionAPI();

export const useActionStore = defineStore("result", () => {
  const results = ref([]);
  async function get_results() {
    results.value = await actionApi.getAllResult();
  }

  return { results, get_results };
});
