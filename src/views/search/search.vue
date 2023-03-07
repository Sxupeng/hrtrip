<script setup>
// import {useRoute} from "vue-router";
import useHomeList from "@/stores/modules/home/home";
import useCity from "@/stores/modules/city/city";
import {storeToRefs} from "pinia";

const homeStore = useHomeList();
const cityStore = useCity();
const {stateDate, endDate} = storeToRefs(homeStore);
const {currentCity} = storeToRefs(cityStore);
</script>

<template>
  <div class = "search">
    <h2>{{ stateDate }}--{{ endDate }}--{{ currentCity.cityName }}</h2>
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