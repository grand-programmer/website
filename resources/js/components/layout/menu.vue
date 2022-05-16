<template>



</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: 'Topmenu',
    data() {
        return {
            links: []
        }

    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readMenusFront().then((response) => {
                this.links = response.data;
                this.$store.dispatch('SET_MENU', this.links);
            }).catch((error) => {
                console.log(error)
            })
        },
    }
}

</script>

