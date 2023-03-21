<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});
// 对数据进行转换
const swipeGrop = {};
// 思路一 两次循环
// for (const item of props.swipeGrop) {
//   swipeGrop[item.enumPictureCategory] = [];
// }
// for (const item of props.swipeGrop) {
//   const valueArray = swipeGrop[item.enumPictureCategory];
//   valueArray.push(item);
// }

// 思路二 一次循环
for (const item of props.swipeData) {
  let valueArray = swipeGrop[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGrop[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
// console.log(swipeGrop);

// 定义转换数据的方法
const nameReg = /【(.*?)】/i;
const getNames = (name) => {
  // return name.replace("：", "").replace("【", "").replace("】", "");
  const nameList = nameReg.exec(name);
  return nameList[1];
};

const getCategroyIndex = (item) => {
  const valueArray = swipeGrop[item.enumPictureCategory];
  return valueArray.findIndex(data => data === item);
};
</script>

<template>
  <div class = "detail-swipe">
    <van-swipe
        class = "my-swipe"
        :autoplay = "3000"
        indicator-color = "white"
        lazy-render
    >
      <template v-for = "item in swipeData" :key = "item.orderIndex">
        <van-swipe-item class = "item">
          <img :src = "item.url" alt = ""/>
        </van-swipe-item>
      </template>
      <template #indicator = "{ active, total }">
        <!--        <div class = "custom-indicator">{{ active + 1 }}/{{ total }}</div>-->
        <div class = "custom-indicator">
          <template v-for = "(value, key) in swipeGrop" :key = "key">
            <span
                class = "item"
                :class = "{
                active: swipeData[active]?.enumPictureCategory === Number(key),
              }"
            >
              <span class = "text"> {{ getNames(value[0].title) }}</span>
              <span
                  class = "count"
                  v-if = "swipeData[active]?.enumPictureCategory === Number(key)"
              >
                {{ getCategroyIndex(swipeData[active]) + 1 }}/{{ value.length + 1 }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang = "scss" scoped>
.detail-swipe {

  .my-swipe {
    position: relative;

    .item {
      img {
        width: 100%;
      }
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #ffffff;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;

      .item {
        margin: 0 0 0 5px;
      }

      .active {
        padding: 2px 3px;
        background: #ffffff;
        color: #000000;
        border-radius: 5px;
      }
    }
  }
}
</style>