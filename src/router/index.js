import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import LogUser from '../pages/LogUser.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/loguser', component: LogUser }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
