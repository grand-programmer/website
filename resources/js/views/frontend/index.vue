<template>
    <div>
        <v-header></v-header>
        <router-view>
            <homepage-component></homepage-component>
        </router-view>
        <div class="footer_links">
            <div class="footer_links_arrow"><i class="fas fa-chevron-down"></i></div>
            <div class="slide_links">
                <a class="footer_link" href="//huquqiyportal.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Milliy huquqiy internet portali') }}</p>
                </a>
                <a class="footer_link" href="//president.uz">
                    <div class="image"></div>
                    <p>{{ $t('O`zbekiston Respublikasi Prezidentining rasmiy veb sayti') }}</p>
                </a>

                <a class="footer_link" href="//gov.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Hukumat portali') }}</p>
                </a>

                <a class="footer_link" href="//prokuratura.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Bosh prokuraturasi') }}</p>
                </a>
                <a class="footer_link" href="//iiv.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Ichki ishlar vazirligi') }}</p>
                </a>

                <a class="footer_link" href="//soliq.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Davlat soliq qo`mitasi') }}</p>
                </a>
                <a class="footer_link" href="//my.gov.uz">
                    <div class="image"></div>
                    <p>{{ $t('Yagona interaktiv davlat xizmatlari portali') }}</p>
                </a>

                <a class="footer_link" href="//data.gov.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Ochiq ma`lumotlar portali') }}</p>
                </a>
                <a class="footer_link" href="//pm.gov.uz">
                    <div class="image"></div>
                    <p>{{ $t('Oʼzbekiston Respublikasi Prezidenti Virtual qabulxonasi') }}</p>
                </a>

                <a class="footer_link" href="//uzbi.uz">
                    <div class="image"></div>
                    <p>{{ $t('Bojxona instituti') }}</p>
                </a>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Homepage',

    components: {
        HomepageComponent: () => import('../../components'),
    },

    data: () => ({
        expandOnHover: false,
    }),
}
</script>
<style>
.v-application p {
    margin-bottom: unset !important;
}

.v-application ul {
    padding-left: unset !important;
}
</style>

