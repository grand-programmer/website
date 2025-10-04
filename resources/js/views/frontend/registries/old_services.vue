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
                    <h3 class="primary-color m-2 text-center mb-10 fw-bold">{{
                            $t("Давлат хизматлари бўйича мурожаатлар реестри")
                        }}</h3>
                </v-row>
                <v-row>

                    <v-data-table
                        :headers="headers"
                        :items="decisions"
                        fixed-header
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
                                    <template v-if="header.value==='user_ext' || header.value==='instime' || header.value==='fabula'">

                                    </template>
                                    <template v-else-if="header.value==='tip_z'">
                                        <v-autocomplete dense hide-details :items="services" clearable
                                                        color="primary" v-model="hfilters.tip_z"></v-autocomplete>
                                    </template>
                                    <template v-else-if="header.value==='status'">
                                        <v-autocomplete dense hide-details :items="statuses" clearable
                                                        color="primary" v-model="hfilters.status"></v-autocomplete>
                                    </template>
                                    <template v-else>
                                        <v-text-field color="primary" :name="header.value"
                                                      v-model="hfilters[header.value]" clearable dense
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
                                <td v-for="header in headers">
                                    <template v-if="header.value==='inDecNum'">
                                        <template v-if="(new Date(item.inDecEndDate)) < (new Date())">
                                            <span style="border-radius: 5px;color: #fff; padding: 5px;
                                                    background-color: red;
                                                    "></span>
                                            {{ item.inDecNum }}
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
                                    <template v-else-if="header.value==='tip_z'">{{getItemByValue(services,item[header.value]).text}}</template>
                                    <template v-else-if="header.value==='status'">{{getItemByValue(statuses,item[header.value]).text}}</template>
                                    <template v-else-if="header.value==='fabula'"><textarea cols="40" rows="4" :value='(item[header.value]).replaceAll("","").replaceAll("","")'></textarea></template>
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
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Божхона тўловлари бўйича дастлабки қарорлар реестри',
                    to: '/registries/decisions',
                    disabled: true,
                    exact: true,
                },
            ],
            mydialog:false,
            selectedItem:0,
            hfilters: {
                method: '',
                hsCode: '',
                datepicker:[],
                page:1,
                tip_z:null,
                size:10,
            },
            services:[
                {text:'Юкларни халқаро йўлларда ташиш китобчасидан фойдаланиш учун рухсатнома  (реестр рақами 0372)', value:'L'},
                {text:'Божхона омборини таъсис этиш учун лицензия (реестр рақами 0373)', value:'C'},
                {text:'Божхона режимида омборхона "Эркин омборхона" таъсис этиш учун лицензия (реестр рақами 0374)', value:'E'},
                {text:'Бож олинмайдиган савдо фаолияти учун лицензия (реестр рақами 0375)', value:'G'},
            ],
            statuses:[
                {text:'Янги', value:0},
                {text:'Жараёнда', value:1},
                {text:'Рухсат берилган', value:2},
                {text:'Рухсат берилмаган', value:3},
                {text:'Бекор қилинган', value:4},
                {text:'Тўлов жараёнида', value:6},
                {text:'Лицензия бериш', value:7},
            ],
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

            headers: [
                {
                    text: i18n.t('Ариза рақами'),
                    align: 'start',
                    sortable: false,
                    value: "num_z",
                    width: '100px'
                },
                {text: 'Давлат хизмати тури', value: "tip_z", sortable: false, width: '300px'},
                {text: 'Ҳолати', value: "status", sortable: false, width: '200px'},
                {text: 'Мурожаат қабул қилинган вақти', value: "instime", sortable: false, width: '150px'},
                {text: 'Ижрочи', value: "user_ext", sortable: false, width: '150px'},
                {text: 'Натижаси', value: "fabula", sortable: false, width: '300px'},

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
        },
        getReestr() {
            const _this = this;
            setTimeout(async () => {

                await axios.post('/api/v1/ex_api/services-registries',_this.hfilters).then(function (res) {
                    _this.decisions = res.data.data;
                     if(typeof res.data.data[0] !=='undefined') _this.totalDecisions =parseInt(res.data.data[0].mycount); else _this.totalDecisions =0;

                })
            })


        },
        getItemByValue(items,value) {
            let returnValue;
            items.forEach(function (service) {
                if (service.value == value) {
                    returnValue = service;
                    return true;
                }

            })
            if (returnValue) {
                //console.log(returnCountry)
                return returnValue;
            }
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
    font-size: 15px;
}

</style>
