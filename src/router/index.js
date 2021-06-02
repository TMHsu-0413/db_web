import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import Login from '../Views/Login.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: '/aaa', component: () => import('../Views/aaa.vue')},
            {path: '/bbb', component: () => import('../Views/bbb.vue')}
        ]
    },
    {
        path:'/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    Login
})

export default router