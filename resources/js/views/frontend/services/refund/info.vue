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
                                                <tr v-if="typeof app.personName !== 'undefined'">
                                                    <td style="font-weight: 550">Аризачи</td>
                                                    <td>{{
                                                            typeof app.personName !== 'undefined' ? app.personName : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.personPhone !== 'undefined' && app.personPhone">
                                                    <td style="font-weight: 550">Аризачи телефон рақами</td>
                                                    <td>{{
                                                            typeof app.personPhone !== 'undefined' ? app.personPhone : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.personMail !== 'undefined' && app.personMail">
                                                    <td style="font-weight: 550">Аризачининг эмаил манзили</td>
                                                    <td>{{
                                                            typeof app.personMail !== 'undefined' ? app.personMail : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.personAddress !== 'undefined' && app.personAddress">
                                                    <td style="font-weight: 550">Аризачининг манзили</td>
                                                    <td>{{
                                                            typeof app.personAddress !== 'undefined' ? app.personAddress : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.personPinTin !== 'undefined' && app.personPinTin">
                                                    <td style="font-weight: 550">Аризачининг ЖШШИР/ СТИРи</td>
                                                    <td>{{
                                                            typeof app.personPinTin !== 'undefined' ? app.personPinTin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.locationNm !== 'undefined' && app.locationNm">
                                                    <td style="font-weight: 550">Танланган божхона бошқармаси</td>
                                                    <td>{{
                                                            typeof app.locationNm !== 'undefined' ? app.locationNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.mfoNm !== 'undefined' && app.mfoNm">
                                                    <td style="font-weight: 550">Танланган банк</td>
                                                    <td>{{
                                                            typeof app.mfoNm !== 'undefined' ? app.mfoNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.moneyBack !== 'undefined' && app.moneyBack">
                                                    <td style="font-weight: 550">Қайтариладиган пул маблағи миқдори</td>
                                                    <td>{{
                                                            typeof app.moneyBack !== 'undefined' ? app.moneyBack : null
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
                                                <p v-if="appstatus.status==='100' && 1===2" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s04decisionPdfDownloadAppeal?stId=' + appstatus.id"> Ариза шаклини юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s04decisionPdfDownloadAppeal?stId=' + appstatus.id"> Реестрга киритилганлиги тўғрисида қарорни юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='201' || appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s04decisionPdfDownloadAppeal?stId=' + appstatus.id"> Аризангиз жавоб хатини юклаб олинг! </a></p>
<br>
<!--                                                <p><b> Инспектор: </b>  {{ appstatus.userNm }} </p>-->

                                            </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                    v-if="(key === app.history.length - 1) && (app.history[app.history.length - 1].status!=='201' || app.history[app.history.length - 1].status!=='600')"
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
                axios.get("/api/v1/ex_api/refund-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        //console.log(response.data.data)
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: "Пул маблағларини қайтариш -" + _this.app.appNum,
                            to: '/services/refund/' + _this.app.id,
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
