<script setup>
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
const changeLoading = () => {
  isLoading.value = false;
};
</script>

<template>
  <div class = "loading" v-if = "isLoading" @click = "changeLoading">
    <div class = "loading-bg">
      <img src = "@/assets/img/home/full-screen-loading.gif" alt = ""/>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 29999;

  .loading-bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    width: 90px;
    height: 90px;
    background: #ffffff;
    border-radius: 10px;
    text-align: center;

    img {
      width: 70px;
      height: 70px;
      margin-top: 10px;
    }
  }
}
</style>