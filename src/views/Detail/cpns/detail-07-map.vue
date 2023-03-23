<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  position: {
    type: Object,
    default: () => ({}),
  },
});
const mapRef = ref();
const longitude = computed(() => props.position.longitude);
const latitude = computed(() => props.position.latitude);
watch(longitude, (newValue) => {
  // 硬刷新
  // location.reload();
  longitude.value = newValue;
});
onMounted(() => {
  let map = new BMapGL.Map(mapRef.value); // 创建地图实例
  let point = new BMapGL.Point(longitude.value, latitude.value); // 创建点坐标
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

  let marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
});
</script>

<template>
  <div class = "detail-map">
    <detail-section title = "位置周边" more-text = "查看更多周边信息">
      <div class = "baidu" ref = "mapRef"></div>
    </detail-section>
  </div>
</template>

<style lang = "scss" scoped>
.detail-map {
  margin-top: 30px;

  .baidu {
    height: 250px;
  }
}
</style>