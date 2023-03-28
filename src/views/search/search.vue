<script setup>
// import {useRoute} from "vue-router";
import { storeToRefs } from "pinia";
import useCity from "@/stores/modules/city";
import SearchBar from "@/components/search-bar/search-bar.vue";
import SearchTabs from "@/views/search/cpns/search-01-tabs.vue";
import { onMounted } from "vue";
import useSearch from "@/stores/modules/search";
import SearchCategories from "@/views/search/cpns/search-02-categories.vue";
import useMainStore from "@/stores/modules/main";
import SearchContent from "@/views/search/cpns/search-03-content.vue";
import SearchPage from "@/views/search-page/search-page.vue";

const mainStore = useMainStore();
const cityStore = useCity();
const searchStore = useSearch();
const { currentCity } = storeToRefs(cityStore);
const { isShowSearch } = storeToRefs(mainStore);
onMounted(() => {
  mainStore.isShowTab = false;
  mainStore.isShowSearch = false;
});
searchStore.getSearchTop();
searchStore.getSearchResult();
const { searchTopList, searchResult, housePicture } = storeToRefs(searchStore);
const inputClick = () => {
  mainStore.isShowSearch = true;
};
</script>

<template>
  <div class = "search">
    <!--<h2>{{ stateDateStr }}&#45;&#45;{{ endDateStr }}&#45;&#45;{{ currentCity.cityName }}</h2>-->
    <!--搜索框-->
    <div class = "search-bar" v-show = "!isShowSearch">
      <div class = "top">
        <search-bar
            :city = "currentCity.cityName"
            content = "搜索波尔塔拉的景点"
            :isShow = "false"
            :is-tab = "true"
            @click = "inputClick"
        ></search-bar>
        <!--下拉菜单-->
        <search-tabs :searchTopList = "searchTopList"/>
        <search-categories :searchHotFilters = "searchResult"/>
      </div>
      <div class = "more">
        <!--优惠滑块-->
        <search-content :content = "housePicture"/>
      </div>
    </div>
    <!--search-page-->
    <div class = "search-page" v-if = "isShowSearch">
      <search-page/>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.search-page {
  height: 100vh;
}

.search {
  position: relative;
  z-index: 9;
  height: 100vh;
  //background: #ffffff;

  .top {
    position: fixed;
    top: 0;
    left: 0;
    //background: #ffffff;
    padding-bottom: 65px;
    z-index: 999;
  }

  .search-bar {
    width: 100%;
    height: 42px;
    font-size: 12px;
  }

  .more {
    background: #f2f2f2;
    margin-top: 150px;
    padding: 0 20px;
  }
}
</style>