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
        <v-stepper v-model="stepper" color="none">
          <v-stepper-header>
            <v-stepper-step
                :complete="isCompleted(1)"
                step="1"
                @click="goStep(1)"
            >
              {{ $t('Аризачи маълумотлари') }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                step="2"
                :complete="isCompleted(2)"
                @click="goStep(2)"
            >
              {{ $t('Хизмат тури') }}
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
                step="3"
                :complete="isCompleted(3)"
                @click="goStep(3)"
            >
              {{ $t('Асосий маълумотлар') }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                step="4"
                :complete="isCompleted(4)"
                @click="goStep(4)"
            >
              {{ $t('Қўшимча маълумотлар') }}
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
                step="5"
                :complete="isCompleted(5)"
                @click="goStep(5)"
            >
              {{ $t('Якуний') }}
            </v-stepper-step>

          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                  class="mb-12"
              >
                <div class="row position-absolute yoriqnoma-text"><a
                    href="/storage/files/hscode_guide.pptx"> {{ $t('Ариза тўлдириш бўйича йўриқмани юклаб олинг') }}!
                </a></div>
                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                  <v-row class="person_data">
                    <v-col cols="6" v-if="person.type===0">
                      <ValidationProvider :name="$t('ТИФ иштирокчиси номи')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.organization_name"
                            :counter="200"
                            :label="$t('Ташкилот номи')"
                            required
                            disabled
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ person.type === 0 ? 'Ташкилот номи' : 'Жисмоний шахс Ф.И.О' }}
                            <sup>*</sup></template>

                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6" v-else>
                      <ValidationProvider :name="$t('ТИФ иштирокчиси номи')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.fio"
                            :counter="200"
                            :label="person.type===0?$t('Ташкилот номи'):$t('Жисмоний шахс Ф.И.О')"
                            required
                            disabled
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ person.type === 0 ? $t('Ташкилот номи'):$t('Жисмоний шахс Ф.И.О') }}
                            <sup>*</sup></template>

                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6" v-if="person.type===0">
                      <ValidationProvider :name="$t('СТИР')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.tin"
                            :counter="9"
                            :label="$t('СТИР')"
                            type="number"
                            required
                            disabled
                            :hint="$t('Солиқ тўловчининг идентификацион рақами')"
                            persistent-hint
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('СТИР') }} <sup>*</sup></template>

                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6" v-else>
                      <ValidationProvider :name="$t('ЖШШИР')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.pin"
                            :counter="14"
                            :label="$t('ЖШШИР')"
                            type="number"
                            required
                            disabled
                            :hint="$t('Жисмоний шахснинг шахсий идентификацион рақами')"
                            persistent-hint
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('ЖШШИР') }} <sup>*</sup></template>

                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Манзили')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.perAdr"
                            :counter="200"
                            required
                            :hint="person.type==1?$t('Аризачининг манзили'):$t('Юридик шахснинг манзили')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('Манзили') }} <sup>*</sup></template>
                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Телефон рақами')"
                                          rules="required"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.phone"
                            :label="$t('Телефон рақами')"
                            required
                            v-mask="'+998 ## ### ## ##'"
                            :hint="$t('Аризачининг телефон рақами')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>Телефон рақами <sup>*</sup></template>
                        </v-text-field>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Электрон почта')" rules="required|email"
                                          v-slot="{ errors }">
                        <v-text-field
                            v-model="person.email"
                            :counter="200"
                            :label="$t('Электрон почта манзили')"
                            required
                            :hint="$t('Аризачининг электрон почтаси')"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                          <template v-slot:label>{{ $t('Электрон почта манзили') }} <sup>*</sup>
                          </template>
                        </v-text-field>
                      </ValidationProvider>

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
                      style="font-size: 20px">*</sub> - {{ $t('майдонлари албатта тўлдирилиши шарт') }}!
                  </i>

                </v-row>

              </v-card>

            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                  class="mb-12"
              >
                <h5 class="text-center mb-4">
                  {{ $t('Хизмат турини танланг') }}</h5>

                <v-row class="px-4">
                  <v-col cols="6">
                    <v-list
                        flat
                    >
                      <v-list-item-group
                          v-model="application.application_type"
                          active-class=""
                      >
                        <v-list-item two-line
                                     v-for="(serviceItem, serviceItemKey) in application_types"
                                     class="my-4"
                                     :disabled="(list.netOrgs.length<1) && serviceItem.code==='4' "
                                     style="box-shadow: 0 5px 15px 1px #ccc; border-radius: 10px">
                          <template v-slot:default="{ active }">
                            <v-list-item-action>
                              <v-checkbox :input-value="active"></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content>
                              <v-list-item-title class="text-wrap"
                                                 style="line-height: 22px; font-size: 16px">
                                {{ serviceItem.name }}
                              </v-list-item-title>
                              <v-list-item-subtitle v-if="serviceItem.code==='4'"
                                                    style="color:var(--mycolor); font-size: 12px">
                                {{ $t('Фақат хўжалик бошқаруви органлари учун') }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                  <v-col cols="6">
                    <div class="price-block" v-if="list.tarifs && list.tarifs[1]">
                      <h4>{{ $t('Хизматдан фойдаланиш нархи') }}</h4>
                      <template v-if="myAppComputed.application_type===0">
                      <h5>{{
                          $t("Божхона юк декларацияси ва илова ҳужжатларини юклаб олиш нархи:")
                        }}</h5>
                      <p>- {{ list.tarifs[1][0].name }} - {{
                          $t("БҲМ {value}%", {value: list.tarifs[1][0].value})
                        }};</p>
                      <p>- {{ list.tarifs[2][0].name }} - {{ $t("БҲМ {value}%", {value: list.tarifs[2][0].value}) }}</p>

                      </template><!--
                      <h5>
                        {{
                          $t('Иккинчи ва тўртинчи хизматлар нархлари:')
                        }}</h5>-->
                      <template v-if="[1,3].includes(myAppComputed.application_type)">
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
                      </template>
<!--                      <h5>
                        {{
                          $t('Учинчи хизмат нархлари:')
                        }}</h5>-->
                      <template v-if="myAppComputed.application_type===2">
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
                      </template>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="row mb-3 position-absolute bottom-2 start-0">
                    <a class="ml-10 font-weight-bold " href="https://t.me/eximcustomsproducts">{{ $t('Савол ва таклифлар учун телеграм гуруҳга ёзинг') }}</a>
                </v-row>
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
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card
                  class="mb-12"
              >
                <validation-observer v-slot="{ invalid }" ref="stepValidation3">
                  <v-row>


                    <v-col cols="6" v-show="application.application_type!==2">
                      <ValidationProvider :name="$t('Ҳудуд')"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            :label="$t('Ҳудудий божхона бошқармаси')"
                            v-model="application.region"
                            required
                            :placeholder="$t('Барча ҳудудий бошқармалар')"
                            :hint="(application.region && application.region.count>0)?$t('Танланган ҳудудий бошқармалар'):$t('Барча ҳудудий бошқармалар')"
                            :items="list.regions"
                            :item-text="(item)=>item.value+ '-'+item.text"
                            persistent-placeholder
                            multiple
                            clearable
                            :error-messages="errors[0]"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                style="font-size: 14px"
                                color="#e7f5ed"
                                class="primary-close"
                                @click:close="removeItem('region',data.item.value)"
                            >
                              <span style="font-size: 14px">{{ data.item.text }}</span>
                            </v-chip>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6" v-show="application.application_type!==2">
                      <ValidationProvider :name="$t('Пост')"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            v-model="application.post"
                            :loading="loading.post"
                            required
                            :hint="$t('Божхона постини танланг')"
                            :items="list.posts"
                            :placeholder="$t('Барча божхона постлари')"
                            :item-text="(item)=>item.code + '-' +item.name"
                            item-value="code"
                            persistent-placeholder
                            multiple
                            :label="$t('Божхона постини танланг')"
                            :error-messages="errors[0]"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                style="font-size: 14px"
                                color="#e7f5ed"
                                class="primary-close"
                                @click:close="removeItem('post',data.item.code)"
                            >
                              <span style="font-size: 14px">{{ data.item.name }}</span>
                            </v-chip>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="6">
                      <v-radio-group
                          v-if="application.application_type>2"
                          v-model="application.isRejim"
                          row
                          mandatory
                          class="isCreatedDate"
                      >
                        <v-radio
                            :label="$t('Ташқи савдо айланмаси бўйича')"
                            :value="false"
                        ></v-radio>
                        <v-radio
                            :label="$t('Божхона режимлари бўйича')"
                            :value="true"
                        ></v-radio>
                      </v-radio-group>
                      <ValidationProvider :name="$t('Божхона режими')"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            v-model="application.rejim"
                            :loading="loading.regime"
                            required
                            :hint="$t('Божхона режимини танланг')"
                            :placeholder="$t('Барча божхона режимлари')"
                            :items="comp_rejimes"
                            persistent-placeholder
                            :item-text="(item)=>item.code1+item.code2+'-'+item.name"
                            item-value="id"
                            multiple
                            :error-messages="errors[0]"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                style="font-size: 14px"
                                color="#e7f5ed"
                                class="primary-close"
                                @click:close="removeItem('rejim',data.item.id)"
                            >
                              <span style="font-size: 14px">
                                <template
                                    v-if="(application.application_type===2 || (application.application_type===3 && !application.isRejim)) ">{{
                                    data.item.code1
                                  }}</template>
                                <template v-else>
                                  {{ data.item.code1 }}-{{ data.item.code2 }}
                              </template>
                              </span>
                            </v-chip>
                          </template>
                          <template v-slot:label>{{ $t('Божхона режими') }}</template>
                        </v-autocomplete>
                      </ValidationProvider>

                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('ТИФ ТН код')"
                                          v-slot="{ errors }" style="padding-top: 7px"
                                          class="d-flex align-items-center">
                        <v-text-field
                            v-model="temp.tftn"
                            persistent-placeholder
                            :label="$t('ТИФ ТН код') + ((application.application_type===2)?'*':'')"
                            :placeholder="((application.tftn && application.tftn.length>0) || application.application_type===2 )?'':$t('Барча товарлар')"
                            v-mask="'##########'"
                            class="mr-10"
                            :error-messages="errors[0]"
                        >
                        </v-text-field>
                        <v-btn small color="primary" @click="addData('tftn',((application.application_type===2)?4:2))">
                          <v-icon>mdi-plus</v-icon>
                          {{ $t('Қўшиш') }}
                        </v-btn>

                      </ValidationProvider>
                      <ValidationProvider :name="$t('ТИФ ТН код')" style="margin-bottom: -20px"
                                          :rules="application.application_type===2?'required':''"
                                          v-slot="{ errors }">
                        <v-text-field type="hidden" class="d-none" v-model="application.tftn"></v-text-field>

                        <span class="red--text" v-if="application.application_type===2">{{ errors[0] }}</span>
                      </ValidationProvider>
                      <div class="selected-chips-content w-100" v-if="application.tftn">

                        <v-chip
                            v-for="(appItem, appItemKey) in application.tftn"
                            :key="appItemKey"
                            close
                            style="font-size: 14px; margin: 2px 5px"
                            color="#e7f5ed"
                            class="primary-close"
                            @click:close="removeItem('tftn',appItem)"
                        >
                          <span style="font-size: 14px">{{ appItem }}</span>
                        </v-chip>


                      </div>
                    </v-col>
                    <v-col cols="6" v-show="application.application_type!==2">
                      <ValidationProvider
                          :name="$t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами')"
                          v-slot="{ errors }"
                          class="d-flex align-items-center">
                        <v-text-field
                            v-model="temp.shartnoma"
                            v-mask="'###########################'"
                            :label="$t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами')"
                            :error-messages="errors[0]"
                            :placeholder="(application.shartnoma && application.shartnoma.length>0)?'':$t('Барча шартномалар')"
                            persistent-placeholder
                            class="mr-10"
                        ></v-text-field>
                        <v-btn small color="primary" @click="addData('shartnoma',27)">
                          <v-icon>mdi-plus</v-icon>
                          {{ $t('Қўшиш') }}
                        </v-btn>

                      </ValidationProvider>
                      <div class="selected-chips-content w-100" v-if="application.shartnoma">
                        <v-chip
                            v-for="(appItem, appItemKey) in application.shartnoma"
                            :key="'shartnoma' + appItemKey"
                            close
                            style="font-size: 14px; margin: 2px 5px"
                            color="#e7f5ed"
                            class="primary-close"
                            @click:close="removeItem('shartnoma',appItem)"
                        >
                          <span style="font-size: 14px">{{ appItem }}</span>
                        </v-chip>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <ValidationProvider :name="$t('Давлат')"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            :label="$t('Давлат')"
                            v-model="application.country"
                            :loading="loading.country"
                            required
                            :placeholder="$t('Барча давлатлар')"
                            :item-text="item=> item.CODE + ' - ' + item.CD_NM"
                            item-value="CODE"
                            :items="list.countries"
                            persistent-placeholder
                            :error-messages="errors[0]"
                            multiple
                        >
                          <template v-slot:selection="data">
                            <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                style="font-size: 14px"
                                color="#e7f5ed"
                                class="primary-close"
                                @click:close="removeItem('country',data.item.CODE)"
                            >
                              <span style="font-size: 14px">{{ data.item.CODE }}-{{ data.item.CD_NM }}</span>
                            </v-chip>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="6" v-if="application.application_type===3">
                      <ValidationProvider :name="$t('Тармоқ таркибидаги ташкилотлар')"
                                          v-slot="{ errors }">
                        <v-autocomplete
                            :label="$t('Тармоқ таркибидаги ташкилотлар')"
                            v-model="application.org"
                            :loading="loading.org"
                            multiple
                            required
                            :placeholder="$t('Барча ташкилотлар')"
                            :items="list.netOrgs"
                            persistent-placeholder
                            :error-messages="errors[0]"
                        >
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="6" v-show="application.application_type!==2">
                      <ValidationProvider
                          :name="$t('БЮДнинг тартиб рақами')"
                          v-slot="{ errors }"
                          class="d-flex align-items-center"
                      >
                        <v-text-field
                            v-model="temp.byud"
                            v-mask="'#####/##.##.####/#######'"
                            :error-messages="errors[0]"
                            persistent-placeholder
                            :placeholder="(application.byud && application.byud.length>0)?'':$t('Барча БЮДлар')"
                            :label="$t('БЮДнинг тартиб рақами')"
                            class="mr-10"
                        ></v-text-field>
                        <v-btn small color="primary" @click="addData('byud',24)">
                          <v-icon>mdi-plus</v-icon>
                          {{ $t('Қўшиш') }}
                        </v-btn>

                      </ValidationProvider>
                      <div class="selected-chips-content w-100" v-if="application.byud">
                        <v-chip
                            v-for="(appItem, appItemKey) in application.byud"
                            :key="'byud' + appItemKey"
                            close
                            style="font-size: 14px; margin: 2px 5px"
                            color="#e7f5ed"
                            class="primary-close"
                            @click:close="removeItem('byud',appItem)"
                        >
                          <span style="font-size: 14px">{{ appItem }}</span>
                        </v-chip>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <v-row>

                        <v-radio-group
                            v-if="application.application_type!==2"
                            v-model="application.isCreatedDate"
                            row
                            class="isCreatedDate"
                        >
                          <v-radio
                              :label="$t('БЮД тақдим этилган сана')"
                              :value="true"
                              :disabled="application.application_type===3 && !application.isRejim"
                          ></v-radio>
                          <v-radio
                              :label="$t('БЮД расмийлаштирилган сана')"
                              :value="false"
                          ></v-radio>
                        </v-radio-group>
                        <v-col cols="12" style="margin-top:-15px; margin-bottom:-30px">
                          <span style="font-weight: bold; color: #565656">{{
                              application.application_type !== 2 ? $t('Сана') : $t('БЮД расмийлаштирилган сана')
                            }}*</span>
                          <!--                          <v-row class="align-items-center w-100">
                                                      <v-col cols="6">
                                                        <v-btn :color="application.isCreatedDate?'primary':'default'"
                                                               @click="application.isCreatedDate=true" block> {{ $t('БЮД тақдим этилган сана') }}
                                                        </v-btn>
                                                      </v-col>
                                                      <v-col cols="6">
                                                        <v-btn block :color="!application.isCreatedDate?'primary':'default'"
                                                               @click="application.isCreatedDate=false">{{ $t('БЮД расмийлаштирилган сана') }}
                                                        </v-btn>
                                                      </v-col>
                                                    </v-row>-->
                        </v-col>
                        <v-col cols="5">
                          <ValidationProvider :name="$t('Cанадан')"
                                              v-slot="{ errors }"
                                              rules="required">
                            <editable-date
                                v-model="application.sanadan"
                                :suffix="$t('дан')"
                                :min="threeYearsAgo"
                                :max="maxDate"
                                hint="Мисол: 01-01-2023"
                                :error-messages="errors[0]"
                            />
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="5">
                          <ValidationProvider :name="$t('Cанагача')"
                                              v-slot="{ errors }"
                                              rules="required"
                          >
                            <editable-date
                                v-model="application.sanagacha"
                                :suffix="$t('гача')"
                                :min="threeYearsAgo"
                                :max="maxDate"
                                hint="Мисол: 01-01-2023"
                                :error-messages="errors[0]"
                            />
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </validation-observer>
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
                      style="font-size: 20px">*</sub> - {{ $t('майдонлари албатта тўлдирилиши шарт') }}!
                  </i>

                </v-row>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card
                  class="mb-12"
              >

                <v-row>
                  <h5 class="mb-6">
                    <template v-if="(app_type === 0)">
                      {{ $t('Қўшимча қайси илова ҳужжатларидан нусха олишни хохлайсиз?') }}
                    </template>
                    <template v-else>{{ $t('Қўшимча қайси графаларни юклаб олишни хохлайсиз?') }} <span
                        @click="dialog.primaryFields=true"
                        style="color: var(--mycolor); cursor:pointer">{{ $t('Асосий графаларни кўриш') }}</span>
                    </template>
                  </h5>
                  <v-dialog v-model="dialog.primaryFields" max-width="900">
                    <v-card>

                      <v-toolbar color="primary" dark class="text-center white--text ">
                        <div class="d-flex justify-content-between w-100 align-items-center"><span class="text-h5">
                                    {{ $t('Асосий графалар') }}
                                    </span>
                          <v-btn
                              icon
                              dark
                              @click="dialog.primaryFields = false"
                          >
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </div>
                      </v-toolbar>

                      <v-list
                          flat
                          class="pa-4"
                      >
                        <v-list-item-group
                            class="d-flex flex-wrap"
                        >
                          <v-list-item
                              v-for="(additionField, additionFieldKey) in primaryFields"
                              style="flex-basis: 50%"
                              :key="'asdadasda' + additionFieldKey"
                          >
                            <template v-slot:default="{ active }">

                              <v-list-item-content class="p-0">
                                <v-list-item-title class="text-wrap"
                                                   style="line-height: 22px; font-size: 16px">
                                  {{ additionFieldKey + 1 }}. {{ additionField.name }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                  </v-dialog>


                  <v-list
                      flat
                      class="pa-4"
                      v-if="additions && application.grafalar"
                  >
                    <v-list-item-group
                        v-model="application.grafalar"
                        multiple
                        class="d-flex flex-wrap"
                    >
                      <v-expansion-panels
                          multiple
                          class="additionalfields"
                          v-if="app_type===0"
                      >
                        <v-col cols="6" v-for="(additionItem,additionItemKey) in additions"
                               :key="additionItemKey">
                          <v-expansion-panel v-if="additionItem[0]">
                            <v-expansion-panel-header>{{ additionItem[0].group_name }}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <v-list-item
                                  v-for="(additionField, additionFieldKey) in additionItem"
                                  style="flex-basis: 50%"
                                  :value="additionField.code"
                              >
                                <template v-slot:default="{ active }">
                                  <v-list-item-action class="my-0">
                                    <v-checkbox :input-value="active"></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content class="p-0">
                                    <v-list-item-title class="text-wrap"
                                                       style="line-height: 22px; font-size: 16px">
                                      {{ additionField.code }} -
                                      {{ additionField.name }}
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-col>
                      </v-expansion-panels>
                      <v-list-item
                          v-else
                          v-for="(additionField, additionFieldKey) in additions"
                          style="flex-basis: 50%"
                          :key="'asdad' + additionFieldKey"
                          :value="additionField.code"
                      >
                        <template v-slot:default="{ active }">
                          <v-list-item-action class="my-0">
                            <v-checkbox :input-value="active"></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content class="p-0">
                            <v-list-item-title class="text-wrap"
                                               style="line-height: 22px; font-size: 16px">
                              {{ additionField.name }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>


                    </v-list-item-group>
                  </v-list>
                </v-row>

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
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-card
                  class="mb-12"
              >
                <v-row>
                  <h5 class="text-center">{{ $t('Ариза маълумотлари') }}</h5>

                  <v-simple-table class="pa-15 resultTable" v-if="completedData">
                    <template v-slot:default>
                      <tbody>
                      <tr
                          v-for="item in completedData"
                          v-if="item.value"
                          :key="item.label"
                      >
                        <td style="max-width: 20%">{{ item.label }}</td>
                        <td style="width: 80%">
                          <template v-if="item.value">{{ item.value }}</template>
                          <template v-else>{{ $t('Филтр киритилмаган') }}</template>
                        </td>
                      </tr>
                      </tbody>

                    </template>

                  </v-simple-table>
                  <h5 class="text-center" v-if="(list.prices.length>0 && ![1,2,8].includes(application.status))">{{
                      $t('Аниқланган маълумот хажми ва нархи')
                    }}</h5>
                  <template
                      v-if="![1,2,8].includes(application.status) && list.prices && (list.prices.reduce((sum, item) => sum + parseFloat(item.price), 0))>0">
                    <v-simple-table class="pa-15 pt-1 resultTable" style="text-align: center">
                      <template v-slot:default>
                        <thead>
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
                      <v-btn v-if="[1,8].includes(myAppComputed.status)" color="info"
                             :loading="loadingComputed.calculate"
                             class="mx-0"
                             @click="getPrice(true)">
                        <v-icon>mdi-refresh</v-icon>
                        {{ $t('Маълумот хажми ва нархини Ҳисоблаш') }}
                      </v-btn>
                      <v-btn color="primary" v-if="!list.prices.length" text
                             :loading="application.status===2 && list.prices.length<1">
                      </v-btn>
                      <h6 v-if="myAppComputed.status===2" class="pa-10 text-center font-weight-bold text"
                          style="color: var(--mycolor)">
                        {{ $t('Маълумотлар қидирилмоқда. Бу бир нечта дақиқа олиши мумкин. Илтимос, кутинг!') }}</h6>


                      <h6 v-if="![1,2].includes(application.status)" class="pa-10 text-center font-weight-bold text"
                          style="color: var(--mycolor)">
                        {{ (list.prices.length > 0) ? $t('Ушбу ариза бўйича маълумот топилмади') : '' }}</h6>
                    </div>
                  </template>
                </v-row>
                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                  <v-col class="d-flex tab_action_buttons">
                    <v-btn text
                           @click="prevStep"
                    >
                      {{ $t('Орқага') }}
                    </v-btn>
                    <v-btn
                        :disabled="myAppComputed.status!==3 && !(list.prices.reduce((sum, item) => sum + parseFloat(item.price), 0))>0"
                        color="primary"
                        @click="nextStep"
                        size="large"
                        :loading="loadingButton.five"
                    >
                      {{ $t('Ариза юбориш') }}
                    </v-btn>


                  </v-col>
                </v-row>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>

        </v-stepper>
      </v-container>
    </div>
    <a class="all_news service" target="_blank" href="https://t.me/eximcustomsproducts">
      <img src="/public/images/telegram.png">


      <p> {{ $t('Саволларингизни йўлланг') }}
        <br>
        @eximcustomsproducts
      </p></a>
  </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';
import i18n from "../../../../i18n";
import EditableDate from "../../../../components/form/EditableDate";
import apiClient from "../../../../src/services/apiService";


export default {
  name: "InitialStat",
  data() {
    return {
      dialog: {
        primaryFields: false
      },
      threeYearsAgo: this.getThreeYearsAgo(),
      stepper: 1,
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
          disabled: false,
          exact: true,
        },
        {
          text: i18n.t('Ариза юбориш'),
          to: '/services/stat/create',
          disabled: true,
          exact: true,
        },
      ],
      temp: {
        tftn: null,
        byud: null,
        shartnoma: null

      },
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
        sanadan: null,
        sanagacha: null,
        grafalar: [],
      },
      list: {
        tarifs: null,
        countries: [],
        prices: [],
        posts: [],
        regions: [],
        regimes: [],
        fields: [],
        primaryFields: [],
        netOrgs: []
      },
      loading: {
        country: false,
        post: false,
        fields: false,
        org: false,
        calculate: false
      },
      application_types: [],
      results: [
        {label: 'БЮД сони', value: '', type: 1},
        {label: 'Илова хужжатлар тури', value: '', type: 1},
        {label: 'Қўшимча белгиланган графалар', value: '', type: 2},
        {label: 'Қатор (товар) сони', value: '', type: 2},
        {label: 'Хизмат нархи', value: '', type: 3}
      ],

      person: {
        type: 1, /// 1- fiz 0- yur
        fio: "",
        post: null,
        pin: null,
        tin: null,
        organization_name: "Жисмоний шахс",
        position: "0",
        phone: null,
        email: null,
        region: null,
      },
      app: {
        apps: [],
        docs: [],
        commodities: [],
        id: null,
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      modal: false,
      completedSteps: [],
      loadingButton: {
        first: false,
        second: false,
        third: false,
        four: false
      },
      postloading: false,
      noRequiredTab: false,
      agreed: false,

      fields: [
        {key: 'tradeName', value: i18n.t('Товарнинг тижорат номи')},
        {key: 'tradeMark', value: i18n.t('Товар маркаси')},
        {key: 'model', value: i18n.t('Товар модели'), tab: 1},
        {key: 'basicQty', value: i18n.t('Намуналар сони'), tab: 1},
        {key: 'extraUnits', value: i18n.t('Ўлчов бирлиги')},
        {key: 'comment', value: i18n.t('Қўшимча маълумотлар ва изоҳлар')},
        {key: 'email', value: i18n.t('Электрон почта')},
      ],
      float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$'],
      interval: [],
      bhm: null,
    }
  },
  methods: {
    getThreeYearsAgo() {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 3);
      date.setDate('01');
      date.setMonth('00');
      return date.toISOString().split('T')[0]; // YYYY-MM-DD
    },
    async getTariffs() {
      await axios.get('/api/v1/data/tariffs').then(res => {
        this.list.tarifs = res.data
      })
    },
    async getPrice(calculate = false) {
      const _this = this
      if (calculate) {
        try {
          this.loading.calculate = true
          await axios.get('/api/v1/statservice/price/' + this.$route.params.id, {
            params: {calculate: true}
          }).then(res => {
            _this.loading.calculate = false
            if (res.data.data) _this.list.prices = res.data.data; else _this.list.prices = []
            if (res.data.status) _this.application.status = res.data.status
            if (res.data.error) this.$toast.info(res.data.error)
          }).catch((e) => {
            if (e.response && e.response.data && e.response.data.error) _this.$toast.info(e.response.data.error)
            if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status
            _this.loading.calculate = false
          })
        } catch (e) {
          _this.loading.calculate = false
        }

      } else
        await axios.get('/api/v1/statservice/price/' + this.$route.params.id).then(res => {
          _this.loading.calculate = false
          if (res.data.data) _this.list.prices = res.data.data
          if (res.data.bhm) _this.bhm = res.data.bhm
          if (res.data.status) _this.application.status = res.data.status
        }).catch((e) => {
          if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status
          _this.loading.calculate = false
        })
    },
    removeItem(code = 'tftn', item, field = null) {

      if (field) {
        this.application[code] = this.application[code].filter(filterItem => filterItem[field] !== item)
      } else {
        this.application[code] = this.application[code].filter(filterItem => filterItem !== item)
      }
    },
    addData(code = 'tftn', length = 2) {
      if (!this.temp[code] || this.temp[code].length < length) {
        this.$toast.error(this.$t('Сиз {length} тадан кўп ракам киритишингиз керак', {length: (length - 1)}))
        return
      }
      if (this.application[code].indexOf(this.temp[code]) < 0)
        this.application[code].push(this.temp[code])
      this.temp[code] = null

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
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
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
    async getStatServices() {
      const _this = this
      this.$store.commit('setLoading', true);
      await axios.get('/api/v1/statservice/' + this.$route.params.id, {
        params: {
          pin: this.$auth.user().pin,
          tin: this.$auth.user().tin
        }
      }).then(res => {

        if (res.status === 200) {

          if (typeof res.data.data.id !== 'undefined') {
            _this.application.id = res.data.data.id
            _this.application.status = res.data.data.status
            if (res.data.data.step) {
              _this.stepper = parseInt(res.data.data.step)
            } else {
              this.stepper = 1
              this.$store.commit('setLoading', false);
              return;
            }
            switch (_this.stepper) {
              case 1:
                _this.setPersonData(res.data.data)
                _this.completedSteps.push(1)
                break;
              case 2:
                _this.setPersonData(res.data.data)
                _this.application.application_type = parseInt(res.data.data.application_type)
                _this.completedSteps.push(1)
                _this.completedSteps.push(2)
                break;
              case 3:
                _this.setPersonData(res.data.data)
                _this.application.application_type = parseInt(res.data.data.application_type)
                _this.setThirdStep(res.data.data)
                _this.completedSteps.push(1)
                _this.completedSteps.push(2)
                _this.completedSteps.push(3)
                break;
              case 4:

                _this.setPersonData(res.data.data)
                _this.application.application_type = parseInt(res.data.data.application_type)
                _this.setThirdStep(res.data.data)

                _this.application.grafalar = JSON.parse(JSON.stringify(res.data.data.grafalar))
                _this.completedSteps.push(1)
                _this.completedSteps.push(2)
                _this.completedSteps.push(3)
                _this.completedSteps.push(4)
                break;
              case 5:
                _this.setPersonData(res.data.data)
                _this.application.application_type = parseInt(res.data.data.application_type)
                _this.setThirdStep(res.data.data)
                _this.application.grafalar = JSON.parse(JSON.stringify(res.data.data.grafalar))
                _this.completedSteps.push(1)
                _this.completedSteps.push(2)
                _this.completedSteps.push(3)
                _this.completedSteps.push(4)
                _this.stepper = 5
                break;
            }
          }
        }
        setTimeout(() => {
          this.$store.commit('setLoading', false);
        }, 200)
      }).catch(e => {
        console.log(e)
        this.$toast.error(this.$t('Хатолик юз берди'))
        this.$router.push('/services/stat')
        setTimeout(() => {
          this.$store.commit('setLoading', false);
        }, 200)
      })


    },
    setThirdStep(data) {
      this.application.region = (typeof data['region'] !== 'undefined') ? data['region'] : null;
      this.application.post = (typeof data['post'] !== 'undefined') ? data['post'] : null;
      this.application.org = (typeof data['org'] !== 'undefined') ? data['org'] : null;
      this.application.rejim = (typeof data['rejim'] !== 'undefined') ? data['rejim'] : null;
      this.application.isRejim = (typeof data['is_tsa'] !== 'undefined') ? !data['is_tsa'] : true;
      this.application.tftn = (typeof data['tftn'] !== 'undefined') ? data['tftn'] : [];
      this.application.shartnoma = (typeof data['shartnoma'] !== 'undefined') ? data['shartnoma'] : [];
      this.application.country = (typeof data['country'] !== 'undefined') ? data['country'] : null;
      this.application.tftn = (typeof data['tftn'] !== 'undefined') ? data['tftn'] : [];
      this.application.org_name = (typeof data['org_name'] !== 'undefined') ? data['org_name'] : null;
      this.application.byud = (typeof data['byud'] !== 'undefined') ? data['byud'] : [];
      this.application.sanadan = (typeof data['byudsanadan'] !== 'undefined') ? data['byudsanadan'] : null;
      this.application.sanagacha = (typeof data['byudsanagacha'] !== 'undefined') ? data['byudsanagacha'] : null;
      this.application.isCreatedDate = (typeof data['isCreatedDate'] !== 'undefined') ? data['isCreatedDate'] : false;
    },
    async getPosts(code) {
      this.loading.post = true;
      const _this = this
      this.list.posts = [];
      await axios.get('/api/v1/data/post?code=' + code).then(function (result) {
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
    async getCountries() {
      let root = this
      await this.$auth.plugins.http.get('/api/v1/data/country').then(result => {
        root.list.countries = result.data;
      })
    },
    getField(val) {
      return this.fields.filter((obj) => {
        if (obj.key === val) return obj.value
      })
    },

    isCompletedStep(step) {
      return this.completedSteps.includes(step);
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

    async nextStep() {
      let isValid = false;
      const _this = this;

      switch (this.stepper) {
        case 1:
          this.loadingButton.first = true;
          //console.log(!this.validateField("create_customs_person_value"))
          setTimeout(async () => {
            isValid = await this.validateField("stepValidation1");
            if (isValid === true) {
              this.$store.commit('setLoading', true);
              await axios.post('/api/v1/statservice/' + this.$route.params.id, {
                step: _this.stepper,
                org_name: (this.person.type == 0) ? _this.person.organization_name : this.person.fio,
                address: this.person.perAdr,
                phone: this.person.phone,
                email: this.person.email,
              }).then(async res => {
                await _this.getStatServices();
                _this.completedSteps.push(_this.stepper)
                _this.stepper = 2
                _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));

              }).catch(e => {
                console.log(e.response.data)
                _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
              })

            }
            this.$store.commit('setLoading', false);

            this.loadingButton.first = false;
          })

          break;


        case 2:

          this.loadingButton.second = true;

          setTimeout(async () => {
            if (_this.application.application_type !== null) {
              this.$store.commit('setLoading', true);
              await axios.post('/api/v1/statservice/' + this.$route.params.id, {
                step: _this.stepper,
                application_type: _this.application.application_type
              }).then(function (res) {
                _this.completedSteps.push(_this.stepper)
                _this.stepper = 3
                _this.$toast.success(_this.$t('Хизмат тури сақланди'));
                _this.loadingButton.second = false;

              }).catch(e => {
                console.log(e)
                _this.$toast.error(_this.$t('Хизмат тури маълумотларини сақлашда хатолик юз берди'));
              })

            } else {
              _this.$toast.warning(_this.$t('Илтимос хизмат турини танланг!'));
            }
            this.$store.commit('setLoading', false);
            this.loadingButton.second = false;
          })


          this.loadingButton.second = false;

          break;
        case 3:

          this.loadingButton.third = true;

          setTimeout(async () => {
            isValid = await this.validateField("stepValidation3");
            if (isValid === true) {
              this.$store.commit('setLoading', true);
              await axios.post('/api/v1/statservice/' + this.$route.params.id, {
                pin: _this.$auth.user().pin,
                tin: _this.$auth.user().tin,
                step: _this.stepper,
                id: _this.application.id,
                region: _this.application.region ? _this.application.region : [],
                post: _this.application.post ? _this.application.post : null,
                org: _this.application.org ? _this.application.org : null,
                rejim: _this.application.rejim ? _this.application.rejim : null,
                is_tsa: !_this.application.isRejim,
                tftn: _this.application.tftn ? _this.application.tftn : [],
                shartnoma: _this.application.shartnoma ? _this.application.shartnoma : [],
                country: _this.application.country ? _this.application.country : null,
                byud: _this.application.byud ? _this.application.byud : [],
                byudsanadan: _this.application.sanadan ? _this.application.sanadan : null,
                byudsanagacha: _this.application.sanagacha ? _this.application.sanagacha : null,
                isCreatedDate: _this.application.isCreatedDate ? _this.application.isCreatedDate : null,
              }).then(async function (res) {
                await _this.getStatServices();
                _this.completedSteps.push(_this.stepper)
                // _this.stepper++
                _this.loadingButton.third = false
                _this.$toast.success(_this.$t('Асосий маълумотлар сақланди'));

              }).catch(e => {
                console.log(e)
                _this.$toast.error(_this.$t('Асосий маълумотларни сақлашда хатолик юз берди'));
              })
              this.$store.commit('setLoading', false);

            }

            this.loadingButton.third = false;
          })

          this.loadingButton.third = false;

          break;
        case 4:

          this.loadingButton.four = true;

          setTimeout(async () => {
            this.$store.commit('setLoading', true);
            await axios.post('/api/v1/statservice/' + this.$route.params.id, {
              pin: _this.$auth.user().pin,
              tin: _this.$auth.user().tin,
              step: _this.stepper,
              id: _this.application.id,
              grafalar: _this.application.grafalar ? _this.application.grafalar : null,
            }).then(async function (res) {
              // _this.getStatServices();
              _this.completedSteps.push(_this.stepper)
              await _this.getStatServices();
              _this.loadingButton.four = false
              _this.$toast.success(_this.$t('Қўшимча маълумотлар сақланди'));

            }).catch(e => {
              console.log(e)
              _this.$toast.error(_this.$t('Қўшимча маълумотларни сақлашда хатолик юз берди'));
            })

            this.$store.commit('setLoading', false);
            this.loadingButton.four = false;
          })

          this.loadingButton.four = false;

          break;
        case 5:

          this.loadingButton.five = true;

          setTimeout(async () => {
            this.$store.commit('setLoading', true);
            await axios.post('/api/v1/statservice/' + this.$route.params.id, {
              step: _this.stepper,
              id: _this.application.id,
            }).then(function (res) {
              // _this.getStatServices();
              _this.$router.push('/services/stat/info/' + _this.application.id)
              _this.loadingButton.five = false
              _this.$toast.success(_this.$t('Ариза юборилди'));

            }).catch(e => {
              console.log(e)
              _this.$toast.error(_this.$t('Аризани сақлашда хатолик юз берди'));
            })


            _this.loadingButton.five = false
            this.$store.commit('setLoading', false);
          })

          _this.loadingButton.five = false

          break;
        default:
          this.completedSteps.push(this.stepper)
          this.stepper++
          break;

      }


    },
    prevStep() {
      if (this.application.status === 2) return;
      switch (this.stepper) {
        case 1:
          this.stepper = 1;
          break;

        case 2:
          this.stepper = 1;
          break;

        default:
          this.stepper = this.stepper - 1;
          break;


      }
    },
    goStep(step = 1) {
      if (this.application.status === 2) return;
      if ((this.completedSteps.includes(step))) {
        this.stepper = step;
      }
    },
    isCompleted(step) {
      if (this.completedSteps.includes(step)) {
        //console.log(step);
        return true;
      } else return false;

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
      await this.$auth.plugins.http.get('/api/v1/data/region').then(function (result) {
        _this.list.regions = result.data
      })
    },

    initialize() {
      this.getBoshqarmalar();
      this.setPersonData()
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
  },
  watch: {
    'application.application_type': {
      handler(value, oldValue) {
        if (value !== oldValue && value) {
          this.completedSteps = [1, 2]
        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.region': {
      handler(value) {
        //console.log(value)
        if (typeof value !== 'undefined' && value) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          this.getPosts(value)
          // })
        }

      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.status': {
      handler(value) {
        if (typeof value !== 'undefined' && value) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          if (value === 2 && this.interval.length < 1) {
            const interval = setInterval(() => {
              this.getPrice()
            }, 5000)
            this.interval.push(interval)
          }
          if ([3, 8].includes(value) && this.interval.length > 0) {
            this.interval.forEach(intervalItem => {
              clearInterval(intervalItem)
            })
            this.interval = []

          }
          // })
        }

      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.isRejim': {
      handler(value, oldValue) {
        if (value !== oldValue) {
          if(!value && this.application.application_type===3){
            this.application.isCreatedDate=false
          }
          this.application.rejim = []
        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'stepper': {
      async handler(value) {
        //console.log(value)
        if (typeof value !== 'undefined' && [3, 4, 5].includes(value)) {
          await this.getRegimes();
        }
        if (typeof value !== 'undefined' && [4, 5].includes(value)) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          await this.getFields();

          /*          if (value === 5) {


                    }*/
          // })
        }

      },
      immediate: true,
      deep: true,
      sync: true
    },
  },
  async created() {
    await this.getApplicationTarmoq()
    await this.getStatServices()
    if (this.application.status === 2) {
      const interval = setInterval(() => {
        this.getPrice()
      }, 5000);
      this.interval.push(interval)
    }
    await this.getCountries()
    await this.getTariffs()

  },
  mounted() {
    this.getRegimes();/*
    this.getFields();*/
    this.getApplicationTypes();
    setTimeout(() => {
      this.$store.commit('setLoading', true);
    })
    this.initialize()
    this.$store.commit('setLoading', false);
    this.getPrice()


  },
  beforeUnmount() {
    this.interval.forEach(intervalItem => {
      clearInterval(intervalItem)
    })
  },
  computed: {
    maxDate() {
      if (![2, 3].includes(this.application.application_type)) {

        return (new Date).toISOString().split('T')[0]

      }
      if (this.application.application_type === 3 && this.application.isRejim)
        return (new Date).toISOString().split('T')[0]
      const now = new Date();
      const lastDay = new Date(now.getFullYear(), now.getMonth(), 1);
      return lastDay.toISOString().split("T")[0];
    },
    myAppComputed() {
      return this.application
    },
    loadingComputed() {
      return this.loading
    },
    completedData() {
      const _this = this


      return [
        {label: i18n.t('ТИФ иштирокчиси'), value: this.application.org_name},
        {label: i18n.t('СТИР'), value: this.person.tin},
        {label: i18n.t('Манзили'), value: this.person.perAdr},
        {label: i18n.t('Телефон рақами'), value: this.person.phone},
        {label: i18n.t('Электрон почта манзили'), value: this.person.email},
        {
          label: i18n.t('Хизмат тури'),
          value: (this.application.application_type !== null && this.application_types[this.application.application_type]) ? this.application_types[this.application.application_type].name : ''
        },
        {
          label: (this.application.application_type !== 0) ? this.$t('Илова хужжатлар тури') : this.$t('Қўшимча белгиланган графалар'),
          value: (this.application.grafalar && this.application.grafalar.length > 0) ? this.additions.filter(fieldItem => this.application.grafalar.includes(fieldItem.code)).map(grafaItem => {
            return grafaItem.name;
          }).join(', ') : null
        },
        {
          label: i18n.t('Ҳудудий божхона бошқармаси'),
          value: (this.application.region && this.application.region.length > 0) ? this.list.regions.filter(item => this.application.region.includes(item.value)).map(el => el.text).join(', ') : null
        },
        {
          label: i18n.t('Пост'),
          value: (this.application.post && this.application.post.length > 0) ? this.list.posts.filter(item => this.application.post.includes(item.code)).map(el => el.name).join(', ') : ''
        },
        {
          label: i18n.t('Тармоқ корхоналар'),
          value: (this.application.org && this.application.org.length > 0) ? this.list.netOrgs.filter(item => this.application.org.includes(item.value)).map(el => el.text).join(', ') : ''
        },
        {
          label: i18n.t('Божхона режими'),
          value: (this.application.rejim && this.application.rejim.length > 0) ? this.list.regimes.filter(item => this.application.rejim.includes(item.id)).map(el => el.name).join(', ') : ''
        },
        {
          label: i18n.t('ТИФ ТН код'),
          value: (this.application.tftn && this.application.tftn.length > 0) ? this.application.tftn.join(',') : null
        },
        {
          label: i18n.t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами'),
          value: (this.application.shartnoma && this.application.shartnoma.length > 0) ? this.application.shartnoma.join(',') : null
        },
        {
          label: i18n.t('Давлат'),
          value: (this.application.country !== null && this.findElementInlist(this.list.countries, this.application.country, 'value')) ? this.findElementInlist(this.list.countries, this.application.country, 'value').title : ''
        },
        {
          label: i18n.t('БЮДнинг тартиб рақами'),
          value: (this.application.byud && this.application.byud.length > 0) ? this.application.byud.join(',') : null
        },
        {
          label: (this.application.application_type !== 2 && this.application.isCreatedDate) ? this.$t('БЮД тақдим этилган санадан') : this.$t('БЮД расмийлаштирилган санадан'),
          value: this.application.sanadan
        },
        {
          label: (this.application.application_type !== 2 && this.application.isCreatedDate) ? this.$t('БЮД тақдим этилган санагача') : this.$t('БЮД расмийлаштирилган санагача'),
          value: this.application.sanagacha
        },
      ]
    },
    additions() {
      if (this.application.application_type === 0) return Object.values(this.list.fields)
      else return Object.values(this.list.fields)
    },
    primaryFields() {
      return this.list.primaryFields
    },
    app_type() {
      return this.application.application_type
    },
    listTarifs() {
      return this.list.tarifs
    },
    comp_rejimes() {
      if (this.application.application_type === 2) return this.list.regimes
      if (this.application.isRejim || [0, 1].includes(this.application.application_type)) return this.list.regimes.filter(item => item.type === 'umumiy')
      return this.list.regimes.filter(item => item.type === 'tsa')
    }
  }
  ,
  filters: {
    reverse: function (array) {
      return array.slice().reverse()
    }
  },
  components: {
    EditableDate,
    ValidationProvider,
    ValidationObserver,
  }
}
</script>
<style scoped lang="scss">


.price-block {
  padding: 30px;
  border: 1px solid var(--mycolor);
  margin-top: 25px;
  border-radius: 10px;
  min-height:330px;

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
    border: 1px solid #ccc;
  }
}
</style>
<style lang="scss">

.isCreatedDate {
  label {
    top: 3px !important;
  }
}

.v-chip:not(.v-chip--no-color).primary-close button.v-chip__close {
  color: #39ae69;
}

.section.customs-value-section .switch .v-label {
  top: 2px;
}

.section.customs-value-section .v-label {
  &.v-label--active {
    font-size: 20px;
  }

  font-weight: bolder;
  color: #565656 !important;
  top: -5px;
}

.additionalfields .v-expansion-panel-content__wrap {
  max-height: 15rem;
  min-height: 15rem;
  overflow: scroll;
}
</style>
