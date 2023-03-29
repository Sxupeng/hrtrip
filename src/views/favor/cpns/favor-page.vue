<script setup>
import FavorCollection from "@/components/favor-page/favor-collection.vue";
import FavorHistory from "@/components/favor-page/favor-history.vue";
import NavTab from "@/components/nav-tab/nav-tab.vue";
import { ref } from "vue";

const currentIndex = ref(0);
const titles = ["我的收藏", "浏览历史"];
const tClick = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class = "top">
    <nav-tab>
      <template v-slot:title>
        <div class = "top-title">
          <template v-for = "(item, index) in titles" :key = "item">
            <span
                :class = "['title', currentIndex === index ? 'active' : '']"
                @click = "tClick(index)"
            >{{ item }}</span
            >
          </template>
        </div>
      </template>
    </nav-tab>
    <template v-if = "currentIndex === 0">
      <favor-collection/>
    </template>
    <template v-if = "currentIndex === 1">
      <favor-history/>
    </template>
  </div>
</template>

<style lang = "scss" scoped>
.top {
  .top-title {
    display: flex;

    .title {
      width: 73px;
      font-weight: 550;
      font-size: 14px;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      padding: 5px 3px;
    }

    .active {
      background: var(--primary-color);
      color: #ffffff;
    }
  }
}
</style>