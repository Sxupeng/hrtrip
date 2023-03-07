<script setup>
import useHomeList from "@/stores/modules/home/home";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";

const homeStore = useHomeList();
onMounted(() => {
  homeStore.getHouselist();
});
const {houselist} = storeToRefs(homeStore);
const btnClick = () => {
  homeStore.page++;
  homeStore.getHouselist();
};
</script>

<template>
  <div class = "home-countent">
    <h2 class = "title">热门精选</h2>
    <div class = "list">
      <template v-for = "item in houselist" :key = "item.data.houseId">
        <house-item-v9
            v-if = "item.discoveryContentType === 9"
            :item-data = "item.data"
        ></house-item-v9>
        <house-item-v3
            v-if = "item.discoveryContentType === 3"
            :item-data = "item.data"
        ></house-item-v3>
      </template>
      <button @click = "btnClick">加载更多</button>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home-countent {

  background: #f5f7f9;

  .title {
    font-size: 21px;
    font-weight: 600;
    padding: 20px 0 10px 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }
}
</style>