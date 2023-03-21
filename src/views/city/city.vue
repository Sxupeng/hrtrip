<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useCity from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "@/views/city/cpns/city-group.vue";
import useMainStore from "@/stores/modules/main";
// pinia
const cityStore = useCity();
const { allCity, searchValue } = storeToRefs(cityStore);
const mainStore = useMainStore();
// 获取数据
onMounted(() => {
  cityStore.getCityAll();
  mainStore.isShowTab = false;
});
// tab切换
const tabActive = ref(0);
// 目的：获取选中标签后的数据
// 1.获取正确的key：将tabs中绑定的tabActive 正确的绑定
// 2.根据key从allCity中获取数据，但是默认获取的数据不是响应式的，所以必须包裹computed
// const currentGroup = computed(() => allCity.value[tabActive.value]);

// 路由
const router = useRouter();
const cancelClick = () => {
  router.back();
};
</script>

<template>
  <div class = "city top-page">
    <div class = "top">
      <!--1.搜索框-->
      <van-search
          v-model = "searchValue"
          shape = "round"
          show-action
          placeholder = "城市/区域/位置"
          @cancel = "cancelClick"
      />
      <!--2.tab切换-->
      <!--tabActive默认索引-->
      <van-tabs v-model:active = "tabActive" color = "#ff9854">
        <template v-for = "(value, key, index) in allCity" :key = "index">
          <van-tab :title = "value.title" :name = "key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!--city-group-->
    <div class = "content">
      <!--      <city-group :group-data = "currentGroup"></city-group>-->
      <template v-for = "(value, key, index) in allCity" :key = "index">
        <city-group v-show = "key === tabActive" :group-data = "value"></city-group>
      </template>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.city {
  // top固定定位方案
  //.top {
  //  position: fixed;
  //  top: 0;
  //  left: 0;
  //  right: 0;
  //}
  //
  //
  //.content {
  //  margin-top: 98px;
  //}
  .top {
    position: relative;
    z-index: 9;
  }

  //  局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>