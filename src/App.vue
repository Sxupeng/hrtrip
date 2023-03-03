<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div class = "App">
    <router-view></router-view>
    <tab-bar v-if = "!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<style scoped></style>