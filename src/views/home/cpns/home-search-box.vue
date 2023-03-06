<script setup>
import {useRouter} from "vue-router";
import useCity from "@/stores/modules/city/city";
import {storeToRefs} from "pinia";
import HomeCalendar from "@/views/home/cpns/home-calendar.vue";
import HomeHotSuggests from "@/views/home/cpns/home-hot-suggests.vue";
import useHomeList from "@/stores/modules/home/home";

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
// 搜索跳转
// const homeStore = useHomeList();
const searchClick = () => {
  router.push({
    path: "/search",
    // query: {
    //   stateDate: homeStore.stateDate,
    //   endDate: homeStore.endDate,
    //   currentCity: cityStore.currentCity.cityName,
    // },
  });
};
</script>

<template>
  <div class = "home-search-box">
    <!--位置信息-->
    <div class = "locator bottom-gray-line">
      <div class = "city" @click = "cityClick">{{ currentCity.cityName }}</div>
      <div class = "position" @click = "positionClick">
        <span class = "text">我的位置</span>
        <img src = "@/assets/img/home/icon_location.png" alt = ""/>
      </div>
    </div>
    <!--日期范围-->
    <home-calendar></home-calendar>
    <!--价格 民宿 -->
    <div class = "item bottom-gray-line">
      <div class = "price">价格不限</div>
      <div class = "ofPeople right-line">人数不限</div>
    </div>
    <div class = "item bottom-gray-line">
      <div class = "crux">关键字/位置/民宿名字</div>
    </div>
    <!--热门建议-->
    <home-hot-suggests></home-hot-suggests>
    <!--搜索按钮-->
    <div class = "item search-btn">
      <div class = "btn" @click = "searchClick">开始搜索</div>
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

  .item {
    display: flex;
    height: 44px;
    color: #999999;
    align-items: center;
    padding: 0 20px;

    .ofPeople {
      margin-left: 170px;
      border-right: 1px solid var(--line-color);
    }
  }

  .search-btn {
    .btn {
      width: 340px;
      height: 38px;
      line-height: 38px;
      margin: 20px 0 0 0;
      background: var(--theme-linear-gradient);
      color: #ffffff;
      font-size: 18px;
      font-weight: 500;
      border-radius: 40px;
      text-align: center;
    }
  }
}
</style>