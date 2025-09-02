import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import LogUser from '@/pages/LogUser.vue'
import Dashboard from '@/pages/Dashboard.vue'

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/loguser', name: 'LogUser', component: LogUser },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function changeToPage(pageName, options = {}){
  router.push({ name: pageName, ...options })
}

export default router
