<template>
    <div class="col-md-2 portfolio_single p1 ">
        <a class="portfolio-card" @click="$emit('open')">
            <div class="portfolio_image">
                <img :src="$props['img']"/>
            </div>
            <div class="portfolio_text">
                <p>{{ $props['name'] }}</p>
            </div>
            <div class="corner-text" v-if="typeof $props['corner_text'] !=='undefined' && $props['corner_text'] && $props['corner_text'].length>0">{{ $props['corner_text'] }}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: "service-card",
    props: {
        name: {
            type: String,
            default: "",
            required:true,
        },
        img: {
            type: String,
            default: "",
            required:true,
        },
        corner_text: {
            type: String,
            default: "",
            required:false,
        },

    },

}
</script>

<style scoped>

</style>
