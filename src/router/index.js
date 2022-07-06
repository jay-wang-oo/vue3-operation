import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CruiseHome',
    component: () => import('@/views/CruiseHome.vue')
  },
  {
    path: '/cruise_about',
    name: 'CruiseAbout',
    component: () => import('@/views/CruiseAbout.vue')
  },
  {
    path: '/cruise_fleet',
    name: 'CruiseFleet',
    component: () => import('@/views/CruiseFleet.vue')
  },
  {
    path: '/cruise_travel',
    name: 'CruiseTravel',
    component: () => import('@/views/CruiseTravel.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProDucts.vue')
      },
      {
        path: 'order',
        component: () => import('../views/OrDers.vue')
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
