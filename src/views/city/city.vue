<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {getCityAll} from "@/service";

const router = useRouter();
// 搜索框功能
const searchValue = ref();
const cancelClick = () => {
  router.back();
};
// tab切换
const tabActive = ref(0);
// 获取数据
onMounted(async () => {
  let {
    data: {cityGroup, cityGroupOverSea},
  } = await getCityAll();
  console.log(cityGroup);
  console.log(cityGroupOverSea);
});
</script>

<template>
  <div class = "city top-page">
    <!--1.搜索框-->
    <van-search
        v-model = "searchValue"
        shape = "round"
        show-action
        placeholder = "城市/区域/位置"
        @cancel = "cancelClick"
    />
    <!--2.tab切换-->
    <van-tabs v-model:active = "tabActive" color = "#ff9854">
      <van-tab title = "国内·港澳台"></van-tab>
      <van-tab title = "国外"></van-tab>
    </van-tabs>
  </div>
</template>

<style lang = "scss" scoped>
.city {
}
</style>