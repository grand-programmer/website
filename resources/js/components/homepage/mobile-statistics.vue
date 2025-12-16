<template>
    <div class="row content" style="min-height: min-content; height: max-content; padding-top: 40px!important; padding-bottom: 40px!important;" :style="[stat_type===3 ? 'min-height: 275vw' : '']">
        <div style="height: max-content;">
            <h3 style="font-size: 18px; color: #007F5F; font-weight: bold; text-transform: uppercase; text-align: center">
                {{ $t('Товарларнинг ташқи савдо') }}
                <span>{{ $t('божхона статистикаси') }}</span>
            </h3>
            <ul class="stat_ul">
                <li v-for="(rejimItem, index) in regimes" :class="['tab', {active: activeTab===index}]" @click="setActiveTab(index)">
                    <a class="stat_a" :class="stat_type===rejimItem.value?'active':''" @click="stat_type=rejimItem.value">
                        {{ rejimItem.title }}
                    </a>
                </li>
<!--                <li>
                    <a class="stat_a" href="https://charts.customs.uz" target="_blank">
                        {{ $t("Барча статистика") }}
                    </a>
                </li>-->
            </ul>
        </div>
        <template class="template_btn" v-for="rejimItem in regimes">
            <div v-if="stat_type===rejimItem.value" :class="stat_type!==rejimItem.value? 'd-none':''" :key="'asdasdasd' + rejimItem.value">
                <div>
                    <div v-if="stat_type!==4" style="width: max-content; float: right" class="py-4">
                        <v-btn style="font-size: 10px" :color="regime===1?'primary':'#F1F5F9'" :style="regime!==1?'color: #39ae69;':'' " small class="ma-0 py-4" @click="regime=1">
                            {{ $t("Импорт") }}
                        </v-btn>
                        <v-btn style="font-size: 10px" :color="regime===2?'primary':'#F1F5F9'" :style="regime!==2?'color: #39ae69;':'' " small class="ma-0 py-4" @click="regime=2">
                            {{ $t("Экспорт") }}
                        </v-btn>
                    </div>
                    <div v-if="stat_type===4" style="width: max-content; float: right" class="py-4">
                        <v-btn style="font-size: 10px" :color="type===1?'primary':'#F1F5F9'" :style="type!==1?'color: #39ae69;':'' " small class="ma-0 py-4" @click="type=1">
                            {{ $t("Озиқ - овқат") }}
                        </v-btn>
                        <v-btn style="font-size: 10px" :color="type===2?'primary':'#F1F5F9'" :style="type!==2?'color: #39ae69;':'' " small class="ma-0 py-4" @click="type=2">
                            {{ $t("Ноозиқ - овқат") }}
                        </v-btn>
                    </div>
                    <div style="display: flex; width: max-content; justify-content: center; padding-top: 5px; gap: 5px">
                        <v-select
                            :items="years"
                            v-model="year"
                            solo
                            dense
                            hide-details
                            style="font-size: 10px; max-width: 120px"
                        ></v-select>
                        <v-select
                            :items="computedMonths"
                            v-model="month"
                            item-value="value"
                            solo
                            dense
                            style="font-size: 10px; max-width: 110px"
                            hide-details
                            :suffix="$t('дан')"
                        ></v-select>
                        <v-select
                            v-if="month!==0"
                            :items="computedMonths"
                            v-model="toMonth"
                            item-value="value"
                            :item-disabled="(item)=>item.value===0"
                            solo
                            dense
                            style="font-size: 10px; max-width: 110px"
                            hide-details
                            clearable
                            :suffix="$t('гача')"
                        ></v-select>
                    </div>
                </div>
                <template v-if="stat_type===1">
                    <stat-products :regime="paramRegime" :month="paramMonth" :year="paramYear" :to-month="paramToMonth" />
                </template>
                <template v-if="stat_type===2">
                    <countries-mobile  :regime="paramRegime" :month="paramMonth" :year="paramYear" :to-month="paramToMonth" />
                </template>
                <template v-if="stat_type===3">
                    <StatesMobile  :regime="paramRegime" :month="paramMonth" :year="paramYear" :to-month="paramToMonth" />
                </template>
                <template v-if="stat_type===4">
                    <MobileOziqOvqat  :regime="paramType" :month="paramMonth" :to-month="paramToMonth" :year="paramYear" />
                </template>
            </div>
        </template>
    </div>
</template>
<script>
import StatProducts from "../../views/frontend/stat/products";
import StatCountries from "../../views/frontend/stat/countries";
import StatStates from "../../views/frontend/stat/states";
import OziqOvqat from "../../views/frontend/stat/oziqOvqat";
import CountriesMobile from "../../views/frontend/stat/countriesMobile.vue";
import StatesMobile from "../../views/frontend/stat/statesMobile.vue";
import MobileOziqOvqat from "../../views/frontend/stat/mobileOziqOvqat.vue";
export default {
    name: 'statistics_mobile',
    data() {
        return {
            activeTab: 0,
            stat_type: 1,
            regimes: [
                {title: this.$t('Товарлар бўйича'), textIm: this.$t('Товарлар импорти тўғрисида маълумот'), textEx: this.$t('Товарлар экспорти тўғрисида маълумот'),  value: 1, rejim: 1},
                {title: this.$t('Давлатлар бўйича'), textIm: this.$t('Давлатлар бўйича товарлар импорти тўғрисида маълумот'),textEx: this.$t('Давлатлар бўйича товарлар экспорти тўғрисида маълумот'), value: 2, rejim: 1},
                {title: this.$t('Ҳудудлар бўйича'), textIm: this.$t('Ҳудудлар бўйича товарлар импорти тўғрисида маълумот'),textEx: this.$t('Ҳудудлар бўйича товарлар экспорти тўғрисида маълумот'), value: 3, rejim: 1},
                {title: this.$t('Истеъмол товарлар импорти'), textIm: this.$t('Истеъмол товарлар импорти тўғрисида маълумот'),textEx: this.$t('Истеъмол товарлар импорти тўғрисида маълумот'), value: 4, rejim: 1},
            ],
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
            month: 1,
            toMonth: null,
            year: ((new Date).getMonth() === 0)?(new Date()).getFullYear() - 1 : (new Date()).getFullYear(),
            regime: 1,
            type: 1,
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
        paramToMonth(){
            return this.toMonth
        },
        paramRegime(){
            return this.regime
        },
        paramType(){
            return this.type
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
            if (this.year >= (new Date).getFullYear() && this.month > (new Date).getMonth()) this.month = 0;
        }
    },
    methods: {
        setActiveTab(index) {
            this.activeTab = index;
        },
    },
    components: {
        CountriesMobile,
        OziqOvqat,
        StatStates,
        StatCountries,
        StatProducts,
        StatesMobile,
        MobileOziqOvqat
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
