<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import { computed } from "vue";
import { formatMountDay } from "@/utils/format_date";

const mainStore = useMainStore();
const { stateDate, endDate } = storeToRefs(mainStore);
const stateDateStr = computed(() => formatMountDay(stateDate.value, "MM.DD"));
const endDateStr = computed(() => formatMountDay(endDate.value, "MM.DD"));
// console.log(stateDateStr.value);
</script>

<template>
  <div class = "search-bar1">
    <div class = "item-inner">
      <div class = "item">
        <span>住</span>
        {{ stateDateStr }}
      </div>
      <div class = "item">
        <span>离</span>
        {{ endDateStr }}
      </div>
    </div>
    <div class = "content">关键字/位置/民宿</div>
    <div class = "search">
      <van-icon name = "search" size = "26" color = "#999999"/>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.search-bar1 {
  position: relative;
  height: 45px;
  background: #f2f4f6;
  border-radius: 10px;
  width: 90%;
  margin: 10px 5%;
  display: flex;
  align-items: center;
  font-size: 12px;

  .item-inner {
    width: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 10px;
    border-right: 1px solid #ffffff;

    .item {
      span {
        color: #999999;
      }
    }
  }

  .content {
    font-size: 14px;
    color: #999999;
    margin-left: 5px;
  }

  .search {
    position: absolute;
    right: 10px;
  }
}
</style>