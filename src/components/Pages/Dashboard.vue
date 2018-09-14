<template>
    <div class="dashboard container">
        <div class="row">
            <!--pallet icon="face" title="Appointments" text="details of you" color="#5bc" /-->
            <palette2
                v-if="navigations" 
                v-for="navigation in navigations" 
                :key="navigation._id" 
                color="yellow" 
                :icon="navigation.icon" 
                :title="navigation.name" 
                :text="navigation.description" 
                :to="navigation.sub_name"
                hint="Go ahead and cause trouble"
                hintIcon="warning" />
        </div>
    </div>
</template>
<script>
'::smile'
const Pallet = _=>import('../widgets/pallet')
const Palette2 = _=>import('../widgets/Palette2')
export default {
    components:{Pallet, Palette2},
    data(){
        return{
            navigations: this.$store.getters['permission/navigation']
        }
    }
}
</script>
<style scoped>
    .dashboard{
        margin-top: 30px; 
    }
</style>


