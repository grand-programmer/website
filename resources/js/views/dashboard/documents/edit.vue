<template>
    <v-container
        class="news-main"
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
                <v-col class="m-4 " cols="12">
                    <v-btn v-for="language in languages" @click="lang=language.value"
                           :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                    </v-btn>
                </v-col>


                <v-flex xs12 sm12 md12 lg12>
                    <v-card class="m-4">

                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="pageForm" enctype="multipart/form-data">
                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <v-row>
                                                    <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                        <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                          v-model="editedItem.name"
                                                                          name="title"></v-text-field>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12" :key="'name'+langKey"
                                                           v-for="(langItem,langKey) in langtext"
                                                           v-show="lang===langKey && langKey!=='uz'">
                                                        <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                          v-model="langtext[langKey].name"
                                                                          name="title"></v-text-field>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-row></v-row>
                                                <v-row>
                                                    <v-col cols="4" sm="4" md="4">
                                                        <ValidationProvider name="Категория" rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                label="Категория"
                                                                v-model="editedItem.cat_id"
                                                                :items="categories"
                                                                auto-select-first
                                                                item-text="name"
                                                                item-value="id"
                                                                clearable
                                                                hide-selected
                                                                no-data-text="Бошқа категориялар топилмади"
                                                            ></v-autocomplete>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="4" sm="4" md="4">
                                                        <ValidationProvider name="Ҳужжат тури" rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                label="Тури"
                                                                v-model="editedItem.type"
                                                                :items="[
                                                                    {text:'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ҚОНУНИ',value:1},
                                                                    {text:'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИ ФАРМОНИ',value:2},
                                                                    {text:'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИ ҚАРОРИ',value:3},
                                                                    {text:'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ВАЗИРЛАР МАҲКАМАСИ ҚАРОРИ',value:4},
                                                                    {text:'ЎЗБЕКИСТОН РЕСПУБЛИКАСИ АДЛИЯ ВАЗИРЛИГИДА РЎЙХАТДАН ЎТГАН БУЙРУҚ ВА ҚАРОРЛАР',value:5},
                                                                ]"
                                                                clearable
                                                                hide-selected
                                                                no-data-text="Бошқа турлари топилмади"
                                                            ></v-autocomplete>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>

                                                    <v-col
                                                        cols="4"
                                                        v-show="lang==='uz'">
                                                        <textfield
                                                            :title="'Ҳужжат Урл адреси - '+ getLang()['text']"
                                                            v-model="editedItem.url"></textfield>
                                                    </v-col>
                                                    <v-col cols="4" :key="'name'+langKey"
                                                           v-for="(langItem,langKey) in langtext"
                                                           v-show="lang===langKey && langKey!=='uz'">
                                                        <textfield
                                                            :title="'Ҳужжат Урл адреси - '+ getLang()['text']"
                                                            v-model="langtext[langKey].url"
                                                        />
                                                    </v-col>
                                                    <!-- Code                                                   -->
                                                    <v-col
                                                        cols="4"
                                                        v-show="lang==='uz'">
                                                        <textfield
                                                            :title="'Ҳужжат рақами - '+ getLang()['text']"
                                                            v-model="editedItem.code"></textfield>
                                                    </v-col>
                                                    <v-col cols="4" :key="'name рақами'+langKey"
                                                           v-for="(langItem,langKey) in langtext"
                                                           v-show="lang===langKey && langKey!=='uz'">
                                                        <textfield
                                                            :title="'Ҳужжат рақами - '+ getLang()['text']"
                                                            v-model="langtext[langKey].code"
                                                        />
                                                    </v-col>

                                                    <v-col
                                                        cols="4"
                                                    >
                                                        <textfield
                                                            :title="'Ҳужжат санаси '"
                                                            v-mask="'##-##-####'"
                                                            v-model="editedItem.date"></textfield>
                                                    </v-col>

                                                </v-row>
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
/*import Editor from '../../../components/form/tinyeditor';*/
import Editor from '@tinymce/tinymce-vue';
import Textfield from "../../../components/form/textfield";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "DocumentsEdit",
    data: () => ({
            editedItem: [],
            lang: 'uz',
            langtext: {
                oz: {
                    name: null,
                    url: null,
                    code: null,
                },
                ru: {
                    name: null,
                    url: null,
                    code: null,
                },
                en: {
                    name: null,
                    url: null,
                    code: null,
                }


            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            preview: '',
            categories: [],
            created_at:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Ҳужжатлар', to: '/admin/documents', exact: true},
                    {text: 'Ҳужжатлар таҳрирлаш', to: '/admin/documents/edit', exact: true},
                ],
            boshqarmalar: [],//[{value:"1700",text:"'Тошкент-АЭРО' ИБК"},{value:"1703",text:"Андижон вилояти божхона бошқармаси"},{value:"1706",text:"Бухоро вилояти божхона бошқармаси"},{value:"1708",text:"Жиззах вилояти божхона бошқармаси"},{value:"1710",text:"Қашқадарё вилояти божхона бошқармаси"},{value:"1712",text:"Навоий вилояти божхона бошқармаси"},{value:"1714",text:"Наманган вилояти божхона бошқармаси"},{value:"1718",text:"Самарқанд вилояти божхона бошқармаси"},{value:"1722",text:"Сурхондарё вилояти божхона бошқармаси"},{value:"1724",text:"Сирдарё вилояти божхона бошқармаси"},{value:"1726",text:"Тошкент шахар божхона бошқармаси"},{value:"1727",text:"Тошкент вилояти божхона бошқармаси"},{value:"1730",text:"Фарғона вилояти божхона бошқармаси"},{value:"1733",text:"Хоразм вилояти божхона бошқармаси"},{value:"1735",text:"Қорақалпоғистон Республикаси божхона бошқармаси"}]
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
        formatDate(date,type=1) {
            console.log(date)
            if (!date) return null

            const [year, month, day] = date.split('-')
            if(type===2) return `${day}-${month}-${year}`;
            console.log('asd'+date)
            if(type===1) return `${day}-${month}-${year}`; else return `${year}-${day}-${month}`
        },
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
            api.readOneDocument(this.$route.params.id).then((response) => {
                this.editedItem = response.data.data;
                this.editedItem.date = this.formatDate(this.editedItem.date,2);


                if (typeof _this.editedItem.translates !== 'undefined' && _this.editedItem.translates && _this.editedItem.translates.length>0 ) {
                    _this.editedItem.translates.map(function(translate){
                        _this.langtext[translate.lang]=translate;
                    })
                }
            }).catch((error) => {
                console.log(error);
                this.$router.replace("/admin/documents").catch(() => {
                });
            })
            api.readDocumentCategories({select:true}).then((response) => {
                this.categories = response.data.data;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                console.log(error);
            })

        },


        close() {
            this.$router.replace('/admin/documents');
        },

        async save() {
            const isValid = await this.$refs.pageForm.validate();
            if (isValid) {

                //data.append("translates", JSON.stringify(this.langtext));
                this.editedItem.translates=this.langtext;
                if (this.editedItem.date && this.editedItem.date.length > 0) this.editedItem.date = this.formatDate(this.editedItem.date);
                api.updateDocument(this.editedItem.id,this.editedItem).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`);
                    this.close();

                }).catch((error) => {

                    if(typeof error.response.data !=='undefined'
                        && typeof error.response.data.error !=='undefined'
                        && typeof (Object.values(error.response.data.error))[0][0] !=='undefined' ) {
                        this.$toast.error((Object.values(error.response.data.error))[0][0])
                        console.log((Object.values(error.response.data.error))[0][0])
                    }
                })
                if (this.editedItem.date && this.editedItem.date.length > 0) this.editedItem.date = this.formatDate(this.editedItem.date,1);

            }

        },

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor,
        Textfield
    },
}
</script>
<style>
.news-main .v-data-table button.new_item {
    margin-top: -77px;
}

.news-main .v-card.v-sheet {
    margin-top: 50px;
}
</style>
