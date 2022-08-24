<template>

</template>
<script>
//import * as anychartBase from "public/js/anychart-base.min.js";
var ie_data = {
    'UZ-AN': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-BU': [
        {
            'year': 'Январ',
            'import': 14724.363,
            'export': 29788.15,
        },
        {
            'year': 'Феврал',
            'import': 28803.661,
            'export': 55474.657,
        },
        {
            'year': 'Март',
            'import': 43875.097,
            'export': 57781.047,
        },
        {
            'year': 'Апрел',
            'import': 26921.188,
            'export': 51676.148,
        },
        {
            'year': 'Май',
            'import': 25031.164,
            'export': 44310.58,
        },
        {
            'year': 'Июн',
            'import': 27476.798,
            'export': 49359.535,
        },
        {
            'year': 'Июл',
            'import': 12848.668,
            'export': 52647.414,
        },
        {
            'year': 'Август',
            'import': 13068.653,
            'export': 69274.848,
        },
        {
            'year': 'Сентябр',
            'import': 4203.167,
            'export': 34611.092,
        },
    ],
    'UZ-FA': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-JI': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-NG': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-NW': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-QA': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-QR': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-SA': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-SI': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-SU': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-TK': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-TO': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],
    'UZ-XO': [
        {
            'year': 'Январ',
            'import': 49520.22,
            'export': 88608.657,
        },
        {
            'year': 'Феврал',
            'import': 65698.464,
            'export': 114903.124,
        },
        {
            'year': 'Март',
            'import': 74138.331,
            'export': 169960.323,
        },
        {
            'year': 'Апрел',
            'import': 64403.965,
            'export': 218772.876,
        },
        {
            'year': 'Май',
            'import': 69432.902,
            'export': 137175.21,
        },
        {
            'year': 'Июн',
            'import': 79963.552,
            'export': 166704.558,
        },
        {
            'year': 'Июл',
            'import': 72881.565,
            'export': 240397.471,
        },
        {
            'year': 'Август',
            'import': 68757.196,
            'export': 220301.11,
        },
        {
            'year': 'Сентябр',
            'import': 16308.593,
            'export': 47762.869,
        },
    ],


};
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import ApexCharts from 'apexcharts';


import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_data_countries2 from "@amcharts/amcharts4-geodata/data/countries2";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const regions = {
    3: 'Андижон вилояти',
    14: 'Наманган вилояти',
    6: 'Бухоро вилояти',
    26: 'Тошкент шаҳри',
    30: 'Фарғона вилояти',
    27: 'Тошкент вилояти',
    10: 'Қашқадарё вилояти',
    8: 'Жиззах вилояти',
    18: 'Самаркандская обл',
    12: 'Навоийская обл',
    24: 'Сирдарё вилояти',
    33: 'Хоразм вилояти',
    22: 'Сурхондарё вилояти',
    35: 'Қорақалпоғистон Респ.',
};

export default {
    name: 'IndexScripts',
    data() {
        return {
            month: 0,
            year: 2022,
            rejim:1,
            //mychartdata:[],


            importExportData: [
                {
                    "country": "Қорақалпоғистон Респ.",
                    "import": 8900,
                    "export": 25000
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
                }, {
                    "country": "Қашқадарё вилояти",
                    "import": 98,
                    "export": 99
                }, {
                    "country": "Сирдарё вилояти",
                    "import": 63,
                    "export": 50
                }, {
                    "country": "Жиззах вилояти",
                    "import": 53,
                    "export": 15
                }, {
                    "country": "Тошкент вилояти",
                    "import": 74,
                    "export": 89
                }, {
                    "country": "Андижон вилояти",
                    "import": 67,
                    "export": 60
                }, {
                    "country": "Фарғона вилояти",
                    "import": 75,
                    "export": 76
                }, {
                    "country": "Наманган вилояти",
                    "import": 73,
                    "export": 78
                }, {
                    "country": "Тошкент шаҳри",
                    "import": 89,
                    "export": 102
                },],
            route: null,
            route2: null,
            //routeColumnChart: null
        }
    },
    mounted() {

        //this.createRootColumnChart5();
        //this.columnChart5();*/
    },
    methods: {
        dispose() {
            if (this.route !== null)
                this.route.dispose()
        },
        createRootColumnChart() {
            var importExportData = [];
            let importExport = [];


            ///this.importExportData = importExport;
            //series.data.setAll(importExport);


            /* await axios.get("api/v1/stat?rejim[0]=ИМ40&year=2022&rejim[1]=ЭК10")
                 .then(function (response) {
                     if (response.data) {
                         let data = response.data;

                         //console.log(data)

                         Object.keys(data).map(function (item, index) {
                             let itemdata = {};
                             Object.keys(data[item]).map(function (imex, index) {
                                 if (data[item][imex].rejim == "ИМ")
                                     itemdata.import = data[item][imex].sumg38;
                                 else
                                     itemdata.export = data[item][imex].sumg38;
                                 itemdata.country = data[item][imex].loc;
                             })
                             importExport.push(itemdata)
                         });
                         console.log(this);

                        // const importExportData = importExport;
                         //console.log(importExportData);

                     }

                 })
                 .catch(error => {
                     this.errorMessage = error.message;
                     console.error("There was an error!", error);
                 });*/

            // this.importExportData = importExport;
            if (this.route != null) this.route.dispose()
            this.route = am5.Root.new('columnchart1');
            this.route._logo = false;

        },
        createRootPieChart() {
            //console.log('sad')
            if (this.route != null) this.route.dispose()
            this.route = am5.Root.new('columnchart2');
            this.route._logo = false;
        },
        createRootMultipleValue() {
/*            if (this.route != null) this.route.dispose()
            this.route = am5.Root.new('columnchart3');
            this.route._logo = false;*/
        },
        createRootColumnChart4() {
            if (this.route !== null)
                this.route.dispose()
            this.route = am5.Root.new('columnchart4');
            this.route._logo = false;
        },

        createRootColumnChart4_1() {
            if (this.route2 !== null)
                this.route2.dispose()
            this.route2 = am5.Root.new('columnchart4-1');
            this.route2._logo = false;
        },
        async clusteredColumn() {
            //clusteredColumn('columnchart1', this.importExportData);
            let d = this.route; //am5.Root.new('columnchart1');
            //this.route=d;
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            d.setThemes([
                am5themes_Animated.new(d)
            ]);
            d.container.children.clear();

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            let chart = d.container.children.push(am5xy.XYChart.new(d, {
                // panX: true,
                // panY: true,
                //wheelX: "panX",
                /// wheelY: "zoomX",
                layout: d.verticalLayout
            }));


            // Add legend
            // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            let legend = chart.children.push(
                am5.Legend.new(d, {
                    // centerX: am5.p50,
                    x: 0,
                    paddingTop: 40
                })
            );

            let data = this.importExportData;


            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

            var xRenderer = am5xy.AxisRendererX.new(d, {minGridDistance: 30});
            xRenderer.labels.template.setAll({
                rotation: -90,
                centerY: am5.p50,
                centerX: am5.p100,
                paddingRight: 15
            });

            let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(d, {
                categoryField: "region",
                /*        renderer: am5xy.AxisRendererX.new(root, {
                            cellStartLocation: 0.1,
                            cellEndLocation: 0.9,
                        }),    */
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(d, {})
            }));
            //xAxis.renderer.labels.template.rotation = -90;
            //label.rotation = -90;
            //xAxis.renderer.labels.template.rotation = 360;
            let importExport = [];
            await am5.net.load("/api/v1/stat?name=hududimex&month=" + this.month + "&year=" + this.year).then(function (result) {
                // This gets executed when data finishes loading
                // ... do something
                const m = am5.JSONParser.parse(result.response);
                //const m = JSON.parse(result.response);
                //data = m.data;
                data = JSON.parse(JSON.stringify(m.data));
                data.sort((a, b) => (a.import < b.import) ? 1 : -1)
                xAxis.data.setAll(data);

            }).catch(function (result) {
                // This gets executed if there was an error loading URL
                // ... handle error
                console.log("Error loading " + result);
            });
            /* axios
                 .get('api/v1/stat?name=hududimex&year=2022')
                 .then(response => (data = response))
             const finalData = JSON.parse(JSON.stringify(data));


             console.log(JSON.parse(JSON.stringify(data)));*/
            //xAxis.data.setAll(finalData );
            /// xAxis.data.setAll(data);

            let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(d, {
                renderer: am5xy.AxisRendererY.new(d, {})
            }));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            function makeSeries(name, fieldName) {
                let series = chart.series.push(am5xy.ColumnSeries.new(d, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: fieldName,
                    categoryXField: "region"
                }));

                series.columns.template.setAll({
                    tooltipText: "{name} - {valueY}, {categoryX}",
                    width: am5.percent(90),
                    tooltipY: 0,
                    cornerRadiusTL: 5,
                    cornerRadiusTR: 5
                });

                series.data.setAll(data);

                // Make stuff animate on load
                // https://www.amcharts.com/docs/v5/concepts/animations/
                series.appear();

                series.bullets.push(function () {
                    return am5.Bullet.new(d, {
                        locationY: 0,
                        sprite: am5.Label.new(d, {
                            text: "{valueY}",
                            fill: d.interfaceColors.get("alternativeText"),
                            centerY: 0,
                            centerX: am5.p50,
                            populateText: true
                        })
                    });
                });

                legend.data.push(series);
            }

            makeSeries("Import", "import");
            makeSeries("Export", "export");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 1000);


        },
        async pieChart() {
            let root = this.route
// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            root.container.children.clear();

// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
// start and end angle must be set both for chart and series
            let chart = root.container.children.push(am5percent.PieChart.new(root, {
                startAngle: 180,
                endAngle: 360,
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            }));

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
// start and end angle must be set both for chart and series
            let series = chart.series.push(am5percent.PieSeries.new(root, {
                startAngle: 180,
                endAngle: 360,
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            }));

            series.states.create("hidden", {
                startAngle: 180,
                endAngle: 180
            });

            series.slices.template.setAll({
                cornerRadius: 5
            });

            series.ticks.template.setAll({
                forceHidden: true
            });

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

            /*
                        await am5.net.load("/api/v1/stat?name=avto&month="+this.month+"&year="+this.year).then(function (result) {
                            // This gets executed when data finishes loading
                            // ... do something
                            const m = am5.JSONParser.parse(result.response);
                            //const m = JSON.parse(result.response);
                            //data = m.data;
                            data=JSON.parse(JSON.stringify(m.data));
                            //data.sort((a, b) => (a.import < b.import) ? 1 : -1)
                            xAxis.data.setAll(data);

                        }).catch(function (result) {
                            // This gets executed if there was an error loading URL
                            // ... handle error
                            console.log("Error loading " + result);
                        });
            */


            series.data.setAll([
                {value: 10, category: "Енгил"},
                {value: 9, category: "Оғир"},
                {value: 6, category: "Автобус"},

            ]);

            series.appear(1000, 100);
        },
        async multipleValue() {
            let root = this.route


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            root.container.children.clear();
            //   root.dateFormatter.set("dateFormat", "MM");

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    // focusable: true,
                    panX: true,
                    panY: true,
                    wheelX: false,
                    wheelY: false,
                    paddingTop: 50,
                    paddingBottom: 100,
                    // layout: root.verticalLayout
                })
            );


            // let easing = am5.ease.linear;
            chart.get("colors").set("step", 3);

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            let xAxis = chart.xAxes.push(
                am5xy.DateAxis.new(root, {
                    markUnitChange: true,
                    //categoryXField:"m",
/*                    gridIntervals: [
                        {timeUnit: "month", count: 1}
                    ],*/

                    baseInterval: {timeUnit: "month", count: 1},

                    renderer: am5xy.AxisRendererX.new(root, {}),
                    tooltip: am5.Tooltip.new(root, {})
                })
            );
            //xAxis.get("dateFormats")["month"] = "M";

            var legend = chart.children.push(
                am5.Legend.new(root, {
                    //centerX: am5.p50,
                    x: 0,
                    y: am5.percent(95),
                    height: 100,
                    paddingTop: 100,
                    nameField: "valueX"

                })
            );

            // Make series change state when legend item is hovered
            legend.itemContainers.template.states.create("hover", {});

            legend.itemContainers.template.events.on("pointerover", function (e) {
                e.target.dataItem.dataContext.hover();
            });
            legend.itemContainers.template.events.on("pointerout", function (e) {
                e.target.dataItem.dataContext.unhover();
            });

            function createAxisAndSeries(opposite, bullet, fieldName, data) {
                let yRenderer = am5xy.AxisRendererY.new(root, {
                    opposite: opposite
                });
                let yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, {
                        maxDeviation: 1,
                        renderer: yRenderer
                    })
                );

                if (chart.yAxes.indexOf(yAxis) > 0) {
                    yAxis.set("syncWithAxis", chart.yAxes.getIndex(0));
                }

                // Add series
                // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
                let series = chart.series.push(
                    am5xy.LineSeries.new(root, {
                        calculateAggregates: true,
                        xAxis: xAxis,
                        name: fieldName,
                        yAxis: yAxis,
                        valueYField: fieldName,
                        //categoryXField: "m",
                        valueXField: "m",
                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: "horizontal",
                            labelText: "{valueY}"
                        })
                    })
                );
                series.data.processor = am5.DataProcessor.new(root, {
                    dateFormat: "M",
                    dateFields: ["m"]
                });

                if(fieldName==='column1')
                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        sprite: am5.Label.new(root, {
                            //centerY: am5.percent(0),
                            text: "{valueY} млн. $",
                            populateText: true,
                            centerX: am5.percent(80),
                            centerY: am5.percent(100),
                            //centerX: 0
                        })
                    });
                }); else
                    series.bullets.push(function () {
                        return am5.Bullet.new(root, {

                            sprite: am5.Label.new(root, {
                                centerY: 0,
                                text: "{valueY} млн. $",
                                populateText: true,
                                centerX: 0
                            })
                        });
                    });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        sprite: am5.Circle.new(root, {
                            strokeWidth: 10,
                            stroke: series.get("stroke"),
                            radius: 5,
                            fill: root.interfaceColors.get("background")
                        })

                    });
                });



                yAxis.set("tooltip", am5.Tooltip.new(root, {
                    themeTags: ["axis"]
                }));




                //series.fills.template.setAll({ fillOpacity: 0.2, visible: true });
                series.strokes.template.setAll({strokeWidth: 10});
                ///series.get("tooltip").label.set("text", "{valueX}: {valueY}")
                yRenderer.grid.template.set("strokeOpacity", 0.05);
                yRenderer.labels.template.set("fill", series.get("fill"));
                yRenderer.setAll({
                    stroke: series.get("fill"),
                    strokeOpacity: 1,
                    opacity: 1
                });

                // Set up data processor to parse string dates
                // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data


                series.data.setAll(data);



                //series.data.setAll(generateChartData(startValue));
                legend.data.push(series);
            }
            xAxis.set("tooltip", am5.Tooltip.new(root, {
                themeTags: ["axis"]
            }));

/*
            chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "zoomXY",
                xAxis: xAxis
            }));

            xAxis.set("tooltip", am5.Tooltip.new(root, {
                themeTags: ["axis"]
            }));*/

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
                        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                            xAxis: xAxis,
                            behavior: "none"
                        }));
                        cursor.lineY.set("visible", false);

// add scrollbar
            /*            chart.set("scrollbarX", am5.Scrollbar.new(root, {
                            orientation: "horizontal"
                        }));*/
            await am5.net.load("/api/v1/stat?name=oyimex&rejim=ЭК").then(function (result) {
                // This gets executed when data finishes loading
                // ... do something
                const m = am5.JSONParser.parse(result.response);
                //const m = JSON.parse(result.response);
                //data = m.data;
                ///console.log(m.data)
                const data = JSON.parse(JSON.stringify(m.data));
                //data.sort((a, b) => (a.val < b.val) ? -1 : 1)
                createAxisAndSeries(false, "triangle", "column1", data);
                createAxisAndSeries(true, "rectangle", "column2", data);
                xAxis.data.setAll(data);

            }).catch(function (result) {
                // This gets executed if there was an error loading URL
                // ... handle error
                console.log("Error loading " + result);
            });





            //createAxisAndSeries(8000, true);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(600, 100);


        },
        async columnChart4() {
            let root = this.route;
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            root.container.children.clear();

            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "none",
                    wheelY: "none",
                    layout: root.verticalLayout,
                })
            );

            let yRenderer = am5xy.AxisRendererY.new(root, {minGridDistance: 10});

            let yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    maxDeviation: 0,
                    categoryField: "country",
                    renderer: yRenderer
                })
            );
            yAxis.get("renderer").grid.template.setAll({visible: false});

            let xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    maxDeviation: 0,
                    min: 0,
                    renderer: am5xy.AxisRendererX.new(root, {})
                })
            );
            xAxis.get("renderer").grid.template.setAll({visible: false});
            xAxis.get("renderer").labels.template.setup = function (target) {
                //target.set("fill", "#ab0c0c");
                target.set("visible", false);
            }
// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            let series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                    name: "Series 1",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueXField: "val",
                    sequencedInterpolation: true,
                    categoryYField: "country"
                })
            );

            series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    locationX: 1,
                    locationY: 0.5,
                    sprite: am5.Label.new(root, {
                        centerY: am5.p50,
                        text: "{valueX} млн. $",
                        populateText: true,
                        centerX: 0
                    })
                });
            });
            let columnTemplate = series.columns.template;

            columnTemplate.setAll({
                draggable: false,
                cursorOverStyle: "pointer",
                //tooltipText: "drag to rearrange",
                cornerRadiusBR: 10,
                cornerRadiusTR: 10
            });
            columnTemplate.adapters.add("fill", (fill, target) => {
                return "#39ae69";
            });

            columnTemplate.adapters.add("stroke", (stroke, target) => {
                return chart.get("colors").getIndex(3);
            });

            /*           columnTemplate.events.on("dragstop", () => {
                           sortCategoryAxis();
                       });*/


// Set data
            let data;

            await am5.net.load("/api/v1/stat?name=davlatimex&rejim=" + this.rejim + "&month=" + this.month + "&year=" + this.year).then(function (result) {
                // This gets executed when data finishes loading
                // ... do something
                const m = am5.JSONParser.parse(result.response);
                //const m = JSON.parse(result.response);
                //data = m.data;
                ///console.log(m.data)
                data = JSON.parse(JSON.stringify(m.data));
                data.sort((a, b) => (a.val < b.val) ? -1 : 1)
                yAxis.data.setAll(data);
                series.data.setAll(data);

            }).catch(function (result) {
                // This gets executed if there was an error loading URL
                // ... handle error
                console.log("Error loading " + result);
            });
            /*

                        yAxis.data.setAll(data);
                        series.data.setAll(data);*/


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear(800);
            chart.appear(800, 100);


        },
        async columnChart4_1() {
            let root = this.route2;
            const _this = this;
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            root.container.children.clear();
            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    //wheelX: "panX",
                    //wheelY: "zoomX",
                    arrangeTooltips: false
                })
            );

// Use only absolute numbers
            chart.getNumberFormatter().set("numberFormat", "#.#s");

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            /*            let legend = chart.children.push(
                            am5.Legend.new(root, {
                                centerX: am5.p50,
                                x: am5.p50
                            })
                        );*/

// Data
            let data;


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            let yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "country",
                    renderer: am5xy.AxisRendererY.new(root, {
                        inversed: false,
                        cellStartLocation: 0.1,
                        cellEndLocation: 0.9,

                    })
                })
            );
            yAxis.get("renderer").grid.template.setAll({visible: false});

            yAxis.get("renderer").labels.template.setup = function (target) {
                //target.set("fill", "#ab0c0c");
                target.set("visible", false);
            }
            //yAxis.data.setAll(data);
            let xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererX.new(root, {})
                })
            );

            xAxis.get("renderer").grid.template.set("visible", false)
            //xAxis.get("renderer").grid.template.set("minGridDistance",200)

            /*xAxis.get("renderer").grid.template.setAll({
                visible: true,
                //fill:"#a81515",
                //stroke:"#a81515",
                //width:am5.percent(10),
                //location:1
            });*/
            xAxis.get("renderer").labels.template.setup = function (target) {
                //target.set("fill", "#b00c0c");
                target.set("visible", false);
                //target.set("fill", "red");
            }

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            async function createSeries(field, labelCenterX, pointerOrientation, rangeValue) {
                let series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueXField: field,
                        categoryYField: "country",
                        sequencedInterpolation: true,
                        clustered: false,
                        maskBullets: false,
                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: pointerOrientation,
                            labelText: "{categoryY}: {valueX}"
                        })
                    })
                );

                series.columns.template.setAll({
                    height: am5.p100,
                    cornerRadiusBR: 10,
                    cornerRadiusTR: 10
                });

                series.columns.template.adapters.add("fill", function (fill, target) {
                    if (target.dataItem.get("valueX") < 0) {
                        return "#9ccbaf";
                    } else {
                        return "#39ae69";
                    }
                });
                /*
                series.columns.template.adapter.add("fill", function(fill, target) {
                    if (target.dataItem && (target.dataItem.valueY < 0)) {
                        return am4core.color("#a55");
                    }
                    else {
                        return fill;
                    }
                });*/


                //series.columns.template.
                /*
                                series.bullets.push(function() {
                                    return am5.Bullet.new(root, {
                                        locationX: 1,
                                        locationY: 0.5,
                                        sprite: am5.Circle.new(root, {
                                            radius: 15,
                                            centerY: am5.p50,
                                            centerX: labelCenterX,
                                            fill: am5.Color.lighten(series.get("fill"), 0.7)
                                        })
                                    });
                                });
                */


                series.bullets.push(function (root, columnSeries, item) {
                    if (item.dataContext.diff < 0)
                        return am5.Bullet.new(root, {
                            locationX: 1,
                            locationY: 0.5,
                            sprite: am5.Label.new(root, {
                                centerY: am5.p50,
                                text: "-{valueX}%",
                                populateText: true,
                                centerX: 60,
                                dx: -0
                            })
                        });
                    else return am5.Bullet.new(root, {
                        locationX: 1,
                        locationY: 0.5,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: "{valueX}%",
                            populateText: true,
                            //centerX: labelCenterX,
                        })
                    });
                });


                await am5.net.load("/api/v1/stat?name=davlatimex&rejim=" + _this.rejim + "&month=" + _this.month + "&year=" + _this.year).then(function (result) {
                    // This gets executed when data finishes loading
                    // ... do something
                    const m = am5.JSONParser.parse(result.response);
                    //const m = JSON.parse(result.response);
                    //data = m.data;
                    //console.log(m.data)
                    data = JSON.parse(JSON.stringify(m.data));
                    data.sort((a, b) => (a.val < b.val) ? -1 : 1)
                    yAxis.data.setAll(data);
                    series.data.setAll(data);

                }).catch(function (result) {
                    // This gets executed if there was an error loading URL
                    // ... handle error
                    console.log("Error loading " + result);
                });

                ///series.data.setAll(data);
                series.appear();

                /*                let rangeDataItem = xAxis.makeDataItem({
                                    value: rangeValue
                                });*/
                /*                xAxis.createAxisRange(rangeDataItem);
                                rangeDataItem.get("grid").setAll({
                                    strokeOpacity: 1,
                                    stroke: series.get("stroke")
                                });*/

                /* let label = rangeDataItem.get("label");
                 label.setAll({
                     text: field.toUpperCase(),
                     fontSize: "1.1em",
                     fill: series.get("stroke"),
                     paddingTop: 10,
                     isMeasured: false,
                     centerX: labelCenterX
                 });
                 label.adapters.add("dy", function() {
                     return -chart.plotContainer.height();
                 });*/

                return series;
            }

            createSeries("diff", 0, "right", -3);
            //createSeries("right", 0, "left", 4);


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 100);


        },
        async columnChart5() {
            let root = this.route;
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            root.container.children.clear();

            // Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                //wheelX: "panX",
                //wheelY: "zoomX",
                layout: root.verticalLayout
            }));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }))


// Data
            let data = [{
                product: "2017",
                oldyear: 23.5,
                currentyear: 18.1,
                icon: "https://assets.codepen.io/t-160/icon_social_twitter.svg",
                diff: 18
            }, {
                product: "2018",
                oldyear: 26.2,
                currentyear: 22.8,
                icon: "https://assets.codepen.io/t-160/icon_social_twitter.svg",
                diff: -23
            }, {
                product: "2019",
                oldyear: 30.1,
                currentyear: 23.9,
                icon: "https://assets.codepen.io/t-160/icon_social_twitter.svg",
                diff: 25
            }, {
                product: "2020",
                oldyear: 29.5,
                currentyear: 25.1,
                icon: "https://assets.codepen.io/t-160/icon_social_twitter.svg",
                diff: 6
            }, {
                product: "2021",
                oldyear: 24.6,
                currentyear: 25,
                icon: "https://assets.codepen.io/t-160/icon_social_twitter.svg",
                diff: -12
            }];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "product",
                renderer: am5xy.AxisRendererY.new(root, {
                    inversed: true,
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9,
                    paddingRight: 100
                }),

                bullet: function (root, axis, dataItem) {
                    let bullet = am5xy.AxisBullet.new(root, {
                        location: 0,
                        paddingRight: 20,
                        y: 1000,
                        width: 100,
                        sprite: am5.Picture.new(root, {
                            width: 24,
                            height: 24,
                            centerY: am5.p100,
                            centerX: am5.p100,
                            src: dataItem.dataContext.icon
                        })
                    });
                    return bullet
                }
            }));

            yAxis.get("renderer").labels.template.setAll({
                paddingRight: 100,
            });


            /*            yAxis.get("renderer").labels.template.adapters.add("html", function(html, target) {
                            return "sdfsf";
                        });*/
            /*
                        yAxis.get("renderer").labels.template.setup = function (target) {
                            //target.set("fill", "#b00c0c");
                            target.set("label","<div>sada</div>")
                            //target.set("fill", "red");
                        }
            */


            yAxis.data.setAll(data);


            let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                min: 0
            }));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            function createSeries(field, name) {
                let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueXField: field,
                    valueYField: "diff",
                    categoryYField: "product",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: "horizontal",
                        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
                    })
                }));

                series.columns.template.setAll({
                    height: am5.percent(80),
                    width: am5.p50,
                });


                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        locationY: 0.5,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: "{valueX}",
                            populateText: true
                        })
                    });
                });


                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        locationY: 0.5,
                        sprite: am5.Label.new(root, {
                            centerX: am5.p100,
                            centerY: am5.p50,
                            text: "{name}",
                            fill: am5.color(0xffffff),
                            populateText: true
                        })
                    });
                });

                series.data.setAll(data);
                series.appear();

                return series;
            }

            createSeries("oldyear", "import");
            createSeries("currentyear", "export");


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            let legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }));

            legend.data.setAll(chart.series.values);


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            /* var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                 behavior: "zoomY"
             }));
             cursor.lineY.set("forceHidden", true);
             cursor.lineX.set("forceHidden", true);*/


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 100);

        }
    }
}

/*  Main slider js
/*----------------------------------------------------*/


/*----------------------------------------------------*/

am4core.options.autoDispose = true;
am4core.options.showSystemTooltip = false;

function slide1(rerun = false) {

    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart1", am4charts.PieChart);

// Add data
        chart.data = [{
            "country": "Яллама ч/п",
            "litres": 3096,
            //"color": am4core.color("#ED1C24")
        }, {
            "country": "Гишткуприк ч/п",
            "litres": 1
        }, {
            "country": "Даут-ата",
            "litres": 2927
        }, {
            "country": "Ойбек",
            "litres": 460
        }, {
            "country": "Навои",
            "litres": 796
        }, {
            "country": "С. Наджимов",
            "litres": 94
        }, {
            "country": "Айритом",
            "litres": 371
        }, {
            "country": "Андархан",
            "litres": 5
        }, {
            "country": "Сырдарья",
            "litres": 1318
        }, {
            "country": "Узбекистан",
            "litres": 165
        }, {
            "country": "Сариасия",
            "litres": 316
        }, {
            "country": "Карши-Керки",
            "litres": 97
        }

        ];

// Set inner radius
        chart.innerRadius = am4core.percent(50);

// Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.labels.template.text = "{category}: {value.value} та";
        chart.numberFormatter.numberFormat = "#";


// This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        /*        var title = chart.createChild(am4core.Label);
                title.fill = am4core.color("#b9ce37");
                title.fontSize = 20;
                title.isMeasured = false;
                title.valign = "bottom";
                title.align = "center";
                title.horizontalCenter = "100";
                title.wrap = true;
                title.width = 200;
                title.text = "Чегара орқали ҳаракатланган автотранспортлар сони июнь ойи бўйича";*/
// Add legend
        // chart.legend = new am4charts.Legend();
    }); // end am4core.ready()
}

function slide2() {


// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("chart2", am4charts.XYChart);

// Add data
    chart.data = [{
        "country": "USA",
        "visits": 2025
    }, {
        "country": "China",
        "visits": 1882
    }, {
        "country": "Japan",
        "visits": 1809
    }, {
        "country": "Germany",
        "visits": 1322
    }, {
        "country": "UK",
        "visits": 1122
    }, {
        "country": "France",
        "visits": 1114
    }, {
        "country": "India",
        "visits": 984
    }, {
        "country": "Spain",
        "visits": 711
    }, {
        "country": "Netherlands",
        "visits": 665
    }, {
        "country": "Russia",
        "visits": 580
    }, {
        "country": "South Korea",
        "visits": 443
    }, {
        "country": "Canada",
        "visits": 441
    }, {
        "country": "Brazil",
        "visits": 395
    }];

// Create axes

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
        }
        return dy;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    chart.children.forceCreate = true;
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    //series.hiddenState.transitionDuration=500;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    chart.animationEasing = 0;
}

function slide3() {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("chartslider-item3", am4charts.XYChart);

// Title
    var title = chart.titles.push(new am4core.Label());
    title.text = "Research tools used by students";
    title.fontSize = 25;
    title.marginBottom = 15;

// Add data
    chart.data = [{
        "category": "Search engines",
        "negative1": -0.1,
        "negative2": -0.9,
        "positive1": 5,
        "positive2": 94
    }, {
        "category": "Online encyclopedias",
        "negative1": -2,
        "negative2": -4,
        "positive1": 19,
        "positive2": 75
    }, {
        "category": "Peers",
        "negative1": -2,
        "negative2": -10,
        "positive1": 46,
        "positive2": 42
    }, {
        "category": "Social media",
        "negative1": -2,
        "negative2": -13,
        "positive1": 33,
        "positive2": 52
    }, {
        "category": "Study guides",
        "negative1": -6,
        "negative2": -19,
        "positive1": 34,
        "positive2": 41
    }, {
        "category": "News websites",
        "negative1": -3,
        "negative2": -23,
        "positive1": 49,
        "positive2": 25
    }, {
        "category": "Textbooks",
        "negative1": -5,
        "negative2": -28,
        "positive1": 49,
        "positive2": 18
    }, {
        "category": "Librarian",
        "negative1": -14,
        "negative2": -34,
        "positive1": 37,
        "positive2": 16
    }, {
        "category": "Printed books",
        "negative1": -9,
        "negative2": -41,
        "positive1": 38,
        "positive2": 12
    }, {
        "category": "Databases",
        "negative1": -18,
        "negative2": -36,
        "positive1": 29,
        "positive2": 17
    }, {
        "category": "Student search engines",
        "negative1": -17,
        "negative2": -39,
        "positive1": 34,
        "positive2": 10
    }];


// Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;


    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text + "%";
    })

// Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    chart.children.forceCreate = true;
// Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";

// Create series
    function createSeries(field, name, color) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "category";
        series.stacked = true;
        series.name = name;
        series.stroke = color;
        series.fill = color;

        var label = series.bullets.push(new am4charts.LabelBullet);
        label.label.text = "{valueX}%";
        label.label.fill = am4core.color("#fff");
        label.label.strokeWidth = 0;
        label.label.truncate = false;
        label.label.hideOversized = true;
        label.locationX = 0.5;
        return series;
    }

    var interfaceColors = new am4core.InterfaceColorSet();
    var positiveColor = interfaceColors.getFor("positive");
    var negativeColor = interfaceColors.getFor("negative");

    createSeries("negative2", "Unlikely", negativeColor.lighten(0.5));
    createSeries("negative1", "Never", negativeColor);
    createSeries("positive1", "Sometimes", positiveColor.lighten(0.5));
    createSeries("positive2", "Very often", positiveColor);

    chart.legend.events.on("layoutvalidated", function (event) {
        chart.legend.itemContainers.each((container) => {
            if (container.dataItem.dataContext.name == "Never") {
                container.toBack();
            }
        })
    })
    chart.animationEasing = 0;
}

function slide4() {
// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("chartslider-item4", am4charts.XYChart3D);

// Add data
    chart.data = [{
        "country": "USA",
        "visits": 4025,
        "color": chart.colors.next()
    }, {
        "country": "China",
        "visits": 1882,
        "color": chart.colors.next()
    }, {
        "country": "Japan",
        "visits": 1809,
        "color": chart.colors.next()
    }, {
        "country": "Germany",
        "visits": 1322,
        "color": chart.colors.next()
    }, {
        "country": "UK",
        "visits": 1122,
        "color": chart.colors.next()
    }, {
        "country": "France",
        "visits": 1114,
        "color": chart.colors.next()
    }, {
        "country": "India",
        "visits": 984,
        "color": chart.colors.next()
    }, {
        "country": "Spain",
        "visits": 711,
        "color": chart.colors.next()
    }, {
        "country": "Netherlands",
        "visits": 665,
        "color": chart.colors.next()
    }, {
        "country": "Russia",
        "visits": 580,
        "color": chart.colors.next()
    }, {
        "country": "South Korea",
        "visits": 443,
        "color": chart.colors.next()
    }, {
        "country": "Canada",
        "visits": 441,
        "color": chart.colors.next()
    }, {
        "country": "Brazil",
        "visits": 395,
        "color": chart.colors.next()
    }, {
        "country": "Italy",
        "visits": 386,
        "color": chart.colors.next()
    }, {
        "country": "Australia",
        "visits": 384,
        "color": chart.colors.next()
    }, {
        "country": "Taiwan",
        "visits": 338,
        "color": chart.colors.next()
    }, {
        "country": "Poland",
        "visits": 328,
        "color": chart.colors.next()
    }];

// Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Countries";
    valueAxis.title.fontWeight = "bold";

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;
    series.columns.template.propertyFields.fill = "color";

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
    chart.children.forceCreate = true;
    chart.animationEasing = 0;

}

function slide5() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        var chart = am4core.create("chartslider-item1-1", am4charts.SlicedChart);
        chart.paddingBottom = 30;
        chart.data = [{
            "name": "Stage #1",
            "value": 600
        }, {
            "name": "Stage #2",
            "value": 300
        }, {
            "name": "Stage #3",
            "value": 200
        }, {
            "name": "Stage #4",
            "value": 180
        }, {
            "name": "Stage #5",
            "value": 50
        }, {
            "name": "Stage #6",
            "value": 20
        }, {
            "name": "Stage #7",
            "value": 280
        }];

        var series = chart.series.push(new am4charts.PyramidSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.alignLabels = true;
        series.valueIs = "height";

    }); // end am4core.ready()

}

function slide6() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end


// Create chart instance
        var chart = am4core.create("chartslider-item1-2", am4charts.RadarChart);

// Add data
        chart.data = [{
            "category": "Research",
            "value": 80,
            "full": 100
        }, {
            "category": "Marketing",
            "value": 35,
            "full": 100
        }, {
            "category": "Distribution",
            "value": 92,
            "full": 100
        }, {
            "category": "Human Resources",
            "value": 68,
            "full": 100
        }];

// Make chart not full circle
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = am4core.percent(20);

// Set number format
        chart.numberFormatter.numberFormat = "#.#'%'";

// Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;

        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;

// Create series
        var series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;

        var series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;

        series2.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

// Add cursor
        chart.cursor = new am4charts.RadarCursor();

    }); // end am4core.ready()

}

function slide7() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        var chart = am4core.create("chart2", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
            {
                country: "Lithuania",
                value: 401
            },
            {
                country: "Czech Republic",
                value: 300
            },
            {
                country: "Ireland",
                value: 200
            },
            {
                country: "Germany",
                value: 165
            },
            {
                country: "Australia",
                value: 139
            },
            {
                country: "Austria",
                value: 128
            }
        ];
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";

        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        chart.maxZoomLevel = 1;
        chart.minZoomLevel = 1;
        series.alignLabels = false;
        //chart.zoomOutButton.disabled = true;
        /*        chart.chartContainer.wheelable = false;
                chart.toggleZoomOutButton = false;*/

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        //chart.legend = new am4charts.Legend();

    }); // end am4core.ready()
}

function slide8() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        // Create chart instance
        var container = am4core.create("chart8", am4core.Container);
        container.layout = "grid";
        container.fixedWidthGrid = false;
        container.width = am4core.percent(100);
        container.height = am4core.percent(100);

        // Color set
        var colors = new am4core.ColorSet();

        // Functions that create various sparklines
        function createLine(title, data, color) {

            var chart = container.createChild(am4charts.XYChart);
            chart.width = am4core.percent(45);
            chart.height = 70;

            chart.data = data;

            chart.titles.template.fontSize = 10;
            chart.titles.template.textAlign = "left";
            chart.titles.template.isMeasured = false;
            chart.titles.create().text = title;

            chart.padding(20, 5, 2, 5);

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.startLocation = 0.5;
            dateAxis.endLocation = 0.7;
            dateAxis.cursorTooltipEnabled = false;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;
            chart.cursor.behavior = "none";

            var series = chart.series.push(new am4charts.LineSeries());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.tensionX = 0.8;
            series.strokeWidth = 2;
            series.stroke = color;

            // render data points as bullets
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.opacity = 0;
            bullet.circle.fill = color;
            bullet.circle.propertyFields.opacity = "opacity";
            bullet.circle.radius = 3;

            return chart;
        }

        function createColumn(title, data, color) {

            var chart = container.createChild(am4charts.XYChart);
            chart.width = am4core.percent(45);
            chart.height = 70;

            chart.data = data;

            chart.titles.template.fontSize = 10;
            chart.titles.template.textAlign = "left";
            chart.titles.template.isMeasured = false;
            chart.titles.create().text = title;

            chart.padding(20, 5, 2, 5);

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.cursorTooltipEnabled = false;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;

            var series = chart.series.push(new am4charts.ColumnSeries());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.strokeWidth = 0;
            series.fillOpacity = 0.5;
            series.columns.template.propertyFields.fillOpacity = "opacity";
            series.columns.template.fill = color;

            return chart;
        }

        function createPie(data, color) {

            var chart = container.createChild(am4charts.PieChart);
            chart.width = am4core.percent(10);
            chart.height = 70;
            chart.padding(20, 0, 2, 0);

            chart.data = data;

            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            pieSeries.slices.template.fill = color;
            pieSeries.slices.template.adapter.add("fill", function (fill, target) {
                return fill.lighten(0.1 * target.dataItem.index);
            });
            pieSeries.slices.template.stroke = am4core.color("#fff");

            // chart.chartContainer.minHeight = 40;
            // chart.chartContainer.minWidth = 40;

            return chart;
        }


        createLine("AAPL (Price)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 57},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 27},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 24},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 59},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 33},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 46},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 20},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 42},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1}
        ], colors.getIndex(0));

        createColumn("AAPL (Turnover)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 22},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 25},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 40},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 35},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 1},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 15},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1}
        ], colors.getIndex(0));

        createPie([
            {"category": "Marketing", "value": 501},
            {"category": "Research", "value": 301},
            {"category": "Sales", "value": 201},
            {"category": "HR", "value": 165}
        ], colors.getIndex(0));

        createLine("MSFT (Price)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 22},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 25},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 40},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 35},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 1},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 15},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1}
        ], colors.getIndex(1));

        createColumn("MSFT (Turnover)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 57},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 27},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 24},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 59},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 33},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 46},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 20},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 42},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1}
        ], colors.getIndex(1));

        createPie([
            {"category": "Marketing", "value": 130},
            {"category": "Research", "value": 450},
            {"category": "Sales", "value": 400},
            {"category": "HR", "value": 200}
        ], colors.getIndex(1));

        createLine("AMZN (Price)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 16},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 62},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 55},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 34},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 28},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 32},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1}
        ], colors.getIndex(2));

        createColumn("AMZN (Turnover)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 50},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 51},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 62},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 60},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 25},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 20},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 70},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 42},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1}
        ], colors.getIndex(2));

        createPie([
            {"category": "Marketing", "value": 220},
            {"category": "Research", "value": 200},
            {"category": "Sales", "value": 150},
            {"category": "HR", "value": 125}
        ], colors.getIndex(2));

        // FB

        createLine("FB (Price)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 52},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 55},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 35},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 34},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 39},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 42},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 22},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 15, "opacity": 1}
        ], colors.getIndex(3));

        createColumn("FB (Turnover)", [
            {"date": new Date(2018, 0, 1, 8, 0, 0), "value": 20},
            {"date": new Date(2018, 0, 1, 9, 0, 0), "value": 20},
            {"date": new Date(2018, 0, 1, 10, 0, 0), "value": 25},
            {"date": new Date(2018, 0, 1, 11, 0, 0), "value": 26},
            {"date": new Date(2018, 0, 1, 12, 0, 0), "value": 29},
            {"date": new Date(2018, 0, 1, 13, 0, 0), "value": 27},
            {"date": new Date(2018, 0, 1, 14, 0, 0), "value": 25},
            {"date": new Date(2018, 0, 1, 15, 0, 0), "value": 32},
            {"date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1}
        ], colors.getIndex(3));

        createPie([
            {"category": "Marketing", "value": 120},
            {"category": "Research", "value": 150},
            {"category": "Sales", "value": 125},
            {"category": "HR", "value": 250}
        ], colors.getIndex(3));

    }); // end am4core.ready()
}

function slide9() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart9", am4charts.XYChart);
        chart.colors.step = 3;

// Add data
        chart.data = [{
            "y": 10,
            "x": 14,
            "value": 59,
            "y2": -5,
            "x2": -3,
            "value2": 44
        }, {
            "y": 5,
            "x": 3,
            "value": 50,
            "y2": -15,
            "x2": -8,
            "value2": 12
        }, {
            "y": -10,
            "x": 8,
            "value": 19,
            "y2": -4,
            "x2": 6,
            "value2": 35
        }, {
            "y": -6,
            "x": 5,
            "value": 65,
            "y2": -5,
            "x2": -6,
            "value2": 168
        }, {
            "y": 15,
            "x": -4,
            "value": 92,
            "y2": -10,
            "x2": -8,
            "value2": 102
        }, {
            "y": 13,
            "x": 1,
            "value": 8,
            "y2": -2,
            "x2": 0,
            "value2": 41
        }, {
            "y": 1,
            "x": 6,
            "value": 35,
            "y2": 0,
            "x2": -3,
            "value2": 16
        }];

// Create axes
        var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
        xAxis.renderer.minGridDistance = 50;

        var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.renderer.minGridDistance = 50;

// Create series #1
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "y";
        series.dataFields.valueX = "x";
        series.dataFields.value = "value";
        series.strokeOpacity = 0;
        series.name = "Series 1";

        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.strokeOpacity = 0.2;
        bullet.stroke = am4core.color("#ffffff");
        bullet.nonScalingStroke = true;
        bullet.tooltipText = "x:{valueX} y:{valueY}";
        series.heatRules.push({
            target: bullet.circle,
            min: 10,
            max: 60,
            property: "radius"
        });

// Create series #2
        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "y2";
        series2.dataFields.valueX = "x2";
        series2.dataFields.value = "value2";
        series2.strokeOpacity = 0;
        series2.name = "Series 2";

        var bullet2 = series2.bullets.push(new am4charts.Bullet());
        bullet2.tooltipText = "x:{valueX} y:{valueY}";
        bullet2.layout = "absolute";
        bullet2.rotation = 45;

        var rectangle = bullet2.createChild(am4core.Rectangle);
        rectangle.verticalCenter = "middle";
        rectangle.horizontalCenter = "middle";
        rectangle.width = 10;
        rectangle.height = 10;
        rectangle.strokeOpacity = 0.5;
        rectangle.stroke = am4core.color("#ffffff");
        rectangle.nonScalingStroke = true;

        rectangle.verticalCenter = "middle";
        rectangle.horizontalCenter = "middle";

        series2.heatRules.push({
            target: rectangle,
            min: 1,
            max: 8,
            property: "scale"
        });
        /*
                chart.scrollbarX = new am4core.Scrollbar();
                chart.scrollbarY = new am4core.Scrollbar();

                chart.legend = new am4charts.Legend();*/

    }); // end am4core.ready()

}

function slide10() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        //  window.onload = function() {

        /**
         * This demo uses our own method of determining user's location
         * It is not public web service that you can use
         * You'll need to find your own. We recommend http://www.maxmind.com
         */
        //jQuery.getJSON( "https://www.amcharts.com/tools/country/?v=xz6Z", function( geo )
        {
            var geo = jQuery.parseJSON('{"country_code":"UZ","country_name":"Uzbekistan"}');
            //{"country_code":"UZ","country_name":"Uzbekistan"};
            // Default map
            var defaultMap = "usaAlbersLow";

            // calculate which map to be used
            var currentMap = defaultMap;
            var title = "";
            if (am4geodata_data_countries2[geo.country_code] !== undefined) {
                currentMap = am4geodata_data_countries2[geo.country_code]["maps"][0];

                // add country title
                if (am4geodata_data_countries2[geo.country_code]["country"]) {
                    title = am4geodata_data_countries2[geo.country_code]["country"];
                }

            }

            // Create map instance
            var chart = am4core.create("chart10", am4maps.MapChart);

            //chart.titles.create().text = title;

            // Set map definition
            chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
            chart.geodataSource.events.on("parseended", function (ev) {
                var data = [];
                for (var i = 0; i < ev.target.data.features.length; i++) {
                    data.push({
                        id: ev.target.data.features[i].id,
                        value: Math.round(Math.random() * 10000)
                    })
                }
                polygonSeries.data = data;
                //console.log(data)
            })
            chart.seriesContainer.draggable = false;
            chart.seriesContainer.resizable = false;
            chart.chartContainer.wheelable = false;

            // Set projection
            chart.projection = new am4maps.projections.Mercator();

            // Create map polygon series
            var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            //Set min/max fill color for each area
            polygonSeries.heatRules.push({
                property: "fill",
                target: polygonSeries.mapPolygons.template,
                min: chart.colors.getIndex(1).brighten(1),
                max: chart.colors.getIndex(1).brighten(-0.3)
            });

            //polygonSeries.properties.fill = chart.colors.getIndex(0).brighten(5);


            // Make map load polygon data (state shapes and names) from GeoJSON
            polygonSeries.useGeodata = true;

            /* // Set up heat legend
             let heatLegend = chart.createChild(am4maps.HeatLegend);
             heatLegend.series = polygonSeries;
             heatLegend.align = "right";
             heatLegend.width = am4core.percent(25);
             heatLegend.marginRight = am4core.percent(4);
             heatLegend.minValue = 0;
             heatLegend.maxValue = 40000000;
             heatLegend.valign = "bottom";

             // Set up custom heat map legend labels using axis ranges
             var minRange = heatLegend.valueAxis.axisRanges.create();
             minRange.value = heatLegend.minValue;
             minRange.label.text = "Little";
             var maxRange = heatLegend.valueAxis.axisRanges.create();
             maxRange.value = heatLegend.maxValue;
             maxRange.label.text = "A lot!";

             // Blank out internal heat legend value axis labels
             heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
                 return "";
             });*/
            var currentActive;
            // Configure series tooltip
            var polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}: {value}";
            polygonTemplate.nonScalingStroke = true;
            polygonTemplate.strokeWidth = 0.5;
            polygonTemplate.url = "url";
            /*polygonTemplate.togglable  = true;*/

            var hs = polygonTemplate.states.create("hover");
            hs.properties.fill = am4core.color("#39ae69");
            var activeState = polygonTemplate.states.create("active");
            activeState.properties.fill = am4core.color("#39ae69");

            polygonTemplate.adapter.add("url", function (url, target) {
                slide11(ie_data[target.dataItem.dataContext.id])
            });
            /*polygonTemplate.properties.isActive=false;*/
            // Create an event to toggle "active" state

            polygonTemplate.events.on("hit", function (ev) {
                if (currentActive) {
                    currentActive.setState("default");
                }
                currentActive = ev.target;
                ev.target.isActive = !ev.target.isActive;
            })


        }
        //);

        // };

    }); // end am4core.ready()
}

function slide11(iedata = []) {

    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        // Create chart instance
        var chart = am4core.create("chart11", am4charts.XYChart);

// Add data
        if (iedata.length === 0)
            chart.data = [{
                "year": 2005,
                "import": 23.5,
                "export": 18.1
            }, {
                "year": 2006,
                "import": 26.2,
                "export": 22.8
            }, {
                "year": 2007,
                "import": 30.1,
                "export": 23.9
            }, {
                "year": 2008,
                "import": 29.5,
                "export": 25.1
            }, {
                "year": 2009,
                "import": 24.6,
                "export": 25
            }, {
                "year": 2010,
                "import": 24.6,
                "export": 25
            },];
        else chart.data = iedata;

// Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;
        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.opposite = false;
        valueAxis.adjustLabelPrecision = true;

// Create series
        function createSeries(field, name) {
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "year";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
            series.columns.template.height = am4core.percent(100);
            series.sequencedInterpolation = true;

            var valueLabel = series.bullets.push(new am4charts.LabelBullet());
            valueLabel.label.text = "{valueX}";
            valueLabel.label.horizontalCenter = "left";
            valueLabel.label.dx = 10;
            valueLabel.label.hideOversized = false;
            valueLabel.label.truncate = false;

            var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
            categoryLabel.label.text = "{name}";
            categoryLabel.label.horizontalCenter = "right";
            categoryLabel.label.dx = -10;
            categoryLabel.label.fill = am4core.color("#fff");
            categoryLabel.label.hideOversized = false;
            categoryLabel.label.truncate = false;
        }

        createSeries("import", "Импорт");
        createSeries("export", "Экспорт");

    }); // end am4core.ready()
}

function slide12() {

    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        var chart = am4core.create("chart12", am4charts.XYChart);

// Add data
        chart.data = [{
            "name": "Январ",
            "value": 77.8
        }, {
            "name": "Феврал",
            "value": 76.2
        }, {
            "name": "Март",
            "value": 88.4
        }, {
            "name": "Апрел",
            "value": 96.5
        }, {
            "name": "Май",
            "value": 113.2
        }];

// Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.title.text = "2021 йил ойлари бўйича";

// Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Ташқи савдо айланмаси (%)";

// Create series
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.valueY = "value";
        lineSeries.dataFields.categoryX = "name";

        lineSeries.strokeWidth = 3;
        lineSeries.strokeDasharray = "10";

// Add simple bullet
        var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
        bullet.disabled = false;
        bullet.propertyFields.disabled = "disabled";

        var secondCircle = bullet.createChild(am4core.Circle);
        secondCircle.radius = 6;
        secondCircle.fill = chart.colors.getIndex(7);


        bullet.events.on("inited", function (event) {
            animateBullet(event.target.circle);
        })


        function animateBullet(bullet) {
            var animation = bullet.animate([{property: "scale", from: 1, to: 4}, {
                property: "opacity",
                from: 1,
                to: 0
            }], 1000, am4core.ease.circleOut);
            animation.events.on("animationended", function (event) {
                animateBullet(event.target.object);
            })
        }


    }); // end am4core.ready()
}

function slide13() {

    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart13", am4charts.XYChart);

//

// Increase contrast by taking evey second color
        chart.colors.step = 2;

// Add data
        //chart.data = generateChartData();
        chart.data = [
            {
                "date": "Январ",
                "eksport": 1529700.372,
                "import": 494188.643,
            }, {
                "date": "Феврал",
                "eksport": 1729321.771,
                "import": 620444.635,
            }, {
                "date": "Март",
                "eksport": 1645064.588,
                "import": 719510.625,
            }, {
                "date": "Апрел",
                "eksport": 2134802.868,
                "import": 680519.875,
            }, {
                "date": "Май",
                "eksport": 2195268.149,
                "import": 720490.931,
            }, {
                "date": "Июн",
                "eksport": 2340290.863,
                "import": 752485.586,
            }, {
                "date": "Июл",
                "eksport": 2303757.400,
                "import": 750031.074,
            }, {
                "date": "Август",
                "eksport": 2552272.791,
                "import": 729334.771,
            }, {
                "date": "Сентябр",
                "eksport": 420607.716,
                "import": 116304.949,
            },];
// Create axes
        var dateAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        //dateAxis.renderer.minGridDistance = 50;
        //dateAxis.dateFormats.setKey("month", "MMM");
        dateAxis.dataFields.category = "date";

// Create series
        function createAxisAndSeries(field, name, opposite, bullet) {
            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            if (chart.yAxes.indexOf(valueAxis) != 0) {
                valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
            }

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "date";
            series.strokeWidth = 2;
            series.yAxis = valueAxis;
            series.name = name;
            series.tooltipText = "{name}: [bold]{valueY}[/]";
            series.tensionX = 0.8;
            series.showOnInit = true;

            var interfaceColors = new am4core.InterfaceColorSet();

            switch (bullet) {
                case "triangle":
                    var bullet = series.bullets.push(new am4charts.Bullet());
                    bullet.width = 12;
                    bullet.height = 12;
                    bullet.horizontalCenter = "middle";
                    bullet.verticalCenter = "middle";

                    var triangle = bullet.createChild(am4core.Triangle);
                    triangle.stroke = interfaceColors.getFor("background");
                    triangle.strokeWidth = 2;
                    triangle.direction = "top";
                    triangle.width = 12;
                    triangle.height = 12;
                    break;
                case "rectangle":
                    var bullet = series.bullets.push(new am4charts.Bullet());
                    bullet.width = 10;
                    bullet.height = 10;
                    bullet.horizontalCenter = "middle";
                    bullet.verticalCenter = "middle";

                    var rectangle = bullet.createChild(am4core.Rectangle);
                    rectangle.stroke = interfaceColors.getFor("background");
                    rectangle.strokeWidth = 2;
                    rectangle.width = 10;
                    rectangle.height = 10;
                    break;
                default:
                    var bullet = series.bullets.push(new am4charts.CircleBullet());
                    bullet.circle.stroke = interfaceColors.getFor("background");
                    bullet.circle.strokeWidth = 2;
                    break;
            }

            valueAxis.renderer.line.strokeOpacity = 1;
            valueAxis.renderer.line.strokeWidth = 2;
            valueAxis.renderer.line.stroke = series.stroke;
            valueAxis.renderer.labels.template.fill = series.stroke;
            valueAxis.renderer.opposite = opposite;
        }

        createAxisAndSeries("eksport", "Экспорт", false, "circle");
        createAxisAndSeries("import", "Импорт", true, "triangle");
        /*createAxisAndSeries("hits", "Hits", true, "rectangle");*/

// Add legend
        chart.legend = new am4charts.Legend();

// Add cursor
        chart.cursor = new am4charts.XYCursor();

// generate some random data, quite different range
        /* function generateChartData() {
             var chartData = [];
             var firstDate = new Date();
             firstDate.setDate(firstDate.getDate() - 100);
             firstDate.setHours(0, 0, 0, 0);

             var visits = 1600;
             var hits = 2900;
             var views = 8700;

             var month = new Array();
             month = [
                 "January",
                 "February",
                 "March",
                 "April",
                 "May",
                 "June",
                 "July",
                 "August",
                 "September",
                 "October",
                 "November",
                 "December",
             ];
             for (var i = 0; i < 5; i++) {
                 // we create date objects here. In your data, you can have date strings
                 // and then set format of your dates using chart.dataDateFormat property,
                 // however when possible, use date objects, as this will speed up chart rendering.
                 var newDate = new Date(firstDate);
                 newDate.setDate(newDate.getDate() + i);

                 visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                 hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                 views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                 console.log(month[i]);
                 chartData.push({
                     date: newDate,
                     visits: visits,
                     hits: hits,
                     views: views
                 });
             }
             return chartData;
         }*/

    }); // end am4core.ready()
}

function barChartVertical(chartId, reptype) {

    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create(chartId, am4charts.XYChart);


// Add data

        chart.data = [
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
            }, {
                "country": "Қашқадарё вилояти",
                "import": 98,
                "export": 99
            }, {
                "country": "Сирдарё вилояти",
                "import": 63,
                "export": 50
            }, {
                "country": "Жиззах вилояти",
                "import": 53,
                "export": 15
            }, {
                "country": "Тошкент вилояти",
                "import": 74,
                "export": 89
            }, {
                "country": "Андижон вилояти",
                "import": 67,
                "export": 60
            }, {
                "country": "Фарғона вилояти",
                "import": 75,
                "export": 76
            }, {
                "country": "Наманган вилояти",
                "import": 73,
                "export": 78
            }, {
                "country": "Тошкент шаҳри",
                "import": 89,
                "export": 102
            },];


// Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 1;
        categoryAxis.renderer.minGridDistance = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "top";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = false;
        categoryAxis.renderer.minHeight = 110;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.disabled = false;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = false;
// Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "import";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.sequencedInterpolation = true;
        series2.dataFields.valueY = "export";
        series2.dataFields.categoryX = "country";
        series2.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series2.columns.template.strokeWidth = 0;

        series2.tooltip.pointerOrientation = "vertical";

        series2.columns.template.column.cornerRadiusTopLeft = 10;
        series2.columns.template.column.cornerRadiusTopRight = 10;
        series2.columns.template.column.fillOpacity = 0.5;
        var label = series.columns.template.createChild(am4core.Label);
        label.text = "{valueY}";
        label.valign = "top";
        label.dy = 10;
        label.strokeWidth = 0;
        label.align = "center";
        label.fill = am4core.color("#fff");
        var label = series2.columns.template.createChild(am4core.Label);
        label.text = "{valueY}";
        label.valign = "top";
        label.dy = 10;
        label.strokeWidth = 0;
        label.align = "center";
        label.fill = am4core.color("#fff");
        /*        var labelBullet = series.bullets.push(new am4charts.LabelBullet())
                labelBullet.label.verticalCenter = "top";
                labelBullet.label.dx = 1;
                labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#a')}";
                labelBullet.locationY = 1;*/

// on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        series.columns.template.adapter.add("fill", function (fill, target) {
            /*            if(target.dataItem.categoryX=='Чилонзор')
                        return chart.colors.getIndex(target.dataItem.index);*/
            /*            switch(target.dataItem.categoryX) {
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                        }*/
            return chart.colors.getIndex(1);
            //return chart.colors.getIndex(target.dataItem.index);
        });
        series2.columns.template.adapter.add("fill", function (fill, target) {
            /*            if(target.dataItem.categoryX=='Чилонзор')
                        return chart.colors.getIndex(target.dataItem.index);*/
            /*            switch(target.dataItem.categoryX) {
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                            case 'Чилонзор': return am4core.color("#0168dd");
                        }*/
            //return chart.colors.getIndex(target.dataItem.index);
            return chart.colors.getIndex(2);
        });
//        series.heatRules.push({ target: series.columns.template, property: "fill", dataField: "valueY", min: am4core.color("#e5dc36"), max: am4core.color("#7f3720") });

// Cursor
        chart.cursor = new am4charts.XYCursor();

    }); // end am4core.ready()
}

function clusteredColumn(chartId, data = null) {
    var d = am5.Root.new(chartId);
// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
    d.setThemes([
        am5themes_Animated.new(d)
    ]);
    d._logo = true;
    d.container.children.clear();

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = d.container.children.push(am5xy.XYChart.new(d, {
        // panX: true,
        // panY: true,
        //wheelX: "panX",
        /// wheelY: "zoomX",
        layout: d.verticalLayout
    }));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(
        am5.Legend.new(d, {
            // centerX: am5.p50,
            x: 0,
            paddingTop: 40
        })
    );

    if (data == null) data = [
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
        }, {
            "country": "Қашқадарё вилояти",
            "import": 98,
            "export": 99
        }, {
            "country": "Сирдарё вилояти",
            "import": 63,
            "export": 50
        }, {
            "country": "Жиззах вилояти",
            "import": 53,
            "export": 15
        }, {
            "country": "Тошкент вилояти",
            "import": 74,
            "export": 89
        }, {
            "country": "Андижон вилояти",
            "import": 67,
            "export": 60
        }, {
            "country": "Фарғона вилояти",
            "import": 75,
            "export": 76
        }, {
            "country": "Наманган вилояти",
            "import": 73,
            "export": 78
        }, {
            "country": "Тошкент шаҳри",
            "import": 89,
            "export": 102
        },];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

    var xRenderer = am5xy.AxisRendererX.new(d, {minGridDistance: 30});
    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(d, {
        categoryField: "country",
        /*        renderer: am5xy.AxisRendererX.new(root, {
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9,
                }),    */
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(d, {})
    }));
    //xAxis.renderer.labels.template.rotation = -90;
    //label.rotation = -90;
    //xAxis.renderer.labels.template.rotation = 360;

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(d, {
        renderer: am5xy.AxisRendererY.new(d, {})
    }));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
        let series = chart.series.push(am5xy.ColumnSeries.new(d, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: fieldName,
            categoryXField: "country"
        }));

        series.columns.template.setAll({
            tooltipText: "{name} - {valueY}, {categoryX}",
            width: am5.percent(90),
            tooltipY: 0,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });

        series.data.setAll(data);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();

        series.bullets.push(function () {
            return am5.Bullet.new(d, {
                locationY: 0,
                sprite: am5.Label.new(d, {
                    text: "{valueY}",
                    fill: d.interfaceColors.get("alternativeText"),
                    centerY: 0,
                    centerX: am5.p50,
                    populateText: true
                })
            });
        });

        legend.data.push(series);
    }

    makeSeries("Import", "import");
    makeSeries("Export", "export");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}


</script>

