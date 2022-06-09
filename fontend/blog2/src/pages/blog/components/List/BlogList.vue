<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #renderItem="{ item, index }">
      <a-list-item key="index">
        <a-list-item-meta>
          <template #title>
            <router-link :to="'/index/blog/blogShow?name=' + item.name">
              <a>{{ item.name }}</a>
            </router-link>
          </template>
          <!-- <template #avatar><a-avatar :src="item.avatar" /></template> -->
        </a-list-item-meta>
        <!-- {{ item.name }} -->
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { getAllBlog } from "@/api/blog";
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    // 异步获取数据
    let listData = reactive([]);
    onMounted(() => {
      getAllBlog({ page: 1, size: 1000 }).then((res) => {
        listData.push(...res.message);
      });
    });
    const pagination = {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 10,
    };
    return {
      listData,
      pagination,
    };
  },
});
</script>