<script setup>
import useOrder from "@/stores/modules/order";
import OrderTitle from "@/views/order/cpns/order-page.vue";

const orderStore = useOrder();
// orderStore.getAllList();
</script>

<template>
  <div class = "order">
    <order-title/>
  </div>
</template>

<style lang = "scss" scoped></style>