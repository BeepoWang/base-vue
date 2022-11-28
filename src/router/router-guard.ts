import { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'

const whiteList = ['/login']

const routerGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
      next()
      return
    }

    next()
  })

  router.afterEach((to) => {
    useTitle(`${import.meta.env.VITE_APP_TITLE} | ${to.meta.title}`)
  })
}

export default routerGuard
