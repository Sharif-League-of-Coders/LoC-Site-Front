import Vue from "vue";
import VueRouter from 'vue-router'

import TheLandingPage from "../components/TheLandingPage.vue";
import TheRegistrationPage from "../pages/TheRegistrationPage.vue";
import TheDashboardPage from "../components/TheDashboardPage.vue";
import TheStaffsPage from "../components/TheStaffsPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component:TheLandingPage
    },
    {
        path:'/register',
        name:'Register',
        component: TheRegistrationPage
    },
    {
        path:'/staffs',
        name:'StaffPage',
        component: TheStaffsPage
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component: TheDashboardPage
    }
]

export const router = new VueRouter({
        routes,
        mode: 'history',
    }
)