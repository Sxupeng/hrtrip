<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class = "detail-infos">
    <div class = "name">{{ topInfos.houseName }}</div>
    <div class = "tags">
      <template v-for = "item in topInfos.houseTags" key = "item.tagCode">
        <span
            class = "item"
            v-if = "item.tagText"
            :style = "{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >{{ item.tagText.text }}</span
        >
      </template>
    </div>
    <div class = "comment item-box">
      <div class = "left">
        <span class = "score">{{ topInfos.commentBrief.overall }}</span>
        <span class = "title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class = "brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class = "right">
        <span class = "count"
        >{{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name = "arrow"/>
        </span>
      </div>
    </div>
    <div class = "location item-box">
      <div class = "left">
        <span class = "address">{{ topInfos.nearByPosition.address }}</span>
      </div>
      <div class = "right">
        <span class = "count">地图·周边 <van-icon name = "arrow"/></span>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.detail-infos {
  padding: 0 20px 20px;

  .name {
    font-weight: 700;
    font-size: 21px;
    color: #333333;
    padding: 10px 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    .item {
      margin: 3px 0 0 5px;
      font-size: 13px;
    }
  }

  .item-box {
    overflow: hidden;
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    border-radius: 5px;
    background: #f5f7fa;
    margin-top: 15px;

    .left {
      margin-left: 15px;
      font-weight: 700;

      .score {
        font-size: 18px;
        margin-right: 3px;
      }

      .title {
        margin-right: 3px;
      }

      .brief {
        font-weight: 500;
        font-size: 12px;
        color: #333333;
      }
    }

    .right {
      margin: 0 15px 0 0;

      .count {
        color: var(--primary-color);
        /*这里要显示的设置宽度*/
        overflow: hidden;
        white-space: nowrap;
        /*文字超出宽度则显示ellipsis省略号*/
        text-overflow: ellipsis;
        width: 100%;
      }

    }
  }
}
</style>