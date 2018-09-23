<template>
    <div>
        <div class="notes">
            <vs-chip color="primary">
                <vs-avatar icon="notifications" />
                2
            </vs-chip>
            <vs-chip color="danger">
                <vs-avatar icon="mail" />
                5
            </vs-chip>
            <vs-chip color="success">
                <vs-avatar icon="dns" />
                0
            </vs-chip>  
        </div>
    </div>
</template>
<style scoped>

    .menu{
    }

    .menu-pop{
        min-width: 200px;
    }

    #dropdown{
        margin: 0 15px;
    }
    .notes{
        display: inline;
        margin-top: 10px;
    }


    p{
        display: inline-block;
        margin: 15px 0;
    }

    @media screen and (max-width: 430px) {
        .notes{
            display: block;
        }

        #dropdown{
            float: right;
            margin: -5px 30px; 
        }

        p{
            display: none;
        }

    }
</style>
