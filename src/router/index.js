import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Homepage from '../views/Homepage.vue'
import MainPage_a from '../views/MainPage-admin.vue'
import MainPage_u from '../views/MainPage-user.vue'
import ReviseInfo from '../views/ReviseInfo.vue'
import CheckPost from '../views/CheckPost'
import TransRecords from '../views/TransRecords'
import MyPost from '../views/MyPost'
import PostRequest from '../views/PostRequest'
import ReviseInfouser from '../views/ReviseInfouser'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        children: [
            { path: '/', component: MainPage_a },
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
            { path: '/', component: MainPage_u },
            { path: '/TransRecords', component: TransRecords },
            { path: '/MyPost', component: MyPost },
            { path: '/PostRequest', component: PostRequest },
            { path: '/ReviseInfouser', component: ReviseInfouser }
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