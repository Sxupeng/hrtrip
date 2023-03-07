<script setup>
import useHomeList from "@/stores/modules/home/home";
import {storeToRefs} from "pinia";
// pinia
const homeStore = useHomeList();
const {hotSUggests} = storeToRefs(homeStore);

homeStore.getSuggests();
</script>

<template>
  <div class = "home-hot-suggests">
    <div class = "suggest">
      <template v-for = "(item, index) in hotSUggests" :key = "index">
        <div
            class = "item"
            :style = "{
            backgroundColor: item.tagText.background.color,
            color: item.tagText.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.suggest {
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  padding: 0 20px;
  font-size: 12px;

  .item {
    padding: 4px 8px;
    margin: 8px 9px 0 0;
    border-radius: 15px;
    line-height: 1;
  }
}
</style>