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
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h3 align="center" class="lh-sm  m-3 font-weight-bold primary-color">
              {{ $t('Экспорт ва импорт бўйича маълумотларни олиш') }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>


          <v-expansion-panels v-model="panel" multiple class="mb-10 fixed-color-tabs">
            <!--               arizachi -->

            <!--                yuk-->
            <v-expansion-panel

            >
              <v-expansion-panel-header>
                {{ $t('Ариза умумий маълумотлари') }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table class="py-2 resultTable" v-if="completedData">
                  <template v-slot:default>
                    <tbody>
                    <tr
                        v-for="item in completedData"
                        v-if="item.value"
                        :key="item.label"
                    >
                      <td style="max-width: 20%">{{ item.label }}</td>
                      <td style="width: 80%">
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center justify-content-center">
                            <template v-if="item.value">{{ item.value }}</template>
                            <template v-else>{{ $t('Филтр киритилмаган') }}</template>
                          </div>
                          <div v-if="item.type && item.type ==='payment' && paymeurl && !application.payment" class="pa-4"><b>Тўлов қилиш:</b>
                            <img @click="openPayme" style="height: 30px; cursor:pointer"
                                 src="https://cdn.payme.uz/payme-logos/logo/horizontal.svg"/>
                          </div>
                          <div v-if="item.type && item.type ==='result' && application.token" class="pa-4"><b>Натижа:</b>
                            <v-btn @click="openResult" color="primary" text size="x-small" style=" font-weight:bold; padding: 0 5px !important;"> Юклаб олиш </v-btn>
                          </div>
                        </div>
                      </td>
                    </tr>
                    </tbody>

                  </template>

                </v-simple-table>

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel

            >
              <v-expansion-panel-header>
                {{ $t('Маълумот ҳажми ва нарх') }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <template
                    v-if="![1,2,8].includes(application.status) && list.prices && (list.prices.reduce((sum, item) => sum + parseFloat(item.price), 0))>0">
                  <v-simple-table class="py-2 pt-1 resultTable" style="text-align: center">
                    <template v-slot:default>
                      <thead style="border-bottom: 1px solid #ccc">
                      <tr>
                        <td style="width: 200px">{{ $t('Таъриф номи') }}</td>
                        <td>{{ $t('Миқдор') }}</td>
                        <td>{{ $t('Нарх') }}</td>
                        <td>{{ $t('Таъриф ҳисоб - китоби') }}</td>

                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="listItem in list.prices">
                        <td style="max-width: 20%">
                          {{ listItem.tarif ? listItem.tarif['name_' + $i18n.locale] : $t('Аниқланмади') }}
                        </td>
                        <td style="width: 20%">{{ listItem.meta }}</td>
                        <td style="width: 20%">{{
                            (new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(listItem.price)).replace('$', '')
                          }} {{ $t('сўм') }}
                        </td>
                        <td>
                          <template v-if="listItem.tarif">
                            <template v-if="listItem.tariff_id==='7'">
                              {{ $t('хизмат тарифининг {value}%', {value: listItem.tarif.value}) }}
                            </template>
                            <template v-else>
                              {{ $t('БҲМ {value}%', {value: listItem.tarif.value}) }} ({{ $t('БҲМ миқдори:') }}{{
                                (new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                }).format(bhm)).replace('$', '')
                              }} {{ $t('сўм') }})
                            </template>
                          </template>
                        </td>
                      </tr>

                      <tr>
                        <td style="max-width: 20%;font-weight:bold;" colspan="2">{{ $t('Жами') }}</td>
                        <td style="width: 20%; font-weight:bold;" v-if="list.prices">

                          {{
                            (new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(list.prices.reduce((sum, item) => sum + parseFloat(item.price), 0))).replace('$', '')
                          }} {{ $t('сўм') }}


                        </td>
                        <td></td>

                      </tr>

                      </tbody>

                    </template>

                  </v-simple-table>
                </template>
                <template v-else>

                  <div class="d-flex flex-column align-items-center justify-content-center">

                    <h6 class="pa-10 text-center font-weight-bold text"
                        style="color: var(--mycolor)">
                      {{ (list.prices.length > 0) ? $t('Ушбу ариза бўйича маълумот топилмади') : '' }}</h6>
                  </div>
                </template>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>


        </v-row>
      </v-container>
    </div>
    <a class="all_news service" target="_blank" href="https://t.me/HsCodeDecisions">
      <img src="/public/images/telegram.png">


      <p> {{ $t('Саволларингизни йўлланг') }}
        <br>
        @HsCodeDecisions
      </p></a>
  </div>
</template>
<script>

import i18n from "../../../../i18n";

export default {
  name: "StatInfo",
  data() {
    return {
      bhm: null,
      paymeurl: null,
      application: {
        id: null,
        application_type: null,
        status: null,
        rejim: null,
        region: null,
        post: null,
        org: null,
        org_name: null,
        tftn: [],
        shartnoma: [],
        country: null,
        byud: [],
        isCreatedDate: true,
        isRejim: true,
        is_tsa: true,
        byudsanadan: null,
        byudsanagacha: null,
        statusName: null,
        appNum: null,
        payment: null,
        grafalar: [],
        token: null,
      },
      person: {
        type: 1, /// 1- fiz 0- yur
        fio: "",
        post: null,
        pin: null,
        tin: null,
        organization_name: i18n.t("Жисмоний шахс"),
        position: "0",
        phone: null,
        email: null,
        region: null,
      },
      application_types: [],
      list: {
        regions: [],
        posts: [],
        regimes: [],
        tftn: [],
        fields: [],
        countries: [],
        prices: []
      },
      tab: null,
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
      panel: [0, 1],
      loading: {
        country: false,
        post: false,
        fields: false,
        org: false,
        calculate: false
      },
      items:
          [
            {tab: i18n.t("Ариза хақида умумий маълумот")},
            {tab: i18n.t("Ариза ҳолати")},

          ]
    }
  },
  methods: {
    openPayme() {
      window.location.href = "https://checkout.paycom.uz/" + this.paymeurl
    },
    openResult() {
      window.location.href = "https://servicepdf.customs.uz/" + this.application.id + "/download?token="+ this.application.token + "&inn="+ (this.person.type === 0?this.person.tin:this.person.pin)
    },
    async getPrice() {
      const _this = this

      await axios.get('/api/v1/statservice/price/' + this.$route.params.id).then(res => {
        if (res.data.data) _this.list.prices = res.data.data
        if (res.data.bhm) _this.bhm = res.data.bhm
        if (res.data.payme) _this.paymeurl = res.data.payme
      }).catch((e) => {
        if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status

      })
    },
    setPersonData(data = null) {
      this.person.type = (this.$auth.user().type !== 2) ? 1 : 0;
      if (data) {
        this.person.pin = /*(typeof data['pin'] !== 'undefined') ? data['pin'] : */this.$auth.user().pin;
        this.person.tin = /*(typeof data['tin'] !== 'undefined') ? data['tin'] : */this.$auth.user().tin;
        this.person.perAdr = (typeof data['address'] !== 'undefined' && data['address']) ? data['address'] : this.$auth.user().per_adr;
        this.person.email = (typeof data['email'] !== 'undefined' && data['email']) ? data['email'] : this.$auth.user().email;
        this.person.phone = (typeof data['phone'] !== 'undefined' && data['phone']) ? data['phone'] : this.$auth.user().phone;
        /*if (typeof data['org_name'] !== 'undefined' ) {
          this.person.organization_name = data['org_name']
        } else*/
        {
          if (this.person.type === 0) {
            let legal_info = JSON.parse(this.$auth.user().legal_info)
            //console.log(legal_info[0].le_name)
            if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
              this.person.organization_name = legal_info[0].le_name
            } else this.person.organization_name = "";
          }
        }
      } else {
        this.person.pin = this.$auth.user().pin;
        this.person.tin = this.$auth.user().tin;
        this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
        this.person.perAdr = this.$auth.user().per_adr;
        this.person.email = this.$auth.user().email;
        this.person.phone = this.$auth.user().phone;

        if (this.person.type === 0) {
          let legal_info = JSON.parse(this.$auth.user().legal_info)
          //console.log(legal_info[0].le_name)
          if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
            this.person.organization_name = legal_info[0].le_name
          } else this.person.organization_name = "";
        }
      }
    },
    findElementInlist(list = [], search, searchKey = 'id', type = 'single') {
      if (typeof list !== 'object') return null
      const element = list.filter((valueItem, keyItem) => {
        if (search === valueItem[searchKey]) return valueItem
      })
      if (type === 'single') {
        if (element && typeof element[0] !== 'undefined') return element[0]
      } else return element
    },
    async getAppData() {
      const _this = this
      this.$store.commit('setLoading', true);
      await axios.get('/api/v1/statservice/' + this.$route.params.id, {
        params: {
          completed: 1
        }
      }).then(res => {

        if (res.status === 200) {

          _this.application = res.data.data
          _this.setPersonData(res.data.data)
          _this.application.region.forEach(item => {
            this.getPosts(item)
          })
          this.breadcrumb_items.push({
            text: _this.$t("Экспорт ва импорт бўйича маълумотларни олиш") + " " + (res.data.data.appNum ? ("- " + res.data.data.appNum) : ""),
            to: '/services/stat/info/' + res.data.data.id,
            disabled: true,
            exact: true,
          })
        }
        setTimeout(() => {
          this.$store.commit('setLoading', false);
        }, 200)
      }).catch(e => {
        this.$toast.error(this.$t('Хатолик юз берди'))
        this.$router.push('/applications')
        setTimeout(() => {
          this.$store.commit('setLoading', false);
        }, 200)
      })


    },
    async getPosts(code) {
      this.loading.post = true;
      const _this = this
      this.list.posts = [];
      await axios.get('/api/v1/data/post?code=' + code,).then(function (result) {
        if (typeof result.data !== 'undefined')
          _this.list.posts = result.data.posts
      }).catch(e => {
        console.log(e)
        _this.$toast.error(_this.$t('Пост маълумотларини олишда хатолик юз берди'));
      })
      this.loading.post = false;
    },
    async getRegimes() {
      this.loading.regime = true;
      const _this = this
      this.list.regimes = [];
      await axios.get('/api/v1/data/' + this.$route.params.id + '/regime').then(function (result) {
        if (typeof result.data !== 'undefined')
          _this.list.regimes = result.data
        _this.loading.regime = false;
      }).catch(e => {
        _this.loading.regime = false;
        console.log(e)
        _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
      })
      this.loading.regime = false;
    },
    async getFields() {
      this.loading.fields = true;

      const grafalar = JSON.parse(JSON.stringify(this.application.grafalar))
      const _this = this
      this.list.fields = [];
      await axios.get('/api/v1/data/' + this.$route.params.id + '/fields').then(function (result) {
        if (typeof result.data !== 'undefined')
          _this.list.fields = result.data.data
        _this.list.primaryFields = result.data.secondary
        _this.application.grafalar = (grafalar.length > 0) ? JSON.parse(JSON.stringify(grafalar)) : _this.application.grafalar
      }).catch(e => {
        console.log(e)
        _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
      })
      this.loading.fields = false;
    },
    async getBoshqarmalar() {
      const _this = this
      await this.$auth.plugins.http.get('/api/v1/data/region').then(function (result) {
        _this.list.regions = result.data
      })
    },
    async getCountries() {
      let root = this
      await this.$auth.plugins.http.get('/api/v1/data/country').then(result => {
        root.list.countries = result.data;
      })
    },

    async getApplicationTypes() {
      await axios.get('/api/v1/data/statservicetype').then(res => {
        console.log(res)
        this.application_types = res.data
      })
    },
    async getApplicationTarmoq() {
      await axios.get('/api/v1/data/statservice/' + this.$route.params.id + '/tarmoq').then(res => {

        this.list.netOrgs = res.data
      })
    },
  },
  async mounted() {
    await this.getAppData()
    await this.getBoshqarmalar()
    await this.getRegimes()
    await this.getFields()
    await this.getCountries()
    await this.getApplicationTypes()
    await this.getApplicationTarmoq()
    if (this.application.id)
      await this.getPrice()
  },
  computed: {
    additions() {
      if (!this.list.fields) return []
      if (this.application.application_type === 0) return Object.values(this.list.fields)
      else return Object.values(this.list.fields)
    },
    completedData() {
      const _this = this


      return [
        {label: i18n.t('Ариза рақами'), value: _this.application.appNum},
        {label: i18n.t('ТИФ иштирокчиси'), value: _this.application.org_name},
        {label: i18n.t('СТИР'), value: _this.person.tin},
        {label: i18n.t('Манзили'), value: _this.person.perAdr},
        {label: i18n.t('Телефон рақами'), value: _this.person.phone},
        {label: i18n.t('Электрон почта манзили'), value: _this.person.email},
        {
          label: i18n.t('Хизмат тури'),
          value: (_this.application.application_type !== null && _this.application_types[_this.application.application_type]) ? _this.application_types[_this.application.application_type].name : ''
        },
        {
          label: (_this.application.application_type !== 0) ? _this.$t('Илова хужжатлар тури') : _this.$t('Қўшимча белгиланган графалар'),
          value: (_this.application.grafalar && _this.application.grafalar.length > 0) ? _this.additions.filter(fieldItem => _this.application.grafalar.includes(fieldItem.code)).map(grafaItem => {
            return grafaItem.name;
          }).join(', ') : null
        },
        {
          label: i18n.t('Ҳудудий божхона бошқармаси'),
          value: (_this.application.region && _this.application.region.length > 0) ? _this.list.regions.filter(item => _this.application.region.includes(item.value)).map(el => el.text).join(', ') : null
        },
        {
          label: i18n.t('Пост'),
          value: (_this.application.post && _this.application.post.length > 0) ? _this.list.posts.filter(item => _this.application.post.includes(item.code)).map(el => el.name).join(', ') : ''
        },
        {
          label: i18n.t('Божхона режими'),
          value: (_this.application.rejim && _this.application.rejim.length > 0) ? _this.list.regimes.filter(item => _this.application.rejim.includes(item.id)).map(el => el.name).join(', ') : ''
        },
        {
          label: i18n.t('ТИФ ТН код'),
          value: (_this.application.tftn && _this.application.tftn.length > 0) ? _this.application.tftn.join(',') : null
        },
        {
          label: i18n.t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами'),
          value: (_this.application.shartnoma && _this.application.shartnoma.length > 0) ? _this.application.shartnoma.join(',') : null
        },
        {
          label: i18n.t('Давлат'),
          value: (_this.application.country !== null && _this.findElementInlist(_this.list.countries, _this.application.country, 'value')) ? _this.findElementInlist(_this.list.countries, _this.application.country, 'value').title : ''
        },
        {
          label: i18n.t('БЮДнинг тартиб рақами'),
          value: (_this.application.byud && _this.application.byud.length > 0) ? _this.application.byud.join(',') : null
        },
        {label: i18n.t('Статус'), value: _this.application.statusName, type:'result'},
        {
          label: i18n.t('Тўлов'),
          value: _this.application.payment ? this.$t('Тўлов килинган') : this.$t('Тўлов килинмаган'),
          type: 'payment'
        },
        {
          label: (this.application.application_type !== 2 && this.application.isCreatedDate) ? this.$t('БЮД тақдим этилган санадан') : this.$t('БЮД расмийлаштирилган санадан'),
          value: this.application.byudsanadan
        },
        {
          label: (this.application.application_type !== 2 && this.application.isCreatedDate) ? this.$t('БЮД тақдим этилган санагача') : this.$t('БЮД расмийлаштирилган санагача'),
          value: this.application.byudsanagacha
        }
      ]
    },
  },

  components: {}
}
</script>
<style scoped lang="scss">
.page-content div.row .fixed-color-tabs .v-expansion-panel-header {
  background-color: #dee8e2;
  font-weight: bold;
}

.price-block {
  padding: 30px;
  border: 1px solid var(--mycolor);
  margin-top: 25px;
  border-radius: 10px;

  h4 {
    color: var(--mycolor);
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

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

.resultTable {
  td {
    border: none;
  }
}
</style>
