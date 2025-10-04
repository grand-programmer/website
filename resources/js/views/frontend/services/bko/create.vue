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
                            {{ $t('Божхона кирим ордерини шакллантириш') }}
                            <br>
                        </h3>
                    </v-col>
                </v-row>
                <v-card
                    class="mb-12 px-5 py-10"

                >
                    <div class="row position-absolute yoriqnoma-text"><a
                        href="/storage/files/dastlabki-user.pptx"> {{
                            $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                        }}
                    </a></div>
                    <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                        <v-row>
                        </v-row>
                        <v-row class="person_data mt-10 ">
                            <v-col cols="4" v-if="person.type===2">
                                <ValidationProvider :name="$t('СТИР')"
                                                    v-slot="{ errors }">

                                    <v-text-field
                                        v-model="person.organization_inn"
                                        :label="$t('СТИР')"
                                        required
                                        :disabled="(JSON.parse($auth.user().legal_info)[0].tin).length>0"
                                        :hint="$t('Корхона ёки ташкилот СТИРи')"
                                        persistent-hint
                                        name="orgInn"
                                    >
                                    </v-text-field>

                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="4" v-else>
                                <ValidationProvider :name="$t('ЖШШИР')"
                                                    v-slot="{ errors }">

                                    <v-text-field
                                        v-model="person.pin"
                                        :label="$t('ЖШШИР')"
                                        required
                                        :disabled="$auth.user().pin > 0"
                                        :hint="$t('Аризачи ЖШШРи')"
                                        persistent-hint
                                        name="personInn"
                                    >
                                    </v-text-field>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="4">
                                <ValidationProvider :name="person.type===2?$t('Ташкилот номи'):$t('ФИШ')"
                                                    rules="required"
                                                    v-slot="{ errors }">
                                    <v-text-field
                                        v-model="person.type===2?person.organization_name:person.fio"
                                        :counter="200"
                                        :label="person.type===2?$t('Ташкилот номи'):$t('ФИШ')"
                                        required
                                        :hint="person.type===2?$t('Юридик шахснинг тўлиқ номи'):$t('Мурожаатчи фамилияси, исми, шарифи')"
                                        persistent-hint
                                    >
                                        <template v-slot:label>
                                            {{ person.type === 2 ? $t('Ташкилот номи') : $t('ФИШ') }}<sup>*</sup>
                                        </template>
                                    </v-text-field>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>


                            <v-col cols="4">
                                <ValidationProvider :name="$t('Телефон рақами')" rules="required"
                                                    v-slot="{ errors }">
                                    <v-text-field
                                        v-model="person.phone"
                                        :label="$t('Телефон рақами')"
                                        required
                                        v-mask="'+998 ## ### ## ##'"
                                        :hint="$t('Аризачининг телефон рақами')"
                                        persistent-hint
                                    >
                                        <template v-slot:label>{{ $t('Телефон рақами') }} <sup>*</sup></template>
                                    </v-text-field>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>
                            <v-col cols="4">
                                <ValidationProvider :name="$t('Электрон почта')" rules="required|email"
                                                    v-slot="{ errors }">
                                    <v-text-field
                                        v-model="person.email"
                                        :counter="200"
                                        :label="('Электрон почта манзили')"
                                        required
                                        :hint="$t('Аризачининг электрон почтаси')"
                                        persistent-hint
                                    >
                                        <template v-slot:label>{{ $t('Электрон почта манзили') }} <sup>*</sup>
                                        </template>
                                    </v-text-field>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>
                            <v-col cols="4">
                                <text-field
                                    v-model="person.perAdr"
                                    :title="$t('Манзили')"
                                    rules="required"
                                    :hint="$t('Аризачининг яшаш манзили')"
                                    persistent-hint
                                >

                                </text-field>

                            </v-col>

                            <v-col cols="4">
                                <ValidationProvider :name="$t('Ҳудуд')" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.region"
                                        required
                                        :items="regions"
                                        persistent-hint
                                        @change="getPosts"
                                    >
                                        <template v-slot:label>{{ $t('Ҳудудий божхона бошқармасини танланг') }}
                                            <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                            <v-col cols="4">
                                <ValidationProvider :name="$t('Таркибий тузилма тури')" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.postType"
                                        required
                                        :hint="$t('БКО юборилиши мўлжалланган таркибий тузилма тури')"
                                        :items="[
                                            { value: 13, text: $t('Божхона пости')},
                                            { value: 12, text: $t('Тўловлар бўлими')}
                                        ]"
                                        persistent-hint
                                    >
                                        <template v-slot:label>{{ $t('Таркибий тузилма турини танланг') }} <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                            <v-col cols="4" v-if="app.postType === 13 ">
                                <ValidationProvider :name="$t('Таркибий тузилма')" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.post"
                                        :loading="postloading"
                                        required
                                        :disabled="postloading"
                                        :hint="$t('БКО юборилиши мўлжалланган таркибий тузилма')"
                                        :items="posts"
                                        persistent-hint
                                    >
                                        <template v-slot:label>{{ $t('Таркибий тузилмани танланг') }} <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>


                            <v-col cols="4">
                                <ValidationProvider :name="$t('Йиғим тури')" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.yigim_turi"
                                        required
                                        :items="yigimlar"
                                        persistent-hint
                                    >
                                        <template v-slot:label>{{ $t('Йиғим турини танланг') }} <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                            <v-col cols="4">
                                <text-field
                                    v-model="app.moliya_bank"
                                    :title="$t('Молия ва банк маълумотлари')"
                                    rules="required"
                                    type="number"
                                    size="27"
                                    v-mask="'###########################'"
                                    counter

                                    :hint="$t('Тўловчининг ҳисоб-варақ рақами')"
                                    persistent-hint
                                >
                                </text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mb-10">
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="6">
                                        <text-field
                                            v-model="app.mfo"
                                            :title="$t('МФО')"
                                            rules="required"
                                            type="number"
                                            count="5"
                                            v-mask="'#####'"
                                            :hint="$t('Тўловни қабул қилиб олган банкнинг МФО рақами')"
                                            persistent-hint
                                        >
                                        </text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <text-field
                                            v-model="app.bank"
                                            :title="$t('Банк номи')"
                                            rules="required"
                                            :hint="$t('Тўловни қабул қилиб олган банкнинг номи')"
                                            persistent-hint
                                        >
                                        </text-field>
                                    </v-col>
                                    <v-col cols="12" class="mt-10">
                                        <e-arxiv-file title="Тақдим этиладиган ҳужжатлар/қўшимча маълумотлар"
                                                      v-model="app.files" multiple norequired :errors="arxiv_errors"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-card>
                                    <v-card-title class="darken-4">
                                        {{ $t('Божхона тўловларининг ҳисоби') }}

                                        <v-spacer></v-spacer>

                                        <v-btn
                                            class="text--primary mt-2"
                                            rounded
                                            text
                                            @click="dialogTolov=true"
                                        >
                                            <v-icon color="primary">mdi-plus</v-icon>
                                            {{ $t('Қўшиш') }}
                                        </v-btn>

                                        <span v-if="tolov_error.length > 0 " class="red--text w-100 px-10 py-1 position-relative d-block">
                                            {{ tolov_error }}
                                        </span>


                                        <v-dialog v-model="dialogTolov"
                                                  persistent
                                                  max-width="800px">

                                            <v-card>
                                                <v-card-title>
                                                            <span class="text-h5"> {{
                                                                    $t('Божхона тўловларининг ҳисоби')
                                                                }}</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container><!--
                                                                <v-row>
                                                                    <h5>{{ $t('Ҳужжат киритиш') }}</h5>
                                                                </v-row>-->
                                                        <ValidationObserver ref="tolovValidationServer" disabled>
                                                            <v-row>
                                                                <v-col
                                                                    cols="4"
                                                                >
                                                                    <validation-provider
                                                                        v-slot="{ errors }"
                                                                        class="w-100"
                                                                        tag="div"
                                                                        :name="$t('Тўлов тури')"
                                                                        rules="required"
                                                                    >
                                                                        <v-autocomplete
                                                                            v-model="tolov.type"
                                                                            :label="$t('Тўлов тури')"
                                                                            persistent-placeholder
                                                                            :items="tolovType"></v-autocomplete>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </validation-provider>
                                                                </v-col>
                                                                <v-col cols="4">
                                                                    <validation-provider
                                                                        v-slot="{ errors }"
                                                                        class="w-100"
                                                                        tag="div"
                                                                        :name="$t('Ҳисоблаш асоси')"
                                                                        rules="required"
                                                                    >
                                                                        <v-text-field
                                                                            v-model="tolov.asos"
                                                                            :label="$t('Ҳисоблаш асоси')"
                                                                            persistent-placeholder
                                                                        ></v-text-field>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </validation-provider>
                                                                </v-col>

                                                                <v-col cols="4">
                                                                    <validation-provider
                                                                        v-slot="{ errors }"
                                                                        class="w-100"
                                                                        tag="div"
                                                                        :name="$t('Ставка')"
                                                                        rules="required"
                                                                    >
                                                                        <v-text-field
                                                                            v-model="tolov.stavka"
                                                                            :label="$t('Ставка')"
                                                                            persistent-placeholder
                                                                            type="number"></v-text-field>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </validation-provider>
                                                                </v-col>
                                                                <v-col cols="4">
                                                                    <validation-provider
                                                                        v-slot="{ errors }"
                                                                        class="w-100"
                                                                        tag="div"
                                                                        :name="$t('Сумма')"
                                                                        rules="required"
                                                                    >
                                                                        <v-text-field
                                                                            v-model="tolov.summa"
                                                                            :label="$t('Сумма')"
                                                                            persistent-placeholder
                                                                            type="number"
                                                                        ></v-text-field>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </validation-provider>
                                                                </v-col>
                                                                <v-col
                                                                    cols="4"
                                                                >
                                                                    <validation-provider
                                                                        v-slot="{ errors }"
                                                                        class="w-100"
                                                                        tag="div"
                                                                        :name="$t('Тўлов усули')"
                                                                        rules="required"
                                                                    >
                                                                        <v-autocomplete
                                                                            v-model="tolov.method"
                                                                            :label="$t('Тўлов усули')"
                                                                            persistent-placeholder
                                                                            :items="tolovMethod"></v-autocomplete>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </validation-provider>
                                                                </v-col>

                                                            </v-row>
                                                        </ValidationObserver>

                                                    </v-container>

                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="blue darken-1"
                                                        text
                                                        @click="dialogTolov=false"
                                                    >
                                                        {{ $t('Бекор қилиш') }}
                                                    </v-btn>
                                                    <v-btn
                                                        color="blue darken-1"
                                                        text
                                                        @click="addItemTolov"
                                                    >
                                                        <v-icon>mdi-plus</v-icon>
                                                        {{ $t('Қўшиш') }}
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>


                                        </v-dialog>
                                    </v-card-title>

                                    <v-divider></v-divider>

                                    <v-data-table
                                        :headers="headersTolov"
                                        :items="tolovlar"
                                        :items-per-page="5"
                                        class="elevation-1"
                                        :no-data-text="$t('Маълумот топилмади')"
                                        :footer-props="{
                                            'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                            'items-per-page-all-text': $t('Барчаси')
                                        }"
                                        :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                                    >
                                        <template #[`item.actions`]="{ item }">

                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-col>

                        </v-row>


                    </ValidationObserver>

                    <v-row class="row mb-3 position-absolute bottom-0 end-0">
                        <v-col class="d-flex tab_action_buttons">

                            <v-btn
                                color="primary"
                                @click="nextStep"
                                size="large"
                                :loading="loading.button"
                                style="width: max-content"
                            >
                                {{ $t('Ариза юбориш') }}
                            </v-btn>


                        </v-col>
                    </v-row>
                    <v-row class="bottom-required-info">
                        <i style="font-size: 12px;"><sub
                            style="font-size: 20px">*</sub> - {{ $t('майдонлари албатта тўлдирилиши шарт') }}!
                        </i>

                    </v-row>

                </v-card>

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
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import Myfield from "../../../../components/form/myfield";
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';

import i18n from "../../../../i18n";
import TextField from "../../../../components/form/textfield";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import DialogChips from "../../../../components/form/dialog-chips";
import Textfield from "../../../../components/form/textfield";
import EditableDate from "../../../../components/custom/EditableDate";


export default {
    name: "InitialBkoCreate",
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
                    text: i18n.t('Божхона кирим ордерини шакллантириш'),
                    to: '/services/bko',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Ариза юбориш'),
                    to: '/services/bko/create',
                    disabled: true,
                    exact: true,
                },
            ],

            app: {
                bank: null,
                mfo: null,
                type_avto: null,
                postType: null,
                moliya_bank: null,
                yigim_turi: null,
                file_error: "",
                region: null,
                post: null,
                files: [],
            },
            application:{
                murojatEntityDto:{},
                docEntityDtos:{},
                payEntityDto:{}
            },
            person: {
                type: 1, /// 1- fiz 2- yur
                fio: "",
                pin: null,
                tin: null,
                organization_name: "Жисмоний шахс",
                organization_inn: null,
                personType: "01",
                position: "01",
                phone: null,
                email: null,
            },
            loading: {tin: false, button: false, mfo: false},
            inns: [],
            search_inn: null,
            mfos: [],
            regions: [],
            images: [],
            hujjatType: [
                {value: 101, text: '101 - ЛИЦЕНЗИЯ'},
                {value: 201, text: '201 - КРГ'},
                {value: 202, text: '202 - СМР'},
                {value: 203, text: '203 - КНСМ'},
                {value: 204, text: '204 - TIR'},
                {value: 205, text: '205 - АВИА'},
                {value: 206, text: '206 - НКПЧТ'},
                {value: 207, text: '207 - СМГС'},
                {value: 208, text: '208 - ТТН'},
                {value: 209, text: '209 - ПТС'},
                {value: 220, text: '220 - ИНВ'},
                {value: 221, text: '221 - ИНВПРФ'},
                {value: 222, text: '222 - УПЛИСТ'},
                {value: 223, text: '223 - ИНВ_ОТ'},
                {value: 301, text: '301 - КНТ'},
                {value: 302, text: '302 - ДОП'},
                {value: 303, text: '303 - ДГАРНД'},
                {value: 304, text: '304 - СПРРС'},
                {value: 305, text: '305 - КНТ_ТР'},
                {value: 306, text: '306 - IDN_ТР'},
                {value: 402, text: '402 - АКТЭКСП'},
                {value: 403, text: '403 - ВЗРМ'},
                {value: 404, text: '404 - ВТРС'},
                {value: 405, text: '405 - ВЧР'},
                {value: 406, text: '406 - СЭЗ'},
                {value: 407, text: '407 - ГКЭ_РСТ'},
                {value: 408, text: '408 - ГКЭ_ЖВТ'},
                {value: 409, text: '409 - CITES'},
                {value: 410, text: '410 - КРНР'},
                {value: 411, text: '411 - УЗЭКСП'},
                {value: 412, text: '412 - ССПН'},
                {value: 413, text: '413 - ОРВ'},
                {value: 414, text: '414 - ПГХ'},
                {value: 415, text: '415 - ПРФ'},
                {value: 416, text: '416 - ПСР'},
                {value: 417, text: '417 - ССТ'},
                {value: 418, text: '418 - УЗСТ'},
                {value: 419, text: '419 - ФТСС'},
                {value: 420, text: '420 - ЭКО'},
                {value: 421, text: '421 - ЗК_ТКСТ'},
                {value: 422, text: '422 - ИЛАК'},
                {value: 423, text: '423 - ИАФ'},
                {value: 424, text: '424 - ОЭСР'},
                {value: 425, text: '425 - КУР'},
                {value: 426, text: '426 - ВТРР'},
                {value: 427, text: '427 - ЭНО'},
                {value: 428, text: '428 - МБР'},
                {value: 429, text: '429 - ХХЮ'},
                {value: 430, text: '430 - ТКР'},
                {value: 431, text: '431 - БАД'},
                {value: 432, text: '432 - НПП'},
                {value: 433, text: '433 - ХБПП'},
                {value: 434, text: '434 - НППС'},
                {value: 435, text: '435 - КУРГ'},
                {value: 436, text: '436 - КИЗ'},
                {value: 437, text: '437 - СГТ'},
                {value: 438, text: '438 - ЮСМ'},
                {value: 501, text: '501 - РегМИВТ'},
                {value: 502, text: '502 - СвИПБЮЛ'},
                {value: 503, text: '503 - РегЦМЭП'},
                {value: 6, text: '6 - X',} *
                {value: 701, text: '701 - СПТИМ'},
                {value: 702, text: '702 - СПТЭК'},
                {value: 703, text: '703 - УПТ'},
                {value: 801, text: '801 - БГРН'},
                {value: 802, text: '802 - СТРХПЛ'},
                {value: 803, text: '803 - ОБЗПРЧ'},
                {value: 804, text: '804 - ЭкГТД'},
                {value: 805, text: '805 - ИмГТД'},
                {value: 806, text: '806 - ГрнСН'},
                {value: 807, text: '807 - ДЗЛГ'},
                {value: 808, text: '808 - ДПР'},
                {value: 809, text: '809 - ДХР'},
                {value: 810, text: '810 - ДСВСК'},
                {value: 811, text: '811 - ДОГ'},
                {value: 812, text: '812 - ПСТ'},
                {value: 813, text: '813 - ЭКСПЗК'},
                {value: 814, text: '814 - ДЕФАКТ'},
                {value: 815, text: '815 - ССК'},
                {value: 816, text: '816 - ЗАЯВ74'},
                {value: 817, text: '817 - АКТ75'},
                {value: 818, text: '818 - АКТ76'},
                {value: 819, text: '819 - ЗАЯВСП'},
                {value: 820, text: '820 - АПИ'},
                {value: 834, text: '834 - РАЗ51'},
                {value: 835, text: '835 - РАЗ61'},
                {value: 850, text: '850 - НТЗ'},
                {value: 851, text: '851 - БССТ'},
                {value: 852, text: '852 - ГПДС'},
                {value: 854, text: '854 - БВС'},
                {value: 855, text: '855 - БГС'},
                {value: 856, text: '856 - БЭС'},
                {value: 857, text: '857 - ЗМЭП'},
                {value: 858, text: '858 - РП'},
                {value: 859, text: '859 - РПХ'},
                {value: 860, text: '860 - ПУГТК'},
                {value: 861, text: '861 - ЗАМ'},
                {value: 862, text: '862 - ДК'},
                {value: 863, text: '863 - РЕФ'},
                {value: 864, text: '864 - ПУК'},
                {value: 865, text: '865 - ПСО'},
                {value: 867, text: '867 - ТПОД'},
                {value: 868, text: '868 - ДХИР'},
                {value: 869, text: '869 - ПРТП'},
                {value: 899, text: '899 - ДРГДОК'},
                {value: 901, text: '901 - АТД'},
                {value: 902, text: '902 - З1М'},
                {value: 903, text: '903 - ЗРЦ'},
                {value: 904, text: '904 - МЕТОД'},
                {value: 905, text: '905 - ПХС'},
                {value: 906, text: '906 - КНТП'},
                {value: 907, text: '907 - ГТДО'}
            ],
            tolovType: [
                {
                    text: '40 - ' + this.$t('Эгаси божхона органи бўлган божхона омборида товарларни сақлаганлик учун божхона йиғими'),
                    value: '40'
                },
                {
                    text: '41 - ' + this.$t('Транспорт воситасини божхона кузатиб бориши учун божхона йиғимлари'),
                    value: '41'
                },
                {
                    text: '42 - ' + this.$t('Товарларни божхона ҳудудидан ташқарида қайта ишлашга, товарларни божхона ҳудудида қайта ишлашга рухсатнома берганлик учун божхона йиғимлари'),
                    value: '42'
                },
                {
                    text: '43 - ' + this.$t('Декларант ёки у ишонч билдирган шахснинг мурожаатига асосан БЮДга ўзгартириш ва (ёки) қўшимча киритилганлик учун божхона йиғими'),
                    value: '43'
                },
                {
                    text: '44 - ' + this.$t('Божхона назорати остида ташилаётган товар ва транспорт воситалари учун белгиланган етказиб бериш муддати ўтказиб юборилганлик учун божхона йиғими'),
                    value: '44'
                },
                {
                    text: '45 - ' + this.$t('Белгиланган муддат тугагандан сўнг вақтинчалик олиб кирилган автотранспорт воситасини қайтариб олиб чиқиб кетилишини ёки тегишли божхона режимига расмийлаштирилишини таъминламаганлик учун божхона йиғими'),
                    value: '45'
                },
                {
                    text: '46 - ' + this.$t('Ўзбекистон Республикаси қонунчилик ҳужжатлари билан назарда тутилган бошқа йиғимлар'),
                    value: '46'
                },
                {
                    text: '50 - ' + this.$t('Товарларни ТИФ ТН код рақами аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими'),
                    value: '50'
                },
                {
                    text: '51 - ' + this.$t('Тўланиши лозим бўлган божхона тўловлари миқдорини аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими'),
                    value: '51'
                },
                {
                    text: '52 - ' + this.$t('Чегара божхона постида товарларни вақтинча сақлаганлик учун божхона йиғими'),
                    value: '52'
                }
            ],
            tolovMethod: [
                {text: this.$t('БН'), value: 'БН'},
                {text: this.$t('КТ'), value: 'КТ'},
            ],
            tolovlar: [],
            tolov: {
                type: null,
                asos: null,
                stavka: null,
                summa: null,
            },
            dialogFile: false,
            dialogTolov: false,
            yigimlar: [
                {
                    text: "Эгаси божхона органи бўлган божхона омборида товарларни сақлаганлик учун божхона йиғими",
                    value: 40
                },
                {text: "Транспорт воситасини божхона кузатиб бориши учун божхона йиғимлари", value: 41},
                {
                    text: "Товарларни божхона ҳудудидан ташқарида қайта ишлашга, товарларни божхона ҳудудида қайта ишлашга рухсатнома берганлик учун божхона йиғимлари",
                    value: 42
                },
                {
                    text: "Декларант ёки у ишонч билдирган шахснинг мурожаатига асосан БЮДга ўзгартириш ва (ёки) қўшимча киритилганлик учун божхона йиғими",
                    value: 43
                },
                {
                    text: "Божхона назорати остида ташилаётган товар ва транспорт воситалари учун белгиланган етказиб бериш муддати ўтказиб юборилганлик учун божхона йиғими",
                    value: 44
                },
                {
                    text: "Белгиланган муддат тугагандан сўнг вақтинчалик олиб кирилган автотранспорт воситасини қайтариб олиб чиқиб кетилишини ёки тегишли божхона режимига расмийлаштирилишини таъминламаганлик учун божхона йиғими",
                    value: 45
                },
                {
                    text: "Ўзбекистон Республикаси қонунчилик ҳужжатлари билан назарда тутилган бошқа йиғимлар",
                    value: 46
                },
                {
                    text: "Товарларни ТИФ ТН код рақами аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими",
                    value: 50
                },
                {
                    text: "Тўланиши лозим бўлган божхона тўловлари миқдорини аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими",
                    value: 51
                },
                {text: "Чегара божхона постида товарларни вақтинча сақлаганлик учун божхона йиғими", value: 52}

            ],
            search_mfo: null,
            arxiv_errors: null,
            fields: [
                {key: 'legalName', value: 'Ташкилот номи'},
                {key: 'firstName', value: 'ФИШ'},
                {key: 'surName', value: 'ФИШ'},
                {key: 'lastName', value: 'ФИШ'},
                {key: 'fio', value: 'ФИШ'},
                {key: 'email', value: 'Электрон почта'},
                {key: 'pinfl', value: 'ЖШШИР'},
                {key: 'tin', value: 'СТИР'},
                {key: 'inn', value: 'СТИР'},
                {key: 'g4adres', value: 'Манзили'},
                {key: 'telNumber', value: 'Телефон рақами'},
                {key: 'yigim_turi', value: 'Йиғим тури'},
                {key: 'rs', value: 'Молия ва банк маълумотлари'},
                {key: 'mfo', value: 'МФО'},
                {key: 'bank', value: 'Банк номи'},
                {key: 'postId', value: 'Таркибий тузилма'},
                {key: 'postType', value: 'Таркибий тузилма тури'},
                {key: 'mfo', value: 'МФО'},
                {key: 'ugtkId', value: 'Ҳудуд'},
                {key: 'postId', value: 'Пост'},
            ],
            ilova_error: "",
            tolov_error: "",
            postloading: false,
            posts: [],
            confirmDialog: false,
            confirmDialogTolov: false,
            headers: [
                {
                    text: this.$t('Ҳужжат тури'),
                    align: 'start',
                    sortable: false,
                    value: 'type',
                },
                {text: this.$t('Ҳужжат рақами'), value: 'number'},
                {text: this.$t('Ҳужжат санаси'), value: 'date'},
                {text: this.$t('Амаллар'), value: 'actions'},
            ],
            headersTolov: [
                {
                    text: this.$t('Тўлов тури'),
                    align: 'start',
                    sortable: false,
                    value: 'type',
                },
                {text: this.$t('Ҳисоблаш асоси'), value: 'asos'},
                {text: this.$t('Ставка'), value: 'stavka'},
                {text: this.$t('Сумма'), value: 'summa'},
                {text: this.$t('Амаллар'), value: 'actions'},
            ],
            hujjatlar: [],
        }

    },
    methods: {
       deleteItem(id) {
            this.hujjatlar = this.hujjatlar.filter(item => {
                return id !== item.id
            })
        },
        deleteItemTolov(id) {
            this.tolovlar = this.tolovlar.filter(item => {
                return id !== item.id
            })
        },
        async addItemTolov() {
            const _this = this
            const isValid = await this.$refs.tolovValidationServer.validate()
            if (isValid) {
                // this.huquqbuzarlar.filter
                this.tolovlar.push({
                    id: highestId(_this) + 1,
                    ...this.tolov
                })
                this.clearTolov(true)
                this.dialogTolov = false
            } else {
                _this.$toast.error(_this.$t('Майдонлар хато тўлдирилган. Қайта кўриб чиқиб қайтадан ҳаракат қилинг!'))
            }

            function highestId(_this) {
                if (_this.tolovlar.length === 0) return 0
                return _this.tolovlar.reduce((a, b) => Number(a.id) > Number(b.id) ? a : b).id
            }


        },
        clearTolov() {
            this.$refs.tolovValidationServer.reset()
            for (const [key, value] of Object.entries(this.tolov)) {
                this.tolov[key] = null;
            }
        },
        async getPosts(code) {
            this.postloading = true;
            const _this = this
            this.posts = [];
            await axios.get('/api/v1/ex_api/postsbyregion?code=' + code,).then(function (result) {
                if (typeof result.data.posts !== 'undefined')
                    result.data.posts.forEach(function (item) {
                        _this.posts.push({
                            'value': item['code'],
                            'text': item['cdNm']
                        })
                    })
            })
            this.postloading = false;
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

        async sendApplication() {
            const _this = this;
            _this.resetVar(_this.application)
            _this.ilova_error = "";
            _this.application['murojatEntityDto']['pinfl'] = _this.person.pin;
            _this.application['murojatEntityDto']['inn'] = _this.$auth.user().tin ? _this.$auth.user().tin : _this.person.organization_inn;
            _this.application['murojatEntityDto']['fio'] = _this.$auth.user().sur_name + ' ' + _this.$auth.user().first_name + ' ' + _this.$auth.user().mid_name
            _this.application['murojatEntityDto']['g4adres'] = _this.person.perAdr
            _this.application['murojatEntityDto']['email'] = _this.person.email
            if (typeof _this.person.phone !== 'undefined' && _this.person.phone)
                _this.application['murojatEntityDto']['telNumber'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");

            _this.application['murojatEntityDto']['g19type'] = _this.app.yigim_turi
            _this.application['murojatEntityDto']['rs'] = _this.app.moliya_bank
            _this.application['murojatEntityDto']['mfo'] = _this.app.mfo
            _this.application['murojatEntityDto']['bank'] = _this.app.bank
            _this.application['murojatEntityDto']['ugtkId'] = _this.app.region
            _this.application['murojatEntityDto']['postType'] = _this.app.postType
            _this.application['murojatEntityDto']['postId'] = _this.app.postType === 12 ? '00000' : _this.app.post

            _this.application.docEntityDtos =[]
            _this.application.docEntityDtos = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.files)));
            _this.application.payEntityDto=[]
            _this.tolovlar.forEach((tolov)=>{
                if(typeof tolov.type !=='undefined' && typeof tolov.asos !=='undefined' && typeof tolov.stavka !=='undefined' && typeof tolov.summa !=='undefined' && typeof tolov.method !=='undefined'){
                    _this.application.payEntityDto.push({
                        g19Type: tolov.type,
                        g19Base: tolov.asos,
                        stavka : tolov.stavka,
                        g19sum : tolov.summa,
                        g19sp : tolov.method
                    })
                }
            })


            let result = null;
            try {
                let obj = JSON.parse(JSON.stringify(_this.application));
                await axios.post('/api/v1/ex_api/tpo', obj).then(function (resultData) {
                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                        _this.application.id = resultData.data.data.murojatId;
                        _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                        setTimeout(() => {
                            _this.$router.push("/services/bko/" + _this.application.id)

                        }, 100)
                    }
                })
                _this.loading.button = false;
                return result;
            } catch (error) {
                ///console.log(error.response.data.data);
                if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && error.response.data.success === false && typeof error.response.data.data !== 'undefined') {
                    const errors = [];
                    //console.log(error.response.data.data);

                    for (const [key, item] of Object.entries(error.response.data.data)) {
                        if (item && typeof item === 'object') {
                            for (const [valKey, val] of Object.entries(item)) {
                                errors[valKey] = val;
                            }
                        }

                    }

                    if (typeof error.response.data.data.message!== 'undefined' && typeof error.response.data.data.message.errorDoc !== 'undefined' && typeof error.response.data.data.message.errorDoc.docEntityDtos !== 'undefined') {
                        _this.ilova_error = JSON.parse(JSON.stringify(error.response.data.data.message.errorDoc.docEntityDtos));
                    }
                    if (typeof error.response.data.data.message!== 'undefined' && typeof error.response.data.data.message.errorPay !== 'undefined' && typeof error.response.data.data.message.errorPay.payEntityDto !== 'undefined') {
                        _this.tolov_error = JSON.parse(JSON.stringify(error.response.data.data.message.errorPay.payEntityDto));
                    }
                    if (errors) {
                        for (const [key, value] of Object.entries(errors)) {
                            _this.setApplicationErrors(value);
                        }
                        _this.$toast.warning('Тўлдирилган майдонлардан бири хато тўлдирилди!');
                    } else if (typeof error.response.data.data.errors == 'string') _this.$toast.error(error.response.data.data.errors); else {
                        _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                    }
                } else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг!');
                }

            }
        },
        async getBoshqarmalar() {
            const _this = this
            await this.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {
                if (typeof result.data.data !== 'undefined')
                    result.data.data.forEach(function (item) {
                        if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                            _this.regions.push({
                                'value': item['kod_id'],
                                'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
                            })
                    })
            })
        },

        async nextStep() {

            let isValid = false;
            const _this = this;
            _this.tolov_error=''


            this.loading.button = true;
            //console.log(!this.validateField("create_customs_person_value"))

            setTimeout(async () => {
                isValid = await this.validateField("stepValidation1");
                if (isValid === true) {
                    this.person.lastName = this.$auth.user().mid_name;
                    this.person.firstName = this.$auth.user().first_name;
                    this.person.surName = this.$auth.user().sur_name;
                    this.person.locationId = this.person.region;

                    let resultData = await this.sendApplication();

                    this.loading.button = false;
                    /*                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && resultData.data.success === true) {
                                            //console.log(resultData.data['data']['data']['id'])
                                            this.person.person_id = resultData.data['data']['data']['id'];
                                            //this.$cookie.delete('user');
                                            this.$cookie.set('user', JSON.stringify(this.person), 1);
                                            _this.$toast.success("Аризачи маълумотлари сақланди!");

                                        }*/ ///else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");

                }
                /*                        _this.stepper = 2;
                                        _this.completedSteps.push(_this.stepper - 1);
                                        _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                this.loading.button = false;
            })


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
                _this.$refs['stepValidation1'].setErrors(errorfield)
            }
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
        initialize() {
            this.setPersonData(null)
            //this.getPersonId();
            this.getBoshqarmalar();
        },
        setPersonData(data) {

            this.person.pin = this.$auth.user().pin;
            this.person.tin = this.$auth.user().tin;
            this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
            this.person.perAdr = this.$auth.user().per_adr;
            this.person.email = this.$auth.user().email;
            this.person.type = this.$auth.user().type;
            if (this.person.type === 2) {
                let legal_info = JSON.parse(this.$auth.user().legal_info)
                //console.log(legal_info[0].le_name)
                if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
                    this.person.organization_name = legal_info[0].le_name
                } else this.person.organization_name = "";
                if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].tin !== 'undefined') {
                    this.person.organization_inn = legal_info[0].tin
                } else this.person.organization_inn = "";
            }
            let personId = null;
            const _this = this;

            if (data) {
                this.person.phone = (typeof data['phone'] !== 'undefined') ? data['phone'] : null;
                this.person.region = (typeof data['region'] !== 'undefined') ? data['region'] : null;
                //this.person.person_id = (typeof data['person_id'] !== 'undefined') ? data['person_id'] : null;
            }

        },
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
        formatDate(date) {
            if (!date) return;
            const [day, month, year] = date.split("-");
            return year + "-" + month + "-" + day;
        },
        resetVar(myVar) {
            const _this = this;
            if (myVar === null) return null;
            if (typeof myVar === 'object') {
                Object.entries(myVar).forEach(([key, value]) => {

                    if (typeof value === 'object') {
                        if (_this.resetVar(value)) {
                            myVar[key] = _this.resetVar(value);
                        }
                    } else {
                        if (Array.isArray(value)) {
                            value.forEach((arrayKey, arrayValue) => {
                                if (arrayValue) {
                                    if (_this.resetVar(arrayValue)) {
                                        myVar[key][arrayKey] = _this.resetVar(arrayValue);
                                    } else {
                                        myVar[key][arrayKey] = null;
                                    }
                                } else return myVar[key]

                            });

                        } else
                            myVar[key] = null;
                    }
                });
                return myVar;
            }
            return null;

        },
        arxivToApi(files) {
            const returnFiles = [];
            if (files && files.length > 0) {
                files.forEach((item) => {
                    if (typeof item.id !== 'undefined' && item.id)
                        returnFiles.push({
                            docid: parseInt(item.id),
                            itemsno: parseInt(item.doc_type),
                            docno: item.file_num,
                            docdate: item.file_data
                        })

                })
            }
            return JSON.parse(JSON.stringify(returnFiles));
        },
        issetVar(myVarString) {
            const _this = this;
            const varToString = varObj => Object.keys(varObj)[0]
            let myVar = "_this";
            let returnVar = true;
            myVarString.split('.').forEach((mVar, key) => {
                let OldVar = JSON.parse(JSON.stringify(myVar));
                if (mVar.indexOf('[') !== -1) {
                    myVar = myVar + mVar;
                } else {
                    myVar = myVar + '.' + mVar;
                }
                //console.log(eval(OldVar));
                if (returnVar && (typeof eval(myVar) === 'undefined' || eval(myVar) === null || eval(OldVar) === null)) {
                    returnVar = false;
                    return false;
                }
                // console.log(myVar)

            })
            // console.log(returnVar)
            return returnVar;


        }

    },
    computed: {
        checkbox1() {
            return false
        }
    },
    watch: {
        /*'app.region': {
            handler(value) {
                //console.log(value)
                if (typeof value !== 'undefined' && value && value.length > 3) {
                    const region = value; // .substr(2, 2);
                    //setTimeout(async () => {
                    this.getPosts(region)
                    // })
                }

            },
            immediate: true,
            deep: true,
            sync: true
        },*/


    },

    mounted() {
        this.initialize();
    },
    filters: {
        reverse: function (array) {
            return array.slice().reverse()
        }
    }
    ,
    components: {
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
<style>
.yoriqnoma-text {
    right: 40px;
    font-weight: bold;
}
</style>
