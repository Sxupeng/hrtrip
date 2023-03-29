<script setup>
import NavTab from "@/components/nav-tab/nav-tab.vue";
import useMainStore from "@/stores/modules/main";
import { onMounted } from "vue";

const mainStore = useMainStore();
onMounted(() => {
  mainStore.isShowTab = false;
});
</script>

<template>
  <div class = "message">
    <nav-tab>
      <template v-slot:title>
        <div class = "title">消息中心</div>
      </template>
    </nav-tab>
    <div class = "content">
      <img src = "/src/assets/img/message/icon_message.png" alt = "">
    </div>
    <div class = "not">暂无聊天信息</div>
  </div>
</template>

<style lang = "scss" scoped>
.message {
  .title {
    color: var(--primary-color);
  }

  .content {
    width: 325px;
    margin: 50px auto;

    img {
      width: 100%;
    }
  }

  .not {
    text-align: center;
  }
}
</style>