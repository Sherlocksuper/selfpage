import * as VueRouter from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/HomePage'
    },
    {
        path: '/HomePage',
        name: 'HomePage',
        component: () => import('@/components/HomePage/HomePage.vue'),
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router