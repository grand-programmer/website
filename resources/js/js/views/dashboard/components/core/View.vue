<template>
    <v-main>
        <my-snack
            :timeout="snackbar.timeout"
            :color="snackbar.color"
            v-for="(snackbar,index) in snackbars.filter(s=>s.showing)"
            :key="`snackbar-${index}`" >
            {{ snackbar.text }}
        </my-snack>
        <router-view/>
        <dashboard-core-footer/>
    </v-main>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'DashboardCoreView',
    components: {
        DashboardCoreFooter: () => import('./Footer'),
        MySnack: () => import('../../component/snack'),

    },
    computed: {
        ...mapState(['snackbars'])
    },

}
</script>
