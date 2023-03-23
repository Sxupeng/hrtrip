<script setup>
import { ref } from "vue";

defineProps({
  searchHotFilters: {
    type: Array,
    default: () => [],
  },
});
const currentIndex = ref(1);
const currentIndex1 = ref(0);
const isShow = ref(false);
const itemClick = (index) => {
  if (index === 0) {
    isShow.value = !isShow.value;
  } else {
    currentIndex.value = index;
    isShow.value = false;
  }
};
const itenClick = (index) => {
  isShow.value = false;
  currentIndex1.value = index;
};
</script>

<template>
  <div class = "search-categories">
    <div class = "infos">
      <template v-for = "(item, index) in searchHotFilters" :key = "item.label">
        <div
            class = "item"
            @click = "itemClick(index)"
            :class = "{ active: currentIndex === index }"
        >
          {{ item.label }}
        </div>
      </template>
    </div>
    <div
        v-if = "searchHotFilters[0]?.subFilterItems"
        class = "iten"
        v-show = "isShow"
    >
      <template
          v-for = "(iten, index) in searchHotFilters[0]?.subFilterItems"
          :key = "iten.label"
      >
        <div
            class = "iten-label"
            @click = "itenClick(index)"
            :class = "{ active: currentIndex1 === index }"
        >
          {{ iten.label }}
        </div>
      </template>
    </div>
    <div class = "box" v-show = "isShow"></div>
  </div>
</template>

<style lang = "scss" scoped>
.search-categories {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .box {
    position: fixed;
    top: 230px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 89;
  }

  .active {
    color: var(--primary-color) !important;
  }

  .infos {
    position: absolute;
    top: 100px;
    display: flex;
    overflow-y: auto;
    height: 40px;
    padding: 0 10px;
    align-items: center;
    background: #f2f2f2;
    // 清除滑动底部横条
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      font-size: 11px !important;
      color: #333333;
      flex-shrink: 0;
      padding: 6px;
      margin: 0 10px;
      background: #ffffff;
      border-radius: 10px;
    }
  }

  .iten {
    transition: all 0.5s;
    position: fixed;
    top: 140px;
    z-index: 99;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;

    .iten-label {
      width: 70px;
      font-size: 11px !important;
      margin: 8px 6px 8px 15px;
      background: #ffffff;
      padding: 5px 7px;
      border-radius: 10px;
      border: 1px solid #dcdee0;
      text-align: center;
    }
  }
}
</style>