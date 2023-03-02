<script setup>
import {useRouter} from "vue-router";
import tabData from "@/assets/data/tab-bar";

const router = useRouter();
const currenIndex = ref(0);
const itemClick = (path, index) => {
  router.push({
    path,
  });
  currenIndex.value = index;
};
import {getAssetURL} from "@/utils/load_assets";
import {ref} from "vue";
</script>

<template>
  <div class = "tab-bar">
    <template v-for = "(item, index) in tabData" :key = "index">
      <div
          class = "tab-bar-item"
          @click = "itemClick(item.path, index)"
          :class = "{ active: currenIndex === index }"
      >
        <img
            v-if = "currenIndex !== index"
            :src = "getAssetURL(item.image)"
            alt = ""
        />
        <img v-else :src = "getAssetURL(item.imageActive)" alt = ""/>
        <span class = "text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang = "scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 25px;

    &.active {
      color: var(--primary-color);
    }

    text {
      font-size: 12px;
    }

    img {
      width: 36px;
    }
  }
}
</style>