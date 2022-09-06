<template>
    <v-container
        class="menu-main"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <div class="dashboardbreadcrumb">
                <v-container>
                    <v-breadcrumbs :items="breadcrumb_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-container>
            </div>
            <v-col
                cols="12"
                md="12"
            >
                <v-btn v-for="language in languages" @click="lang=language.value"
                       :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                </v-btn>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="faqForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="6" md="6" v-show="lang==='uz'">
                                                <ValidationProvider name="Савол" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Савол"
                                                                  v-model="faq.question"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'title' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey" >
                                                <ValidationProvider name="Савол"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Савол - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].question"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>

                                            <v-col cols="2" sm="2" md="2">

                                                <v-text-field label="Даражаси"
                                                              v-model="faq.sort"
                                                              name="title"></v-text-field>

                                            </v-col>
                                            <v-col cols="2" sm="2" md="2">

                                                <v-switch v-model="faq.active"
                                                          name="title">
                                                    <template v-slot:label>
                                                        {{faq.active===true?'Актив':'Актив эмас'}}

                                                    </template>
                                                </v-switch>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" v-show="lang==='uz'">
                                                <ValidationProvider name="Жавоб" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-textarea label="Жавоб"
                                                                  v-model="faq.answer"
                                                                  name="answer"></v-textarea>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'title'+langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Жавоб"
                                                                    v-slot="{ errors }">
                                                    <v-textarea :label="'Жавоб - '+ getLang()['text']"
                                                                v-model="langtext[langKey].answer"
                                                                  name="answer"></v-textarea>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>


                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Ёпиш</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Сақлаш</v-btn>
                                </v-card-actions>
                            </v-form>
                        </ValidationObserver>
                    </v-card>
                </v-flex>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "./../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/oz.json';
import Editor from '@tinymce/tinymce-vue';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "faqUpdate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Савол ва жавоблар', to: '/admin/faqs', exact: true},
                    {text: 'Савол ва жавобни тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            faq: [],
            menu2:'',
            lang: 'uz',
            langtext: {
                oz: {
                    answer: null,
                    question: null,
                },
                ru: {
                    answer: null,
                    question: null,
                },
                en: {
                    answer: null,
                    question: null,
                }


            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            menu:'',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menus: [],
            pages: [],
        }
    ),

    computed: {
        formTitle() {
            return 'Тахрирлаш'
        },
        computedDateFormatted() {
            return this.formatDate(this.date)
        },

    },
    created() {
        this.initialize();
    },
    methods: {
        getLang(code = null) {
            if (code) {
                let language = this.languages.filter((language) => {
                    if (language.value === code) return language;
                })
                if (language) return language[0]
                return null;

            } else {
                let language = this.languages.filter((language) => {
                    if (language.value === this.lang) return language;
                })
                if (language) return language[0]
                return null;
            }
        },
        initialize() {
            const _this=this;
            api.readFaq(this.$route.params.id).then((response) => {
                this.faq = response.data.data;
                if (typeof _this.faq.translates !== 'undefined' && _this.faq.translates && _this.faq.translates.length>0 ) {
                    _this.faq.translates.map(function(translate){
                        _this.langtext[translate.language]=translate;
                    })
                }
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/admin/faqs").catch(()=>{});
            });

        },
        close() {
            this.$router.replace('/admin/faqs');
        },

        async save() {
            const isValid = await this.$refs.faqForm.validate();
            console.log(this.faq.date)

            if (isValid) {
                this.faq.translates=this.langtext;
                api.updateFaq(this.faq.id, this.faq).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                }).catch((error) => {
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                })
            }
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
