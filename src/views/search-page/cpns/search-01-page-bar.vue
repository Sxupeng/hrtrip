<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();
const onCancel = () => {
  mainStore.isShowSearch = false;
};
</script>

<template>
  <div class = "search-page-bar">
    <van-search
        shape = "round"
        show-action
        placeholder = "请输入搜索关键词"
        @cancel = "onCancel"
    />
  </div>
</template>

<style lang = "scss" scoped>
.search-page-bar {
}
</style>