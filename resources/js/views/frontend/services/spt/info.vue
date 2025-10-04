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
            <v-container class="pb-6">
                <v-row>
                    <h3 class="pb-5"><b>{{ $t('Ариза рақами:') }}</b>{{ app.appNum?app.appNum:null }}</h3>
                    <br>
                </v-row>
                <v-row class="pb-10">
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
                            <v-expansion-panels accordion v-model="panel">
                                <v-expansion-panel
                                    :key="1"
                                    class="my-2"
                                >
                                    <v-expansion-panel-header color="primary" style="color: #fff">
                                        {{ $t('Умумий маълумотлар') }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && korxonaRahbari && korxonaRahbari[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold" >{{ $t('Корхона рахбари') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.s10CompanyPersons !== 'undefined' && korxonaRahbari && korxonaRahbari[0]" >
                                                    <td style="font-weight: 550">{{ $t('Ф.И.О') }}</td>
                                                    <td>{{
                                                            korxonaRahbari[0].fullName
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.s10CompanyPersons !== 'undefined' && korxonaRahbari && korxonaRahbari[0]" >
                                                    <td style="font-weight: 550">{{ $t('ID-карта (паспорт) маълумотлари') }}</td>
                                                    <td>{{
                                                            korxonaRahbari[0].passport
                                                        }}
                                                    </td>
                                                </tr>
                                                <!--
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
                                                </tr>-->


                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && korxonaRahbari && korxonaRahbari[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Юридик шахс СТИРи, номи ва манзили') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.legalName !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Ташкилот номи') }}</td>
                                                    <td>{{
                                                            app.legalName
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.tin !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Ташкилот СТИРИ') }}</td>
                                                    <td>{{
                                                            app.tin
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.address !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Ташкилот манзили') }}</td>
                                                    <td>{{
                                                            app.address
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.vioType !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Ариза тури') }}</td>
                                                    <td>{{
                                                            app.vioType
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.lineOfWork !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Ариза йўналиши') }}</td>
                                                    <td>{{
                                                            app.lineOfWork
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.workAbout !== 'undefined'" >
                                                    <td style="font-weight: 550">{{ $t('Фаолият ҳақида') }}</td>
                                                    <td>{{
                                                            app.workAbout
                                                        }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && tasischilar && tasischilar[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Корхона таъсисчилари') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="tasischiItem in tasischilar" >
                                                    <td style="font-weight: 550">{{tasischilar.indexOf(tasischiItem) + 1}} {{ $t('- таъсисчи') }}</td>
                                                    <td>{{ tasischiItem.fullName }} ({{ tasischiItem.passport }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel
                                    :key="2"
                                    class="my-2"
                                >
                                    <v-expansion-panel-header color="primary" style="color: #fff" >
                                        {{ $t('Қўшимча маълумотлар') }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && korxonaBuxgalter && korxonaBuxgalter[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold" >{{ $t('Корхона бухгалтери') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-if="typeof app.s10CompanyPersons !== 'undefined' && korxonaBuxgalter && korxonaBuxgalter[0]" >
                                                    <td style="font-weight: 550">{{ $t('Ф.И.О') }}</td>
                                                    <td>{{
                                                            korxonaBuxgalter[0].fullName
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.s10CompanyPersons !== 'undefined' && korxonaBuxgalter && korxonaBuxgalter[0]" >
                                                    <td style="font-weight: 550">{{ $t('ID-карта (паспорт) маълумотлари') }}</td>
                                                    <td>{{
                                                            korxonaBuxgalter[0].passport
                                                        }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && vakolatlishaxslar && vakolatlishaxslar[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Ваколатли шахслар') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="vakolatliItem in vakolatlishaxslar" >
                                                    <td style="font-weight: 550">{{vakolatlishaxslar.indexOf(vakolatliItem) + 1}} {{ $t('- ваколатли шахс') }}</td>
                                                    <td>{{ vakolatliItem.fullName }} ({{ vakolatliItem.passport }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && brokerlar && brokerlar[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Брокерлар') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="brokerItem in brokerlar" >
                                                    <td style="font-weight: 550">{{brokerlar.indexOf(brokerItem) + 1}} {{ $t('- брокер') }}</td>
                                                    <td>{{ brokerItem.fullName }} ({{ brokerItem.passport }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && shippings && shippings[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Бир турдаги етказиб берувчилар') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="shippingItem in shippings" >
                                                    <td style="font-weight: 550">{{shippings.indexOf(shippingItem) + 1}} {{ $t('- етказиб бурувчи') }}</td>
                                                    <td>{{ shippingItem.legalName }} ({{ shippingItem.legalAddress }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <v-simple-table v-if="app && typeof app.s10CompanyPersons !== 'undefined' && owners && owners[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="ownerItem in owners" >
                                                    <td style="font-weight: 550">{{owners.indexOf(ownerItem) + 1}} {{ $t('- бино, иншоот ва майдонча') }}</td>
                                                    <td>{{ ownerItem.legalName }} ({{ ownerItem.legalAddress }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <v-simple-table v-if="app && typeof app.s10Earxivs !== 'undefined' && flats && flats[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="ownerItem in flats" >
                                                    <td style="font-weight: 550">{{flats.indexOf(ownerItem) + 1}} {{ $t('- бино, иншоот ва майдонча') }}</td>
                                                    <td>{{ ownerItem.contractNumber }} ({{ ownerItem.cadastralNumber }}) / ({{ ownerItem.depotAddress }})</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                        <v-simple-table v-if="app && typeof app.s10Earxivs !== 'undefined' && courses && courses[0]">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        <h4  class="py-4 font-weight-bold">{{ $t('Сертификатлари') }}</h4>
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="ownerItem in courses" >
                                                    <td style="font-weight: 550">{{flats.indexOf(ownerItem) + 1}} {{ $t('- сертификат') }}</td>
                                                    <td>{{ ownerItem.contractNumber }} ({{ ownerItem.cadastralNumber }}) / ({{ ownerItem.depotAddress }})</td>
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
                                v-if="typeof app.s10StatusH !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key,index) in app.s10StatusH">
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
                                                <p v-if="appstatus.status==='400'" style="font-size: 15px"><a
                                                    :href="'http://192.168.214.152:7070/DECAPP/s10decisionPdfDownloadAppeal/?appId=' + app.id">
                                                    {{ $t('Қарорни юклаб олинг!') }} </a></p>
                                                <p v-if="1===2 && appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s09decisionPdfDownloadAppeal?stId=' + appstatus.id"> {{ $t('Рухсатномани юклаб олинг!') }} </a></p>
                                                <p v-if="1===2 && appstatus.status==='201' || appstatus.status==='600'" style="font-size: 15px"> <a :href="'https://qaror.customs.uz/s09decisionPdfDownloadAppeal?stId=' + appstatus.id"> {{ $t('Аризангиз жавоб хатини юклаб олинг!') }} </a></p>
<br>
                                                <p> {{ appstatus.comment }} </p>

                                            </v-col>
                                    </v-row>
                                </v-timeline-item>
                        </template>

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
                {tab: i18n.t("Ариза ҳолати")}

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
        ...mapState(['loading']),
        korxonaRahbari() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 0)
        },
        korxonaBuxgalter() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 2)
        },
        tasischilar() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 1)
        },
        vakolatlishaxslar() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 3)
        },
        brokerlar() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 4)
        },
        shippings() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 5)
        },
        owners() {
          return this.app.s10CompanyPersons.filter(item => item.personType === 6)
        },
        flats() {
          return this.app.s10Earxivs.filter(item => item.docType === '1')
        },
        courses() {
          return this.app.s10Earxivs.filter(item => item.docType === '2')
        }

    },
    methods: {
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/vio-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {
                    if (typeof response.data.data !== "undefined") {
                        // console.log(response.data.data)
                        //console.log(response.data.data)
                        _this.app = response.data.data[0]
                        _this.breadcrumb_items.push({
                            text: i18n.t("Ваколатли иқтисодий оператор реестрига киришга ариза бериш -") + _this.app.appNum,
                            to: '/services/vio/' + _this.app.id,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)
                           //  _this.$router.push("/applications");
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
                    // _this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
