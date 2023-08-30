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
                            <h3 class="text-white">{{ $t("Божxона қўмитаси Миллий кинология марказининг вақтинчалик тузилмаси") }}</h3>
                       </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure>
                                        <div class="structure-top">
                                            <div class="tuzilma-card">{{ $t("Директор")}}</div>
                                       </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card" style="min-height: 60px">{{ $t("Директорнинг ўқув-машқ ишлари бўйича ўринбосари")}}</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">{{ $t("Xизмат итлари питомниги")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Иxтисослаштирилган ветеренариyа xизмати")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Xизмат итлари билан машқ ўтказиш бўлими")}}</div>
                                                    <div class="tuzilma-card">{{ $t("Ўқув-услубий бўлими ")}}</div>

                                               </div>
                                           </div>
                                            <div class="substructure noparent">
                                                <div class="tuzilma-card">{{ $t("Моддий техника таъминоти бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Молия иқтисодиёт бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Xалқаро хамкорлик, жамоатчилик ва оммавий аxборот воситалари билан алоқалар гурухи")}}</div>
                                            </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">{{ $t("Инсон ресурсларини ривожлантириш ва бошқариш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Биринчи бўлим")}}</div>
                                                <div class="tuzilma-card">{{ $t("Ташкилий назорат, хизмат фаолиятини таҳлил қилиш ва баҳолаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Харбий сафарбарлик, жанговар тайёргарлик ва қўриқлаш бўлими")}}</div>
                                                <div class="tuzilma-card">{{ $t("Бош юристконсулт")}}</div>
                                                <div class="tuzilma-card">{{ $t("Аxборот-коммуникатсия теxнологиялари ва киберxавфсизликни таъминлаш гуруҳи")}}</div>
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
                    text: i18n.t('Божxона қўмитаси Миллий кинология марказининг вақтинчалик тузилмаси'),
                    to: '/page/structure/kinologiya',
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
        justify-content: space-evenly;
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
            &.noparent{
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                border: 1px dotted #249b73;
                height: fit-content;
                &:before{
                    content: none;
                }
                &:after{
                    top: -10px;
                }
                .tuzilma-card {
                    &:first-child:after{
                        top: -38px;
                    }
                    &:before {
                        content: none;
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
