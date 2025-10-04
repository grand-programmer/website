import Vue from 'vue'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import {
  email,
  max,
  min,
  numeric,
  required,
} from 'vee-validate/dist/rules'

extend('email', email)
extend('max', max)
extend('min', min)
extend('numeric', numeric)
extend('required', required)

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)



import * as rules from 'vee-validate/dist/rules';
import messages from '../locales/oz.json';
import messages_ru from '../locales/ru.json';
import messages_en from '../locales/en.json';
import messages_uz from '../locales/uz.json';
import i18n from "../i18n";


const m = {
  oz: {
    messages: {...messages.messages}},
  ru: {
    messages: {...messages_ru.messages}
  },
  uz: {
    messages: {...messages_uz.messages}
  },
  en: {
    messages: {...messages_en.messages}
  }
}
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: m[i18n.locale].messages[rule] // assign message

  });
});
