import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Content',
    component: Content,
    children: [
        {path: '/aaa', component: () => import('../Views/aaa.vue')},
        {path: '/bbb', component: () => import('../Views/bbb.vue')}
    ]
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router