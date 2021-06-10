import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Homepage from '../views/Homepage.vue'
import MainPage from '../views/MainPage.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Revise from '../views/Revise.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        children: [
            { path: '/', component: MainPage },
            { path: '/ItemDetail', component: ItemDetail },
            { path: '/ReviseInfo', component: ReviseInfo },
            { path: '/CheckPost', component: CheckPost }
        ]
    },
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [
            { path: '/', component: MainPage }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
    Homepage,
    User
})

export default router