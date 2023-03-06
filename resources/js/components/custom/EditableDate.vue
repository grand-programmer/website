<template>
  <v-text-field
    v-model="modelValue"
    v-bind="$attrs"
    v-mymask="'##-##-####'"
    :label="$props['label']?$props['label']:''"
  >
    <template #append>
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
              v-bind="attrs"
              v-if="$attrs['disabled']===true"
              color="default"
            >
              mdi-calendar-range
            </v-icon>
            <v-icon
              v-else
              v-bind="attrs"
              color="primary"
              v-on="on"
            >
              mdi-calendar-range
            </v-icon>
          </div>
        </template>
        <v-date-picker
          v-model="datepicker.date"
          :active-picker.sync="activePicker.date"
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          min="01-01-1950"
          @change="modelValue = JSON.parse(JSON.stringify(formatDate(datepicker.date)))"
        />
      </v-menu>
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
      }
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
    },
      watch: {
          'menu.date' (val) {
              val && setTimeout(() => (this.activePicker = 'YEAR'))
          },
      },

  }
</script>
