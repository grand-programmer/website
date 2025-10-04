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
              {{ $t('Товарни') }}
              <template v-if="app.repubInOut===100">{{ $t('божхона ҳудудида') }}</template>
              <template v-else>{{ $t('ҳудудидан ташқарида') }}</template>
              {{ $t('қайта ишлаш учун рухсатнома бериш тўғрисида') }}
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
                    {{ $t('Аризачи тўғрисида маълумотлар') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="1===2">
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
                          <td style="font-weight: 550">{{ $t('ЖШШИР') }}</td>
                          <td>{{
                              typeof app.personPin !== 'undefined' ? app.personPin : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Фамилияси, исми, шарифи') }}</td>
                          <td>{{
                              typeof app.personFio !== 'undefined' ? app.personFio : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('СТИР') }}</td>
                          <td>{{
                              typeof app.personTin !== 'undefined' ? app.personTin : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Ариза юборилган ҳудуд') }}</td>
                          <td>{{
                              typeof app.locationNm !== 'undefined' ? app.locationNm : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Манзили') }}</td>
                          <td>{{
                              typeof app.personAddr !== 'undefined' ? app.personAddr : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Телефон рақами') }}</td>
                          <td>{{
                              typeof app.personPhone !== 'undefined' ? app.personPhone : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Электрон манзили') }}</td>
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
                    {{ $t('Ариза умумий маълумотлари') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-simple-table>
                      <template v-slot:default>
                        <tr>
                          <td class="text-left" style="font-weight: 550">
                            {{ $t('Ариза рақами') }}
                          </td>
                          <td class="text-left" style="font-weight: 550">
                            {{
                              typeof app.appNum !== 'undefined' ? app.appNum : ''
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Ариза санаси') }}</td>
                          <td>{{
                              typeof app.appDate !== 'undefined' ? app.appDate : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Ариза юборилган ҳудуд') }}</td>
                          <td>{{
                              typeof app.locationNm !== 'undefined' ? app.locationNm : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Идентификация усули') }}</td>
                          <td>{{
                              typeof app.methodIden !== 'undefined' ? app.methodIden : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Қайта ишлаш операцияларининг қиймати') }}
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
                          <td style="font-weight: 550">{{ $t('Қайта ишлаш муддати') }}</td>
                          <td>{{
                              typeof app.recycleDeadline !== 'undefined' ? (app.recycleDeadline) + ' ' + $t('ой') : null
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Шартнома идентификация рақами') }}</td>
                          <td>
                            <template v-if="typeof app.contractsList !== 'undefined'"
                                      v-for="contract in app.contractsList">
                              {{
                                typeof contract.contractIdenNumber !== 'undefined' ?
                                    contract.contractIdenNumber : null
                              }},
                            </template>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 550">{{ $t('Товар қайта ишланадиган жой манзили') }}
                          </td>
                          <td>{{
                              typeof app.recycleAddress !== 'undefined' ? app.recycleAddress : null
                            }}
                          </td>
                        </tr>

                        <tr>
                          <td style="font-weight: 550">{{ $t('Илова қилинган файллар') }}</td>
                          <td>
                            <template v-if="typeof list.docs !== 'undefined'"
                                      v-for="doc in list.docs">
                              {{
                                typeof doc.file_num !== 'undefined' ?
                                    doc.file_num + " - (" + doc.doc_type + " - " + doc.cd_id +  ")" : null
                              }},
                            </template>
                          </td>
                        </tr>

                        <tr v-if="typeof app.orgPermission !== 'undefined' && app.orgPermission">
                          <td style="font-weight: 550">{{ $t('Ваколатли органлар рухсатномаси') }}</td>
                          <td>
                            {{
                              typeof app.orgPermission !== 'undefined' ? app.orgPermission : null
                            }}
                          </td>
                        </tr>

                        <tr v-if="typeof app.replProductNm !== 'undefined' && app.replProductNm">
                          <td style="font-weight: 550">{{ $t('Алмаштириладиган эквивалент товар') }}</td>
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
                    {{ $t('Бирламчи товарлар тўғрисида маълумотлар') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>

                    <v-data-table
                        :headers="headers1"
                        :items="list.products"
                        :items-per-page="5"
                        :loading="loading.apps"
                        :no-data-text="$t('Маълумот топилмади')"
                        :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                        :hide-default-footer="false"
                    >
                      <template #item.cmdtId="{ item }">{{ list.products.indexOf(item) + 1 }}</template>
                    </v-data-table>

                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel

                >
                  <v-expansion-panel-header>
                    {{ $t('Иккиламчи товарлар тўғрисида маълумотлар') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>

                    <v-data-table
                        :headers="dopheadersComputed"
                        :items="list.dopProducts"
                        :items-per-page="5"
                        :loading="loading.dopProduct"
                        :no-data-text="$t('Маълумот топилмади')"
                        :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                        :hide-default-footer="false"
                    >
                      <template #item.cmdtDopId="{item}">{{ list.dopProducts.indexOf(item) + 1 }}</template>
                      <template #item.shareQty="{item}">{{ item.shareQty }} %</template>
                    </v-data-table>

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

                <template v-for="(appstatus,key) in app.history">
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
                        <p v-if="appstatus.status==='100' && appstatus.urlPdf" style="font-size: 15px"><a target="_blank"
                                                                                                          :href="appstatus.urlPdf">
                          {{ $t('Ариза шаклини юклаб олинг!') }} </a></p>
                        <p v-if="appstatus.status==='600' && appstatus.urlPdf" style="font-size: 15px"><a target="_blank"
                                                                                                          :href="appstatus.urlPdf">
                          {{ $t('Рухсатномани юклаб олинг!') }} </a></p>
                        <p v-if="appstatus.status==='201' && appstatus.urlPdf"
                           style="font-size: 15px; font-style: italic">
                          <a
                              :href="appstatus.urlPdf"  target="_blank">
                            {{ $t('Ариза жавобини юклаб олинг!') }} </a>
                        </p>
                        <br>
                        <p v-if="appstatus.userNm"><b> Инспектор: </b>  {{ appstatus.userNm }} </p>

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
                        <h4> {{ $t('Якуний хулоса') }} </h4>
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
        <v-row class="py-4"></v-row>


      </v-container>


    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import i18n from "../../../../i18n";
import ServicePage from "../index";

export default {
  components: {ServicePage},
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
      list:{
        docs:[],
        products: [],
        dopProducts: []
      },
      headers: [
        {text: i18n.t('№'), align: 'start', value: 'cmdtDopId'},
        {text: i18n.t('Махсулот номи'), align: 'start', value: 'cmdtNm1'},
        {text: i18n.t('Хомашё номи'), align: 'start', value: 'cmdtNm2'},
        {text: i18n.t('Нетто вазни (кг)'), align: 'start', value: 'cmdtNetto'},
        {text: i18n.t('Улуши'), align: 'start', value: 'shareQty'},
        {text: i18n.t('Қиймати'), align: 'start', value: 'cmdtCost'}
      ],
      headers1: [
        {text: i18n.t('№'), align: 'start', value: 'cmdtId'},
        {text: i18n.t('Мақоми'), align: 'start', value: 'cmdtStatusNm'},
        {text: i18n.t('Товар ТИФ ТН коди'), align: 'start', value: 'hsCode'},
        {text: i18n.t('Товар номи'), align: 'start', value: 'cmdtNm'},
        {text: i18n.t('Нетто вазни (кг)'), align: 'start', value: 'cmdtNetto'},
        {text: i18n.t('Қиймати'), align: 'start', value: 'cmdtCost'},
      ],
      oferta: false,
      showed: false,
      dialog: false,
      headerHighlight: 0,
      methodIdentificationsIn: [
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш"),
          value: 1
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш"),
          value: 2
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш"),
          value: 3
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш"),
          value: 4
        },
        {text: i18n.t("Бошқа усуллар"), value: 5}
      ],
      methodIdentificationsOut: [
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарга ваколатли шахс ва (ёки) божхона органи томонидан муҳрлар қўйиш ва, зарур бўлган ҳолларда, штамплар қўйиш, рақамли ва (ёки) бошқа турда тамғалаш"),
          value: 1
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарни батафсил тавсифлаш, уни суратга тушириш ёки бошқа ўлчамларда тасвирлаш"),
          value: 2
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва уни қайта ишлаш маҳсулотини тадқиқ этиш натижаларини қиёслаш"),
          value: 3
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарнинг завод ва серия рақамлари тарзида мавжуд бўлган тамғалашдан ёхуд бошқача тамғалашдан фойдаланиш"),
          value: 4
        },
        {text: i18n.t("Бошқа усуллар"), value: 5}
      ],

      items: [
        {tab: i18n.t("Ариза хақида умумий маълумот")},
        {tab: i18n.t("Ариза ҳолати")},

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
    repubTypeComputed() {
      return this.app.repubType
    },
    dopheadersComputed() {
      if (this.app.repubType === 2) {
        return this.headers.filter(headerItem => headerItem.value !== 'shareQty')
      }
      return this.headers
    },
  },
  methods: {
    async checkFile(file_id) {
      let response = null;
      response = await axios.get('/api/v1/ex_api/arxiv?file_id=' + file_id + '&pnfl=' + this.$auth.user().pin);
      if (response && response.data && response.data.count) {
        return response.data.data;
      }
      return false;
    },
    downloadPdf() {
      this.dialog = false;
      window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.product.id;
    },
    getAppData() {
      const _this = this;

      setTimeout(async () => {
        this.$store.commit('setLoading', true)
        await axios.get("/api/v1/response/route_recycle/route-apps/only/" + _this.$route.params.id).then(function (response) {

          if (typeof response.data.data !== "undefined") {
            _this.app = response.data.data[0]
            _this.breadcrumb_items.push({
              text: i18n.t("Қайта ишлаш учун рухсатнома бериш -") + _this.app.appNum,
              to: '/services/recycle/' + _this.app.appId,
              disabled: true,
              exact: true,
            })

            setTimeout(async() => {
              await _this.getHistory()
              await _this.getCommodities()
              await _this.getDopCommodities()
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
          //_this.$router.push("/applications");
        })


      }, 200)

    },
    async getHistory() {
      const _this = this
      await axios.get("/api/v1/response/route_recycle/route-status-history/" + _this.$route.params.id).then(function (response) {

        if (typeof response.data.data !== "undefined") {
          _this.app.history = response.data.data

        } else {
          _this.$toast.error(i18n.t("Ариза тарихи олишда хатолик юз берди!"))
          //_this.$router.push("/applications");

        }


      }).catch(function (error) {
        console.log(error)
        _this.$toast.error(i18n.t("Ариза тарихи олишда хатолик юз берди!"))
        //_this.$router.push("/applications");
      })

    },
    async getCommodities() {
      const _this = this
      await axios.get("/api/v1/response/route_recycle/route-commodity/" + _this.$route.params.id).then(function (response) {

        if (typeof response.data.data !== "undefined") {
          _this.list.products = response.data.data

        } else {
          _this.$toast.error(i18n.t("Ариза товарларини олишда хатолик юз берди!"))
          //_this.$router.push("/applications");

        }


      }).catch(function (error) {
        console.log(error)
        _this.$toast.error(i18n.t("Ариза товарларини олишда хатолик юз берди!"))
        //_this.$router.push("/applications");
      })

    },
    async getDopCommodities() {
      const _this = this
      await axios.get("/api/v1/response/route_recycle/route-commoditydop/" + _this.$route.params.id).then(function (response) {

        if (typeof response.data.data !== "undefined") {
          _this.list.dopProducts = response.data.data

        } else {
          _this.$toast.error(i18n.t("Ариза товарларини олишда хатолик юз берди!"))
          //_this.$router.push("/applications");

        }


      }).catch(function (error) {
        console.log(error)
        _this.$toast.error(i18n.t("Ариза товарларини олишда хатолик юз берди!"))
        //_this.$router.push("/applications");
      })

    }
  },
  watch:{
    'app.earxivList':{
      handler(val){
        this.list.docs = []
        const _this=this
        val.forEach(async arxivItem=>{
          const data = await _this.checkFile(arxivItem.fileId)
          _this.list.docs.push(...data)
        })

      }
    }
  }
}
</script>

