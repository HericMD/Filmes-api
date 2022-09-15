<script>
import TitleComp from "@/components/TitleComp.vue";
import PosterComp from "@/components/PosterComp.vue";
import ReleaseComp from "@/components/ReleaseComp.vue";

export default {
  components: { TitleComp, PosterComp, ReleaseComp },
};
</script>
<template>
  <div class="CardComp">
    <PosterComp />
    <TitleComp />
    <ReleaseComp />
  </div>
</template>
<style></style>
