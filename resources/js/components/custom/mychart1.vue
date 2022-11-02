<template>
    <div class="chart-container">
        <div class="legends">
            <div class="legend"><span class="color"></span><span class="value">2022</span></div>
            <div class="legend"><span class="color"></span><span class="value">2021</span></div>

        </div>
        <div class="chart_item d-flex" v-for="item in items">
            <div class="chart_item_icon d-none" >
                <v-icon class="chart_item_icon">mdi-car-multiple</v-icon>
            </div>
            <div class="chart_item_pname">{{ $t(item[item_title]) }}</div>
            <div class="chart_item_diff">
                <div class="chart_item_diff_values">
                    <div class="chart_item_diff_value"
                         :class="((item[`${column2}`]-item[`${column1}`])>0?'up':'down')">
                        {{ (item[`${column2}`] - item[`${column1}`]) > 0 ? '+' : '' }}{{ (item[`${column2}`] - item[`${column1}`]).toFixed(1) }} млн
                    </div>
                    <div class="chart_item_diff_percent" >
                        {{ (item[`${column2}`] - item[`${column1}`]) > 0 ? '+' : '' }}{{
                            ((item[`${column2}`] - item[`${column1}`]) / item[`${column1}`] * 100).toFixed(1)
                        }} %
                    </div>

                </div>
                <div class="chart_item_diff_icon">
                    <v-icon :class="((item[`${column2}`]-item[`${column1}`])>0?'up':'down')">
                        {{ 'mdi-chevron-' + ((item[`${column2}`] - item[`${column1}`]) > 0 ? 'up' : 'down') }}
                    </v-icon>
                </div>
            </div>
            <div class="chart_item_columns">
                <div class="chart_item_column">
                    <div class="column-background" :style="'width:'+ item[`${column2}`] / maxValue * 100 +'%'"> </div>
                    <span>{{ item[`${column2}`].toFixed(1) }} млн $</span></div>
                <div class="chart_item_column">
                    <div class="column-background" :style="'width:'+ item[`${column1}`] / maxValue * 100 +'%'"></div>
                    <span>{{ item[`${column1}`].toFixed(1) }} млн $</span></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "myChart",
    props: {
        items: {
            type: [Object, Array],
            default: [{title: '', column1: 0.0, column2: 0.0}],
        },
        item_title: {type: String, default: 'title'},
        column1: {type: String, default: 'column1'},
        column2: {type: String, default: 'column2'},



    },
    data() {
        return {
            maxValue: 0,
        }
    },
    watch:{
        items:function(){
            console.log(this.maxValue);
            this.getMaxValue()
        }
    },
    mounted() {
        this.getMaxValue()
    },
    methods: {
        getMaxValue() {
            this.maxValue=0;
            this.items.forEach((item) => {
                if (this.maxValue < item[this.column1]) this.maxValue =parseFloat(JSON.parse(JSON.stringify(item[this.column1]))) ;
                if (this.maxValue < item[this.column2]) this.maxValue = parseFloat(JSON.parse(JSON.stringify(item[this.column2])));
            })
            this.maxValue = parseFloat(this.maxValue) * 1.10;
        }
    }
}
</script>

<style lang="scss" scoped>
$import-color: var(--mycolor); //#6794dc;
$export-color:#9ccbaf;
$arrow-down:#cb7575;

.chart-container {
    display: flex;
    max-width: 100%;
    position: relative;
    /* flex: 0 0 75%; */
    width: 100%;
    flex-direction: column;
    .legends{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-bottom: 20px;
        .legend{
            display: flex;
            margin: 0 5px;
            .color {
                width: 20px;
                height: 20px;
                background-color: $import-color;
                margin-right: 5px;
                border-radius: 5px;
            }
            &:nth-of-type(2) .color{
                background-color: $export-color;
            }
            .value{
                font-size: 16px;
            }
        }
    }

    .chart_item {
        align-items: center;
        width: 100%;
        flex: 0 0 100%;
        position: relative;
        margin: 0 0 12px 0;

        .chart_item_icon {
            font-size: 50px;
            display: flex;
            flex: 0 0 7%;
        }

        .chart_item_pname {
            display: flex;
            flex: 0 0 17%;
            text-align: left;
            font-weight: bold;
/*            padding: 0 5px;*/
            justify-content: flex-start;
            /* color: #d32b05; */
            /* background-color: #ae8839; */
            border-radius: 15px;
            color: #22201a;
            /* border-bottom: 1px solid #39ae69; */
            padding: 7px 10px;
            line-height: 15px;
            box-shadow: 0px 4px 4px 0px #39ae698c;
        }

        .chart_item_diff {
            display: flex;
            flex: 0 0 12%;
            justify-content: center;
            align-items: flex-start;

            .chart_item_diff_values {
                display: flex;
                flex-direction: column;
                align-items: center;

                .chart_item_diff_value {
                    font-size: 18px;
                    &.up{
                        color: $import-color;
                    }
                    &.down{
                        color: $arrow-down;
                    }
                }

                .chart_item_diff_percent {
                    font-size: 12px;
                    color: #a15825;
                }

            }

            .chart_item_diff_icon {
                display: flex;

                .v-icon {
                    font-size: 30px;
                    &.up{
                        color: $import-color;
                    }
                    &.down{
                        color: $arrow-down;
                    }
                }
            }
        }

        .chart_item_columns {
            display: flex;
            flex-direction: column;
            position: relative;
            flex: 0 0 63%;

            .chart_item_column {
                max-width: 100%;
                margin: 1px 0;
                display: flex;
                align-items: center;

                &:nth-of-type(2) {
                    .column-background {
                        background-color: $export-color;
                    }
                    span{
                        color: $export-color;
                    }
                }
                span{
                    color: $import-color;
                    font-weight: bold;
                    line-height: 12px;
                    display: flex;
                    flex: 0 0 93px;
                }

                .column-background {
                    background-color: $import-color;
                    width: 60%;
                    height: 20px;
                    border-radius: 5px 10px 10px 5px;
                    margin-right: 20px;
                    transition: 1s ease;
                    display: flex;
                    align-items: center;
                    span {
                        color: #fff;
                        margin-left: 20px;
                        font-size: 16px;
                        margin-top: 3px;
                    }

                    &:hover {
                        transform: translate(10px, 0);
                        transition: 0.5s ease;
                        background-color: #11582e !important;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
