<script>
export default {
  name: "home",
};
</script>
<script setup>
import HomeNavBar from "@/views/home/cpns/home-01-nav-bar.vue";
import HomeSearchBox from "@/views/home/cpns/home-02-search-box.vue";
import HomeCategories from "@/views/home/cpns/home-03-categories.vue";
import HomeCountent from "@/views/home/cpns/home-04-countent.vue";
import { computed, onActivated, ref, watch } from "vue";
import useScroll from "@/hooks/useScroll";
import SearchBar from "@/components/search-bar/search-bar.vue";
import useHomeList from "@/stores/modules/home";


const homeStore = useHomeList();
// 定义变量方法
const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
const isShowSearch = computed(() => {
  return scrollTop.value >= 600;
});
// 监听滚动到底部
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.getHouselist().then(() => {
      isReachBottom.value = false;
      // console.log(isReachBottom.value)
    });
  }
});
// 跳转到home时，拿到原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<template>
  <div class = "home" ref = "homeRef">
    <!--导航栏-->
    <home-nav-bar></home-nav-bar>
    <div class = "banner">
      <img src = "@/assets/img/home/banner.webp" alt = ""/>
    </div>
    <!--home-search-box-->
    <home-search-box></home-search-box>
    <!--home-categories-->
    <home-categories></home-categories>
    <!--home-countent-->
    <home-countent></home-countent>
    <!--隐藏导航栏-->
    <div class = "search-bar" v-show = "isShowSearch">
      <search-bar></search-bar>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  //padding-bottom: -20px;
  //box-sizing: border-box;

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 90%;
    margin: 10px 5%;
    height: 45px;
    z-index: 99;
    background: #ffffff;
  }

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>