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
                        <v-navigation-drawer permanent class="accent-4 w-100" >
                            <v-list>
<!--                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-img :src="'/public/images/users/'+ $auth.user().id +'.jpg'"></v-img>
                                    </v-list-item-avatar>
                                </v-list-item>-->

                                <v-list-item link >
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">
                                            {{$auth.user().first_name}} {{$auth.user().sur_name}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{$auth.user().email}}</v-list-item-subtitle>
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
                        <h3 class="my-5">Менинг аризаларим</h3>

                        <v-row>
                            <v-col cols="12">
                                <div class="vacancy-filter">
                                    <v-row class=" mt-3">
                                        <v-col cols="2">
                                            <v-text-field
                                                label="Ариза рақами"
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
                                                        v-model="filter.date_sanadan"
                                                        label="Санадан"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    class="m-0"
                                                    :active-picker.sync="activePickerDan"
                                                    v-model="filter.date_sanadan"
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
                                                        v-model="filter.date_sanagacha"
                                                        label="Санагача"
                                                        prepend-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    class="m-0"
                                                    :active-picker.sync="activePickerGacha"
                                                    v-model="filter.date_sanagacha"
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                    min="1950-01-01"
                                                    @change="save_sanagacha"
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-autocomplete
                                                v-model="filter.type"
                                                :items="types"
                                                label="Ариза тури"
                                            ></v-autocomplete>
                                        </v-col>
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
                                        </v-col>
                                    </v-row>
                                </div>

                            </v-col>

                        </v-row>


                        <v-row>
                            <v-col cols="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="apps"
                                    :items-per-page="5"
                                >
                                    <template v-slot:item.status="{ item }">
                                        <v-chip
                                            :color="getColor(item.status)"
                                            dark

                                        >
                                            {{ item.status }}
                                        </v-chip>
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
export default {
    name: 'MyApplicationsList',
    data() {
        return {
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Менинг аризаларим',
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
                    text: "Ишга кириш учун ариза юбориш",
                    value: 0
                },
                {
                    text: "Божхона қиймати дастлабки қарорни олиш",
                    value: 1
                },
                {
                    text: "Божхона органларига мурожаат юбориш",
                    value: 2
                },
            ],
            filter: {
                date_sanadan: null,
                date_sanagacha: null,
                type: null
            },
            headers: [
                {
                    text: 'Ариза рақами',
                    align: 'start',
                    sortable: true,
                    value: 'app_id',
                },
                {text: 'Берилган сана', value: 'created_at'},
                {text: 'Хизмат номи',value: 'type'},
                {text: 'Ҳолати', align: 'center', value: 'status'},
            ],
            apps: [
                {
                    app_id: 123,
                    created_at: "11-04-2021",
                    type: 'Ишга кириш учун ариза юбориш',
                    status: 'Тайёрланди',
                },
                {
                    app_id: 15651,
                    created_at: "25-03-2022",
                    type: 'Божхона қиймати дастлабки қарорни олиш',
                    status: 'Янги',
                },
                {
                    app_id: 16516,
                    created_at: "01-03-2022",
                    type: 'Божхона органларига мурожаат юбориш',
                    status: 'Жараёнда',
                },
                {
                    app_id: 15651,
                    created_at: "25-03-2022",
                    type: 'Божхона қиймати дастлабки қарорни олиш',
                    status: 'Янги',
                },
                {
                    app_id: 16516,
                    created_at: "01-03-2022",
                    type: 'Божхона органларига мурожаат юбориш',
                    status: 'Жараёнда',
                },
                {
                    app_id: 15651,
                    created_at: "25-03-2022",
                    type: 'Божхона қиймати дастлабки қарорни олиш',
                    status: 'Янги',
                },
                {
                    app_id: 16516,
                    created_at: "01-03-2022",
                    type: 'Божхона органларига мурожаат юбориш',
                    status: 'Жараёнда',
                }
            ],
            selectedItem: 0,
            items: [
                { text: 'Профил', icon: 'mdi-account',link:'/profile' },
                { text: 'Менинг аризаларим', icon: 'mdi-history', link:'/applications'},
                { text: 'Хизматлар', icon: 'mdi-star', link:'/services'},
            ],

        }
    },
    mounted() {
        if(!this.$auth.check()) this.$router.push('/login')
    },
    watch: {
        menu_sanadan(val) {
            val && setTimeout(() => (this.activePickerDan = 'YEAR'))
        },
        menu_sanagacha(val) {
            val && setTimeout(() => (this.activePickerGacha = 'YEAR'))
        },
    },
    methods: {
        getColor (status) {
            if (status =='Жараёнда') return 'orange'
            else if (status =='Янги') return 'green'
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
