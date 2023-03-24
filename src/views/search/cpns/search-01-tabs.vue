<script setup>
import SearchTabsCpn from "@/components/search-tabs/search-01-tabs-cpn.vue";
import SearchTabsTwo from "@/components/search-tabs/search-02-tabs-two.vue";
import { onUpdated } from "vue";
import { getSearchList } from "@/hooks/getSearchList";
import useSearch from "@/stores/modules/search";

const props = defineProps({
  searchTopList: {
    type: Array,
    default: () => [],
  },
});
const searchStore = useSearch();
let iten = [];
onUpdated(() => {
  iten = getSearchList(props.searchTopList[0].subGroups);
  // console.log(searchStore.searchTopList0[0]);
  searchStore.searchTopList0 = iten;
});
</script>

<template>
  <div class = "search-tabs">
    <van-dropdown-menu>
      <!--1-->
      <search-tabs-cpn :searchTopList = "iten" tab-title = "位置"/>
      <!--2-->
      <search-tabs-two :searchTopList = "searchTopList[1]"/>
      <!--3-->
      <search-tabs-cpn :searchTopList = "searchTopList[2]" tab-title = "筛选"/>
    </van-dropdown-menu>
  </div>
</template>

<style lang = "scss" scoped>
.search-tabs {
  position: relative;
  z-index: 2000;
  margin-top: 10px;

  .content {
    position: absolute;
    top: 50px;
    left: 0;
  }
}
</style>