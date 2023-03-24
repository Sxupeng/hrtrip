<script setup>
import SearchPageTitle from "@/components/search-page-cpn/search-page-title.vue";
import SearchPageContent from "@/components/search-page-cpn/search-page-content.vue";
import useSearch from "@/stores/modules/search";
import { getSearchList } from "@/hooks/getSearchList";

const searchStore = useSearch();
let iten = [];
</script>

<template v-if = "iten">
  <template v-for = "item in iten">
    <div class = "search-page-history">
      <search-page-title :title = "item.text"></search-page-title>
      <div class = "content">
        <search-page-content/>
      </div>
    </div>
  </template>
</template>

<style lang = "scss" scoped>
.search-page-history {
}
</style>