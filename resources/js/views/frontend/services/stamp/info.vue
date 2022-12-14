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

                        <v-tab-item>
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
                                                <tr v-if="typeof app.personFullOrLegalName !== 'undefined'">
                                                    <td style="font-weight: 550">Аризачи</td>
                                                    <td>{{
                                                            typeof app.personFullOrLegalName !== 'undefined' ? app.personFullOrLegalName : null
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
                                                <tr v-if="typeof app.personEmail !== 'undefined' && app.personEmail">
                                                    <td style="font-weight: 550">Аризачининг эмаил манзили</td>
                                                    <td>{{
                                                            typeof app.personEmail !== 'undefined' ? app.personEmail : null
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
                                                <tr v-if="typeof app.personPinOrTin !== 'undefined' && app.personPinOrTin">
                                                    <td style="font-weight: 550">Аризачининг ЖШШИР/ СТИРи</td>
                                                    <td>{{
                                                            typeof app.personPinOrTin !== 'undefined' ? app.personPinOrTin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.locationName !== 'undefined' && app.locationName">
                                                    <td style="font-weight: 550">Танланган божхона бошқармаси</td>
                                                    <td>{{
                                                            typeof app.locationName !== 'undefined' ? app.locationName : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.trailerTypeNm !== 'undefined' && app.trailerTypeNm">
                                                    <td style="font-weight: 550">Автотранспорт воситаси тури</td>
                                                    <td>{{
                                                            typeof app.trailerTypeNm !== 'undefined' ? app.trailerTypeNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.trailerBrend !== 'undefined' && app.trailerBrend">
                                                    <td style="font-weight: 550">Автотранспорт русуми (маркаси)</td>
                                                    <td>{{
                                                            typeof app.trailerBrend !== 'undefined' ? app.trailerBrend : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.productionDate !== 'undefined' && app.productionDate">
                                                    <td style="font-weight: 550">Ишлаб чиқарилган санаси</td>
                                                    <td>{{
                                                            typeof app.productionDate !== 'undefined' ? app.productionDate : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.stateNumber !== 'undefined' && app.stateNumber">
                                                    <td style="font-weight: 550">Давлат рақами белгиси</td>
                                                    <td>{{
                                                            typeof app.stateNumber !== 'undefined' ? app.stateNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.vinNumber !== 'undefined' && app.vinNumber">
                                                    <td style="font-weight: 550">Идентификация рақами (VIN)</td>
                                                    <td>{{
                                                            typeof app.vinNumber !== 'undefined' ? app.vinNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.techPassportNumber !== 'undefined' && app.techPassportNumber">
                                                    <td style="font-weight: 550">Гувоҳнома серия рақами</td>
                                                    <td>{{
                                                            typeof app.techPassportNumber !== 'undefined' ? app.techPassportNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.containerNumber !== 'undefined' && app.containerNumber">
                                                    <td style="font-weight: 550">Контейнер рақами</td>
                                                    <td>{{
                                                            typeof app.containerNumber !== 'undefined' ? app.containerNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.containerType !== 'undefined' && app.containerType">
                                                    <td style="font-weight: 550">Контейнер тури</td>
                                                    <td>{{
                                                            typeof app.containerType !== 'undefined' ? app.containerType : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.containerVase !== 'undefined' && app.containerVase">
                                                    <td style="font-weight: 550">Тара вазни</td>
                                                    <td>{{
                                                            typeof app.containerVase !== 'undefined' ? app.containerVase : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.containerSize !== 'undefined' && app.containerSize">
                                                    <td style="font-weight: 550">Ташқи ўлчамлари</td>
                                                    <td>{{
                                                            typeof app.containerSize !== 'undefined' ? app.containerSize : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.containerFeature !== 'undefined' && app.containerFeature">
                                                    <td style="font-weight: 550">Конструкциянинг асосий ҳусусиятлари</td>
                                                    <td>{{
                                                            typeof app.containerFeature !== 'undefined' ? app.containerFeature : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.s09EarxivList !== 'undefined' && app.s09EarxivList">
                                                    <td style="font-weight: 550">Юкланган файллар</td>
                                                    <td>
                                                        <template v-for="(file,index) in app.s09EarxivList" v-if="file">
                                                            {{index>0?', ':''}} {{file.docTypeName}} - {{file.docname}}
                                                        </template>
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
                                v-if="typeof app.s09StatusHList !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key,index) in app.s09StatusHList">
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
                                                <p v-if="appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s09decisionPdfDownloadAppeal?stId=' + appstatus.id"> Рухсатномани юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='201' || appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s09decisionPdfDownloadAppeal?stId=' + appstatus.id"> Аризангиз жавоб хатини юклаб олинг! </a></p>
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
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/stamp-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        //console.log(response.data.data)
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: "Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш -" + _this.app.appNum,
                            to: '/services/stamp/' + _this.app.id,
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
