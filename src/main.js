// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//import Icon from 'vue-awesome'

import Transition from 'vue2-transitions'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import store from './store'


import { Plugins } from '@capacitor/core';
const { Device } = Plugins;


import './assets/css/main.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuesax)
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
  template: `
  <div>
    <zoom-center-transition>
      <router-view/>
    </zoom-center-transition>
  </div>`,
})
