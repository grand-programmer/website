<template>
    <!--        :mode="custom"-->
    <ValidationProvider
        v-slot="{ errors}"
        :rules="rules"
        :name="title"
        tag="div"
        ref="field1"
        v-if="fieldType==='autocomplete'"
    >
        <span>{{ title }}</span>
        <input type="hidden" v-model="modelValue"/>
        <v-autocomplete :items="options" v-model="modelValue" :multiple="multiple" ref="myinputfield"
                        v-bind="$attrs"
                        v-if="edit" v-click-outside="fieldBlur">
        </v-autocomplete>
        <span v-else @click="edit=true">
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
        v-slot="{ validate,errors}"
        :rules="rules"
        :name="title"
        tag="div"
        ref="field1" v-else
    >
        <span>{{ title }}</span>
        <input type="hidden" v-model="modelValue"/>
        <span class="d-none" v-show="editable"></span>
        <v-text-field v-model="modelValue" ref="myinputfield"
                      v-click-outside="fieldBlur"
                      return-masked-value
                      v-bind="$attrs"
                      v-mask="'## ###-##-##'"
                      placeholder="78 123-45-67"
                      prefix="+998"
                      v-if="edit && type==='phone'">
        </v-text-field>
        <v-text-field v-model="modelValue" ref="myinputfield" v-click-outside="fieldBlur"
                      v-if="edit && type!=='phone'" :type="type">
        </v-text-field>
        <span @click="valueClick" v-if="!edit">{{ modelValue ? modelValue : '-' }}</span>
        <span class="red--text">{{ errors[0] }}</span>
    </ValidationProvider>
</template>

<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../locales/oz.json';

export default {
    name: "MyTextField",
    data: function () {
        return {
            edit: false
        }
    },
    model: {
        prop: "value",
        event: "input",
    },
    props: {
        //edit: false,
        name: null,

        value: {
            type: [String, Number, Object, Array],
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
        type: {
            type: String,
            default: "text",
        },
        multiple: {
            type: Boolean,
            default: true,
        },
        fieldType: {
            type: String,
            default: "text",
        },
        options: {
            type: [Object, Array],
            default: null
        }

    },
    mounted() {
        if(typeof this.$attrs.editable !=='undefined') this.edit=true;
    },
    methods: {
        custom() {
            return {on: ["search:blur", "input"]};
        },
        async fieldBlur() {
            const isValid = await this.$refs['field1'].validate()
            //console.log(isValid.valid)
            if (isValid.valid === true) {
                this.edit = false;
            } else this.edit = true;
        },
        async valueClick() {
            this.edit = true;
            this.$nextTick(() => this.$refs.myinputfield.focus())
        }
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
        editable:function(){
            //if(typeof this.$attrs.editable !=='undefined') this.edit=true;
            return this.$attrs.editable;
        },
        myOptionValues: function () {
            if (!this.modelValue || this.modelValue.count < 1) return null;
            let myapp = this;
            const languageValues = [];
            if(typeof myapp.options !=='undefined' && myapp.options ) {
                myapp.options.forEach(function (optionItem) {
                    if (Array.isArray(myapp.modelValue))
                        myapp.modelValue.forEach(function (value) {
                            if (optionItem.value === value) languageValues.push(optionItem.text);
                        })
                    else {
                        if (optionItem.value === myapp.modelValue) languageValues.push(optionItem.text);
                    }

                })
            }
            return languageValues;
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    }
}
</script>

