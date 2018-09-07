<template>
    <div id="sidebar" :class="{expand: isExpanded}">
        <fade-transition>
            <div id="expander" @click="expandMenu" >
                <i v-if="!isExpanded" class="material-icons">menu</i>
                <i v-else class="material-icons">close</i> 
            </div>
        </fade-transition>
        <ul>
            <li><i class="material-icons">dashboard</i></li>
            <li><i class="material-icons">folder_open</i></li>
            <li><i class="material-icons">perm_contact_calendar</i></li>
        </ul>
        
        <div class="bottom">
            <div>
                <i class="material-icons">settings</i>
            </div>
            <div>
                <i @click="$emit('logout', true)" class="material-icons">power_settings_new</i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isExpanded: false
        }
    },
    methods:{
        expandMenu(){
            this.isExpanded = !this.isExpanded
        }
    }
}
</script>

<style scoped>
    #sidebar{
        width:50px;
        height: 100vh;
        position: absolute;
        left: 0;
        background: linear-gradient( #29F49A,rgb(0, 204, 255), rgb(0, 204, 255));
        box-shadow: 5px 0px 20px rgba(0, 0, 0, .25);
        color: white;
        transition: all .3s;
        z-index: 99999;
    }
    
    .bottom{
        position: absolute;
        bottom: 0;
        left: 0px;
    }

    .material-icons{
        font-size: 30px;
        margin: 20px 10px 5px;
        cursor: pointer;
        user-select: none;
    }

    .expand{
        width: 300px !important;
    }

    ul{
        list-style: none;
        max-height: calc(80vh - 50px) ;
        overflow-y: scroll;
        overflow-x: hidden;
    }


</style>

