<script setup>
import HomeNavBar from "@/views/home/cpns/home-01-nav-bar.vue";
import HomeSearchBox from "@/views/home/cpns/home-02-search-box.vue";
import HomeCategories from "@/views/home/cpns/home-03-categories.vue";
import HomeCountent from "@/views/home/cpns/home-04-countent.vue";
import { computed } from "vue";
import useScroll from "@/hooks/useScroll";
import SearchBar from "@/components/search-bar/search-bar.vue";

const { scrollTop } = useScroll();
const isShowSearch = computed(() => {
  return scrollTop.value >= 600;
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
      <search-bar></search-bar>
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
    height: 65px;
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