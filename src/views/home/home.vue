<script setup>
import HomeNavBar from "@/views/home/cpns/home-nav-bar.vue";
import HomeSearchBox from "@/views/home/cpns/home-search-box.vue";
import HomeCategories from "@/views/home/cpns/home-categories.vue";
import HomeCountent from "@/views/home/cpns/home-countent.vue";
import {ref, computed} from "vue";
import useScroll from "@/hooks/useScroll";

const {scrollTop} = useScroll()
const isShowSearch = computed(() => {
  return scrollTop.value >= 100;
});
</script>

<template>
  <div class = "home">
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
      <h2>内容内容</h2>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home {
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    z-index: 99;
  }

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>