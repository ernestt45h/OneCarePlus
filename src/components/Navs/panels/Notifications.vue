<template>
    <div>
        <div class="notes">
            <vs-button vs-size="large" vs-color="danger" vs-type="line" vs-icon="mail"></vs-button>
            <vs-button vs-size="large" vs-color="primary" vs-type="line" vs-icon="notifications"></vs-button>
            <vs-button vs-size="large" vs-color="success" vs-type="line" vs-icon="inbox"></vs-button>    
        </div>
        <vs-button id="dropdown" style="border-radius: 50%"  vs-size="large" vs-color="primary" vs-type="filled" vs-icon="person"></vs-button>
    </div>
</template>
<style scoped>
    #dropdown{
        margin: 5px 15px;
    }
    .notes{
        display: inline;
    }

    @media screen and (max-width: 411px) {
        .notes{
            display: block;
        }

        #dropdown{
            float: right;
        }
    }
</style>
