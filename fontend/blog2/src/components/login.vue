<template>
  <div>
    <a-alert class="tips" :message="message" type="warning" />
    <div class="main">
      <a-form
        :model="userInfo"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item
          label="UserName"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="userInfo.username" />
        </a-form-item>
        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="userInfo.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, watch } from "vue";
export default {
  setup() {
    let userInfo = reactive({
      username: "d",
      password: "d",
    });
    let func = onMounted(() => {
      console.log(document.getElementsByClassName("ant-alert-message")[0]);
    });
    let message =
      "您好，欢迎您使用本博客系统，由于是个人开发项目，该项目还在持续不断的迭代中，可能会出现意料之外的错误，如果您遇到这种错误可以联系18566142330进行反馈，感谢您的帮助！";
    return {
      userInfo,
      message,
      func,
    };
  },
};
</script>

<style scoped>
@import "../style/login.css";
</style>