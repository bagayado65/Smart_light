<template>
    <v-app>
        <temtreebar />
        <temtreedraw />
        <temtreecontent/>
    </v-app>
</template>

<script>
import Temtreebar from '../views/Tem_3_bar.vue'
import Temtreedraw from '../views/Tem_3_draw.vue'
import Temtreecontent from '../views/Tem_3_content.vue'
export default {
    name: 'Tem_3',
        data: () => ({
            d: true
    }),
    components:{
        Temtreebar,
        Temtreedraw,
        Temtreecontent
    },
}
</script>
<style scoped>
    
</style>