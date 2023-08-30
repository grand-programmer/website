<template>
  <v-text-field
    v-model="modelValue"
    v-bind="$attrs"
    v-mymask="'##-##-####'"
    :label="$props['label']?$props['label']:''"
  >
    <template #prepend-inner>
      <v-menu
        ref="date_menu"
        v-model="menu.date"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <div>
            <v-icon
              v-if="$attrs['disabled']===true"
              v-bind="attrs"
              color="default"
            >
              mdi-calendar-range
            </v-icon>
            <v-icon
              v-else
              v-bind="$attrs"
              :color="$attrs['color']?$attrs['color']:''"
              v-on="on"
            >
              mdi-calendar-range
            </v-icon>
          </div>
        </template>
        <v-date-picker
          v-model="datepicker.date"
          :active-picker.sync="activePicker.date"
          :max="maxValue"
          :min="minValue"
          @change="modelValue = JSON.parse(JSON.stringify(formatDate(datepicker.date)))"
        />
      </v-menu>
    </template>
    <template #append-outer>
      <slot name="append-outer" />
    </template>
  </v-text-field>
</template>

<script>
  import { mask } from 'vue-the-mask'
  export default {
    name: 'EditableDate',
    // eslint-disable-next-line vue/require-prop-types
    // props: ['modelValue', 'label'],
    directives: { mymask: mask },
    props: {
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        menu: {
          date: null
        },
        datepicker: {
          date: null
        },
        activePicker: {
          date: null
        }
      }
    },
    computed: {
      modelValue: {
        get () {
          return this.value
        },
        set (value) {
          if (this.isValidDate(value)) {
            this.$emit('input', value)
            this.datepicker.date = (value.length === 10) ? this.formatDate(value, true) : this.datepicker.date
          }
        }
      },
      minValue () {
        return this.$attrs.min ? this.getFormattedDate(this.$attrs.min) : '01-01-1950'
      },
      maxValue () {
        return this.$attrs.max ? this.getFormattedDate(this.$attrs.max) : (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      }
    },
    watch: {
      handle (val, oldVal) {
        // console.log(val)
      },
      deep: true
    },
    methods: {
      formatDate (date, desc = false) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        if (desc) {
          return `${day}-${month}-${year}`
        } else {
          return `${day}-${month}-${year}`
        }
      },
      getFormattedDate (cDay) {
        // Get current date
        var currentDate = new Date()
        if (cDay === -1) return undefined
        // Add 5 days
        currentDate.setDate(currentDate.getDate() + cDay)

        // Format the date as "d-m-Y"
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1 // Months are zero-based
        var year = currentDate.getFullYear()

        // Pad day and month with leading zeros if needed
        if (day < 10) {
          day = '0' + day
        }
        if (month < 10) {
          month = '0' + month
        }
        // Format the date string as "d-m-Y"
        return year + '-' + month + '-' + day
      },
      isValidDate: function (dateStr) {
        const s = dateStr.split('-')
        const d = new Date(s[2], s[1] - 1, s[0])
        if (Object.prototype.toString.call(d) === '[object Date]') {
          if (!isNaN(d.getTime()) && d.getDate() === parseInt(s[0]) &&
            d.getMonth() === (s[1] - 1)) {
            return true
          }
        }
        return false
      }
    }

  }
</script>
