<template>
  <div>
    <div class="container">
      <ul id="scene">
        <li class="layer" data-depth=".1"><img src="./img/planet2.png" /></li>
        <li class="layer" data-depth=".2"><img src="./img/planet1.png" /></li>
        <li class="layer" data-depth=".2"><img src="./img/man.png" /></li>
        <li class="layer" data-depth=".5"><img src="./img/earth.png" /></li>
        <li class="layer" data-depth=".1">
          <!-- todo:博客内容介绍还有友情链接 -->
          <img src="./img/text.png" />
        </li>
        <li class="layer" data-depth=".4"><img src="./img/planet3.png" /></li>
        <li class="layer" data-depth=".8"><img src="./img/planet4.png" /></li>
        <li class="layer" data-depth=".2"><img src="./img/planet5.png" /></li>
        <!-- 动态下拉箭头 -->
        <div class="arrowSS" @click="toIndex">
          <img href="#anchorSS" class="arrow" src="./img/arrow.png" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import "./js/parallax";
export default {
  name: "index",
  setup() {
    onMounted(() => {
      // 用于使图片具有透视效果
      var scene = document.getElementById("scene");
      var parallax = new Parallax(scene);
    });

    let toIndex = () => {
      //使页面平滑滚动到目标位置
      document.getElementById("title").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };
    return {
      toIndex,
    };
  },
};
</script>
<style src="./css/style.css"  scoped></style>