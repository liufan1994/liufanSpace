import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Vue.use(VueRouter)
if (!window.VueRouter) Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../views/article.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
