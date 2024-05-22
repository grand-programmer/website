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
                            Расмийлаштирилган божхона юк декларациялари тўғрисидаги маълумотларни олиш
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
                            Аризачи маълумотлари
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="2"
                            :complete="isCompleted(2)"
                            @click="goStep(2)"
                        >
                            Хизмат тури
                        </v-stepper-step>
                        <v-divider></v-divider>

                        <v-stepper-step
                            step="3"
                            :complete="isCompleted(3)"
                            @click="goStep(3)"
                        >
                            Асосий маълумотлар
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="4"
                            :complete="isCompleted(4)"
                            @click="goStep(4)"
                        >
                            Қўшимча маълумотлар
                        </v-stepper-step>
                        <v-divider></v-divider>

                        <v-stepper-step
                            step="5"
                            :complete="isCompleted(5)"
                            @click="goStep(5)"
                        >
                            Якуний
                        </v-stepper-step>

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/hscode_guide.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                                    <v-row class="person_data">
                                        <v-col cols="6">
                                            <ValidationProvider name="ТИФ иштирокчиси номи"
                                                                rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.organization_name"
                                                    :counter="200"
                                                    label="Ташкилот номи"
                                                    required
                                                    hint="Юридик шахснинг тўлиқ номи"
                                                    persistent-placeholder
                                                    :error-messages="errors[0]"
                                                >
                                                    <template v-slot:label>Ташкилот номи <sup>*</sup></template>

                                                </v-text-field>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="СТИР"
                                                                rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.tin"
                                                    :counter="9"
                                                    label="СТИР"
                                                    type="number"
                                                    required
                                                    hint="Солиқ тўловчининг идентификацион рақами"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>СТИР <sup>*</sup></template>

                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Манзили"
                                                                rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.perAdr"
                                                    :counter="200"
                                                    required
                                                    :hint="person.type==1?'Аризачининг манзили':'Юридик шахснинг манзили'"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Манзили <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Телефон рақами"
                                                                rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.phone"
                                                    label="Телефон рақами"
                                                    required
                                                    v-mask="'+998 ## ### ## ##'"
                                                    hint="Аризачининг телефон рақами"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Телефон рақами <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Электрон почта" rules="required|email"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.email"
                                                    :counter="200"
                                                    label="Электрон почта манзили"
                                                    required
                                                    hint="Аризачининг электрон почтаси"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Электрон почта манзили <sup>*</sup>
                                                    </template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>


                                    </v-row>

                                </ValidationObserver>
                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                                <v-row class="bottom-required-info">
                                    <i style="font-size: 12px;"><sub
                                        style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!
                                    </i>

                                </v-row>

                            </v-card>

                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-card
                                class="mb-12"
                            >
                                <h5 class="text-center mb-4">
                                    {{ $t('Импорт ва экспорт қилинган товарлар тўғрисида маълумот олиш') }}</h5>

                                <v-row class="px-4">
                                    <v-col cols="6">
                                        <v-list
                                            flat
                                        >
                                            <v-list-item-group
                                                v-model="application.serviceType"
                                                active-class=""
                                            >
                                                <v-list-item two-line
                                                             v-for="(serviceItem, serviceItemKey) in serviceTypes"
                                                             class="my-4"
                                                             :disabled="!(list.netOrgs.includes($auth.user().tin)) && serviceItemKey===2 "
                                                             style="box-shadow: 0 5px 15px 1px #ccc; border-radius: 10px">
                                                    <template v-slot:default="{ active }">
                                                        <v-list-item-action>
                                                            <v-checkbox :input-value="active"></v-checkbox>
                                                        </v-list-item-action>

                                                        <v-list-item-content>
                                                            <v-list-item-title class="text-wrap"
                                                                               style="line-height: 22px; font-size: 16px">
                                                                {{ serviceItem.title }}
                                                            </v-list-item-title>
                                                            <v-list-item-subtitle v-if="serviceItemKey===2"
                                                                                  style="color:var(--mycolor); font-size: 12px">
                                                                Фақат тармоқ корхоналари учун
                                                            </v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </template>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                    <v-col cols="6">
                                        <div class="price-block">
                                            <h4>{{ $t('Хизматдан фойдаланиш нархи') }}</h4>
                                            <h5>{{
                                                    $t("Божхона юк декларацияси ва илова ҳужжатларини юклаб олиш нархи:")
                                                }}</h5>
                                            <p>- {{ $t("битта божхона юк декларациясини юклаб олиш БҲМ 1 %") }};</p>
                                            <p>- {{
                                                    $t("божхона юк декларациясига илова қилинган ҳар бир хужжат турини юклаб олиш БҲМ 1 %")
                                                }};</p>
                                            <h5>
                                                {{
                                                    $t('Жадвал кўринишидаги маълумотларни юклаб олиш учун хизмат нархи:')
                                                }}</h5>
                                            <v-row>
                                                <v-col cols="6">
                                                    <p>- 100 та қаторгача (товар) - БҲМ 5%;</p>
                                                    <p>- 500 та қаторгача (товар) - БҲМ 10%;</p>
                                                    <p>- 1 000 та қаторгача (товар) - БҲМ 20%;</p>
                                                    <p>- 5 000 та қаторгача (товар) - БҲМ 50%;</p>
                                                </v-col>
                                                <v-col cols="6">
                                                    <p>- 10 000 та қаторгача (товар) - 1 БҲМ;</p>
                                                    <p>- 50 000 та қаторгача (товар) - 2 БҲМ;</p>
                                                    <p>- 100 000 та қаторгача (товар) - 3 БҲМ;</p>
                                                    <p>- Қўшимча хар бир графа учун- БҲМ 5%.</p>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            Давом этиш
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


                                        <v-col cols="6" v-show="application.serviceType!==2">
                                            <ValidationProvider name="Ҳудуд"
                                                                v-slot="{ errors }">
                                                <v-autocomplete

                                                    v-model="application.region"
                                                    required
                                                    hint="Ҳудудий божхона бошқармаси"
                                                    :items="list.regions"
                                                    persistent-hint
                                                    :error-messages="errors[0]"
                                                >
                                                    <template v-slot:label>Ҳудудий божхона бошқармаси <sup>*</sup>
                                                    </template>
                                                </v-autocomplete>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6" v-show="application.serviceType!==2">
                                            <ValidationProvider name="Пост"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    v-model="application.post"
                                                    :loading="loading.post"
                                                    required
                                                    hint="Божхона постини танланг"
                                                    :items="list.posts"
                                                    persistent-hint
                                                    label="Божхона постини танланг"
                                                    :error-messages="errors[0]"
                                                >
                                                </v-autocomplete>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Божхона режими"
                                                                v-slot="{ errors }">
                                                <v-autocomplete

                                                    v-model="application.rejim"
                                                    required
                                                    hint="Божхона режимини танланг"
                                                    :items="list.regimes"
                                                    persistent-hint
                                                    item-text="title"
                                                    item-value="value"
                                                    :error-messages="errors[0]"
                                                >
                                                    <template v-slot:label>Божхона режими</template>
                                                </v-autocomplete>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="ТИФ ТН код"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="application.tftn"
                                                    persistent-hint
                                                    label="ТИФ ТН код"
                                                    :error-messages="errors[0]"
                                                    v-mask="'##########'"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6" v-show="application.serviceType!==2">
                                            <ValidationProvider
                                                name="Шартноманинг ТСО ЯЭАТдаги идентификация рақами"
                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="application.shartnoma"
                                                    persistent-hint
                                                    v-mask="'###########################'"
                                                    label="Шартноманинг ТСО ЯЭАТдаги идентификация рақами"
                                                    :error-messages="errors[0]"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Давлат"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    label="Давлат"
                                                    v-model="application.country"
                                                    :loading="loading.country"
                                                    required
                                                    :items="list.countries"
                                                    persistent-hint
                                                    :error-messages="errors[0]"
                                                >
                                                </v-autocomplete>
                                            </ValidationProvider>
                                        </v-col>

                                        <v-col cols="6" v-show="application.serviceType===2 && 1===2">
                                            <ValidationProvider name="Тармоқ таркибидаги ташкилотлар"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    label="Тармоқ таркибидаги ташкилотлар"
                                                    v-model="application.org"
                                                    :loading="loading.org"
                                                    required
                                                    :items="list.orgs"
                                                    persistent-hint
                                                    :error-messages="errors[0]"
                                                >
                                                </v-autocomplete>
                                            </ValidationProvider>
                                        </v-col>

                                        <v-col cols="6" v-show="application.serviceType!==2">
                                            <ValidationProvider
                                                name="БЮДнинг тартиб рақами"
                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="application.byud"
                                                    v-mask="'#####/##.##.####/#######'"
                                                    :error-messages="errors[0]"
                                                    persistent-placeholder
                                                    :label="'БЮДнинг тартиб рақами'"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6" v-show="application.serviceType!==2">
                                            <v-row>
                                                <v-col cols="12" style="margin-top:-15px; margin-bottom:-45px">
                                                    {{ $t('БЮД тақдим этилган сана') }}
                                                </v-col>
                                                <v-col cols="5">
                                                    <ValidationProvider name="БЮД тақдим этилган санадан"
                                                                        v-slot="{ errors }"
                                                                        rules="required">
                                                        <editable-date
                                                            v-model="application.sanadan"
                                                            :suffix="'дан'"
                                                            hint="Мисол: 01-01-2023"
                                                            :error-messages="errors[0]"
                                                        />
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="5">
                                                    <ValidationProvider name="БЮД тақдим этилган санагача"
                                                                        v-slot="{ errors }"
                                                                        rules="required"
                                                    >
                                                        <editable-date
                                                            v-model="application.sanagacha"
                                                            :suffix=" 'гача'"
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
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                                <v-row class="bottom-required-info">
                                    <i style="font-size: 12px;"><sub
                                        style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!
                                    </i>

                                </v-row>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-card
                                class="mb-12"
                            >

                                <v-row>
                                    <h5 class="mb-6">{{
                                            $t('Қўшимча қайси илова ҳужжатларидан нусха олишни хохлайсиз?')
                                        }}</h5>

                                    <v-list
                                        flat
                                        class="pa-4"
                                    >
                                        <v-list-item-group
                                            v-model="application.grafalar"
                                            active-class=""
                                            multiple
                                            class="d-flex flex-wrap"
                                        >
                                            <v-list-item v-for="additionField in additionFields"
                                                         style="flex-basis: 50%">
                                                <template v-slot:default="{ active }">
                                                    <v-list-item-action class="my-0">
                                                        <v-checkbox :input-value="active"></v-checkbox>
                                                    </v-list-item-action>

                                                    <v-list-item-content class="p-0">
                                                        <v-list-item-title class="text-wrap"
                                                                           style="line-height: 22px; font-size: 16px">
                                                            {{ additionField }}
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
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            Давом этиш
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
                                    <v-simple-table class="pa-15 resultTable">
                                        <template v-slot:default>
                                            <tbody>
                                            <tr
                                                v-for="item in completedData"
                                                v-if="item.value"
                                                :key="item.label"
                                            >
                                                <td style="max-width: 20%">{{ item.label }}</td>
                                                <td style="width: 80%">{{ item.value }}</td>
                                            </tr>
                                            </tbody>

                                        </template>

                                    </v-simple-table>
                                    <h5 class="text-center">{{ $t('Аниқланган маълумот хажми ва нархи') }}</h5>
                                    <v-simple-table class="pa-15 resultTable">
                                        <template v-slot:default>
                                            <tbody>
                                            <tr
                                                v-for="(item,itemKey) in results"
                                                :key="item.label"
                                                v-if="(application.serviceType===0 && item.type===1) || (application.serviceType!==0 && item.type===2) || item.type===3"
                                            >
                                                <td style="max-width: 20%">{{ item.label }}</td>
                                                <td style="width: 80%" v-if="itemKey===4">{{ item.value }}
                                                    <v-dialog
                                                    v-model="dialog"
                                                    width="900"
                                                    v-if="application.status===1"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                            color="success"
                                                            small
                                                            dark
                                                            class="ml-4"
                                                            v-bind="attrs"
                                                            v-on="on"
                                                        >
                                                            {{$t('Тўлаш')}}
                                                        </v-btn>
                                                    </template>

                                                    <v-card>
                                                        <v-card-title class="text-h5 py-2 white--text" style="background-color: var(--mycolor)">
                                                            Оферта
                                                        </v-card-title>

                                                        <v-card-text>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </v-card-text>

                                                        <v-divider></v-divider>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                text
                                                                color="primary"
                                                                @click="agree()"
                                                            >
                                                                {{$t('Розиман')}}
                                                            </v-btn>
                                                            <v-btn
                                                                color="primary"
                                                                text
                                                                @click="dialog = false"
                                                            >
                                                                Ёпиш
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog></td>
                                                <td style="width: 80%" v-else>{{ item.value }}</td>
                                            </tr>
                                            <tr v-if="application.status===2">
                                                <td>{{ $t('Тўлов ҳолатини текшириш') }}</td>
                                                <td><span>{{(application.status===3)?$t('Тўланган'):$t('Тўланмаган')}}</span><v-btn color="success" small class="ml-4">Текшириш</v-btn></td>
                                            </tr>
                                            <tr>
                                                <td>Натижа</td>
                                                <td><span @click="getByud">Юклаб олиш</span></td>
                                            </tr>
                                            </tbody>

                                        </template>

                                    </v-simple-table>
                                </v-row>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>

                </v-stepper>
            </v-container>
        </div>
        <a class="all_news service" target="_blank" href="https://t.me/HsCodeDecisions">
            <img src="/public/images/telegram.png">


            <p> Саволларингизни йўлланг
                <br>
                @HsCodeDecisions
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


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "InitialStat",
    data() {
        return {
            stepper: 1,
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Расмийлаштирилган божхона юк декларациялари тўғрисидаги маълумотларни олиш',
                    to: '/services/stat',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Ариза юбориш',
                    to: '/services/stat/create',
                    disabled: true,
                    exact: true,
                },
            ],
            application: {
                id: null,
                serviceType: null,
                rejim: null,
                region: null,
                post: null,
                org: null,
                tftn: null,
                shartnoma: null,
                country: null,
                byud: null,
                sanadan: null,
                sanagacha: null,
                grafalar: [],
            },
            list: {
                countries: [],
                posts: [],
                regions: [],
                regimes: [
                    {title: 'ЭК 10', value: 'ЭК10'},
                    {title: 'ЭК 11', value: 'ЭК11'},
                    {title: 'ЭК 12', value: 'ЭК12'},
                    {title: 'ИМ 40', value: 'ИМ40'},
                    {title: 'ИМ 41', value: 'ИМ41'},
                    {title: 'ИМ 42', value: 'ИМ42'},
                    {title: 'ИМ 51', value: 'ИМ51'},
                    {title: 'ЭК 61', value: 'ЭК61'},
                    {title: 'ИМ 70', value: 'ИМ70'},
                    {title: 'ИМ 71', value: 'ИМ71'},
                    {title: 'ЭК 71', value: 'ЭК71'},
                    {title: 'ИМ 72', value: 'ИМ72'},
                    {title: 'ЭК 73', value: 'ЭК73'},
                    {title: 'ИМ 74', value: 'ИМ74'},
                    {title: 'ИМ 75', value: 'ИМ75'},
                    {title: 'ИМ 76', value: 'ИМ76'},
                    {title: 'ТР 80', value: 'ТР80'},
                    {title: 'ПЕ 40', value: 'ПЕ40'},
                    {title: 'ПР 40', value: 'ПР40'},
                    {title: 'ЭК 72', value: 'ЭК72'},
                    {title: 'ВД 40', value: 'ВД40'},
                    {title: 'ИМ 73', value: 'ИМ73'},
                    {title: 'ЭК 74', value: 'ЭК74'},
                    {title: 'ПЕ 72', value: 'ПЕ72'},
                    {title: 'ВД 10', value: 'ВД10'},
                    {title: 'НД 40', value: 'НД40'},


                ],
                netOrgs: [
                    200242936,
                    200460222,
                    200523356,
                    200541438,
                    200541754,
                    200542744,
                    200547444,
                    200547792,
                    200548371,
                    200548507,
                    200555349,
                    200626188,
                    200626805,
                    200628564,
                    200628589,
                    200637561,
                    200637696,
                    200638710,
                    200794677,
                    200794867,
                    200825794,
                    200827404,
                    200829053,
                    200833707,
                    200836354,
                    200837914,
                    200848172,
                    200849203,
                    200896691,
                    200897144,
                    200898285,
                    200933985,
                    200934644,
                    200934675,
                    200935112,
                    200935548,
                    200935974,
                    200936110,
                    200936214,
                    200936561,
                    200936593,
                    200981397,
                    200984194,
                    200986825,
                    201042345,
                    201051421,
                    201051699,
                    201051951,
                    201053774,
                    201053901,
                    201053918,
                    201055090,
                    201055108,
                    201059022,
                    201059473,
                    201099116,
                    201122696,
                    201122744,
                    201122775,
                    201122808,
                    201122919,
                    201122941,
                    201123125,
                    201124242,
                    201124281,
                    201155766,
                    201162995,
                    201178469,
                    201190645,
                    201204514,
                    201221770,
                    201221898,
                    201222058,
                    201272843,
                    201283204,
                    201389395,
                    201589828,
                    201590962,
                    201675942,
                    201685882,
                    201794794,
                    201794810,
                    201862006,
                    201960034,
                    201981049,
                    202076247,
                    202167236,
                    202184026,
                    202288236,
                    202328794,
                    202328944,
                    202858483,
                    202880854,
                    202883501,
                    202990646,
                    203071206,
                    203556638,
                    203621367,
                    203644820,
                    203709707,
                    203940968,
                    204815109,
                    205471782,
                    206276564,
                    206916313,
                    206942764,
                    207018693,
                    207086151,
                    207127843,
                    207168405,
                    207215726,
                    207243390,
                    207246047,
                    207250605,
                    207254433,
                    207254654,
                    207255503,
                    207257279,
                    207258024,
                    207262226,
                    207269209,
                    207270540,
                    207271524,
                    207273386,
                    207274052,
                    207275011,
                    207277776,
                    207290120,
                    207291167,
                    207291293,
                    207293307,
                    207297973,
                    207318613,
                    207323290,
                    207324986,
                    207327024,
                    207327665,
                    302762364,
                    303489171,
                    304413384,
                    304457511,
                    304457693,
                    304952767,
                    305105101,
                    305166715,
                    305188309,
                    305410292,
                    305601481,
                    305636074,
                    306045611,
                    306135831,
                    306142966,
                    306303488,
                    306347741,
                    306349304,
                    306350099,
                    306605769,
                    306628114,
                    306646884,
                    306649190,
                    306705224,
                    308425864,
                    308450922,
                    309016201,
                    309319117,
                    309339432,

                ]
            },
            loading: {
                country: false,
                post: false,
                org: false
            },
            serviceTypes: [
                {id: 0, title: 'Божхона юк декларацияларини юклаб олиш'},
                {
                    id: 1,
                    title: 'Ташқи иқтисодий фаолият иштирокчиларининг ўзи томонидан расмийлаштирилган товарлар тўғрисида маълумот (жадвал кўринишида)'
                },
                {
                    id: 2,
                    title: 'Республикага импорт қилинган ҳамда ундан экспорт қилинган товарлар тўғрисида маълумот (жадвал кўринишида)'
                },
                {
                    id: 3,
                    title: 'Иқтисодиёт тармоқлари таркибидаги ташкилотлар импорти ва экспорти тўғрисида маълумот (жадвал кўринишида)'
                }
            ],
            additionFields: [
                this.$t('101 - Лицензия'),
                this.$t('202 - CMR'),
                this.$t('203 - Коносамент'),
                this.$t('204 - ТИР-карнет'),
                this.$t('205 - Авиа-юк хати'),
                this.$t('206 - Почта юк хати'),
                this.$t('207 - СМГС шаклидаги темир йўл юк хати'),
                this.$t('220 - Инвойси (ҳисоб, ҳисоб-фактура)'),
                this.$t('222 - Ўров варағи'),
                this.$t('406 - Санитария-эпидемиология хулосаси'),
                this.$t('410 - Карантин рухсатномаси'),
                this.$t('417 - Мувофиқлик сертификати'),
                this.$t('418 - Ўзстандарт агентлигининг хати'),
                this.$t('419 - Фитосанитария сертификати'),
                this.$t('420 - Экология сертификати'),
                this.$t('701 - Товарларнинг келиб чиқиш сертификати (импортда)'),
                this.$t('804 - Экспорт БЮДси'),
            ],
            additionalFields2: [
                this.$t('11-графа - Савдо қилинаётган мамлакат'),
                this.$t('13-графа - АҚШ доллари курси'),
                this.$t('14-графа - Декларант/божхона брокери'),
                this.$t('18-графа - Жўнатиш/етказиб бериш вақтидаги транспорт воситаси'),
                this.$t('20-графа - Етказиб бериш шартлари'),
                this.$t('21-графа - Чегарадаги транспорт воситаси'),
                this.$t('23-графа - Валюта курси'),
                this.$t('24-графа - Битим хусусияти'),
                this.$t('28-графа - Молия ва банк маълумотлари'),
                this.$t('29-графа - Чегарадаги божхона'),
                this.$t('34-графа - Келиб чиқиш мамлакати коди'),
                this.$t('35-графа - Брутто вазн (кг)'),
                this.$t('37-графа – Процедура'),
                this.$t('40-графа - Умумий декларация/аввалги ҳужжат'),
                this.$t('43-графа – Товар олиб ўтиш мақсади (ўз эҳтиёжи/тижорат)'),
                this.$t('44-графа – Тақдим этилаётган ҳужжатлар (620, 627, 629 - бандлар)'),
                this.$t('47-графа - Божхона тўловларининг ҳисоби'),
                this.$t('50-графа - Ишонч билдирган шахс'),
                this.$t('54-графа - Жой ва сана'),
            ],
            results: [
                {label: 'БЮД сони', value: '', type: 1},
                {label: 'Илова хужжатлар тури', value: '', type: 1},
                {label: 'Қатор (товар) сони', value: '', type: 2},
                {label: 'Қўшимча белгиланган графалар', value: '', type: 2},
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
            dialog: false,

            fields: [
                {key: 'tradeName', value: 'Товарнинг тижорат номи'},
                {key: 'tradeMark', value: 'Товар маркаси'},
                {key: 'model', value: 'Товар модели', tab: 1},
                {key: 'basicQty', value: 'Намуналар сони', tab: 1},
                {key: 'extraUnits', value: 'Ўлчов бирлиги'},
                {key: 'comment', value: 'Қўшимча маълумотлар ва изоҳлар'},
                {key: 'email', value: 'Электрон почта'},
            ],
            float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$']
        }

    },
    methods: {
        agree(){
            axios.post('/api/v1/statservice/agree',{agree: true}).then(res =>{
                this.getStatServices();
            })
        },
        getByud(){
            axios.get('/api/v1/statservice/export',{responseType: 'blob'}).then(res =>{
                console.log(res)
                const FILE = window.URL.createObjectURL(new Blob([res.data]));

                const docUrl = document.createElement('a');
                docUrl.href = FILE;
                docUrl.setAttribute('download', 'example.xlsx');
                document.body.appendChild(docUrl);
                docUrl.click();
            })
        },
        findElementInlist (list = [], search, searchKey = 'id', type = 'single') {
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
            await axios.get('/api/v1/statservice', {params: {id: _this.$route.params.id}}).then(async res => {
                if (res.status === 200) {
                    if(typeof res.data.data.id !== 'undefined'){
                        _this.application.id = res.data.data.id
                        _this.stepper = res.data.data.step
                        _this.application.status = res.data.data.status
                        switch (res.data.data.step){
                            case 1:
                                _this.setPersonData(res.data.data)
                                _this.completedSteps.push(1)
                                break;
                            case 2:
                                _this.setPersonData(res.data.data)
                                _this.application.serviceType = parseInt(res.data.data.servicetype)
                                _this.completedSteps.push(1)
                                _this.completedSteps.push(2)
                                break;
                            case 3:
                                _this.setPersonData(res.data.data)
                                _this.application.serviceType = parseInt(res.data.data.servicetype)
                                _this.setThirdStep(res.data.data)
                                _this.completedSteps.push(1)
                                _this.completedSteps.push(2)
                                _this.completedSteps.push(3)
                                break;
                            case 4:
                                _this.setPersonData(res.data.data)
                                _this.application.serviceType = parseInt(res.data.data.servicetype)
                                _this.setThirdStep(res.data.data)
                                _this.application.grafalar = res.data.data.grafalar
                                _this.completedSteps.push(1)
                                _this.completedSteps.push(2)
                                _this.completedSteps.push(3)
                                _this.completedSteps.push(4)
                                _this.results.forEach((item, itemKey)=>{
                                    _this.results[itemKey].value=''
                                })
                                _this.results[0].value = res.data.data.count
                                _this.results[2].value = res.data.data.count
                                _this.results[4].value = res.data.data.price + ' ' + _this.$t('сўм')

                                _this.application.grafalar.forEach((item,itemKey) =>{
                                    if(_this.application.serviceType===0) {
                                        if (_this.results[1].value.length > 0) {
                                            _this.results[1].value = _this.results[1].value + ', ' + _this.additionFields[item]
                                            _this.results[3].value = _this.results[3].value + ', ' + _this.additionFields[item]
                                        } else {
                                            _this.results[1].value = _this.additionFields[item]
                                            _this.results[3].value = _this.additionFields[item]
                                        }
                                    } else
                                    {
                                        if (_this.results[1].value.length > 0) {
                                            _this.results[1].value = _this.results[1].value + ', ' + _this.additionalFields2[item]
                                            _this.results[3].value = _this.results[3].value + ', ' + _this.additionalFields2[item]
                                        } else {
                                            _this.results[1].value = _this.additionalFields2[item]
                                            _this.results[3].value = _this.additionalFields2[item]
                                        }
                                    }

                                })
                                break;
                            case 5:
                                _this.setPersonData(res.data.data)
                                _this.application.serviceType = parseInt(res.data.data.servicetype)
                                _this.setThirdStep(res.data.data)
                                _this.application.grafalar = res.data.data.grafalar
                                _this.completedSteps.push(1)
                                _this.completedSteps.push(2)
                                _this.completedSteps.push(3)
                                _this.completedSteps.push(4)
                                _this.results.forEach((item, itemKey)=>{
                                    _this.results[itemKey].value=''
                                })
                                _this.results[0].value = res.data.data.count
                                _this.results[2].value = res.data.data.count
                                _this.results[4].value = res.data.data.price + ' ' + _this.$t('сўм')

                                _this.application.grafalar.forEach((item,itemKey) =>{
                                    if(_this.application.serviceType===0) {
                                        if (_this.results[1].value.length > 0) {
                                            _this.results[1].value = _this.results[1].value + ', ' + _this.additionFields[item]
                                            _this.results[3].value = _this.results[3].value + ', ' + _this.additionFields[item]
                                        } else {
                                            _this.results[1].value = _this.additionFields[item]
                                            _this.results[3].value = _this.additionFields[item]
                                        }
                                    } else
                                    {
                                        if (_this.results[1].value.length > 0) {
                                            _this.results[1].value = _this.results[1].value + ', ' + _this.additionalFields2[item]
                                            _this.results[3].value = _this.results[3].value + ', ' + _this.additionalFields2[item]
                                        } else {
                                            _this.results[1].value = _this.additionalFields2[item]
                                            _this.results[3].value = _this.additionalFields2[item]
                                        }
                                    }

                                })
                                _this.stepper = 5
                                break;
                        }
                    }
                }
                if(res.status===404){
                    _this.$router.push('/applications')
                }
                setTimeout(()=>{
                    this.$store.commit('setLoading', false);
                },200)
            }).catch(e =>{
                //if(e.response.status===404){
                    _this.$router.push('/applications')
                //}
                console.log(e)
                setTimeout(()=>{
                    this.$store.commit('setLoading', false);
                },200)
            })


        },
        setThirdStep(data){
            this.application.region = (typeof data['boshqarma'] !== 'undefined') ? data['boshqarma'] : null;
            this.application.post = (typeof data['post'] !== 'undefined') ? data['post'] : null;
            this.application.rejim = (typeof data['rejim'] !== 'undefined') ? data['rejim'] : null;
            this.application.tftn = (typeof data['tftn'] !== 'undefined') ? data['tftn'] : null;
            this.application.shartnoma = (typeof data['shartnoma'] !== 'undefined') ? data['shartnoma'] : null;
            this.application.country = (typeof data['country'] !== 'undefined') ? data['country'] : null;
            this.application.tftn = (typeof data['tftn'] !== 'undefined') ? data['tftn'] : null;
            this.application.byud = (typeof data['byud'] !== 'undefined') ? data['byud'] : null;
            this.application.sanadan = (typeof data['byudsanadan'] !== 'undefined') ? data['byudsanadan'] : null;
            this.application.sanagacha = (typeof data['byudsanagacha'] !== 'undefined') ? data['byudsanagacha'] : null;
        },
        async getPosts(code) {
            this.loading.post = true;
            const _this = this
            this.list.posts = [];
            await axios.get('/api/v1/ex_api/postsbyregion?code=' + code,).then(function (result) {
                if (typeof result.data.posts !== 'undefined')
                    result.data.posts.forEach(function (item) {
                        _this.list.posts.push({
                            'value': item['code'],
                            'text': item['cdNm']
                        })
                    })
            }).catch(e => {
                console.log(e)
                _this.$toast.error(_this.$t('Пост маълумотларини олишда хатолик юз берди'));
            })
            this.loading.post = false;
        },
        async getCountries() {
            let root = this
            await axios.get('/api/v1/data/country?lang=uz').then(function (result) {
                let countries = [];
                result.data.forEach(function (item) {
                    countries.push({
                        'value': item['CODE'],
                        'text': item['CODE'] + '-' + item['CD_NM'],
                        'code': item['CD_ID_L']
                    })
                })
                root.list.countries = countries;
            })
        },
        getField(val) {
            return this.fields.filter((obj) => {
                if (obj.key === val) return obj.value
            })
        },
        setProductErrors(tovar_id, errors) {

            const _this = this;
            if (errors) {
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });

                // this.application.tovarlar.forEach((tovar) => {

                _this.$refs['stepValidation2Product' + tovar_id][0].setErrors(errorfield)

                // })

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

                // this.application.tovarlar.forEach((tovar) => {

                _this.$refs['stepValidation1'].setErrors(errorfield)

                // })

            }
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
                            await axios.post('/api/v1/statservice', {
                                step: _this.stepper,
                                org_name: _this.person.organization_name,
                                tin: _this.person.tin,
                                address: _this.person.perAdr,
                                phone: _this.person.phone,
                                email: _this.person.email,
                            }).then(function (res) {
                                _this.getStatServices();
                                _this.completedSteps.push(_this.stepper)
                                _this.stepper++
                                _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));

                            }).catch(e => {
                                console.log(e)
                                _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                            })

                        }

                        this.loadingButton.first = false;
                    })

                    break;


                case 2:

                    this.loadingButton.second = true;

                    setTimeout(async () => {
                        if (_this.application.serviceType !== null) {
                            await axios.post('/api/v1/statservice', {
                                step: _this.stepper,
                                id: _this.application.id,
                                servicetype: _this.application.serviceType
                            }).then(function (res) {
                                _this.completedSteps.push(_this.stepper)
                                _this.stepper++
                                _this.$toast.success(_this.$t('Хизмат тури сақланди'));
                                _this.loadingButton.second = false;

                            }).catch(e => {
                                console.log(e)
                                _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                            })

                        } else {
                            _this.$toast.warning(_this.$t('Илтимос хизмат турини танланг!'));
                        }

                        this.loadingButton.second = false;
                    })


                    this.loadingButton.second = false;

                    break;
                case 3:

                    this.loadingButton.third = true;

                    setTimeout(async () => {
                        isValid = await this.validateField("stepValidation3");
                        if (isValid === true) {
                            await axios.post('/api/v1/statservice', {
                                step: _this.stepper,
                                id: _this.application.id,
                                boshqarma: _this.application.boshqarma ? _this.application.boshqarma : null,
                                post: _this.application.post ? _this.application.post : null,
                                rejim: _this.application.rejim ? _this.application.rejim : null,
                                tftn: _this.application.tftn ? _this.application.tftn : null,
                                shartnoma: _this.application.shartnoma ? _this.application.shartnoma : null,
                                country: _this.application.country ? _this.application.country : null,
                                byud: _this.application.byud ? _this.application.byud : null,
                                byudsanadan: _this.application.sanadan ? _this.application.sanadan : null,
                                byudsanagacha: _this.application.sanagacha ? _this.application.sanagacha : null,
                            }).then(function (res) {
                                _this.getStatServices();
                                _this.completedSteps.push(_this.stepper)
                                _this.stepper++
                                _this.loadingButton.third = false
                                _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));

                            }).catch(e => {
                                console.log(e)
                                _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                            })

                        }

                        this.loadingButton.third = false;
                    })

                    this.loadingButton.third = false;

                    break;
                case 4:

                    this.loadingButton.four = true;

                    setTimeout(async () => {
                        await axios.post('/api/v1/statservice', {
                            step: _this.stepper,
                            id: _this.application.id,
                            grafalar: _this.application.grafalar ? _this.application.grafalar : null,
                        }).then(function (res) {
                            // _this.getStatServices();
                            _this.completedSteps.push(_this.stepper)
                            _this.stepper++
                            _this.loadingButton.four = false
                            _this.$toast.success(_this.$t('Қўшимча маълумотлар сақланди'));

                        }).catch(e => {
                            console.log(e)
                            _this.$toast.error(_this.$t('Қўшимча маълумотларни сақлашда хатолик юз берди'));
                        })



                        this.loadingButton.four = false;
                    })

                    this.loadingButton.four = false;

                    break;
                default:
                    this.completedSteps.push(this.stepper)
                    this.stepper++
                    break;

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

                default:
                    this.stepper = this.stepper - 1;
                    break;


            }
        },
        goStep(step = 1) {

            if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(4)) {
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
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                if (typeof result.data.data !== 'undefined')
                    result.data.data.forEach(function (item) {
                        if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                            _this.list.regions.push({
                                'value': item['kod_id'],
                                'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
                            })
                    })
            })
        },

        initialize() {
            this.getBoshqarmalar();
            this.setPersonData()
        },
        setPersonData(data = null) {

            this.person.type = (this.$auth.user().type === 1) ? 1 : 0;
            if (data) {
                this.person.pin = (typeof data['pin'] !== 'undefined') ? data['pin'] : this.$auth.user().pin;
                this.person.tin = (typeof data['tin'] !== 'undefined') ? data['tin'] : this.$auth.user().tin;
                this.person.perAdr = (typeof data['address'] !== 'undefined') ? data['address'] : this.$auth.user().per_adr;
                this.person.email = (typeof data['email'] !== 'undefined') ? data['email'] : this.$auth.user().email;
                this.person.phone = (typeof data['phone'] !== 'undefined') ? data['phone'] : this.$auth.user().phone;
                if (typeof data['org_name'] !== 'undefined') {
                    this.person.organization_name = data['org_name']
                } else {
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
        'application.region': {
            handler(value) {
                //console.log(value)
                if (typeof value !== 'undefined' && value && value.length > 3) {
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
    },
    created() {
        this.getStatServices()
        this.getCountries()
    },
    mounted() {
        this.initialize()
    },
    computed: {
        completedData(){
            return  [
                {label: 'ТИФ иштирокчиси номи', value: this.person.organization_name },
                {label: 'СТИР', value: this.person.tin },
                {label: 'Манзили', value: this.person.perAdr },
                {label: 'Телефон рақами', value: this.person.phone },
                {label: 'Электрон почта манзили', value: this.person.email },
                {label: 'Хизмат тури', value: (this.application.serviceType!==null && this.serviceTypes[this.application.serviceType])?this.serviceTypes[this.application.serviceType].title : '' },
                {label: 'Ҳудудий божхона бошқармаси', value: (this.application.region!==null && this.findElementInlist(this.list.regions,this.application.region,'value'))?this.findElementInlist(this.list.regions,this.application.region,'value').title:''},
                {label: 'Пост', value: (this.application.post!==null && this.findElementInlist(this.list.posts,this.application.post,'value'))?this.findElementInlist(this.list.posts,this.application.post,'value').title:''},
                {label: 'Божхона режими', value: (this.application.rejim!==null && this.findElementInlist(this.list.regimes,this.application.rejim,'value'))?this.findElementInlist(this.list.regimes,this.application.rejim,'value').title:''},
                {label: 'ТИФ ТН код', value: this.application.tftn },
                {label: 'Шартноманинг ТСО ЯЭАТдаги идентификация рақами', value: this.application.shartnoma },
                {label: 'Давлат', value: (this.application.country!==null && this.findElementInlist(this.list.countries,this.application.country,'value'))?this.findElementInlist(this.list.countries,this.application.country,'value').title:''},
                {label: 'БЮДнинг тартиб рақами', value: this.application.byud },
                {label: 'БЮД тақдим этилган санадан', value: this.application.sanadan },
                {label: 'БЮД тақдим этилган санагача', value: this.application.sanagacha },
            ]
        }
    }
    ,
    filters: {
        reverse: function (array) {
            return array.slice().reverse()
        }
    }
    ,
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
