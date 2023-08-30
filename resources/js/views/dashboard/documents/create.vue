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
                                                                v-model="editedItem.categories"
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
                                                        </ValidationProvider> <!-- 974744114 beruniy salon-->

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
import Editor from '@tinymce/tinymce-vue';
import Textfield from "../../../components/form/textfield";
import i18n from "../../../i18n";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "DocumentCreate",
    data() {
        return {
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
            allnews: [],
            categories: [],
            editedIndex: -1,
            editedItem: {
                id: null,
                name: null,
                url: null,
                code: null,
                date: null,
                cat_id: null,
                type:null,
            },
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Ҳужжатлар', to: '/admin/documents', exact: true},
                    {text: 'Ҳужжат яратиш', to: '/admin/documents/create', exact: true},
                ],
            boshqarmalar: [],//[{value:"1700",text:"'Тошкент-АЭРО' ИБК"},{value:"1703",text:"Андижон вилояти божхона бошқармаси"},{value:"1706",text:"Бухоро вилояти божхона бошқармаси"},{value:"1708",text:"Жиззах вилояти божхона бошқармаси"},{value:"1710",text:"Қашқадарё вилояти божхона бошқармаси"},{value:"1712",text:"Навоий вилояти божхона бошқармаси"},{value:"1714",text:"Наманган вилояти божхона бошқармаси"},{value:"1718",text:"Самарқанд вилояти божхона бошқармаси"},{value:"1722",text:"Сурхондарё вилояти божхона бошқармаси"},{value:"1724",text:"Сирдарё вилояти божхона бошқармаси"},{value:"1726",text:"Тошкент шахар божхона бошқармаси"},{value:"1727",text:"Тошкент вилояти божхона бошқармаси"},{value:"1730",text:"Фарғона вилояти божхона бошқармаси"},{value:"1733",text:"Хоразм вилояти божхона бошқармаси"},{value:"1735",text:"Қорақалпоғистон Республикаси божхона бошқармаси"}]
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
                {key: 'paySum', value: 'Тўлов муддати узайтириладиган сумма'},
                {key: 'typePayments', value: 'Божхона тўловлари таъминлови тури'},
                {key: 'pinTin', value: 'ЖШШИР'},
                {key: 'policyNumber', value: 'Cуғурта полиси рақами'},
                {key: 'policyDate', value: 'Cуғурта полиси санаси'},
                {key: 'guaranteeNumber', value: 'Банк кафолати рақами'},
                {key: 'guaranteeDate', value: 'Банк кафолати санаси'},
                {key: 'guaranteeSum', value: 'Кафолат миқдори'},
                {key: 'guaranteeEndDate', value: 'Банк кафолати амал қилиш санаси'},
                {key: 'warrantyPinTin', value: 'Кафил берувчи номи'},
                {key: 'warrantyFullOrLegalName', value: 'Кафил номи'},
                {key: 'warrantyNumber', value: 'Кафиллик хати'},
                {key: 'warrantyDate', value: 'Кафиллик хати берилган санаси'},
                {key: 'warrantySum', value: 'Кафиллик миқдори'},
                {key: 'warrantyEndDate', value: 'Кафиллик хати амал қилиш санаси'},
                {key: 'provisionNumber', value: 'Гаров шартномаси'},
                {key: 'provisionDate', value: 'Гаров шартномаси берилган санаси'},
                {key: 'provisionSum', value: 'Гаров товар қиймати'},
                {key: 'provisionEndDate', value: 'Гаров шартномаси амал қилиш санаси'},
                {key: 'depositSum', value: 'Таъминлов суммаси'},
                {key: 'supplyNumber', value: 'Қонун ҳужжати рақами'},
                {key: 'supplyDate', value: 'Қонун ҳужжати санаси'},
                {
                    key: 'personName',
                    value: (typeof this.person !== 'undefined' && typeof this.person.type !== 'undefined' && this.person.type === 2) ? 'Ташкилот номи' : 'ФИШ'
                },
                {key: 'personAddress', value: 'Яшаш манзили'},
                {key: 'personMail', value: 'Электрон почта манзили'},
                {key: 'personPhone', value: 'Телефон рақами'},
            ],
        }
    },

    computed: {
        formTitle() {
            return 'Янги';
        },

    },
    created() {
        this.initialize();
    },

    methods: {
        setApplicationErrors(errors) {
            console.log(errors)
            const _this = this;
            if (errors) {

                console.log(errors);
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

        formatDate(date) {
            if (!date) return;
            const [day, month, year] = date.split("-");
            return year + "-" + month + "-" + day;
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
            api.readDocumentCategories({select: 1}).then((response) => {
                this.categories = response.data.data;
            }).catch((error) => {
                console.log(error);
                this.$toast.error('Категорияларни олишда хатолик юз берди!');

            });

        },


        close() {
            this.$router.replace("/admin/documents").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.allnews[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {
                    if (this.editedItem.date && this.editedItem.date.length > 0) this.editedItem.date = this.formatDate(this.editedItem.date);
                    const data = new FormData();
                    for (var key in this.editedItem) {
                        if (Array.isArray(this.editedItem[key]) && key === 'translates') {
                            for (var category in this.editedItem[key]) {
                                data.append(key + '[]', this.editedItem[key][category]);
                            }
                        } else
                            data.append(key, this.editedItem[key]);
                    }
                    if (this.editedItem.date && this.editedItem.date.length > 0) this.editedItem.date = this.formatDate(this.editedItem.date);
                    data.append("translates", JSON.stringify(this.langtext));
                    api.addDocument(data).then((response) => {
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
                }
            }

        },
    },
    components: {
        Textfield,
        ValidationProvider,
        ValidationObserver,
        Editor
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}

.page-main .v-card.v-sheet {
    margin-top: 50px;
}
</style>
