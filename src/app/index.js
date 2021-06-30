import { createRouter, createWebHistory } from "vue-router"
import home from "../components/home.vue"
import about from "../components/about.vue"
import post from "../components/post.vue"
import contact from "../components/contact.vue"




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: '/post',
            component:post
        },
        {
            path: '/contact',
            component:contact
        },
            
    ]
})
export default router;
