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
                            <h3 class="text-white">{{ $t("Божxона қўмитасининг Қорақалпоғистон Республикаси, вилоятлар, Тошкент шахар бўйича бошқармалари ва “Тошкент–АЕРО” иxтисослаштирилган божxона комплекси бошқарув аппаратларининг вақтинчалик намунавий тузилмаси") }}</h3>
                       </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure>
                                        <div class="structure-top">
                                            <div class="tuzilma-card">{{ $t("Бошлиқ")}}</div>
                                       </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card" style="min-height: 60px">{{ $t("Бошлиқнинг биринчи ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Божхона назорати ва расмийлаштирувини ташкил этиш бўлими (шўбаси)")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Божхона тўловлари ва статистика бўлими (шўбаси)")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Валюта назорати бўйича бош инспектор")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Товарларни классификациялаш бўйича бош инспектор")}}</div>
                                                    <div class="tuzilma-card" style="border: 1px dashed">{{ $t("Божхона постлари")}}</div>

                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card" style="min-height: 60px">{{ $t("Бошлиқ ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Контрабандага қарши курашиш бўлими (шўбаси)")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Божхона аудити бўлими (шўбаси)")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Суриштирув ва маъмурий амалиёт шўбаси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Харбий сафарбарлик, жанговар тайёргарлик ва қўриқлаш бўлими")}}</div>
                                                    <div class="sub-tuzilma-card">
                                                        <div class="tuzilma-card">{{ $t("Навбатчилик қисми")}}</div>
                                                    </div>
                                                </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card" style="min-height: 60px">{{ $t("Бошлиқ ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                <div class="tuzilma-card">{{ $t("Молия-иқтисодиёт шўбаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Моддий-техник таъминоти шўбаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Капитал қурилиш бўйича бош инспектор")}}</div>
                                                <div class="tuzilma-card">{{ $t("Аxборот-коммуникация теxнологиялари ва киберxавфсизликни таъминлаш шўбаси")}}</div>
                                                <div class="tuzilma-card" style="border: 1px dashed">{{ $t("«Божхона сервис» давлат муассасаси")}}</div>
                                           </div>
                                           </div>

                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Инсон ресурсларини ривожлантириш ва бошқариш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бўлими")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card" style="border: 1px dashed">{{ $t("Мурожаатлар билан ишлаш бўйича бош инспектор")}}</div>
                                                </div>

                                                <div class="tuzilma-card">{{ $t("Шахсий хавфсизлик шўбаси (БҚ нинг шаxсий xавфсизлик бошқармасига бевосита бўйсунади)")}}</div>
                                                <div class="tuzilma-card">{{ $t("Жамоатчилик ва оммавий аxборот воситалари билан алоқалар бўйича бош инспектор")}}</div>
                                                <div class="tuzilma-card">{{ $t("Юридик шўбаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Биринчи бўлим")}}</div>
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
    name: "InstitutStructure",
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
                    text: i18n.t('Божxона қўмитасининг Қорақалпоғистон Республикаси, вилоятлар, Тошкент шахар бўйича бошқармалари ва “Тошкент–АЕРО” иxтисослаштирилган божxона комплекси бошқарув аппаратларининг вақтинчалик намунавий тузилмаси'),
                    to: '/page/structure/hududiy',
                    disabled: true,
                    exact: true,
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.widget_tittle{
    margin-left: -20px;
}
figure{
    width: 95%;
    margin: 0 auto;
}
.structure-comitete {
    .tuzilma-card {
        width: 400px;
        box-shadow: 2px 2px 4px 1px var(--mycolor);
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border: 1px solid var(--mycolor);
        color: #000;
        font-size: 15px;
        position: relative;
        text-align: center;

    }
    .substructures {
        &:before{
            right: calc(100% - (5 * (400px + 1 * 10px)) + 444px / 1 );
            left: calc(100% / 10 - 10px + 93px);
        }
        > .substructure {
            &:nth-of-type(2){
                &:before{
                    left: -5px;
                    top: -15px;
                    bottom: 0;
                    height: 560px;
                }
                >
                .tuzilma-card{
                    &:before{
                        content: " ";
                        display: block;
                        position: absolute;
                        height: 1px;
                        width: 15px;
                        left: -15px;
                        top: 50%;
                        background-color: var(--mycolor);
                    }
                    &:after{
                        content: " ";
                    }
                    &:first-child:after{
                        content: "";
                        display: block;
                        width: 1px;
                        height: 20px;
                        position: absolute;
                        background-color: #249b73;
                        left: 50%;
                        top: -27px;
                    }
                }
            }
            &:last-child{
                height: fit-content;
            }
        }
        .substructure {
            > .sub-tuzilma-card{
                &:after{
                    content: none;
                }
                .tuzilma-card:before{
                    content: none;
                }
                &:before{
                    max-height: 480px;
                }
            }
            .sub-tuzilma-card {
                &:before{
                    top: -30px;
                }
                .tuzilma-card {
                    max-width: 380px;
                }

                .sub-tuzilma-card {
                    margin-top: 20px;
                    .tuzilma-card {
                        max-width: 360px;
                        &:before {
                            content:none;
                        }
                    }

                    &:before{
                        left: -5px;
                    } &:after {
                                              content: none;
                    }
                }
            }
        }
    }
}

</style>
