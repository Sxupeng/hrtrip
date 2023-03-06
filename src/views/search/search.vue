<script setup>
// import {useRoute} from "vue-router";
import useHomeList from "@/stores/modules/home/home";
import useCity from "@/stores/modules/city/city";

const homeStore = useHomeList();
const cityStore = useCity();
// const route = useRoute();
const stateDate = homeStore.stateDate;
const endDate = homeStore.endDate;
const currentCity = cityStore.currentCity.cityName;
</script>

<template>
  <div class = "search">
    <h2>{{ stateDate }}--{{ endDate }}--{{ currentCity }}</h2>
  </div>
</template>

<style lang = "scss" scoped>
.search {
  position: relative;
  z-index: 9;
  height: 100vh;
  background: #ffffff;
}
</style>