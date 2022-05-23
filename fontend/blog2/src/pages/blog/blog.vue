<template>
  <div class="border">
    <!-- 方法一：直接使用插槽，简单，技术含量低 -->
    <!-- <iframe src="https://stoneocean.top" frameborder="0"></iframe> -->
    <!-- 方法二：使用marked,hightlight.js和github-markdown-css自己组合使用博客，还有分类 -->
  </div>
</template>


<script>
import { onMounted } from "vue";
import { apiGetUserInfo } from "@/api/example";
export default {
  setup() {
    //例子
    // onMounted(() => {
    //   apiGetUserInfo({ username: "ssad", password: "dasd" }).then(
    //     (res) => {
    //       console.log("陈工", res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // });
  },
};
</script>

<style src="./css/blog.css" scoped>
</style>