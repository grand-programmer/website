<template>
    <div class="section appeals-section">
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
            <v-container>
                <v-alert
                    :type="alert.alert_type"
                    v-model="alert.value"
                    transition="slide-y-transition"
                    height="40px"
                    text
                    rounded
                >
                    {{ alert.alert_text }}
                </v-alert>
                <div class="col-12">

                    <div class="application-form">

                        <div class="row">
                            <div class="col-8">
                                <div class="appeals-title">
                                    <i class="far fa-edit"></i>
                                    <h3>
                                        {{ radio.values[Object.keys(radio.values)[appeal.appeal_type]].label }}
                                        туридаги мурожаат юбориш
                                    </h3>

                                </div>
                                <div class="application-description">
                                    Мурожаатларни Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси ва унинг
                                    ҳудудий бошқармаларига ва постларига юборишингиз мумкин
                                </div>
                                <!--==========Logo area==========-->
                                <ValidationObserver v-slot="{ invalid }" ref="create_apple">
                                    <form v-on:submit.prevent="create_appeal">

                                        <div class="row">

                                            <div class="col-6">
                                                <ValidationProvider name="Ф.И.О. / Ташкилот" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Ф.И.О. / Ташкилот"
                                                                  v-model="appeal.fio"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="offset-1 col-5">
                                                <radio3 v-for="radiovalue in radio.values"
                                                        :name="radio.name"
                                                        v-bind:value="radiovalue.key"
                                                        v-bind:key="radiovalue.key"
                                                        v-bind:label="radiovalue.label"
                                                        v-model="appeal.appeal_type"
                                                        style="padding-top: 32px"

                                                ></radio3>
                                            </div>
                                            <div class="col-6">
                                                <ValidationProvider name="Адрес" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Адрес"
                                                                  v-model="appeal.address"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-3">
                                                <ValidationProvider name="Email" rules="email" v-slot="{ errors }">
                                                    <v-text-field label="Email"
                                                                  v-model="appeal.email"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-3">
                                                <ValidationProvider name="Телефон" rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field
                                                        hide-details="auto" v-model="appeal.phone"
                                                        return-masked-value
                                                        v-mask="'## ###-##-##'" placeholder="78 123-45-67"
                                                        prefix="+998"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>


                                            <div class="col-6">
                                                <v-autocomplete dense clearable label="Божхона органи"
                                                                :items="adresatlar" hide-details="auto"
                                                                v-model="appeal.authority"></v-autocomplete>
                                            </div>
                                            <div class="col-6">
                                                <v-autocomplete dense clearable label="Мурожаат таснифи"
                                                                :items="tasniflar" hide-details="auto"
                                                                v-model="appeal.sphere"></v-autocomplete>

                                            </div>

                                            <div class="col-12">
                                                <ValidationProvider name="Мурожаат қисқача мазмуни"
                                                                    rules="required|min:10" v-slot="{ errors }">
                                                    <v-textarea
                                                        no-resize
                                                        clear-icon="mdi-close-circle"
                                                        label="Мурожаат қисқача мазмуни"
                                                        v-model="appeal.text"></v-textarea>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                            <div class="col-12 justify-content-center row">
                                                <div class="col-6  row align-center mt-5">
                                                    <v-btn color="#39ae69" type="submit">
                                                        Юбориш
                                                    </v-btn>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </ValidationObserver>
                            </div>
                            <div class="col-4">
                                <div class="app-contacts">

                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane active" id="nav-home" role="tabpanel"
                                             aria-labelledby="nav-home-tab">
                                            <div class="app-contacts-content">
                                                <p class="contact_savol">Ушбу хизматдан фойдаланиш билан боғлиқ
                                                    саволлар бўйича</p>
                                                <p class="contact-fio">Дусмухамедов Алишер <br> Исматиллаевич</p>
                                                <a class="contact-phone" href="tel:+998971234567"><img
                                                    src="/img/icons/phone.svg">+998971234567</a>
                                                <p class="contact-doljnost">Ахборот коммуникация технологиялари ва
                                                    киберхавфсизликни таъминлаш
                                                    бошқармаси, Бошқарма бошлиғи</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </v-container>
        </div>

    </div>

</template>
<script>
import Radio3 from '../../../../components/form/radio3';

import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/uz.json';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: 'ServiceAppeals',
    data() {
        return {
            alert: {
                value: false,
                alert_type: 'success',
                alert_text: ''
            },
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled:false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled:false,
                    exact: true,
                },
                {
                    text: 'Мурожаатлар',
                    to: '/services/appeals',
                    disabled:false,
                    exact: true,
                },
                {
                    text: 'Мурожаат юбориш',
                    to: '/services/appeals/create',
                    disabled:true,
                    exact: true,
                },
            ],

            errors: [],
            appeal: {
                fio: '',
                appeal_type: parseInt(this.$route.query.type),
                address: '',
                email: '',
                phone: '',
                authority: null,
                sphere: null,
                text: ''

            },
            radio: {
                name: 'appeal_type',
                values: [
                    {label: 'Ариза', key: 0},
                    {label: 'Шикоят', key: 1},
                    {label: 'Таклиф', key: 2},
                ]
            },
            adresatlar:
                [
                    {value: 0, text: 'Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси'},
                    {value: 1, text: 'Қорақалпоғистон Республикаси бошқармаси'},
                    {value: 2, text: 'Андижон вилояти бошқармаси'},
                    {value: 3, text: 'Бухоро вилояти бошқармаси'},
                    {value: 4, text: 'Навоий вилояти бошқармаси'},
                    {value: 5, text: 'Тошкент шахар бошқармаси'},
                    {value: 6, text: 'Самарқанд вилояти бошқармаси'},
                    {value: 7, text: 'Наманган вилояти бошқармаси'},
                ]
            ,
            tasniflar: [
                {value: 0, text: 'Бошқарма фаолияти'},
                {value: 1, text: 'Тўловлар'},
                {value: 2, text: 'Божхона божлари'},
            ],
            activeRadio: 0
        }
    },
    components: {
        'radio3': Radio3,
        ValidationProvider,
        ValidationObserver,
    },
    methods: {
        //create appeal
        async create_appeal() {
            const isValid = await this.$refs.create_apple.validate();
            if (isValid) {
                axios
                    .post('/api/v1/appeal', this.appeal)
                    .then((resp) => {
                        if (resp.status == 200) {
                            //reset form
                            this.appeal = {
                                fio: '',
                                appeal_type: 0,
                                address: '',
                                email: '',
                                phone: '',
                                authority: null,
                                sphere: null,
                                text: ''
                            };
                            this.$refs.create_apple.reset();
                            this.alert = {
                                value: true,
                                alert_type: "success",
                                alert_text: "Сизнинг мурожаатингиз қабул қилинди! Мурожаатнингиз ҳолатини кўриб туриш учун мурожаат номери ва кодини сақлаб қўйинг"
                            }
                            setTimeout(() => {
                                this.alert = {
                                    value: false,
                                }
                                this.$router.push({ path: '/services/appeals?appeal_id='+ resp.data.number + '&appeal_code='+ resp.data.code})
                            }, 2000)


                        } else {
                            this.alert = {
                                value: true,
                                alert_type: "error",
                                alert_text: "Маълумотларни юборишда хатолик юз берди!",
                            }
                        }

                    })
                    .catch((e) => {
                        this.alert = {
                            value: true,
                            alert_type: "error",
                            alert_text: e.response.data.error
                        }
                    })
                setTimeout(() => {
                    this.alert = {
                        value: false,
                    }
                }, 4000)
            }
        }
    }


}
</script>
<style>
.application-form .form-control {
    border: none;
    border-bottom: 1px solid #ced4da;
    outline: none;
    box-shadow: none;
    border-radius: 0;
}

.appeals-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.v-alert {
    padding: 0 10px !important;
}
</style>
