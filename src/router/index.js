import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/home.vue'),
    children: [
      {
        path: '/',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/card.vue')
      },
      {
        path: 'card',
        name: 'card',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/card.vue')
      },
      {
        path: 'picture',
        name: 'picture',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/picture.vue')
      },
      {
        path: 'text',
        name: 'text',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/text.vue')
      },
      {
        path: 'qrcode',
        name: 'qrcode',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/qrcode.vue')
      },
      {
        path: 'log',
        name: 'log',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/log.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/about.vue')
      },

      {
        path: 'donate',
        name: 'donate',
        component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/donate.vue')
      },
    ]

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "about" */ '../components/left-sider/components/card.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
