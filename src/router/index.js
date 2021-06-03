import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import Login from '../Views/Login.vue'
import Rigister from '../Views/Rigister.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: '/Rigister', component: () => import('../Views/Rigister.vue')}
        ]
    },
    {
        path:'/login',
        component: Login

    },
    {
        path:'/Rigister',
        component: Rigister
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    Login
})

export default router