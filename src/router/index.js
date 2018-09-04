import Vue from 'vue'
import Router from 'vue-router'
const Auth = _=>import('../Auth' /* webpackChunkName: 'Login' */)
const App = _=>import('../App' /* webpackChunkName: 'App' */)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/authenticate',
      name: 'authUser',
      component: Auth
    }
  ]
})
