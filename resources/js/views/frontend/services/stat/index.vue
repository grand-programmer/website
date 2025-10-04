<template>
  <router-view v-if="$route.path.indexOf('services/stat/')!== -1 ">

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
                  <h3 class="mb-2">{{ $t('Экспорт ва импорт бўйича маълумотларни олиш') }}</h3>
                </div>
              </div>
            </v-col>
            <v-col cols="3" offset="1">
              <v-btn large color="primary" class="my-5 " style=" width: 100%" @click="gotoService">
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
                    <template v-if="expPanel.content==='narx'">
                      <div class="price-block" v-if="list.tarifs && list.tarifs[1]">
                        <h4>{{ $t('Хизматдан фойдаланиш нархи') }}</h4>
                        <h5>{{
                            $t("Божхона юк декларацияси ва илова ҳужжатларини юклаб олиш нархи:")
                          }}</h5>
                        <p>- {{ list.tarifs[1][0].name }} - {{
                            $t("БҲМ {value}%", {value: list.tarifs[1][0].value})
                          }};</p>
                        <p>- {{ list.tarifs[2][0].name }} - {{ $t("БҲМ {value}%", {value: list.tarifs[2][0].value}) }}</p>
                        <h5>
                          {{
                            $t('Иккинчи ва тўртинчи хизматлар нархлари:')
                          }}</h5>
                        <v-row>
                          <v-col cols="6">
                            <p>- {{ list.tarifs[3][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[3][0].value}) }};</p>
                            <p>- {{ list.tarifs[4][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[4][0].value}) }};</p>
                            <p>- {{ list.tarifs[5][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[5][0].value}) }};</p>
                            <p>- {{ list.tarifs[6][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[6][0].value}) }};</p>
                          </v-col>
                          <v-col cols="6">

                            <p>- {{ list.tarifs[7][0].name }} -
                              {{ $t('хизмат тарифининг {value}%', {value: list.tarifs[7][0].value}) }};</p>
                          </v-col>
                        </v-row>
                        <h5>
                          {{
                            $t('Учинчи хизмат нархлари:')
                          }}</h5>
                        <v-row>
                          <v-col cols="6">
                            <p>- {{ list.tarifs[8][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[8][0].value}) }};</p>
                            <p>- {{ list.tarifs[9][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[9][0].value}) }};</p>
                            <p>- {{ list.tarifs[10][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[10][0].value}) }};</p>
                            <p>- {{ list.tarifs[11][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[11][0].value}) }};</p>
                            <p>- {{ list.tarifs[12][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[12][0].value}) }};</p>
                          </v-col>
                          <v-col cols="6">


                            <p>- {{ list.tarifs[13][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[13][0].value}) }};</p>
                            <p>- {{ list.tarifs[14][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[14][0].value}) }};</p>
                            <p>- {{ list.tarifs[15][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[15][0].value}) }};</p>
                            <p>- {{ list.tarifs[16][0].name }} -
                              {{ $t('БҲМ {value}%', {value: list.tarifs[16][0].value}) }};</p>
                            <p>- {{ list.tarifs[7][0].name }} -
                              {{ $t('хизмат тарифининг {value}%', {value: list.tarifs[7][0].value}) }};</p>
                          </v-col>
                        </v-row>
                      </div>
                    </template>
                    <template v-else v-for="(exp_content, expKey) in expPanel.content">

                      <p class="lh-lg"
                         v-html=" (expPanel.content.length > 1 ? (expKey + 1) + '.' : '') + ' ' + exp_content "></p>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="4" class="service_main_right_sidebar">

              <a href="/storage/files/statexim.mp4" class="video_link">
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

                    <span>{{ $t('Change Date') }}</span>
                  </v-tooltip>
                </template>
                <div class="d-flex justify-content-between">
                  <h4 class="card-title font-weight-light mt-2 ml-2">
                    {{ $t('Хизматдан фойдаланганлар') }}
                  </h4>
                  <p class="green--text card-title font-weight-light mt-2 ml-2">14500 {{ $t('та') }} </p>
                </div>


                <p class="d-inline-flex font-weight-light ml-2 mt-1">
                  {{ $t('Бугун') }}
                  <v-icon
                      color="green"
                      small
                      class="font-weight-bold ml-1"
                  >
                    mdi-arrow-up
                  </v-icon>
                  <span class="green--text font-weight-bold"> 55%</span>
                  <span class="green--text mx-1">(155 {{ $t('та') }}) </span>

                  {{ $t('ўртача кунлик кўрсаткич') }} (<span class="green--text">120 {{ $t('та') }}</span>) {{ $t('дан') }}
                </p>
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
  name: "StatMain",
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
          text: i18n.t('Экспорт ва импорт бўйича маълумотларни олиш'),
          to: '/services/stat',
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
          content: [i18n.t("Аризачи ЯИДХПда рўйхатдан ўтади, ариза шаклини тўлдиради ва ваколатли органга юборади"), this.$t("Тизим томонидан ариза кўриб чиқилиб, тўлов қилинган бўлса натижаси кўрсатилади.")],
        },
        {
          title: i18n.t("Хизмат билан боғлиқ саволлар юзасидан боғланиш"),
          content: [this.$t("Тел: 55-502-76-00 (ички:75-16), Почта: info@customs.uz")]
        },
        {
          title: i18n.t("Хизматдан фойдаланувчилар"),
          content: [i18n.t('Жисмоний ва Юридик шахслар')]
        },
        {
          title: i18n.t("Хизматни кўрсатиш учун керак бўладиган ҳужжатлар"),
          content: [i18n.t('Талаб этилмайди')]
        },
        {
          title: i18n.t("Хизматни кўрсатиш муддати"),
          content: [i18n.t('Автоматик тарзда')]
        },
        {
          title: i18n.t("Хизматни кўрсатишнинг ҳуқуқий асоси"),
          content: ['<a href="https://lex.uz/docs/3844549">' + i18n.t('Ўзбекистон Республикаси Вазирлар Маҳкамасининг "Товарларни божхонада электрон шаклда декларациялаш тартибини янада такомиллаштириш тўғрисида" 31.07.2018 йилдаги 605-сонли қарори') + '</a>']
        },
        {
          title: i18n.t("Хизмат нархи"),
          content: 'narx'
        },

      ],
      list: {
        tarifs: []
      }
    }
  },
  methods: {
    async getTariffs() {
      await axios.get('/api/v1/data/tariffs').then(res => {
        this.list.tarifs = JSON.parse(JSON.stringify(res.data))
      })
    },
    async gotoService(value) {
      if (this.$auth.check()) {
        await axios.post('/api/v1/statservice', {
          tin: this.$auth.user().tin,
          pin: this.$auth.user().pin,
        }).then(res => {
          console.log(res)
          if (res.data.data.id) {
            this.$router.push('/services/stat/' + res.data.data.id)
          }
        }).catch(e => {
          console.log(e.response)
          this.$toast.error(this.$t('Ариза яратишда хатолик содир бўлди'));
        })
        // else  this.$toast.warning(this.$t('Хизмат фақат юридик шахслар учун тақдим этилади'))
      } else this.$toast.warning(this.$t('Авторизациядан ўтиш талаб этилади'))
    }
  },
  mounted() {
    this.getTariffs()
  },
  computed: {
    tarifs() {
      return this.list.tarifs
    }
  }
}
</script>
<style lang="scss">

.price-block {


  h5 {
    color: var(--mycolor);
    font-size: 14px;
    margin: 10px 5px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>

