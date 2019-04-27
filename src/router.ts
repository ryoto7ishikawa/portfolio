import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// function loadView(view: string) {
//   return () =>
//     import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
// }
import Views from './views';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Views.Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Views.Profile,
    },
    {
      path: '/skill',
      name: 'skill',
      component: Views.Skill,
    },
    {
      path: '/work',
      name: 'work',
      component: Views.Work,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Views.Contact,
    },
  ],
});
