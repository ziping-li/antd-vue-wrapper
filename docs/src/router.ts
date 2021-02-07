import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from './layouts/Layout';
import config from './config';

const expandRoutes = () => {
  let current: RouteRecordRaw[] = [];
  config.routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        current.push({
          ...child,
          meta: {
            title: child.title,
          },
        });
      });
    } else {
      current.push({
        ...item,
        meta: {
          title: item.title,
        },
      });
    }
  });

  return current;
};

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: config.routes[0].path,
      children: expandRoutes(),
    },
  ],
});
