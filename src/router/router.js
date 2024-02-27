import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Page3 from '@/pages/Page3';

const routes = [
  {
    path: '/',
    component: Page1,
  },
  {
    path: '/page2',
    component: Page2,
  },
  {
    path: '/page3',
    component: Page3,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
