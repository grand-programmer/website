<template>
    <div class="section customs-value-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content" v-if="app">
            <v-container>
                <v-row>
                    <h3 class="pb-5"><b>Ариза рақами: </b>{{ app.appNum }}</h3>
                    <br>
                </v-row>
                <v-row>
                    <v-tabs
                        v-model="tab"
                        left
                        class="fixed-color-tabs"

                    >
                        <v-tab
                            v-for="item in items"
                            :key="item.tab"
                            style="width: 400px"


                        >
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab" class="fixed-color-tabs">

                        <v-tab-item


                        >


                            <v-expansion-panels v-model="panel">
                                <!--               arizachi -->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header class="primary-color">
                                        Аризачи тўғрисида маълумотлар
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        Ариза рақами
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{
                                                            typeof app.appNum !== 'undefined' ? app.appNum : ''
                                                        }}
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.ipHolder !== 'undefined'">
                                                    <td style="font-weight: 550">Ҳуқуқ эгасининг номи</td>
                                                    <td>{{
                                                            typeof app.ipHolder !== 'undefined' ? app.ipHolder : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.ipHolderTelNumber !== 'undefined' && app.ipHolderTelNumber">
                                                    <td style="font-weight: 550">Ҳуқуқ эгасининг телефон рақами</td>
                                                    <td>{{
                                                            typeof app.ipHolderTelNumber !== 'undefined' ? app.ipHolderTelNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.ipHolderMail !== 'undefined' && app.ipHolderMail">
                                                    <td style="font-weight: 550">Ҳуқуқ эгасининг эмаил манзили</td>
                                                    <td>{{
                                                            typeof app.ipHolderMail !== 'undefined' ? app.ipHolderMail : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.ipHoldersAddr !== 'undefined' && app.ipHoldersAddr">
                                                    <td style="font-weight: 550">Ҳуқуқ эгасининг манзили</td>
                                                    <td>{{
                                                            typeof app.ipHoldersAddr !== 'undefined' ? app.ipHoldersAddr : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.statusNm !== 'undefined' && app.statusNm">
                                                    <td style="font-weight: 550">Ариза ҳолати</td>
                                                    <td>{{
                                                            typeof app.statusNm !== 'undefined' ? app.statusNm : null
                                                        }}
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                yuk-->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header>
                                        Ишлаб чиқарувчилар тўғрисида
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <template v-for="ishchiq in app.s01AppsManufacturerInfos"  v-if="app.s01AppsManufacturerInfos">
                                            <v-simple-table v-if="ishchiq">
                                                <template v-slot:default>
                                                    <tbody>
                                                    <tr v-if="typeof ishchiq.manufacturer !=='undefined'">
                                                        <td style="font-weight: 550">Ишлаб чиқарувчи номи</td>
                                                        <td>
                                                            {{ishchiq.manufacturer}}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof ishchiq.manufacturerAddr !=='undefined'">
                                                        <td style="font-weight: 550">Ишлаб чиқарувчи манзили</td>
                                                        <td>
                                                            {{ishchiq.manufacturerAddr}}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof ishchiq.manufacturerMAil !=='undefined'">
                                                        <td style="font-weight: 550">Ишлаб чиқарувчи электрон почтаси</td>
                                                        <td>
                                                            {{ishchiq.manufacturerMAil}}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof ishchiq.manufacturerTelNum !=='undefined'">
                                                        <td style="font-weight: 550">Ишлаб чиқарувчи телефон номери</td>
                                                        <td>
                                                            {{ishchiq.manufacturerTelNum}}
                                                        </td>
                                                    </tr>

                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </template>

                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                tovar-->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header>
                                        Товар тўғрисида маълумотлар
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
<span style="height: 20px">  </span>
                                        <template v-for="tovar in app.s01Commodities"  v-if="app.s01Commodities">

                                            <v-simple-table>
                                                <template v-slot:default>

                                                    <tbody>

                                                    <tr v-if="typeof tovar.ipDescription !=='undefined' && tovar.ipDescription ">
                                                        <td style="font-weight: 550">Интеллектуал мулк номланиши
                                                        </td>
                                                        <td>{{ tovar.ipDescription }} </td>
                                                    </tr>

                                                    <tr v-if="typeof tovar.ipPassNum !=='undefined' && tovar.ipPassNum ">
                                                        <td style="font-weight: 550">Гувохнома рақами
                                                        </td>
                                                        <td>{{ tovar.ipPassNum }} </td>
                                                    </tr>
                                                    <tr v-if="typeof tovar.ipPassStartDate !=='undefined' && tovar.ipPassStartDate && typeof tovar.ipPassEndDate !=='undefined' && tovar.ipPassEndDate ">
                                                        <td style="font-weight: 550">Гувохнома муддати
                                                        </td>
                                                        <td>{{ tovar.ipPassStartDate }} -  {{ tovar.ipPassEndDate }} </td>
                                                    </tr>
                                                    <tr v-if="typeof tovar.ipRegistrStartDate !=='undefined' && tovar.ipRegistrStartDate && typeof tovar.ipRegistrEndDate !=='undefined' && tovar.ipRegistrEndDate ">
                                                        <td style="font-weight: 550">Реестр муддати
                                                        </td>
                                                        <td>{{ tovar.ipRegistrStartDate }} -  {{ tovar.ipRegistrEndDate }} </td>
                                                    </tr>

                                                    </tbody>
                                                </template>
                                            </v-simple-table>

                                        </template>

                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                        </v-tab-item>
                        <v-tab-item>
                            <v-timeline
                                v-if="typeof app.history !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key,index) in app.history">
                                    <v-timeline-item
                                        class="mb-4"
                                        color="primary"
                                        icon-color="primary"
                                        small
                                    >
                                        <v-row justify="start">
                                            <v-col cols="10">
                                                <h4 class="active"> {{ appstatus.statusNm }}</h4>
                                                <br>
                                                <p> {{ new Date(appstatus.insTime).toLocaleString() }}</p>
                                                <br>
                                                <p v-if="appstatus.status==='100'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s01decisionPdfDownloadAppeal?stId=' + appstatus.id"> Ариза шаклини юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s01decisionPdfDownloadAppeal?stId=' + appstatus.id"> Реестрга киритилганлиги тўғрисида қарорни юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='201'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s01decisionPdfDownloadAppeal?stId=' + appstatus.id"> Реестрга киритишни рад этиш тўғрисидаги қарорни юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='201' && typeof appstatus.comment!=='undefined'" style="font-size: 15px; color: indianred">{{ appstatus.comment }} </p>
<br>
<!--                                                <p><b> Инспектор: </b>   {{ appstatus.userNm }} </p>-->

                                            </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4 d-none"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                    v-if="(key === app.history.length - 1) && app.history[app.history.length - 1].status!=='600'"
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4> Якуний хулоса </h4>
                                            <p></p>
                                            <p></p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                        </template>

<!--                                <v-timeline-item
                                    class="mb-4"
                                    color="primary"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4 class="active">Жараёнда </h4>
                                            <p> 16:59, 21 апр 2022</p>
                                            <p>Ариза божхона органлари томонидан ўрганилиб чиқилмоқда</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4> Хулоса </h4>
                                            <p></p>
                                            <p></p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>-->


</v-timeline>

</v-tab-item>
</v-tabs-items>

</v-row>


</v-container>


</div>
</div>
</template>
<script>
import {mapState} from 'vuex';
import i18n from "../../../../i18n";

export default {
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
                    text: 'Менинг аризаларим',
                    to: '/applications',
                    disabled: false,
                    exact: true,
                },

            ],
            tab: null,
            panel: 0,
            app: [],
            oferta: false,
            showed: false,
            dialog: false,

            items: [
                {tab: "Ариза хақида умумиy маълумот"},
                {tab: 'Ариза ҳолати'},

            ],

        }
    },
    mounted() {
        /*        setTimeout(() => {
                    this.$store.commit('setLoading', true)

                }, 2000)*/
        this.getAppData()


    },
    computed: {
        ...mapState(['loading'])
    },
    methods: {
        downloadPdf() {
            this.dialog = false;
            window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.app.product.id;
        },
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/intellektual-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        //console.log(response.data.data)
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: "Интеллектуал мулк -" + _this.app.appNum,
                            to: '/services/intellectual/' + _this.app.id,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error("Маълумот топилмади!")
                        _this.$router.push("/applications");

                    }


                }).catch(function (error) {
                    console.log(error)
                    _this.$store.commit('setLoading', false)
                    _this.$toast.error("Маълумот топилмади!")
                    _this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
