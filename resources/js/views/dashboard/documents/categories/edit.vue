<template>
    <v-container
        class="categories-main"
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
                            <v-form ref="categoriesForm">
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                  v-model="category.name"
                                                                  name="name"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="'name' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Сарлавха  "
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].name"
                                                                  name="name"></v-text-field>
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
import api from "../../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "CategoryEdit",
    data: () => ({
            category: [],
            lang: 'uz',
            langtext: {
                oz: {
                    name: null,
                },
                ru: {
                    name: null,
                },
                en: {
                    name: null,
                }


            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            breadcrumb_items:
            [
                {text: 'Админ панел', to: '/admin', exact: true},
                {text: 'Рубрикалар', to: '/admin/doccategories', exact: true},
                {text: 'Рубрикани тахрирлаш', to: '#', exact: true, disabled: true},
            ],
        }
    ),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш'
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
            api.readDocumentCategory(this.$route.params.id).then((response) => {
                this.category = response.data.data;
                if (typeof _this.category.translates !== 'undefined' && _this.category.translates && _this.category.translates.length>0 ) {
                    _this.category.translates.map(function(translate){
                        _this.langtext[translate.lang]=translate;
                    })
                }
            }).catch((error) => {
                this.$toast.error($t('Маълумотларни юклашда хатолик содир бўлди!'))
                this.$router.replace("/admin/doccategories").catch(() => {
                });

            })
        },
        close() {
            this.$router.replace('/admin/doccategories');
        },

        async save() {
            const isValid = await this.$refs.categoriesForm.validate();
            if (isValid) {
                this.category.translates=this.langtext;
                api.updateDocumentCategory(this.category.id, this.category).then((response) => {
                    this.$toast.success(`Маълумотлар омадли тарзда юкланди!`)
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                })
            }

        },
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
}
</script>
<style>
.categories-main .v-data-table button.new_item {
    margin-top: -77px;
}

.categories-main .v-card.v-sheet {
    margin-top: 50px;
}
</style>
