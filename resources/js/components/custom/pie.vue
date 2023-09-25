<template>
  <div
    v-if="datamerchItems && datamerchItems.length > 0"
    style="height: 130px; margin-top: -10px"
  >
    <highcharts :options="getChartData()" />
  </div>
</template>

<script>
  import Highcharts from 'highcharts-vue'

  export default {
    name: 'PiChart',
      props:{
        color: {
            type: String,
            default: '#FEAA47'
        },
        percent: {
            type: Number,
            default: 20
        },
        price: {
            type:Number,
            default: 1000
        },
      },
    data () {
      return {
        total: 0,
        dataMerch: [],
        dataAPI: [
          {
            val: this.$props.price * this.$props.percent,
            name: 'Ундирилган'
          },
          {
            val: this.$props.price * (100 - this.$props.percent),
            name: 'Ҳисобланган'
          }
        ]
      }
    },
    computed: {
      datamerchItems () {
        return this.dataMerch
      }
    },
    created () {
      this.getDataFromAPI()
    },
    methods: {
      getChartData () {
        const _this = this
        // console.log(this.total)
        return {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            margin: [0, 0, 0, 0],
            height: 140,
            width: 140
          },
          title: {
            text: "<p>&nbsp;&nbsp;</p> <p style='font-size:10pt; text-align: center;'> " + this.total + ' % </p><br><p style="font-size:10pt; text-align: center;">' + this.$t('улуш') + '</p>',
            align: 'center',
            verticalAlign: 'middle',
            y: 15,
            style: {color: this.$props.color }
          },
          tooltip: {
              enabled: false,
            // /pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            useHTML: true,
            formatter: function () {
              console.log(this) // just to see , what data you can access
              return this.key + ' - <b>' + (_this.formatNumber(this.y)) + ' (' + this.percentage.toFixed(2) + '%) </b>'
            }
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              startAngle: 0,
              colors: [this.$props.color,'#DBE6EE'],
              dataLabels: {
                enabled: false,
                align: 'top',
                // format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                formatter: function () {
                  // if (this.key === 'Ундирилган') return null
                  return this.key + '<br>' + this.percentage.toFixed(2) + '%'
                },
                style: {
                  color:
                  this.$props.color
                }
              }
            }
          },
          series:
            [
              {
                name: 'Prosentase',
                colorByPoint: true,
                innerSize: '70%',
                data: this.dataMerch
              }
            ]
        }
      },
      getDataFromAPI () {
        this.dataMerch = []
          this.total = this.percent
          this.total = this.total.toFixed(2)
        this.dataAPI.forEach(element => {
          this.dataMerch.push({
            name: (element.name !== null) ? element.name : '',
            y: element.val
          })
        })
      },
      formatNumber (amount, decimalCount = 2, decimal = '.', thousands = ' ') {
        try {
          decimalCount = Math.abs(decimalCount)
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount

          const negativeSign = amount < 0 ? '-' : ''

          const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
          const j = (i.length > 3) ? i.length % 3 : 0

          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>
<style>
.highcharts-credits{
  display: none;
}
</style>
