<template>
    <div class="section nomzod-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content">
            <div class="container">


                <div class="vacancy-wrapper">
                    <v-row>
                        <h3 class="mb-5 vacancies-title">{{
                                $t('Божхона органларига хизматга қабул қилиш билан боғлиқ норматив-ҳуқуқий ҳужжатлар')
                            }} </h3>

                        <!--                    <p>Мазкур бўлимда сиз вакант ўринлар тўғрисида маълумот оласиз ҳамда ушбу вакант ўринларга ариза топширишингиз мумкин бўлади</p>-->

                    </v-row>

                    <v-row>
                        <v-list class="vacancy-hujjatlar">
                            <v-list-item v-for="(item,k) in documents"
                                         :key="k" >
                                <a :href="item.href" target="_blank">
                                    {{ item.name }}
                                </a>

                            </v-list-item>
                        </v-list>
                    </v-row>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
import i18n from "../../../../i18n";

export default {
    name: "VacancyQuestions",
    data() {
        return {
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Хизматлар'),
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Вакансиялар'),
                    to: '/services/vacancy',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Божхона органларига хизматга қабул қилиш билан боғлиқ норматив-ҳуқуқий ҳужжатлар'),
                    to: '/services/vacancy/documents',
                    disabled: true,
                    exact: true,
                },
            ],
            panel: 0,
            documents: [
                {
                    name: i18n.t("Ўзбекистон Республикасининг 18.10.2018 йилдаги “Давлат божхона хизмати тўғрисидаги Ўзбекистон Республикаси Қонунига ўзгартиш ва қўшимчалар киритиш ҳақида”ги Қонуни"),
                    href: this.$i18n.locale==='ru'?"https://lex.uz/docs/4000638":"https://lex.uz/docs/4000640",
                },
                {
                    name: i18n.t("Ўзбекистон Республикаси Президентининг 25.03.2025 йилдаги “Давлат божхона хизмати органларининг фаолиятини ташкил этиш ва божхона маъмуриятчилигини янада такомиллаштиришнинг қўшимча чора-тадбирлари тўғрисида”ги ПҚ-122-сон қарори"),
                    href: this.$i18n.locale==='ru'?"https://lex.uz/docs/7452091":"https://lex.uz/docs/7452043",
                },
                {
                    name: i18n.t("Ўзбекистон Республикасининг Меҳнат Кодекси"),
                    href: this.$i18n.locale==='ru'?"https://lex.uz/docs/6257291":"https://lex.uz/docs/6257288",
                },/*
                {
                    name: "Ўзбекистон Республикасининг 2016 йил 22 сентябрьдаги “Меҳнатни муҳофаза қилиш тўғрисида” Қонуни",
                    href: "https://lex.uz/docs/3031427",
                },
                {
                    name: " Ўзбекистон Республикасининг 1998 йил 1 майдаги “Аҳолини иш билан таъминлаш тўғрисида” Қонуни",
                    href: "https://www.lex.uz/acts/51887",
                },
                {
                    name: " Ўзбекистон Республикасининг 1993 йил 3 сентябрдаги \"Фуқароларнинг давлат пенсия таъминоти тўғрисида\" Қонуни",
                    href: "https://lex.uz/docs/112314",
                },
                {
                    name: " Ўзбекистон Республикаси Президентининг 2019 йил 3 октябрдаги “Ўзбекистон Республикасида кадрлар сиёсати ва давлат фуқаролик хизмати тизимини тубдан такомиллаштириш чора-тадбирлари тўғрисида”ги ПФ-5843-сон Фармони ",
                    href: "https://lex.uz/docs/4549998",
                },
                {
                    name: " Ўзбекистон Республикаси Президентининг 2019 йил 3 октябрдаги “Ўзбекистон Республикаси Президенти ҳузуридаги Давлат хизматини ривожлантириш агентлиги фаолиятини ташкил этиш чора-тадбирлари тўғрисида”ги ПҚ-4472-сон қарори ",
                    href: "https://lex.uz/docs/4552053",
                },*/
                /*
                {
                    name: " Ўзбекистон Республикаси Президентининг 14.07.2018 йилдаги “Аҳоли бандлигини таъминлаш борасидаги ишларни такомиллаштириш ва самарадорлигини ошириш чора-тадбирлари тўғрисида”ги ПҚ-3856-сон қарори",
                    href: "https://lex.uz/docs/3824637",
                }*/
            ],
        }
    }
}

</script>
<style lang="css">

@import "/public/css/mix/vacancy.css";
</style>
