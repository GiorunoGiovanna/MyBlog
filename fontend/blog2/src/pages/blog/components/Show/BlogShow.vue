<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getBlogByName } from "@/api/blog";
export default {
  setup() {
    const router = useRoute();
    // console.log(router.query.name);
    let text = ref("");
    getBlogByName({ name: router.query.name }).then((res) => {
      // console.log(res);
      text.value = res.message[0].htmlData;
    });
    return {
      text,
    };
  },
};
</script>