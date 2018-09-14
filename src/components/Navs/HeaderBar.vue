<template>
    <Header>
        <logo id="logo"/>
        <notifications class="note-panel"/>
    </Header>
</template>
<script>
const Notifications = _=>import('./panels/NotificationsTabs')
const Logo = _=>import('../Basic/LogoBtn')
export default {
    data(){
        return{
            search: ''
        }
    },
    components:{Notifications, Logo}
}
</script>

<style scoped>
    header{
        padding: 0 20px;
        width: calc(100vw - 50px);
        height: 70px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .25);
    }
    .searchbar{
        margin: auto;
        padding-top: 20px;
    }

    .note-panel{
        float: right;
        margin-top: 7px;
    }

    #logo{
        width: 100px;
        margin-top: 10px;
    }

</style>

