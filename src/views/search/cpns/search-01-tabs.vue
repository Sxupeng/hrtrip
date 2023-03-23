<script setup>
import { ref } from "vue";

const activeName = ref("");
defineProps({
  searchTopList: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class = "search-tabs">
    <van-tabs v-model:active = "activeName" title-active-color = "#ff9854">
      <template v-for = "(item) in searchTopList" :key = "item.gType">
        <van-tab :title = "item.label" :name = "item.label"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang = "scss" scoped>
.search-tabs {
}
</style>