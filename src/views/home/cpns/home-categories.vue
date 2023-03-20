<script setup>
import useHomeList from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeList();
const { categories } = storeToRefs(homeStore);

homeStore.getCategories();
</script>

<template>
  <div class = "home-categories">
    <template v-for = "item in categories" :key = "item.id">
      <div class = "item">
        <img :src = "item.pictureUrl" alt = ""/>
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang = "scss" scoped>
.home-categories {
  display: flex;
  overflow: auto;
  height: 80px;
  font-size: 12px;
  padding: 0 10px;
  margin-top: 8px;
  // 清除滑动底部横条
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    // flex自动压缩宽度，设为0不会自动压缩
    flex-shrink: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 32px;
      height: 32px;
      margin-bottom: 3px;
    }
  }
}
</style>