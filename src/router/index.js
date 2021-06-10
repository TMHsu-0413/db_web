import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import Homepage from '../Views/Homepage.vue'
import UploadPost from '../Views/UploadPost.vue'
import MainPage from '../Views/MainPage.vue'
import ItemDetail from '../Views/ItemDetail.vue'
import ReviseInfo from '../Views/ReviseInfo.vue'
import CheckPost from '../Views/CheckPost.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            { path: '/UploadPost', component: UploadPost },
            { path: '/MainPage', component: MainPage },
            { path: '/ItemDetail', component: ItemDetail },
            { path: '/ReviseInfo', component: ReviseInfo },
            { path: '/CheckPost', component: CheckPost }
        ]
    },
    {
        path: '/Homepage',
        component: Homepage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    Homepage
})

export default router