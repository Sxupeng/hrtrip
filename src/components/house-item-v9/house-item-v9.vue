<script setup>
import {computed} from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
const itemStore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<template>
  <div class = "house-item">
    <div class = "item-inner">
      <div class = "cover">
        <img :src = "itemData.image.url" alt = ""/>
      </div>
      <div class = "infos">
        <div class = "summary">{{ itemData.summaryText }}</div>
        <div class = "name">{{ itemData.houseName }}</div>
        <div class = "price">
          <van-rate
              :model-value = "itemStore"
              size = "15"
              color = "#fff"
              allow-half
          ></van-rate>
          <div class = "new">{{ "￥" + itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.house-item {
  width: 50%;
  padding: 0 5px;
  margin-top: 10px;

  .item-inner {
    position: relative;

    .cover {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .infos {
      position: absolute;
      top: 65%;
      left: 10px;
      color: #ffffff;

      .summary {
        font-size: 12px;
      }

      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-top: 6px;
      }

      .price {
        display: flex;
        //justify-content: space-around;
        align-items: center;
        margin-top: 6px;

        .new {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>