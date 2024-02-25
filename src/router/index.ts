import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/LandingVIew.vue')
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../components/AskQuestion.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../components/ApplyForm.vue')
    },
    {
      path: '/entry',
      name: 'entry',
      component: () => import('../components/EntryRequirements.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/NotFound.vue') }
  ]
});

export default router;
