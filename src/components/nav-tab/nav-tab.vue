<script setup>
import useMainStore from "@/stores/modules/main";
import { useRouter } from "vue-router";

const mainStore = useMainStore()
const router = useRouter();
const onClickLeft = () => {
  router.back();
  mainStore.isShowTab = true
};
</script>

<template>
  <div class = "nav-tab">
    <van-nav-bar left-text = "旅途" left-arrow @click-left = "onClickLeft">
      <template #title>
        <slot name = "title"></slot>
      </template>
      <template #right>
        <i class = "icon-right"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang = "scss" scoped>
.nav-tab {

}
</style>