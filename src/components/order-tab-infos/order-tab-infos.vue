<script setup>
import { formatMountDay } from "@/utils/format_date";

defineProps({
  content: {
    type: Array,
    default: () => [],
  },
});
const weeks = ["日", "一", "二", "三", "四", "五", "六"];
</script>

<template>
  <div class = "infos">
    <template v-for = "item in content" :key = "item.unitId">
      <div class = "title">
        <div class = "title-name">{{ item.unitName }}</div>
        <span></span>
        <div class = "title-bar" :style = "{ color: item.orderStatusDescColor }">
          <span class = "capital">{{ item.orderStatusDesc }}</span>
          <span v-if = "item.cancelReasonDesc" class = "cance">{{
              item.cancelReasonDesc
            }}</span>
        </div>
      </div>
      <div class = "count">
        <div class = "pic">
          <img :src = "item.unitPicture" alt = ""/>
        </div>
        <div class = "mask">
          <div class = "begin">
            <span class = "day">{{ formatMountDay(item.checkInDate) }}</span>
            <span class = "week"
            >周{{
                weeks[formatMountDay(item.checkInDate, "d")]
              }}&nbsp;&nbsp;{{ item.checkInLatestTime }}</span
            >
          </div>
          <div class = "arrowhead">
            <img
                class = "arraw"
                src = "/src/assets/img/order/icon_right_orderlist.png"
                alt = ""
            />
          </div>
          <div class = "begin out-begin">
            <span class = "day">{{ formatMountDay(item.checkOutDate) }}</span>
            <span class = "week"
            >周{{
                weeks[formatMountDay(item.checkOutDate, "d")]
              }}&nbsp;&nbsp;{{ item.checkOutLatestTime }}</span
            >
          </div>
          <div class = "prepay">
            <span class = "pay">支付总价</span>
            <span class = "price" :style = "{ color: item.orderStatusDescColor }"
            >￥{{ item.prepayAmount }}</span
            >
          </div>
        </div>
      </div>
      <div class = "footer" v-if = "item.summary">
        <div class = "left-infos">
          <img
              class = "icon-time"
              src = "/src/assets/img/order/icon-time.png"
              alt = ""
          />
          <span>{{ item.summary }}</span>
        </div>
        <div class = "contact">联系房东</div>
        <div class = "btn">去支付</div>
      </div>
    </template>
  </div>
</template>

<style lang = "scss" scoped>
.infos {
  .title {
    display: flex;
    height: 60px;
    line-height: 60px;

    .title-name {
      width: 230px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      white-space: nowrap;
      font-size: 12px;
      color: #333333;
    }

    span {
      flex: 1;
    }

    .title-bar {
      position: relative;
      display: flex;
      width: 70px;

      .capital {
        font-size: 18px;
      }

      .cance {
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
        width: 130%;
        font-size: 12px;
      }
    }
  }

  .count {
    position: relative;
    width: 100%;
    border-radius: 2%;
    overflow: hidden;

    .pic {
      img {
        width: 100%;
      }
    }

    .mask {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 65px;
      background: rgba(0, 0, 0, 0.5);
      color: #ffffff;
      align-items: center;
      justify-content: center;

      .begin {
        display: flex;
        flex-direction: column;
        align-items: center;

        .day {
          font-size: 16px;
        }

        .week {
          font-size: 12px;
          margin-top: 3px;
        }
      }

      .out-begin {
        border-right: 1px solid #ffffff;
      }

      .arrowhead {
        margin: 0 30px;

        .arraw {
          width: 17px;
        }
      }

      .prepay {
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        .pay {
          font-size: 12px;
          margin-bottom: 3px;
        }

        .price {
          font-size: 17px;
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 60px;
    color: #333333;
    font-size: 12px;

    .left-infos {
      width: 170px;
    }

    .contact,
    .btn {
      width: 75px;
      height: 35px;
      margin: 0 auto;
      text-align: center;
      line-height: 35px;
      font-size: 15px;
    }

    .contact {
      color: #666666;
    }

    .btn {
      background: var(--primary-color);
      color: #ffffff;
      border-radius: 10px;
    }
  }
}
</style>