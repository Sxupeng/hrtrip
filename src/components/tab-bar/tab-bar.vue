<script setup>
import tabData from "@/assets/data/tab-bar";
import { ref, watch } from "vue";
import { getAssetURL } from "@/utils/load_assets";
import { useRoute } from "vue-router";

const currenIndex = ref(0);
const route = useRoute();
// 监听路由的改变 找到对应的索引 设置index
watch(route, (newRoute) => {
  // console.log(newRoute.path)
  const index = tabData.findIndex((item) => item.path === newRoute.path);
  if (index === -1) return;
  currenIndex.value = index;
});
</script>

<template>
  <div class = "tab-bar">
    <van-tabbar v-model = "currenIndex" active-color = "#ff9854" route>
      <template v-for = "(item, index) in tabData" :key = "index">
        <van-tabbar-item :to = "item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
                v-if = "currenIndex !== index"
                :src = "getAssetURL(item.image)"
                alt = ""
            />
            <img v-else :src = "getAssetURL(item.imageActive)" alt = ""/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang = "scss" scoped>
.tab-bar {
  height: 54px;
  // 修改第三方UI组件库的样式
  // 1.用插槽，插入自己的元素 *那么在自己的作用域就可以修改这个元素
  // 2.全局定义一个变量，覆盖它默认变量的值 *缺点：全局修改
  // 3.局部定义一个变量，覆盖它以前默认变量的值 *优点：局部修改
  // 4.直接找到对应子组件的选择器，进行修改 *:depp(.class,子组件的元素选择器) 直接修改CSS

  // 局部修改 只在当前tab-bar有效

  //--van-tabbar-item-icon-size: 30px;

  //另外一种修改方法 找到类 对类中的CSS属性样式重写
  // :deep(.class) 找到子组件的类 让子组件的类也可以生效

  //:deep(.van-tabbar-item__icon ) {
  //  font-size: 50px;
  //}

  img {
    height: 26px;
  }
}
</style>