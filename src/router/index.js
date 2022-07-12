import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'BoardHome',
    component: () => import('@/views/BoardHome.vue')
  },
  {
    path: '/boardAbout',
    name: 'BoardAbout',
    component: () => import('@/views/BoardAbout.vue')
  },
  {
    path: '/boardProducts',
    name: 'BoardProducts',
    component: () => import('@/views/BoardProducts.vue')
  },
  {
    path: '/boardCar',
    name: 'BoardCar',
    component: () => import('@/views/BoardCar.vue')
  },
  {
    path: '/login',
    component: () => import('../views/admin/LogIn.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/ProDucts.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/OrDers.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/CouPons.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      },
      {
        // orderId取回同一筆訂單
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
