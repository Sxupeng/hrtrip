<script setup>
import { ref } from "vue";

const props = defineProps({
  searchTopList: {
    type: Object,
    default: () => ({}),
  },
  tabTitle: {
    type: String,
    default: "默认",
  },
});
const activeIds = ref(0);
const activeIndex = ref(1);
const selectClick = () => {
  console.log(activeIds.value);
};
</script>

<template>
  <div class = "search-tabs" v-if = "searchTopList">
    <van-dropdown-item :title = "tabTitle">
      <van-tree-select
          v-model:active-id = "activeIds"
          v-model:main-active-index = "activeIndex"
          :items = "searchTopList"
          @click-item = "selectClick"
      >
      </van-tree-select>
    </van-dropdown-item>
  </div>
</template>

<style lang = "scss" scoped>
.search-tabs {
}
</style>