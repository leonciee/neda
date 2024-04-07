
import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/Views/FormPage.vue";
import HomePage from "@/Views/HomePage.vue";
import TablePage from "@/Views/TablePage.vue";
import AboutUs from "@/Views/AboutUs.vue";
import NotFound from "@/Views/NotFound.vue"

const routes= [
    {
        path:'/',
        name:'home',
        component:HomePage
    },
    {
        path:'/form',
        name:'form',
        component:FormPage  
    },
    {
        path:'/table',
        name:'table',
        component:TablePage,
    },
    {
        path:'/about',
        name:'about',
        component:AboutUs,
    },
    {
        path:'/:catchAll(.*)',
        name:'notfound',
        component:NotFound
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router