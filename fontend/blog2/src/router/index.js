import { createRouter, createWebHistory } from "vue-router";
// import login from '@/components/login'
import index from '../pages/index/index'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            redirect: '/index/blog',
            component: () => import('../pages/index/index.vue'),
            children: [
                {
                    path: 'blog',
                    name: 'Blog',
                    component: () => import('../pages/blog/blog.vue')
                },
                {
                    path: 'toolBox',
                    name: 'ToolBox',
                    component: () => import('../pages/toolBox/toolBox.vue')
                }
            ]
        }
    ]
})


export default router