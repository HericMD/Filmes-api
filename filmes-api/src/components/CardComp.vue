<script>
import axios from "axios";
export default {
  data() {
    return {
      id: 1,
      tv: {
        image: {},
      },
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
  <img :src="tv.image.medium" alt="" />
  <button @click="buscar">Testar</button>
</template>
<style></style>
