<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class = "detail-facility">
    <div class = "facility">
      <detail-section title = "房屋设施" more-text = "查看全部设施">
        <div class = "facility-inner">
          <template
              v-for = "(item, index) in houseFacility.houseFacilitys"
              :key = "index"
          >
            <div
                class = "item"
                v-if = "houseFacility.facilitySort?.includes(index)"
            >
              <div class = "head">
                <img :src = "item.icon" alt = ""/>
                <div class = "text">{{ item.groupName }}</div>
              </div>
              <div class = "list">
                <template
                    v-for = "(iten, index) in item.facilitys.slice(0, 4)"
                    :key = "index"
                >
                  <div class = "iten">
                    <i class = "icon-check icon"></i>
                    <span>{{ iten.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </detail-section>
    </div>
  </div>
</template>

<style lang = "scss" scoped>
.detail-facility {
  padding-bottom: 50px;

  .facility-inner {
    display: flex;
    flex-direction: column;
    height: auto;
    background: #f7f9fb;
    font-size: 12px;

    .item {
      display: flex;
      height: 48px;
      margin-top: 30px;

      .head {
        flex: 3;
        text-align: center;

        img {
          width: 21px;
          height: 21px;
          margin-bottom: 4px;
        }
      }

      .list {
        flex: 7;
        display: flex;
        flex-wrap: wrap;

        .iten {
          display: flex;
          flex: 50%;
          align-items: center;
        }
      }
    }
  }
}
</style>