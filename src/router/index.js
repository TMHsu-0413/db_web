import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Homepage from '../views/Homepage.vue'
import MainPage from '../views/MainPage.vue'
import ReviseInfo from '../views/ReviseInfo.vue'
import CheckPost from '../views/CheckPost'
import TransRecords from '../views/TransRecords'
import MyPost from '../views/MyPost'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        children: [
            { path: '/', component: MainPage },
            { path: '/ReviseInfo', component: ReviseInfo },
            { path: '/CheckPost', component: CheckPost }
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
            { path: '/', component: MainPage },
            { path: '/TransRecords', component: TransRecords },
            { path: '/MyPost', component: MyPost }
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

router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !Vue.cookies.get('admin')) {
        return next('/')
    }
    next()
})

export default router