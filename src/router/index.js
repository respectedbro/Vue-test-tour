import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import PageView from "@/views/PageView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/page',
    component: PageView
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
