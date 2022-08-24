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
                        <h3 class="mb-5 vacancies-title">Давлат божхона хизмати органларига ишга кириш билан боғлиқ саволлар </h3>

                        <!--                    <p>Мазкур бўлимда сиз вакант ўринлар тўғрисида маълумот оласиз ҳамда ушбу вакант ўринларга ариза топширишингиз мумкин бўлади</p>-->

                    </v-row>

                    <v-row>
                        <v-expansion-panels v-model="panel">
                            <v-expansion-panel
                                v-for="(item,i) in questions"
                                :key="i"
                            >
                                <v-expansion-panel-header>
                                    {{ item.question }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    {{ item.answer }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-row>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VacancyQuestions",
    data() {
        return {
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Вакансиялар',
                    to: '/services/vacancy',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Ишга кириш билан боғлиқ саволлар ',
                    to: '/services/vacancy/questions',
                    disabled: true,
                    exact: true,
                },
            ],
            panel:0,
            questions:[
                {
                    question:"Очиқ вакансиялар тўғрисида маълумотни қаердан олса бўлади?",
                    answer:"Давлат божхона қўмитасининг расмий веб-сайтидаги “Қўмита ҳақида” рукнини танлаш орқали бўш иш ўринлари тўғрисида маълумотларни олса бўлади.",
                },
                {
                    question:"Очиқ вакансияга ариза қандай тартибда юборилади?",
                    answer:"Очиқ вакансияга аризалар фақат электрон тарзда шахсий кабинетнинг “Вакансия” рукнидан керакли очиқ вакансияни танлаб “Ариза юбориш” тугмаси орқали юборилади.",
                },/*
                {
                    question:"Вакансиялар порталига қандай тартибда рўйхатдан ўтилади?",
                    answer:"Давлат хизматини ривожлантириш агентлигининг расмий веб-сайтидаги “Вакансиялар” рукнини танлаш орқали vacancy.argos.uz порталига ўтиб, “Кириш” тугмаси орқали рўйхатдан ўтилади.",
                },
                {
                    question:"Менинг профилим”даги маълумотлар қай тарзда шакллантирилади?",
                    answer:"Номзоднинг “Менинг профилим”даги маълумотлари автоматик равишда my.mehnat.uz сайтидан интеграция натижасида шакллантирилади.",
                },
                {
                    question:"Очиқ вакансияларни қайси мезонлар асосида танлаш имконияти мавжуд?",
                    answer:"Очиқ вакансиялар лавозим соҳаси, лавозим даражаси, лавозим тури, малака даражаси, ҳудуд ҳамда иш ҳақи бўйича танлаш имконияти бор.",
                }*/
            ],
        }
    }
}

</script>
<style lang="css">

@import "/public/css/mix/vacancy.css";
</style>
