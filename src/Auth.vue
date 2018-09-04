<template>
    <div class="login-page_container">
        <div class="login-section page-side " @click="login" ref="login">
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
                        <div class="login-page_forget">
                            <a href="">Forget Your Password ?</a>
                        </div>
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
        <div class="signup-section page-side" @click="signup" ref="signup">
            <div class="section-page_intro">
                <img src="./assets/add-user.svg" width="60px" >
                <p class="section-font">Sign Up</p>
            </div>
            <!-- Sign up form -->
            <div class="signup-form-area">
                <p class="form-title">Sign Up</p>
                <div class="section-form">
                    <form class="signup-form">
                       <label class="login-page_label">
                            <input class="login-page_input" placeholder="Username" type="text" name="username" autocomplete="off">
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input"  placeholder="Email" type="email" name="email" autocomplete="off">
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input"  placeholder="Password" type="password" name="password">
                        </label>
                        <label class="login-page_label">
                            <input class="login-page_input" placeholder="Confirm Password" type="password" name="confirm password">
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
export default {
    name:'authentication',
    data(){
        return{
            isAuth: false,
            loginData:{
                username: '',
                password: ''
            },
            signupData:{
                type: '',
                email: '',
                phone: '',
                password: '',
                confirm: '',
            }
        }
    },
    methods:{
        login(){
            let login = this.$refs.login.classList
            let signup = this.$refs.signup.classList
            login.add('section-open')
            login.remove('section-close')
            signup.add('section-close')
            signup.remove('section-open')
        },
        signup(){
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
            this.$store.dispatch('user/loginUser', {
                username: this.loginData.username,
                password: this.loginData.password
            })
        }
    },
    created() {
        bus.$on('login_error', (payload)=>{
            let icon = this.$refs.loginIcon.classList
            icon.remove('in-progress')
            this.login()
            this.$store.commit('notify', payload)
        })
        bus.$on('login_success', ()=>{
            this.isAuth = true
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
        })
    },
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat');
  
.login-page_container {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    height: 100vh;
    overflow: hidden;
    min-height: 500px;
    font-family: 'Montserrat', sans-serif;
}

.section-font{
    font-size: 20px;
    font-weight: bolder;
}

.login-section {
    background-repeat: repeat;
    background-attachment: fixed;
    width: 50%;
    background-color: #ffffff;
    position: relative;
    transition: .5s ease;
}

.login-section:hover {
    width: 60%;
}

.login-section:before {
    background-repeat: repeat;
    background-attachment: fixed;
    background-color: #fff;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0px;
    z-index: 5;
    right: 20px;
    border-radius: 0%;
    transition: .3s ease;
}

.login-section:hover:before {
    width: 40px;
    right: -20px;
    border-radius: 40%;
    z-index: 10;
}

.signup-section {
    background-repeat: repeat;
    background-attachment: fixed;
    width: 50%;
    background: linear-gradient(to bottom, #29f49a, #009ffb);
    position: relative;
    transition: .5s ease;
}

.signup-section:before {
    background-repeat: repeat;
    background-attachment: fixed;
    background: linear-gradient(to bottom, #29f49a, #009ffb);
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0px;
    z-index: 5;
    left: 20px;
    border-radius: 0%;
    transition: .3s ease;
}

.signup-section:hover:before {
    width: 40px;
    left: -20px;
    border-radius: 40%;
    z-index: 10;
}

.signup-section:hover {
    width: 60%;
}

.section-page_intro {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: .5s ease .5s;
    z-index: 12;
    cursor: pointer;
}

.section-page-intro_title {
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px 0 10px;
    font-size: 17px;
    color: white;
}

.login-section .section-page-intro_title {
    color: #2b2e2f;
}

.page-side.section-open {
    width: 100%;
}

.page-side.section-close {
    width: 140px;
}

.page-side.section-close:hover {
    width: 200px;
}

.page-side.section-open .section-page_intro {
    margin-top: -15px;
    opacity: 0;
   visibility: hidden;
}

.page-side.section-open:hover:before {
    width: 0px;
    right: 0px;
    border-radius: 40%;
    z-index: 10;
}

/*** style of login side ***/

.page-side .login-form-area {
    width: 80%;
    max-width: 555px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 11;
    position: relative;
}

.form-title{
    margin: 50px 0 0;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 46px;
    white-space: nowrap;
}

.login-section .form-title{
    color: #2b2e2f;
}

.login-page_label {
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: 20px;
    font-weight: normal;
}

.login-page_label .login-page_input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #2b2e2f;
    outline: none;
    padding: 9px;
    color: #777777;
    width: 100%;
    background-color: transparent;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
}

.login-page_placeholder {
    position: absolute;
    top: 9px;
    left: 9px;
    color: #8a8a8a;
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    transition: .3s ease;
    cursor: text;
    font-weight: 600;
    font-size: 16px; 
}

.login-page_input:focus + .login-page_placeholder {
    max-width: 0px;
}

.login-page_input.hide-placeholder + .login-page_placeholder {
    max-width: 0px;
}

.login-section_submit {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}

.login-section_submit ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.login-section_submit li {
    float: left;
}

.login-section_submit li a {
    padding: 5px;
    color: #2b2e2f;
    font-size: 20px;
    transition: .3s ease;
}

.login-section_submit li a:hover {
        opacity: .5;
}


.login-section_submit li a i{
    text-align: left;
}

.login-section_submit .login-page-submit-btn {
    position: relative;
    overflow: hidden;
}

.login-section_submit .login-page-submit-btn input {
    position: relative;
    background-color: #2b2e2f;
    background-image: url('./assets/arrow-right.svg');
    color: white;
    font-size: 16px;
    border: none;
    outline: none;
    height: 35px;
    width: 80px;
    border-radius: 20px;
    font-size: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35px;
    cursor: pointer;
    transition: .5s ease;
}

.login-section_submit .login-page-submit-btn input:hover {
    background-position: 38px center;
}
.login-page_forget a {
    color: #2b2e2f;
    font-size: 14px;
    display: block;
    margin: 20px 0 20px;
    font-weight: 600;
}

.forget-form .forget-title {
    color: #2b2e2f;
    font-size: 16px;
    display: block;
    margin: 0px 0 20px;
    font-weight: 600;
}

.forget-form .login-section_submit {
    justify-content: flex-end;
}

.login-form-area .forget-form {
    display: none
}


/*** style of Sign Up side ***/

.page-side .signup-form-area {
    width: 80%;
    max-width: 555px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 11;
    position: relative;
}

.signup-section .form-title{
    color: white;
}

.section-form {
    margin-top: auto;
    margin-bottom: auto;
}


.signup-section .login-page_label .login-page_input {
    border-bottom: 1px solid #fafafa;
    color: #f6f6f6;
}

.signup-section .login-page_placeholder {
    color: #c5c5c5;
}

.signup-section .login-page_input:focus + .login-page_placeholder {
    max-width: 0px;
}

.signup-section .login-page_input.hide-placeholder + .login-page_placeholder {
    max-width: 0px;
}

.signup-section_submit {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.signup-section_submit ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.signup-section_submit li {
    float: left;
}

.signup-section_submit li a {
    padding: 5px;
    color: #fafafa;
    font-size: 20px;
    transition: .3s ease;
}

.signup-section_submit li a:hover {
        opacity: .5;
}

.signup-section_submit li a i{
    text-align: left;
}

.signup-section_submit .login-page-submit-btn {
    position: relative;
    overflow: hidden;
}

.signup-section_submit .login-page-submit-btn input {
    position: relative;
    background-color: transparent;
    background-image: url('./assets/arrow-right.svg');
    color: white;
    font-size: 16px;
    border: none;
    outline: none;
    height: 35px;
    width: 80px;
    border-radius: 20px;
    font-size: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35px;
    cursor: pointer;
    transition: .5s ease;
}

.signup-section_submit .login-page-submit-btn input:hover {
    background-position: 38px center;
}

/*** Animation view side form ***/

.page-side .section-form {
    visibility: hidden;
    transition: 0s ease;
    transform: translate(0, 30px);
    opacity: 0;
}

.page-side.section-open .section-form {
    transition: .5s ease 1.5s;
    transform: translate(0px, 0px);
    opacity: 1;
    visibility: visible;
}


.form-title {
    max-width: 0px;
    overflow: hidden;
    transition: 0s ease;
}

.page-side.section-open .form-title {
    max-width: 250px;
    overflow-x: hidden;
    transition: 1s ease 1s;
}

.in-progress{
    animation: .5s linear 0s infinite alternate in-progress;
}

@keyframes in-progress {
    from {
        margin-top: 0px;
    }
    to {
        margin-top: -30px;
    }
}


@media (max-width:767px) {
    .login-section:before {content: none;}
    .signup-section:before {content: none;}
    .page-side.section-close {width: 80px;}
    .page-side.section-open {width: 100%;}
    .page-side.section-close:hover {width: 80px;}
    .section-page_intro img { width: 60px;}
    .section-page-intro_title {font-size: 13px;}
    .page-side .signup-form-area {padding: 20px;}
    .page-side .login-form-area {padding: 20px;}
    .form-title {font-size: 36px;margin: 30px 0 0;}
    .login-page_placeholder {font-size: 13px;top: 12px;}
    .login-page_label .login-page_input {font-size: 13px;}
    .login-page_forget a {font-size: 13px;}
    .forget-form .forget-title {font-size: 14px;}
}

</style>

