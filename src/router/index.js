import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/index.vue';
import PageNotFound from '../components/PageNotFound/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path:'/',component: Home },
      { path:'/:catchAll(.*)', component: PageNotFound},
  ]
})

export default router