<script>
import CardComp from "@/components/CardComp.vue";
export default {
  components: { CardComp },
};
</script>

<template>
  <header>
    <h1>
      <a href="">NETPRIME+</a>
    </h1>
    <a href="">Séries</a>
    <a href="">Filmes</a>
    <a href="">Populares</a>
    <a href="">Listas</a>
    <a href="">Categorias</a>
  </header>
  <main>
    <div class="row-pop">
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
    </div>
  </main>
</template>
<style></style>
