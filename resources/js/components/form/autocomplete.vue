<template>
    <ValidationProvider :name="title"
                        :rules="rules"
                        tag="div"
                        v-slot="{ errors }">

        <v-autocomplete

            v-model="modelValue"
            :label="rules.includes('required')?title + ' *':title"
            v-bind="$attrs"
            :hint="hint.length>0?hint:title"
            :items="options"
            allow-overflow
        >
            <template v-slot:label >
                <template v-if="rules.includes('required')"> {{title}} <span style="color: red">*</span></template>
                <template v-else> {{title}} </template>
            </template>
            <template v-slot:item="data" v-if="typeof $attrs.countryfield !=='undefined'">
                <template
                    v-if="typeof data.item !== 'object'">
                    {{ data.item }}
                </template>
                <template v-else>

                    <flag :iso="data.item.code"
                          style="font-size: 20px"/>
                    <span
                        class="ml-4">{{
                            data.item.text
                        }}</span>


                </template>
            </template>
            <template v-slot:selection="data" v-if="typeof $attrs.countryfield !=='undefined'">
                <template
                    v-if="typeof data.item !== 'object'">
                    {{ data.item }}
                </template>
                <template v-else>

                    <flag :iso="data.item.code"
                          style="font-size: 20px"/>
                    <span
                        class="ml-4">{{
                            data.item.text
                        }}</span>


                </template>
            </template>

        </v-autocomplete>

        <span class="red--text">{{ errors[0] }}</span>
    </ValidationProvider>
</template>

<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../locales/oz.json';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "autocomplete-field",
    model: {
        prop: "value",
        event: "input",
    },
    props: {
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
        options:{
            type:[Object,Array],
            default:null,
        },
        hint: {
            type: String,
            default: "",
        },
    },
    methods:{
        myselect(item){
          this.modelValue=item.value;
        },
        filterObject(item, queryText, itemText) {
            return true;
            /*return (
                item.prop1.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
                -1 ||
                item.prop2.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
            );*/
        }
    },
    data(){
        return {
            parentSlots:null
        }
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
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    }
}
</script>

<style scoped>

</style>
