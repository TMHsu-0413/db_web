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
import Excelpage from '../views/Excelpage'
import axios from 'axios'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Home',
        component: Home,
        children: [
            { path: '/admin', component: MainPage_a },
            { path: '/ReviseInfo_a', component: ReviseInfo },
            { path: '/CheckPost', component: CheckPost },
            { path: '/E_download', component: Excelpage }
        ],
        meta: {
            isPublic: false,
            isAdmin: true
        }
    },
    {
        path: '/',
        component: Homepage,
        meta: {
            isPublic: true,
            isAdmin: false
        }
    },
    {
        path: 'user',
        name: 'User',
        component: User,
        children: [
            { path: '/user', component: MainPage_u },
            { path: '/TransRecords', component: TransRecords },
            { path: '/MyPost', component: MyPost },
            { path: '/PostRequest', component: PostRequest },
            { path: '/ReviseInfo_u', component: ReviseInfo }
        ],
        meta: {
            isPublic: false,
            isAdmin: false
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
    Homepage,
    User
})

router.beforeEach(async (to, from, next) => {
    if (!to.meta.isPublic && !Vue.cookies.get('admin') && !Vue.cookies.get('id')) {
        Vue.prototype.$message({
            type: 'error',
            message: "無登入驗證!"
        })
        return next('/')
    }
    let profile = {'id':Vue.cookies.get('id')}
    const res =await axios.post('./php/verify_id_is_admin.php',profile)
    if(to.matched.some(m=>m.meta.isAdmin) && (Vue.cookies.get('admin')!='1' || res.data.admin!='1')){
        Vue.prototype.$message({
            type: 'error',
            message: "無管理者權限!"
        })
        return next('/')
    }
    next()
})

export default router