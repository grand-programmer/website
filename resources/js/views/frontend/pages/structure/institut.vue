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
                            <h3 class="text-white">{{ $t("Божхона институти намунавий тузилмаси") }}</h3>
                       </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure>
                                        <div class="structure-top">
                                            <div class="tuzilma-card">{{ $t("Бошлиқ")}}</div>
                                            <div class="tuzilma-card ">{{$t("Институт кенгаши")}}</div>
                                       </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Бошлиқнинг ўқув ва илмий ишлар бўйича биринчи ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Ахборот технологиялари ва моделлаштириш маркази")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Илмий-тадқиқот ва илмийпедагогик кадрларни тайёрлаш бўлими")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ўқув-услубий бўлим")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ахборот-ресурс маркази")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Божхона иши факультети")}}</div>
                                                    <div class="sub-tuzilma-card">
                                                        <div class="tuzilma-card">{{ $t("Божхона назорати кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Божхона тартибга солиниши ва божхона тўловлари кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Махсус-ҳуқуқий фанлар кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Божхона экспертизаси ва товарларни таснифлаш кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Умумҳуқуқий фанлар кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Ахборот технологиялари ва математика кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Ўзбек ва хорижий тиллар кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Ҳарбий ва жисмоний тайёргарлик кафедраси")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Иқтисодий ва ижтимоий фанлар кафедраси")}}</div>
                                                    </div>
                                               </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Тарбиявий ишлар ва ҳарбий тайёргарлик бўйича бошлиқ ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Маънавият ва ёшлар тарбияси маркази")}}</div>
                                                    <div class="sub-tuzilma-card">
                                                        <div class="tuzilma-card">{{ $t("Харбий оркестр")}}</div>
                                                        <div class="tuzilma-card">{{ $t("Ашула ва рақс ансамбли")}}</div>
                                                    </div>
                                                    <div class="tuzilma-card">{{ $t("Ўқув батальони")}}</div>
                                                </div>
                                                <div class="tuzilma-card">{{ $t("Қайта тайёрлаш ва малака ошириш факультети")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Махсус фанлар кафедраси")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Психологик тайёргарликни ривожлантириш маркази")}}</div>
                                                </div>
                                           </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Молия-иқтисод ва хўжалик ишлари бўйича бошлиқ ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                <div class="tuzilma-card">{{ $t("Молия-иқтисод бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Моддий-техник таъминот ва капитал таъмирлаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Тиббий хизмат")}}</div>
                                                <div class="tuzilma-card">{{ $t("Таҳририй-нашриёт хизмати")}}</div>
                                                <div class="tuzilma-card">{{ $t("Босмахона")}}</div>
                                           </div>
                                           </div>

                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Кадрлар бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ҳарбий сафарбарлик, жанговар тайёргарлик ва қўриқлаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий-назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бошқармаси")}}</div>
                                                <div class="tuzilma-card">{{ $t("Шахсий хавфсизлик бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Бош юрисконсульт")}}</div>
                                                <div class="tuzilma-card">{{ $t("Биринчи бўлим")}}</div>
                                                <div class="tuzilma-card">{{ $t("Халқаро алоқалар хизмати")}}</div>
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
                    text: i18n.t('Божхона институти намунавий тузилмаси'),
                    to: '/page/structure/institute',
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
