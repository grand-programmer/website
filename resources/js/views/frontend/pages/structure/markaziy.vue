<template>
    <div class="section page-container markaziy">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
       </div>
        <div class="container-fluid structure-comitete" >
            <div class="row"><!---->
                <div class="col col-12">
                    <div class="single_blog_content">
                        <div class="widget_tittle">
                            <h3 class="">{{ $t("Давлат божхона қўмитаси Марказий аппарати тузилмаси") }}</h3>
                       </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure>
                                        <div class="structure-top">
                                            <div class="tuzilma-card">{{ $t("Раис")}}</div>
                                            <div class="tuzilma-card ">{{$t("Раис ёрдамчиси")}}</div>
                                       </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг биринчи ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Божхона назорати ва расмийлаштирувини ташкил этиш бош бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ахборот-коммуникация технологиялари ва  киберхавфсизликни таъминлаш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Хавфларни мониторинг қилиш ва баҳолаш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Стратегик режалаштириш ва божхона тартиб-таомилларини соддалаштириш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Божхона институти")}}</div>
                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Даромадлар ва божхона статистикаси бош бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Божхона аудити бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Валюта назорати бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Марказий божхона лабораторияси")}}</div>
                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                <div class="tuzilma-card">{{ $t("Контрабандага қарши курашиш бош бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Тезкор маълумотларни бошқариш маркази")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ҳарбий сафарбарлик, жанговар тайёргарлик ва қўриқлаш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Халқаро ҳамкорлик бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Суриштирув ва маъмурий амалиёт бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Миллий кинология маркази")}}</div>
                                           </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                <div class="tuzilma-card">{{ $t("Моддий-техника таъминоти бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Молия-иқтисодиёт бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Капитал қурилиш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("«Божхона-сервис» давлат муассасаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("«Бахт» спорт-соғломлаштириш мажмуаси» давлат муассасаси")}}</div>
                                           </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг маънавий-маърифий ишлар самарадорлигини ошириш, давлат тили тўғрисидаги қонун ҳужжатларига риоя этилишини таъминлаш масалалари бўйича маслаҳатчиси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Кадрлар бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Шахсий хавфсизлик бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий-назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Юридик бошқарма")}}</div>
                                                <div class="tuzilma-card">{{ $t("Жамоатчилик ва оммавий ахборот воситалари билан алоқалар бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Мурожаатлар билан ишлаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ички аудит ва молиявий назорат бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Биринчи бўлим")}}</div>
                                                <div class="tuzilma-card">{{ $t("«А» сектори")}}</div>
                                           </div>
                                       </div>


                                    </figure>


                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>

</template>

<script>
import i18n from "../../../../i18n";

export default {
    name: "MarkaziyStructure",
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
                    text: i18n.t('Давлат божхона қўмитаси марказий аппарати'),
                    to: '/page/rahbariyat',
                    disabled: true,
                    exact: true,
                }
            ]
        }
    }
}
</script>

<style scoped>
.widget_tittle{
    margin-left: -20px;
}

</style>
