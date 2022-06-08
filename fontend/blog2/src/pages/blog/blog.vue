<template>
  <div class="border">
    <!-- <a-layout-content> -->
    <!-- <div class="innerHtml"> -->
    <!-- 方案，第一个页面是展示列表页，点击某一项进入 -->
    <!-- <div class="sidebar">
      <a-menu>
        <a-menu-item>aa </a-menu-item>
      </a-menu>
    </div> -->
    <v-md-preview :text="html" class="markdown"></v-md-preview>
    <!-- </div> -->
    <!-- </a-layout-content> -->
    <!-- 方法一：直接使用插槽，简单，技术含量低 -->
    <!-- <iframe src="https://stoneocean.top" frameborder="0"></iframe> -->
    <!-- 方法二：使用marked,hightlight.js和github-markdown-css自己组合使用博客，还有分类 -->

    <!-- todo：使用antd样式组件快速搭建 -->
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import { getAllBlog } from "@/api/blog";
// import { HomeOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  // components: {
  //   HomeOutlined,
  //   UserOutlined,
  // },
  setup() {
    //例子
    let html = ref("");

    onMounted(() => {
      getAllBlog({ page: 1, size: 10 }).then(
        (res) => {
          console.log("陈工", res.message[2].name);
          html.value = res.message[6].name;
        },
        (err) => {
          console.log(err);
        }
      );
    });
    return {
      html,
    };
  },
};
</script>

<style src="./css/blog.css" scoped>
</style>