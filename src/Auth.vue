<template>
    <div class="login-page_container">
        <div class="login-section page-side " @click="loginFocus" ref="login">
            <slide-x-right-transition group>
                <div v-if="!isAuth" key="not" class="section-page_intro">
                    <img src="./assets/user.svg" ref="loginIcon" width="60px" >
                    <p class="section-font">Sign In</p>
                </div>
                <div v-else key="yep" class="section-page_intro">
                    <img src="./assets/done-successfully.svg" ref="loginIcon" width="60px" >
                    <p class="section-font">Welcome Back</p>                    
                </div>    
            </slide-x-right-transition>
            <!-- Login Form -->
            <div class="login-form-area">
                <p class="form-title">Sign In</p>
                <div class="section-form">
                    <form class="login-form" @submit.prevent="loginUser" style="">
                        <label class="login-page_label">
                            <input class="login-page_input" v-model="loginData.username" placeholder="Username, Email or Phone number" type="text" required name="email" autocomplete="off">
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input" v-model="loginData.password" placeholder="Password" type="password" name="password">
                        </label>
                        <div class="login-section_submit">
                            <div class="login-page-submit-btn">
                                <input type="submit" name="submit-login" value="submit">
                            </div>
                        </div>
                        <!--div class="login-page_forget">
                            <a href="#">Forget Your Password ?</a>
                        </div-->
                    </form>

                    <form class="forget-form" style="">
                        <p class="forget-title">Forget Your Password</p>
                        <label class="login-page_label">
                            <input class="login-page_input" type="email" name="email" autocomplete="off">
                            <span class="login-page_placeholder">Email</span>
                        </label>
                        <div class="login-section_submit">
                            <div class="login-page-submit-btn"><input type="submit" name="submit-login" value="submit"></div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <div class="signup-section page-side" @click="signupFocus" ref="signup">
            <slide-x-right-transition group>
                <div v-if="!isSignUp" key="not" class="section-page_intro">
                    <img src="./assets/add-user.svg" ref="signUpIcon" width="60px" >
                    <p class="section-font">Sign Up</p>
                </div>
                <div v-else key="yep" class="section-page_intro">
                    <img src="./assets/done-successfully-white.svg" ref="signUpIcon" width="60px" >
                </div>    
            </slide-x-right-transition>
            <!-- Sign up form -->
            <div class="signup-form-area">
                <p class="form-title">Sign Up</p>
                <div class="section-form">
                    <form class="signup-form" @submit.prevent="signupUser" method="post">
                       <label class="login-page_label">
                            <input class="login-page_input"
                             placeholder="Username" 
                             type="text" 
                             name="username" 
                             autocomplete="off"
                             v-model="signupData.username"
                             >
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input"
                              placeholder="Email"
                               type="email" name="email" 
                               autocomplete="off"
                               v-model="signupData.email"
                               >
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input"  
                            placeholder="Password" 
                            type="password" 
                            name="password"
                            v-model="signupData.password"
                            />
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input" 
                            placeholder="Confirm Password" 
                            type="password" 
                            name="confirm password"
                            v-model="signupData.confirm"
                            />
                        </label>
                        <div class="signup-section_submit">
                            <ul>
                                <li><a href="#" target="_blank"><i class="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-google fa-fw"></i></a></li>
                            </ul>
                            <div class="login-page-submit-btn">
                                <input type="submit" name="submit-signup" value="submit">
                            </div>
                        </div>
                    </form>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
import {bus} from './main';
import UserService from './services/UserService'
let us = new UserService()

export default {
    name:'authentication',
    data(){
        return{
            isAuth: false,
            isSignUp: false,
            loginData:{
                username: '',
                password: ''
            },
            signupData:{
                username: '',
                email: '',
                password: '',
                confirm: '',
            }
        }
    },
    methods:{
        loginFocus(){
            let login = this.$refs.login.classList
            let signup = this.$refs.signup.classList
            login.add('section-open')
            login.remove('section-close')
            signup.add('section-close')
            signup.remove('section-open')
            console.log('transition')
        },
        signupFocus(){
            let login = this.$refs.login.classList
            let signup = this.$refs.signup.classList
            login.add('section-close')
            login.remove('section-open')
            signup.add('section-open')
            signup.remove('section-close')
        },
        loginUser(){
            let login = this.$refs.login.classList
            let signup = this.$refs.signup.classList
            let icon = this.$refs.loginIcon.classList

            login.remove('section-open')
            signup.remove('section-close')
            icon.add('in-progress')
            us.loginUser('user/auth', this.loginData.username, this.loginData.password).then((result) => {
                if(result.token){
                    this.$store.commit('user/update', result)
                    this.isAuth = true
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000);
                }else{
                    icon.remove('in-progress')
                    this.loginFocus()
                    this.$vs.notify({
                        title: result.error,
                        color: 'danger',
                        icon: 'warning'
                    })
                }
            }).catch((err) => {
                icon.remove('in-progress')
                    this.loginFocus()
                    this.$store.commit('notify', err)
            });
            
        },
        signupUser(){ 
            if(this.signupData.password.length < 6)
            this.$vs.notify({
                text: 'password should more than 6 characters',
                color: 'warning',
                icon: 'info'
            })
            else if(this.signupData.password !== this.signupData.confirm)
            this.$vs.notify({
                text: 'passwords do not match',
                color: 'warning',
                icon: 'info'
            })
            else{
                let login = this.$refs.login.classList
                let signup = this.$refs.signup.classList
                let icon = this.$refs.signUpIcon.classList

                login.remove('section-close')
                signup.remove('section-open')
                icon.add('in-progress')
                us.signupUser('user', this.signupData).then((result) => {
                    this.isSignUp = true
                    icon.remove('in-progress')
                    this.$vs.notify({
                        title: result.title,
                        text: result.message,
                        color: 'success',
                        icon: 'mail',
                        time: 7000
                    })
                }).catch((err) => {
                    icon.remove('in-progress')
                        this.signupFocus()
                        this.$vs.notify({
                            title: 'connection crror',
                            icon: 'error',
                            text: 'please check your internet connection and try again',
                            color: 'danger'
                        })
                });
            }
            
        }
    },
    beforeCreate() {
        if(this.$store.getters['user/isAuthenticated']){
            this.$router.push({name: 'App'})
        }
    },

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('./assets/css/auth.css');  

</style>

