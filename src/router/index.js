import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import User from '../Views/User.vue'
import Homepage from '../Views/Homepage.vue'
import MainPage from '../Views/MainPage.vue'
import ItemDetail from '../Views/ItemDetail.vue'
import ReviseInfo from '../Views/ReviseInfo.vue'
import CheckPost from '../Views/CheckPost'
import CheckPostDetail from '../Views/CheckPostDetail'
import TransRecords from '../Views/TransRecords'
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
            { path: '/CheckPost', component: CheckPost },
            { path: '/CheckPostDetail', component: CheckPostDetail }
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
            { path: '/', component: MainPage },
            { path: '/TransRecords', component: TransRecords }
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