// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Icon from 'vue-awesome'
import Transition from 'vue2-transitions'
import Vuex from 'vuex'
import store from './store'

import Notify from './components/Basic/Notify'
import './assets/css/main.css'

import { Plugins } from '@capacitor/core';
const { Device } = Plugins;


Vue.component('icon', Icon)
Vue.use(Vuex)
Vue.use(Transition)

export const bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components:{Notify},
  data(){
    return{
      notify: ''
    }
  },
  created() {    
    if(!this.$store.getters.isUser){
      this.$router.push({name: 'authUser'})
    }


    this.$store.subscribe((mutation, state)=>{
      if(mutation.type == 'notify'){
        this.notify = mutation.payload
      }
    })
  },
  template: `
  <div>
    <zoom-x-transition>
      <notify :data="notify"/>
    </zoom-x-transition>
    <fade-transition>
      <router-view/>
    </fade-transition>
  </div>`,
})
