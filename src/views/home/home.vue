<script setup>
import HomeNavBar from "@/views/home/cpns/home-nav-bar.vue";

</script>

<template>
  <div class = "home">
    <!--导航栏-->
    <home-nav-bar></home-nav-bar>
    <div class = "banner">
      <img src = "@/assets/img/home/banner.webp" alt = ""/>
    </div>
    <div class = "locator">
      <div class = "city">广州</div>
      <div class = "position">
        <span class = "text">我的位置</span>
        <img src = "@/assets/img/home/icon_location.png" alt = ""/>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }

  .locator {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }

    .position {
      width: 74px;

      .text {
        font-size: 12px;
      }

      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>