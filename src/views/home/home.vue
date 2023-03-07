<script setup>
import HomeNavBar from "@/views/home/cpns/home-nav-bar.vue";
import HomeSearchBox from "@/views/home/cpns/home-search-box.vue";
import HomeCategories from "@/views/home/cpns/home-categories.vue";
import HomeCountent from "@/views/home/cpns/home-countent.vue";
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
  </div>
</template>

<style lang = "scss" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>