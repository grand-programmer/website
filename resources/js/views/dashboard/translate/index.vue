<template>

    <v-container
        class="page-main 11"
        fluid
        tag="section"
    >
        <div class="dashboardbreadcrumb">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <v-row>
            <v-col cols="12">
                <div class="d-flex justify-content-between">
                    <v-col cols="9" class="d-flex">
                        <v-btn
                            color="primary"
                            dark
                            class="new_item mr-3"
                            @click="saveFile"

                        >
                            {{ $t('Ўзгаришларни сақлаш') }}
                        </v-btn>
                        <v-btn
                            color="blue"
                            dark
                            class="new_item d-none"
                            @click="reqtranslate=!reqtranslate"
                        >
                            Таржимаси йўқлар
                        </v-btn>
                        <v-col cols="4" style="margin-top: -25px; margin-left: 20px">
                            <v-text-field v-model="search" label="Қидириш"></v-text-field>
                        </v-col>
                    </v-col>
                    <v-col cols="3">

                        <v-btn
                            small
                            :color="lang==='uz'?'primary':''"
                            class=""
                            @click="lang='uz'"
                        >
                            Узб
                        </v-btn>
                        <v-btn
                            :color="lang==='oz'?'primary':''"
                            small
                            class=""
                            @click="lang='oz'"
                        >
                            Uzb
                        </v-btn>
                        <v-btn
                            :color="lang==='ru'?'primary':''"
                            small
                            class=""
                            @click="lang='ru'"
                        >
                            Рус
                        </v-btn>
                        <v-btn
                            :color="lang==='en'?'primary':''"
                            small
                            class=""
                            @click="lang='en'"
                        >
                            En
                        </v-btn>
                    </v-col>

                </div>

            </v-col>
        </v-row>
        <v-btn
            color="primary"
            dark
            class="new_item my-2"
            @click="dialog=true"
        >
            Янги қўшиш
        </v-btn>
        <v-dialog v-model="dialog" max-width="900px">
            <v-card>
                <v-card-title class="text-h5">Янги таржима қўшиш
                </v-card-title>
                <v-card-text>
                    <v-row>
                    <v-col cols="12"> <v-text-field v-model="newTranslate.key" label="Калит сўз" required /> </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog=false">Ёпиш</v-btn>
                    <v-btn color="blue darken-1" text @click="addTranslate" >
                        Қўшиш
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



        <v-row justify="center">
            <v-col
                cols="12"
                md="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="translates"
                    class="elevation-1"
                    :search="search"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                >
                    <template v-slot:item.key="{ item }">
                        <v-text-field v-if="filteredTranslates[getTranslateByKey(item.key)].key.length<1"
                                      v-model="filteredTranslates[filteredTranslates.length - 1].key"/>
                        <p v-else>{{ item.key }}</p>
                    </template>
                    <template v-slot:item.uz="{ item }">
                        <v-text-field v-model="filteredTranslates[getTranslateByKey(item.key)].uz"
                                      :data="getTranslateByKey(item.key)"/>
                    </template>
                    <template v-slot:item.oz="{ item }">
                        <v-text-field v-model="filteredTranslates[getTranslateByKey(item.key)].oz"/>
                    </template>
                    <template v-slot:item.en="{ item }">
                        <v-text-field v-model="filteredTranslates[getTranslateByKey(item.key)].en"/>
                    </template>
                    <template v-slot:item.ru="{ item }">
                        <v-text-field v-model="filteredTranslates[getTranslateByKey(item.key)].ru"/>
                    </template>
                </v-data-table>

            </v-col>

        </v-row>
    </v-container>

</template>

<script>
const l = ((new Date()).getTime());
import api from "./../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import uz from '../../../locales/dynamic/uz.json';
import oz from '../../../locales/dynamic/oz.json';
import ru from '../../../locales/dynamic/ru.json';
import en from '../../../locales/dynamic/en.json';


export default {

    data: () => ({
        breadcrumb_items:
            [
                {text: 'Админ панел', to: '/admin', exact: true},
                {text: 'Таржималар', to: '/admin/translate', exact: true, disabled: true},
            ],
        translates: [],
        search: '',
        filteredTranslates: [],
        newTranslate:{
            key:null
        },
        reqtranslate: false,
        uz: {},
        ru: {},
        en: {},
        oz: {},
        lang: 'uz',
        sortBy: 'key',
        sortDesc: true,
        dialog: false

    }),


    mounted() {
        this.initialize();
    },
    computed: {
        headers() {
            const headerData=[
                {
                    text: 'Keyword',
                    align: 'start',
                    sortable: true,
                    value: 'key',
                    width: 300
                }
                ]
            switch(this.lang){
                case 'uz':
                    headerData.push({
                    text: 'Ўзбекча', width: 300, value: 'uz',
                    filter: value => {
                    if (!this.reqtranslate) return true
                    return value.length > 0
                },
                })
                    break;
                case 'ru':
                    headerData.push(
                {
                    text: 'Руссча', width: 300, value: 'ru',
                    filter: value => {
                    if (!this.reqtranslate) return true
                    return value.length > 0
                },
                })
                    break;
                case 'en':
                    headerData.push(
                {
                    text: 'Инглизча', width: 300, value: 'en',
                    filter: value => {
                    if (!this.reqtranslate) return true
                    return value.length > 0
                },
                })
                    break;
                case 'oz':
                    headerData.push(
                {
                    text: 'Ozbekcha', width: 300, value: 'oz',
                    filter: value => {
                    if (!this.reqtranslate) return true
                    return value.length < 1
                },
                })
                    break;

            }
            return headerData
        }
    },
    methods: {
        async initialize() {
            const _this = this;
            this.filteredTranslates=[]
            this.translates=[]
            await axios.get('/api/v1/admin/locales').then(function (res) {
                // _this[this.lang] = JSON.parse(JSON.stringify(res.data.data[this.lang]))
                _this.en = JSON.parse(JSON.stringify(res.data.data['en']))
                _this.uz = JSON.parse(JSON.stringify(res.data.data['uz']))
                _this.oz = JSON.parse(JSON.stringify(res.data.data['oz']))
                _this.ru = JSON.parse(JSON.stringify(res.data.data['ru']))
            })

            //const uz=uz;
            if (typeof _this.uz === 'object') {
                for (const [key, value] of Object.entries(_this.uz)) {

                    this.translates.push({
                        key,
                        uz: value,
                        ru: _this.ru[key],
                        oz: _this.oz[key],
                        en: _this.en[key]
                    })
                    this.filteredTranslates = JSON.parse(JSON.stringify(this.translates));

                }
            }
        },
        getTranslateByKey(key) {
            let transItem = this.filteredTranslates.filter((item) => {
                if (key === item.key) return item;
            });
            return this.filteredTranslates.indexOf(transItem[0])
        },
        addTranslate() {
            const _this = this
            if(!this.newTranslate.key || (this.newTranslate.key && this.newTranslate.key.length<1)){
                this.$toast.error(this.$t('Сиз калит сўзни киритимадингиз!'))
                return
            }
            axios.post('/api/v1/admin/addlocale', { ...this.newTranslate}).then(function (res) {
                if (typeof res.data.success !== 'undefined' && res.data.success) {
                    _this.$toast.success('Омадли тарзда қўшилди!');
                    window.location.href='/admin/translate'
                } else {
                    _this.$toast.success('Хатолик юз берди!');
                }
            })


        },
        saveFile() {
            const _this = this;
            if (typeof uz === 'object') {
                /*                for (const [key, value] of Object.entries(this.filteredTranslates)) {
                                    this.uz[key]=value.uz;
                                    this.ru[key]=value.ru;
                                    this.en[key]=value.en;
                                    this.oz[key]=value.oz;
                                }*/
                axios.post('/api/v1/admin/locales', {data: this.filteredTranslates, lang: _this.lang}).then(function (res) {
                    if (typeof res.data.success !== 'undefined' && res.data.success) {
                        _this.$toast.success('Омадли тарзда юкланди!');
                        window.location.href='/admin/translate'
                    } else {
                        _this.$toast.success('Хатолик юз берди!');
                    }
                })
            }


            /*

                        const data=[];
                        data['uz'] = JSON.stringify(this.uz);
                        data['ru'] = JSON.stringify(this.ru);
                        data['en'] = JSON.stringify(this.en);
                        data['oz'] = JSON.stringify(this.oz);
                        const fs = require('fs');
                        try {
                            fs.writeFileSync('/resources/js/locales/dynamic/uz', data['uz'], 'utf-8');
                            fs.writeFileSync('/resources/js/locales/dynamic/ru', data['ru'], 'utf-8');
                            fs.writeFileSync('/resources/js/locales/dynamic/en', data['en'], 'utf-8');
                            fs.writeFileSync('/resources/js/locales/dynamic/oz', data['oz'], 'utf-8');
                        }
                        catch(e) { alert('Failed to save the file !'); }*/
            this.initialize()
        },
        displayNoTranslates() {

        }


    },
    watch: {
                lang: {
                    handler () {
                        this.initialize()
                    },
                    deep: true,
                },
    },
}
</script>

