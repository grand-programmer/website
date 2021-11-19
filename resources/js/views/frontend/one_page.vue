<template><div class="one-page">
    <v-header></v-header>
<v-hududiy></v-hududiy>

        <router-view>

        </router-view>
    <div class="footer_links">
        <div class="footer_links_arrow"><i class="fas fa-chevron-down"></i></div>
        <div class="slide_links">
            <a class="footer_link" href="//huquqiyportal.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Milliy huquqiy internet portali</p>
            </a>
            <a class="footer_link" href="//president.uz">
                <div class="image"></div>
                <p>O'zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </a>

            <a class="footer_link" href="//gov.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Hukumat portali</p>
            </a>

            <a class="footer_link" href="//prokuratura.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Bosh prokuraturasi</p>
            </a>
            <a class="footer_link" href="//iiv.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Ichki ishlar vazirligi</p>
            </a>

            <a class="footer_link" href="//soliq.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Davlat soliq qo'mitasi</p>
            </a>
            <a class="footer_link" href="//my.gov.uz">
                <div class="image"></div>
                <p>Yagona interaktiv davlat xizmatlari portali</p>
            </a>

            <a class="footer_link" href="//data.gov.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Ochiq ma'lumotlar portali</p>
            </a>
            <a class="footer_link" href="//pm.gov.uz">
                <div class="image"></div>
                <p>Oʼzbekiston Respublikasi Prezidenti Virtual qabulxonasi</p>
            </a>

            <a class="footer_link" href="//uzbi.uz">
                <div class="image"></div>
                <p>Bojxona instituti</p>
            </a>

        </div>
    </div>

</div>
</template>
<script>
export default {
    name: 'Onepage',
    data() {
        return {
            options: {
                anchors: ['0', '1'],
                lockAnchors: true,
            },
        }
    },

}
</script>
<style>

</style>
