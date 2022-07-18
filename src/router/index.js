import { Toast } from 'vant'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/all/home'
  },
  {
    path: '/all',
    component: () => import('@/views/all'),
    children: [
      {
        path: 'home',
        // 路由懒加载
        component: () => import('@/views/home'),
        children: [
          {
            path: 'allrent',
            component: () => import('@/views/home/allRent')
          }
        ]
      },
      {
        path: 'search',
        component: () => import('@/views/search')
      },
      {
        path: 'news',
        component: () => import('@/views/news')
      },
      {
        path: 'my',
        component: () => import('@/views/my')
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/collect',
    component: () => import('@/views/my/collect.vue')
  },
  {
    path: '/rent',
    component: () => import('@/views/my/rent.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('@/components/detail.vue')
  },
  {
    path: '/cityList',
    component: () => import('@/views/home/cityList.vue')
  },

  {
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 去往规定页面，直接放行
  if (
    to.path === '/all/my' ||
    to.path === '/all/home' ||
    to.path === '/login'
  ) {
    return next()
  }
  // 访问有登录权限的页面，没有token就弹出去‘无权访问去登录’
  const token = store.state.user
  if (token === '') {
    // this.$toast.fail('未登录请前去登录')
    Toast.fail('未登录,请前去登录')
    return next('/all/my')
  }
  next()
})
export default router
