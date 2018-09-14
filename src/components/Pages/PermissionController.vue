<template>
    <div id="permission" class="container">
        <div class="from-group row">
            <form @submit.prevent="searchList" class="col-9 col-md-11">
                <input class="form-control" placeholder="Search" />
            </form>
            <div class="col-3 col-md-1">
                <vs-button @click="popup=true" vs-type="flat" vs-color="primary" vs-icon="add"></vs-button>
            </div>
        </div>
        <div class="list">
            <vs-list>
                <vs-list-header v-if="navigations" icon="keyboard_arrow_down" color="primary" title="Navigations"></vs-list-header>
                    <vs-list-item v-for="nav in navigations" :key="nav._id" icon="keyboard_arrow_right" :title="nav.name" :subtitle="nav.description">
                        <template>
                            <vs-button vs-color="success" vs-type="flat" vs-icon="edit"></vs-button>
                            <vs-button vs-color="danger" vs-type="flat" vs-icon="remove"></vs-button>    
                        </template>
                    </vs-list-item>
            </vs-list>
        </div>
        <vs-popup classContent="permission-popup"  title="Permission" :active.sync="popup">
            <popup/>
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
            popup: false
        }
    },
    computed:{
        navigations(){
            return this.permissions.filter(nav=> nav.type == 'navigation')
        }
    },
    methods: {
        searchList(){
            
        }
    },
    created() {
        
    },
}
</script>
<style scoped>
    #permission{
        margin-top: 50px;
    }
</style>

