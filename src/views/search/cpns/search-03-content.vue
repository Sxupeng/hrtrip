<script setup>
defineProps({
  content: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class = "search-content">
    <template v-for = "item in content">
      <van-swipe lazy-render :show-indicators = "false">
        <van-swipe-item v-for = "image in item.pictureList" :key = "image">
          <div class = "pic">
            <img :src = "image" alt = ""/>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class = "item">
        <div class = "top">
          <span class = "address">{{ item.address }}</span>
          <template v-for = "(unit, index) in item.unitSummeries" :key = "unit">
            <span v-if = "index !== 2" class = "unit">{{ unit.text }}</span>
          </template>
        </div>
        <div class = "names">{{ item.unitName }}</div>
        <div class = "infos">
          <template v-for = "tags in item.houseTags">
                <span
                    :style = "{
                    color: tags.color,
                    backgroundColor: tags.background.color,
                  }"
                >{{ tags.text }}</span
                >
          </template>
        </div>
        <div class = "price">
          <span class = "new">￥{{ item.finalPrice }}</span>
          <span class = "old">￥{{ item.productPrice }}</span>
          <span
              v-if = "item.priceTipBadge"
              class = "discount"
              :style = "{ color: item.priceTipBadge?.color }"
          >{{ item.priceTipBadge?.text }}</span
          >
        </div>
      </div>
    </template>
  </div>
</template>

<style lang = "scss" scoped>
.search-content {
  .pic {
    height: 250px;
    width: 100%;
    overflow: hidden;
    border-radius: 5%;
    margin-top: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .top {
    display: flex;
    height: 20px;
    align-items: center;
    margin: 5px 0;

    .address {
      background: #414953;
      color: #ffffff;
      padding: 2px 3px;
      margin-right: 8px;
    }

    .unit {
      margin-left: 3px;
      color: #333333;
    }
  }

  .names {
    font-size: 17px;
    font-weight: 500;
    width: 95%;
    line-height: 1.2;
  }

  .infos {
    display: flex;
    flex-wrap: wrap;

    span {
      padding: 2px 3px;
      margin: 4px;
    }
  }

  .price {
    display: flex;
    align-items: center;
    font-size: 13px;

    .new {
      font-size: 19px;
      font-weight: 500;
      color: var(--primary-color);
    }

    .old {
      margin-left: 10px;
      color: #c3c4c5;
      text-decoration: line-through;
    }

    .discount {
      margin-left: 20px;
      background: linear-gradient(90deg, #FF6666, #FB4A4A);
      padding: 2px 3px;
      border-radius: 9px;
    }
  }
}
</style>