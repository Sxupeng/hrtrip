<script setup>
import {computed} from "vue";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift('#');
  return list
});
</script>

<template>
  <div class = "city-group">
    <van-index-bar highlight-color = "#ff9854" :index-list = "indexList">
      <van-index-anchor index = "热门"/>
      <div class = "list">
        <template v-for = "(hotcity, index) in groupData.hotCities" :key = "index">
          <div class = "city">{{ hotcity.cityName }}</div>
        </template>
      </div>
      <template v-for = "(group, index) in groupData.cities" :key = "index">
        <van-index-anchor :index = "group.group"/>
        <template v-for = "(city, indey) in group.cities" :key = "indey">
          <van-cell :title = "city.cityName"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang = "scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 13px 25px 13px 13px;

  .city {
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 14px;
    background: #fff4ec;
    margin: 6px;
  }
}
</style>