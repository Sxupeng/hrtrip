<script setup>
import OrderTitle from "@/views/order/cpns/order-page.vue";

import useOrder from "@/stores/modules/order";

const orderStore = useOrder();
orderStore.getList();
</script>

<template>
  <div class = "order container">
    <order-title/>
  </div>
</template>

<style lang = "scss" scoped>
.order {
  height: 100vh;
  overflow: auto;
}
</style>