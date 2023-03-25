<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import { computed } from "vue";
import { formatMountDay } from "@/utils/format_date";
import { useRouter } from "vue-router";

defineProps({
  city: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "关键字/位置/民宿",
  },
  isShow: {
    type: Boolean,
    default: true,
  },
  isTab: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
const mainStore = useMainStore();
const { stateDate, endDate } = storeToRefs(mainStore);
const stateDateStr = computed(() => formatMountDay(stateDate.value, "MM.DD"));
const endDateStr = computed(() => formatMountDay(endDate.value, "MM.DD"));
// console.log(stateDateStr.value);
const catchClick = () => {
  router.push('/home');
  mainStore.isShowTab = true;
};
</script>

<template>
  <div class = "search-city">
    <div class = "catch" v-if = "isTab" @click = "catchClick">
      <van-icon name = "arrow-left" size = "20px"/>
    </div>
    <div class = "search-bar1">
      <div class = "city" v-if = "city">{{ city }}</div>
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
      <div class = "content">
        <input type = "text" :placeholder = "content"/>
      </div>
      <div class = "search" v-if = "isShow">
        <van-icon name = "search" size = "26" color = "#999999"/>
      </div>
    </div>
    <div class = "more" v-if = "isTab">
      <van-icon name = "comment-o" size = "22px"/>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.search-city {
  display: flex;
  align-items: center;
  margin-top: 10px;

  .catch, .more {
    width: 30px;
    margin: 0 10px;
    color: var(--primary-color);
  }
}

.search-bar1 {
  position: relative;
  height: 100%;
  background: #f2f4f6;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;

  .city {
    font-size: 14px;
    width: 30px;
    color: #000000;
    margin-left: 10px;
  }

  .item-inner {
    width: 80px;
    display: flex;
    align-items: center;
    //margin-left: 10px;
    //border-right: 1px solid #ffffff;
    flex-direction: column;

    .item {
      display: flex;

      span {
        color: #999999;
      }
    }
  }

  .content {
    font-size: 14px;
    color: #999999;
    margin-left: 5px;

    input {
      width: 100%;
      height: 100%;
      background: #f2f4f6;
      border: none;
    }
  }

  .search {
    position: absolute;
    right: 10px;
  }
}
</style>