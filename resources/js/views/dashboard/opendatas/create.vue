<template>
    <v-container
        class="page-main"
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
                    <h3>Очиқ маълумот яратиш</h3>
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
                                                <ValidationProvider :name="'Сарлавха ' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].title"
                                                                  :name="'title' + langKey"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6" :key="'boshqarma' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'Маъсул бошқарма' + langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Маъсул бошқарма - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].boshqarma"
                                                                  name="boshqarma"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="6" sm="6" md="6" :key="'contact' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider :name="'Маъсул ' +langKey"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Маъсул - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].contact"
                                                                  name="contact"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Телефон"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Телефон"
                                                                  v-model="editedItem.phone"
                                                                  name="phone"
                                                                  v-mask="'+998 ##-###-##-##'"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Электрон почта"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Электрон почта"
                                                                  v-model="editedItem.email"
                                                                  name="email"
                                                                  type="email"
                                                                  :error-messages="errors[0]"></v-text-field>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="3" sm="3" md="3">
                                                <v-text-field type="number" label="тартиб рақами"
                                                              v-model="editedItem.sort"
                                                              name="title"></v-text-field>
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
    name: "OpenDataCreate",
    data() {
        return {
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Очиқ маълумотлар', to: '/admin/opendatas', exact: true},
                    {text: 'Очиқ маълумот яратиш', to: '#', exact: true, disabled: true},
                ],
            opendata: [],
            editedIndex: -1,
            lang: 'uz',
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
            editedItem: {
                id: null,
                phone: null,
                code: null,
                email: [],
                translates: [],
                sort: 100

            },
            pages: [],
            menu: false,
            modal: false,
            menu2: false,
            // date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

        }
    },
    computed: {
        formTitle() {
            return 'Янги';
        },
        /*        computedDateFormatted() {
                    return this.formatDate(this.date)
                },*/

    },
    created() {
        // this.initialize();
    },

    /*    watch: {
            date(val) {
                this.editedItem.date = this.formatDate(this.date)
            },
        },*/
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
            /*            api.readVotes().then((response) => {
                            this.editedItem = response.data;
                        }).catch((error) => {
                            this.$toast.error(`Сўровномаларни олишда муаммо бор!`)

                            console.log(error)
                        });*/
        },

        close() {
            this.$router.replace("/admin/opendatas").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.dataItems[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {
                    this.editedItem.translates = this.langtext;
                    // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                    api.addOpenData(this.editedItem).then((response) => {
                        this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        this.close()
                    }).catch((error) => {
                        this.$toast.error(this.$i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                        console.log(error)
                    })
                }
            }

        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}-${month}-${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [day, month, year] = date.split('.')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },

    },

    components: {
        ValidationProvider,
        ValidationObserver,
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
