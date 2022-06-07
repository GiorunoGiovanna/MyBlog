import { createApp } from 'vue'
import App from './App.vue'

import { Breadcrumb } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// 引入markdown解析器
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});


import router from './router'

createApp(App).use(Breadcrumb).use(VMdPreview).use(router).mount('#app')
