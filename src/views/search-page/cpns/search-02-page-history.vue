<script setup>
import SearchPageTitle from "@/components/search-page-cpn/search-page-title.vue";
import SearchPageContent from "@/components/search-page-cpn/search-page-content.vue";
import useSearch from "@/stores/modules/search";

const searchStore = useSearch();
</script>

<template v-if = "searchStore.searchTopList0">
  <template v-for = "(item, index) in searchStore?.searchTopList0" :key = "item">
    <div class = "search-page-history">
      <search-page-title :title = "item.text" :idx = "index"></search-page-title>
      <div class = "content" :class = "{ active: index === 0 }">
        <search-page-content :searchContent = "item.children" :idx = "index"/>
      </div>
    </div>
  </template>
</template>

<style lang = "scss">
.search-page-history {
  .active {
    .item,
    .item1 {
      background: #fdf4ed !important;
    }
  }
}
</style>