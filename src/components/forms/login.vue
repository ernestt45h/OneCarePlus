<template>
    <div>
        
    </div>
</template>
<style scoped>
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

</style>
