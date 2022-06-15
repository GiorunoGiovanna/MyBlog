<template>
  <div class="border">
    <!-- 方案，第一个页面是展示列表页，点击某一项进入 -->
    <router-view></router-view>
    <!-- 方法一：直接使用插槽，简单，技术含量低 -->
    <!-- <iframe src="https://stoneocean.top" frameborder="0"></iframe> -->
    <!-- 方法二：使用marked,hightlight.js和github-markdown-css自己组合使用博客，还有分类 -->
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import { getAllBlog } from "@/api/blog";
// import { HomeOutlined, UserOutlined } from "@ant-design/icons-vue";
import BlogList from "./components/List/BlogList.vue";
import BlogShow from "./components/Show/BlogShow.vue";
export default {
  components: {
    BlogList,
    BlogShow,
    // HomeOutlined,
    // UserOutlined,
  },
  // setup() {
  //   //例子
  //   let html = ref("");

  //   onMounted(() => {
  //     getAllBlog({ page: 1, size: 10 }).then(
  //       (res) => {
  //         console.log("陈工", res.message[2].name);
  //         html.value = res.message[6].name;
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   });
  //   return {
  //     html,
  //   };
  // },
};
</script>

<style src="./css/blog.css" scoped>
</style>