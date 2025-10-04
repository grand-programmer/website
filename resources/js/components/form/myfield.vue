<template>
    <!--        :mode="custom"-->

    <ValidationProvider
        v-slot="{ errors}"
        :rules="rules"
        :mode="custom"
        :name="title"
        tag="div"
        v-if="fieldType==='autocomplete'"
    >
        <span>{{ title }}</span>
        <input type="hidden" v-model="modelValue"/>
        <v-autocomplete :items="options" v-model="modelValue" multiple
                        v-if="edit!==false">
        </v-autocomplete>
        <span v-else>
        <template v-if="modelValue && modelValue.length > 0">
             <template
                 v-for="language in myOptionValues.join(', ')">{{
                     language
                 }}</template>
        </template>
        <template v-else>-</template>

            </span>

        <span class="red--text">{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider
        v-slot="{ errors}"
        :rules="rules"
        :mode="custom"
        :name="title"
        tag="div"
        v-else
    >
        <span>{{ title }}</span>
        <input type="hidden" v-model="modelValue"/>
        <v-text-field v-model="modelValue"
                      return-masked-value
                      v-mask="'## ###-##-##'"
                      placeholder="78 123-45-67"
                      prefix="+998"
                      v-if="edit!==false && type==='phone'">
        </v-text-field>
        <v-text-field v-model="modelValue"
                      v-if="edit!==false && type!=='phone'" :type="type">
        </v-text-field>
        <span v-if="edit===false">{{ modelValue }}</span>
        <span class="red--text">{{ errors[0] }}</span>
    </ValidationProvider>
</template>

<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../locales/oz.json';

export default {
    name: "MyTextField",
    model: {
        prop: "value",
        event: "input",
    },
    props: {
        edit: true,
        name: null,

        value: {
            type: [String, Number, Object,Array],
            default: null,
        },
        title: {
            type: String,
            required: true,
        },
        rules: {
            type: String,
            default: "",
        },
/*        item_text:
{
    type: String,
    default:"text"
},
        item_value: {
            type: String,
            default:"value"
        },*/
        type: {
            type: String,
            default: "text",
        },
        fieldType: {
            type: String,
            default: "text",
        },
        options:{
            type:[Object,Array],
            default:null
        }

    },
    methods: {
        custom() {
            return {on: ["search:blur", "input"]};
        },
    },
    mounted(){
        this.value=this.modelValue
    },
    computed: {
        modelValue: {
            get() {
                return this.value;
            },
            set(newModelValue) {
                this.$emit("input", newModelValue);
                this.$emit("change", newModelValue);
            },
        },
        myOptionValues: function () {
            if (!this.modelValue || this.modelValue.count < 1) return null;
            let myapp = this;
            const languageValues = [];
            myapp.options.forEach(function (optionItem) {
                myapp.modelValue.forEach(function (value) {
                    if (optionItem.value === value) languageValues.push(optionItem.text);
                })

            })
            return languageValues;
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    }
}
</script>

