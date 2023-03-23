<script setup>
import useHomeList from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import { useRouter } from "vue-router";

const homeStore = useHomeList();
homeStore.getHouselist();
const { houselist } = storeToRefs(homeStore);
// 监听window窗口的滚动
// 1.当我们离开页面时，移除监听
// 2.如果别的页面也进行类似的监听，会编写重复的代码
// const scrollListenHandler = () => {
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight;
//   // console.log(scrollTop, scrollHeight, clientHeight);
//   if (clientHeight + scrollTop >= scrollHeight) {
//     console.log("到底了");
//     homeStore.getHouselist();
//   }
// };
// onMounted(() => {
//   window.addEventListener("scroll", scrollListenHandler);
// });
// onUnmounted(() => {
//   window.removeEventListener("scroll", scrollListenHandler);
// });

// 传入回调方法
// useScroll(() => {
//   homeStore.getHouselist();
// });
// useScroll();

// 搜索框的显示与控制
// const isShowSearch = ref(false);
// watch(scrollTop, (newTop) => {
//   // console.log(newTop);
//   isShowSearch.value = newTop > 100;
// });

// 定义的响应式数据 依赖于另外一个可响应式数据 可以使用计算属性
// const isShowSearch = computed(() => {
//   return scrollTop.value >= 100;
// });
const router = useRouter();
const itemClick = (id) => {
  // 跳转到Detail页面
  // console.log(id);
  router.push({ path: "/detail/" + id, });
};
</script>

<template>
  <div class = "home-countent" ref = "homeRef">
    <h2 class = "title">热门精选</h2>
    <div class = "list">
      <template v-for = "item in houselist" :key = "item.data.houseId">
        <house-item-v9
            v-if = "item.discoveryContentType === 9"
            :item-data = "item.data"
            @click = "itemClick(item.data.houseId)"
        ></house-item-v9>
        <house-item-v3
            v-if = "item.discoveryContentType === 3"
            :item-data = "item.data"
            @click = "itemClick(item.data.houseId)"
        ></house-item-v3>
      </template>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home-countent {
  background: #f5f7f9;
  //padding-bottom: 10px;
  //box-sizing: border-box;

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