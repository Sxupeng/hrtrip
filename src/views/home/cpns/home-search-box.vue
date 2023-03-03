<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
// 跳转到city页面
const cityClick = () => {
  router.push({
    path: "/city",
  });
};

// 位置，城市点击处理
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log("获取位置成功");
        console.log(res);
      },
      (err) => {
        console.log("获取位置失败");
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
  );
};
</script>

<template>
  <div class = "home-search-box">
    <div class = "locator">
      <div class = "city" @click = "cityClick">郑州</div>
      <div class = "position" @click = "positionClick">
        <span class = "text">我的位置</span>
        <img src = "@/assets/img/home/icon_location.png" alt = ""/>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home-search-box {
  .locator {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
      color: #333333;
      font-size: 15px;
    }

    .position {
      width: 74px;

      .text {
        font-size: 12px;
        color: #333333;
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