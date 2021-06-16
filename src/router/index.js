import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import User from '../Views/User.vue'
import Homepage from '../Views/Homepage.vue'
import MainPage_a from '../Views/MainPage-admin.vue'
import MainPage_u from '../Views/MainPage-user.vue'
import ReviseInfo from '../Views/ReviseInfo.vue'
import CheckPost from '../Views/CheckPost'
import TransRecords from '../Views/TransRecords'
import MyPost from '../Views/MyPost'
import PostRequest from '../Views/PostRequest'
import Excelpage from '../Views/Excelpage'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        children: [
            { path: '/', component: MainPage_a },
            { path: '/ReviseInfo_a', component: ReviseInfo },
            { path: '/CheckPost', component: CheckPost },
            { path: '/E_download', component: Excelpage }
        ],
        meta: {
            isPublic: true
        }
    },
    {
        path: '/',
        component: Homepage,
        meta: {
            isPublic: true
        }
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [
            { path: '/', component: MainPage_u },
            { path: '/TransRecords', component: TransRecords },
            { path: '/MyPost', component: MyPost },
            { path: '/PostRequest', component: PostRequest },
            { path: '/ReviseInfo_u', component: ReviseInfo }
        ],
        meta: {
            isPublic: true
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
    Homepage,
    User
})
/*
router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !Vue.cookies.get('admin')) {
        return next('/')
    }
    next()
})
*/
export default router