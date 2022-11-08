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
                            <v-form ref="menuForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="menu.title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="'title'+langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Сарлавха"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                  v-model="langtext[lang].title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-autocomplete
                                                    label="Ота менюни танлаш"
                                                    v-model="menu.parent"
                                                    name="parent"
                                                    chips
                                                    clearable
                                                    :items="menus"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-autocomplete
                                                    label="Меню элементи турини белгиланг"
                                                    v-model="menu.type"
                                                    name="type"
                                                    chips
                                                    clearable
                                                    :items="menuTypes"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="menu.type==0">
                                                <ValidationProvider name="Урл"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Урл"
                                                                  chips
                                                                  style="margin-top: 10px"
                                                                  clearable
                                                                  v-model="menu.url"
                                                                  name="url"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="menu.type==1">

                                                <ValidationProvider name="Сахифа"
                                                                    v-slot="{ errors }">
                                                    <v-autocomplete
                                                        label="Саҳифани белгиланг"
                                                        v-model="menu.page_id"
                                                        name="related_id"
                                                        chips
                                                        clearable
                                                        item-text="title"
                                                        item-value="id"
                                                        :items="pages"
                                                    ></v-autocomplete>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>

                                            <v-col cols="3" sm="3" md="3">
                                                <ValidationProvider name="Позиция" rules="numeric" v-slot="{ errors }">
                                                    <v-text-field
                                                        name="sort_number"
                                                        v-model="menu.sort_number"
                                                        style="margin-top: 8px"
                                                        label="Позиция"
                                                    ></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
<!--

                                            <v-col cols="3" sm="3" md="3">

                                                <ValidationProvider name="Менюни позицияси"
                                                                    v-slot="{ errors }">
                                                    <v-autocomplete
                                                        label="Менюни позициясини белгиланг"
                                                        v-model="menu.layout"
                                                        name="menu_layout"
                                                        chips
                                                        multiple
                                                        clearable
                                                        :items="[
                                                            {text:'Header', value:0},
                                                            {text:'Footer', value:1}
                                                            ]"
                                                    ></v-autocomplete>
                                                    <span class="error&#45;&#45;text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>-->


                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch label="Фойдаланувчиларга кўрсатиш"
                                                          v-model="menu.status"
                                                          name="status"></v-switch>
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
    name: "MenuCreate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Менюлар', to: '/admin/footermenu', exact: true},
                    {text: 'Менюни тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            menu: [],
            lang: 'uz',
            langtext: {
                oz: {
                    title: null,
                },
                ru: {
                    title: null,
                },
                en: {
                    title: null,
                }


            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            menus: [],
            pages: [],
            menuTypes: [
                {text: 'Одатий', value: 0},
                {text: 'Страница', value: 1},
                //{text: 'Янгилик',value:1},

            ],
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
            const _this = this;
            api.readFooterOneMenu(this.$route.params.id).then((response) => {
                this.menu = response.data.data;

                if (typeof _this.menu.translates !== 'undefined' && _this.menu.translates && _this.menu.translates.length > 0) {
                    _this.menu.translates.map(function (translate) {
                        _this.langtext[translate.language] = translate;
                    })
                }

            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/admin/footermenu").catch(() => {
                });
            });
            api.readPages().then((response) => {
                this.pages = response.data;
            }).catch((error) => {
                this.$toast.error(`Сахифларни олишда муааммо бор!`)
            })
            api.readFooterMenusForSelect().then((response) => {
                this.menus = response.data;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/admin/footermenu").catch(() => {
                });
            })
        },
        close() {
            this.$router.replace('/admin/footermenu');
        },

        async save() {
            const isValid = await this.$refs.menuForm.validate();
            if (isValid) {
                this.menu.sort_number = parseInt(this.menu.sort_number);
                this.menu.translates = this.langtext;
                api.updateFooterMenu(this.menu.id, this.menu).then((response) => {
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
        Editor
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
