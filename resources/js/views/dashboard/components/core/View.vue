<template>
    <v-main>
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

    },

}
</script>
