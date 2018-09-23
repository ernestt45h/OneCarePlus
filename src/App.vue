<template>
  <div id="app">
    <!--SideNav-->
    <side-nav @logout="logoutUser"/>
    <div class="wrapper">
      <header-bar/>
      <slide-x-right-transition mode="out-in">
        <router-view/>
      </slide-x-right-transition>          
    </div>
  </div>
</template>

<script>
import Btn from "./components/basic/LogoutBtn"
import SideNav from './components/Navs/SideBar'
import HeaderBar from './components/Navs/HeaderBar'
export default {
  name: "App",
  components: { SideNav, HeaderBar },
  watch: {
    isAuth(val) {
      if (!this.isAuth) this.$router.push({ name: "Auth" });
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  sockets:{
    permission_update(payload){
      console.log('client',payload)
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("user/logout", true);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
body,
html {
  margin: 0;
  padding: 0;
}

.wrapper{
  margin-left: 50px; 
}
</style>
