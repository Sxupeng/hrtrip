<script setup>

import ContentList from "@/components/content-list/content-list.vue";
import useFavor from "@/stores/modules/favor";
import { storeToRefs } from "pinia";

const favorStore = useFavor()
const { favorHistory } = storeToRefs(favorStore)
</script>

<template>
  <div class = 'history'>
    <content-list :content = "favorHistory"/>
  </div>
</template>

<style lang = "scss" scoped>
.history {
  padding: 0 20px;
}
</style>