<template>
  <router-view v-if="$route.path.indexOf('services/spt/')!== -1 ">

  </router-view>
  <div v-else>

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
        <v-container fluid>
          <v-row>
            <v-col cols="8">
              <div class="d-flex my-5  align-items-center">
                <img src="/img/icons/patent.png" style="height: 50px"/>
                <div class="d-flex flex-column justify-content-between ml-5">
                  <h3 class="mb-2">{{ $t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш') }}</h3>
                  <p class="mb-2"> {{
                      $t('Ўзбекистон Республикасининг божхона чегараси орқали олиб ўтилаётган ва Ўзбекистон Республикаси божхона ҳудудида қайта ишлаш жараёнида ҳосил бўлган товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарорни олиш учун ариза бериш')
                    }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="3" offset="1">
              <v-btn large color="primary" class="my-5 " style=" width: 100%" @click="openService">
                {{ $t('Хизматдан фойдаланиш') }}
              </v-btn>

            </v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="8">

              <v-expansion-panels multiple v-model="panel" class="mb-5">
                <v-expansion-panel v-for="(expPanel,key) in panels" :key="key" class="my-2">
                  <v-expansion-panel-header>
                    <b>{{ expPanel.title }}</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template v-for="(exp_content, expKey) in expPanel.content">
                      <p class="lh-lg"
                         v-html=" (expPanel.content.length > 1 ? (expKey + 1) + '.' : '') + ' ' + exp_content "></p>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="4" class="service_main_right_sidebar">

              <a :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"
                 class="video_link">
                <img src="/img/services/bg-services.png"/>
                <div><img src="/img/icons/play.svg"> <span>{{ $t('Йўриқнома') }}</span></div>
              </a>

              <base-material-chart-card
                  :data="dailySalesChart.data"
                  :options="dailySalesChart.options"
                  color="success"
                  hover-reveal
                  type="Line"
              >
                <template v-slot:reveal-actions>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                          v-bind="attrs"
                          color="info"
                          icon
                          v-on="on"
                      >
                        <v-icon
                            color="info"
                        >
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                    </template>

                    <span>Refresh</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                          v-bind="attrs"
                          light
                          icon
                          v-on="on"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </template>

                    <span>Change Date</span>
                  </v-tooltip>
                </template>
                <div class="d-flex justify-content-between">
                  <h4 class="card-title font-weight-light mt-2 ml-2">
                    {{ $t('Хизматдан фойдаланганлар') }}
                  </h4>
                  <p class="green--text card-title font-weight-light mt-2 ml-2">{{ $t('14500 та') }} </p>
                </div>


                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                  {{ $t('Бугун ') }}
                  <v-icon
                      color="green"
                      small
                      class="font-weight-bold ml-1"
                  >
                    mdi-arrow-up
                  </v-icon>
                  <span class="green--text font-weight-bold"> 55%</span>
                  <span class="green--text mx-1">{{ $t('(155 та)') }} </span>

                  {{ $t('ўртача кунлик кўрсаткич') }} <span class="green--text">{{ $t('(120 та)') }}</span>
                  {{ $t('дан ') }}
                </p>

                <!-- bu eskisi ruschasiga utkazganida tarjimasi yaxshi mano bermadi -->

                <!-- <p class="d-inline-flex font-weight-light ml-2 mt-1">
                    Бугун
                    <v-icon
                        color="green"
                        small
                        class="font-weight-bold ml-1"
                    >
                        mdi-arrow-up
                    </v-icon>
                    <span class="green--text font-weight-bold"> 55%</span>
                    <span class="green--text mx-1">(155 та) </span>

                    ўртача кунлик кўрсаткич (<span class="green--text">120 та</span>) дан
                </p> -->


                <!--
                                                <template v-slot:actions>
                                                    <v-icon
                                                        class="mr-1"
                                                        small
                                                    >
                                                        mdi-clock-outline
                                                    </v-icon>
                                                    <span class="caption grey&#45;&#45;text font-weight-light">updated 4 minutes ago</span>
                                                </template>-->
              </base-material-chart-card>


            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

  </div>
</template>
<script>
import i18n from "../../../../i18n";

export default {
  name: "SptMain",
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
          text: i18n.t('Хизматлар'),
          to: '/services',
          disabled: false,
          exact: true,
        },
        {
          text: i18n.t('Товарнинг келиб чиқиш мамлакатиы'),
          to: '/services/spt',
          disabled: true,
          exact: true,
        },
      ],
      panel: [0, 1],
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      },
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38],
          ],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      panels: [
        {
          title: i18n.t("Бу қандай ишлайди ?"),
          content: [i18n.t("Аризачи ЯИДХПда рўйхатдан ўтади, ариза шаклини тўлдиради ва ваколатли органга юборади"), this.$t("Божхона органи томонидан ариза кўриб чиқилиб, ариза юзасидан қарор қабул қилинади.")],
        },
        {
          title: i18n.t("Хизмат билан боғлиқ саволлар юзасидан боғланиш"),
          content: [this.$t("Тел: 55-502-76-00, Почта: info@customs.uz, телеграмм: t.me/OriginCountryDecisions")]
        },
        {
          title: i18n.t("Хизматдан фойдаланувчилар"),
          content: [i18n.t('Жисмоний шахс ва Юридик шахслар')]
        },
        {
          title: i18n.t("Хизматни кўрсатиш учун керак бўладиган ҳужжатлар"),
          content: [
            i18n.t('товарнинг фотосуратлари, чизмалари ёки паспорти'),
            i18n.t('ишлаб чиқарувчи ташкилот томонидан тақдим қилинган товарга тегишли бўлган ҳужжатлар'),
            i18n.t('товарни ишлаб чиқаришда икки ёки ундан ортиқ мамлакат иштирок этган бўлса, товарни етарли даражада қайта ишлаш мезонларига мувофиқлигини тасдиқловчи ҳужжатлар'),
            i18n.t('товарлар ишлаб чиқарилган давлатдаги экспертиза ташкилотларнинг экспертиза хулосалари ҳамда келиб чиқиш сертификати (агар мавжуд бўлса)'),
            i18n.t('ташқи савдо шартномаси (мавжуд бўлса)'),
            i18n.t('товарнинг келиб чиқиш сертификати (агар мавжуд бўлса)'),
            i18n.t('ваколатли шахснинг ваколатини тасдиқловчи ҳужжатлар (агар ваколатли шахс томонидан мурожаат қилинадиган бўлса)'),
            i18n.t('товарнинг келиб чиқишини аниқлаш учун муҳим бўлган қўшимча ҳужжатлар')
          ]
        },
        {
          title: i18n.t("Хизматни кўрсатиш муддати"),
          content: [i18n.t('Ариза божхона органига келиб тушган кундан бошлаб ўн иш куни ичида кўриб чиқилади')]
        },
        {
          title: i18n.t("Хизматни кўрсатишнинг ҳуқуқий асоси"),
          content: ['<a href="https://lex.uz/uz/docs/6845307">' + i18n.t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарорни қабул қилиш тартиби ҳақидаги низомни тасдиқлаш тўғрисида') + '</a>']
        },
        {
          title: i18n.t("Хизмат нархи"),
          content: [i18n.t('Божхона органлари томонидан товар бўйича дастлабки қарорни қабул қилганлик учун БҲМнинг 75 фоизи')]
        },

      ]
    }
  },
  methods: {
    openService() {
      if (this.$auth.check()) {
        this.$auth.plugins.http.post('/api/v1/response/route_spt/person',
            {
              "firstName": this.$auth.user().first_name,
              "surName": this.$auth.user().sur_name,
              "lastName": this.$auth.user().mid_name,
              "email": this.$auth.user().email,
              "pin": this.$auth.user().pin,
              "tin": this.$auth.user().tin,
              "perAdr": this.$auth.user().per_adr,
              "phone": this.$auth.user().phone,
              "personType": this.$auth.user().type === 1 ? 0 : 1,
              "legalName": (this.$auth.user().legal_info && JSON.parse(this.$auth.user().legal_info)) ? JSON.parse(this.$auth.user().legal_info)[0].le_name : ''
            }).then(res => {
          if (res.data.data && res.data.data.appId) {
            this.$router.push('/services/spt/' + res.data.data.appId)

          } else this.$toast.error(this.$t('Сервердан маълумот олишда хатолик юз берди!'));
        }).catch(e => {
          if (e.response.data && e.response.data.data.errors && e.response.data.data.errors[0] && e.response.data.data.errors[0].message) {
            this.$toast.error(e.response.data.data.errors[0].field + ' -' + e.response.data.data.errors[0].message);
            return false
          } else {
            this.$toast.error(e.response.statusText);
          }
        })
        //this.$router.push('/services/spt/create')
      } else {
        this.$toast.warning($t('Авторизациядан ўтиш талаб этилади'))
      }
    },
  }
}
</script>

