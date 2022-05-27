<template>
  <div class="border">
    <a-breadcrumb>
      <a-breadcrumb-item href="">
        <home-outlined />
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <user-outlined />
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Application</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 方法一：直接使用插槽，简单，技术含量低 -->
    <!-- <iframe src="https://stoneocean.top" frameborder="0"></iframe> -->
    <!-- 方法二：使用marked,hightlight.js和github-markdown-css自己组合使用博客，还有分类 -->
  </div>
</template>


<script>
import { onMounted } from "vue";
import { updateBlog } from "@/api/blog";
import { HomeOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    HomeOutlined,
    UserOutlined,
  },
  setup() {
    //例子
    onMounted(() => {
      updateBlog({ text: "面经", page: 1, size: 10 }).then(
        (res) => {
          console.log("陈工", res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  },
};
</script>

<style src="./css/blog.css" scoped>
</style>