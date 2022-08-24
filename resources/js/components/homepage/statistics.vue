<template>
    <div class="row content">
        <div class="col-3">
            <div class="stat_menu" style="min-height:80vh">
                <h3> {{ $t("Божхона статистикаси") }}</h3>
                <ul class="mb-15">
                    <li><a :class="stat_type==5?'active':''" href="#" @click="stat_type=5">
                        {{ $t("Товар ва маҳсулотлар "+ getRejimByCode(rejim.tovarimex).text + "и") }}</a></li>
                    <li><a :class="stat_type==4?'active':''" href="#" @click="stat_type=4">
                        {{
                            ("Ўзбекистон Республикасига "+ getRejimByCode(rejim.davlatimex).text + " товарлари давлатлар кесимида")
                        }}</a></li>


                    <li><a :class="(stat_type==3)?'active':''" href="#" @click="stat_type=3">
                        {{
                            $t("Ўзбекистон Республикасидан товарлар " + getRejimByCode(rejim.oyimex).text + "и ойлар кесимида")}}</a></li>
                    <!--                    <li><a :class="(stat_type===6)?'active':''" href="#" @click="stat_type=6">Ҳудудий корхоналар томонидан импорт қилинган товарлар</a></li>-->


                    <!--                                <li><a :class="(stat_type==4)?'active':''" href="#" @click="stat_type=4">Ўзбекистон
                                                        Республикасида товарлар импорти ва экспорти</a></li>
                                                    <li><a :class="(stat_type==5)?'active':''" href="#" @click="stat_type=5">Ўзбекистон
                                                        Республикасида товарлар импорти ва экспорти</a></li>-->
                </ul>
                <a class="all_stats d-none" href="https://charts.customs.uz" target="_blank"
                   style="position: absolute; bottom: 100px">
                    {{ $t("Барча статистика") }} <i class="fa fa-arrow-right"></i>

                </a>
            </div>
        </div>
        <div class="col-9" id="reyt" v-if="stat_type==1">
            <h3>{{ $t("Ўзбекистон Республикаси товарлар импорти ва экспорти ҳудудлар кесимида") }}</h3>
            <div id="columnchart1" ref="clusteredColumn" class="chart"></div>
            <div class="filter row">
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto"
                        :label="$t('Ойлар бўйича')"
                        v-model="month"
                        :items="months"
                        auto-select-first
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto1"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>
            </div>

        </div>
        <div class="col-9" v-if="stat_type==2">
            <h3>{{ $t("Ўзбекистон Республикаси чегарасидан ўтаётган автомобилларнинг сони") }} </h3>
            <div id="columnchart2" class="chart"></div>
            <div class="filter row">
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto"
                        :label="$t('Ойлар бўйича')"
                        v-model="month"
                        :items="months"
                        auto-select-first
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto1"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>
            </div>

        </div>
        <div class="col-9" v-if="stat_type==3">
            <h3>{{ $t("Ўзбекистон Республикасидан товарлар " + getRejimByCode(rejim.oyimex).text + "и ойлар кесимида") }}</h3>
            <div id="columnchart3" class="chart" v-show="apexchartshow">

                <apexchart2 :mydata="apexchartdata"></apexchart2>

            </div>
            <div class="filter row"><!--
                                <v-col cols="3">
                                    <v-autocomplete
                                        ref="auto"
                                        :label="$t('Ойлар бўйича')"
                                        v-model="month"
                                        :items="months"
                                    ></v-autocomplete>
                                </v-col>-->

                <v-col cols="3">
                    <v-autocomplete
                        ref="oyimex0"
                        v-model="rejim.oyimex"
                        :items="[
                                {text:$t('Импорт'),value:1},
                                {text:$t('Экспорт'),value:2}
                            ]"
                    ></v-autocomplete>
                </v-col>

<!--                <v-col cols="3">
                    <v-autocomplete
                        ref="oyimex1"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>-->
            </div>

        </div>
        <div class="col-9" v-if="stat_type==4">
            <h3>{{ $t("Ўзбекистон Республикасига " + getRejimByCode(rejim.davlatimex).text + " товарлари давлатлар кесимида") }}</h3>
            <div id="columnchart4" style="min-height: 65vh; float: left; width: 70%" class="chart mb-10"></div>
            <div id="columnchart4-1" v-if="stat_type===4" style="min-height: 65vh; width: 30%; float: right;"
                 class="chart mb-10"></div>
            <div class="filter row">
                <v-col cols="3">
                    <v-autocomplete
                        ref="davimex0"
                        v-model="rejim.davlatimex"
                        :items="[
                                {text:$t('Импорт'),value:1},
                                {text:$t('Экспорт'),value:2}
                            ]"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="davimex1"
                        :label="$t('Ойлар бўйича')"
                        v-model="month"
                        :items="months"
                    ></v-autocomplete>
                </v-col>
<!--                <v-col cols="3">
                    <v-autocomplete
                        ref="davimex2"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>-->
            </div>

        </div>
        <div class="col-9" v-if="stat_type==5">
            <h3>{{ $t("Ўзбекистон Республикасидан товарлар " + getRejimByCode(rejim.tovarimex).text + "и") }}</h3>
            <div id="columnchart5" style="min-height: 65vh;" class="chart mb-10">

                <mychart :items="mychartdata">

                </mychart>


            </div>
            <div class="filter row">

                <v-col cols="3">
                    <v-autocomplete
                        ref="tovimex0"
                        v-model="rejim.tovarimex"
                        :items="[
                                {text:$t('Импорт'),value:1},
                                {text:$t('Экспорт'),value:2}
                            ]"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="tovimex1"
                        :label="$t('Ойлар бўйича')"
                        v-model="month"
                        :items="months"
                    ></v-autocomplete>
                </v-col>
<!--                <v-col cols="3">
                    <v-autocomplete
                        ref="tovimex2"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>-->
            </div>

        </div>
        <div class="col-9" v-if="stat_type==6">
            <h3>{{ $t("Ҳудудий корхоналар томонидан импорт қилинган товарлар") }}</h3>
            <div id="columnchart6" style="min-height: 65vh;" class="chart">

                <mychart2>

                </mychart2>


            </div>
            <div class="filter row">
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto"
                        v-model="rejim"
                        :items="[
                                {text:$t('Импорт'),value:1},
                                {text:$t('Экспорт'),value:2}
                            ]"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto"
                        :label="$t('Ойлар бўйича')"
                        v-model="month"
                        :items="months"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                    <v-autocomplete
                        ref="auto1"
                        :label="$t('Йиллар бўйича')"
                        v-model="year"
                        :items="years"
                        hide-selected
                        auto-select-first
                    ></v-autocomplete>
                </v-col>
            </div>

        </div>

        <index_scripts ref="scripts"></index_scripts>

    </div>
</template>
<script>
import mychart from '../custom/mychart1.vue'
import mychart2 from '../custom/mychart2.vue'
import apexchart2 from '../custom/apexchart2.vue'


export default {
    data() {
        return {
            stat_type: 5,
            rejim: {
                oyimex:1,
                davlatimex:1,
                tovarimex:1,
            },
            month: 0,
            months:[],
            mymonths: [
                {
                    text: this.$t('Барчаси'),
                    value: 0
                }, {
                    text: this.$t('Январ'),
                    value: 1
                },
                {
                    text: this.$t('Феврал'),
                    value: 2
                },
                {
                    text: this.$t('Март'),
                    value: 3
                },
                {
                    text: this.$t('Апрел'),
                    value: 4
                },
                {
                    text: this.$t('Май'),
                    value: 5
                },
                {
                    text: this.$t('Июн'),
                    value: 6
                },
                {
                    text: this.$t('Июл'),
                    value: 7
                },
                {
                    text: this.$t('Август'),
                    value: 8
                },
                {
                    text: this.$t('Сентябр'),
                    value: 9
                },
                {
                    text: this.$t('Октябр'),
                    value: 10
                },
                {
                    text: this.$t('Ноябр'),
                    value: 11
                },
                {
                    text: this.$t('Декабр'),
                    value: 12
                }
            ],
            year: 2022,
            firstStart: 1,
            mychartdata: [],
            years: [
                2020, 2021, 2022
            ],
            apexchartshow: false,
            apexchartdata: {
                series: [],
                month: [],

            }
        }
    },
    watch: {
        stat_type: function (v) {
            this.$refs.scripts.dispose()
            if (this.$refs.scripts.route2 !== null) this.$refs.scripts.route2.dispose();

            if (v === 3) {
                //setTimeout(() => this.$refs.scripts.createRootMultipleValue(), 100);
                setTimeout(() => this.multipleValue(true), 100)
            }
            if (v === 4) {
                setTimeout(() => this.$refs.scripts.createRootColumnChart4(), 100);
                setTimeout(() => this.columnChart4(true), 100)
                setTimeout(() => this.$refs.scripts.createRootColumnChart4_1(), 100);
                setTimeout(() => this.columnChart4_1(true), 100)
            }
            if (v === 5) {

                this.columnChart5();


                /*                setTimeout(() => this.$refs.scripts.createRootColumnChart5(), 100);
                                setTimeout(() => this.columnChart5(true), 100)*/
            }
        },
        year: function (v) {
            if (this.year === (new Date).getYear()) {
                if (this.month >= (new Date).getMonth()) this.month = 0;
                this.months.map(function (item) {
                    if (item.value >= (new Date).getMonth()) item.disabled = true;
                    return item;
                })
            } else this.months.map(function (item) {
                item.disabled = false;
                return item;
            })
            if (this.stat_type === 5) {
                this.columnChart5();
            }
            if (this.stat_type === 4) {
                this.$refs.scripts.month=this.month;
                this.$refs.scripts.year=this.year;
                this.$refs.scripts.rejim=this.rejim;
                setTimeout(() => this.$refs.scripts.createRootColumnChart4(), 100);
                setTimeout(() => this.columnChart4(true), 100)
                setTimeout(() => this.$refs.scripts.createRootColumnChart4_1(), 100);
                setTimeout(() => this.columnChart4_1(true), 100)
            }
            if (this.stat_type === 3) {
                this.multipleValue(true);
            }
        },
        month: function (v, old) {
            if (this.month > (new Date).getMonth()) this.month = 0;
            if (this.stat_type === 5) {
                this.columnChart5();
            }
            if (this.stat_type === 4) {
                this.$refs.scripts.month=this.month;
                this.$refs.scripts.year=this.year;
                this.$refs.scripts.rejim=this.rejim;
                setTimeout(() => this.$refs.scripts.createRootColumnChart4(), 100);
                setTimeout(() => this.columnChart4(true), 100)
                setTimeout(() => this.$refs.scripts.createRootColumnChart4_1(), 100);
                setTimeout(() => this.columnChart4_1(true), 100)
            }
            if (this.stat_type === 3) {
                this.multipleValue(true);
            }
        },
        'rejim.tovarimex'(val){
            this.columnChart5();
        },
        'rejim.davlatimex'(val){
            this.$refs.scripts.month=this.month;
            this.$refs.scripts.year=this.year;
            this.$refs.scripts.rejim=val;
            setTimeout(() => this.$refs.scripts.createRootColumnChart4(), 100);
            setTimeout(() => this.columnChart4(true), 100)
            setTimeout(() => this.$refs.scripts.createRootColumnChart4_1(), 100);
            setTimeout(() => this.columnChart4_1(true), 100)
        },
        'rejim.oyimex'(val){
            setTimeout(() => this.multipleValue(true), 100)
        }
    },
    methods: {
        created() {
            if (this.year === 2022) this.months.map(function (item) {
                if (item.value > 2) item.disabled = true;
                return item;
            })
            // hide the overlay when everything has loaded
            // you could choose some other event, e.g. if you're loading
            // data asynchronously, you could wait until that process returns
            //console.log('asdasd');
            //this.clusteredColumn();

        },

        clusteredColumn(change = false) {

            this.$refs.scripts.year = this.year;
            this.$refs.scripts.month = this.month;
            setTimeout(() => {
                this.$refs.scripts.clusteredColumn()
            }, 50);
        },
        pieChart(change = false) {
            if (change) this.$refs.scripts.data = [
                {
                    "country": "Қорақалпоғистон Респ.",
                    "import": 89,
                    "export": 25
                }, {
                    "country": "Хоразм вилояти",
                    "import": 54,
                    "export": 39
                }, {
                    "country": "Бухоро вилояти",
                    "import": 57,
                    "export": 53
                }, {
                    "country": "Навоий вилояти",
                    "import": 50,
                    "export": 28
                }, {
                    "country": "Самарқанд вилояти",
                    "import": 63,
                    "export": 75
                }, {
                    "country": "Сурхондарё вилояти",
                    "import": 90,
                    "export": 57
                }
            ];
            setTimeout(() => {
                this.$refs.scripts.pieChart()
            }, 50);
        },
        multipleValue(change = false) {
            const _this = this
            setTimeout(async () => {
                await axios.get('/api/v1/stat?name=oyimex&rejim='+_this.rejim.oyimex + '&month=' + _this.month + '&year=' + _this.year).then(function (res) {

                   // console.log(res.data);


                    if (typeof res.data.data != 'undefined') {

                        const column1 = getCol(res.data.data, 'column1')
                        const column2 = getCol(res.data.data, 'column2')
                        const month = getCol(res.data.data, 'm')

                        const series = [
                            {name: _this.year, data: column2},
                            {name: _this.year - 1, data: column1},
                        ];

                        _this.apexchartdata.series = series;
                        _this.apexchartdata= {
                            series:series,
                            month
                        };
                        //console.log(_this.apexchartdata)
                        _this.apexchartshow = true;


                        function getCol(matrix, col) {
                            var column = [];
                            for (var i = 0; i < matrix.length; i++) {
                                column.push(matrix[i][col]);
                            }
                            return column;
                        }
                    }
                })
            })
        },
        columnChart4(change = false) {
            setTimeout(() => {
                this.$refs.scripts.columnChart4()
            }, 50);

        },
        columnChart4_1(change = false) {
            setTimeout(() => {
                this.$refs.scripts.columnChart4_1()
            }, 50);

        },
        async columnChart5() {
            const _this = this;
            await axios.get("/api/v1/stat?name=tovarimex&month=" + this.month + "&year=" + this.year + "&rejim=" + this.rejim.tovarimex).then(function (res) {
                //console.log(res.data)
                _this.mychartdata = res.data.data
            })
            //return this.mychartdata
            //this.$refs.scripts.columnChart5()

        },
        getRejimByCode(code){
            if(code===1) return {
                text:"импорт",
                value:1
            }
            else return {
                text:"экспорт",
                value:2
            }
            return null;
        }
    },
    created() {
const _this=this
        this.mymonths.map(function (item,key) {
            //console.log(key)
            if (item.value <= parseInt((new Date).getMonth()))
            _this.months.push(item);

                //return item; else if(_this.mymonths.indexOf(key)) _this.months.splice(key,1)
        })

        this.columnChart5();
    },
    components: {
        mychart,
        mychart2,
        apexchart2,

    }
}

</script>
