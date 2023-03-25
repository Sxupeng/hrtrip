<script setup>
import useSearch from "@/stores/modules/search";
import { storeToRefs } from "pinia";

defineProps({
  title: {
    type: String,
    default: () => "默认标题",
  },
  idx: {
    type: Number,
    default: -1,
  },
});
const searchStore = useSearch();
const { isShowHot, indexs } = storeToRefs(searchStore);
const iClick = (index) => {
  isShowHot.value = !isShowHot.value;
  indexs.value = index;
};
</script>

<template>
  <div class = "search-page-title">
    <div class = "title">
      <h2>{{ title }}</h2>
    </div>
    <slot>
      <div class = "expansion" @click = "iClick(idx)">
        <span>展开</span>
        <i
            :class = "['icon-more', isShowHot ? 'down' : 'up']"
        ></i>
      </div>
    </slot>
  </div>
</template>

<style lang = "scss" scoped>
.search-page-title {
  position: relative;
  display: flex;
  margin-top: 20px;
  padding: 0 20px;

  .title {
    border-left: 3px solid var(--primary-color);

    h2 {
      font-size: 16px;
      font-weight: 510;
      color: #333333;
      padding-left: 6px;
    }
  }

  .expansion {
    position: absolute;
    right: 30px;
    top: 5px;
    font-size: 11px;
    color: #333333;
  }

  .icon-more {
    display: inline-block;
    background-image: url(@/assets/img/home/home-sprite.png);
    width: 10px;
    height: 5.5px;
    background-size: 207px 192px;
    background-position: -178px -121px;
  }

  .down {
    background-position: -178px -121px;
  }

  .up {
    background-position: -176px -133px;
  }
}
</style>