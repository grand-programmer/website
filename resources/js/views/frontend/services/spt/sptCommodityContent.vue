<template>
  <ValidationObserver v-slot="{ invalid }" class="sptCommodityContent"
                      :ref="'stepValidationProduct'">
    <v-row>
      <v-col cols="4">
        <div class="cardboxshadow d-flex flex-column position-relative">
          <span class="columntitle">1. Товарнинг келиб чиқиш мамлакати тўғрисида </span>
          <v-icon style="position: absolute; right: 5px;" color="primary" @click="dialog.productOrigin = true">
            mdi-pencil
          </v-icon>
          <v-dialog v-model="dialog.productOrigin" max-width="900" persistent>
            <v-card>

              <v-toolbar color="primary" dark class="text-center white--text"><span class="text-h5">
                                    {{ $t('Товарнинг келиб чиқиш мамлакати тўғрисида') }}
                                    </span>
                <v-spacer/>
                <v-btn icon color="white" @click="dialog.productOrigin = false">
                  <v-icon large>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-autocomplete :label="$t('Савдо қилувчи мамлакат')"
                                    :items="countries" item-value="CODE"
                                    :item-text="item=>item.CODE + '-' + item.CD_NM"
                                    v-model="productOrigin.tradeCountry"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field :label="$t('Юкни сотувчи')" v-model="productOrigin.tradeOrg"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete :label="$t('Юк жўнатувчи мамлакат')" :items="countries"
                                    item-value="CODE"
                                    :item-text="item=>item.CODE + '-' + item.CD_NM"
                                    v-model="productOrigin.senderCountry"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field :label="$t('Юкни жўнатувчи')" v-model="productOrigin.senderOrg"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete :label="$t('Келиб чиқиш мамлакати')" :items="countries"
                                    item-value="CODE"
                                    :item-text="item=>item.CODE + '-' + item.CD_NM"
                                    v-model="productOrigin.madeInCountry"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field :label="$t('Товар ишлаб чиқарувчи')" v-model="productOrigin.madeInOrg"></v-text-field>
                  </v-col>

                </v-row>


              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    @click="saveCountryOrigin"
                >
                  {{ $t('Сақлаш') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <template v-if="modelValue.tradeCountry && modelValue.tradeOrg">
            <span>{{ $t('Савдо қилувчи') }}:</span>
            <span>{{
                (modelValue.tradeCountry && countries.filter(item => item.code === modelValue.tradeCountry) && countries.filter(item => item.CODE === modelValue.tradeCountry)[0]) ? countries.filter(item => item.CODE === modelValue.tradeCountry)[0].CD_NM : ''
              }}, {{ modelValue.tradeOrg }}</span>
          </template>
          <template v-if="modelValue.senderCountry && modelValue.senderOrg">
            <span>{{ $t('Юк жўнатувчи') }}:</span>
            <span>{{
                (modelValue.senderCountry && countries.filter(item => item.code === modelValue.senderCountry) && countries.filter(item => item.CODE === modelValue.senderCountry)[0]) ? countries.filter(item => item.CODE === modelValue.senderCountry)[0].CD_NM : ''
              }}, {{ modelValue.senderOrg }}</span>
          </template>
          <template v-if="modelValue.madeInCountry && modelValue.madeInOrg">
            <span>{{ $t('Келиб чиқиш мамлакати') }}:</span>
            <span>{{
                (modelValue.madeInCountry && countries.filter(item => item.code === modelValue.madeInCountry) && countries.filter(item => item.CODE === modelValue.madeInCountry)[0]) ? countries.filter(item => item.CODE === modelValue.madeInCountry)[0].CD_NM : ''
              }}, {{ modelValue.madeInOrg }}</span>
          </template>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="cardboxshadow d-flex flex-column position-relative">
          <span class="columntitle">2. {{ $t('Етказиб бериш шарти ва нархи') }}</span>
          <v-icon style="position: absolute; right: 5px;" color="primary" @click="dialog.inkoterms = true">mdi-pencil
          </v-icon>
          <v-dialog v-model="dialog.inkoterms" max-width="900" persistent>
            <v-card>

              <v-toolbar color="primary" dark class="text-center white--text"><span class="text-h5">
                                    {{ $t('Етказиб бериш шарти ва нархи') }}
                                    </span>
                <v-spacer/>
                <v-btn icon color="white" @click="dialog.inkoterms = false">
                  <v-icon large>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-autocomplete
                        v-model="productDelivery.deliveryTerms"
                        :items="spr.inkoterms" :item-text="item=> item.value + '-' + item.text"
                        :label="$t('Етказиб бериш шарти')"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete
                        v-model="productDelivery.deliveryCountry"
                        :label="$t('Етказиб бериш мамлакати')"
                        :items="countries"
                        item-value="CODE"
                        :item-text="item=>item.CODE + '-' + item.CD_NM"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Товарнинг нарҳи')"
                        v-model="productDelivery.cmdtPrice"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Етказиб бериш шаҳри')"
                        v-model="productDelivery.deliveryCity"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete
                        :label="$t('Валюта')"
                        :items="currencies"
                        item-value="CODE"
                        :item-text="item=>item.CODE + '-' + item.CD_NM"
                        v-model="productDelivery.currency"
                    ></v-autocomplete>
                  </v-col>

                </v-row>


              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    @click="saveInkoterms"
                >
                  {{ $t('Сақлаш') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <span>{{ 'EXW' }}, Греция, Аргос</span>
          <span>5000 Евро</span>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="cardboxshadow d-flex flex-column position-relative">
          <span class="columntitle">3. Товар ҳақида қўшимча маълумотлар </span>
          <v-icon style="position: absolute; right: 5px;" color="primary" @click="dialog.additional=true">mdi-pencil
          </v-icon>
          <v-dialog v-model="dialog.additional" max-width="900" persistent>
            <v-card>

              <v-toolbar color="primary" dark class="text-center white--text"><span class="text-h5">
                                    {{ $t('Товар ҳақида қўшимча маълумотлар') }}
                                    </span>
                <v-spacer/>
                <v-btn icon color="white" @click="dialog.additional = false">
                  <v-icon large>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Ишлаб чиқарувчининг расмий веб-сайти')"
                        v-model="productAdditional.website"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Товар ишлаб чиқарувчининг манзили')"
                        v-model="productAdditional.madeInAdr"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        v-model="productAdditional.grossWeight"
                        :label="$t('Товар брутто оғирлиги (кг)')"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Товар нетто оғирлиги (кг)')"
                        v-model="productAdditional.netWeight"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                        :label="$t('Товар миқдори')"
                        v-model="productAdditional.cmdtAmount"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete
                        :label="$t('Ўлчов бирлиги')"
                        :items="units"
                        item-value="code"
                        item-text="cd_nm"
                        v-model="productAdditional.unitCode"
                    ></v-autocomplete>
                  </v-col>
                </v-row>


              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    @click="saveAdditional"
                >
                  {{ $t('Сақлаш') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <span>Брутто: 5200</span>
          <span>Нетто: 4800</span>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="full-width">
          <span class="columntitle">4. Товар тавсифлари</span>
          <v-textarea
              class="my-0 py-0"
              v-model="value.hsName"
              placeholder="Товарларнинг савдо, тижорат номи ва тўлиқ тавсифи,  асосий техник-тижорат тавсифлари (маркаси, модели, артикули, модификацияси), нави, стандартлари, бажарадиган функциялари, техник ва тижорат хусусиятларини кўрсатинг!"></v-textarea>
        </div>
        <div class="full-width">
          <span class="columntitle">5. ТИФ ТНга мувофиқ товарнинг коди</span>
          <v-autocomplete
              v-model="value.hcCode"
              :items="spr.tftncodes"
              item-text="name"
              item-value="id"
              name="tftncode"
              :hint="$t('Товарнинг ТИФ ТН коди')"
              persistent-placeholder
              hide-no-data
              :loading="loading.tftncode"
              :search-input.sync="search_tftn"
              return-object
              class="my-0 py-0"></v-autocomplete>
        </div>
        <div class="full-width">
          <span class="columntitle">6. Товарнинг келиб чиқишини аниқлаш учун муҳим
бўлган қўшимча маълумотлар:</span>
          <v-text-field v-model="value.comment" class="my-0 py-0"></v-text-field>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="full-width position-relative border-solid" style="padding-bottom: 30px">
          <span style="position: absolute; right: 0; top: 0"><v-switch color="primary" hide-details class="p-0 m-0"
                                                                       v-model="enabled.dq"></v-switch></span>
          <span class="columntitle">7. Бир хил ёки ўхшаш товарларга нисбатан қабул қилинган дастлабки қарор ҳақида сизга маълум бўлган фактлар?</span>
          <v-row v-if="enabled.dq">
            <v-col cols="6">
              <editable-date v-model="value.exDecisionDate" label="Дастлабки қарор санаси" hide-details></editable-date>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="value.exDecisionNum" label="Дастлабки қарор рақами" hide-details></v-text-field>
            </v-col>
            <v-col cols="12" class="my-0 py-0 mt-4">
              <v-textarea v-model="value.exDecisionComment" label="Изоҳ" rows="2" class="py-0 my-0"></v-textarea>
            </v-col>
          </v-row>
        </div>
        <div class="full-width mt-7 position-relative border-solid" style="min-height: 60px">
          <span style="position: absolute; right: 0; top: 0"><v-switch v-model="enabled.br" color="primary" hide-details
                                                                       class="p-0 m-0"></v-switch></span>
          <span class="columntitle">8. Товар божхона режимига жойлаштирилганми?</span>
          <v-text-field v-if="enabled.br" label="Божхона юк декларацияси рўйхат рақами"
                        v-model="value.declNum"></v-text-field>
        </div>


      </v-col>
      <v-col cols="12">
        <e-arxiv-file
            multiple
            id-column="fileId"
            v-model="value.fileIdList"
            :hint="$t('Товарнинг фотосуратлари, Ишлаб чиқарувчи ташкилотнинг товарга тегишли бўлган ҳужжатлари, Келиб чиқиш сертификати, Товарнинг чизмалари, Товарни етарли даражада қайта ишлаш мезонларига мувофиқлигини тасдиқловчи ҳужжатлари, Товарнинг келиб чиқишини аниқлаш учун муҳим бўлган қўшимча маълумотлар, Товарнинг паспорти, Товар ишлаб чиқарилган давлат экспертиза хулосаси')"
        ></e-arxiv-file>
      </v-col>

    </v-row>

    <v-row>
      <div class="d-flex justify-end mt-4 pb-2">
        <v-btn color="primary" class="right"
               :loading="loading.save" @click="saveProduct">{{ $t('Товарни сақлаш') }}
        </v-btn>
      </div>
    </v-row>
  </ValidationObserver>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import EditableDate from "../../../../components/form/EditableDate";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import {mapState} from "vuex";

export default {
  name: "sptCommodityContent",
  props: {
    value: {
      cmdtId: null,
      tradeCountry: null,
      tradeOrg: null,
      madeInCountry: null,
      madeInOrg: null,
      deliveryTerms: null,
      deliveryCountry: null,
      deliveryCity: null,
      cmdtPrice: null,
      currency: null,
      hsName: null,
      website: null,
      madeInAdr: null,
      grossWeight: null,
      netWeight: null,
      cmdtAmount: null,
      unitCode: null,
      hcCode: null,
      exDecisionDate: null,
      exDecisionNum: null,
      exDecisionComment: null,
      declNum: null,
      comment: null,
      fileIdList: null,
    }
  },
  data() {
    return {
      loading: {
        tftncode: false,
        save: false
      },
      dialog: {
        productOrigin: false,
        inkoterms: false,
        additional: false,
      },
      spr: {
        inkoterms: [
          {value: '01', text: 'EXW'},
          {value: '02', text: 'FCA'},
          {value: '03', text: 'FAS'},
          {value: '04', text: 'FOB'},
          {value: '05', text: 'CFR'},
          {value: '06', text: 'CIF'},
          {value: '07', text: 'CPT'},
          {value: '08', text: 'CIP'},
          {value: '09', text: 'DAF'},
          {value: '10', text: 'DES'},
          {value: '11', text: 'DEQ'},
          {value: '12', text: 'DDU'},
          {value: '13', text: 'DDP'},
          {value: '14', text: 'DAР'},
          {value: '15', text: 'DAT'},
          {value: '99', text: '…*'},

        ],
        tftncodes: []
      },
      productOrigin: {
        tradeCountry: null,
        tradeOrg: null,
        madeInCountry: null,
        madeInOrg: null,
        senderCountry: null,
        senderOrg: null,
        deliveryCountry: null,
        deliveryTerms: null,
      },
      productDelivery: {
        deliveryTerms: null,
        deliveryCountry: null,
        cmdtPrice: null,
        deliveryCity: null,
        currency: null,
      },
      productAdditional: {
        website: null,
        madeInAdr: null,
        grossWeight: null,
        netWeight: null,
        cmdtAmount: null,
        unitCode: null,
      },
      search_tftn: null,
      enabled: {
        dq: false,
        br: false
      }
    }
  },
  watch: {
    search_tftn: {
      handler: function (val) {
        if(val===this.$props.value.hcCode.id) return
        if (val.length > 10) return
        //if (this.tftncodes.length > 0) return

        // Items have already been requested
        //if (this.loading.tftncode) return

        this.loading.tftncode = true

        // Lazily load input items
        fetch("/api/v1/data/tftn?code=" + val)
            .then((res) => res.json())
            .then(res => {
              res.map(function (item) {
                item.name = item.id + " - " + item.name;
                return item;
              })
              this.spr.tftncodes = res;
            })
            .catch(err => {
              //console.log(err)
            })
            .finally(() => (
                this.loading.tftncode = false
            ))
      },
      deep: true
    },
    dialog: {
      handler(val, oldVal) {
        if (val.productOrigin) {
          Object.keys(this.productOrigin).forEach(itemKey => {
            this.productOrigin[itemKey] = (this.value[itemKey]) ? this.value[itemKey] : null
          })
        }
        if (val.additional) {
          Object.keys(this.productAdditional).forEach(itemKey => {
            this.productAdditional[itemKey] = (this.value[itemKey]) ? this.value[itemKey] : null
          })
        }
        if (val.inkoterms) {
          Object.keys(this.productDelivery).forEach(itemKey => {
            this.productDelivery[itemKey] = (this.value[itemKey]) ? this.value[itemKey] : null
          })
        }
      },
      deep: true
    }
  },
  mounted() {
    this.$store.commit('setCountry')
    this.$store.commit('setCurrency')
    this.$store.commit('setUnit')

  },
  computed: {
    ...mapState({
      countries: state => state.lists.country,
      currencies: state => state.lists.currency,
      units: state => state.lists.unit
    }),
    modelValue() {
      if(this.modelValue.hcCode && this.search_tftn!==this.modelValue.hcCode)
      this.search_tftn = this.modelValue.hcCode??null
      return this.value
    }
  },
  methods: {
    async saveProduct() {
      this.loading.save = true
      const data = {
        appId: this.$route.params.id,
        ...this.$props.value
      }
      data['hcCode'] = this.$props.value.hcCode.id
      data['fileIdList'] = this.$props.value.fileIdList.map(item=> { return {fileId: item.id}})
      await this.$auth.plugins.http.post('/api/v1/response/route_spt/commodity', data).then(res => {
        console.log(res)
        this.loading.save = false
      }).catch(e => {
        console.log(e.response)
        this.loading.save = false
      })
    },
    saveCountryOrigin() {
      const product = this.$props.value
          product.tradeCountry = JSON.parse(JSON.stringify(this.productOrigin.tradeCountry)),
          product.tradeOrg = JSON.parse(JSON.stringify(this.productOrigin.tradeOrg)),
          product.madeInCountry = JSON.parse(JSON.stringify(this.productOrigin.madeInCountry)),
          product.madeInOrg = JSON.parse(JSON.stringify(this.productOrigin.madeInOrg)),
          product.senderCountry = JSON.parse(JSON.stringify(this.productOrigin.senderCountry)),
          product.senderOrg = JSON.parse(JSON.stringify(this.productOrigin.senderOrg)),
          product.deliveryCountry = JSON.parse(JSON.stringify(this.productOrigin.deliveryCountry)),
          product.deliveryTerms = JSON.parse(JSON.stringify(this.productOrigin.deliveryTerms))
      this.$emit('input', product)
      Object.keys(this.productOrigin).forEach(item => {
        this.productOrigin[item] = null
      })
      this.dialog.productOrigin = false
    },
    saveInkoterms() {
      const product = this.$props.value
      product.deliveryTerms = JSON.parse(JSON.stringify(this.productDelivery.deliveryTerms))
      product.deliveryCountry = JSON.parse(JSON.stringify(this.productDelivery.deliveryCountry))
      product.cmdtPrice = JSON.parse(JSON.stringify(this.productDelivery.cmdtPrice))
      product.deliveryCity = JSON.parse(JSON.stringify(this.productDelivery.deliveryCity))
      product.currency = JSON.parse(JSON.stringify(this.productDelivery.currency))
      this.$emit('input', product)
      Object.keys(this.productDelivery).forEach(item => {
        this.productDelivery[item] = null
      })
      this.dialog.inkoterms = false
    },
    saveAdditional() {
      const product = this.$props.value
      product.website = JSON.parse(JSON.stringify(this.productAdditional.website))
      product.madeInAdr = JSON.parse(JSON.stringify(this.productAdditional.madeInAdr))
      product.grossWeight = JSON.parse(JSON.stringify(this.productAdditional.grossWeight))
      product.netWeight = JSON.parse(JSON.stringify(this.productAdditional.netWeight))
      product.cmdtAmount = JSON.parse(JSON.stringify(this.productAdditional.cmdtAmount))
      product.unitCode = JSON.parse(JSON.stringify(this.productAdditional.unitCode))
      this.$emit('input', product)
      Object.keys(this.productAdditional).forEach(item => {
        this.productAdditional[item] = null
      })
      this.dialog.additional = false
    }
  },
  components: {
    EditableDate,
    ValidationObserver,
    ValidationProvider,
    EArxivFile

  }
}
</script>

<style scoped lang="scss">
.cardboxshadow {
  box-shadow: 0 0 3px 1px #39ae69;
  padding: 5px 10px;
}

.border-solid {
  border: 1px solid #ebebeb;
  padding: 10px 10px 0 10px;
}

.columntitle {
  display: block;
  color: var(--mycolor);
  margin-right: 60px;
}

.sptCommodityContent {
  ::placeholder {
    font-size: 13px;
    line-height: 14px;
    margin-top: 10px;
    padding-top: 10px;
  }
}

</style>
