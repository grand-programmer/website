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
        <div class="page-content">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h3 align="center" class="lh-sm font-weight-bold primary-color">
                            Товарни
                            <template v-if="app.repubInOut===100">божхона ҳудудида</template>
                            <template v-else>ҳудудидан ташқарида</template>
                            қайта ишлаш учун рухсатнома бериш тўғрисида
                            <br>
                        </h3>
                    </v-col>
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
                                    v-if="1===2"

                                >
                                    <v-expansion-panel-header class="primary-color" v-if="1===2">
                                        Аризачи тўғрисида маълумотлар
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content v-if="1===2">
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
                                                <tr>
                                                    <td style="font-weight: 550">ЖШШИР</td>
                                                    <td>{{
                                                            typeof app.personPin !== 'undefined' ? app.personPin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Фамилияси, исми, шарифи</td>
                                                    <td>{{
                                                            typeof app.personFio !== 'undefined' ? app.personFio : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">СТИР</td>
                                                    <td>{{
                                                            typeof app.personTin !== 'undefined' ? app.personTin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Ариза юборилган ҳудуд</td>
                                                    <td>{{
                                                            typeof app.locationNm !== 'undefined' ? app.locationNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Манзили</td>
                                                    <td>{{
                                                            typeof app.personAddr !== 'undefined' ? app.personAddr : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Телефон рақами</td>
                                                    <td>{{
                                                            typeof app.personPhone !== 'undefined' ? app.personPhone : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Электрон манзили</td>
                                                    <td>{{
                                                            typeof app.personMail !== 'undefined' ? app.personMail : null
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
                                        Ариза умумий маълумотлари
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <tr>
                                                    <td class="text-left" style="font-weight: 550">
                                                        Ариза рақами
                                                    </td>
                                                    <td class="text-left" style="font-weight: 550">
                                                        {{
                                                            typeof app.appNum !== 'undefined' ? app.appNum : ''
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Ариза юборилган ҳудуд</td>
                                                    <td>{{
                                                            typeof app.locationNm !== 'undefined' ? app.locationNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Идентификация усули</td>
                                                    <td>{{
                                                            typeof app.methodIden !== 'undefined' ? (app.repubInOut === 100 ? methodIdentificationsIn[app.methodIden - 1].text : methodIdentificationsOut[app.methodIden - 1].text) : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Қайта ишлаш операцияларининг қиймати
                                                    </td>
                                                    <td>{{
                                                            typeof app.recycleCost !== 'undefined' ? app.recycleCost : null
                                                        }}
                                                        {{
                                                            typeof app.recycleCurrencyNm !== 'undefined' ? app.recycleCurrencyNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Қайта ишлаш муддати</td>
                                                    <td>{{
                                                            typeof app.recycleDeadlineDate !== 'undefined' ? app.recycleDeadlineDate : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Шартнома идентификация рақами</td>
                                                    <td>
                                                        <template v-if="typeof app.s03Contracts !== 'undefined'"
                                                                  v-for="contract in app.s03Contracts">
                                                            {{
                                                                typeof contract.contractIdenNumber !== 'undefined' ?
                                                                    contract.contractIdenNumber : null
                                                            }},
                                                        </template>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">Товар қайта ишланадиган жой манзили
                                                    </td>
                                                    <td>{{
                                                            typeof app.recycleAddress !== 'undefined' ? app.recycleAddress : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td style="font-weight: 550">Илова қилинган файллар</td>
                                                    <td>
                                                        <template v-if="typeof app.docs !== 'undefined'"
                                                                  v-for="doc in app.docs">
                                                            {{
                                                                typeof doc.docname !== 'undefined' ?
                                                                    doc.docname + " - (" + doc.docTypeName + ")" : null
                                                            }},
                                                        </template>
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.orgPermission !== 'undefined' && app.orgPermission">
                                                    <td style="font-weight: 550">Ваколатли органлар рухсатномаси</td>
                                                    <td>
                                                        {{
                                                            typeof app.orgPermission !== 'undefined' ? app.orgPermission : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr v-if="typeof app.replProductNm !== 'undefined' && app.replProductNm">
                                                    <td style="font-weight: 550">Алмаштириладиган эквивалент товар</td>
                                                    <td>
                                                        {{
                                                            typeof app.replProductNm !== 'undefined' ? app.replProductNm : null
                                                        }}
                                                    </td>
                                                </tr>

                                            </template>
                                        </v-simple-table>

                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                tovar-->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header>
                                        Товарлар тўғрисида маълумотлар
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <template v-for="(product,key) in app.s03Commodities">
                                            <v-col><h5 style="font-weight: bold">{{ key + 1 }} - товар номи
                                                {{ product.cmdtNm }}</h5></v-col>
                                            <v-simple-table>
                                                <template v-slot:default>

                                                    <tbody>


                                                    <tr v-if="typeof product.hsCode !=='undefined'">
                                                        <td style="font-weight: 550">ТИФ ТН коди</td>
                                                        <td>{{
                                                                typeof product.hsCode !== 'undefined' ? product.hsCode : ""
                                                            }} - {{
                                                                typeof product.hsNm !== 'undefined' ? product.hsNm : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtNm !=='undefined'">
                                                        <td style="font-weight: 550">Товар номи</td>
                                                        <td>{{
                                                                typeof product.cmdtNm !== 'undefined' ? product.cmdtNm : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtNetto !=='undefined'">
                                                        <td style="font-weight: 550">Асосий ўлчов бирлигидаги миқдори
                                                        </td>
                                                        <td>{{
                                                                typeof product.cmdtNetto !== 'undefined' ? product.cmdtNetto : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtQty !=='undefined'">
                                                        <td style="font-weight: 550">Қўшимча ўлчов бирлигидаги миқдори
                                                        </td>
                                                        <td>{{
                                                                typeof product.cmdtQty !== 'undefined' ? product.cmdtQty : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtCost !=='undefined'">
                                                        <td style="font-weight: 550">Товар қиймати</td>
                                                        <td>{{
                                                                typeof product.cmdtCost !== 'undefined' ? product.cmdtCost : ""
                                                            }} {{
                                                                typeof product.currencyNm !== 'undefined' ? product.currencyNm : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtStatusNm !=='undefined'">
                                                        <td style="font-weight: 550">Товар мақоми</td>
                                                        <td>{{
                                                                typeof product.cmdtStatusNm !== 'undefined' ? product.cmdtStatusNm : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="typeof product.cmdtStatus !=='undefined' && product.cmdtStatus ==='3' && product.s03CommodityDops.length>0">
                                                        <td style="font-weight: 550">Қайта ишлаш махсулотларининг чиқиш
                                                            нормаси
                                                        </td>
                                                        <td>


                                                            <v-list nav dense >
                                                                <v-list-item-group v-model="headerHighlight" color="primary">
                                                                    <v-list-item >
                                                                        <v-list-item-content>Товар номи
                                                                        </v-list-item-content>
                                                                        <v-list-item-content>Товар миқдори
                                                                        </v-list-item-content>
                                                                    </v-list-item>
                                                                    <v-list-item
                                                                        v-for="subProduct in product.s03CommodityDops" :key="subProduct">
                                                                        <v-list-item-content>{{
                                                                                subProduct.mainCmdtNm
                                                                            }}
                                                                        </v-list-item-content>
                                                                        <v-list-item-content>{{
                                                                                subProduct.cmdtQty
                                                                            }}
                                                                        </v-list-item-content>
                                                                    </v-list-item>
                                                                </v-list-item-group>
                                                            </v-list>

                                                        </td>
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
                                                <p v-if="appstatus.status==='100'" style="font-size: 15px"><a
                                                    :href="'https://qaror.customs.uz/s03decisionPdfDownloadAppeal?stId=' + appstatus.id">
                                                    Ариза шаклини юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='600'" style="font-size: 15px"><a
                                                    :href="'https://d-qaror.customs.uz/s03decisionPdfDownloadAppeal?stId=' + appstatus.id">
                                                    Реестрга киритилганлиги тўғрисида қарорни юклаб олинг! </a></p>
                                                <p v-if="appstatus.status==='201' && appstatus.comment.length>0" style="font-size: 15px; font-style: italic">
                                                    {{ appstatus.comment }}
                                                </p>
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
                                        v-if="(key === app.history.length - 1) && app.history[app.history.length - 1].status!=='600'"
                                    >
                                        <v-row justify="start">
                                            <v-col cols="10">
                                                <h4> Якуний хулоса </h4>
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
import ServicePage from "../index";
import List from "../intellectual2/list";
import ListItem from "../../../dashboard/component/ListItem";

export default {
    components: {ListItem, List, ServicePage},
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
            headerHighlight:0,
            methodIdentificationsIn: [
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш",
                    value: 1
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш",
                    value: 2
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш",
                    value: 3
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш",
                    value: 4
                },
                {text: "Бошқа усуллар", value: 5}
            ],
            methodIdentificationsOut: [
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарга ваколатли шахс ва (ёки) божхона органи томонидан муҳрлар қўйиш ва, зарур бўлган ҳолларда, штамплар қўйиш, рақамли ва (ёки) бошқа турда тамғалаш",
                    value: 1
                },
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарни батафсил тавсифлаш, уни суратга тушириш ёки бошқа ўлчамларда тасвирлаш",
                    value: 2
                },
                {
                    text: "қайта ишлаш учун олиб чиқилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва уни қайта ишлаш маҳсулотини тадқиқ этиш натижаларини қиёслаш",
                    value: 3
                },
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарнинг завод ва серия рақамлари тарзида мавжуд бўлган тамғалашдан ёхуд бошқача тамғалашдан фойдаланиш",
                    value: 4
                },
                {text: "Бошқа усуллар", value: 5}
            ],

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
            window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.product.id;
        },
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/recycle-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: "Қайта ишлаш учун рухсатнома бериш -" + _this.app.appNum,
                            to: '/services/recycle/' + _this.app.appId,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error("Маълумот топилмади!")
                        //_this.$router.push("/applications");

                    }


                }).catch(function (error) {
                    _this.$store.commit('setLoading', false)
                    _this.$toast.error("Маълумот топилмади!")
                    //_this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
