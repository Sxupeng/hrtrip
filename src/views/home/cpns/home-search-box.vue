<script setup>
import {useRouter} from "vue-router";
import useCity from "@/stores/modules/city/city";
import {storeToRefs} from "pinia";

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
// 当前城市
const cityStore = useCity();
const {currentCity} = storeToRefs(cityStore);
</script>

<template>
  <div class = "home-search-box">
    <!--位置信息-->
    <div class = "locator">
      <div class = "city" @click = "cityClick">{{ currentCity.cityName }}</div>
      <div class = "position" @click = "positionClick">
        <span class = "text">我的位置</span>
        <img src = "@/assets/img/home/icon_location.png" alt = ""/>
      </div>
    </div>
    <!--日期范围-->
    <div class = "date-range">
      <div class = "start">
        <span>入住</span>
        <span class = "date">3月14日</span>
      </div>
      <div class = "stay">共两晚</div>
      <div class = "end">
        <span>离店</span>
        <span class = "date">3月16日</span>
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

  .date-range {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    color: #999999;
    font-size: 12px;

    div {
      flex: 1;

    }

    .start, .end {
      display: flex;
      flex-direction: column;

      span {
        margin-top: 3px;
      }

      .date {
        font-size: 15px;
        color: #000000;
      }
    }
  }
}
</style>