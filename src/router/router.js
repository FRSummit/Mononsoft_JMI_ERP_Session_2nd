import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/landing-page',
      name: 'Landing page',
      component: () => import('../views/LandingPage.vue')
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
  // const publicPages = ['/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('user');

  // if (authRequired && !loggedIn) {
  //   return next('/login');
  // }

  next();
})