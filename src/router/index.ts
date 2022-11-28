import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routerGuard from './router-guard'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes
})

export const setupRouter = (app: App) => {
  app.use(router)
  routerGuard(router)
}

export default router
