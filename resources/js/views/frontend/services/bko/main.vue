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
                            {{ $t('Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш') }}
                            <br>
                        </h3>
                    </v-col>
                </v-row>
                <v-card
                    class="mb-12 px-5 py-10"

                >
                    <div class="row position-absolute yoriqnoma-text"><a
                        href="/storage/files/dastlabki-user.pptx"> {{
                            $t('Ариза тўлдириш бўйича йўриқмани юклаб олинг!')
                        }}
                    </a></div>
                    <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                        <v-row>
                        </v-row>
                        <v-row class="person_data mt-10">
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
                                <ValidationProvider name="Пост" rules="required"
                                                    v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.post"
                                        :loading="postloading"
                                        required
                                        :disabled="postloading"
                                        hint="Божхона постини танланг"
                                        :items="posts"
                                        persistent-placeholder
                                    >
                                        <template v-slot:label>Божхона постини танланг <sup>*</sup>
                                        </template>
                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>

                            </v-col>

                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-col cols="2" class="p-0">
                                    <h5 class="mb-2">Транспорт воситаси тури</h5>
                                    <v-btn-toggle v-model="app.type">
                                        <v-btn :color="app.type!==1?'primary':''" class="border-0" small>
                                            Автотранспорт воситаси
                                        </v-btn>
                                        <v-btn :color="app.type===1?'primary':''" class="border-0" small>
                                            Контейнер
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-col>
                            </v-col>
                        </v-row>
                        <v-row v-if="app.type!==1">
                            <v-col cols="4">
                                <ValidationProvider name="Автотранспорт воситаси тури" v-slot="{ errors }">
                                    <v-autocomplete
                                        v-model="app.type_avto"
                                        :items="[
                                           {text:'Тиркама',value:'Тиркама'},
                                           {text:'Ярим тиркама',value:'Ярим тиркама'},
                                           {text:'Юк тортгич',value:'Юк тортгич'},
                                           {text:'Бошқа',value:'Бошқа'}
                                       ]"
                                        label="Автотранспорт воситаси тури*"
                                        persistent-placeholder
                                    >

                                    </v-autocomplete>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </v-col>
                            <v-col cols="4">
                                <textfield title="Русуми (маркаси)" rules="required" v-model="app.mark"/>
                            </v-col>
                            <v-col cols="4">
                                <textfield
                                    title="Ишлаб чиқарилган санаси"
                                    v-mask="'##-##-####'"
                                    rules="required"
                                    v-model="app.produced_date"/>
                            </v-col>
                            <v-col cols="4">
                                <textfield
                                    title="Давлат рақами белгиси"
                                    rules="required"
                                    v-model="app.gov_number"/>
                            </v-col>
                            <v-col cols="4">
                                <textfield
                                    title="Идентификация рақами (VIN)"
                                    rules="required"
                                    v-model="app.vin"/>
                            </v-col>
                            <v-col cols="4">
                                <textfield
                                    title="Гувоҳнома серия рақами"
                                    hint="Автотранспорт воситаси рўйхатдан ўтказилганлиги тўғрисида гувоҳнома (техпаспорт) серия рақами"
                                    rules="required"
                                    v-model="app.texpasport"/>
                            </v-col>


                        </v-row>
                        <v-row v-if="app.type===1">

                            <v-col cols="4">
                                <textfield
                                    title="Контейнер рақами"
                                    rules="required"
                                    v-model="app.kon_number"/>
                            </v-col>

                            <v-col cols="4">
                                <textfield
                                    title="Контенер тури"
                                    rules="required"
                                    v-model="app.kon_type"/>
                            </v-col>

                            <v-col cols="4">


                                <ValidationProvider name="Тара вазни" rules="required"
                                                    v-slot="{ errors }">
                                    <v-text-field
                                        v-model="app.konWeight"
                                        persistent-placeholder
                                    >
                                        <template v-slot:label>Тара вазни <sup>*</sup>
                                        </template>
                                    </v-text-field>
                                    <span class="red--text">{{ errors[0] }}</span>
                                </ValidationProvider>


                            </v-col>

                            <v-col cols="4">
                                <textfield
                                    title="Ташқи ўлчамлари"
                                    rules="required"
                                    hint="смда, Мисол: 1289,5*235*239,2"
                                    v-model="app.kon_size"/>
                            </v-col>
                            <v-col cols="4">
                                <textfield
                                    title="Конструкциянинг асосий ҳусусиятлари"
                                    rules="required"
                                    hint="материал типи, конструкция тури ва бошқа. Мисол: Темирдан ясалган, йиғилмайдиган "
                                    v-model="app.kon_xususiyat"/>
                            </v-col>

                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <e-arxiv-file
                                    multiple
                                    v-model="app.files"
                                    label="Транспорт воситаси расмлари"
                                    :errors="ilova_error"
                                    hint="Транспорт воситасининг чап тарафи, Транспорт воситасининг ўнг тарафи, Транспорт воситасининг олди, Транспорт воситасининг орқаси, Пломбалар ва муҳрлар қўйиладиган жой"/>
                            </v-col>
                            <v-col cols="12"></v-col>
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
import Textfield from "../../../../components/form/textfield";


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "InitialBko",
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
                    text: 'Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш',
                    to: '/services/stamp',
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
                {key: 'postId', value: 'Пост'},
            ],
            ilova_error: "",
            postloading: false,
            posts: [],
        }

    },
    methods: {
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
            _this.application['apps']['locationId'] = _this.app.region;

            _this.application['apps']['pinTin'] = (_this.person.type === 0) ? _this.person.organization_inn : _this.person.pin;
            _this.application['apps']['appealType'] = "1";
            _this.application['apps']['postId'] = _this.app.post;
            _this.application['apps']['transportType'] = _this.app.type ? '2' : '1';

            _this.application.earxiv = [];
            _this.application.earxiv = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.files)));
            switch (_this.app.type) {
                case 0:
                    _this.application.auto.trailerTypeNm = _this.app.type_avto;
                    _this.application.auto.trailerBrend = _this.app.mark;
                    _this.application.auto.stateNumber = _this.app.gov_number;
                    _this.application.auto.vinNumber = _this.app.vin;
                    _this.application.auto.techPassportNumber = _this.app.texpasport;
                    _this.application.auto.productionDate = _this.formatDate(_this.app.produced_date);
                    break;

                case 1:
                    _this.application.container.containerNumber = _this.app.kon_number;
                    _this.application.container.containerType = _this.app.kon_type;
                    _this.application.container.containerVase = _this.app.konWeight;
                    _this.application.container.containerSize = _this.app.kon_size;
                    _this.application.container.containerFeature = _this.app.kon_xususiyat;
                    break;
            }

            let result = null;
            try {
                let obj = JSON.parse(JSON.stringify(_this.application));
                await axios.post('/api/v1/ex_api/stamp', obj).then(function (resultData) {
                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                        _this.application.id = resultData.data.data.apps.id;
                        //console.log(resultData.data)
                        ///this.$cookie.delete('user');
                        //this.$cookie.delete('huquqegasi');
                        _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                        setTimeout(() => {
                            _this.$router.push("/services/stamp/" + _this.application.id)

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

                    if (typeof error.response.data.data.earxiv !== 'undefined') {
                        _this.ilova_error = JSON.parse(JSON.stringify(error.response.data.data.earxiv.earxiv));
                    }
                    if (errors) {
                        _this.setApplicationErrors(errors);
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
        'app.region': {
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
        },


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
