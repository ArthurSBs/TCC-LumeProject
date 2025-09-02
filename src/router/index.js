import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import LogUser from '../pages/LogUser.vue'

const routes = [
  { path: '/', name: 'Main', component: Main},
  { path: '/loguser', name: 'LogUser', component: LogUser}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function changeToPage(pageName, options = {}){
  router.push({ name: pageName, ...options })
}

export default router
