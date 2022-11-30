import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/common/home.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta: {
          title: '个人中心'
        },
        component: () => import('@/views/user/user.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/common/login.vue')
  }
]

export default routes
