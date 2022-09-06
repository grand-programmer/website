<template>
    <div class="section" id="section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>

        </div>
        <v-container class="mening_arizalarim" v-if="$auth.user()">
            <v-row>
                <v-col cols="3">
                    <v-card
                        class="mx-auto mt-9"

                    >
                        <v-navigation-drawer permanent class="accent-4 w-100">
                            <v-list>
                                <!--                                <v-list-item>
                                                                    <v-list-item-avatar>
                                                                        <v-img :src="'/public/images/users/'+ $auth.user().id +'.jpg'"></v-img>
                                                                    </v-list-item-avatar>
                                                                </v-list-item>-->

                                <v-list-item link>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">
                                            {{ $auth.user().first_name }} {{ $auth.user().sur_name }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{ $auth.user().email }}</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-icon>mdi-menu-down</v-icon>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list
                                nav
                                dense
                            >
                                <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                >
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        :to="item.link"
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>

                    <!--                    <v-card class="p-3" elevation="1">
                                            <div class="d-flex align-items-center justify-space-between user_info">
                                                <img  :src="'/public/images/users/'+ $auth.user().id +'.jpg'" alt="Фойдаланувчи сурати">
                                                <p>
                                                    {{$auth.user().first_name}} {{$auth.user().sur_name}} {{$auth.user().mid_name}}
                                                </p>

                                            </div>
                                            <v-row>

                                            </v-row>

                                        </v-card>-->
                </v-col>
                <v-col cols="9">
                    <v-card class="mt-9 p-3" elevation="1">
                        <h3 class="my-5">{{ $t("Менинг аризаларим") }}</h3>

                        <v-row>
                            <v-col cols="12">
                                <div class="vacancy-filter">
                                    <v-row class=" mt-3">
                                        <v-col cols="2">
                                            <v-text-field
                                                v-model="search_ariza_raqami"
                                                :label="$t('Ариза рақами')"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-menu
                                                ref="menu_sanadan"
                                                v-model="menu_sanadan"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="filter_date_sanadan"
                                                        :label="$t('Санадан')"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        clearable
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    class="m-0"
                                                    :active-picker.sync="activePickerDan"
                                                    v-model="filter_date_sanadan"
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                    min="1950-01-01"
                                                    @change="save_sanadan"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-menu
                                                ref="menu_sanagacha"
                                                v-model="menu_sanagacha"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="filter_date_sanagacha"
                                                        :label="$t('Санагача')"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        clearable
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                </template>
<!--                                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"-->
                                                <v-date-picker
                                                    class="m-0"
                                                    :active-picker.sync="activePickerGacha"
                                                    v-model="filter_date_sanagacha"
                                                    min="1950-01-01"
                                                    @change="save_sanagacha"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-autocomplete
                                                v-model="filter_type"
                                                :items="types"
                                                :label="$t('Ариза тури')"
                                                clearable
                                            ></v-autocomplete>
                                        </v-col><!--
                                        <v-col cols="1" class="d-flex justify-content-center">
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                color="primary"
                                                center
                                            >
                                                <v-icon dark>mdi-magnify</v-icon>
                                            </v-btn>
                                        </v-col>-->
                                    </v-row>
                                </div>

                            </v-col>

                        </v-row>


                        <v-row>
                            <v-col cols="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="filter_apps"
                                    :items-per-page="5"
                                    @click:row="gotoApp"
                                    :loading="loadingApps"
                                >
                                    <template v-slot:item.status="{ item }">
<!--                                        <v-chip
                                            :color="getColor(item.status,item.type)"
                                            dark

                                        >-->
                                            {{ item.statusNm }}
<!--                                        </v-chip>-->
                                    </template>


                                </v-data-table>

                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<script>


import i18n from "../../../i18n";

export default {
    name: 'MyApplicationsList',
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
                    text: i18n.t('Менинг аризаларим'),
                    to: '/applications',
                    disabled: true,
                    exact: true,
                },
            ],
            menu_sanadan: false,
            menu_sanagacha: false,
            activePickerDan: null,
            activePickerGacha: null,
            types: [
                {
                    text: i18n.t("Ишга кириш учун ариза юбориш"),
                    value: 0
                },
                {
                    text: i18n.t("Божхона қиймати дастлабки қарорни олиш"),
                    value: 1
                },
                {
                    text: i18n.t("Божхона органларига мурожаат юбориш"),
                    value: 2
                },
                {
                    text: i18n.t("Тфтн кодни аниқлаш юзасидан ариза бериш"),
                    value: 3
                },
            ],
            filter: {
                date_sanadan: null,
                date_sanagacha: null,
                type: null
            },
            filter_type: null,
            filter_date_sanadan: null,
            filter_date_sanagacha: null,
            search_ariza_raqami: null,
            headers: [
                {
                    text: i18n.t('Ариза рақами'),
                    align: 'start',
                    sortable: true,
                    value: 'app_num',
                },
                {text: i18n.t('Берилган сана'), value: 'created_at'},
                {text: i18n.t('Хизмат номи'), value: 'type_name'},
                {text: i18n.t('Ҳолати'), align: 'center', value: 'status'},
            ],
            apps: [/*
                {
                    app_id: 123,
                    created_at: "11-04-2021",
                    type: 'Ишга кириш учун ариза юбориш',
                    status: 'Тайёрланди',
                },*/
            ],
            filter_apps: [],
            selectedItem: 0,
            items: [
                {text: i18n.t('Профил'), icon: 'mdi-account', link: '/profile'},
                {text: i18n.t('Менинг аризаларим'), icon: 'mdi-history', link: '/applications'},
                {text: i18n.t('Хизматлар'), icon: 'mdi-star', link: '/services'},
            ],
            statuses: [
                {text: i18n.t("Янги"), value: 0},
                {text: i18n.t("Жараёнда"), value: 1},
                {text: i18n.t("Жавоб берилган"), value: 2},
            ],
            appLinks: [
                "/services/vacancy/",
                "/services/decisions/",
                "/services/appeals/",
            ],
            loadingApps:true,

        }
    },
    mounted() {
        if (!this.$auth.check()) this.$router.push('/login');
        this.loadingApps=true;
        this.getServices()


    },
    watch: {
        filter_date_sanadan(val) {
            this.filterServices(val, 'dan');
        },
        filter_date_sanagacha(val) {
            this.filterServices(val, 'gacha');
        },
        filter_type(val) {
            this.filterServices(val, 'type');
        },
        search_ariza_raqami(val) {
            this.filterServices(val)
        },
        menu_sanadan(val) {
            val && setTimeout(() => (this.activePickerDan = 'YEAR'))
        },
        menu_sanagacha(val) {
            val && setTimeout(() => (this.activePickerGacha = 'YEAR'))
        },
    },
    methods: {
        gotoApp(value) {
            this.$router.push(value.link)
        },
        filterServices(val = null, type = 'raqam') {
            switch (type) {
                case 'dan' :
                    if (val &&  val.length > 0) {
                        this.filter_apps = this.apps.filter(obj => {
                            let objdate = (new Date(obj.created_at)).getTime();
                            let parts = val.split("-");
                            let valdate = (new Date(parts[2]+'-' + parts[0]+'-'+parts[1])).getTime();
                            return (valdate <= objdate)
                            //return obj.app_num === val
                        })
                    } else this.filter_apps = this.apps;
                    break;
                case 'gacha' :
                    if (val && val.length > 0) {
                        this.filter_apps = this.apps.filter(obj => {
                            let objdate = (new Date(obj.created_at));

                            let parts = val.split("-");
                            let valdate = (new Date(parts[2]+'-' + parts[0]+'-'+parts[1]));
                            console.log(valdate)
                            console.log(objdate)
                            return (valdate >= objdate)
                            //return obj.app_num === val
                        })
                    } else this.filter_apps = this.apps;
                    break;
                case 'type' :

                    if ( val!==null && val >= 0) {
                        this.filter_apps = this.apps.filter(obj => {
                            return (val===obj.type)
                        })
                    } else this.filter_apps = this.apps;
                    break;
                default://'raqam' :
                    this.filter_apps = this.apps.filter(obj => {
                        return ((obj.app_num).indexOf(val) >= 0)
                        //return obj.app_num === val
                    })
                    break;
            }

        },
        getServices() {
            const _this = this;
            axios.get('/api/v1/auth/services').then(function (response) {
                _this.loadingApps=false;
                if (typeof response.status === 200 || response.data.status === 'success')
                    _this.apps = [];
                response.data.services.forEach((app_item) => {
                    app_item.created_at = (new Date(app_item.created_at)).toLocaleDateString()
                    app_item.type_name = _this.types.filter(obj => {
                        return obj.value === app_item.type
                    })[0].text
                    _this.apps.push(app_item)
                })
                _this.filter_apps = _this.apps;
            })
        },
        getColor(status, type = null) {
            ///Dastlabki qaror
            if (type === 1) {
                if (status === 100) return 'green'
                if (status == 110 || status == 115 || status == 130 || status == 135 || status == 140 || status == 145 || status == 155 || status == 160 || status == 160) return 'orange'; else return 'black'

            }


            if (status == 'Жараёнда') return 'orange'
            else if (status == 'Янги') return 'green'
            else return 'black'
        },
        save_sanadan(date) {
            this.$refs.menu_sanadan.save(date)
        },
        save_sanagacha(date) {
            this.$refs.menu_sanagacha.save(date)
        },
    },

}
</script>
<style>
.mening_arizalarim .v-chip__content {
    font-size: 15px;
    font-weight: 600;}
</style>
