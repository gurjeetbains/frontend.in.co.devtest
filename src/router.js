import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Registration from './views/Registration.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import MyAccount from './views/MyAccount.vue';
import PostAd from './views/PostAd.vue';
import NewAD from './views/NewAD.vue';
import MyAds from './views/MyAds.vue';
import store from './store';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      beforeEnter: (to, from, next) => {
        if (store.getters.getlogInStatus) {
          next('/dashboard');
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters.getlogInStatus) {
          next('/dashboard');
        } else {
          next();
        }
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.getters.getlogInStatus) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/myads',
      name: 'myads',
      component: MyAds,
      beforeEnter(to, from, next) {
        if (store.getters.getlogInStatus) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: MyAccount,
      beforeEnter(to, from, next) {
        if (store.getters.getlogInStatus) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/newad',
      name: 'newad',
      component: PostAd,
      beforeEnter(to, from, next) {
        if (store.getters.getlogInStatus) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/postad/:adType',
      name: 'postad',
      component: NewAD,
      beforeEnter(to, from, next) {
        if (store.getters.getlogInStatus) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
