<script setup>
import useSearch from "@/stores/modules/search";
import { storeToRefs } from "pinia";

defineProps({
  searchContent: {
    type: Array,
    default: () => [],
  },
  idx: {
    type: Number,
    default: -1,
  },
});
const searchStore = useSearch();
const { isShowHot, indexs } = storeToRefs(searchStore);
</script>

<template>
  <div class = "search-page-content" v-if = "searchContent">
    <div class = "infos">
      <template v-for = "(item, index) in searchContent" :key = "item.id">
        <div class = "item" v-if = "index < 7">
          {{ item.text }}
        </div>
        <template v-if = "index > 8">
          <template v-if = "indexs === idx">
            <div :class = "['item1', isShowHot ? 'over' : 'show']">
              {{ item.text }}
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.search-page-content {
  .infos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    font-size: 11px;

    .item,
    .item1 {
      padding: 6px 10px;
      margin: 6px;
      background: #f0f3f6;
      border-radius: 15px;
    }

    .show {
      display: block !important;
    }

    .over {
      display: none !important;
    }
  }
}
</style>