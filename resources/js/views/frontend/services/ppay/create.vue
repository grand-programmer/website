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
                            ТИФ субъектининг божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлашга рухсат бериш
                            <br>
                        </h3>
                    </v-col>
                </v-row>
                <v-card
                    class="mb-12 px-5 py-10"

                >
                    <div class="row position-absolute yoriqnoma-text"><a
                        href="/storage/files/dastlabki-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                        олинг!
                    </a></div>
                    <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                        <v-row>
                        </v-row>
                        <v-row class="person_data mt-10">
                            <v-col cols="4" v-if="person.type===2">
                                <ValidationProvider name="СТИР"
                                                    v-slot="{ errors }">

                                    <v-text-field
                                        v-model="person.organization_inn"
                                        label="СТИР"
                                        required
                                        :disabled="(JSON.parse($auth.user().legal_info)[0].tin).length>0"
                                        hint="Корхона ёки ташкилот СТИРи"
                                        persistent-hint
                                        name="orgInn"
                                    >
                                    </v-text-field>

                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="4" v-else>
                                <ValidationProvider name="ЖШШИР"
                                                    v-slot="{ errors }">

                                    <v-text-field
                                        v-model="person.pin"
                                        label="ЖШШИР"
                                        required
                                        :disabled="$auth.user().pin > 0"
                                        hint="Аризачи ЖШШРи"
                                        persistent-hint
                                        name="personInn"
                                    >
                                    </v-text-field>

                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="4">
                                <ValidationProvider :name="person.type===2?'Ташкилот номи':'ФИШ'" rules="required"
                                                    v-slot="{ errors }">
                                    <v-text-field
                                        v-model="person.type===2?person.organization_name:person.fio"
                                        :counter="200"
                                        :label="person.type===2?'Ташкилот номи':'ФИШ'"
                                        required
                                        :hint="person.type===2?'Юридик шахснинг тўлиқ номи':'Мурожаатчи фамилияси, исми, шарифи'"
                                        persistent-placeholder
                                    >
                                        <template v-slot:label>
                                            {{ person.type === 2 ? 'Ташкилот номи' : 'ФИШ' }}<sup>*</sup></template>

                                    </v-text-field>
                                    <span class="red&#45;&#45;text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                            <v-col cols="4">
                                <text-field
                                    v-model="app.money"
                                    title="Тўлов муддати узайтириладиган сумма"
                                    required
                                    persistent-placeholder
                                >
                                </text-field>
                            </v-col>

                            <v-col cols="4">
                                <ValidationProvider name="Ҳудуд" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.region"
                                        required
                                        :items="regions"
                                        persistent-hint
                                    >
                                        <template v-slot:label>Ҳудудий божхона бошқармасини танланг <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                            <v-col cols="4">
                                <ValidationProvider name="Телефон рақами" rules="required"
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
                            <v-col cols="4">
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
                            <v-col cols="4">
                                <text-field
                                    v-model="person.perAdr"
                                    title="Почта манзили"
                                    rules="required"
                                    hint="Аризачининг яшаш манзили"
                                    persistent-placeholder
                                >

                                </text-field>

                            </v-col>
                            <v-col cols="4">
                                <ValidationProvider name="Божхона тўловлари таъминлови тури" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.type"
                                        required
                                        :items="types"
                                        persistent-hint
                                    >
                                        <template v-slot:label>Божхона тўловлари таъминлови тури <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <template v-if="app.type===0">
                                <v-col cols="4">
                                    <text-field
                                        title="Cуғурта полиси рақами"
                                        v-model="app.sugurta_number"/>

                                </v-col>
                                <v-col cols="4">
                                    <text-field
                                        title="Cуғурта полиси санаси"
                                        v-mask="'##-##-####'"
                                        v-model="app.sugurta_sana"/>

                                </v-col>
                                <v-col cols="4">
                                    <e-arxiv-file v-model="app.sugurta_doc" :errors="app.file_error"
                                                  label="Суғурта файлини юкланг"/>
                                </v-col>
                            </template>
                            <template v-if="app.type===1">
                                <v-col cols="4">
                                    <text-field title="Банк кафолати санаси" v-mask="'##-##-####'" v-model="app.kafolat_bsana"/>

                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Банк кафолати рақами" v-model="app.kafolat_raqami"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафолат миқдори" v-model="app.kafolat_miqdor"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Банк кафолати амал қилиш санаси" v-mask="'##-##-####'" v-model="app.kafolat_sana"/>
                                </v-col>

                                <v-col cols="4">
                                    <e-arxiv-file v-model="app.kafolat_doc" :errors="app.file_error"
                                                  label="Кафолат файлини юкланг"/>
                                </v-col>

                            </template>
                            <template v-if="app.type===2">
                                <v-col cols="4">
                                    <text-field title="Кафил - СТИР/ЖШШИР" v-model="app.kafil_nomi"
                                                />
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафил - Ташкилот номи/Ф.И.Ш" v-model="app.kafil_tin_pin"
                                                />
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафиллик хати" v-model="app.kafil_xati"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафиллик хати берилган санаси" v-mask="'##-##-####'"
                                                v-model="app.kafillik_sana"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафиллик миқдори" v-model="app.kafil_miqdori" type="number"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Кафиллик хати амал қилиш санаси" v-mask="'##-##-####'"
                                                v-model="app.kafillik_sana"/>
                                </v-col>
                                <v-col cols="4">
                                    <e-arxiv-file v-model="app.kafillik_doc" :errors="app.file_error"
                                                  label="Кафиллик хати файл идни киритинг"/>
                                </v-col>

                            </template>
                            <template v-if="app.type===3">
                                <v-col cols="4">
                                    <text-field title="Гаров шартномаси" v-model="app.garov_shart"
                                                hint="Шартнома рақами"/>

                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Гаров шартномаси берилган санаси" v-mask="'##-##-####'" v-model="app.garov_shart_sana"
                                                hint="Шартнома санаси"/>

                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Гаров товар қиймати" v-model="app.garov_qiymat" type="number"/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field
                                        title="Гаров шартномаси амал қилиш санаси"
                                        persistent-hint
                                        v-mask="'##-##-####'"
                                        v-model="app.garov_sana"
                                    />
                                </v-col>

                                <v-col cols="4">
                                    <e-arxiv-file v-model="app.garov_doc" :errors="app.file_error"
                                                  label="Гаров шартномаси е-архив рақамини киритинг"/>
                                </v-col>

                            </template>
                            <template v-if="app.type===4">
                                <v-col cols="4">
                                    <text-field title="Таъминлов суммаси" v-model="app.taminlov"
                                                hint="Суммани киритинг"/>
                                </v-col>
                            </template>
                            <template v-if="app.type===5">
                                <v-col cols="4">
                                    <text-field title="Қонун ҳужжати рақами" v-model="app.taminotsiz"
                                                hint="Ҳужжат рақами "/>
                                </v-col>
                                <v-col cols="4">
                                    <text-field title="Қонун ҳужжати санаси" v-model="app.taminotsiz_sana"
                                                hint="Ҳужжат санаси" v-mask="'##-##-####'"/>
                                </v-col>
                                <v-col cols="8">
                                <e-arxiv-file v-model="app.taminotsiz_doc" :errors="app.file_error" />
                                </v-col>
                            </template>


                            <v-col cols="12">
                                <text-field
                                    v-model="app.comment"
                                    title="Изоҳ"
                                    hint="Қўшимча маълумотлар мавжуд бўлса киритинг"
                                    persistent-placeholder
                                >

                                </text-field>

                            </v-col>

                        </v-row>

                    </ValidationObserver>
                    <v-row>
                        <div style="margin-bottom: 20px; cursor:pointer;" @click="dialog=true">
                            <span
                                style="padding: 3px 2px;border: 1px solid rgb(21, 165, 51);margin-right: 10px;margin-bottom: -5px;height: 23px;width: 25px;display: inline-flex;">
                                <v-icon v-show="(checkbox.first && checkbox.second)">mdi-check</v-icon></span>
                            <span>Фойдаланиш шартларига розилик билдираман</span>

                        </div>

                    </v-row>
                    <v-dialog v-model="dialog" max-width="900">
                        <v-card>

                            <v-toolbar color="primary" dark class="text-center white--text"><span class="text-h5">
                                    Фойдаланиш шартлари
                                    </span>
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-checkbox v-model="checkbox.first" hide-details dense color="primary">
                                        <template v-slot:label>
                                            <div>
                                                Божхона тўловлари суммаларини ўз муддатида тўланишига кафолат берамиз.
                                            </div>
                                        </template>
                                    </v-checkbox>
                                    <v-checkbox v-model="checkbox.second" hide-details dense color="primary"
                                                class="d-flex justify-content-start align-items-start">
                                        <template v-slot:label>
                                            <div>
                                                Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш бўйича қонунчилик
                                                ва унинг бузилишига нисбатан бўлган жавобгарлик билан танишганмиз ҳамда
                                                мазкур мажбуриятга риоя қилинмаган тақдирда қонунчиликда белгиланган
                                                жавобгарликга тортилишга розимиз.
                                            </div>
                                        </template>
                                    </v-checkbox>

                                </v-row>
                                <v-row>
                                    <h4>Эслатма:</h4>
                                    <ul style="list-style: none; padding-left: 30px !important;  font-style: italic;  display: block; width:100%">
                                        <li>Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имконияти умумий
                                            тартибда божхона декларацияси қабул қилинган кундан эътиборан Божхона
                                            кодекси 329-моддасига асосан олтмиш календарь кундан ҳамда қўшилган қиймат
                                            солиғи Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2020 йил 10 февралдаги
                                            76-сон қарорига мувофиқ 120 кундан ошмаган даврга тақдим қилинади.
                                        </li>
                                        <li>Шунингдек, Божхона кодекси 329-моддаси ўн биринчи қисмига мувофиқ божхона
                                            тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имконияти Ўзбекистон
                                            Республикаси Президентининг ёхуд Ўзбекистон Республикаси Вазирлар
                                            Маҳкамасининг қарорига биноан узоқроқ муддатларга берилиши мумкин.
                                        </li>
                                        <li>Агар Сизда, божхона тўловларини кечиктириб ёки бўлиб-бўлиб имкониятидан
                                            қонунчиликга мувофиқ узоқроқ муддатларга фойдаланиш учун ҳуқуқий асослар
                                            мавжуд бўлган тақдирда, мазкур асосларни ариза изоҳ қисмида кўрсатишингиз
                                            лозим.
                                        </li>
                                    </ul>
                                </v-row>


                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    Қабул Қилмайман
                                </v-btn>
                                <v-btn
                                    color="green darken-1"
                                    :disabled="!(checkbox.first && checkbox.second)"
                                    @click="dialog = false"
                                >
                                    Қабул қиламан
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-row class="row mb-3 position-absolute bottom-0 end-0">
                        <v-col class="d-flex tab_action_buttons">

                            <v-btn
                                color="primary"
                                @click="nextStep"
                                size="large"
                                :loading="loading.button"
                            >
                                Ариза юбориш
                            </v-btn>


                        </v-col>
                    </v-row>
                    <v-row class="bottom-required-info">
                        <i style="font-size: 12px;"><sub
                            style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!
                        </i>

                    </v-row>

                </v-card>

            </v-container>
        </div>

        <a class="all_news service" target="_blank" href="https://t.me/dastlabkiqaror">
            <img src="/public/images/telegram.png">


            <p> Саволларингизни йўлланг
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
import {types} from "../../../../../../public/js/mix/pdfmake";
import i18n from "../../../../i18n";
import TextField from "../../../../components/form/textfield";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import DialogChips from "../../../../components/form/dialog-chips";


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "InitialPiecePay",
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
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Ҳисобварағидаги маблағларини қайтариш',
                    to: '/services/ppay',
                    disabled: true,
                    exact: true,
                },
            ],

            app: {
                bank_number: null,
                akt: [],
                region: null,
                comment: null,
                money: null,
                type: null,
                sugurta_number: null,
                sugurta_sana: null,
                sugurta_muddat: null,
                sugurta_doc: [],
                kafolat_doc: [],
                kafillik_doc: [],
                taminotsiz_doc: [],
                garov_doc: [],
                kafolat_bsana: null,
                kafolat_raqami: null,
                kafolat_miqdor: null,
                kafolat_sana: null,
                kafil_nomi: null,
                kafil_tin_pin: null,
                kafil_xati: null,
                kafil_miqdori: null,
                kafillik_bsana: null,
                kafillik_sana: null,
                garov_shart: null,
                garov_shart_sana: null,
                garov_qiymat: null,
                garov_sana: null,
                taminlov: null,
                taminotsiz: null,
                taminotsiz_sana: null,
                checkbox: false,
                file_error: "",
            },
            types: [
                {text: "Cуғурта полиси", value: 0},
                {text: "Банк кафолати", value: 1},
                {text: "Учинчи шахс кафиллиги", value: 2},
                {text: "Гаров таъминоти", value: 3},
                {text: "Депозитга пул маблағларини киритиш", value: 4},
                {text: "Таъминотсиз", value: 5},
            ],

            modal: false,
            dialog: false,
            checkbox: {
                first: false,
                second: false,
            },
            person: {
                type: 1, /// 1- fiz 2- yur
                fio: "",
                pin: null,
                tin: null,
                organization_name: "Жисмоний шахс",
                organization_inn: null,
                position: "01",
                phone: null,
                email: null,
            },
            application: {
                persons: {
                    personType: null,
                    legalName: null,
                    firstName: null,
                    surName: null,
                    lastName: null,
                    email: null,
                    pin: null,
                    tin: null,
                    perAdr: null,
                    phone: null,
                },
                appsDTO: {
                    locationId: null,
                    paySum: null,
                    pinTin: null,
                    fullOrLegalName: null,
                    perAdr: null,
                    email: null,
                    phone: null,
                    typePayments: null,
                },
                guaranteeDTO: {
                    guaranteeNumber: null,
                    guaranteeDate: null,
                    guaranteeSum: null,
                    guaranteeEndDate: null,
                },
                provisionDTO: {
                    provisionNumber: null,
                    provisionDate: null,
                    provisionSum: null,
                    provisionEndDate: null,
                },
                policyDTO: {
                    policyNumber: null,
                    policyDate: null
                },
                depositDTO: {
                    depositSum: null
                },
                warrantyDTO: {
                    warrantyPinTin: null,
                    warrantyFullOrLegalName: null,
                    warrantyNumber: null,
                    warrantyDate: null,
                    warrantySum: null,
                    warrantyEndDate: null,
                },
                supplyDTO: {
                    supplyNumber: null,
                    supplyDate: null,
                },
                earxivDTO: [],

            },
            loading: {tin: false, button: false, mfo: false},
            inns: [],
            search_inn: null,
            mfos: [],
            regions: [],
            search_mfo: null,
            fields: [
                {key: 'legalName', value: 'Ташкилот номи'},
                {key: 'firstName', value: 'ФИШ'},
                {key: 'surName', value: 'ФИШ'},
                {key: 'lastName', value: 'ФИШ'},
                {key: 'email', value: 'Электрон почта'},
                {key: 'pin', value: 'ЖШШИР'},
                {key: 'tin', value: 'СТИР'},
                {key: 'perAdr', value: 'Почта манзили'},
                {key: 'phone', value: 'Телефон рақами'},
                {key: 'locationId', value: 'Ҳудуд'},
                {key: 'paySum', value: 'Тўлов муддати узайтириладиган сумма'},
                {key: 'typePayments', value: 'Божхона тўловлари таъминлови тури'},
                {key: 'pinTin', value: 'ЖШШИР'},
                {key: 'policyNumber', value: 'Cуғурта полиси рақами'},
                {key: 'policyDate', value: 'Cуғурта полиси санаси'},
                {key: 'guaranteeNumber', value: 'Банк кафолати рақами'},
                {key: 'guaranteeDate', value: 'Банк кафолати санаси'},
                {key: 'guaranteeSum', value: 'Кафолат миқдори'},
                {key: 'guaranteeEndDate', value: 'Банк кафолати амал қилиш санаси'},
                {key: 'warrantyPinTin', value: 'Кафил берувчи номи'},
                {key: 'warrantyFullOrLegalName', value: 'Кафил номи'},
                {key: 'warrantyNumber', value: 'Кафиллик хати'},
                {key: 'warrantyDate', value: 'Кафиллик хати берилган санаси'},
                {key: 'warrantySum', value: 'Кафиллик миқдори'},
                {key: 'warrantyEndDate', value: 'Кафиллик хати амал қилиш санаси'},
                {key: 'provisionNumber', value: 'Гаров шартномаси'},
                {key: 'provisionDate', value: 'Гаров шартномаси берилган санаси'},
                {key: 'provisionSum', value: 'Гаров товар қиймати'},
                {key: 'provisionEndDate', value: 'Гаров шартномаси амал қилиш санаси'},
                {key: 'depositSum', value: 'Таъминлов суммаси'},
                {key: 'supplyNumber', value: 'Қонун ҳужжати рақами'},
                {key: 'supplyDate', value: 'Қонун ҳужжати санаси'},
                {key: 'comment', value: 'Изоҳ'},
                {
                    key: 'personName',
                    value: (typeof this.person !== 'undefined' && typeof this.person.type !== 'undefined' && this.person.type === 2) ? 'Ташкилот номи' : 'ФИШ'
                },
                {key: 'personAddress', value: 'Яшаш манзили'},
                {key: 'personMail', value: 'Электрон почта манзили'},
                {key: 'personPhone', value: 'Телефон рақами'},
            ],
            ilova_error: "",
        }

    },
    methods: {

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
            _this.application['persons']['personType'] = (_this.person.type === 1) ? 0 : 1;
            _this.application['persons']['legalName'] = _this.person.organization_name;
            _this.application['persons']['firstName'] = _this.$auth.user().first_name;
            _this.application['persons']['surName'] = _this.$auth.user().sur_name;
            _this.application['persons']['lastName'] = _this.$auth.user().mid_name;
            _this.application['persons']['email'] = _this.person.email;
            _this.application['persons']['pin'] = _this.person.pin;
            _this.application['persons']['tin'] = _this.$auth.user().tin ? _this.$auth.user().tin : _this.person.organization_inn;
            _this.application['persons']['perAdr'] = _this.person.perAdr;
            if (typeof _this.person.phone !== 'undefined' && _this.person.phone)
                _this.application['persons']['phone'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");
            _this.application['appsDTO']['locationId'] = _this.app.region;
            _this.application['appsDTO']['comment'] = _this.app.comment;

            if (typeof _this.app.money !== 'undefined' && _this.app.money && _this.app.money.length > 3) {
                _this.application['appsDTO']['paySum'] = _this.app.money.replaceAll(" ", "");
            }
            _this.application['appsDTO']['pinTin'] = (_this.person.type === 0) ? _this.person.organization_inn : _this.person.pin;
            _this.application['appsDTO']['fullOrLegalName'] = _this.person.fio;
            _this.application['appsDTO']['perAdr'] = _this.person.perAdr;
            _this.application['appsDTO']['email'] = _this.person.email;
            _this.application['appsDTO']['phone'] = _this.application['persons']['phone'];
            _this.application['appsDTO']['typePayments'] = (_this.app.type !== null) ? ("0" + (_this.app.type + 1)) : null;
            _this.application.earxivDTO = [];
            switch (_this.app.type) {
                case 0:
                    _this.application.policyDTO.policyNumber = _this.app.sugurta_number;
                    _this.application.policyDTO.policyDate = _this.formatDate(_this.app.sugurta_sana);
                    _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.sugurta_doc)));
                    break;

                case 1:
                    _this.application.guaranteeDTO.guaranteeNumber = _this.app.kafolat_raqami;
                    _this.application.guaranteeDTO.guaranteeDate = _this.formatDate(_this.app.kafolat_bsana);
                    _this.application.guaranteeDTO.guaranteeSum = _this.app.kafolat_miqdor;
                    _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.kafolat_doc)));
                    _this.application.guaranteeDTO.guaranteeEndDate = _this.formatDate(_this.app.kafolat_sana);
                    break;
                case 2:
                    _this.application.warrantyDTO.warrantyPinTin = _this.app.kafil_tin_pin;
                    _this.application.warrantyDTO.warrantyFullOrLegalName = _this.app.kafil_nomi;
                    _this.application.warrantyDTO.warrantyNumber = _this.app.kafil_xati;
                    _this.application.warrantyDTO.warrantyDate = _this.formatDate(_this.app.kafillik_sana);
                    _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.kafillik_doc)));
                    _this.application.warrantyDTO.warrantySum = _this.app.kafil_miqdori;
                    _this.application.warrantyDTO.warrantyEndDate = _this.formatDate(_this.app.kafillik_bsana);
                    break;
                case 3:
                    _this.application.provisionDTO.provisionNumber = _this.app.garov_shart;
                    _this.application.provisionDTO.provisionDate = _this.formatDate(_this.app.garov_shart_sana);
                    _this.application.provisionDTO.provisionSum = _this.app.garov_qiymat;
                    _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.garov_doc)));
                    _this.application.provisionDTO.provisionEndDate = _this.formatDate(_this.app.garov_sana);
                    break;
                case 4:
                    _this.application.depositDTO.depositSum = _this.app.taminlov;
                    break;
                case 5:
                    _this.application.supplyDTO.supplyNumber = _this.app.taminotsiz;
                    _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.taminotsiz_doc)));
                    _this.application.supplyDTO.supplyDate = _this.formatDate(_this.app.taminotsiz_sana);
                    break;
            }


            /*
            if (_this.app.akt && _this.app.akt.length > 0) {
                _this.application['earxivDTO'] = [];
                _this.app.akt.forEach((item) => {
                    if (typeof item.id !== 'undefined' && item.id)
                        _this.application['earxivDTO'].push({
                            fileId: item.id
                        })

                })
            }*/
            //_this.application['earxivDTO']=_this.app.akt;


            let result = null;
            try {
                let obj = JSON.parse(JSON.stringify(_this.application));
                await axios.post('/api/v1/ex_api/ppay', obj).then(function (resultData) {
                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                        _this.application.id = resultData.data.data.apps.id;
                        //console.log(resultData.data)
                        ///this.$cookie.delete('user');
                        //this.$cookie.delete('huquqegasi');
                        _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                        setTimeout(() => {
                            _this.$router.push("/services/ppay/" + _this.application.id)

                        }, 100)
                    } else if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.message !== 'undefined'){
                        _this.$toast.error(resultData.data.message);
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


                    if (typeof error.response.data.data.earxivDTO !== 'undefined') {
                        _this.app.file_error = error.response.data.data.earxivDTO.earxivDTO;
                    }
                    if (errors) _this.setApplicationErrors(errors);
                    else if (typeof error.response.data.data.errors == 'string') _this.$toast.error(error.response.data.data.errors); else {
                        _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                    }
                    if (typeof error.response.data !== 'undefined' && typeof error.response.data.data !== 'undefined' && typeof error.response.data.data.message !== 'undefined'){
                        _this.$toast.error(error.response.data.data.message);
                    }
                } else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг!');
                }

            }
        },
        async getBoshqarmalar() {
            const _this = this
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                if (typeof result.data.data !== 'undefined')
                    result.data.data.forEach(function (item) {
                        if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                            _this.regions.push({
                                'value': item['kod_id'],
                                'text': (item['name']).replace("Ўзбекистон Республикаси Давлат божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Давлат божхона қўмитасининг ").length)
                            })
                    })
            })
        },

        async nextStep() {
            let isValid = false;
            const _this = this;

            if (!(_this.checkbox.first && _this.checkbox.second)) {
                _this.$toast.error("Фойдаланиш шартларига розилик билдиришингиз лозим!");
                return;
            }


            this.loading.button = true;
            //console.log(!this.validateField("create_customs_person_value"))
//
            //  71-231-
            //  41-86
            //  41-87

            setTimeout(async () => {
                isValid = true;// await this.validateField("stepValidation1");
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
                            fileId: item.id
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
        /*        'app.checkbox':{
                    if(val)
                }*/
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
