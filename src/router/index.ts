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
      path: '/masters',
      name: 'masters',
      component: () => import('../components/MasterView.vue')
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
    {
      path: '/bachelor',
      name: 'bachelor',
      component: () => import('../components/BachelorView.vue')
    },
    {
      path: '/phd',
      name: 'phd',
      component: () => import('../components/PhdView.vue')
    },
    {
      path: '/fees',
      name: 'fees',
      component: () => import('../components/FeeView.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../components/TermView.vue')
    },
    {
      path: '/studentlife',
      name: 'studentlife',
      component: () => import('../components/StudentLifeView.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../components/CareerView.vue')
    },
    {
      path: '/virtual',
      name: 'virtual',
      component: () => import('../components/VirtualEventView.vue')
    },
    {
      path: '/course-details',
      name: 'courseDetails',
      component: () => import('../components/CourseDetails.vue')
    },

    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } }
  ]
});

export default router;
