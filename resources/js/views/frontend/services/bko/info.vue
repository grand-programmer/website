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
                    <h3 class="pb-5"><b>Ариза рақами: </b>{{ app.murojatEntityDto?app.murojatEntityDto.num:null }}</h3>
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
                            <v-simple-table v-if="app && typeof app.murojatEntityDto !== 'undefined'">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        Ариза рақами
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{
                                                            typeof app.murojatEntityDto.num !== 'undefined' ? app.murojatEntityDto.num : ''
                                                        }}
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.murojatEntityDto.fio !== 'undefined'">
                                                    <td style="font-weight: 550">Аризачи</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.fio !== 'undefined' ? app.murojatEntityDto.fio : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.murojatEntityDto !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Аризачи телефон рақами</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.telNumber !== 'undefined' ? app.murojatEntityDto.telNumber : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.murojatEntityDto.email !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Аризачининг эмаил манзили</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.email !== 'undefined' ? app.murojatEntityDto.email : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.murojatEntityDto.g4adres !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Аризачининг манзили</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.g4adres !== 'undefined' ? app.murojatEntityDto.g4adres : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.murojatEntityDto.pinfl !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Аризачининг ЖШШИР</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.pinfl !== 'undefined' ? app.murojatEntityDto.pinfl : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.murojatEntityDto.rs !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Тўловчининг ҳисоб-варақ рақами</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.rs !== 'undefined' ? app.murojatEntityDto.pinfl : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.murojatEntityDto.mfo !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">МФО</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.mfo !== 'undefined' ? app.murojatEntityDto.mfo : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.murojatEntityDto.bank !== 'undefined' && app.murojatEntityDto">
                                                    <td style="font-weight: 550">Банк номи</td>
                                                    <td>{{
                                                            typeof app.murojatEntityDto.bank !== 'undefined' ? app.murojatEntityDto.bank : null
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
                {tab: "Ариза хақида умумий маълумот"},
                /*{tab: 'Ариза ҳолати'},*/

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
                axios.get("/api/v1/ex_api/tpo-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        console.log(response.data.data)
                        //console.log(response.data.data)
                        _this.app = response.data.data
                        _this.breadcrumb_items.push({
                            text: "Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш -" + _this.app.appNum,
                            to: '/services/tpo/' + _this.app.id,
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
                    // _this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
