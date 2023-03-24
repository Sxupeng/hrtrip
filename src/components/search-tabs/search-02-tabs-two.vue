<script setup>
import { ref } from "vue";

defineProps({
  searchTopList: {
    type: Object,
    default: () => ({}),
  },
});
// console.log(props.searchTopList.items);
const tabTitle = ref("欢迎度排序");
const itemRef = ref(null);
const onConfirm = (item) => {
  itemRef.value.toggle();
  tabTitle.value = item.label;
};
</script>

<template>
  <div class = "search-tabs-cpn">
    <van-dropdown-item :title = "tabTitle" ref = "itemRef">
      <template v-for = "(item) in searchTopList.items" :key = "item">
        <van-cell
            center
            :title = "item.label"
            @click = "onConfirm(item)"
        ></van-cell>
      </template>
    </van-dropdown-item>
  </div>
</template>

<style lang = "scss" scoped>
.search-tabs-cpn {
}
</style>