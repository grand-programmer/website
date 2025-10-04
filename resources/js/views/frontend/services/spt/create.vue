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
            <h3 align="center" class="lh-sm font-weight-bold primary-color my-5">
              {{ $t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш') }}
              <br>
            </h3>
          </v-col>
        </v-row>
        <v-stepper v-model="stepper" color="none">
          <v-stepper-header>
            <v-stepper-step
                :complete="isCompleted(1)"
                step="1"
                @click="goStep(1)"
            >
              {{ $t('Аризачи тўғрисида маълумот') }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                step="2"
                :complete="isCompleted(2)"
                @click="goStep(2)"
            >
              {{ $t('Қўшимча маълумотлар') }}
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
                step="3"
                :complete="isCompleted(3)"
                @click="goStep(3)"
            >
              {{ $t('Омбор маълумоти') }}
            </v-stepper-step>

          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                  class="mb-15 px-10 py-10"
              >
                <div class="row position-absolute yoriqnoma-text"><a
                    :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"> {{
                    $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                  }}
                </a></div>
                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                  <v-row class="mt-2">
                    <v-col cols="12">

                      <div class="d-flex">
                        <v-btn @click="app.step1.personType=1" small
                               :color="app.step1.personType===1?'primary':'default'">
                          {{ $t('Юридик шахс') }}
                        </v-btn>
                        <v-btn @click="app.step1.personType=0" small
                               :color="app.step1.personType===0?'primary':'default'">
                          {{ $t('Жисмоний шахс') }}
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4">
                      <ValidationProvider :name="$t('Товар эгасининг номи')" v-slot="{ errors }">
                        <v-text-field :label="$t('Товар эгасининг номи')" persistent-placeholder
                                      v-model="app.step1.name" :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="app.step1.personType===1?$t('СТИР рақами'):$t('ЖШШИР рақами')"
                                          v-slot="{ errors }">
                        <v-text-field :label="app.step1.personType===1?$t('СТИР рақами'):$t('ЖШШИР рақами')"
                                      persistent-placeholder
                                      v-model="app.step1.identify"
                                      v-mask="app.step1.personType===1?'#########':'##############'"
                                      :error-messages="errors"
                                      :counter="!!(app.step1.identify && app.step1.identify.length)"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="3">
                      <ValidationProvider :name="$t('Ташкилий-ҳуқуқий шакли')" v-slot="{ errors }">
                        <v-autocomplete :label="$t('Ташкилий-ҳуқуқий шакли')" persistent-placeholder
                                        v-model="app.step1.regtype" :items="lists.regtype" :error-messages="errors">

                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="3">
                      <ValidationProvider :name="$t('Ҳудудий бошқарма')" v-slot="{ errors }">
                        <v-autocomplete :label="$t('Ҳудудий бошқарма')" persistent-placeholder
                                        v-model="app.step1.location" :items="lists.regions"
                                        :error-messages="errors"></v-autocomplete>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="4">
                      <ValidationProvider :name="$t('Манзил ва почта индекси')" v-slot="{ errors }">
                        <v-text-field :label="'Манзил ва почта индекси'" persistent-placeholder
                                      v-model="app.step1.address" :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Давлат рўйхатидан ўтган рақами')" v-slot="{ errors }">
                        <v-text-field :label="'Давлат рўйхатидан ўтган рақами'" persistent-placeholder
                                      v-model="app.step1.regnum" :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Давлат рўйхатидан ўтган санаси')" v-slot="{ errors }">
                        <editable-date :label="'Давлат рўйхатидан ўтган санаси'" persistent-placeholder
                                       v-model="app.step1.regdate" :error-messages="errors"></editable-date>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Электрон почта манзили')" v-slot="{ errors }">
                        <v-text-field :label="'Электрон почта манзили'" persistent-placeholder
                                      v-model="app.step1.email" :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row v-show="isCompetent"
                         style="    border: 1px dashed var(--mycolor); padding: 20px 10px; position: relative; margin-top: 12px;">
                    <span style="position: absolute;
                        top: -10px;
                        background-color: #fff;
                        width: max-content;
                        color: var(--mycolor);
                        font-weight: 600;
                        font-size: 14px;
                        text-transform: uppercase;
                    ">{{ $t('Товар эгаси номидан тўлдираётган ваколатли шахс ҳақида маълумотлар') }}</span>
                    <v-col cols="3">
                      <ValidationProvider :name="$t('ЖШШИР')" v-slot="{ errors }">
                        <v-text-field :label="$t('ЖШШИР')" persistent-placeholder v-mask="'##############'"
                                      v-model="app.competent.identify" disabled :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="3">
                      <ValidationProvider :name="$t('Паспорт маълумотлари')" v-slot="{ errors }">
                        <v-text-field :label="$t('Паспорт маълумотлари')" persistent-placeholder
                                      v-model="app.competent.passport" disabled :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Тасдиқловчи ҳужжат рақами')" v-slot="{ errors }">
                        <v-text-field :label="$t('Тасдиқловчи ҳужжат рақами')" persistent-placeholder
                                      v-model="app.competent.regnum" :error-messages="errors"></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Ҳужжат санаси')" v-slot="{ errors }">
                        <editable-date :label="$t('Ҳужжат санаси')" persistent-placeholder
                                       v-model="app.competent.regdate" :error-messages="errors"></editable-date>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider :name="$t('Тасдиқловчи ҳужжат иловаси')" v-slot="{ errors }">
                        <e-arxiv-file :label="$t('Тасдиқловчи ҳужжат иловаси')"
                                      v-model="app.competent.fileId" :errors="errors[0] || 'aa'"></e-arxiv-file>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </ValidationObserver>
                <div class="mt-10">
                  <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                    <v-col class="d-flex tab_action_buttons">
                      <v-btn text
                             @click="prevStep"
                      >
                        {{ $t('Орқага') }}
                      </v-btn>
                      <v-btn
                          color="primary"
                          :loading="loading.nextStep"
                          @click="nextStep"
                          size="large"
                      >
                        {{ $t('Давом этиш') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                  class="mb-15 px-10 py-10"
              >
                <spt-commodity/>
                <div class="mt-15">
                  <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                    <v-col class="d-flex tab_action_buttons">
                      <v-btn text
                             @click="prevStep"
                      >
                        {{ $t('Орқага') }}
                      </v-btn>
                      <v-btn
                          color="primary"
                          @click="nextStep"
                          size="large"
                      >
                        {{ $t('Давом этиш') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card
                  class="mb-15 px-10 py-10"
              >
                <div class="row position-absolute yoriqnoma-text"><a
                    :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"> {{
                    $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                  }}
                </a></div>
                <ValidationObserver v-slot="{ invalid }" ref="stepValidation3">
                  <v-row>
                  </v-row>


                </ValidationObserver>
                <div class="mt-10">
                  <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                    <v-col class="d-flex tab_action_buttons">
                      <v-btn text
                             @click="prevStep"
                      >
                        {{ $t('Орқага') }}
                      </v-btn>
                      <v-btn
                          color="primary"
                          @click="nextStep"
                          size="large"
                      >
                        {{ $t('Давом этиш') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
    </div>

    <a class="all_news service" target="_blank" href="https://t.me/dastlabkiqaror">
      <img src="/public/images/telegram.png">


      <p> {{ $t('Саволларингизни йўлланг') }}
        <br>
        @dastlabkiqaror
      </p></a>
  </div>
</template>
<script>
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import Myfield from "../../../../components/form/myfield";
import i18n from "../../../../i18n";
import TextField from "../../../../components/form/textfield";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import DialogChips from "../../../../components/form/dialog-chips";
import Textfield from "../../../../components/form/textfield";
import EditableDate from "../../../../components/custom/EditableDate";
import EArxivFileInput from "../../../../components/form/e-arxiv-file-input";
import SptCommodity from "./sptCommodity";


export default {
  name: "SptCreate",
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
          text: i18n.t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш'),
          to: '/services/spt',
          disabled: false,
          exact: true,
        },
        {
          text: i18n.t('Ариза юбориш'),
          to: '/services/spt/create',
          disabled: true,
          exact: true,
        },
      ],
      lists: {
        regions: [],
        regtype: [
          {value: '101', text: 'To‘liq shirkat'}
        ]
      },
      app: {
        step1: {
          personType: 1,
          name: null,
          identify: null,
          address: null,
          email: null,
          regdate: null,
          regnum: null,
          location: null,
          regtype: null,
        },
        isCompetent: false,
        competent: {
          identify: null,
          passport: null,
          regnum: null,
          regdate: null,
          fileId: []
        }


      },
      fields: [
        {key: 'name', value: 'Товар эгасининг номи'},
        {key: 'identify', value: 'СТИР рақами'},
        {key: 'regtype', value: 'Ташкилий-ҳуқуқий шакли'},
        {key: 'location', value: 'Ҳудудий бошқарма'},
        {key: 'address', value: 'Манзил ва почта индекси'},
        {key: 'regnum', value: 'Давлат рўйхатидан ўтган рақами'},
        {key: 'regdate', value: 'Давлат рўйхатидан ўтган санаси'},
        {key: 'email', value: 'Электрон почта манзили'},
        {key: 'fileId', value: 'Тасдиқловчи ҳужжат иловаси'},
        {key: 'competent', value: 'Ваколатли шахс'}
      ],
      stepper: 1,
      completedSteps: [],

      loading: {
        nextStep: false
      },
      dialog: {}
    }

  },/*
  watch:{
    'app.step1.identify':{
     handler(val){
       const identify = (this.app.step1.personType===1)?this.$auth.user().tin:this.$auth.user().pin
       if(val!==identify) this.app.isCompetent = true
     },
     deep:true
    }
  },*/
  computed: {
    isCompetent() {
      const identify = (this.app.step1.personType === 1) ? this.$auth.user().tin : this.$auth.user().pin
      if (this.app.step1.identify !== identify) {
        this.app.competent.identify = this.$auth.user().pin
        this.app.competent.passport = this.$auth.user().pport_no
      } else {
        this.app.competent.identify = null
        this.app.competent.passport = null
      }
      return (this.app.step1.identify != identify)
    }
  },
  created() {
    this.getFirstStep()
    this.getBoshqarmalar()
  },
  methods: {
    async getFirstStep() {
      await this.$auth.plugins.http.get('/api/v1/response/route_spt/app/' + this.$route.params.id).then(res => {
        if (res.data.data && res.data.data.appId) {
          Object.keys(res.data.data).forEach((itemKey) => {
            switch (itemKey) {
              case 'personType':
                this.app.step1[itemKey] = parseInt(res.data.data[itemKey])
                break;
              case 'fileId':
                this.app.competent[itemKey] = [parseInt(res.data.data[itemKey])]
                break;
              case 'competent':
                const competent = res.data.data[itemKey].split('/')

                this.app.competent.identify = (competent[0] && competent[0] != 'null') ? competent[0] : null;
                this.app.competent.passport = (competent[1] && competent[1] != 'null') ? competent[1] : null;
                this.app.competent.regnum = (competent[2] && competent[2] != 'null') ? competent[2] : null;
                this.app.competent.regdate = (competent[3] && competent[3] != 'null') ? competent[3] : null;
                break;
              case 'regdate':
                this.app.step1[itemKey] = this.formatDate(res.data.data[itemKey], 2)
                break;
              default:
                this.app.step1[itemKey] = res.data.data[itemKey]
                break;
            }

          })
        } else {
          this.$toast.error(this.$t('Ариза маълумотларини олишда хатолик юз берди!'))
        }
      }).catch(e => {
        console.log(e.response)
      })
    },

    async saveFirstStep() {
      const _this = this
      let returnData = false
      this.loading.nextStep = true
      await this.$auth.plugins.http.post('/api/v1/response/route_spt/app',
          {
            "appId": this.$route.params.id,
            "personType": this.app.step1.personType,
            "name": this.app.step1.name,
            "identify": this.app.step1.identify,
            "address": this.app.step1.address,
            "email": this.app.step1.email,
            "regnum": this.app.step1.regnum,
            "regdate": this.formatDate(this.app.step1.regdate, 2),
            "regtype": this.app.step1.regtype,
            "location": this.app.step1.location,
            "competent": this.app.competent.identify + '/' + this.app.competent.passport + '/' + this.app.competent.regnum + '/' + this.app.competent.regdate,
            "fileId": (this.app.competent.fileId && this.app.competent.fileId[0]) ? this.app.competent.fileId[0].id : null
          }).then(res => {
        if (res.data.data.appId) {
          returnData = true
        } else this.$toast.error(this.$t('Маълумотларни сақлашда хатолик содир бўлди!'))
        this.loading.nextStep = false
      }).catch(error => {
        returnData = false
        this.loading.nextStep = false

        if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && error.response.data.success === false && typeof error.response.data.data !== 'undefined' && typeof error.response.data.data.errors !== 'undefined') {
          const errors = [];
          //console.log(error.response.data.data);

          for (const [key, item] of Object.entries(error.response.data.data.errors)) {
            if (item && typeof item === 'object') {
              errors[item.field] = item.message;
              /*              for (const [valKey, val] of Object.entries(item)) {
                              errors[val.field] = val.message;
                            }*/
            }

          }

          if (errors) _this.setApplicationErrors(errors);
        }
        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          this.$toast.error(error.response.data.data.errors[0].field + ' -' + error.response.data.data.errors[0].message);
          return false
        } else {
          this.$toast.error(error.response.statusText);
        }
      })
      return returnData
    },
    setApplicationErrors(errors) {
      const _this = this;
      if (errors) {

        // console.log(errors);
        let errorfield = [];

        Object.keys(errors).forEach(keyItem => {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        });
        ///console.log(_this.$refs['stepValidation2'])
        console.log(errorfield)
        _this.$refs['stepValidation1'].setErrors(errorfield)
      }
    },
    getField(val) {
      return this.fields.filter((obj) => {
        if (obj.key === val) return obj.value
      })
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

    async getBoshqarmalar() {
      const _this = this
      _this.lists.regions = []
      await this.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {

        result.data.data.forEach(function (item) {
          if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
            _this.lists.regions.push({
              'value': item['kod_id'],
              'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
            })
        })
      })
    },
    formatDate(date, type = 1) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      if (type === 2) return `${day}-${month}-${year}`;
      if (type === 1) return `${day}.${month}.${year}`; else return `${year}-${day}-${month}`
    },
    async getPasportData() {
      this.loading.yuborishLoading = true
      const _this = this;
      //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
      await axios.get('/api/v1/ex_api/getPData', {
        params: {
          pasnum: _this.app.chief.passport,
          pasdata: _this.app.chief.birthdate,
        }
      }).then(function (response) {
        _this.loading.yuborishLoading = false;
        if (typeof response.data.data.birth_date !== 'undefined') {
          _this.app.chief.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
          _this.app.chief.pin = response.data.data.pinpp
        } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
      }).catch(() => {
        _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг."));
        this.loading.yuborishLoading = false;
      })
      this.loading.yuborishLoading = false;
    },

    async nextStep() {
      let isValid = false;
      const _this = this;

      if (await this.saveFirstStep()) {
        this.stepper++
      }


    },
    prevStep() {

      switch (this.stepper) {
        case 1:
          this.stepper = 1;
          break;

        case 2:
          this.stepper = 1;
          break;
        case 3:
          this.stepper = 2;
          break;


      }
    },
    goStep(step = 1) {

      if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(3)) {
        this.stepper = step;
      }
    },
    isCompleted(step) {
      if (this.completedSteps.includes(step)) {
        //console.log(step);
        return true;
      } else return false;

    },
  },
  components: {
    SptCommodity,
    EditableDate,
    Textfield,
    DialogChips,
    EArxivFile,
    AutocompleteField,
    TextField,
    ValidationProvider,
    ValidationObserver,
    Myfield
  }
}
</script>
<style lang="scss">
.yoriqnoma-text {
  right: 40px;
  font-weight: bold;
}

.outlined-row {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-bottom: 20px;

  .row-title {
    width: 100%;
    padding: 10px 20px;

    > span {
      padding: 10px 0;
      width: 100%;
      display: block;
      text-transform: uppercase;
      font-weight: bolder;
      border-bottom: 1px solid #ccc;
    }
  }

  .field {
    display: flex;
    align-items: start;
  }

}

.vio_card {
  padding: 10px 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-bottom: 0;

  .vio_card_title {
    padding: 10px 0 10px;
    border-bottom: 1px solid #ccc;
    text-transform: uppercase;
    font-weight: 600;
  }

  .field {
    display: flex;
    align-items: start;
    margin: 40px 0;
  }

}

.v-text-field.v-input--dense .v-label {
  top: 5px;
  background-color: #fff;
  width: max-content;
}

</style>
