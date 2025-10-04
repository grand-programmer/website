<template>
    <div>
        <!---BEGIN ishlab chiqaruvchi -->
        <v-col cols="12 d-flex align-items-center">
            <h5 class=" pb-2">
                {{$t('Ишлаб чиқарувчи')}} *
            </h5>

            <v-btn
                class="ml-5"
                color="primary"
                rounded
                dark
                @click="openIshChiq"
            >
                <v-icon large class="mr-2 " style="font-size: 15px">
                    mdi-plus
                </v-icon>

                {{$t('Қўшиш')}}
            </v-btn>

        </v-col>


        <v-chip-group
            column
        >


            <v-chip
                v-for="(ishchiqItem,key) in ishlab_Chiqaruvchilar"
                :key="key"
                class="ma-2"
                close
                outlined
                :color="(typeof errors[key] !=='undefined')?'red':'green'"
                v-if="ishchiqItem.nomi"
                @click="openIshChiq(key)"
                @click:close="ishlabchiqaruvchilar.splice(key,1)"
            >

                                                                <span style="font-size: 18px">{{
                                                                        ishchiqItem.nomi
                                                                    }}</span>
            </v-chip>
        </v-chip-group>
        <ValidationProvider v-show="total_errors.length>0"
                            ref="ishlab_chiqaruvchi_umumiy"
                            v-slot="{ errors }">
            <span class="red--text">{{ errors[0] }}</span>
        </ValidationProvider>

        <!---- END Ishlab chiqaruvchi --->
        <v-dialog
            v-model="dialog"
            max-width="900px"

        >


            <v-card>
                <v-card-title>
                                                            <span
                                                                class="text-h5">{{$t('Ишлаб чиқарувчи тўғрисида маълумотлар')}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container class="w-100 m-0 p-4">

                        <ValidationObserver v-slot="{ invalid }"
                                            ref="ishlabchiqarilgan"
                                            tag="div" class="row">
                            <v-col cols="4">
                                <text-field
                                    :title="$t('Ишлаб чиқарувчининг номи')"
                                    rules="required"
                                    v-model="ishchiq.nomi"
                                    persistent-placeholder
                                />
                            </v-col>
                            <v-col cols="4">
                                <text-field
                                    :title="$t('Ишлаб чиқарувчининг манзили')"
                                    rules="required"
                                    v-model="ishchiq.manzili"
                                    persistent-placeholder
                                />
                            </v-col>

                            <v-col cols="4">
                                <text-field
                                    :title="$t('Ишлаб чиқарувчининг телефон рақами')"
                                    rules="required"
                                    v-model="ishchiq.phone"
                                    v-mask="'+998 ## ### ## ##'"
                                    persistent-placeholder>
                                </text-field>
                            </v-col>
                            <v-col cols="4">
                                <text-field
                                    :title="$t('Ишлаб чиқарувчининг email манзили')"
                                    rules="required|email"
                                    type="email"
                                    v-model="ishchiq.mail"
                                    persistent-placeholder>
                                </text-field>
                            </v-col>
                        </ValidationObserver>

                    </v-container>
                    <small>{{$t('* майдонлар тўлдирилиши шарт')}}</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        {{$t('Бекор қилиш')}}
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="saveIshChiq"
                    >
                       {{ $t('Сақлаш') }} 
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div v-show="ishlab_Chiqaruvchilar" ></div>
    </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import TextField from "./textfield";

export default {
    name: "dialog-chips",
    model: {
        prop: "value",
        event: "input",
    },
    props: {
        value: {
            type: Array,
            default: () => []
        },
    },

    error: {
        type: Array,
        default: () => []
    },
    total_error: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default:"Илова қилинадиган ҳужжатлар",
    },
    hint: {
        type: String,
        default: "",
    },
    data() {
        return {
            boolDialogIshChiqNew: -1,
            ishlabchiqaruvchilar: [],
            dialog: false,
            umumiy: this.$attrs.total_error,
            ishchiq: {
                nomi: "",
                manzili: "",
                phone: "",
                mail: "",
            },
            NullIshChiq: {
                nomi: "",
                manzili: "",
                phone: "",
                mail: "",
            },
            valid: true,
            openedKey: null,
        }
    },
    watch: {
        /*        umumiy(val){
                    const _this=this;

                    if (val.length > 0) {
                        //console.log(_this.$refs['ishlab_chiqaruvchi_umumiy']);

                       /// console.log(val);
                        _this.$refs["ishlab_chiqaruvchi_umumiy"].applyResult({
                            errors: [val], // array of string errors
                            valid: false, // boolean state
                            failedRules: {} // should be empty since this is a manual error.
                        })
                    }
                }*/
    },
    computed: {
        ishlab_Chiqaruvchilar() {
                this.ishlabchiqaruvchilar = this.$props.value;
                return this.$props.value;

        },
        errors() {

/*            this.$attrs.error.forEach((item, key) => {
                console.log(item)
/!*                console.log(item.size())
                if (item.length<1) delete this.$attrs.error[key]*!/
            })*/
            return this.$attrs.error;
            /*            get() {
                            console.log(this.$attrs.error)
                            console.log('this.errors')
                            return this.$attrs.error
                        },
                        set(value) {
                            this.$emit('update:errorsValue', value)
                        }*/
        },
        total_errors() {
            const _this = this;
            if (_this.$attrs.total_error.length < 1) _this.valid = true;
            setTimeout(async () => {
                //let isValid= await _this.$refs['ishlab_chiqaruvchi_umumiy'].validate();
                if (_this.$attrs.total_error.length > 0 && _this.valid) {
                    _this.valid = false;

                    _this.$refs["ishlab_chiqaruvchi_umumiy"].applyResult({
                        errors: [_this.$attrs.total_error], // array of string errors
                        valid: false, // boolean state
                        failedRules: {} // should be empty since this is a manual error.
                    })
                    //_this.umumiy="";

                }
            })
            return _this.$attrs.total_error;


            /*            get() {
                            console.log(this.$attrs.error)
                            console.log('this.errors')
                            return this.$attrs.error
                        },
                        set(value) {
                            this.$emit('update:errorsValue', value)
                        }*/
        }
    },
    mounted() {
        this.createWatcher('dialog');
        this.ishlabchiqaruvchilar = JSON.parse(JSON.stringify(this.$props.value));
    },

    methods: {
        dialogOPenedOrClosed(val) {
            const _this = this;
            if (val === true) {

                if (Object.keys(_this.errors).length > 0 && typeof _this.errors[_this.openedKey] !== 'undefined') {

                    _this.$refs['ishlabchiqarilgan'].setErrors(_this.errors[_this.openedKey])
                } else _this.$refs['ishlabchiqarilgan'].reset();

            } else {
                _this.openedKey = null;
                //_this.$refs["ishlab_chiqaruvchi_umumiy"].reset();
                //  _this.$refs["ishlabchiqarilgan"].reset();


                _this.$attrs.total_error = "";

            }
        },
        createWatcher(key) {
            const _this = this
            this.$watch(key, (val) => {
                if (key === 'dialog') {
                    //console.log('val')
                    // console.log(val)
                    _this.dialogOPenedOrClosed(val)
                }

            })

        },


        removeWatcher(key) {
            let unwatch = this.$watch(key);
            unwatch();

        },
        setIshlabCHiqarishErrors(errors = []) {

        },
        openIshChiq(id = null) {
            const _this = this;
            // console.log(id);
            if (id === null || typeof id === 'object') {
                if (this.boolDialogIshChiqNew !== -1) {
                    this.ishchiq = JSON.parse(JSON.stringify(this.NullIshChiq))
                }
                this.boolDialogIshChiqNew = -1;
                this.openedKey = null;
            } else {

                // if (this.boolDialogIshChiqNew !== id) {
                this.ishchiq = JSON.parse(JSON.stringify(this.ishlabchiqaruvchilar[id]))
                // }
                if (typeof id === 'undefined') id = 0;
                _this.openedKey = JSON.parse(JSON.stringify(id));
                //_this.$refs['ishlabchiqarilgan'].setErrors(_this.errors[_this.openedKey])
                _this.boolDialogIshChiqNew = JSON.parse(JSON.stringify(id));
            }
            this.dialog = true;
            /*            setTimeout(() => {
                            if (typeof this.$refs['ishlabchiqarilgan'] !== 'undefined')
                                this.$refs['ishlabchiqarilgan'].reset()

                        });*/
        },
        async saveIshChiq(id = null) {
            const _this = this;
            let isValid = false;
            if (id === null || typeof id === 'object') {
                     isValid = await this.validateField("ishlabchiqarilgan");
                    if (isValid) {
                        if (_this.boolDialogIshChiqNew >= 0) {
                            if (typeof _this.ishlabchiqaruvchilar[_this.boolDialogIshChiqNew] !== 'undefined')
                                _this.ishlabchiqaruvchilar[_this.boolDialogIshChiqNew] = _this.ishchiq;
                        } else {
                            //console.log(_this.ishchiq)
                            _this.ishlabchiqaruvchilar.push(JSON.parse(JSON.stringify(_this.ishchiq)));
                            _this.ishchiq = JSON.parse(JSON.stringify(_this.NullIshChiq))
                        }
                        if (typeof _this.$refs['ishlabchiqarilgan'] !== 'undefined')
                            _this.$refs['ishlabchiqarilgan'].reset()

                        _this.$refs['ishlab_chiqaruvchi_umumiy'].reset()

                        _this.$emit("errors-changed", "");

                        _this.dialog = false;

                    }


            } else {
                // console.log(id)

            }
            _this.openedKey = null;
            _this.$emit("input", _this.ishlabchiqaruvchilar);

        },
        async validateField(field) {
            let provider = this.$refs[field];
            if (Array.isArray(provider)) provider = provider[0];
            // Validate the field
            if (provider) return await provider.validate()
            /*.then(()=>{
            console.log(provider.errors);
        });*/
        },
    }, components: {
        ValidationProvider,
        ValidationObserver,
        TextField
    }

}
</script>

<style scoped>

</style>
