import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import chat from '@/components/chat.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      props:true,
      beforeEnter:(to, from, next)  =>{
        if(to.params.name){
          next()
        }else{
          next({name:"erro"})
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/erro',
      name: 'erro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/erro.vue')
    }
  ]
})
