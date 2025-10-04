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
                    <h3 class="pb-5"><b>{{$t('Ариза рақами:')}} </b>{{ app.appNum }}</h3>
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

                        <v-tab-item>
                            <v-simple-table v-if="app">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{$t('Ариза рақами')}}
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{
                                                            typeof app.appNum !== 'undefined' ? app.appNum : ''
                                                        }}
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.fullOrLegalName !== 'undefined'">
                                                    <td style="font-weight: 550">{{$t('Аризачи')}}</td>
                                                    <td>{{
                                                            typeof app.fullOrLegalName !== 'undefined' ? app.fullOrLegalName : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.phone !== 'undefined' && app.phone">
                                                    <td style="font-weight: 550">{{$t('Аризачи телефон рақами')}}</td>
                                                    <td>{{
                                                            typeof app.phone !== 'undefined' ? app.phone : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.email !== 'undefined' && app.email">
                                                    <td style="font-weight: 550">{{$t('Аризачининг эмаил манзили')}}</td>
                                                    <td>{{
                                                            typeof app.email !== 'undefined' ? app.email : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.perAdr !== 'undefined' && app.perAdr">
                                                    <td style="font-weight: 550">{{$t('Аризачининг манзили')}}</td>
                                                    <td>{{
                                                            typeof app.perAdr !== 'undefined' ? app.perAdr : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.pinTin !== 'undefined' && app.pinTin">
                                                    <td style="font-weight: 550">{{$t('Аризачининг ЖШШИР/ СТИРи')}}</td>
                                                    <td>{{
                                                            typeof app.pinTin !== 'undefined' ? app.pinTin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.locationNm !== 'undefined' && app.locationNm">
                                                    <td style="font-weight: 550">{{$t('Танланган божхона бошқармаси')}}</td>
                                                    <td>{{
                                                            typeof app.locationNm !== 'undefined' ? app.locationNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.paySum !== 'undefined' && app.paySum">
                                                    <td style="font-weight: 550">{{$t('Тўлов муддати узайтириладиган сумма')}}</td>
                                                    <td>{{
                                                            typeof app.paySum !== 'undefined' ? app.paySum : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.typePaymentsName !== 'undefined' && app.typePaymentsName">
                                                    <td style="font-weight: 550">{{$t('Таъминлов тури')}}</td>
                                                    <td>{{
                                                            typeof app.typePaymentsName !== 'undefined' ? app.typePaymentsName : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.s08EarxivList !== 'undefined' && app.s08EarxivList">
                                                    <td style="font-weight: 550">{{$t('Юкланган файллар')}}</td>
                                                    <td>
                                                        <template v-for="(file,index) in app.s08EarxivList" v-if="file">
                                                            {{index>0?', ':''}} {{file.docTypeName}} - {{file.docname}}
                                                        </template>
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.statusNm !== 'undefined' && app.statusNm">
                                                    <td style="font-weight: 550">{{$t('Ариза ҳолати')}}</td>
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
                                v-if="typeof app.s08StatusHList !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key,index) in app.s08StatusHList">
                                    <v-timeline-item
                                        class="mb-4"
                                        color="primary"
                                        icon-color="primary"
                                        small
                                    >
                                        <v-row justify="start">
                                            <v-col cols="10">
                                                <h4 class="active"> {{ $t(appstatus.statusNm) }}</h4>
                                                <br>
                                                <p> {{ new Date(appstatus.insTime).toLocaleString() }}</p>
                                                <br>
                                                <p v-if="appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s08decisionPdfDownloadAppeal?stId=' + appstatus.id"> {{$t('Рухсатномани юклаб олинг!')}} </a></p>
                                                <p v-if="appstatus.status==='201' || appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s08decisionPdfDownloadAppeal?stId=' + appstatus.id"> {{$t('Аризангиз жавоб хатини юклаб олинг!')}} </a></p>
<br>
<!--                                                <p><b> Инспектор: </b>  {{ appstatus.userNm }} </p>-->

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
                    text: i18n.t('Менинг аризаларим'),
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
                {tab: i18n.t("Ариза хақида умумий маълумот")},
                {tab: i18n.t('Ариза ҳолати')},

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
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/ppay-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        //console.log(response.data.data)
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: i18n.t("Божхона тўловларини бўлиб-бўлиб тўлаш -") + _this.app.appNum,
                            to: '/services/ppay/' + _this.app.id,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error(i18n.t("Маълумот топилмади!"))
                        _this.$router.push("/applications");

                    }


                }).catch(function (error) {
                    console.log(error)
                    _this.$store.commit('setLoading', false)
                    _this.$toast.error(i18n.t("Маълумот топилмади!"))
                    _this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
