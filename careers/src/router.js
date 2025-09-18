import { createRouter, createWebHistory } from 'vue-router';
import Careers from './components/Careers.vue';
import FullTime from './components/FullTime.vue';
import PartTime from './components/PartTime.vue';
import Contract from './components/Contract.vue';
import CareersMenu from './components/CareersMenu.vue';

const routes = [
  {
    path: '/careers',
    // component: Careers,
    children: [
      { path: '', component: CareersMenu }, // Show menu only on /careers
      { path: 'full-time', component: FullTime },
      { path: 'part-time', component: PartTime },
      { path: 'contract', component: Contract },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
