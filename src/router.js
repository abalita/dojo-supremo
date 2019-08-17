import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Home
    },
    {
      path: '/app',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      children:[
        {
          path:'',
          name:'Home',
          component: () => import(/* webpackChunkName: "about" */ './views/app/Home.vue'),
        },
        {
          path:'members',
          name:'Members',
          component: () => import(/* webpackChunkName: "about" */ './views/app/Members.vue'),
        },
        {
          path:'members/enroll',
          name:'New Member',
          component: () => import(/* webpackChunkName: "about" */ './views/app/Enroll.vue'),
        },
        {
          path:'payments',
          name:'Payment',
          component: () => import(/* webpackChunkName: "about" */ './views/app/Payments.vue'),
        },
        {
          path:'schedules',
          name:'Schedules',
          component: () => import(/* webpackChunkName: "about" */ './views/app/Schedules.vue'),
        }
      ]
    }
  ]
})
