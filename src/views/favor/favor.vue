<script setup>
import BackTop from "@/components/back-top/back-top.vue";
import useFavor from "@/stores/modules/favor";
import FavorTitle from "@/views/favor/cpns/favor-page.vue";

const favorStore = useFavor();
favorStore.getList();
favorStore.getHistory();
</script>

<template>
  <div class = "favor container">
    <favor-title/>
    <back-top/>
  </div>
</template>

<style lang = "scss" scoped>
.favor {
  height: 100vh;
  overflow: auto;
}
</style>