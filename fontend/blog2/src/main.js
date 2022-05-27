import { createApp } from 'vue'
import App from './App.vue'

import { Breadcrumb } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import router from './router'

createApp(App).use(Breadcrumb).use(router).mount('#app')
