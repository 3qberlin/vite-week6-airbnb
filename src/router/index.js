import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontEnd/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/FrontEnd/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/FrontEnd/AboutView.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/FrontEnd/ProductsView.vue'),
      },
      {
        path: 'carts',
        name: 'Carts',
        component: () => import('../views/FrontEnd/CartsView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/BackEnd/DashboardView.vue'),
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/BackEnd/OrderView.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/BackEnd/ProductsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
