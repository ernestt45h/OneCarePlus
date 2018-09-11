<template>
    <div class="dashboard container">
        <div class="row">
            <!--pallet icon="face" title="Appointments" text="details of you" color="#5bc" /-->
            <palette2/>
            <palette2/>
            <palette2/>
            <palette2/>
        </div>
    </div>
</template>
<script>
'::smile'
const Pallet = _=>import('../widgets/pallet')
const Palette2 = _=>import('../widgets/Palette2')
export default {
    components:{Pallet, Palette2}
}
</script>
<style scoped>
    .dashboard{
        margin-top: 30px; 
    }
</style>


