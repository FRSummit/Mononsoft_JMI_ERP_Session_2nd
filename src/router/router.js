import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('../views/public_views/Home.vue')
    // },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/public_views/About.vue')
    },
    {
      // path: '/login',
      path: '/',
      name: 'Login',
      component: () => import('../views/public_views/Login/Login.vue')
    },
    {
      path: '/login-v1',
      name: 'Login',
      component: () => import('../views/public_views/Login/LoginV1.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/public_views/Signup.vue')
    },
    {
      path: '/landing-page',
      name: 'Landing page',
      component: () => import('../views/private_views/LandingPage.vue')
    },
    {
      path: '/competitors-data-mgt',
      name: 'Competitor Data Management',
      component: () => import('../views/private_views/unknown/CompetitorsDataMgt.vue')
    },
    {
      path: '/adm/settings&management/sbu',
      name: 'SBU',
      component: () => import('../views/private_views/ADM/SBU/SBU.vue')
    },
    {
      path: '/adm/settings&management/test',
      name: 'Test',
      component: () => import('../views/private_views/ADM/SBU/Test.vue')
    },
    {
      path: '/adm/settings&management/sbu/sbu-sister-concern:id',
      name: 'Sister Concern',
      component: () => import('../views/private_views/ADM/SBU/SBU-SisterConcern.vue')
    },
    {
      path: '/adm/settings&management/sbu/create-new-sbu',
      name: 'Create New Strategic Business Unit (SBU)',
      component: () => import('../views/private_views/ADM/SBU/CreateNewSBU.vue')
    },
    {
      path: '/sd/settings&management/sales-center',
      name: 'Sales Center',
      component: () => import('../views/private_views/SD/SalesArea/SalesCenter.vue')
    },
    {
      path: '/sd/settings&management/geo-location',
      name: 'Geo Location',
      component: () => import('../views/private_views/SD/SalesArea/GeoLocation.vue')
    },

    // otherwise redirect to home
    {
      path: '*', 
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('before each')
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/login', '/login-v1', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  } else if (authRequired && loggedIn) {
    if(new Date().getTime() > JSON.parse(localStorage.getItem('user')).expiresAt) {
      return next('/login');
    }
  }
  next();
})