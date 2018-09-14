<template>
    <div id="sidebar" :class="{expand: isExpanded}">
        <fade-transition>
            <li id="expander" @click="expandMenu">
                <i v-if="!isExpanded" class="material-icons">menu</i>
                <i v-else class="material-icons">close</i><span>Menu</span> 
            </li>
        </fade-transition>
        <ul>
             <router-link 
                class="link" 
                to="/">
                <li><i class="material-icons">dashboard</i><span>dashboard</span></li>
             </router-link>
            <router-link 
                class="link" 
                v-for="permission in permissions" 
                :key="permission._id"  
                :to="permission.sub_name">
                
                    <li>
                        <i v-if="permission.icon.mi" class="material-icons">{{permission.icon.mi}}</i>
                        <i v-else-if="permission.icon.fa" class="material-icons">{{permission.icon.fa}}</i>
                        <i v-else-if="permission.icon.svg" class="material-icons">{{permission.icon.svg}}</i>
                        <span>{{permission.sub_name}}</span>
                    </li>
                
                </router-link>
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
            isExpanded: false,
            permissions: this.$store.getters['permission/navigation']
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
        position: fixed;
        left: 0;
        background: linear-gradient( #29F49A,rgb(0, 204, 255), rgb(0, 204, 255));
        box-shadow: 5px 0px 20px rgba(0, 0, 0, .25);
        color: white;
        transition: all .3s;
        z-index: 9999;
        overflow: hidden;
    }
    
    .link{
        color: white;
        text-decoration: none;
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

    li{
        display: inline-flex;
    }

    span{
        margin-top: 27px;
        font-size: 18px;
        text-transform: capitalize;
    }
    

</style>

