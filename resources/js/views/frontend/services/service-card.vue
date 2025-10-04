<template>
    <div class="col-md-3 col-lg-2 col-sm-4 col-xs-6 portfolio_single p1 ">
        <a class="portfolio-card" @click="$emit('open')">
            <div class="portfolio_image">
                <img v-if="$props['img'].indexOf('img')>0" :src="$props['img']"/>
              <v-icon color="primary" size="50px" v-else>{{$props['img']}}</v-icon>
            </div>
            <div class="portfolio_text">
                <p :class="($props['name'].length > 100) ? 'f-s-11':''">{{ $props['name'] }}</p>
            </div>
            <div class="corner-text" :style="$props['corner_text']==='new'?'background-image:url(/img/icons/new-icon/new-' + $i18n.locale + '.svg)':''"
                 v-if="typeof $props['corner_text'] !=='undefined' && $props['corner_text'] && $props['corner_text'].length>0">
                {{ $props['corner_text']!=='new'?$props['corner_text']:''}}
            </div>
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
            required: true,
        },
        img: {
            type: String,
            default: "",
            required: true,
        },
        corner_text: {
            type: String,
            default: "",
            required: false,
        },

    },
    created () {
        console.log(this.$props['name'].length)
    }

}
</script>

<style scoped>
.f-s-11 {
    font-size: 11px !important;
}
</style>
