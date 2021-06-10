import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from '../views/Homepage.vue'
import UploadPost from '../views/UploadPost.vue'
import MainPage from '../views/MainPage.vue'
import ItemDetail from '../views/ItemDetail.vue'
import ReviseInfo from '../views/ReviseInfo.vue'
import CheckPost from '../views/CheckPost.vue'
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