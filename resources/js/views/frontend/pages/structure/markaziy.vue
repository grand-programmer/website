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
                            <h3 class="text-white">{{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Марказий аппарати тузилмаси") }}</h3>
                       </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure style="width: 80%; margin-left: auto;  margin-right: auto; ">
                                        <div class="structure-top">
                                            <div class="tuzilma-card">{{ $t("Раис")}}</div>
                                            <div class="tuzilma-card ">{{$t("Раис ёрдамчиси")}}</div>
                                       </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг биринчи ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Божхона назорати ва расмийлаштирувини ташкил этиш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Нотариф тартибга солиш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Таргетлаш ва хавфларни мониторинг қилиш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ахборот-коммуникация технологиялари ва  киберхавфсизликни таъминлаш бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Стратегик режалаштириш ва божхона тартиб-таомилларини соддалаштириш бошқармаси")}}</div>
                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Божхона тўловлари бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ташқи савдо божхона статистикаси бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Валюта назорати бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Молия-иқтисодиёт бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Моддий-техника таъминоти бошқармаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Капитал қурилиш лабораторияси")}}</div>
                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раиснинг ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                <div class="tuzilma-card">{{ $t("Контрабандага қарши курашиш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Божхона аудит бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ҳарбий сафарбарлик, жанговар тайёргарлик ва қўриқлаш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Халқаро ҳамкорлик бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Суриштирув ва маъмурий амалиёт бошқармаси")}}</div>
                                           </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Раис маслаҳатчиси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Раис маслаҳатчиси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Инсон ресурсларини ривожлантириш ва бошқариш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Шахсий хавфсизлик бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий-назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Юридик бошқарма")}}</div>
                                                <div class="tuzilma-card">{{ $t("Жамоатчилик ва оммавий ахборот воситалари билан алоқалар бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Мурожаатлар билан ишлаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Тиббий ижтимоий муассасалар билан ишлаш бўлими")}}</div>
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
                    text: i18n.t('Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси марказий аппарати'),
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
