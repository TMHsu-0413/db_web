import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import Homepage from '../Views/Homepage.vue'
import UploadPost from '../Views/UploadPost.vue'
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
    },

    {
        path:'/UploadPost',
        component: UploadPost
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    Homepage
})

export default router