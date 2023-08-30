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
        <div class="container-fluid structure-comitete">
            <div class="row"><!---->
                <div class="col col-12">
                    <div class="single_blog_content">
                        <div class="widget_tittle">
                            <h3 class="text-white">{{
                                    $t("Ўзбекистон Республикаси давлат божхона хизмати органларининг вақтинчалик ташкилий тузилмаси")
                                }}</h3>
                        </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure>
                                        <div class="structure-top">
                                            <div class="tuzilma-card max-content pa-6 py-2">
                                                {{ $t("Иқтисодиёт ва молия вазирлиги хузуридаги Божxона кўмитаси") }}
                                            </div>
                                        </div>
                                        <div class="substructures">
                                            <div class="substructure-column">
                                                <div class="substructure">
                                                    <div class="tuzilma-card">
                                                        {{
                                                            $t("Божxона қўмитасининг Қорақалпоғистон Республикаси, вилоятлар, Тошкент шаҳар бўйича божxона бошқармалари вa “Тошкент — Аеро” иxтисослаштирилган божxона комплексининг бошқарув аппаратлари")
                                                        }}
                                                    </div>
                                                    <div class="sub-tuzilma-card">
                                                        <div class="tuzilma-card">{{ $t("Божxона постлари") }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="substructure-column">

                                                <div class="substructure">
                                                    <div class="sub-tuzilma-card  px-5 mt-1"  >
                                                        <div class="tuzilma-card">{{ $t("Божxона институти") }}</div>
                                                        <div class="tuzilma-card">{{ $t("Марказий божxона лабораторияси") }}</div>
                                                        <div class="tuzilma-card">{{ $t("Миллий кинология маркази") }}</div>
                                                        <div class="tuzilma-card">{{ $t("“Божxона-сервис” давлат муассасаси") }}</div>
                                                        <div class="tuzilma-card">{{ $t("“Баxт” спорт-соғломлаштириш мажмуаси давлат муассасаси") }}</div>
                                                    </div>
                                                </div>
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
                    text: i18n.t('Ўзбекистон Республикаси давлат божхона хизмати органларининг вақтинчалик ташкилий тузилмаси'),
                    to: '/page/structure/tashkiliy',
                    disabled: true,
                    exact: true,
                }
            ]
        }
    }
}
</script>

<style scoped>
.max-content {
    width: max-content;
}

.widget_tittle {
    margin-left: -20px;
}

.structure-comitete .structure-top .tuzilma-card:nth-of-type(1)::after {
    top: 117%;
}

.structure-comitete .structure-top .tuzilma-card:nth-of-type(1)::after {
    top: 111%;
}
.structure-comitete .substructures .substructure:last-child{
    border: none;
}
.structure-comitete .substructures .substructure-column{
    margin: 0 50px;
}
.structure-comitete .substructures{
    justify-content: center;
}
.structure-comitete .substructures::before{
    top: 64px;
    left: inherit;
    right: inherit;
    width: 30%;
}
.structure-comitete .substructures .substructure-column:last-child .substructure:last-child::before{
    display: none;
}
.structure-comitete .substructures .substructure-column:last-child .substructure:last-child::after{
    display: none;
}
</style>
