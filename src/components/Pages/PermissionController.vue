<template>
    <div id="permission" class="container">
        <div class="from-group row">
            <form @submit.prevent="searchList" class="col-9 col-md-11">
                <input class="form-control" placeholder="Search" />
            </form>
            <div class="col-3 col-md-1">
                <vs-button @click="openPopup(newForm())" vs-type="flat" vs-color="primary" vs-icon="add"></vs-button>
            </div>
        </div>
        <div class="list">
            <vs-list>
                <vs-list-header v-if="navigations" icon="keyboard_arrow_down" color="primary" title="Navigations"></vs-list-header>
                    <vs-list-item v-for="nav in navigations" :key="nav._id" icon="keyboard_arrow_right" :title="nav.name" :subtitle="nav.description">
                        <template>
                            <vs-button @click="openPopup(nav)" vs-color="success" vs-type="flat" vs-icon="edit"></vs-button>
                            <vs-button vs-color="danger" vs-type="flat" vs-icon="remove"></vs-button>
                            <vs-switch v-model="nav.is_default" vs-icon="public" vs-color="success"/>
                        
                        </template>
                    </vs-list-item>
            </vs-list>
        </div>
        <vs-popup fullscreen classContent="permission-popup"  title="Permission" :active.sync="popup">
            <popup :perms="perm" @close="popup = false"/>
        </vs-popup>
    </div>
</template>
<script>
const popup = _=>import('../forms/permissionForm')
export default {
    components:{popup},
    data(){
        return{
            search: '',
            permissions: this.$store.getters['permission/all'],
            user: this.$store.state['user'],
            popup: false,
            perm: ''
        }
    },
    computed:{
        navigations(){
            return this.permissions
                .filter(nav=> nav.type == 'navigation')
        }
    },
    methods: {
        searchList(){
            
        },
        openPopup(permission){
            this.perm = permission
            this.popup = true
        },
        newForm(){
            return {
                _id: '',
                name: '',
                access_point: '',
                description: '',
                type: '',
                icon: {
                    mi: '',
                    fa: '',
                    svg: ''
                },
                target: '',
                role: 'developer',
            }
        }
    },
    created() {
        console.log(this.navigations)
    },
}
</script>
<style scoped>
    #permission{
        margin-top: 50px;
    }
</style>

