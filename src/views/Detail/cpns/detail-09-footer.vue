<script setup>
defineProps({
  currentHouse: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class = "detail-footer">
    <div class = "message">
      <img src = "/src/assets/img/detail/icon_chat.png" alt = ""/>
      <span>聊天</span>
    </div>
    <div class = "infos">
      <span class = "new">{{ "¥" + currentHouse.finalPrice }}</span>
      <span>/晚</span>
      <span class = "old">{{ currentHouse.productPrice }}</span>
    </div>
    <div class = "destine">
      <i class = "icon"></i>
      <span>预定当前房源</span>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.detail-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 99;
  display: flex;
  background: #ffffff;
  align-items: center;

  .message {
    display: flex;
    width: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ccc;

    img {
      width: 17px;
    }

    span {
      font-size: 12px;
      margin-top: 5px;
    }
  }

  .infos {
    flex: 1;
    text-align: center;
    color: #333333;
    font-size: 12px;

    span {
      margin-right: 5px;
    }

    .new {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary-color);
    }

    .old {
      text-decoration: line-through;
    }
  }

  .destine {
    flex: 1;
    height: 100%;
    line-height: 60px;
    text-align: center;
    background: var(--theme-linear-gradient);

    .icon {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      width: 15px;
      height: 18px;
      background: url(/src/assets/img/detail/icon_order.png) 0 0 / 100% 100%;
    }

    span {
      font-size: 18px;
      color: #ffffff;
    }
  }
}
</style>