<script setup>
// 日期范围的处理
import {ref, watch} from "vue";
import {formatMountDay, getDiffDays} from "@/utils/format_date";
import useHomeList from "@/stores/modules/home/home";

const homeStore = useHomeList();
const nowDate = new Date();
const stateDate = ref(formatMountDay(nowDate));
// 把当前时间的天数+1
const leaveDate = new Date().setDate(nowDate.getDate() + 1);
const endDate = ref(formatMountDay(leaveDate));
const stayCount = ref(getDiffDays(nowDate, leaveDate));
homeStore.stateDate = stateDate.value;
homeStore.endDate = endDate.value;
// watch监听改变
watch(stateDate, () => {
  homeStore.stateDate = stateDate.value;
  homeStore.endDate = endDate.value;
});
// 日历
const show = ref(false);
const onConfirm = (value) => {
  // 设置日期
  // console.log(value)
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  // console.log(selectStartDate, selectEndDate)
  stateDate.value = formatMountDay(selectStartDate);
  endDate.value = formatMountDay(selectEndDate);
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  // 关闭日历
  show.value = false;
};
// 更改为入住和离店
const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};
</script>

<template>
  <div class = "home-calendar bottom-gray-line">
    <div class = "date-range" @click = "show = true">
      <div class = "start">
        <span>入&nbsp;住</span>
        <span class = "date">{{ stateDate }}</span>
      </div>
      <div class = "stay">共&nbsp;{{ stayCount }}&nbsp;晚</div>
      <div class = "end">
        <span>离&nbsp;店</span>
        <span class = "date">{{ endDate }}</span>
      </div>
    </div>
    <div class = "search-box">
      <!--      <van-cell :value = "date" @click = "show = true"/>-->
      <van-calendar
          :round = "false"
          v-model:show = "show"
          type = "range"
          @confirm = "onConfirm"
          color = "#ff9854"
          :show-confirm = "false"
          :formatter = "formatter"
      />
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.home-calendar {
  .date-range {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    color: #999999;
    font-size: 12px;
    height: 46px;

    div {
      flex: 1;
    }

    .start,
    .end {
      display: flex;
      flex-direction: column;

      span {
        margin-top: 3px;
      }

      .date {
        font-size: 15px;
        color: #000000;
      }
    }
  }

  .search-box {
    --van-calendar-popup-height: 100%;
  }
}
</style>