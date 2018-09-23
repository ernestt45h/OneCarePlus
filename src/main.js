// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueSocketio from 'vue-socket.io'
import api from '../config/api.config'
//import Icon from 'vue-awesome'
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;


import Transition from 'vue2-transitions'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import store from './store'


//import { Plugins } from '@capacitor/core';
//const { Device } = Plugins;

if(process.env.NODE_ENV == 'development'){
  require('font-awesome/css/font-awesome.css')
  require('material-icons/iconfont/material-icons.css')
}
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'rgb(0, 204, 255)',
      success:'#29F49A',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  }
})

Vue.use(VueSocketio, api.host, store)
//Vue.component('icon', Icon)
Vue.use(Vuex)
Vue.use(Transition)


export const bus = new Vue()

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  data(){
    return{
      notify: ''
    }
  },
  beforeCreate(){
    SplashScreen.show({
      autoHide: false
    });
  },
  created() {    
    if(!this.$store.getters['user/isAuthenticated']){
      this.$router.push({name: 'Auth'})
    }

    this.$store.subscribe((mutation, state)=>{
      if(mutation.type == 'notify'){
        this.notify = mutation.payload
      }
    })
  },
  mounted() {
    SplashScreen.hide()
  },
  template: `
  <div>
    <zoom-center-transition mode="out-in">
      <router-view/>
    </zoom-center-transition>
  </div>`,
})

document.addEventListener('contextmenu', e=>{
  e.preventDefault()
})