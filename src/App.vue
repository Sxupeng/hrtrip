<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/Loading.vue";
// import {useRoute} from "vue-router";
// const route = useRoute();
</script>

<template>
  <div class = "App">
    <router-view></router-view>
    <!--    <tab-bar v-if = "!route.meta.hideTabBar"></tab-bar>-->
    <tab-bar></tab-bar>
    <Loading/>
  </div>
</template>

<style scoped></style>