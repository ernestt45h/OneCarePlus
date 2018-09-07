import Vue from 'vue'
import Router from 'vue-router'
const Auth = _=>import('../Auth' /* webpackChunkName: 'Login' */)
const App = _=>import('../App' /* webpackChunkName: 'App' */)
import store from '../store/index' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      beforeEnter: (to, from, next)=>{
        if(!store.getters['user/isAuthenticated']){
          //DO SOME REDIRECTION 
          next({name: 'Auth'})
        }
        else next()
      },
    },
    {
      path: '/authenticate',
      name: 'Auth',
      component: Auth,
      beforeEnter: (to, from, next)=>{
        if(store.getters['user/isAuthenticated']){
          //DO SOME REDIRECTION
          next({name: 'App'})
           
        }
        else next()
      }
    }
  ]
})
