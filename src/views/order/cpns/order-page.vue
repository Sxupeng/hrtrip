<script setup>
import OrderTabInfos from "@/components/order-tab-infos/order-tab-infos.vue";
import useOrder from "@/stores/modules/order";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import NavTab from "@/components/nav-tab/nav-tab.vue";

const orderStore = useOrder();
const { list, orderList, tabs } = storeToRefs(orderStore);

const activeName = ref("all");
const onClickTab = () => {
  list.value = activeName.value;
  orderStore.getList();
};
</script>

<template>
  <div class = "page">
    <nav-tab>
      <template v-slot:title>
        <div class = "title">订单列表</div>
      </template>
    </nav-tab>
    <div class = "more">
      <van-tabs
          v-model:active = "activeName"
          @click-tab = "onClickTab"
          title-active-color = "#ff9854"
      >
        <template v-for = "item in tabs" :key = "item">
          <van-tab :title = "item.title" :name = "item.name">
            <order-tab-infos :content = "orderList"/>
          </van-tab>
        </template>
      </van-tabs>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.page {
  .title {
    color: var(--primary-color);
  }

  .more {
    padding: 0 20px;
  }
}
</style>