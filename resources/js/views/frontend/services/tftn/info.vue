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
                    <h3 class="pb-5"><b>{{ $t('Ариза рақами') }}: </b>{{ app.appNum }}</h3>
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
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header class="primary-color">
                                        {{ $t('Аризачи тўғрисида маълумотлар') }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{ $t('Ариза рақами') }}
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
                                                    <td style="font-weight: 550">{{ $t('Фамилияси, исми, шарифи') }}</td>
                                                    <td>{{
                                                            typeof app.fullName !== 'undefined' ? app.fullName : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td style="font-weight: 550">{{ $t('Ариза юборилган ҳудуд') }}</td>
                                                    <td>{{
                                                            typeof app.locationNm !== 'undefined' ? app.locationNm : null
                                                        }} {{
                                                            typeof app.postNm !== 'undefined' ? app.postNm : null
                                                        }}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td style="font-weight: 550">{{ $t('Телефон рақами') }}</td>
                                                    <td>{{
                                                            typeof app.phone !== 'undefined' ? app.phone : null
                                                        }}
                                                    </td>
                                                </tr>


                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                tovar-->
                                <v-expansion-panel v-if="app.s05Commodities" v-for="(commodity,ckey) in app.s05Commodities"
:key="ckey"
                                >
                                    <v-expansion-panel-header>
                                        {{ $t('Товар') }} {{ckey+1}} {{ $t('тўғрисида асосий маълумотлар') }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                            <v-simple-table >
                                                <template v-slot:default>
                                                    <tbody>
                                                    <tr>
                                                        <td style="font-weight: 550">{{ $t('Тижорат номи') }}</td>
                                                        <td>{{
                                                                typeof commodity.tradeName !== 'undefined' ? commodity.tradeName : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-weight: 550">{{ $t('Товар маркаси') }}</td>
                                                        <td>{{
                                                                typeof commodity.tradeMark !== 'undefined' ? commodity.tradeMark : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-weight: 550">{{ $t('Товар модели') }}</td>
                                                        <td>{{
                                                                typeof commodity.model !== 'undefined' ? commodity.model : ""
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr v-if="commodity.basicQty">
                                                        <td style="font-weight: 550">{{ $t('Намуналар') }}</td>
                                                        <td>{{
                                                                typeof commodity.basicQty !== 'undefined' ? commodity.basicQty : ""
                                                            }}
                                                            {{
                                                                typeof commodity.extraUnits !== 'undefined' && typeof getOlcham(commodity.extraUnits) !== 'undefined' ? getOlcham(commodity.extraUnits)['text'] : ""
                                                            }}

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="font-weight: 550">{{ $t('Илова қилинган файллар') }}</td>
                                                        <td>
                                                            <template v-if="typeof commodity.s05Earxivs !== 'undefined'"
                                                                      v-for="doc in commodity.s05Earxivs">
                                                                {{
                                                                    typeof doc.docNameEx !== 'undefined' ?
                                                                        doc.docNameEx + " - (" + doc.docTypeName +")" : null
                                                                }},
                                                            </template>
                                                        </td>
                                                    </tr>

                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                            </v-expansion-panels>

                        </v-tab-item>
                        <v-tab-item>
                            <v-timeline
                                v-if="typeof app.s05StatusHList !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key) in app.s05StatusHList">
                                    <v-timeline-item
                                        class="mb-4"
                                        color="primary"
                                        icon-color="primary"
                                        small
                                    >
                                        <v-row justify="start">
                                            <v-col cols="10">
                                                <h4 class="active"> {{ $t(appstatus.statusNm) }}</h4>
                                                <p> {{ new Date(appstatus.insTime).toLocaleString() }}</p>

                                                <p v-if="appstatus.status==='111'" style="font-size: 15px"><a
                                                    :href="'https://qaror.customs.uz/s05decisionPdfDownloadAppeal/?stId=' + appstatus.id">
                                                    {{ $t('Қарорни юклаб олинг!') }} </a></p>
                                                <p v-if="typeof appstatus.userNm!=='undefined' && appstatus.userNm && appstatus.status!=='100'" style="font-size: 15px; margin-top: 10px">
                                                    {{ $t('Маъсул ҳодим:') }} {{appstatus.userNm}}
                                                </p>
                                                <p v-if="typeof appstatus.comments!=='undefined' && appstatus.comments" style="font-size: 15px; margin-top: 10px">
                                                    {{ $t('Изоҳ:') }} {{appstatus.comments}}
                                                </p>
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
            olchamlar: [
                {'value': '006', 'text': i18n.t('м')},
                {'value': '055', 'text': i18n.t('м2')},
                {'value': '112', 'text': i18n.t('л')},
                {'value': '113', 'text': i18n.t('м3')},
                {'value': '114', 'text': i18n.t('1000 м3')},
                {'value': '130', 'text': i18n.t('1000 л')},
                {'value': '162', 'text': i18n.t('кар')},
                {'value': '163', 'text': i18n.t('г')},
                {'value': '166', 'text': i18n.t('кг')},
                {'value': '246', 'text': i18n.t('1000 кВтч')},
                {'value': '305', 'text': i18n.t('КИ')},
                {'value': '306', 'text': i18n.t('г Д/И')},
                {'value': '715', 'text': i18n.t('пар')},
                {'value': '796', 'text': i18n.t('шт')},
                {'value': '797', 'text': i18n.t('100 шт')},
                {'value': '798', 'text': i18n.t('1000 шт')},
                {'value': '831', 'text': i18n.t('л100% сп.')},
                {'value': '841', 'text': i18n.t('кг H2O2')},
                {'value': '845', 'text': i18n.t('кг 90% с/в')},
                {'value': '852', 'text': i18n.t('кг К2О')},
                {'value': '859', 'text': i18n.t('кг КОH')},
                {'value': '861', 'text': i18n.t('кг N')},
                {'value': '863', 'text': i18n.t('кг NаОH')},
                {'value': '865', 'text': i18n.t('кг Р2О5')},
                {'value': '867', 'text': i18n.t('кг U')},
            ],
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
        downloadPdf() {
            this.dialog = false;
            window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.app.product.id;
        },
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/tftn-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data.data !== "undefined") {
                        _this.app = response.data.data.data
                        _this.breadcrumb_items.push({
                            text: i18n.t("ТИФ ТН кодини аниқлаш бўйича ариза -") + _this.app.appNum,
                            to: '/services/tftn/' + _this.app.id,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error(i18n.t("Маълумот топилмади!"))
                        //_this.$router.push("/applications");

                    }


                }).catch(function (error) {
                    _this.$store.commit('setLoading', false)
                    _this.$toast.error(i18n.t("Маълумот топилмади!"))
                    _this.$router.push("/applications");
                })


            }, 500)

        },
        getOlcham(code){
            let object =this.olchamlar.filter((olcham)=>{
                if (olcham && olcham['value'] === code) {
                    return olcham;
                }
            })
            if (typeof object !== 'undefined') return object[0]; else return null;

        },
        filterObject(objects, element, prop = 'value') {
            let object = objects.filter(function (item) {

                if (item && item[prop] === parseInt(element)) {
                    return item;
                }
            })
            if (typeof object !== 'undefined') return object[0]; else return null;
            //return (objects.find(object => { object[prop] === parseInt(element)}))
        },
    }
}
</script>
