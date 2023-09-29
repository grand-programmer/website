<template>
    <div class="row content">
        <div class="col-3">
            <div class="stat_menu" style="min-height:80vh">
                <h3> {{ $t("товарлар ташқи савдо божхона статистикаси") }}</h3>
                <ul class="mb-15">
                    <li v-for="rejimItem in regimes">
                        <a :class="stat_type===rejimItem.value?'active':''" href="#" @click="stat_type=rejimItem.value">
                            {{ rejimItem.title }}
                        </a>
                    </li>
                </ul>
                <a class="all_stats d-none" href="https://charts.customs.uz" target="_blank"
                   style="position: absolute; bottom: 100px">
                    {{ $t("Барча статистика") }} <i class="fa fa-arrow-right"></i>

                </a>
            </div>
        </div>
        <template v-for="rejimItem in regimes" >
            <div v-if="stat_type===rejimItem.value" class="col-9" :class="stat_type!==rejimItem.value? 'd-none':''"  :key="'asdasdasd' + rejimItem.value">
                <h3>{{
                        regime === 1 ? rejimItem.textIm :  rejimItem.textEx
                    }}</h3>
                <div class="statfilterRow">
                    <div class="regimeButtons">
                        <v-btn :color="regime===1?'primary':'#F1F5F9'" :style="regime!==1?'color: #39ae69;':'' " small class="ma-0 py-4" @click="regime=1">
                            {{ $t('Импорт') }}</v-btn>
                        <v-btn :color="regime===2?'primary':'#F1F5F9'" :style="regime!==2?'color: #39ae69;':'' " small class="ma-0 py-4" @click="regime=2">
                            {{ $t('Экспорт') }}</v-btn>
                    </div>
                    <div class="date_rangers">


                        <v-select
                            :items="years"
                            v-model="year"
                            solo
                            dense
                            hide-details
                            style="max-width: 100px;margin-top: -5px"
                        ></v-select>
                        <v-select
                            :items="computedMonths"
                            v-model="month"
                            solo
                            dense
                            style="max-width: 200px; margin-top: -5px"
                            class="ml-2"
                            hide-details
                        ></v-select>
                    </div>
                </div>

                <template v-if="stat_type===1"><stat-products :regime="paramRegime" :month="paramMonth" :year="paramYear" /></template>

                <template v-if="stat_type===2 && 1===2"><stat-countries  :regime="paramRegime" :month="paramMonth" :year="paramYear" /></template>
                <template v-if="stat_type===3"><stat-states  :regime="paramRegime" :month="paramMonth" :year="paramYear" /></template>
            </div>
        </template>

    </div>
</template>
<script>
import StatProducts from "../../views/frontend/stat/products";
import StatCountries from "../../views/frontend/stat/countries";
import StatStates from "../../views/frontend/stat/states";


export default {
    data() {
        return {
            stat_type: 1,
            regimes: [
                {title: this.$t('Товарлар бўйича'), textIm: this.$t('Товарлар импорти тўғрисида маълумот'), textEx: this.$t('Товарлар экспорти тўғрисида маълумот'),  value: 1, rejim: 1},
                /*{title: this.$t('Давлатлар бўйича'), textIm: this.$t('Давлатлар бўйича товарлар импорти тўғрисида маълумот'),textEx: this.$t('Давлатлар бўйича товарлар экспорти тўғрисида маълумот'), value: 2, rejim: 1},*/
                {title: this.$t('Ҳудудлар бўйича'), textIm: this.$t('Ҳудудлар бўйича товарлар импорти тўғрисида маълумот'),textEx: this.$t('Ҳудудлар бўйича товарлар экспорти тўғрисида маълумот'), value: 3, rejim: 1},
            ],
            month: 0,
            months: [
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
            year: (new Date()).getFullYear(),
            regime: 1,
            firstStart: 1,
            years: [
                (new Date()).getFullYear() -1, (new Date()).getFullYear()
            ],
        }
    },
    computed: {
        paramYear(){
          return this.year
        },
        paramMonth(){
          return this.month
        },
        paramRegime(){
          return this.regime
        },
        computedMonths() {
            const enabled=[]
            if (this.year === (new Date()).getFullYear()){
                this.months.forEach(monthItem => {
                    if(((new Date()).getMonth()) <= monthItem.value) {
                        if(((new Date()).getMonth()) === monthItem.value) {
                            if ((new Date()).getDate() < 5) {
                                enabled.push({
                                    ...monthItem,
                                    disabled: true
                                })
                            } else enabled.push({...monthItem})
                        }
                        else enabled.push({
                            ...monthItem,
                            disabled: true
                        })
                    }
                    else enabled.push({...monthItem})
                })
            } else return this.months
            return enabled
        }
    },
    watch: {
        stat_type: function (v) {
        },
        year: function (v) {
        },
        month: function (v, old) {
            if (this.month > (new Date).getMonth()) this.month = 0;
        }
    },
    methods: {

    },
    components: {
        StatStates,
        StatCountries,
        StatProducts
    }
}

</script>
<style lang="scss">
body #app .asosiy_korsatkichlari2 .row.content .stat_menu h3{
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}
.asosiy_korsatkichlari2 .row.content .stat_menu ul li
{
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
}
.statfilterRow {
    display: flex;
    justify-content: end;
    margin-top: 30px;
    margin-right: 15px;

.regimeButtons {
    margin-right: 30px;
    font-weight: bold;
}

.date_rangers {
    display: flex;
    align-items: center;

.begin_date {
    margin-right: 5px;
    box-shadow: 0 3px 8px 2px #C9D9E8;
    border-radius: 6px;
    padding: 5px 10px;
    background-color: #F1F5F9;
    color: #39ae69;

i {
    border-left: 1px dashed #ccc;
    margin-left: 5px;
    padding-left: 7px;
}
}

.end_date {
    box-shadow: 0 3px 8px 2px #C9D9E8;
    border-radius: 6px;
    padding: 2px 10px;
    background-color: #F1F5F9;
    color: #39ae69;
    font-size: 17px;
    margin-left: 10px;

i {
    border-left: 1px dashed #ccc;
    margin-left: 5px;
    padding-left: 7px;
}
}
}
}
</style>
