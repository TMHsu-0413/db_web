import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from '../views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
        ]
    },
    {
        path:'/Homepage',
        component: Homepage

    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    Homepage
})

export default router