<template>
    <div class="section page-container">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <v-container>
            <v-row>
                <div class="widget_tittle mt-10"><h3>{{ $t('Ҳужжатлар') }}</h3></div>

                <v-col cols="4">
                    <v-autocomplete
                        hide-details
                        filled
                        solo
                        background-color="white"
                        v-model="options.type"
                        :items="[
                            {text:$t('ҚОНУН'),value:1},
                            {text:$t('ПРЕЗИДЕНТ ФАРМОНИ'),value:2},
                            {text:$t('ПРЕЗИДЕНТ ҚАРОРИ'),value:3},
                            {text:$t('ВАЗИРЛАР МАҲКАМАСИ ҚАРОРИ'),value:4},
                            {text:$t('АДЛИЯ ВАЗИРЛИГИДА РЎЙХАТДАН ЎТГАН БУЙРУҚ ВА ҚАРОРЛАР'),value:5},
                        ]"
                        :label="$t('Тоифа')"
                        clearable
                    >

                    </v-autocomplete>
                </v-col>
                <v-col cols="4">
                    <v-text-field
                        filled
                        solo
                        background-color="white"
                        hide-details
                        label="Ҳужжат рақами"
                        clearable
                        v-model="options.number"
                    />
                </v-col>
                <v-col cols="2">

                    <v-menu
                        ref="menu_sanadan"
                        v-model="menu.sanadan"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                filled
                                solo
                                background-color="white"
                                hide-details
                                clearable
                                label="Ушбу санадан"
                                v-mask="'##-##-####'"
                                v-model="options.sanadan"
                                @change="sanaChanged('dan')"
                            >
                                <template v-slot:append>
                                    <v-icon
                                        v-bind="attrs"
                                        v-on="on"
                                    >mdi-calendar</v-icon>
                                </template>
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="datepicker.sanadan"
                            :active-picker.sync="activePicker.sanadan"
                            min="1950-01-01"
                            class="mt-0"
                            @change="changedDatepicker(1)"
                        ></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="2">

                    <v-menu
                        ref="menu_sanagacha"
                        v-model="menu.sanagacha"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                hide-details
                                filled
                                solo
                                background-color="white"
                                clearable
                                label="Ушбу санагача"
                                v-mask="'##-##-####'"
                                v-model="options.sanagacha"
                                @change="sanaChanged('2')"
                            >
                                <template v-slot:append>
                                    <v-icon
                                        v-bind="attrs"
                                        v-on="on"
                                    >mdi-calendar</v-icon>
                                </template>
                            </v-text-field>
                        </template>
                        <v-date-picker
                            v-model="datepicker.sanagacha"
                            :active-picker.sync="activePicker.sanagacha"
                            min="1950-01-01"
                            class="mt-0"
                            @change="changedDatepicker(2)"
                        ></v-date-picker>
                    </v-menu>

                </v-col>

                <v-col cols="6">
                    <v-autocomplete
                        hide-details
                        filled
                        solo
                        background-color="white"
                        v-model="options.category"
                        :items="categories"
                        :label="$t('Тури')"
                        item-text="name"
                        item-value="id"
                        clearable
                    >

                    </v-autocomplete>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                        filled
                        solo
                        background-color="white"
                        hide-details
                        label="Номлардаги калит сўзлар"
                        v-model="options.terms"
                        clearable
                    />
                </v-col>
                <v-col offset="10" cols="2" class="justify-content-end d-flex">
                    <v-btn
                        color="primary"
                        class="mr-0"
                        @click="filterDocs"
                    >
                        {{ $t('Излаш') }}

                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="documents_content">
                <template v-if="documents && documents.length > 0">
                    <a class="document" v-for="(document,docKey) in documents" :href="document.url" target="_blank">
                        <span class="document_index">{{ docKey + 1 }}</span>
                        <h3 class="document_text">{{ document.name }}</h3>
                        <p class="document_number">№ {{ document.code }} {{ document.date }}</p>
                    </a>
                </template>
                <template v-else>
                    <p class="m-10"> {{ $t('Маълумот топилмади') }}</p>
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import i18n from "../../../../i18n";
import apiClient from "../../../../src/services/apiService";

export default {
    name: "Documents",
    data() {
        return {
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Ҳужжатлар'),
                    to: '/page/documents',
                    disabled: true,
                    exact: true,
                },
            ],
            categories: [],
            options: {
                category: null,
                type: null,
                number: null,
                sanagacha: null,
                sanadan: null,
                terms: null
            },
            menu: {
                sanadan: false,
                sanagacha: false
            },
            activePicker: {
                sanadan: null,
                sanagacha:null
            },
            datepicker: {
                sanadan: null,
                sanagacha: null
            },
            documents: []
        }

    },
    methods: {
        changedDatepicker(type = 1) {

            if (type === 1) {
                const [yearD, monthD, dayD] = this.datepicker.sanadan.split('-');
                this.options.sanadan = this.formatDate(dayD + '-' + monthD + '-' + yearD);
            }
            else {
                const [yearD, monthD, dayD] = this.datepicker.sanagacha.split('-');
                this.options.sanagacha = this.formatDate(dayD + '-' + monthD + '-' + yearD);
            }
        },
        getDocuments(requestData) {
            apiClient.getDocuments(requestData).then((res) => {
                if (res.status === 200 && typeof res.data.data !== 'undefined') this.documents = res.data.data
            });
        },
        getCategories(requestData) {
            apiClient.getDocumentCategories(requestData).then((res) => {
                console.log(res)

                if (res.status === 200 && typeof res.data !== 'undefined') {

                    this.categories = res.data
                }
            })
        },
        filterDocs() {
            this.getDocuments(JSON.parse(JSON.stringify(this.options)));
        },
        formatDate(dateValue) {
            function dateToString(date = (new Date)) {
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

                if (day < 10) {
                    day = '0' + day;
                }

                if (month === 0) {
                    month = 1;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                return day + '-' + month + '-' + year;
            }

            if (dateValue && dateValue.length > 0) {
                let optionsD = {day: 1, month: 1, year: (new Date()).getFullYear()};
                const [dayD, monthD, yearD] = dateValue.split('-');
                if (dayD && dayD < 32) optionsD.day = dayD;
                if (monthD && monthD < 13) optionsD.month = monthD;
                if (yearD) optionsD.year = yearD;
                const date = new Date(optionsD.month + '-' + optionsD.day + '-' + optionsD.year);
                dateValue = dateToString(date);
            }
            return dateValue;
        },
        sanaChanged(type = 'dan') {
            if (type === 'dan') {
                this.options.sanadan = this.formatDate(this.options.sanadan);
            } else {
                this.options.sanagacha = this.formatDate(this.options.sanagacha);
            }
        }


    },
        watch:{
            'menu.sanadan' (val) {
                val && setTimeout(() => (this.activePicker.sanadan = 'YEAR'))
            },
            'menu.sanagacha' (val) {
                val && setTimeout(() => (this.activePicker.sanagacha = 'YEAR'))
            },
        },
    mounted() {
        this.getDocuments();
        this.getCategories();
    }
}
</script>

<style scoped lang="scss">
.documents_content {
    margin-top: 40px;

    .document_index {
        width: 100px;
        text-align: center;
        font-size: 20px;
        color: #ccc;
    }

    .document_text {
        flex: 1;
        font-size: 14px;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        height: 100%;
        margin: 0;
        line-height: 25px;
        padding: 0 25px;
        margin-right: 20px;
        /*&:after{
            content: "";
            display: block;
            width: 1px;
            height: 80%;
            position: absolute;
            background-color: #ccc;
            left: -15px;
            top: 10%;
        }
        &:before{
            content: "";
            display: block;
            width: 1px;
            height: 80%;
            position: absolute;
            background-color: #ccc;
            right: 0;
            top: 10%;
        }*/

    }

    .document_number {
        width: 150px;
        text-align: left;
        color: #ccc;
        margin: 0;
    }

    .document {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 20px;
        color: #0c0b0b;
        background: #fff;
        position: relative;
        box-shadow: 0 0 7px rgb(0 0 0 / 16%);
        margin-bottom: 30px;
        transition: all 0.3s ease;

        &:hover {
            box-shadow: 0 0 15px rgb(0 0 0 / 30%);
            transform: scale(1.01);


        }
    }
}
</style>
