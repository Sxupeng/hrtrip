<script setup>
import SearchPageBar from "@/views/search-page/cpns/search-01-page-bar.vue";
import SearchPageHistory from "@/views/search-page/cpns/search-02-page-history.vue";
</script>

<template>
  <div class = "search-page">
    <div class = "search-view">
      <!--1-->
      <search-page-bar/>
      <!--搜索历史-->
      <search-page-history/>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.search-page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #ffffff;

  .search-view {
    padding: 0 10px;
  }
}
</style>