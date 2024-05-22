<template>
    <ValidationProvider :name="title"
                        :rules="rules"
                        tag="div"
                        v-slot="{ errors }">
        <v-text-field
            :label="rules.includes('required')?title + ' *':title"
            v-bind="$attrs"
            :type="type"
            v-on="$listeners"
            :hint="hint.length>0?hint:title"
            v-model="modelValue"
            v-if="mask"
            v-mask="mask"
        >
            <template v-slot:label>
<!--                <span :style="(typeof $attrs['prepend-inner-icon'] !=='undefined'?'left:-25px;':'')">-->
                <template v-if="rules.includes('required')"> {{ title }} <span style="color: red">*</span></template>
                <template v-else> {{ title }}</template>

            </template>
        </v-text-field>
        <v-text-field
            :label="rules.includes('required')?title + ' *':title"
            v-bind="$attrs"
            :type="type"
            v-on="$listeners"
            :hint="hint"
            v-model="modelValue"
            v-else
        >
            <template v-slot:label>
<!--                <span :style="(typeof $attrs['prepend-inner-icon'] !=='undefined'?'left:-25px;':'')">-->
                <template v-if="rules.includes('required')"> {{ title }} <span style="color: red">*</span></template>
                <template v-else> {{ title }}</template>

            </template>
        </v-text-field>
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
    setup(props, ctx) {
       // console.log(slots)
        const parentSlots = computed(() => Object.keys(ctx.slots))
        return {parentSlots}
    },
    name: "text-field",
    model: {
        prop: "value",
        event: "input",
    },
    props: {
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
        mask: {
            type: String
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
        hint: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            parentSlots: null
        }
    },
    methods: {
        custom() {
            return {on: ["search:blur", "input"]};
        },
        initialize() {
            /// console.log(this.$slots);

        }
    },
    mounted() {
        this.initialize();
        this.value = this.modelValue
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
