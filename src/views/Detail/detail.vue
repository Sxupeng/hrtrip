<script setup>
import { useRoute, useRouter } from "vue-router";
import useDetail from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import useMainStore from "@/stores/modules/main";
import DetailSwipe from "@/views/detail/cpns/detail-01-swipe.vue";
import DetailInfos from "@/views/detail/cpns/detail-02-infos.vue";
import DetailFacility from "@/views/detail/cpns/detail-03-facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail-04-landlord.vue";
import DetailComment from "@/views/detail/cpns/detail-05-comment.vue";
import DetailNotice from "@/views/detail/cpns/detail-06-notice.vue";

const mainStore = useMainStore();
const route = useRoute();
const router = useRouter();
// console.log(route.params.id);
const detailStore = useDetail();
onMounted(() => {
  detailStore.getDetailItem();
  mainStore.isShowTab = false;
});

const { id, detailItem } = storeToRefs(detailStore);
id.value = route.params.id;
const mainPart = computed(() => detailItem.value.mainPart);
// 监听返回按钮点击
const onClickLeft = () => {
  router.back();
};
</script>

<template>
  <div class = "detail">
    <van-nav-bar
        title = "房屋详情"
        left-text = "旅途"
        left-arrow
        @click-left = "onClickLeft"
    />
    <div class = "main" v-if = "mainPart">
      <!--轮播图-->
      <detail-swipe :swipe-data = "mainPart.topModule.housePicture.housePics"/>
      <detail-infos :top-infos = "mainPart.topModule"/>
      <!--组件房屋设施-->
      <detail-facility
          :house-facility = "mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <!--组件房东介绍-->
      <detail-landlord :landlord = "mainPart.dynamicModule.landlordModule"/>
      <!--评论组件-->
      <detail-comment :comment = "mainPart.dynamicModule.commentModule"/>
      <!--预定须知-->
      <detail-notice
          :order-rules = "mainPart.dynamicModule.rulesModule.orderRules"
      />
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.detail {
}
</style>