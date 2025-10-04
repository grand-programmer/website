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
                    <h3>Ҳодиса яратиш</h3>
                </v-row>
                <v-col cols="12" class="d-block mt-3">
                    <v-btn v-for="language in languages" @click="lang=language.value"
                           :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                    </v-btn>



                </v-col>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="pageForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="6" md="6" v-show="lang==='uz'">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="editedItem.question"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>


                                            <v-col cols="6" sm="6" md="6" :key="'title' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey" >
                                                <ValidationProvider name="Сарлавха"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - ' + getLang()['text']"
                                                                  v-model="langtext[langKey].question"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>

                                            <v-col cols="3" sm="3" md="3">
                                                    <v-text-field type="number" label="тартиб рақами"
                                                                  v-model="editedItem.sort"
                                                                  name="title"></v-text-field>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                    <v-switch label="Активлиги"   v-model="editedItem.active"></v-switch>
                                            </v-col>
                                            <v-row class="mb-5">
                                                <v-col cols="1">

                                                    <v-btn color="primary" @click="editedItem.answers.push({text:''})">
                                                        <v-icon class="mr-2">mdi-plus-box-multiple</v-icon>

                                                        Жавоб қўшиш
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row  v-if="editedItem.answers.length>0" :key="anKey" v-for="(answer,anKey) in editedItem.answers">
                                                <v-col cols="10" v-show="lang==='uz'">
                                                    <ValidationProvider :name="'Жавоб ' + (anKey+1)" rules="required"
                                                                        v-slot="{ errors }">
                                                        <v-text-field :label="'Жавоб ' + (anKey+1) "
                                                                      v-model="editedItem.answers[anKey].text"
                                                                      :name="'answer'+anKey"></v-text-field>
                                                        <span class="error--text">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="10" :key="'answer'+ langKey + anKey"
                                                       v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                    <ValidationProvider :name="'Жавоб ' + (anKey+1)"
                                                                        v-slot="{ errors }">
                                                        <v-text-field :label="'Жавоб ' + getLang()['text'] + ' - ' + (anKey+1) "
                                                                      v-model="langtext[langKey].answers[anKey]"
                                                                      :name="'answer'+anKey"></v-text-field>
                                                        <span class="error--text">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="2">
                                                    <v-btn
                                                       color="red"

                                                    ><v-icon @click="editedItem.answers.splice(anKey,1); langtext[lang].answers.splice(anKey,1);">mdi-close</v-icon> Ўчириш</v-btn>
                                                </v-col>

                                            </v-row>


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


export default {
    name: "EventCreate",
    data() {
        return {
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Сўровномалар', to: '/admin/votes', exact: true},
                    {text: 'Сўровнома яратиш', to: '#', exact: true, disabled: true},
                ],
            votes: [],
            editedIndex: -1,
            lang: 'uz',
            langtext: {
                oz: {
                    answers: [],
                    question: null,
                },
                ru: {
                    answers: [],
                    question: null,
                },
                en: {
                    answers: [],
                    question: null,
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
                question: '',
                answers:[],
                sort:100

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
            this.$router.replace("/admin/votes").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.dataItems[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {
                    this.editedItem.translates=this.langtext;
                    // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                    api.addVote(this.editedItem).then((response) => {
                        this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        this.close()
                    }).catch((error) => {
                        this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
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

            const [ day,month, year] = date.split('.')
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
