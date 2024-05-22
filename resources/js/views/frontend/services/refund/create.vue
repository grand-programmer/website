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
                            ТИФ субъектининг божхона органлари ғазна ҳисобварағидаги маблағларини қайтариш бўйича ариза
                            <br>
                        </h3>
                    </v-col>
                </v-row>
                <v-card
                    class="mb-12 px-5 py-10 "

                >
                    <div class="row position-absolute yoriqnoma-text"><a
                        href="/storage/files/dastlabki-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                        олинг!
                    </a></div>
                    <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                        <v-row>
                        </v-row>
                        <v-row class="person_data mt-10">
                            <v-col cols="6" v-if="person.type===2">
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
                            <v-col cols="6" v-else>
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
                            <v-col cols="6" v-if="!$auth.user().tin || ($auth.user().tin && ($auth.user().tin).length<9)">
                                <ValidationProvider name="СТИР"
                                                    v-slot="{ errors }">

                                    <v-text-field
                                        v-model="person.tin"
                                        label="СТИР"
                                        required
                                        hint="Аризачи СТИРи"
                                        persistent-hint
                                        name="personInn"
                                    >
                                    </v-text-field>

                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="6">
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

                            <v-col cols="6">
                                <text-field
                                    v-model="app.bank_number"
                                    v-mask="'#### #### #### #### ####'"
                                    title="Банк ҳисоб рақами"
                                    required
                                    persistent-placeholder
                                >
                                </text-field>
                            </v-col>
                            <v-col cols="6">
                                <ValidationProvider
                                    name="МФО"
                                    rules="required"
                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.mfo"
                                        label="МФО*"
                                        required
                                        persistent-placeholder
                                        :items="mfos"
                                        item-text="name"
                                        item-value="code"
                                        name="importInn"
                                        hide-no-data
                                        :loading="loading.mfo"
                                        :search-input.sync="search_mfo"
                                        return-object
                                    >
                                    </v-autocomplete>
                                    <span class="red--text">{{
                                            errors[0]
                                        }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="6">
                                <text-field
                                    title="Қайтарилиши лозим бўлган сумма"
                                    type="number"
                                    persistent-placeholder
                                    rules="required"
                                    v-model="app.money"
                                />
                            </v-col>

                            <v-col cols="6">
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
                            <v-col cols="6">
                                <e-arxiv-file v-model="app.akt"
                                              label="Файлни юкланг" norequired/>
                            </v-col>

                            <v-col cols="6">
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
                            <v-col cols="6">
                                <text-field
                                    v-model="person.perAdr"
                                    title="Яшаш манзили"
                                    rules="required"
                                    hint="Аризачининг яшаш манзили"
                                    persistent-placeholder
                                >

                                </text-field>

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
    name: "InitialRefund",
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
                    to: '/services/refund',
                    disabled: true,
                    exact: true,
                },
            ],

            app: {
                bank_number: null,
                akt: []
            },
            modal: false,
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
                s04AppsDTO: {
                    locationId: null,
                    moneyBack: null,
                    accountNumber: null,
                    mfo: null,
                    personPinTin: null,
                    personName: null,
                    personAddress: null,
                    personMail: null,
                    personPhone: null,
                },
                s04EarxivBodyList: [],
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
                {key: 'email', value: 'Электрон почта манзили'},
                {key: 'pin', value: 'ЖШШИР'},
                {key: 'tin', value: 'СТИР'},
                {key: 'perAdr', value: 'Яшаш манзили'},
                {key: 'phone', value: 'Телефон рақами'},
                {key: 'locationId', value: 'Ҳудуд'},
                {key: 'moneyBack', value: 'Қайтарилиши лозим бўлган сумма'},
                {key: 'accountNumber', value: 'Банк ҳисоб рақами'},
                {key: 'mfo', value: 'МФО'},
                {key: 'personPinTin', value: 'ЖШШИР'},
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
            _this.application['persons']['pin'] = _this.$auth.user().pin;
            _this.application['persons']['tin'] = _this.person.tin ? _this.person.tin : _this.person.organization_inn;
            _this.application['persons']['perAdr'] = _this.person.perAdr;

            if (typeof _this.person.phone !== 'undefined' && _this.person.phone)
                _this.application['persons']['phone'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");
            _this.application['s04AppsDTO']['locationId'] = _this.app.region;
            if (typeof _this.app.bank_number !== 'undefined' && _this.app.bank_number && _this.app.bank_number.length > 3) {
                _this.application['s04AppsDTO']['accountNumber'] = _this.app.bank_number.replaceAll(" ", "");
            }
            if (typeof _this.app.money !== 'undefined' && _this.app.money && _this.app.money.length > 3) {
                _this.application['s04AppsDTO']['moneyBack'] = _this.app.money.replaceAll(" ", "");
            }
            if (typeof _this.app.mfo !== 'undefined' && typeof _this.app.mfo.cdId !== 'undefined' && _this.app.mfo.cdId && _this.app.mfo.cdId.length > 3) {
                _this.application['s04AppsDTO']['mfo'] = _this.app.mfo.cdId;
            }
            _this.application['s04AppsDTO']['personPinTin'] = _this.person.pin;
            _this.application['s04AppsDTO']['personName'] = _this.person.fio;
            _this.application['s04AppsDTO']['personAddress'] = _this.person.perAdr;
            _this.application['s04AppsDTO']['personMail'] = _this.person.email;
            _this.application['s04AppsDTO']['personPhone'] = _this.application['persons']['phone'];
            if (_this.app.akt && _this.app.akt.length > 0) {
                _this.application['s04EarxivBodyList'] = [];
                _this.app.akt.forEach((item) => {
                    if (typeof item.id !== 'undefined' && item.id)
                        _this.application['s04EarxivBodyList'].push({
                            fileId: item.id
                        })

                })
            }
            //_this.application['s04EarxivBodyList']=_this.app.akt;


            let result = null;
            try {
                let obj = JSON.parse(JSON.stringify(_this.application));
                await axios.post('/api/v1/ex_api/refund', obj).then(function (resultData) {
                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                        console.log("resultData.data['data']")
                        console.log(resultData.data.data.data.id)
                        _this.application.id = resultData.data.data.data.id;
                        //console.log(resultData.data)
                        ///this.$cookie.delete('user');
                        //this.$cookie.delete('huquqegasi');
                        _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                        setTimeout(() => {
                            _this.$router.push("/services/refund/" + _this.application.id)

                        }, 100)
                    }
                })
                _this.loading.button = false;
                return result;
            } catch (error) {
                if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && typeof error.response.data.data !== 'undefined' && typeof error.response.data.data.errors !== 'undefined') {
                    if (typeof error.response.data.data.errors.appsBody !== 'undefined') {


                        _this.showFirstError(error.response.data.data.errors);
                        _this.setApplicationErrors(error.response.data.data.errors.appsBody);
                        //_this.$toast.error('Майдонларни тўлдиришда хатолик юз берди! Тўғрилаб юборинг!');
                    } else if (typeof error.response.data.data.errors === 'string') _this.$toast.error(error.response.data.data.errors); else {
                        _this.showFirstError(error.response.data.data.errors);
                    }
                } else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                    console.log(error)
                }

            }
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
            this.$toast.error('Майдонларни тўлдиришда хатолик юз берди! \n ' + toast.key + ' - ' + toast.value);
        },
        async getBoshqarmalar() {
            const _this = this
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
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
    watch: {
        search_mfo: {
            handler: function (val) {


                if (val === null || (val && val.length > 6)) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.mfo = true

                // Lazily load input items
                fetch("https://new.customs.uz/api/v1/data/mfo?code=" + val)
                    .then((res) => res.json())
                    .then(res => {
                        if (typeof res.data !== 'undefined') {
                            res.data.map(function (item) {
                                item.name = item.code + " - " + item.cdNm;
                                return item;
                            })
                            this.mfos = res.data;
                        }


                    })
                    .catch(err => {
                        //console.log(err)
                    })
                    .finally(() => (
                        this.loading.mfo = false
                    ))
            },
            deep: false
        },
    },

    mounted() {
        this.initialize();
    },
    computed: {
        /*        progress(val) {
                    this.Initprogress(val)
                },
                isvalidDocument(tovar_id = null) {
                    //tovar_id = this.tovarIndex;
                    //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
                    return !this.isValidDoc()
                }*/

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
