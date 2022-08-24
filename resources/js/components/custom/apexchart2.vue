<template>
    <div v-show="loaded">
        <apex-charts type="line" height="600" width="90%" :options="chartOptions" :series="mydata.series"></apex-charts>
    </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts';

const months = [
    "Январ",
    "Феврал",
    "Март",
    "Апрел",
    "Май",
    "Июн",
    "Июл",
    "Август",
    "Сентябр",
    "Октябр",
    "Ноябр",
    "Декабр",
];

function arrow(num1, num2) {
    ///console.log(num1)
    const mclass = (num1 - num2 > 0) ? "mdi-chevron-up up" : "mdi-chevron-down down";
    const lclass = (num1 - num2 > 0) ? "up" : "down";
    const plus=(num1 - num2 > 0) ? "+" : ""
    const percent = plus + ((num1 - num2) / num2 * 100).toFixed(1) + "%"
    return {
        class: mclass,
        percent: percent,
        lclass
    }
}

function round(num, decimals) {
    var n = Math.pow(10, decimals);
    return Math.round((n * num).toFixed(decimals)) / n;
}

export default {
    name: "apexchart2",
    components: {
        ApexCharts,
    },
    props: {
        mydata: {
            series: [],
            month: [
                "Январ",
                "Феврал",
                "Март",
                "Апрел",
                "Май",
                "Июн",
                "Июл",
                "Август",
                "Сентябр",
                "Октябр",
                "Ноябр",
                "Декабр",
            ]
        },
    },
    data() {
        return {
            loaded: true,
            series: [
                {
                    "name": "High - 2013",
                    "data": [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    "name": "Low - 2013",
                    "data": [
                        12,
                        11,
                        14,
                        18,
                        17,
                        13,
                        13
                    ]
                }
            ],
            chartOptions: {
                "chart": {
                    "height": 50,
                    "type": "line",
                    redrawOnWindowResize: true,
                    width: 50,
                    "dropShadow": {
                        "enabled": true,
                        "color": "#000",
                        "top": 18,
                        "left": 7,
                        "blur": 10,
                        "opacity": 0.2
                    },
                    "toolbar": {
                        "show": false
                    }
                },
                "colors": [
                    "#77B6EA",
                    "#545454"
                ],
                "dataLabels": {
                    "enabled": true,
                    formatter: function (value, {seriesIndex, dataPointIndex, w}) {
                        return value.toFixed(1) + ' млн.$';
                        //w.config.series[seriesIndex].name + ":  " + value
                    },
                    offsetY: -15,
                    //offsetX:20,
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff'

                    },
                },
                "stroke": {
                    "curve": "smooth",
                    width: 8,
                },
                "grid": {
                    "borderColor": "#e7e7e7",
                    "row": {
                        "colors": [
                            "#f3f3f3",
                            "transparent"
                        ],
                        "opacity": 0
                    },
                    padding: {
                        left: 50,
                        right: 60
                    },
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                "markers": {
                    size: [8, 4],
                    shape: 'circle',
                    strokeColors: ["#939393", "#0f5247"]

                },
                xaxis: {
                    categories: [
                        "Январ",
                        "Феврал",
                        "Март",
                        "Апрел",
                        "Май",
                        "Июн",
                        "Июл",
                        "Август",
                        "Сентябр",
                        "Октябр",
                        "Ноябр",
                        "Декабр",
                    ],
                    //overwriteCategories:[],
                    type: 'category'
                    /*                    "title": {
                                            "text": "Month"
                                        }*/
                },
                "yaxis": {
                    labels: {
                        show: false
                    }
                },
                lines: {
                    show: false
                },
                labels: {
                    show: false
                },
                "legend": {
                    "position": "bottom",
                    "horizontalAlign": "left",
                    "floating": false,
                    itemMargin: {
                        horizontal: 10, vertical: 20
                    }

                    //height:50
                    ///"offsetX": 5
                },
                tooltip: {
                    custom: function ({series, seriesIndex, dataPointIndex, w}) {
                        //console.log(w.globals)
                        /*return '<div class="arrow_box">' +
                           '<span> 11' + series[seriesIndex][dataPointIndex] + '</span>' +
                           '</div>'*/
                        return '<div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">' + months[w.globals.labels[dataPointIndex]-1] + ' <span class="icon ' + arrow(round(w.globals.series[0][dataPointIndex], 1), round(w.globals.series[1][dataPointIndex], 1))['lclass'] + '"> <i class="v-icon notranslate ' + arrow(round(w.globals.series[0][dataPointIndex], 1), round(w.globals.series[1][dataPointIndex], 1))['class'] + '  mdi"></i> ' + arrow(round(w.globals.series[0][dataPointIndex], 1), round(w.globals.series[1][dataPointIndex], 1))['percent'] + '</span></div>' +
                            '<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">' +
                            '<span class="apexcharts-tooltip-marker" style="background-color: rgb(119, 182, 234);"></span>' +
                            '<div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">' +
                            '<div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">' + w.globals.seriesNames[0] + ': </span><span class="apexcharts-tooltip-text-y-value">' + round(w.globals.series[0][dataPointIndex], 1) + ' млн.$</span></div><div class="apexcharts-tooltip-goals-group">' +
                            '<span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 2; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(84, 84, 84);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group">' +
                            '<span class="apexcharts-tooltip-text-y-label">' + w.globals.seriesNames[1] + ': </span><span class="apexcharts-tooltip-text-y-value">' + round(w.globals.series[1][dataPointIndex], 1) + ' млн.$</span></div>' +
                            '<div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div>';
                    }
                }


            },

        }
    },
    watch: {
        'mydata'(val) {
            //console.log('update2')
            ///console.log(val)
            //this.chartOptions[series]=val['series'];
            this.chartOptions.xaxis.categories = this.mydata['month'];
            this.chartOptions.xaxis.overwriteCategories = this.mydata['month'];
        }
    },
    mounted() {
        const _this = this;
        //console.log("this.mydata")
        //console.log(this.mydata)
        this.chartOptions.xaxis.categories = this.mydata.month;
        this.chartOptions.xaxis.overwriteCategories = this.mydata['month'];
    },
    methods: {
        updateChart() {
            //console.log('update')
            this.chartOptions.xaxis.categories = this.mydata['month'];
            this.chartOptions.xaxis.overwriteCategories = this.mydata['month'];
        }
    }
}
</script>

<style lang="scss">
.apexcharts-tooltip-title span{
    color:var(--mycolor);
     i{
        color:var(--mycolor);
         span &{

         }


    }
    &.down{
        color: #a15825;

    }

}

</style>
