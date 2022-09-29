<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      tv: {},
    };
  },
  methods: {
    async buscar() {
      const url = `https://api.tvmaze.com/shows/${this.id}`;
      const { data } = await axios.get(url);
      this.tv = data;
    },
  },
};
</script>
<template>
  <input type="text" v-model="id" />
  {{ tv.name }}
  <button @click="buscar">Testar</button>
</template>
<style></style>
