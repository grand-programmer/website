<template>
    <div class="section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content">
            <v-container>
                <v-row>
                    <h3 class="primary-color m-2 text-center mb-10 fw-bold">Божхона тўловлари бўйича дастлабки қарорлар
                        реестри</h3>
                </v-row>
                <v-row>

                    <v-data-table
                        :headers="headers"
                        :items="decisions"
                        fixed-header
                        height="50vh"
                        width="50vw"
                        calculate-widths
                        :options.sync="options"
                        :server-items-length="totalDecisions"
                        :loading="loading"
                        class="elevation-1 p-0"
                        :no-data-text="$t('Маълумот топилмади')"
                        :footer-props="{
                            'items-per-page-text': $t('Сахифадаги элементлар сони'),
                            'items-per-page-all-text': $t('Барчаси')
                        }"
                        :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                    >
                        <template v-slot:header.name="{ header }">
                            <span class="primary"> {{ header.text.toUpperCase() }}</span>
                        </template>

                        <template
                            v-slot:header="{ props }"
                        >
                            <tr>
                                <th
                                    role="columnheader" scope="col"
                                    v-for="(header,headerKey) in props.headers"
                                    :key="header.text"
                                    style="position: sticky; top: 50px; background-color:#fff;"

                                >
                                    <template v-if="header.value==='termsNm'">
                                        <v-autocomplete filled dense hide-details :items="inkoterms" clearable
                                                        color="primary" v-model="hfilters.terms"></v-autocomplete>
                                    </template>
                                    <template v-else-if="header.value==='method'">
                                        <v-autocomplete filled dense hide-details :items="usullar" clearable
                                                        color="primary" v-model="hfilters.method"></v-autocomplete>
                                    </template>
                                    <template v-else-if="header.value==='inDecDate'">
                                        <v-menu
                                            ref="menu_decdate"
                                            v-model="menu_dec_date"
                                            :close-on-content-click="false"
                                            :return-value.sync="v_dec_date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }">
                                                <v-text-field color="primary" class="p-2"
                                                              v-model="dec_date"
                                                              prepend-inner-icon="mdi-calendar"
                                                              readonly
                                                              filled dense hide-details
                                                              v-bind="attrs"
                                                              v-on="on"
                                                              clearable
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="hfilters.datepicker"
                                                no-title
                                                range
                                                scrollable
                                                :locale="$i18n.locale ==='en'?'en-US':'ru-RU'"

                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="menu_dec_date = false"
                                                >
                                                    Бекор қилиш
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs['menu_decdate'][0].save(v_dec_date);  dec_date=formatDateRange(hfilters.datepicker)"
                                                >
                                                    Сақлаш
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </template>
                                    <template v-else>
                                        <v-text-field color="primary" :name="header.value"
                                                      v-model="hfilters[header.value]" clearable filled dense
                                                      hide-details
                                                      class="m-2"></v-text-field>
                                    </template>

                                </th><!--
                                <th role="columnheader" scope="col"
                                    aria-label="Dessert (100g serving): Not sorted. Activate to sort ascending."
                                    aria-sort="none"
                                    class="text-start sortable">
                                    <span>Dessert (100g serving)</span>
                                    <i aria-hidden="true" class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme&#45;&#45;light" style="font-size: 18px;"></i>
                                </th>-->


                            </tr>
                        </template>
                        <template v-slot:body="{ items }">
                            <!--                            <v-responsive
                                                            class="overflow-y-auto"
                                                            max-height="calc(90vh - 520px)"
                                                        >-->

                            <tbody>
                            <tr
                                v-for="(item,itemKey) in items"
                                :key="itemKey"
                            >
                                <td v-for="header in headers" @click="openDialog(itemKey)">
                                    <template v-if="header.value==='inDecNum'">
                                        <template v-if="(new Date(item.inDecEndDate)) < (new Date())">
                                            <span style="border-radius: 5px;color: #fff; padding: 5px;
                                                    background-color: red;
                                                    ">{{ item.inDecNum }}
                                            </span>

                                        </template>
                                        <template v-else>
                                            <span style="
                                                        background-color: green;
    border-radius: 5px;
    color: #fff;
    padding: 5px;">
                                                {{ item.inDecNum }}
                                            </span>


                                        </template>

                                    </template>
                                    <template v-else>{{ item[header.value] }}</template>
                                </td>
                            </tr>
                            </tbody>
                        </template>

                    </v-data-table>


                </v-row>
            </v-container>
        </div>
        <v-dialog v-model="mydialog" v-show="typeof decisions[selectedItem] !=='undefined'" max-width="600">
            <v-card elevation="2" >
                <v-toolbar
                    color="primary" style="font-size: 20px; color: #fff;">Дастлабки қарор № {{ typeof decisions[selectedItem] !=='undefined' ? decisions[selectedItem].inDecNum:'' }}</v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Ариза рақами:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].appNum:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Ариза санаси:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].appDate:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">ТИФ ТН коди :</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].hsCode:''  }} - {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].hsName:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Аризачи фамилияси, исми, шарифи :</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].personFio:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Товарни етказиб бериш усули :</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].termsNm:''  }}</v-col>
                        <v-col cols="6" v-show="typeof decisions[selectedItem] !=='undefined' && decisions[selectedItem]['tradeName'] "><span class="fw-bold w-100 d-block">Товар тижорат номи:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].tradeName:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Божхона қийматини аниқлаш усули:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].methodNm:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Кўриб чиққан бошқарма:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].inDecLocationNm:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Қарор кабул қилинган сана:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].inDecDate:''  }}</v-col>
                        <v-col cols="6"><span class="fw-bold w-100 d-block">Қарор амал қилиш муддати:</span> {{ typeof decisions[selectedItem] !=='undefined'?decisions[selectedItem].inDecEndDate:''  }}</v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-content-end">
                    <v-btn color="primary" @click="mydialog=false">Ёпиш</v-btn>
                </v-card-actions>



            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import i18n from "../../../i18n";

export default {
    name: "customvalue",
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
                    text: i18n.t('Хизматлар'),
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Божхона тўловлари бўйича дастлабки қарорлар реестри'),
                    to: '/registries/decisions',
                    disabled: true,
                    exact: true,
                },
            ],
            mydialog:false,
            selectedItem:0,
            hfilters: {
                terms: '',
                method: '',
                hsCode: '',
                tradeName: '',
                inDecNum: '',
                datepicker:[],
                page:1,
                size:10,
            },
            totalDesserts: 0,
            totalDecisions: 0,
            desserts: [],
            loading: true,
            options: {},
            mfilters: [
                {name: "Ариза рақами", value: "appNum"},
                {name: "Етказиб бериш шарти", value: "terms"},
                {name: "ТИФ ТН коди", value: "hsCode"},
                {name: "Товарнинг номи", value: "tradName"},
                {name: "Қарор рақами", value: "inDecNum"},
                {name: "Қарор қабул қилинган сана", value: "StartDate"},
                {name: "Қарор қабул қилинган сана", value: "EndDate"},
                {name: "Аниқлаш усули", value: "method"},
            ],
            mdata: [
                "appNum",
                "appDate",
                "personFio",
                "terms",
                "termsNm",
                "hsCode",
                "hsName",
                "tradeName",
                "method",
                "inDecNum",
                "inDecDate",
                "inDecEndDate",
                "inDecLocationNm",
                "methodNm",
                "statusNm",
                "commentEnded",
            ],
            inkoterms: [
                {text: 'EXW', value: '01'},
                {text: 'FCA', value: '02'},
                {text: 'FAS', value: '03'},
                {text: 'FOB', value: '04'},
                {text: 'CFR', value: '05'},
                {text: 'CIF', value: '06'},
                {text: 'CPT', value: '07'},
                {text: 'CIP', value: '08'},
                {text: 'DAF', value: '09'},
                {text: 'DES', value: '10'},
                {text: 'DEQ', value: '11'},
                {text: 'DDU', value: '12'},
                {text: 'DDP', value: '13'},
                {text: 'DAР', value: '14'},
                {text: 'DAT', value: '15'},
                {text: '---', value: '16'},
            ],
            usullar: [
                {text: '1-усул', value: "01"},
                {text: '2-усул', value: "02"},
                {text: '3-усул', value: "03"},
                {text: '4-усул', value: "04"},
                {text: '5-усул', value: "05"},
                {text: '6.1-усул', value: "6.1"},
                {text: '6.2-усул', value: "6.2"},
                {text: '6.3-усул', value: "6.3"},
                {text: '6.4-усул', value: "6.4"},
                {text: '6.5-усул', value: "6.5"}
            ],

            headers: [
                {
                    text: 'Ариза рақами',
                    align: 'start',
                    sortable: false,
                    value: "appNum",
                },
                {text: 'Етказиб бериш шарти', value: "termsNm", sortable: false, width: '150px'},
                {text: 'ТИФ ТН коди', value: "hsCode", sortable: false},
                {text: 'Товарнинг номи', value: "tradeName", sortable: false, width: "250px"},
                {text: 'Қарор рақами', value: "inDecNum", sortable: false},
                {text: 'Қарор қабул қилинган сана', value: "inDecDate", width: "250px", sortable: false},
                {
                    text: 'Аниқлаш усули', value: "method", align: 'center', sortable: false, width: '120px'
                },
            ],
            dec_date: "",
            menu_dec_date: false,
            datepicker: [],
            decisions: [],
            v_dec_date: []
        }
    },
    watch: {
        options: {
            handler() {
                console.log(this.hfilters.page)
                this.hfilters.page=this.options.page;
                this.hfilters.size=this.options.itemsPerPage;
                this.getDataFromApi()
            },
            deep: true,
        },
        hfilters: {

            handler() {
                this.getDataFromApi()
            },
            deep: true,
        },
    },
    methods: {
        openDialog(item){
            if(typeof this.decisions[item]!=='undefined' && typeof this.decisions[item]['appNum']!=='undefined'){
                this.selectedItem=item;
                this.mydialog=true;

            }
            else {
                this.$toast.error("Хатолик юз берди!")
            }
        },
        formatDateRange(dates) {
            if (dates.length > 1) {
                if (dates[1] < dates[0]) {
                    const date = dates[1];
                    dates[1] = dates[0];
                    dates[0] = date;
                }
            }
            let date1="";
            let date0="";
            if(typeof dates[1] !=='undefined') date1="-- " + dates[1]+" гача"; else date1=""
            if(typeof dates[0] !=='undefined') date0=dates[0]+" дан"; else dates[0]=""
            return date0+date1;
        },
        toggleAll() {
            if (this.selected.length) this.selected = []
            else this.selected = this.desserts.slice()
        },
        changeSort(column) {
            if (this.pagination.sortBy === column) {
                this.pagination.descending = !this.pagination.descending
            } else {
                this.pagination.sortBy = column
                this.pagination.descending = false
            }
        },
        getDataFromApi() {
            this.loading = true;

            this.getReestr();
            this.loading = false

            /*this.fakeApiCall().then(data => {
                this.desserts = data.items
                this.totalDesserts = data.total
                this.loading = false
            })*/
        },
        getReestr() {
            const _this = this;
            setTimeout(async () => {

                await axios.post('/api/v1/ex_api/customprice-registries',_this.hfilters).then(function (res) {
                    _this.decisions = res.data.inDecReestr;
                    _this.totalDecisions = res.data.totalItems;

                })
            })


        },


        /**
         * In a real application this would be a call to fetch() or axios.get()
         */
        fakeApiCall() {
            console.log(this.options);
            return new Promise((resolve, reject) => {
                const {sortBy, sortDesc, page, itemsPerPage} = this.options

                let items = []; //this.getDesserts()
                const total = items.length

                if (sortBy.length === 1 && sortDesc.length === 1) {
                    items = items.sort((a, b) => {
                        const sortA = a[sortBy[0]]
                        const sortB = b[sortBy[0]]

                        if (sortDesc[0]) {
                            if (sortA < sortB) return 1
                            if (sortA > sortB) return -1
                            return 0
                        } else {
                            if (sortA < sortB) return -1
                            if (sortA > sortB) return 1
                            return 0
                        }
                    })
                }

                if (itemsPerPage > 0) {
                    items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                }

                setTimeout(() => {
                    resolve({
                        items,
                        total,
                    })
                }, 1000)
            })
        },
    },
}
</script>

<style>
.v-data-table .v-input {
    font-size: 12px;
}

.v-data-table .v-data-table-header th span {
    color: var(--mycolor);
    font-weight: bold;
}

</style>
