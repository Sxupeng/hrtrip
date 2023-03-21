<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
// const itemClick = (id) => {
//   console.log(id);
// };
</script>

<template>
  <!-- @click = "itemClick(itemData.houseId)" -->
  <div class = "house-item">
    <div class = "item-inner">
      <div class = "cover">
        <img :src = "itemData.image.url" alt = ""/>
      </div>
      <div class = "infos">
        <div class = "location">
          <img src = "/src/assets/img/home/location.png" alt = ""/>
          {{ itemData.location }}
        </div>
        <div class = "name">{{ itemData.houseName }}</div>
        <div class = "summary">{{ itemData.summaryText }}</div>
        <div class = "price">
          <div class = "new">{{ "￥" + itemData.finalPrice }}</div>
          <div class = "old">{{ "￥" + itemData.productPrice }}</div>
          <div class = "text" v-if = "itemData.priceTipBadge">
            {{ itemData?.priceTipBadge?.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.house-item {
  width: 50%;
  font-size: 14px;
  color: #333333;
  padding: 0 5px;
  margin-top: 10px;

  .item-inner {
    height: 100%;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      padding-left: 10px;

      .location,
      .summary {
        font-size: 12px;
        color: #666666;
        margin: 6px 0;

        img {
          width: 12px;
        }
      }

      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 5px;

      .new {
        color: var(--primary-color);
      }

      .old {
        text-decoration: line-through;
        color: #999999;
        font-size: 12px;
      }

      .text {
        width: 57px;
        height: 14px;
        border-radius: 5px;
        background: var(--price-linear-gradient);
        color: #ffffff;
        font-size: 12px;
        text-align: center;
        line-height: 14px;
      }
    }
  }
}
</style>