<script setup>
import ContentList from "@/components/content-list/content-list.vue";
import useFavor from "@/stores/modules/favor";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const active = ref(0);
const favorStore = useFavor();
const { favorList } = storeToRefs(favorStore);
</script>

<template>
  <div class = "collection">
    <van-tabs v-model:active = "active">
      <van-tab title = "房屋">
        <content-list :content = "favorList"/>
      </van-tab>
      <van-tab title = "房东">
        <div class = "count">
          <div class = "pic">
            <img
                src = "/src/assets/img/favor/empty_favorite.44731802.png"
                alt = ""
            />
          </div>
          <div class = "infos">
            <div class = "title">暂无收藏</div>
            <p>
              点击
              <img src = "/src/assets/img/favor/favor.png" alt = ""/>
              即可收藏对应的房东
            </p>
            <div class = "btn">随便去逛逛</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang = "scss" scoped>
.collection {
  padding: 0 20px;

  .count {
    margin: 0 auto;

    .pic {
      img {
        width: 335px;
        vertical-align: top;
      }
    }

    .infos {
      text-align: center;

      .title {
        font-size: 19px;
        color: #333333;
        font-weight: 550;
        height: 40px;
      }

      img {
        width: 12px;
        vertical-align: middle;
      }

      p {
        color: #666666;
        height: 60px;
      }

      .btn {
        width: 160px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin: 0 auto;
        background: var(--primary-color);
        color: #ffffff;
        font-size: 18px;
        border-radius: 20px;
      }
    }
  }
}
</style>