<script setup>
import useFavor from "@/stores/modules/favor";
import FavorTitle from "@/views/favor/cpns/favor-page.vue";

const favorStore = useFavor();
favorStore.getList();
favorStore.getHistory();
</script>

<template>
  <div class = "favor">
    <favor-title/>
  </div>
</template>

<style lang = "scss" scoped></style>