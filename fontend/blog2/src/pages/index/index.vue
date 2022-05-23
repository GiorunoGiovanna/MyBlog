<template>
  <div>
    <div id="screen">
      <!-- todo:替换可动模块为p5或者jojo -->
      <!-- 首页大屏，一个具有透视效果的banner -->
      <full-screen></full-screen>
    </div>
    <div id="title">
      <!-- 页面的主结构，左侧是伸缩的侧边栏 -->
      <div class="left" style="height: 100vh">
        <sidebar></sidebar>
      </div>
      <!-- 右侧是页面的主要显示区域（二级路由） -->
      <!-- todo:结构大致上跟sidebar差不多，内容可以放二级路由 -->
      <div class="right" style="height: 100vh">
        <main-screen></main-screen>
        <button @click="backToTop">点我回顶部</button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import FullScreen from "./components/FullScreen/FullScreen.vue";
import Sidebar from "./components/SideBar/SideBar.vue";
import MainScreen from "./components/MainScreen/MainScreen.vue";
import { startListen } from "./js/controlScroll";
export default {
  name: "index",
  components: {
    FullScreen,
    Sidebar,
    MainScreen,
  },
  setup() {
    //页面启动，开启滚轮监听
    onMounted(() => {
      startListen();
    });

    // 返回顶部窗口的事件
    let backToTop = () => {
      document.getElementById("screen").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      //启动页面滚轮监听
      startListen();
    };

    return {
      backToTop,
    };
  },
};
</script>
<style src="./css/index.css"  scoped></style>