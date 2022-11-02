<template>
    <div class="container-fluid contact_faq">
        <div class="row">
            <div class="col-md-6">
                <homefaq/>
            </div>
            <div class="col-md-6">
                <homefaq2/>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "test.vue",
    components: {
        'homefaq': () => import('../../components/homepage/faq'),
        'homefaq2': () => import('../../components/homepage/faq2')
    },
}
</script>

<style scoped>

</style>
