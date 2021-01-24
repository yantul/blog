import Vue from 'vue'
import VueRouter from 'vue-router'
import Framework from '../views/Framework.vue'
import IndexPage from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Framework,
    children: [
      { path: '/', redirect: 'index' },
      { path: 'index', component: IndexPage },
      { path: 'tags/:tag', component: () => import('../views/Tags.vue') },
      { path: 'archives/:view', component: () => import('../views/Archives.vue') }
    ]
  },
  {
    path: '/editor',
    name: 'MDEditor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
