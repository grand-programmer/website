<template>

</template>
<script>
export default {
    data() {
        return {
        }
    },
    created(){
        this.$auth.logout({
            makeRequest: true,
            redirect: {name: 'login'},
        })
    },
}
</script>

