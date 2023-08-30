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
                                    $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Марказий божхона лабораторияси тузилмаси")
                                }}</h3>
                        </div>
                        <div>
                            <div class="container-fluid ">
                                <div class="row">
                                    <figure style="width: 80%; margin-left: auto; margin-right: auto;">
                                        <div class="structure-top">
                                            <div class="tuzilma-card">
                                                Марказий божхона лабораторияси бошлиғи
                                            </div>
                                        </div>
                                        <div class="substructures">
                                            <div class="substructure">
                                                <div class="tuzilma-card">Марказий божхона лабораторияси бошлиғи ўринбосари - Экспертиза бошқармаси бошлиғи</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">
                                                        Божхона экспертизаси бўлими
                                                    </div>
                                                    <div class="tuzilma-card">
                                                        Суд экспертизаси бўлими
                                                    </div>
                                                    <div class="tuzilma-card">
                                                        Аналитик қурилмаларга техник хизмат кўрсатиш гуруҳи
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">Марказий божхона лабораторияси бошлиғи ўринбосари - Ташқи иқтисодий фаолият товар номенклатураси бошқармаси бошлиғи</div>
                                                <div class="sub-tuzilma-card">
                                                    <div class="tuzilma-card">
                                                        Классификация маркази
                                                    </div>
                                                    <div class="tuzilma-card">
                                                        Ташқи иқтисодий фаолият товар номенклатурасини юритиш бўлими
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="substructure">
                                                <div class="tuzilma-card">
                                                    Жисмоний ва юридик шахсларга хизмат кўрсатиш бўлими
                                                </div>
                                                <div class="tuzilma-card">
                                                    Молия-иқтисодиёт гуруҳи
                                                </div>
                                                <div class="tuzilma-card">
                                                    Бош юристконсульт
                                                </div>
                                                <div class="tuzilma-card">
                                                    Моддий-техник таъминот, ёнғин ва техника хавфсизлиги гуруҳи
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
                    text: i18n.t('Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Марказий божхона лабораторияси тузилмаси'),
                    to: '/page/structure/labor',
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
    height: 92px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    padding-top: 10px;

}

.structure-ccl .structure-top {
    display: flex;
    justify-content: center;
}

.structure-ccl .structure-top .tuzilma-card:nth-of-type(1)::before {
    content: "";
    display: block;
    position: absolute;
    height: 30px;
    background: #249b73;
    width: 1px;
    top: 120%;
}

.structure-ccl .structure-top .tuzilma-card:nth-of-type(1)::after {
    content: "";
    display: block;
    border-radius: 34px;
    background-color: #249b73;
    width: 5px;
    height: 5px;
    top: 120%;
    position: absolute;
}

.structure-ccl .structure-top .tuzilma-card:nth-of-type(1) {
    margin-right: 155px;
    margin-left: 20%;
}

.structure-ccl .tuzilma-card {
    width: 320px;
    box-shadow: 2px 2px 4px 1px var(--mycolor);
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid var(--mycolor);
    color: #000;
    font-size: 20px;
    position: relative;
    text-align: center;
}
.structure-comitete .substructures {
    display: flex;
    margin-top: 55px;
    justify-content: space-between;
}

.structure-comitete .substructures::before {
    top: 88px;
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background-color: #249b73;
    left: calc(100% / 10 - 10px + 6px);
    right: calc(100% / 10 - 10px + 6px);
    /* right: calc(100% - (5 * (320px + 2 * 10px)) + 320px / 2 ); */
    margin: 30px auto;
}

.structure-ccl .substructures .substructure::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: #249b73;
    top: 0;
    border-radius: 100%;
    left: calc(50% - 2px);
}

.structure-ccl .substructures .substructure::before {
    content: "";
    display: block;
    width: 1px;
    height: 20px;
    position: absolute;
    background-color: #249b73;
    left: 50%;
    top: -15px;
}

.structure-ccl .substructures .substructure {
    position: relative;
}

.structure-ccl .substructures .substructure .sub-tuzilma-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;
    position: relative;
}

.structure-ccl .substructures .substructure .sub-tuzilma-card::before {
    content: "";
    display: block;
    width: 1px;
    position: absolute;
    background-color: #39ae69;
    top: -5px;
    bottom: calc(90px / 2 + 10px);
    left: 15px;
}

.structure-ccl .substructures .substructure .sub-tuzilma-card::after {
    content: "";
    display: block;
    position: absolute;
    width: 142px;
    height: 1px;
    top: -5px;
    background-color: #39ae69;
    left: 15px;
}

.structure-ccl .substructures .substructure .sub-tuzilma-card .tuzilma-card {
    max-width: 300px;
    height: 80px;
}


.structure-ccl .substructures .substructure .sub-tuzilma-card .tuzilma-card:nth-of-type(1)::before {
    content: "";
    display: block;
    position: absolute;
    height: 25px;
    top: -40px;
    background-color: #249b73;
    left: 125px;
    width: 1px;
}

.structure-ccl .substructures .substructure .sub-tuzilma-card .tuzilma-card::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 15px;
    height: 1px;
    background-color: #249b73;
    left: -15px;
}

.structure-ccl .substructures .substructure:last-child {
    border: 1px dotted #249b73;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 275px;
}

.structure-ccl .substructures .substructure:last-child::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: #249b73;
    top: -10px;
    border-radius: 100%;
    left: calc(50% - 2px);
}

.structure-ccl .substructures .substructure:last-child::before {
    top: -26px;
}

.structure-ccl .substructures .substructure::before {
    content: "";
    display: block;
    width: 1px;
    height: 20px;
    position: absolute;
    background-color: #249b73;
    left: 50%;
    top: -15px;
}
</style>
