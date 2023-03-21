<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  moreText: {
    type: String,
    default: "查看全部",
  },
});
</script>

<template>
  <div class = "box"></div>
  <div class = "detail-section">
    <div class = "header">
      <h2 class = "title">{{ title }}</h2>
    </div>
    <div class = "content">
      <slot>
        <p>我是默认内容</p>
      </slot>
    </div>
    <div class = "footer">
      <span class = "more"
      >{{ moreText }}
          <van-icon name = "arrow" v-if = "moreText"/>
      </span>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.box {
  height: 5px;
  background: #f2f2f2;
  margin-top: 20px;
  padding: 0 !important;
  width: 100%;
}

.detail-section {
  position: relative;
  padding: 0 20px;

  .header {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #dcdee0;

    .title {
      font-size: 21px;
      color: #333333;
    }
  }

  .content {
    margin-top: 10px;
  }

  .footer {
    position: absolute;
    right: 20px;
    margin-top: 20px;


    .more {
      font-weight: 700;
      font-size: 16px;
      color: var(--primary-color);
    }
  }
}
</style>