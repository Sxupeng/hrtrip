import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

// console.log(throttle());
// 传入回调方法
// export default function useScroll(reachBottomCB) {
//   const scrollListenHandler = () => {
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     // console.log(scrollTop, scrollHeight, clientHeight);
//     if (clientHeight + scrollTop >= scrollHeight) {
//       if (reachBottomCB) reachBottomCB();
//     }
//   };
// }
//     onMounted(() => {
//       window.addEventListener("scroll", scrollListenHandler);
//     });
//     onUnmounted(() => {
//       window.removeEventListener("scroll", scrollListenHandler);
//     });

// 定义变量方法

export default function useScroll() {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const isShow = false;
  // 防抖 节流
  const scrollListenHandler = throttle(() => {
    // console.log("监听到滚动");
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    // console.log(scrollTop, scrollHeight, clientHeight);
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("到底了");
      isReachBottom.value = true;
    }
  }, 100);
  onMounted(() => {
    window.addEventListener("scroll", scrollListenHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenHandler);
  });
  return { isReachBottom, clientHeight, scrollTop, scrollHeight, isShow };
}