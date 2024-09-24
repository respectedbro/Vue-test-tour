import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DagestanView from '@/views/DagestanView.vue'
import TerebikeView from "@/views/TerebikeView.vue"
import ElbrusView from "@/views/ElbrusView.vue"
import CrimeaView from "@/views/CrimeaView.vue"
import PolarView from "@/views/PolarView.vue"
import AltaiView from "@/views/AltaiView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/dagestan',
    component: DagestanView
  },
  {
    path: '/terebike',
    component: TerebikeView
  },
  {
    path: '/elbrus',
    component: ElbrusView
  },
  {
    path: '/crimea',
    component: CrimeaView
  },
  {
    path: '/polar',
    component: PolarView
  },
  {
    path: '/altai',
    component: AltaiView
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
