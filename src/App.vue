<template>
  <div id="app">
    <!--SideNav-->
    <side-nav @logout="logoutUser"/>
    <div class="wrapper">
      <header-bar/>
      <!--TitleBar-->
      <fade-transition>
        <router-view/>
      </fade-transition>          
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
