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

                <v-row>
                    <h3>Таҳрирлаш</h3>
                </v-row>
                <v-col cols="12" class="d-block mt-3">
                    <v-btn v-for="language in languages" @click="lang=language.value"
                           :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                    </v-btn>



                </v-col>

                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }" ref="pageForm">
                            <v-form>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="6" md="6" :key="'title' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'Json ' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Json - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].json"
                                                                  :name="'json' + langKey"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'csv' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'CSV' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'CSV - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].csv"
                                                                  name="csv"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'xml' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'XML' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'XML - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].xml"
                                                                  name="xml"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'xls' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'XLS' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'XLS - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].xls"
                                                                  name="xls"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="6" sm="6" md="6" :key="'rdf' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'RDF' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'RDF - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].rdf"
                                                                  name="rdf"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Йил"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Йил"
                                                                  v-model="editedItem.year"
                                                                  name="year"
                                                                  v-mask="'202#'"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Чорак"
                                                                    v-slot="{ errors }">
                                                    <v-autocomplete label="Чорак"
                                                                    v-model="editedItem.quarter"
                                                                    name="quarter"
                                                                    :items="[
                                                                        {text: '1-чорак', value: 1},
                                                                        {text: '2-чорак', value: 2},
                                                                        {text: '3-чорак', value: 3},
                                                                        {text: '4-чорак', value: 4},
                                                                        {text: 'Йиллик', value: null},
                                                                    ]"
                                                                    :error-messages="errors[0]"></v-autocomplete>
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
    name: "OpenDataUpdate",
    data: () => ({
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true}
                ],
            openDataItem: [],
            lang: 'uz',
            editedItem: {
                id: null,
                phone: null,
                code: null,
                email: [],
                translates: [],
                sort: 100

            },
            langtext: {
                uz: {
                    title: null,
                    code: null,
                    contact: null,
                    boshqarma: null
                },
                oz: {
                    title: null,
                    code: null,
                    contact: null,
                    boshqarma: null,
                },
                ru: {
                    title: null,
                    code: null,
                    contact: null,
                    boshqarma: null,
                },
                en: {
                    title: null,
                    code: null,
                    contact: null,
                    boshqarma: null,
                }
            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            pages: [],
        }
    ),

    computed: {
        formTitle() {
            return 'Тахрирлаш'
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
            this.breadcrumb_items.push({text: 'Очиқ маълумотлар', to: '/admin/opendatas', exact: true})
            this.breadcrumb_items.push({text: 'Очиқ маълумот файллари', to: '/admin/opendata/' + this.$route.params.opendata + '/files', exact: true})
            this.breadcrumb_items.push({text: 'Очиқ маълумотни тахрирлаш', to: '#', exact: true, disabled: true})

            const _this=this;
            api.readOpenDataFile(this.$route.params.opendata, this.$route.params.id).then((response) => {
                this.editedItem = response.data.data;
                if (typeof _this.editedItem.translates !== 'undefined' && _this.editedItem.translates ) {
                    for (const [key, translate] of Object.entries(_this.editedItem.translates)){
                    //_this.editedItem.translates.each(function(translate,key){
                        _this.langtext[key]=translate[0];
                    }
                }
            }).catch((error) => {
                console.log(error)
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!11`)
                this.$router.replace("/admin/opendatas").catch(()=>{});
            });

        },
        close() {
            this.$router.replace('/admin/opendatas');
        },

        async save() {
            const isValid = await this.$refs.pageForm.validate();
            console.log(isValid)

            if (isValid) {
                this.editedItem.translates=this.langtext;
                api.updateOpenDataFile(this.$route.params.opendata,this.editedItem.id, this.editedItem).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                }).catch((error) => {
                    this.$toast.error(this.$i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                })
            }
        }
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
