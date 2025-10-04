<template>
  <div class="section customs-value-section service-recycle">
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
            <h3 align="center" class="lh-sm font-weight-bold primary-color">
              {{ $t('Товарни божхона ҳудудида/ҳудудидан ташқарида қайта ишлаш учун рухсатнома бериш тўғрисида ариза') }}
              <br>
            </h3>
          </v-col>
        </v-row>
        <v-stepper v-model="stepper" color="none">
          <v-stepper-header style="width: 1000px; margin: auto">
            <v-stepper-step
                step="1"
                :complete="isCompleted(1)"
                @click="goStep(1)"
            >
              {{ $t('Ариза маълумотлари') }}
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step
                :complete="isCompleted(2)"
                @click="goStep(2)"
                step="2"
            >
              {{ $t('Товар тўғрисидаги маълумотлар') }}
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                  class="mb-10"
              >
                <div class="row position-absolute yoriqnoma-text"><a
                    href="/storage/files/Pererabotka.pptx"> {{ $t('Ариза тўлдириш бўйича йўриқномани юклаб олинг!') }}
                </a></div>
                <div>
                  <v-icon
                      dence
                      color="#20CB5B"
                  >
                    mdi-arrow-right-bold-circle-outline
                  </v-icon>
                  <b> {{ $t('Аризачи тўғрисида маълумотлар') }} </b></div>
                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">

                  <v-row class="person_data mt-2">
                    <v-col cols="6" v-if="person.type===0">

                      <ValidationProvider :name="$t('ЖШШИР')" rules="required|digits:14"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.pin"
                            :counter="14"
                            :label="$t('ЖШШИР')"
                            required
                            disabled
                            type="number"
                            persistent-hint
                            :hint="$t('ЖШШИР - жисмоний шахснинг шахсий идентификацион рақами')"
                        >
                          <template v-slot:label>{{ $t('ЖШШИР') }}<sup>*</sup></template>
                        </v-text-field>
                        <span class="red--text">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6" v-else>
                      <ValidationProvider :name="$t('Ташкилот номи')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.legalName"
                            :counter="200"
                            :label="$t('Ташкилот номи')"
                            required
                            disabled
                            :hint="$t('Юридик шахснинг тўлиқ номи')"
                            persistent-placeholder
                        >
                          <template v-slot:label>{{ $t('Ташкилот номи') }}<sup>*</sup></template>

                        </v-text-field>
                        <span class="red--text">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6" v-if="person.type===1">
                      <ValidationProvider :name="$t('СТИР')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.tin"
                            :counter="9"
                            :label="$t('СТИР')"
                            type="number"
                            required
                            :disabled="(person.tin!==null && (person.tin).toString().length===9)"
                            :hint="$t('Солиқ тўловчининг идентификацион рақами')"
                            persistent-hint
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('СТИР') }}<sup>*</sup></template>

                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6" v-else>
                      <ValidationProvider :name="$t('Фамилияси исми шарифи')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.fio"
                            :counter="200"
                            :label="$t('Фамилияси исми шарифи')"
                            required
                            disabled
                            :hint="$t('Аризачининг фамилияси, исми, шарифи')"
                            persistent-hint
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('Фамилияси исми шарифи') }}<sup>*</sup></template>
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6" v-if="person.type==='01'">
                      <ValidationProvider :slim="(person.type!=='01')" v-if="person.type==='02'"
                                          :name="$t('Лавозими')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.position"
                            :counter="200"
                            required
                            :hint="$t('Аризачининг ташкилотдаги лавозими')"
                            persistent-placeholder
                        >
                          <template v-slot:label>{{ $t('Лавозими') }}<sup>*</sup></template>
                        </v-text-field>
                        <span class="red--text">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Манзили')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.perAdr"
                            :counter="200"
                            required
                            :hint="person.type==1?$t('Аризачининг манзили'):$t('Юридик шахснинг манзили')"
                            persistent-placeholder
                        >
                          <template v-slot:label>{{ $t('Манзили') }}<sup>*</sup></template>
                        </v-text-field>
                        <span class="red--text">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Телефон рақами')" rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="app.common.phone"
                            :label="$t('Телефон рақами')"
                            required
                            v-mask="'+998 ## ### ## ##'"
                            :hint="$t('Аризачининг телефон рақами')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('Телефон рақами') }}<sup>*</sup></template>
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Электрон почта')" rules="required|email"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="app.common.email"
                            :counter="200"
                            :label="$t('Электрон почта манзили')"
                            required
                            :hint="$t('Аризачининг электрон почтаси')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('Электрон почта манзили') }}<sup>*</sup>
                          </template>
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <div>
                    <v-icon
                        dence
                        color="#20CB5B"
                    >
                      mdi-arrow-right-bold-circle-outline
                    </v-icon>
                    <b> {{ $t('Ариза маълумотлари') }}</b></div>
                  <v-row class="person_data mt-2">
                    <v-col cols="3">
                      <autocomplete-field
                          :options="[
                              {text:$i18n.t('Божхона ҳудудида қайта ишлаш'),value:100},
                              {text:$i18n.t('Божхона ҳудудидан ташқарида қайта ишлаш'),value:200},
                              {text:$i18n.t('Божхона ҳудудида кооперация тартибида қайта ишлаш'),value:300}]"
                          v-model="app.common.repubInOut"
                          rules="required"
                          title="Режим"
                          hint=" "
                      ></autocomplete-field>
                    </v-col>
                    <v-col cols="3">
                      <autocomplete-field
                          :options="app.common.repubInOut===200?methodIdentificationsOut:methodIdentificationsIn"
                          title="Идентификация усули"
                          rules="required"
                          v-model="app.common.methodIdenCode"
                      ></autocomplete-field>
                    </v-col>
                    <v-col cols="3" v-if="app.common.methodIdenCode === '5'">
                      <ValidationProvider :name="$t('Бошқа идентификация усули')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            :label="$t('Идентификация усулини ёзинг')"
                            required
                            :hint="$t('Рўйхатда йўқ бўлган идентификация усули')"
                            persistent-placeholder
                            v-model="app.common.methodIdenDop"
                            :error-messages="errors[0]"
                        >

                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="3">
                      <autocomplete-field
                          :options="regions"
                          :title="$t('Ҳудудий бошқарма')"
                          rules="required"
                          v-model="app.common.locationId"
                      >
                      </autocomplete-field>
                    </v-col>
                    <v-col cols="4">
                      <ValidationProvider
                          :name="$t('Қайта ишловчи СТИРи')"
                          rules="required"
                          v-slot="{ errors }">
                        <v-autocomplete
                            v-model="app.common.recycleTin"
                            :label="app.common.repubInOut===100?$t('Қайта ишловчи СТИРи*'):$t('Юк жўнатувчи СТИРи*')"
                            required
                            :hint="app.common.repubInOut===100?$t('Қайта ишловчи СТИРи*'):$t('Юк жўнатувчи СТИРи*')"
                            persistent-placeholder
                            :items="recycle_orgs"
                            item-text="shortname"
                            item-value="tin"
                            name="importInn"
                            hide-no-data
                            clearable
                            :loading="loading.recycle_org"
                            :search-input.sync="search_inn"
                            return-object
                            :error-messages="errors[0]"
                        >
                        </v-autocomplete>
                      </ValidationProvider>
                      <ValidationProvider
                          :name="$t('Товар қайта ишланадиган жой локацияси')"
                          rules="required"
                          v-slot="{ errors }">
                        <v-text-field
                            :value="app.common.recycleLocation"
                            :label="$t('Товар қайта ишланадиган жой локацияси')"
                            required
                            persistent-placeholder
                            readonly
                            :error-messages="errors[0]"
                        >
                        </v-text-field>
                      </ValidationProvider>
                      <ValidationProvider :name="$t('Товар қайта ишланадиган жой манзили')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            :label="$t('Товар қайта ишланадиган жой манзили *')"
                            required
                            :hint="$t('Товар қайта ишланадиган жой манзили')"
                            persistent-placeholder
                            v-model="app.common.recycleAddress"
                            :error-messages="errors[0]"
                        >
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="8">
                      <div id="locationMap" style="height: 300px; width: 100%"></div>
                    </v-col>
                    <v-col cols="8" >
                      <ValidationProvider :name="$t('Шартнома идентификация рақами')" :rules="[300].includes(app.common.repubInOut)?'':'required'"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            v-model="app.common.contractIdenNumber"
                            :counter="200"
                            type="number"
                            :hint="$t('Шартнома идентификация рақами')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                            :items="contracts"
                            item-text="kntid"
                            item-value="kntid"
                            deletable-chips
                            :item-disabled="itemDisable"
                            multiple
                            small-chips
                            hide-no-data
                        >
                          <template v-slot:label>{{ $t('Шартнома идентификация рақами') }}<sup>*</sup></template>
                        </v-autocomplete>

                      </ValidationProvider>
                    </v-col>

                    <v-col cols="3">
                      <ValidationProvider :name="$t('Қайта ишлаш операцияларининг қиймати')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            :label="$t('Қайта ишлаш операцияларининг қиймати *')"
                            required
                            type="number"
                            :hint="$t('Қайта ишлаш операцияларининг қиймати')"
                            persistent-placeholder
                            v-model="app.common.recycleCost"
                            :error-messages="errors[0]"
                        >
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider :name="$t('Валюта')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            v-model="app.common.recycleCurrency"
                            :label="$t('Валюта *')"
                            required
                            :items="currencies"
                            hide-selected
                            persistent-placeholder
                            name="currency"
                            :error-messages="errors[0]"
                        >
                          <template slot="item" slot-scope="data">
                            {{ data.item.text }}
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="2">
                      <ValidationProvider
                          :name="$t('Қайта ишлаш муддати')"
                          rules="required|max_value:24|numeric|between:1,24"
                          v-slot="{ errors }">
                        <v-text-field
                            :label="$t('Қайта ишлаш муддати *')"
                            persistent-placeholder
                            name="muddat"
                            type="number"
                            :hint="$t('1 ойдан 24 ойгача муддатда')"
                            v-model="app.common.recycleDeadline"
                            :error-messages="errors[0]"
                        >
                          <template v-slot:append>
                            {{ $t('ой') }}
                          </template>
                        </v-text-field>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="12" class="position-relative">
                      <ValidationProvider :name="$t('Илова қилинадиган файллар')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <e-arxiv-file
                            v-model="application.documents"
                            multiple
                            :title="$t('Илова қилинадиган файллар')"
                            :hint="$t('Шартнома, техник иқтисодий асос, чиқиш нормаси, идентификация усули, қайта ишлаш жойи фотоси')"
                        ></e-arxiv-file>
                        <span class="red--text" v-if="errors">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider :name="$t('Чиқиш нормасини тўлдириш усули')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <b>{{ $t('Чиқиш нормасини тўлдириш усулини танланг') }}</b>
                        <v-radio-group
                            v-model="app.common.repubType"
                            :error-messages="errors[0]"
                        >
                          <div style="display: flex;justify-content: space-between;">
                            <v-radio
                                style="width: 40%"
                                :label="$t('Бир турдаги маҳсулотни олиб келиб, бир ёки бир нечта турдаги товарлар чиқариш')"
                                :value="1"
                                color="#20CB5B"
                            >{{
                                $t('Бир турдаги маҳсулотни олиб келиб, бир ёки бир нечта турдаги товарлар чиқариш')
                              }}
                            </v-radio>
                            <v-radio
                                style="width: 40%"
                                :label="$t('Бир нечта товарлар олиб келиниб, бир ва ундан ортиқ турдаги товарлар ишлаб чиқилганда чиқиш нормасини белгилаш')"
                                :value="2"
                                color="#20CB5B"
                            >{{
                                $t('Бир нечта товарлар олиб келиниб, бир ва ундан ортиқ турдаги товарлар ишлаб чиқилганда чиқиш нормасини белгилаш')
                              }}
                            </v-radio>
                          </div>
                        </v-radio-group>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6">
                      <textfield
                          :title="$t('Ваколатли органлар рухсатномаси')"
                          persistent-placeholder
                          v-model="app.common.orgPermission"
                      >
                      </textfield>
                    </v-col>
                    <v-col cols="6">
                      <textfield
                          :title="$t('Алмаштириладиган эквивалент товар')"
                          persistent-placeholder
                          v-model="app.common.replProductNm"
                      >
                      </textfield>
                    </v-col>
                  </v-row>
                </ValidationObserver>
                <v-row class="row mb-3 position-absolute bottom-0 end-0">
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
                        :loading="loadingButton.first"
                    >
                      {{ $t('Давом этиш') }}
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="bottom-required-info">
                  <i style="font-size: 12px;"><sub
                      style="font-size: 20px">*</sub> {{ $t('- майдонлари албатта тўлдирилиши шарт!') }}
                  </i>
                </v-row>
              </v-card>
            </v-stepper-content>
            <!-- Шу ердан бошланади янги сахифа -->
            <v-stepper-content step="2">
              <div class="p-1 d-flex align-items-start">
                <div class="tab-content w-100" id="v-pills-tabContent">
                  <div>
                    <v-card
                        class="mb-12"
                    >
                      <div class="row position-absolute yoriqnoma-text"><a
                          href="/storage/files/Pererabotka.pptx">
                        {{ $t('Ариза тўлдириш бўйича йўриқномани юклаб олинг!') }}
                      </a></div>
                      <ValidationObserver v-slot="{ invalid }" ref="stepValidation2">
                        <!--                                    <v-card-->
                        <!--                                        style="background-color: #F7F7F7;-->
                        <!--                                        box-shadow: none;-->
                        <!--                                        width: 98%;-->
                        <!--                                        "-->
                        <!--                                    >-->
                        <div style="margin-top: 20px" class="d-none">
                          <p style="font-weight: bold">
                            <v-icon style="color: #20CB5B">
                              mdi-arrow-right-bold-circle-outline
                            </v-icon>
                            {{ $t('Чиқиш нормасини тўлдириш усулини танланг') }}
                          </p>
                        </div>
                        <v-row class="person_data mt-2">
                          <div>
                            <ValidationObserver v-slot="{invalid}" :ref="'stepValidation2Product'">
                              <v-row>
                                <v-col lg="6" md="6" sm="12" cols="12">
                                  <ValidationProvider :name="$t('Мақоми')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="product.cmdtStatus"
                                        :label="$t('Мақоми *')"
                                        persistent-placeholder
                                        required
                                        :items="statusList"
                                        hide-selected
                                        name="maqom"
                                        :error-messages="errors[0]"
                                    >
                                      <template v-slot:selection="data">
                                        <div class="d-flex align-items-center"><span
                                            class="maqom-color"
                                            :style="'background-color:'+ colors[data.item.value - 1]"></span>
                                          {{ capitalizeFirstLetter(data.item.text) }}
                                        </div>
                                      </template>
                                      <template v-slot:item="data">
                                        <div class="d-flex align-items-center"><span
                                            class="maqom-color"
                                            :style="'background-color:'+ colors[data.item.value - 1]"></span>
                                          {{ capitalizeFirstLetter(data.item.text) }}
                                        </div>
                                      </template>
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" cols="12" v-if="!['1'].includes(product.cmdtStatus)">
                                  <ValidationProvider :name="$t('ТИФ ТН коди')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="product.hsCode"
                                        :label="$t('ТИФ ТН коди *')"
                                        required
                                        :items="tftncodes"
                                        item-text="name"
                                        item-value="id"
                                        name="tftncode"
                                        :hint="$t('Товарнинг ТИФ ТН коди')"
                                        persistent-hint
                                        persistent-placeholder
                                        hide-no-data
                                        clearable
                                        hide-details
                                        hide-selected
                                        :loading="loading.tftncode"
                                        return-object
                                        :error-messages="errors[0]"
                                        :search-input.sync="search_tftn"
                                    >
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" cols="12" v-else>
                                  <ValidationProvider :name="$t('ТИФ ТН коди')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="product.hsCode"
                                        :label="$t('ТИФ ТН коди *')"
                                        required
                                        :items="list.tftncodes"
                                        item-text="name"
                                        item-value="id"
                                        name="tftncode"
                                        :hint="$t('Товарнинг ТИФ ТН коди')"
                                        persistent-hint
                                        persistent-placeholder
                                        hide-no-data
                                        clearable
                                        hide-details
                                        hide-selected
                                        :loading="loading.tftncode"
                                        return-object
                                        :error-messages="errors[0]"
                                    >
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" cols="12">
                                  <ValidationProvider :name="$t('Товар номи')" v-slot="{errors}">
                                    <v-text-field
                                        :label="$t('Товар номи')"
                                        name="nomlanishi"
                                        v-model="product.cmdtNm"
                                        persistent-placeholder
                                        :error-messages="errors[0]"
                                    >
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                                <v-col lg="6" md="6" sm="12" cols="12">
                                  <ValidationProvider :name="$t('Нетто вазни')" rules="required"
                                                      v-slot="{errors}">
                                    <v-text-field
                                        v-model="product.cmdtNetto"
                                        :label="$t('Нетто вазни (кг) *')"
                                        persistent-placeholder
                                        required
                                        type="number"
                                        :error-messages="errors[0]"
                                    >
                                      <template v-slot:append>
                                        <span class="append-slot">кг</span>
                                      </template>
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <v-text-field
                                      :label="$t('Қиймати (шартнома тузилган валютада)')"
                                      type="number"
                                      v-model="product.cmdtCost"
                                      persistent-placeholder
                                  >
                                  </v-text-field>
                                </v-col>

                                <v-col cols="4" v-if="product.hsCode && product.hsCode.u2">
                                  <v-text-field
                                      :label="$t('Қўшимча ўлчов бирлигидаги миқдори')"
                                      type="number"
                                      persistent-placeholder
                                      v-model="product.cmdtQty"
                                  >
                                    <template v-slot:append-outer>
                                          <span class="append-slot">
                                            {{ product.hsCode.u2 }}
                                          </span>
                                    </template>
                                  </v-text-field>
                                </v-col>
                              </v-row>
                            </ValidationObserver>
                          </div>

                          <v-row style="margin-top: 20px">
                            <v-col cols="12">
                              <v-data-table
                                  :headers="headers1"
                                  :items="list.products"
                                  :items-per-page="5"
                                  :loading="loading.apps"
                                  :no-data-text="$t('Маълумот топилмади')"
                                  :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                                  :hide-default-footer="false"
                              >
                                <template #header.cmdtUnit> ТИФ ТН коди бўйича <br> қўшимча ўлчов бирлигида</template>
                                <template #header.cmdtCost>Қиймати <br> шартнома тузилган валютада</template>
                                <template #header.cmdtQty> Миқдори <br> қўшимча ўлчов бирлигида</template>
                                <template #item.cmdtStatusNm="{ item }">{{capitalizeFirstLetter((item.cmdtStatusNm).trim())}}</template>
                                <template #item.cmdtId="{ item }">{{ list.products.indexOf(item) + 1 }}</template>
                                <template #item.cmdtUnit="{ item }"> {{ item.cmdtUnitNm }}</template>
                                <template #item.actions="{ item }">
                                  <div class="d-flex justify-content-center align-items-center">
                                    <v-btn color="primary" icon text @click="editProductClicked(item)">
                                      <v-icon>mdi-pencil</v-icon>
                                    </v-btn>

                                    <v-dialog
                                        :key="item.cmdtId"
                                        v-if="item.cmdtId"
                                        max-width="500"
                                        v-model="dialog.deleteProduct"
                                    >
                                      <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="error" icon text class="ml-3"
                                               v-bind="attrs"
                                               v-on="on">
                                          <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                      </template>
                                      <v-card>
                                        <v-card-title class="text-h5">
                                          {{ $t('Сиз ҳақиқатдан ҳам ўчирмоқчимисиз!') }}
                                        </v-card-title>
                                        <v-card-text>

                                        </v-card-text>
                                        <v-card-actions>
                                          <v-spacer></v-spacer>
                                          <v-btn
                                              color="green darken-1"
                                              text
                                              @click="dialog.deleteProduct = false"
                                          >
                                            {{ $t("Бекор қилиш") }}
                                          </v-btn>
                                          <v-btn
                                              color="green darken-1"
                                              text
                                              @click="deleteProduct(item)"
                                          >
                                            {{ $t("Ўчириш") }}
                                          </v-btn>

                                        </v-card-actions>
                                      </v-card>
                                    </v-dialog>
                                  </div>

                                </template>
                              </v-data-table>
                            </v-col>
                          </v-row>
                          <div style="display: flex;justify-content: right; margin-top: 10px">
                            <v-btn
                                class="border-bottom"
                                color="primary"
                                @click="addProduct"
                            >
                              <v-icon style="color: white; margin-right: 20px">mdi-content-save</v-icon>
                              {{ $t('Сақлаш') }}
                            </v-btn>
                            <v-dialog
                                max-width="500"
                                v-model="dialog.deleteAllProduct"
                            >
                              <template v-slot:activator="{ on, attrs }">

                                <v-btn
                                    color="primary"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                  <v-icon style="margin-right: 20px">mdi-delete-forever</v-icon>
                                  {{ $t('Барчасини ўчириш') }}
                                </v-btn>
                              </template>
                              <v-card>
                                <v-card-title class="text-h5">
                                  {{ $t('Сиз ҳақиқатдан ҳам барча киритилган товарларни ўчирмоқчимисиз!') }}
                                </v-card-title>
                                <v-card-text>

                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                      color="green darken-1"
                                      text
                                      @click="dialog.deleteAllProduct = false"
                                  >
                                    {{ $t("Бекор қилиш") }}
                                  </v-btn>
                                  <v-btn
                                      color="green darken-1"
                                      text
                                      @click="deleteAllProducts"
                                  >
                                    {{ $t("Ўчириш") }}
                                  </v-btn>

                                </v-card-actions>
                              </v-card>
                            </v-dialog>


                            <v-btn
                                color="primary"
                                @click="chooseFile"
                                :loading="loading.excel"
                                style="margin-left: 10px"
                            >
                              <v-icon style="color:white; margin-right: 10px">mdi-file-document</v-icon>
                              {{ $t('Excelдан импорт қилиш') }}
                              <template v-slot:loader>

                                <v-icon style="color:orange; margin-right: 10px">mdi-cached</v-icon>
                                {{ $t('Excelдан импорт қилиш') }}

                              </template>
                            </v-btn>
                            <v-btn
                                color="success"
                                @click="downloadFile"
                                style="margin-left: 10px"
                            >
                              {{ $t('Excel шаблонни юклаб олиш') }}
                            </v-btn>
                            <input
                                type="file"
                                ref="fileInput"
                                style="display: none"
                                @change="uploadFile"
                            />
                          </div>
                        </v-row>
                        <v-row v-if="repubTypeComputed===1">
                          <div>
                            <p style="font-weight: bold">
                              <v-icon style="color: #20CB5B">
                                mdi-arrow-right-bold-circle-outline
                              </v-icon>
                              {{
                                $t('Қайта ишлаш учун олиб кирилган ҳом ашёнинг бир бирлигидан ҳосил бўладиган маҳсулотлар')
                              }}
                            </p>
                          </div>
                          <v-row class="person_data mt_2" style="margin-left: 12px; margin-right: 12px">
                            <ValidationObserver v-slot="{invalid}" :ref="'stepValidation3Product'">
                              <v-row>
                                <v-col cols="6">
                                  <ValidationProvider :name="$t('Товар номи')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="dopProduct.cmdtId2"
                                        :label="$t('Товар номи *')"
                                        persistent-placeholder
                                        required
                                        :items="dopProductsComputed"
                                        item-value="cmdtId"
                                        :item-text="item=>capitalizeFirstLetter(item.cmdtStatusNm) + ' - ' + item.cmdtNm"
                                        :hint="$t('Товар номини танланг')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Улуши')" rules="required"
                                                      v-slot="{errors}">
                                    <v-text-field
                                        v-model="dopProduct.shareQty"
                                        :label="$t('Улуши *')"
                                        persistent-placeholder
                                        required
                                        type="number"
                                        :hint="$t('Улушини киритинг')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                      <template #append>{{ $t('%') }}</template>
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                              </v-row>
                            </ValidationObserver>

                            <v-row style="margin-top: 20px">
                              <v-col cols="12">
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
                                  <template #header.cmdtUnitNm>{{$t('ТИФ ТН бўйича')}}<br/>{{$t('қўшимча ўлчов бирлигида')}}</template>
                                  <template #header.cmdtQty>{{$t('Миқдори')}}<br/>{{$t('қўшимча ўлчов бирлигида')}}</template>
                                  <template #header.cmdtCost>{{$t('Қиймати')}}<br/>{{$t('шартнома тузилган валютада')}}</template>
                                  <template #item.cmdtStatus1="{item}">{{ (statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus1) && statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus1)[0])?capitalizeFirstLetter(statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus1)[0].text):''}}</template>
                                  <template #item.cmdtStatus2="{item}">{{ (statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus2) && statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus2)[0])?capitalizeFirstLetter(statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus2)[0].text):''}}</template>
                                  <template #item.actions="{ item }">
                                    <div class="d-flex justify-content-center align-items-center">
                                      <v-btn color="primary" icon text @click="editDopProductClicked(item)">
                                        <v-icon>mdi-pencil</v-icon>
                                      </v-btn>

                                      <v-dialog
                                          :key="item.cmdtDopId"
                                          max-width="500"
                                          v-model="dialog.deleteDopProduct"
                                      >
                                        <template v-slot:activator="{ on, attrs }">
                                          <v-btn color="error" icon text class="ml-3"
                                                 v-bind="attrs"
                                                 v-on="on">
                                            <v-icon>mdi-delete</v-icon>
                                          </v-btn>
                                        </template>
                                        <v-card>
                                          <v-card-title class="text-h5">
                                            {{ $t('Сиз ҳақиқатдан ҳам ўчирмоқчимисиз!') }}
                                          </v-card-title>
                                          <v-card-text>

                                          </v-card-text>
                                          <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="dialog.deleteDopProduct = false"
                                            >
                                              {{ $t("Бекор қилиш") }}
                                            </v-btn>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="deleteDopProduct(item)"
                                            >
                                              {{ $t("Ўчириш") }}
                                            </v-btn>

                                          </v-card-actions>
                                        </v-card>
                                      </v-dialog>
                                    </div>

                                  </template>
                                </v-data-table>
                              </v-col>
                            </v-row>


                            <div style="display: flex;justify-content: right; margin-top: 10px">

                              <v-btn
                                  class="border-bottom"
                                  color="primary"
                                  :loading="loading.addDop"
                                  @click="addDopProduct"
                              >
                                <v-icon style="color: white; margin-right: 20px">mdi-content-save</v-icon>
                                {{ $t('Сақлаш') }}
                              </v-btn>


                              <v-dialog
                                  max-width="500"
                                  v-model="dialog.deleteAllDopProduct"
                              >
                                <template v-slot:activator="{ on, attrs }">

                                  <v-btn
                                      color="primary"
                                      v-bind="attrs"
                                      v-on="on"
                                  >
                                    <v-icon style="color: white;margin-right: 20px">mdi-delete-forever</v-icon>
                                    {{ $t('Товарларни ўчириш') }}
                                  </v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="text-h5">
                                    {{ $t('Сиз ҳақиқатдан ҳам барча киритилган товарларни ўчирмоқчимисиз!') }}
                                  </v-card-title>
                                  <v-card-text>

                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="dialog.deleteAllDopProduct = false"
                                    >
                                      {{ $t("Бекор қилиш") }}
                                    </v-btn>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="deleteAllDopProducts"
                                    >
                                      {{ $t("Ўчириш") }}
                                    </v-btn>

                                  </v-card-actions>
                                </v-card>
                              </v-dialog>


                            </div>

                          </v-row>
                        </v-row>
                        <v-row v-if="repubTypeComputed===2">
                          <div>
                            <p style="font-weight: bold;">
                              <v-icon style="color: #20CB5B">
                                mdi-arrow-right-bold-circle-outline
                              </v-icon>
                              {{ $t('Қайта ишлаш маҳсулотини минг бирлигига кетадиган ҳом ашёлар') }}
                            </p>
                          </div>
                          <v-row class="person_data mt_2" style="margin-left: 12px; margin-right: 12px">
                            <ValidationObserver v-slot="{invalid}" :ref="'stepValidation4Product'">
                              <v-row>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Қайта ишлаш маҳсулоти')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="dopProduct.cmdtId2"
                                        :label="$t('Қайта ишлаш маҳсулоти *')"
                                        persistent-placeholder
                                        required
                                        :items="dopProductsComputed"
                                        item-value="cmdtId"
                                        :item-text="item=>capitalizeFirstLetter(item.cmdtStatusNm) + ' - ' + item.cmdtNm"
                                        :hint="$t('Товар номини танланг')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Ҳом ашё товар')" rules="required"
                                                      v-slot="{errors}">
                                    <v-autocomplete
                                        v-model="dopProduct.cmdtId1"
                                        :label="$t('Ҳом ашё товар *')"
                                        persistent-placeholder
                                        required
                                        :items="dopCommoditiesComputed"
                                        item-value="cmdtId"
                                        :item-text="item=>capitalizeFirstLetter(item.cmdtStatusNm) + ' - ' + item.cmdtNm"
                                        :hint="$t('Ҳом ашё товар танланг')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                    </v-autocomplete>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Миқдори')" rules="required"
                                                      v-slot="{errors}">
                                    <v-text-field
                                        v-model="dopProduct.cmdtQty"
                                        :label="$t('Миқдори *')"
                                        persistent-placeholder
                                        required
                                        :hint="$t('қўшимча ўлчов бирлигидаги миқдори')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                      <template #append v-if="dopCommodity2 && dopCommodity2[0]">
                                        {{ dopCommodity2[0].cmdtUnitNm }}
                                      </template>
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Нетто вазни')" rules="required"
                                                      v-slot="{errors}">
                                    <v-text-field
                                        v-model="dopProduct.cmdtNetto"
                                        :label="$t('Нетто вазни *')"
                                        persistent-placeholder
                                        required
                                        :hint="$t('Нетто вазни')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                      <template #append>{{ $t('кг') }}</template>
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="4">
                                  <ValidationProvider :name="$t('Қиймати')" rules="required"
                                                      v-slot="{errors}">
                                    <v-text-field
                                        v-model="dopProduct.cmdtCost"
                                        :label="$t('Қиймати *')"
                                        persistent-placeholder
                                        required
                                        :hint="$t('Қиймати')"
                                        persistent-hint
                                        :error-messages="errors[0]"
                                    >
                                      <template #append v-if="dopCommodity2 && dopCommodity2[0]">
                                        {{ dopCommodity2[0].currencyNm }}
                                      </template>
                                    </v-text-field>
                                  </ValidationProvider>
                                </v-col>
                                <div style="display: flex;justify-content: right; margin-top: 10px">

                                  <v-btn
                                      class="border-bottom"
                                      color="primary"
                                      :loading="loading.addDop"
                                      @click="addDopProduct"
                                  >
                                    <v-icon style="color: white; margin-right: 20px">mdi-content-save</v-icon>
                                    {{ $t('Сақлаш') }}
                                  </v-btn>


                                  <v-dialog
                                      max-width="500"
                                      v-model="dialog.deleteAllDopProduct"
                                  >
                                    <template v-slot:activator="{ on, attrs }">

                                      <v-btn
                                          color="secondary"
                                          outlined
                                          v-bind="attrs"
                                          v-on="on"
                                      >
                                        <v-icon style="margin-right: 20px">mdi-delete-forever</v-icon>
                                        {{ $t('Барчасини ўчириш') }}
                                      </v-btn>
                                    </template>
                                    <v-card>
                                      <v-card-title class="text-h5">
                                        {{ $t('Сиз ҳақиқатдан ҳам барча киритилган товарларни ўчирмоқчимисиз!') }}
                                      </v-card-title>
                                      <v-card-text>

                                      </v-card-text>
                                      <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="dialog.deleteAllDopProduct = false"
                                        >
                                          {{ $t("Бекор қилиш") }}
                                        </v-btn>
                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="deleteAllDopProducts"
                                        >
                                          {{ $t("Ўчириш") }}
                                        </v-btn>

                                      </v-card-actions>
                                    </v-card>
                                  </v-dialog>


                                </div>
                                <v-row style="margin-top: 20px" v-if="dopheadersComputed">
                                  <v-col cols="12">
                                    <v-data-table
                                        :headers="dopheadersComputed"
                                        :items="list.dopProducts"
                                        :items-per-page="5"
                                        :loading="loading.dopProducts"
                                        :no-data-text="$t('Маълумот топилмади')"
                                        :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                                    >
                                      <template #header.cmdtUnitNm>{{$t('ТИФ ТН бўйича')}}<br/>{{$t('қўшимча ўлчов бирлигида')}}</template>
                                      <template #header.cmdtQty>{{$t('Миқдори')}}<br/>{{$t('қўшимча ўлчов бирлигида')}}</template>
                                      <template #header.cmdtCost>{{$t('Қиймати')}}<br/>{{$t('шартнома тузилган валютада')}}</template>
                                      <template #item.cmdtStatus1="{item}">{{ statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus1)[0]?capitalizeFirstLetter(statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus1)[0].text):''}}</template>
                                      <template #item.cmdtStatus2="{item}">{{ statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus2)[0]?capitalizeFirstLetter(statusList.filter(filteredItem => filteredItem.value==item.cmdtStatus2)[0].text):''}}</template>
                                      <template #item.cmdtDopId="{item}">{{
                                          list.dopProducts.indexOf(item) + 1
                                        }}
                                      </template>
                                      <template #item.actions="{ item }">
                                        <div class="d-flex justify-content-center align-items-center">
                                          <v-btn color="primary" icon text @click="editDopProductClicked(item)">
                                            <v-icon>mdi-pencil</v-icon>
                                          </v-btn>

                                          <v-dialog
                                              :key="item.cmdtDopId"
                                              max-width="500"
                                              v-model="dialog.deleteDopProduct"
                                          >
                                            <template v-slot:activator="{ on, attrs }">
                                              <v-btn color="error" icon text class="ml-3"
                                                     v-bind="attrs"
                                                     v-on="on">
                                                <v-icon>mdi-delete</v-icon>
                                              </v-btn>
                                            </template>
                                            <v-card>
                                              <v-card-title class="text-h5">
                                                {{ $t('Сиз ҳақиқатдан ҳам ўчирмоқчимисиз!') }}
                                              </v-card-title>
                                              <v-card-text>

                                              </v-card-text>
                                              <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="green darken-1"
                                                    text
                                                    @click="dialog.deleteDopProduct = false"
                                                >
                                                  {{ $t("Бекор қилиш") }}
                                                </v-btn>
                                                <v-btn
                                                    color="green darken-1"
                                                    text
                                                    @click="deleteDopProduct(item)"
                                                >
                                                  {{ $t("Ўчириш") }}
                                                </v-btn>

                                              </v-card-actions>
                                            </v-card>
                                          </v-dialog>
                                        </div>

                                      </template>
                                    </v-data-table>
                                  </v-col>
                                </v-row>
                              </v-row>
                            </ValidationObserver>
                          </v-row>
                        </v-row>
                        <!--                                    </v-card>-->
                      </ValidationObserver>
                      <v-row class="row mb-3 position-absolute bottom-0 end-0">
                        <v-col class="d-flex p-2 bd-highlight justify-content-end p-0">
                          <v-btn text
                                 @click="prevStep"
                          >
                            {{ $t('Орқага') }}
                          </v-btn>
                          <v-btn
                              color="primary"
                              @click="nextStep"
                              size="large"
                              style="width: max-content"
                              :loading="loadingButton.second"
                          >
                            {{ $t('Ариза юбориш') }}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </div>
                </div>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
      <v-dialog v-model="loading.dialogoferta" max-width="800">
        <v-card>
          <v-toolbar color="primary" dark class="text-center white--text"><span class="text-h5">
                                    {{ $t('Огоҳлантириш!') }}
                                    </span>
            <v-spacer/>
            <v-btn icon color="white" @click="dialog.productOrigin = false">
              <v-icon large>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text>
          <v-col cols="12">
            <p class="text-center" style="line-height: 25px; font-size: 20px">Божхона кодексининг 135-моддаси ва ПФ-115-сонли фармон бўйича аризада тақдим этилган маълумотлар учун жавобгарлик ваколатли шахснинг зиммасида бўлади!</p>

          </v-col>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text
                color="blue darken-1"
                @click=" loading.dialogoferta=false; "
            >
              {{ $t('Бекор қилиш') }}
            </v-btn>
            <v-btn
                color="green darken-1"
                @click="loading.oferta=true; loading.dialogoferta=false; "
            >
              {{ $t('Розиман') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <form ref="arxivSubmit" action="https://ed2.customs.uz/E_ARXIV/authentication"
          method="post" target="_blank" class="d-none">
      <input type="hidden" id="SessionID" name="SessionID"><br/>
      <input type="hidden" id="serialNumberHex" name="serialNumberHex" value="778ccc63"><br/>
      <input type="hidden" id="INN" name="INN" value="511420390"/><br/>
      <input type="hidden" id="YUR_INN" name="YUR_INN"/><br/>
      <input type="hidden" id="PNFL" name="PNFL" value="30603901000109"><br/>
      <input type="hidden" id="username" name="username" value="МУРАДОВ ФАРРУХ ШАКИРОВИЧ"/><br/>
      <input type="hidden" id="ETR" name="ETR" value="ETR"><br/>
      <!--            <input type="hidden" id="FOLDER_ID" name="FOLDER_ID" value="0058338434">-->

    </form>
    <a class="all_news service" target="_blank" href="https://t.me/bojxonaqaytaishlash">
      <img src="/public/images/telegram.png">


      <p> {{ $t('Саволларингизни йўлланг') }}
        <br>
        {{ $t('@bojxonaqaytaishlash') }}
      </p></a>
  </div>
</template>

<script>

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import {ValidationProvider, ValidationObserver} from 'vee-validate';
import i18n from "../../../../i18n";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import Textfield from "../../../../components/form/textfield";
import ServicePage from "../index.vue";

import {value} from "lodash/seq";

export default {
  name: "InitialIntellectual",
  data() {
    return {
      map: null,
      marker: null,
      lat: 41.3111, // Toshkent
      lng: 69.2797,
      stepper: 1,
      index: [],
      regions: [],
      posts: [],
      currencies: [],
      recycle_orgs: [],
      search_inn: null,
      colors: [
        '#000000',
        '#d747a4',
        '#1e2de5',
        '#39e70e',
        '#7ed1f1',
        '#c9b210',
      ],
      maqomlar: [
        {
          text: typeof this.application !== 'undefined' && this.application.rejim === 200 ? i18n.t("Олиб чиқиладиган товарлар") : i18n.t("Олиб кириладиган товарлар"),
          value: '1'
        },
        {
          text: typeof this.application !== 'undefined' && this.application.rejim === 200 ? i18n.t("Ишлатиладиган чет эл товари") : i18n.t("Ўзбекистон товари"),
          value: '2'
        },
        {text: i18n.t("Қайта ишлаш маҳсулоти"), value: '3'},
        {text: i18n.t("Қайта ишлашда ҳосил бўладиган иккиламчи товар"), value: '4'},
        {text: i18n.t("Чиқиндилар"), value: '5'},
        {text: i18n.t("Йўқ бўлиб кетадиган товарлар"), value: '6'},
      ],
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
          text: i18n.t('Товарни божхона ҳудудида/ҳудудидан ташқарида қайта ишлаш учун рухсатнома бериш тўғрисида ариза'),
          to: '/services/decisions',
          disabled: true,
          exact: true,
        },
      ],
      tovarIndex: 0,
      tab: 0,
      headers: [
        {sortable:false, text: i18n.t('№'), align: 'start', value: 'cmdtDopId'},
        {sortable:false, text: i18n.t('Махсулот мақоми'), align: 'start', value: 'cmdtStatus2'},
        {sortable:false, text: i18n.t('Маҳсулот ТИФ ТН коди'), align: 'start', value: 'hsCode2'},
        {sortable:false, text: i18n.t('Махсулот номи'), align: 'start', value: 'cmdtNm2'},
        {sortable:false, text: i18n.t('Хомашё мақоми'), align: 'start', value: 'cmdtStatus1'},
        {sortable:false, text: i18n.t('Хомашё ТИФ ТН коди'), align: 'start', value: 'hsCode1'},
        {sortable:false, text: i18n.t('Хомашё номи'), align: 'start', value: 'cmdtNm1'},
        {sortable:false, text: i18n.t('Улуш тури билан'), align: 'start', value: 'shareQty'},
        {sortable:false, text: i18n.t('ТИФ ТН бўйича'), align: 'start', value: 'cmdtUnitNm'},
        {sortable:false, text: i18n.t('Нетто вазни (кг)'), align: 'start', value: 'cmdtNetto'},
        {sortable:false, text: i18n.t('Миқдори'), align: 'start', value: 'cmdtQty'},
        {sortable:false, text: i18n.t('Қиймати'), align: 'start', value: 'cmdtCost'},
        {sortable:false, text: i18n.t('Амаллар'), align: 'start', value: 'actions'},
      ],
      headers1: [
        {text: i18n.t('№'), align: 'start', value: 'cmdtId'},
        {text: i18n.t('Мақоми'), align: 'start', value: 'cmdtStatusNm'},
        {text: i18n.t('Товар ТИФ ТН коди'), align: 'start', value: 'hsCode'},
        {text: i18n.t('Товар номи'), align: 'start', value: 'cmdtNm'},
        {text: i18n.t('ТИФ ТН коди'), align: 'start', value: 'cmdtUnits'},
        {text: i18n.t('Нетто вазни (кг)'), align: 'start', value: 'cmdtNetto'},
        {text: i18n.t('Миқдори'), align: 'start', value: 'cmdtQty'},
        {text: i18n.t('Қиймати'), align: 'start', value: 'cmdtCost'},
        {text: i18n.t('Амаллар'), align: 'start', value: 'actions'},
      ],
      subHeaders: [
        {text: i18n.t('№'), align: 'start', value: 'cmdtDopId'},
        {text: i18n.t('Мақоми'), align: 'start', value: 'cmdtStatus1'},
        {text: i18n.t('Товар ТИФ ТН коди'), align: 'start', value: 'hsCode1'},
        {text: i18n.t('Товар номи'), align: 'start', value: 'cmdtNm1'},
        {text: i18n.t('Улуш тури билан'), align: 'start', value: 'shareQty'},
        {text: i18n.t('ТИФ ТН бўйича'), align: 'start', value: 'cmdtUnitNm'},
        {text: i18n.t('Нетто вазни (кг)'), align: 'start', value: 'cmdtNetto'},
        {text: i18n.t('Миқдори'), align: 'start', value: 'cmdtQty'},
        {text: i18n.t('Қиймати'), align: 'start', value: 'cmdtCost'},
        {text: i18n.t('Амаллар'), align: 'start', value: 'actions'},
      ],
      contracts: [],
      subProduct: {
        hsCode: null,
        mainCmdtNm: null,
        cmdtQty: null,
        cmdtUnits: null
      },
      application: {
        shb: null,
        methodIdentificationsIn: null,
        recycleCost: null,
        rejim: null,
        currency: null,
        recycleAddress: null,
        orgPermission: null,
        replProductNm: null,
        muddat: null,
        method: null,
        method2: null,
        documents: [],
        contract: null,
        ilova_error: "",
        recycle_org: null,
        statusCommodity: null,
        tiftnCommodity: null,
        nettoCommodity: null,
        ulush_turi: null,
        ulush: null,
        tovar: null,
        qaytaishlash: null,
        subProduct: {
          id: null,
          miqdor: null
        },
        tovarlar: [
          {
            id: 0,
            tftn: [],
            tftncodes: [],
            nomlanishi: null,
            status: null,
            qiymati: null,
            currency: null,
            weight: null,
            search_tftn: "",
            shb: null,
            subProducts: []
          },


        ],


      },
      documents: [],
      filter_apps: [],
      person: {
        type: 1, /// 1- fiz 0- yur
        fio: "",
        pin: null,
        tin: null,
        position: "01",
        phone: null,
        email: null,
        legalName: null,
      },
      doc: {
        type: null,
        file: null,
      },

      copytovar: {
        id: 0,
        tftn: [],
        nomlanishi: null,
        status: null,
        qiymati: null,
        currency: null,
        weight: null,
        search_tftn: "",
        subProducts: []
      },
      commodity: [],
      app: {
        common: {
          appId: null,
          personId: null,
          locationId: null, ///Viloyat
          repubInOut: null, //100 - Bojxona hududida 200- bosjxona tashqarisida
          methodIdenCode: null, //
          methodIdenDop: null, //
          contractIdenNumber: [], //// KONTTYPE : 11,12,16,17 ACTIVE_PR :0
          recycleDeadline: null, ///0-24 gacha
          recycleCost: null, /// Қайта ишлаш оператцияларининг қиймати *
          recycleCurrency: null, //valyuta
          recycleName: null,
          recycleTin: "", /// INN
          recycleAddress: null,
          recycleLocation: null,
          orgPermission: null,
          replProductNm: null,
          repubType: null,
          email: null,
          phone: null,
          earxivList: [],
          //oldAppNum: null
        },
        docs: [],
        commodities: [],
      },
      product: {
        cmdtId: null,
        appId: null,
        cmdtStatus: null,
        hsCode: null,
        cmdtNm: null,
        cmdtNetto: null,
        cmdtNettoUnit: null,
        cmdtQty: null,
        cmdtUnit: null,
        cmdtCost: null,
      },
      dopProduct: {
        cmdtDopId: null,
        cmdtId1: null,
        cmdtId2: null,
        appId: null,
        shareType: '1',
        shareQty: null,
        cmdtQty: null,
        cmdtUnits: null,
        cmdtNetto: null,
        cmdtNettoUnit: 166,
        cmdtCost: null,
      },

      dialog: {
        deleteProduct: false,
        deleteDopProduct: false,
        deleteAllProduct: false,
        deleteAllDopProduct: false,
        tovarlarresult: false,
        ishlabchiqaruvchi: false,
      },
      boolDialogIshChiqNew: -1,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      modal: false,
      completedSteps: [],
      tags: [],
      methodIdentificationsIn: [
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш"),
          value: '1'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш"),
          value: '2'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш"),
          value: '3'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш"),
          value: '4'
        },
        {text: i18n.t("Бошқа усуллар"), value: '5'}
      ],
      methodIdentificationsCOPIn: [
        {
          text: i18n.t("Кооперация тартибида қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш"),
          value: '1'
        },
        {
          text: i18n.t("Кооперация тартибида қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш"),
          value: '2'
        },
        {
          text: i18n.t("Кооперация тартибида қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш"),
          value: '3'
        },
        {
          text: i18n.t("Кооперация тартибида қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш"),
          value: '4'
        },
        {text: i18n.t("Бошқа усуллар"), value: '5'}
      ],
      methodIdentificationsOut: [
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарга ваколатли шахс ва (ёки) божхона органи томонидан муҳрлар қўйиш ва, зарур бўлган ҳолларда, штамплар қўйиш, рақамли ва (ёки) бошқа турда тамғалаш"),
          value: '1'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарни батафсил тавсифлаш, уни суратга тушириш ёки бошқа ўлчамларда тасвирлаш"),
          value: '2'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва уни қайта ишлаш маҳсулотини тадқиқ этиш натижаларини қиёслаш"),
          value: '3'
        },
        {
          text: i18n.t("Қайта ишлаш учун олиб чиқилаётган товарнинг завод ва серия рақамлари тарзида мавжуд бўлган тамғалашдан ёхуд бошқача тамғалашдан фойдаланиш"),
          value: '4'
        },
        {
          text: i18n.t("Бошқа усуллар"),
          value: '5'
        }
      ],
      regims: [
        {
          text: i18n.t('Божхона ҳудудида қайта ишлаш'),
          value: 100
        },
        {
          text: i18n.t('Божхона ҳудудидан ташқарида қайта ишлаш'),
          value: 200
        },
        {
          text: i18n.t('Божхона ҳудудида кооперация тартибида қайта ишлаш'),
          value: 300
        }
      ],
      loadingButton: {
        first: false,
        second: false,
        third: false,
        four: false
      },
      loading: {
        dialogoferta: false,
        oferta: false,
        tftncode: false,
        recycle_org: false,
        contract: false,
        add: false,
        excel: false,
        addDop: false,
        apps: false,
        dopProduct: false,
        dopProducts: false,
        init: false
      },
      list: {
        products: [],
        dopProducts: [],
        tftncodes: []
      },
      tftncodes: [],
      search_tftn: null,
      search_contract: null
    }

  },
  methods: {
    getTftnCodesForContract(contracts){
        const _this = this

        this.loading.tftncode = true
      const params = new URLSearchParams();
      contracts.forEach(val => params.append('contract[]', val));

        // Lazily load input items
        fetch("/api/v1/data/tftn?" + params.toString())
            .then((res) => res.json())
            .then(res => {
              res.map(function (item) {
                item.name = item.id + " - " + item.name;
                return item;
              })

              _this.list.tftncodes = res;
            })
            .catch(err => {
              //console.log(err)
            })
            .finally(() => (
                this.loading.tftncode = false
            ))
    },
    capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    },
    downloadFile(){
      window.open('/storage/files/SHABLON_COMMODITY_MAIN.xlsx')
    },
    chooseFile() {
      this.$refs.fileInput.click();
    },
    async uploadFile(event) {
      const _this = this
      _this.loading.excel = true
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file; // Save the selected file

        // Create FormData to send as a multipart request
        const formData = new FormData();
        formData.append("file", file);
        formData.append("appId", this.app.common.appId);

        // Send the file to the backend
        await axios
            .post("/api/v1/response/route_recycle/route-excel", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then(() => {
              _this.loading.excel = false
              _this.$toast.success(_this.$t('Товарлар омадли тарзда сақланди!'))
              _this.getProducts()
              this.$refs.fileInput.value = "";
            })
            .catch((error) => {
              _this.loading.excel = false
              if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
                _this.$toast.error(error.response.data.data.errors[0].message)

              } else {
                console.log(error)
                _this.$toast.error(error.response.statusText)
              }
              console.error("Error uploading file:", error);
              this.$refs.fileInput.value = "";
            });
      }
      _this.loading.excel = false
    },
    async addProduct() {
      this.loading.add = true
      const _this = this

      const data = {...this.product}
      console.log(this.product)
      data.cmdtNettoUnit = this.product.hsCode.unit1
      data.cmdtUnit = this.product.hsCode.unit2 ? this.product.hsCode.unit2 : this.product.hsCode.unit1
      data.cmdtQty = this.product.hsCode.unit2 ? this.product.cmdtQty : this.product.cmdtNetto
      data.hsCode = this.product.hsCode.id
      data.appId = this.app.common.appId

      await axios.post('/api/v1/response/route_recycle/route-commodity', data).then(function (res) {
        _this.$toast.success(_this.$t('Товар маълумотлари омадли тарзда сақланди!'))
        _this.getProducts()
      }).catch((error) => {
        _this.loading.add = true
        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else {
          console.log(error)
          _this.$toast.error(error.response.statusText)
        }
      })

      this.loading.add = false
    },
    async addDopProduct() {
      this.loading.addDop = true
      const _this = this

      const data = {...this.dopProduct}
      /*      data.cmdtNettoUnit = this.product.hsCode.unit1
            data.cmdtUnit = this.product.hsCode.unit2 ? this.product.hsCode.unit2 : this.product.hsCode.unit1
            data.cmdtQty = this.product.hsCode.unit2 ? this.product.cmdtQty : this.product.cmdtNetto
            data.hsCode = this.product.hsCode.id*/
      if (this.app.common.repubType === 2) {
        if (!(this.dopCommodity2 && this.dopCommodity2[0])) {
          this.$toast.error(this.$t('Хомашё топилмади!'))
          this.loading.addDop = false
          return
        }
        data.cmdtNettoUnit = this.dopCommodity2[0].cmdtNettoUnit
        data.cmdtUnits = this.dopCommodity2[0].cmdtUnit
      } else {
        const findedCmdt = this.list.products.filter(productItem => ['1'].includes(productItem.cmdtStatus))
        if (findedCmdt && findedCmdt[0]) data.cmdtId1 = findedCmdt[0].cmdtId; else {
          this.$toast.error(this.$t('Олиб кириладиган товарлар киритилмаган!'))
          this.loading.addDop = false
          return
        }
      }


      data.appId = this.app.common.appId

      data.shareType = 1
      await axios.post('/api/v1/response/route_recycle/route-commoditydop', data).then(function (res) {
        _this.$toast.success(_this.$t('Товар маълумотлари омадли тарзда сақланди!'))
        _this.getDopProducts()
      }).catch((error) => {
        _this.loading.addDop = false
        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else {
          console.log(error)
          _this.$toast.error(error.response.statusText)
        }
        console.log(error)

        //_this.$toast.error(_this.$t('Товарни қўшишда хатолик содир бўлди!'))
      })

      this.loading.addDop = false
    },
    async getProducts() {
      const _this = this
      this.loading.apps = true
      await axios.get('/api/v1/response/route_recycle/route-commodity/' + this.app.common.appId).then(function (res) {
        _this.list.products = res.data.data
        Object.keys(_this.product).forEach(productKey => {
          _this.product[productKey] = null
        })
        _this.$refs.stepValidation2Product.reset()
      }).catch((error) => {
        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else {
          console.log(error)
          _this.$toast.error(error.response.statusText)
        }
        console.log(error)
        //_this.$toast.error(_this.$t('Товарлар рўйхатини олишда хатолик содир бўлди!'))
      })

      this.loading.apps = false
    },
    async getDopProducts() {
      const _this = this
      this.loading.apps = true
      await axios.get('/api/v1/response/route_recycle/route-commoditydop/' + this.app.common.appId).then(function (res) {
        _this.list.dopProducts = res.data.data
        Object.keys(_this.dopProduct).forEach(productKey => {
          _this.dopProduct[productKey] = null
        })
        if (_this.$refs.stepValidation3Product) _this.$refs.stepValidation3Product.reset()
        if (_this.$refs.stepValidation4Product) _this.$refs.stepValidation4Product.reset()
      }).catch((error) => {
        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else {
          console.log(error)
          _this.$toast.error(error.response.statusText)
        }
        _this.$toast.error(_this.$t('Бириктирилган товарлар рўйхатини олишда хатолик содир бўлди!'))
      })

      this.loading.apps = false
    },
    itemDisable(item) {
      if (this.app.common.repubInOut === 200 && this.app.common.contractIdenNumber.length > 0 && !this.app.common.contractIdenNumber.includes(item.kntid))
        return true
    },
    gotoApp(value) {
      this.$router.push(value.link)
    },
    showFirstError(error) {
      let toast;

      function getkeyValue(myObject) {
        let ob = {
          key: null,
          value: null,
        };
        if (typeof myObject === 'object') {
          if (typeof Object.values(myObject)[0] === 'object')
            ob = getkeyValue(Object.values(myObject)[0])
          else {
            ob.value = Object.values(myObject)[0];
            ob.key = Object.keys(myObject)[0];

          }
        }
        return ob;
      }

      toast = getkeyValue(error);
      this.$toast.error(i18n.t('Майдонларни тўлдиришда хатолик юз берди!') + toast.key + ' - ' + toast.value);
    },
    async getCurrencies() {
      let root = this
      this.$auth.plugins.http.get('/api/v1/data/currency').then(function (result) {
        let currencies = [];
        result.data.forEach(function (item) {
          currencies.push({
            'value': item['CODE'],
            'text': item['CODE'] + ' - ' + item['CD_NM'],
            'name': item['CD_NM']
          })
        })
        root.currencies = currencies;
      })
    },
    addSubProduct(key) {
      if (!(this.application.subProduct.miqdor >= 0)) return;
      const _this = this;
      const subProduct = [];
      if (typeof this.application.tovarlar[this.application.subProduct.id] !== 'undefined') {
        if (this.application.tovarlar.filter((tovar) => {
          if (tovar.id === _this.application.subProduct.id) return tovar;
        }).length > 0)
          subProduct['tovar'] = JSON.parse(JSON.stringify(this.application.tovarlar.filter((tovar) => {
            if (tovar.id === _this.application.subProduct.id) return tovar;
          })[0]));
        subProduct['miqdor'] = this.application.subProduct.miqdor;

        if (typeof this.application.tovarlar[key].subProducts === 'undefined' || !this.application.tovarlar[key].subProducts)
          this.application.tovarlar[key].subProducts = [];
        this.application.tovarlar[key].subProducts.push({
          nomlanishi: subProduct['tovar'].nomlanishi,
          id: subProduct['tovar'].id,
          miqdor: this.application.subProduct.miqdor,
        })
        this.application.subProduct = JSON.parse(JSON.stringify({id: null, miqdor: null}));

      }

    },
    getField(val) {
      return this.fields.filter((obj) => {
        if (obj.key === val) return obj.value
      })
    },
    issetProductswithStatus() {
      let returnData = this.application.tovarlar.filter((obj) => {
        if (typeof obj.status !== 'undefined' && obj.status) return obj
      })
      if (returnData.length > 0) return true;
      return false
    },
    getProductsByStatus(val) {
      return this.application.tovarlar.filter((obj) => {
        if (obj.status === val) return obj
      })
    },
    getProductsByID(val) {
      return this.application.tovarlar.filter((obj) => {
        if (obj.id === val) return obj
      })
    },
    setProductErrors(tovar_id, errors) {
      const _this = this;
      if (errors) {
        //console.log(errors)
        let errorfield = [];

        Object.keys(errors).forEach(keyItem => {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        });
        /*                console.log('errorfield')
                        console.log(tovar_id)
                        console.log(errorfield)*/
        ///this.application.tovarlar.forEach((tovar) => {

        _this.$refs['stepValidation2Product' + tovar_id][0].setErrors(errorfield)

        /// })

      }
    },
    setCommonErrors(errors) {
      const _this = this;
      if (errors) {
        let errorfield = [];

        Object.keys(errors).forEach(keyItem => {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        });

        this.application.tovarlar.forEach((tovar) => {

          _this.$refs['stepValidation2'].setErrors(errorfield)

        })

      }
    },

    isValidDoc(index = null) {
      if (index) {
        return !(!this.application.documents[index].id || !this.application.documents[index].type)
      } else {
        var returnDoc = false;
        if (typeof this.application.documents !== 'undefined' && !this.application.documents.length) {
          return false;
        }
        if (typeof this.application.documents !== 'undefined')
          this.application.documents.forEach((document, k) => {

            returnDoc = (!document.id || !document.type)
            if (returnDoc) {
              return true;
            }
          })
        return !returnDoc;
      }
    },
    openDocumentType() {
      //console.log(this.$refs["hujjatilova" + this.tovarIndex]);
      this.$refs["hujjatilova" + this.tovarIndex][0].applyResult({
        errors: [], // array of string errors
        valid: true, // boolean state
        failedRules: {} // should be empty since this is a manual error.
      })
      this.documents = [];
      //let object = this.filterObject(this.application.tovarlar, this.tovarIndex, 'id')
      //if (object)
      {
        this.documents = this.application.documents;
      }
      this.dialog.documenttype = true;
    },
    isCompletedStep(step) {
      return this.completedSteps.includes(step);
    },
    async getSessionId() {
      let returnObject;
      await axios.get("/api/v1/ex_api/gen_session").then(function (response) {
        returnObject = response;
      })
      return returnObject;
    },
    async authorizeToEArxiv() {
      const _this = this;
      let result_data = null;
      result_data = await this.getSessionId()
      if (result_data && result_data.status === 200) {
        $("#SessionID").attr('value', result_data.data.data.sesid)
        $("#serialNumberHex").attr('value', result_data.data.data.serialnumber)
        //$("#serialNumberHex").attr('value',result_data.data.data.serialnumber)
        $("#INN").attr('value', result_data.data.data.userinn)
        $("#PNFL").attr('value', _this.$auth.user().pin)

        $("#username").attr('value', result_data.data.data.name.replaceAll("", "'"))
        ///*_this.$toast.success(result_data.data.data.name)
        //console.log(_this.$refs['arxivSubmit'])*/
        //console.log(_this.$refs['arxivSubmit']);
        _this.$refs['arxivSubmit'].submit();
      }

    },
    AddDocument() {
      //console.log(this.documents)
      this.documents.push(
          {
            id: null,
            type: null,
          }
      );
    },

    removeDocument(document) {
      this.application.documents.splice(document, 1);
      this.documents.splice(document, 1);
    },

    async sendCommon(data = null) {
      const _this = this
      if (typeof data.recycleTin === 'object' && data.recycleTin.tin) {
        data.recycleTin = data.recycleTin.tin
      }
      data['contractsList'] = []

      if (data.contractIdenNumber && data.contractIdenNumber[0]) {
        data.contractIdenNumber.forEach((value, key) => {
          data['contractsList'].push({contractIdenNumber: value})
        })
      }
      delete data.contractIdenNumber
      data['earxivList'] = []
      if (this.application.documents && this.application.documents[0]) {
        this.application.documents.forEach((value) => {
          data['earxivList'].push({fileId: value.file_id})
        })
      }

      if (data.phone) data.phone = data.phone.replace(/\D/g, '')
      // delete data.contractIdenNumber
      let result = null;
      try {
        await axios.post('/api/v1/response/route_recycle/route-apps', data).then(function (res) {
          result = res;
        }).catch((inValidErrors) => {
          if (typeof inValidErrors.response !== 'undefined') result = inValidErrors.response;
        })
        return result;
      } catch (error) {
        // console.log(error)

        if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else {
          console.log(error)
          _this.$toast.error(error.response.statusText)
        }
        return error.response

      }
    },

    editProductClicked(item) {
      const _this = this
      Object.keys(this.product).forEach(productKey => {
        if (typeof item[productKey] !== "undefined") {
          if (productKey === 'hsCode') {
            this.search_tftn = JSON.parse(JSON.stringify(item[productKey]))
          }
          _this.product[productKey] = JSON.parse(JSON.stringify(item[productKey]))

        }
      })


    },
    editDopProductClicked(item) {
      const _this = this
      Object.keys(this.dopProduct).forEach(productKey => {
        if (typeof item[productKey] !== "undefined") {
          _this.dopProduct[productKey] = JSON.parse(JSON.stringify(item[productKey]))

        }
      })


    },
    deleteProduct(item) {
      const _this = this
      setTimeout(async () => {
        await axios.post('/api/v1/response/route_recycle/route-commodity/' + item.appId + '/' + item.cmdtId).then(() => {
          _this.$toast.success(_this.$t('Товар омадли тарзда ўчирилди!'))
          _this.dialog.deleteProduct = false
          _this.getProducts()
        }).catch(error => {
          if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
            _this.$toast.error(error.response.data.data.errors[0].message)

          } else {
            console.log(error)
            _this.$toast.error(error.response.statusText)
          }
          _this.dialog.deleteProduct = false
        })

        _this.dialog.deleteProduct = false;
      })
    },
    deleteAllProducts() {
      const _this = this
      setTimeout(async () => {
        await axios.post('/api/v1/response/route_recycle/route-commodity/' + _this.app.common.appId).then(() => {
          _this.$toast.success(_this.$t('Барча товарлар омадли тарзда ўчирилди!'))
          _this.dialog.deleteAllProduct = false
          _this.getProducts()
        }).catch(error => {
          if (error.response.data.errors && error.response.data.errors[0] && error.response.data.errors[0] && error.response.data.errors[0].message) {
            _this.$toast.error(error.response.data.errors[0].message)

          } else
            _this.$toast.error(error.response.status)
          console.log(error)
          _this.dialog.deleteAllProduct = false
        })
        _this.dialog.deleteAllProduct = false
      })
    },

    deleteDopProduct(item) {
      const _this = this
      setTimeout(async () => {
        await axios.post('/api/v1/response/route_recycle/route-commoditydop/' + item.appId + '/' + item.cmdtDopId).then(() => {
          _this.$toast.success(_this.$t('Товар омадли тарзда ўчирилди!'))
          _this.dialog.deleteDopProduct = false
          _this.getDopProducts()
        }).catch(error => {
          if (error.response.data.errors && error.response.data.errors[0] && error.response.data.errors[0] && error.response.data.errors[0].message) {
            _this.$toast.error(error.response.data.errors[0].message)

          } else
            _this.$toast.error(error.response.status)
          _this.dialog.deleteDopProduct = false
        })
        _this.dialog.deleteDopProduct = false
      })
    },
    deleteAllDopProducts() {
      const _this = this
      setTimeout(async () => {
        await axios.delete('/api/v1/response/route_recycle/route-commoditydop/' + _this.app.common.appId).then(() => {
          _this.$toast.success(_this.$t('Барча товарлар омадли тарзда ўчирилди!'))
          _this.dialog.deleteAllDopProduct = false
          _this.getDopProducts()
        }).catch(error => {
          if (error.response.data.errors && error.response.data.errors[0] && error.response.data.errors[0] && error.response.data.errors[0].message) {
            _this.$toast.error(error.response.data.errors[0].message)

          } else
            _this.$toast.error(error.response.status)
          _this.dialog.deleteAllProduct = false
        })
        _this.dialog.deleteAllProduct = false
      })
    },

    async checkFile(file_id) {
      let response = null;
      response = await axios.get('/api/v1/ex_api/arxiv?file_id=' + file_id + '&pnfl=' + this.$auth.user().pin);
      if (response && response.data && response.data.count) {
        return response.data.data;
      }
      return false;
    },

    async nextStep() {
      /*      this.stepper++
            return;*/
      let isValid = false;
      const _this = this;

      /*            if (this.completedSteps.includes(this.stepper)) {
                      this.stepper = this.stepper + 1;
                  } else {*/
      switch (this.stepper) {
        case 1:
          this.loadingButton.first = true;
          //console.log(!this.validateField("create_customs_person_value"))
          setTimeout(async () => {
            isValid = await this.validateField("stepValidation1");
            if (isValid === true) {

              //valyuta

              /*              if (_this.application.documents && typeof _this.application.documents !== 'undefined') {
                              _this.app.docs = [];
                              _this.application.documents.forEach((document) => {
                                _this.app.docs.push({fileId: document.id})
                              });
                              ///_this.app.docs=JSON.parse(JSON.stringify(_this.application.contract));
                            }*/


              let resultData = await this.sendCommon(JSON.parse(JSON.stringify(_this.app.common)));
              this.loadingButton.first = false;
              if (resultData && resultData.data && resultData.data.success === true) {


                _this.stepper = 2;
                _this.completedSteps.push(_this.stepper - 1);
                _this.$toast.success(i18n.t("Ариза умумий маълумотлари сақланди!"));

              } else {
                if (typeof resultData.data !== 'undefined' && resultData.data && typeof resultData.data.data !== 'undefined'
                    && resultData.data.data
                    && typeof resultData.data.data.errors !== 'undefined'
                    && typeof resultData.data.data.errors) {
                  if (typeof resultData.data.data.errors.appsBody !== 'undefined')
                    _this.setCommonErrors(resultData.data.data.errors.appsBody)
                  if (typeof resultData.data.data.errors.docsBody !== 'undefined') {
                    _this.application.ilova_error = [];
                    if (typeof resultData.data.data.errors.docsBody === 'String')
                      _this.application.ilova_error = resultData.data.data.errors.docsBody;
                    if (typeof resultData.data.data.errors.docsBody[0] !== 'undefined' && typeof resultData.data.data.errors.docsBody[0]['fileId'] !== 'undefined')
                      _this.application.ilova_error = resultData.data.data.errors.docsBody[0]['fileId'];
                  }
                  this.$toast.error(i18n.t("Маълумотларингизни тўғрилаб юборинг!"));
                } else {
                  if (resultData.data && resultData.data.error) {
                    this.$toast.error(resultData.data.error);
                    if(resultData.data.message) this.$toast.error(resultData.data.message + ' ('+resultData.data.status + ')');
                    this.$toast.error('Response:  ' + JSON.stringify(resultData.data))

                  } else
                    this.$toast.error(i18n.t("Маълумотлар киритишда хатолик юз берди. Қайта уриниб кўринг!"));
                }
              }


            } else console.log(this.$refs["stepValidation1"])
            this.loadingButton.first = false;
          })
          //isValid = true;

          break;


        case 2:
          if(!this.loading.oferta) {
            this.loading.dialogoferta = true
            return
          }
          this.loadingButton.second = true;

          await this.sendAppeal()
          this.loadingButton.second = false;


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


      }
    },
    goStep(step = 1) {

      if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(3)) {
        this.stepper = step;
      }
    },
    isCompleted(step) {
      return this.completedSteps.includes(step);
    },
    async validateField(field) {
      let provider = this.$refs[field];
      if (Array.isArray(provider)) provider = provider[0];
      // Validate the field
      if (provider) return await provider.validate()
      /*.then(()=>{
      console.log(provider.errors);
  });*/
    },


    async getBoshqarmalar() {
      const _this = this
      await this.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {
        if (typeof result.data.data !== 'undefined')
          result.data.data.forEach(function (item) {
            if (!(['1790', '1791','1702'].includes(item['kod_id'])))
              _this.regions.push({
                'value': item['kod_id'],
                'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
              })
          })
      })
    },
    async getPosts(code) {
      this.postloading = true;
      const _this = this
      this.posts = [];
      await axios.get('/api/v1/ex_api/posts?code=' + code,).then(function (result) {
        if (typeof result.data.locations !== 'undefined')
          result.data.locations.forEach(function (item) {
            _this.posts.push({
              'value': item['code'],
              'text': item['cdNm']
            })
          })
      })
      this.postloading = false;
    },

    async initialize() {
      await this.initializeAppData();
      this.getBoshqarmalar();
      this.getCurrencies();
    },
    async initializeAppData() {

      await this.setPersonData()

      // this.setCommonData(CCommon);
    },
    async setPersonData() {
      const _this = this
      const data = {
        firstName: this.$auth.user().first_name,
        surName: this.$auth.user().sur_name,
        lastName: this.$auth.user().mid_name,
        email: this.$auth.user().email,
        pin: this.$auth.user().pin,
        tin: this.$auth.user().tin,
        perAdr: this.$auth.user().per_adr,
        phone: null,
        personType: (this.$auth.user().type == 1) ? 0 : 1,
        legalName: null,
      }

      if (this.$auth.user().type === 2 && this.$auth.user().legal_info) {
        let legal_info = JSON.parse(this.$auth.user().legal_info)
        if (legal_info && typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
          data.legalName = legal_info[0].le_name

        }
      }

      this.person.pin = this.$auth.user().pin;
      this.person.tin = this.$auth.user().tin;
      this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
      this.person.perAdr = this.$auth.user().per_adr;
      this.app.common.email = this.$auth.user().email;
      this.person.type = (this.$auth.user().type === 2) ? 1 : 0;
      _this.person.legalName = (data.legalName) ? data.legalName : null
      _this.loading.init = true
      await axios.post('/api/v1/response/route_recycle/route-persons', data).then(res => {

        Object.keys(_this.app.common).forEach(key => {
          if (res.data.data[0][key]) _this.app.common[key] = res.data.data[0][key]
        })
        if (res.data.data[0].recycleTin) {
          _this.search_inn = res.data.data[0].recycleTin
        }


        if (res.data.data[0].earxivList) {
          if (res.data.data && res.data.data[0]) {
            _this.application.documents = []
            res.data.data[0].earxivList.forEach((value) => {
              if (typeof value['fileId'] !== 'undefined') _this.application.documents.push({id: value['fileId']});
            })
          }
        }
        setTimeout(() => {
          if (res.data.data[0].contractsList) {
            if (res.data.data && res.data.data[0]) {
              res.data.data[0].contractsList.forEach((value) => {
                if (value && typeof value.contractIdenNumber !== 'undefined') {
                  _this.app.common.contractIdenNumber.push(value.contractIdenNumber);
                }
              })
            }
          }
        }, 200)
        _this.loading.init = false

      }).catch(error => {
        if (error.response.data.data && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
          _this.$toast.error(error.response.data.data.errors[0].message)

        } else
          _this.$toast.error(error.response.statusText);
        console.log(e)
      })
      _this.loading.init = false

    },
    /*    setCommonData(data) {
          const _this = this;
          if (typeof data.common !== 'undefined') {
            if (data.common && typeof data.common.locationId !== 'undefined') _this.application.region = data.common.locationId;
            if (data.common && typeof data.common.repubInOut !== 'undefined') _this.application.rejim = data.common.repubInOut;
            if (data.common && typeof data.common.methodIden !== 'undefined') _this.application.method = data.common.methodIden;
            if (data.common && typeof data.common.recycleDeadlineDate !== 'undefined') _this.application.muddat = data.common.recycleDeadlineDate;
            if (data.common && typeof data.common.recycleCost !== 'undefined') _this.application.recycleCost = data.common.recycleCost;
            if (data.common && typeof data.common.recycleCurrency !== 'undefined') _this.application.currency = data.common.recycleCurrency;
            if (data.common && typeof data.common.recycleAddress !== 'undefined') _this.application.recycleAddress = data.common.recycleAddress;
            if (data.common && typeof data.common.orgPermission !== 'undefined') _this.application.orgPermission = data.common.orgPermission;
            if (data.common && typeof data.common.replProductNm !== 'undefined') _this.application.replProductNm = data.common.replProductNm;
            if (data.common && typeof data.common.statusCommodity !== 'undefined') _this.application.statusCommodity = data.common.statusCommodity;
            if (data.common && typeof data.common.tiftnCommodity !== 'undefined') _this.application.tiftnCommodity = data.common.tiftnCommodity;
            if (data.common && typeof data.common.nettoCommodity !== 'undefined') _this.application.nettoCommodity = data.common.nettoCommodity;
            if (data.common && typeof data.common.ulush_turi !== 'undefined') _this.application.ulush_turi = data.common.ulush_turi;
            if (data.common && typeof data.common.ulush !== 'undefined') _this.application.ulush = data.common.ulush;
            if (data.common && typeof data.common.tovar !== 'undefined') _this.application.tovar = data.common.tovar;
            if (data.common && typeof data.common.qaytaishlash !== 'undefined') _this.application.qaytaishlash = data.common.qaytaishlash;
            if (data.common && typeof data.common.contractIdenNumber !== 'undefined') {
              data.common.contractIdenNumber.forEach((contract) => {
                setTimeout(() => {
                  _this.search_contract = contract;
                }, 100)

              })
              _this.application.contract = data.common.contractIdenNumber;
            }
            if (data.docs && typeof data.docs !== 'undefined') {
              data.docs.forEach((file) => {
                if (typeof file['fileId'] !== 'undefined')
                  _this.application.documents.push({id: file['fileId']});
              })
            }
            if (data.common && typeof data.common.recycleTin !== 'undefined' && typeof data.common.recycleName !== 'undefined') {
              //_this.search_inn=data.common.recycleTin;
              setTimeout(async () => {
                await fetch(window.location.origin + "/api/v1/data/inn?code=" + data.common.recycleTin)
                    .then((res) => res.json())
                    .then(res => {
                      res.map(function (item) {
                        item.shortname = item.tin + " - " + item.shortname;
                        return item;
                      })
                      this.recycle_orgs = res;
                    });
                _this.recycle_orgs.filter((item) => {
                  if (item.tin == parseInt(data.common.recycleTin)) {
                    _this.application.recycle_org = item;
                  }
                })
              })
            }
          }


        },*/
    async validatePersonData(silent = false) {
      let isValid = false;

      return await this.$refs['create_customs_person_value'].validate({silent: silent})
    },
    formatDateRange(dates) {
      if (dates.length > 1) {
        if (dates[1] < dates[0]) {
          const date = dates[1];
          dates[1] = dates[0];
          dates[0] = date;
        }
      }
      return dates.join(' -- ')
    },
    getCurrencyByCode(code) {
      let returnCurrency;
      this.currencies.forEach(function (currency) {
        if (currency.value === code) {
          returnCurrency = currency;
          return true;
        }

      })
      if (returnCurrency) {
        //console.log(returnCountry)
        return returnCurrency;
      }
    },


    getContracts(val) {
      const _this = this
      if (!val || (val && val.length !== 9)) return;
      this.loading.contract = true;
      fetch(window.location.origin + "/api/v1/data/contract?inn=" + val)
          .then((res) => res.json())
          .then(res => {
            this.loading.contract = false
            //this.contracts.push(res.data[0]);
            this.contracts = []
            this.contracts = this.contracts.concat(res.data.filter((item) => this.contracts.indexOf(item) < 0));
          })
          .catch(err => {
            _this.$toast.error('Контракт маълумотларини олишда хатолик юз берди')
            console.log(err)
          })
          .finally(() => (
              this.loading.contract = false
          ))
    },

    async sendAppeal() {
      const _this = this
      await axios.post("/api/v1/response/route_recycle/route-apps/" + this.app.common.personId + '/' + this.app.common.appId)
          .then(() => {
            _this.$toast.success(_this.$t('Сизнинг аризангиз муваффаққиятли сақланди!'))
            _this.$router.push('/services/recycle/new/' + _this.app.common.appId)
          })
          .catch((error) => {
            if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
              _this.$toast.error(error.response.data.data.errors[0].message)

            } else {
              console.log(error)
              _this.$toast.error(error.response.statusText)
            }
            _this.loadingButton.second = false;
          });
    }

  },
  watch: {
    "app.common.repubInOut": {
      handler: function (val) {
        if (val === 200 && !(this.loading.init)) {
          this.app.common.contractIdenNumber = []
        }
      },
      deep: true
    },
    "product.cmdtStatus":{
      handler:function(val){
        if(val){
          if(val==='1'){
            this.getTftnCodesForContract(this.app.common.contractIdenNumber)
          }
          this.product.hsCode=null

        }
      }
    },
    search_tftn: {
      handler: function (val) {
        const _this = this
        if (val === null || (val && val.length > 10)) return

        this.loading.tftncode = true

        // Lazily load input items
        fetch("/api/v1/data/tftn?code=" + val)
            .then((res) => res.json())
            .then(res => {
              res.map(function (item) {
                item.name = item.id + " - " + item.name;
                return item;
              })

              _this.tftncodes = res;
              if (_this.product.hsCode && typeof _this.product.hsCode !== 'object' && _this.product.hsCode.length === 10) {
                const findedTftn = _this.tftncodes.filter(tftnCodeItem => tftnCodeItem.id === _this.product.hsCode)
                if (findedTftn && findedTftn[0]) _this.product.hsCode = findedTftn[0]
              }
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
    search_inn: {
      handler: function (val) {
        if (!val) return;
        if (val.length !== 9) return
        //if (this.tftncodes.length > 0) return

        // Items have already been requested
        //if (this.loading.tftncode) return

        this.loading.recycle_org = true;

        // Lazily load input items
        fetch(window.location.origin + "/api/v1/data/inn?code=" + val)
            .then((res) => res.json())
            .then(res => {
              res.map(function (item) {
                item.shortname = item.tin + " - " + item.shortname;
                return item;
              })
              this.loading.recycle_org = false
              this.recycle_orgs = res;

              const issetData = this.recycle_orgs.filter(item => item.tin === val)
              if (issetData && issetData[0]) this.app.common.recycleTin = issetData[0]

            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => (
                this.loading.recycle_org = false
            ))
      },
      deep: true
    },
    search_contract: {
      handler: function (val) {
        if (!val) return;
        //if (val.length ) return
        //if (this.tftncodes.length > 0) return

        // Items have already been requested
        //if (this.loading.tftncode) return


        // Lazily load input items
        fetch(window.location.origin + "/api/v1/data/contract?code=" + val)
            .then((res) => res.json())
            .then(res => {
              this.loading.contract = false
              //this.contracts.push(res.data[0]);
              this.contracts = this.contracts.concat(res.data.filter((item) => this.contracts.indexOf(item) < 0));
            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => (
                this.loading.contract = false
            ))
      },
      deep: true
    },
    "app.common.recycleTin": {
      handler: function (val) {

        if (!val) return;
        if (typeof val.tin === 'undefined') {
          return
        }
        if (!val.tin) return
        if (val.tin.length !== 9) return
        //if (val.length ) return
        //if (this.tftncodes.length > 0) return

        // Items have already been requested
        //if (this.loading.tftncode) return
        this.getContracts(val.tin)

        // Lazily load input items

      },
      deep: true
    },
    stepper: {
      handler(val) {
        if (val === 2) {
          this.getProducts();
          this.getDopProducts();

        }
      }
    }
  },

  async mounted() {
    const _this = this
// Icon ni sozlash
    const myIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const map = L.map('locationMap').setView([41.3111, 69.2797], 13); // Toshkent koordinatasi

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy;',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    this.$nextTick(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 300); // 300ms delay to ensure DOM is ready
    });
    let marker = L.marker([41.3111, 69.2797], { icon: myIcon }).addTo(map)
    map.on('click', function(e) {
      if (marker) {
        map.removeLayer(marker)
      }
      const userMarker = marker= L.marker(e.latlng,{ icon: myIcon }).addTo(map);

      _this.app.common.recycleLocation = e.latlng.lat+ ':'+e.latlng.lng
/*      userMarker.on('click', function() {
        alert(`Sizning koordinatalaringiz:\nLatitude: ${e.latlng.lat}\nLongitude: ${e.latlng.lng}`);
      });*/
    });


    await this.initialize();

  },
  computed: {
    repubTypeComputed() {
      return this.app.common.repubType
    },
    dopheadersComputed() {
      if (this.app.common.repubType === 2) {
        return this.headers.filter(headerItem => headerItem.value !== 'shareQty')
      }
      return this.headers
    },
    listProductsComputed(){
      return this.list.products
    },
    listDopProductsComputed(){
      return this.list.dopProducts
    },
    dopProductsComputed() {
      return this.listProductsComputed.filter(productItem => {
          // Faqat kerakli cmdtStatus qiymatlarini tekshir
        const isRelevantStatus = ['3', '4', '5', '6'].includes(productItem.cmdtStatus);

        // Agar dopProducts bo‘sh bo‘lsa, dopProductga tekshirishsiz true
        if (this.repubTypeComputed===2 || !this.listDopProductsComputed || this.listDopProductsComputed.length === 0) {
          return isRelevantStatus;
        }

        // Aks holda dopProductsda yo‘qligini tekshir
        const notInDopProducts = !this.listDopProductsComputed.some(dop => dop.cmdtId2 === productItem.cmdtId);
        return isRelevantStatus && notInDopProducts;
      });
    },
    dopCommoditiesComputed() {
      return this.list.products.filter(productItem => ['1', '2'].includes(productItem.cmdtStatus))
    },
    dopCommodity2() {
      if (this.dopProduct.cmdtId1)
        return this.list.products.filter(productItem => (productItem.cmdtId === this.dopProduct.cmdtId1))
      return []
    },

    statusList() {

      if (this.application.rejim === 200) {
        this.maqomlar[0].text = i18n.t("Олиб чиқиладиган товарлар");
        this.maqomlar[1].text = i18n.t("Ишлатиладиган чет эл товари");
      }

      return this.maqomlar;
    },
    progress(val) {
      this.Initprogress(val)
    },
    isvalidDocument(tovar_id = null) {
      //tovar_id = this.tovarIndex;
      //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
      return !this.isValidDoc()
    },


  },
  components: {
    ServicePage,
    Textfield,
    EArxivFile,
    AutocompleteField,
    ValidationProvider,
    ValidationObserver
  }
}
</script>
<style>
.append-slot {
  font-size: 15px;
}

.recyle-product-wrapper .v-stepper__wrapper {
  box-shadow: 0 0 28px 2px #e5e5e5;
  padding: 20px;
}

</style>
