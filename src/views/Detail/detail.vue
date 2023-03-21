<script setup>
import { useRoute, useRouter } from "vue-router";
import useDetail from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import useMainStore from "@/stores/modules/main";
import DetailSwipe from "@/views/detail/cpns/detail-01-swipe.vue";
import DetailInfos from "@/views/detail/cpns/detail-02-infos.vue";
import DetailFacility from "@/views/detail/cpns/detail-03-facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail-04-landlord.vue";
import DetailComment from "@/views/detail/cpns/detail-05-comment.vue";
import DetailNotice from "@/views/detail/cpns/detail-06-notice.vue";
import DetailMap from "@/views/detail/cpns/detail-07-map.vue";
import DetailIntro from "@/views/detail/cpns/detail-08-intro.vue";
import TabControl from "@/components/tab-control/tab-control.vue";
import useScroll from "@/hooks/useScroll";

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
// tab-control相关操作
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
  return scrollTop.value >= 300;
});
// const landlordRef = ref();
// const sectionEls = [];
// const getSectionRef = (value) => {
//   // console.log(value.$el);
//   sectionEls.push(value.$el);
//   // console.log(sectionEls);
// };
const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
});
const getSectionRef = (value) => {
  const name = value.$el.getAttribute("name");
  sectionEls.value[name] = value.$el;
};
const tabClick = (index) => {
  // console.log("tabClick");
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let instance = el.offsetTop - 44;
  if (index === 0) instance = instance - 44;
  detailRef.value.scrollTo({
    top: instance,
  });
};
</script>

<template>
  <div class = "detail top-page" ref = "detailRef">
    <tab-control
        class = "tabs"
        v-if = "showTabControl"
        :titles = "names"
        @tabItemClick = "tabClick"
    />
    <van-nav-bar
        title = "房屋详情"
        left-text = "旅途"
        left-arrow
        @click-left = "onClickLeft"
    />
    <div class = "main" v-if = "mainPart" v-memo = "[mainPart]">
      <!--轮播图-->
      <detail-swipe :swipe-data = "mainPart.topModule.housePicture.housePics"/>
      <detail-infos
          :ref = "getSectionRef"
          name = "描述"
          :top-infos = "mainPart.topModule"
      />
      <!--组件房屋设施-->
      <detail-facility
          :ref = "getSectionRef"
          name = "设施"
          :house-facility = "mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <!--组件房东介绍-->
      <detail-landlord
          :ref = "getSectionRef"
          name = "房东"
          :landlord = "mainPart.dynamicModule.landlordModule"
      />
      <!--评论组件-->
      <detail-comment
          name = "评论"
          :ref = "getSectionRef"
          :comment = "mainPart.dynamicModule.commentModule"
      />
      <!--预定须知-->
      <detail-notice
          name = "须知"
          :ref = "getSectionRef"
          :order-rules = "mainPart.dynamicModule.rulesModule.orderRules"
      />
      <!--地图-->
      <detail-map
          name = "周边"
          :ref = "getSectionRef"
          :position = "mainPart.dynamicModule.positionModule"
      />
      <!--价格说明-->
      <detail-intro :price-intro = "mainPart.introductionModule"/>
    </div>
    <div class = "footer" v-if = "mainPart">
      <img src = "@/assets/img/detail/icon_ensure.png" alt = ""/>
      <div class = "text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.detail {
  .tabs {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>