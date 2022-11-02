<template>
    <v-row class="">
        <v-col cols="12" class="position-relative">
            <div
                class="border-bottom-dashed chips-dialog"
                @click="openDocumentType"
            >
                <span>{{ label }}: {{ typeof $attrs.norequired !== 'undefined' ? '' : '*' }}</span>
                <v-chip-group
                    mandatory
                    style="height: 42px" class="d-block"

                >
                    <v-chip

                        v-for="(doc,key) in modelVal"
                        :key="key"
                        v-if="modelVal && typeof modelVal[key]!=='undefined' && typeof modelVal[key].id!=='undefined' && modelVal[key].id && modelVal[key].type && modelVal[key].valid && modelVal[key].id.length ===13"
                        @click:close="removeDocument(key)"
                    >
                        <template slot="default">
                            <span class="v-chip__content" style="font-size: 15px">{{ modelVal[key].type }}</span>
                        </template>
                    </v-chip>
                </v-chip-group>
            </div>

            <v-input
                :messages="[hint?hint:label]"
            />
            <ValidationProvider
                ref="hujjatilova"
                :rules="typeof $attrs.norequired !=='undefined'?'':'required'"
                :name="label"
                v-slot="{ errors }" v-show="ilovaError">
                <input type="hidden" v-model="value"/>
                <span class="error--text">{{ errors[0] }}</span>
            </ValidationProvider>


        </v-col>
        <v-dialog
            v-model="dialog"
            max-width="700px"

        >

            <v-card class="scroll_card" light>
                <v-card-title class=" px-4 py-4">
                    <span class="text-h5 white--text">{{ label }} </span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-fab-transition>

                                    <v-btn
                                        color="primary"
                                        dark
                                        center
                                        large
                                        class="float-end"
                                        v-if="multiple"
                                        @click="AddDocument"
                                        style="height:35px;"
                                    >

                                        <v-icon>mdi-plus
                                        </v-icon>
                                        Файл Қўшиш

                                    </v-btn>
                                </v-fab-transition>
                                <a class="float-left"
                                   style="border: 2px dashed;  width:50%; border-radius: 15px; padding: 10px 20px 5px;"
                                   @click="authorizeToEArxiv">Э-архив
                                    тизимига
                                    ўтиш </a>

                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <ValidationObserver v-slot="{ invalid }"
                                            :ref="'create_customs_documents'"
                                            style="display: flex; flex-direction: column-reverse"
                        >
                            <v-row
                                v-for="(doc,key) in documents"
                                :key="key">

                                <v-col cols="12">
                                    <ValidationProvider
                                        name="ID рақами"
                                        v-slot="{ errors }">
                                        <v-text-field
                                            v-model="documents[key].id"
                                            label="ID рақами"
                                            persistent-hint
                                            loading
                                            counter="13"
                                            @keyup="myColor(documents[key].id,key)"
                                            hint="Ҳужжатнинг е-архив тизимидаги Fayl ID рақами"
                                        >
                                            <template v-slot:append>
                                                <v-icon
                                                    color="primary"
                                                    v-if="documents[key].valid">
                                                    mdi-check
                                                </v-icon>
                                                <v-icon color="red"
                                                        v-else>
                                                    mdi-close
                                                </v-icon>
                                            </template>
                                            <template
                                                v-slot:append-outer v-if="multiple">
                                                <v-btn
                                                    color="danger"
                                                    dark
                                                    center
                                                    x-small
                                                    fab>
                                                    <v-icon
                                                        @click="removeDocument(key)">
                                                        mdi-minus
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            <template
                                                v-slot:progress>
                                                <v-progress-linear
                                                    :value="Initprogress(documents[key].id)"
                                                    :color="documents[key].color"
                                                    absolute
                                                    height="3"
                                                ></v-progress-linear>
                                            </template>
                                        </v-text-field>
                                        <span class="red--text">{{
                                                errors[0]
                                            }}</span>
                                    </ValidationProvider>
                                </v-col>
                            </v-row>
                        </ValidationObserver>
                    </v-container>
                    <small>* майдонлар тўлдирилиши шарт</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Ёпиш
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
        <form ref="arxivSubmit" action="https://ed2.customs.uz/E_ARXIV/authentication"
              method="post" target="_blank" class="d-none">
            <v-text-field type="hidden" id="SessionID" v-model="arxiv.session" name="SessionID"/>
            <br/>
            <v-text-field type="hidden" id="serialNumberHex" v-model="arxiv.serial" name="serialNumberHex"/>
            <br/>
            <v-text-field type="hidden" id="INN" name="INN" v-model="arxiv.inn"/>
            <br/>
            <v-text-field type="hidden" id="YUR_INN" v-model="arxiv.yur_inn" name="YUR_INN"/>
            <br/>
            <v-text-field type="hidden" id="PNFL" :value="arxiv.pnfl" name="PNFL"/>
            <br/>
            <v-text-field type="hidden" id="username" v-model="arxiv.username" name="username"/>
            <br/>
            <v-text-field type="hidden" id="ETR" name="ETR" value="ETR"/>
            <br/>
            <v-text-field type="hidden" v-show="modelVal"/>
            <br/>
            <!--            <input type="hidden" id="FOLDER_ID" name="FOLDER_ID" value="0058338434">-->

        </form>
    </v-row>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    name: "e-arxiv-file",
    model: {
        prop: "value",
        event: "input",
    },
    props: {

        /*openDocumentMethod: {
            type: String,
            required: true,
            default: null,
        }*/
        value: {
            type: Array,
            default: () => [{}]
        },
        label: {
            type: String,
            default: "Илова қилинадиган ҳужжатлар",
        },
        hint: {
            type: String,
            default: "",
        },
        errors: {
            type: String,
            default: "",
        },
        arxiv: {
            type: Object,
            default: () => {
                return {
                    session: null,
                    serial: null,
                    inn: null,
                    yur_inn: null,
                    pnfl: null,
                    username: null,
                }
            }
        },


    },
    created() {
        const _this = this;
        //this.value = this.modelValue
        //console.log('multiple 1'+ this.value )
        if (typeof _this.value[0] !== 'undefined' && typeof _this.value[0].id !== 'undefined' && typeof _this.value[0].type !== 'undefined') {
            _this.documents = [];
            _this.value.forEach((document, k) => {
                if (typeof document !== 'undefined' && typeof document.id !== 'undefined' && typeof document.type !== 'undefined' && typeof document.valid !== 'undefined' && document.id.length === 13 && document.type && document.valid === true) {
                    _this.documents.push({
                        id: document.id,
                        type: document.type,
                        valid: document.valid,
                        //color: 'default',
                    });
                }

            })

            if (typeof _this.documents.length < 1) {
                _this.documents = [{}];
            }

        } else this.documents = [{
            id: null,
            type: null,
        }]
        if (typeof this.$attrs['multiple'] !== 'undefined') {
            this.multiple = true;
        }

    },
    methods: {
        openDocumentType() {
            this.$refs["hujjatilova"].applyResult({
                errors: [], // array of string errors
                valid: true, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            })
            //this.documents = [];
            //let object = this.filterObject(this.application.tovarlar, this.tovarIndex, 'id')
            //if (object)
            {
                //  this.documents = this.modelValue;
            }
            this.dialog = true;
        },
        AddDocument() {
            //console.log(this.documents)
            this.documents.push(
                {
                    id: null,
                    type: null,
                }
            );
        },
        isValidDoc(index = null) {
            if (index) {
                return !(!this.documents[index].id || !this.documents[index].type)
            } else {
                var returnDoc = true;
                if (typeof this.documents !== 'undefined' && this.documents && !this.documents.length) {
                    return false;
                }
                if (typeof this.documents !== 'undefined')
                    this.documents.forEach((document, k) => {
                        returnDoc = (document.id && document.type)
                        if (!returnDoc) {
                            return false;
                        }
                    })
                return !returnDoc;
            }
        },
        Initprogress(val) {
            if (val && typeof val !== 'undefined')
                return Math.min(100, val.length * 8)
            else return 0;
        },
        async myColor(val, key) {
            const _this = this;
            let fileIsset = [];
            if (typeof this.documents[key] !== 'undefined' && this.documents[key]['id'] === val) this.documents[key].color = 'success';
            if (typeof val !== 'undefined' && val && val.length === 13) {
                fileIsset = await this.checkFile(val)
                if (fileIsset && typeof fileIsset !== 'undefined' && typeof fileIsset[0] !== 'undefined' && fileIsset.length > 0) {
                    if (typeof this.documents !== 'undefined' && typeof this.documents[key] !== 'undefined') {
                        /*                        this.modelValue[key]['id'] = val;
                                                this.modelValue[key]['type'] = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;*/
                        this.documents[key].id = val;
                        this.documents[key].type = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;
                    } else {
                        /*
                                                this.modelValue.push({
                                                    id: val,
                                                    type: fileIsset[0].cd_id + " - " + fileIsset[0].file_num
                                                });*/
                        this.documents[key].id = val;
                        this.documents[key].type = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;

                    }
                } else {
                    this.documents[key].color = 'warning';
                    this.documents[key].valid = false;

                }
            } else {
               // console.log(key)
                this.value.splice(key, 1);
                this.documents[key].color = 'warning';
                this.documents[key].valid = false;
            }
            if (typeof val !== 'undefined' && val && val.length < 13) {
                this.documents[key].color = ['error', 'warning'][Math.floor(this.Initprogress(val) / 50)]
                this.documents[key].valid = false;
            }
        },
        async checkFile(file_id) {
            if (!file_id || file_id.length !== 13) return false;
            let response = null;
            response = await axios.get('/api/v1/ex_api/arxiv?file_id=' + file_id + '&pnfl=' + this.$auth.user().pin);
            if (response && response.data && response.data.count) {
                return response.data.data;
            }
            return false;
        },
        removeDocument(document) {
            //this.value.splice(document, 1);
            this.documents.splice(document, 1);
        },
        authorizeToEArxiv() {
            const _this = this;
            setTimeout(async () => {
                let result_data = null;
                result_data = await this.getSessionId()
                if (result_data && result_data.status === 200 && typeof result_data.data.data.sesid !== 'undefined') {

                    _this.arxiv.session = result_data.data.data.sesid;                            //_this.$refs['arxivSubmit'].
                    _this.arxiv.serial = result_data.data.data.serialnumber;                     //_this.$refs['arxivSubmit'].
                    _this.arxiv.inn = result_data.data.data.userinn;                             //_this.$refs['arxivSubmit'].
                    _this.arxiv.pnfl = _this.$auth.user().pin;                                 //_this.$refs['arxivSubmit'].
                    _this.arxiv.username = result_data.data.data.name.replaceAll("", "'");      //_this.$refs['arxivSubmit'].
                    //_this.$refs['arxivSubmit'].arxiv.session= result_data.data.data.sesid;
                    /*$("#serialNumberHex").attr('value', result_data.data.data.serialnumber)
                    //$("#serialNumberHex").attr('value',result_data.data.data.serialnumber)
                    $("#INN").attr('value', result_data.data.data.userinn)
                    $("#PNFL").attr('value', _this.$auth.user().pin)

                    $("#username").attr('value', result_data.data.data.name.replaceAll("", "'"))*/
                    //_this.$refs['arxivSubmit'].arxiv.session='sadasd';
                    //_this.$refs['arxivSubmit'].append('SessionID',result_data.data.data.sesid)
                    //_this.$refs['arxivSubmit'].append('serialNumberHex',_this.arxiv.serial)
                    //_this.$refs['arxivSubmit'].append('INN',_this.arxiv.inn)
                    //_this.$refs['arxivSubmit'].append('YUR_INN',_this.arxiv.yur_inn)
                    //_this.$refs['arxivSubmit'].append('PNFL',_this.arxiv.pnfl)
                    //_this.$refs['arxivSubmit'].append('username',_this.arxiv.username)
                    this.$nextTick(() => {
                        _this.$refs['arxivSubmit'].submit();
                    })

                }
            })

        },
        async getSessionId() {
            let returnObject;
            await axios.get("/api/v1/ex_api/gen_session").then(function (response) {
                returnObject = response;
            })
            return returnObject;
        },
    },
    data() {
        return {
            documents: [],
            dialog: false,
            multiple: false,
            myValue: this.$props.value,
            myArray: [],

        }
    },
    computed: {
        modelVal() {

            const _this = this;
            //this.documents=this.$props.value;
            if (this.$props.value.length > 0) {
                //this.documents = [];
                this.$props.value.forEach((item, key) => {

                    if (typeof item['id'] !== 'undefined') {
                        setTimeout(async () => {
                            let validDoc = await this.checkFile(item['id']);
                            if (item['id'] && (item['id']).length === 13 && validDoc) {

                                if (validDoc[0] === 'undefined') {
                                   // console.log('return');
                                    return;
                                }
                                this.$props.value[key] = {
                                    id: item['id'],
                                    valid: true,
                                    type: validDoc[0]['cd_id'] + ' - ' + validDoc[0]['file_num']
                                }
                                _this.documents[key] = {
                                    id: item['id'],
                                    valid: true,
                                    type: validDoc[0]['cd_id'] + ' - ' + validDoc[0]['file_num']
                                }
                            }
                        })
                    }


                })
            }
            //console.log(this.documents.length)
            this.$nextTick(() => {
                let size = Object.keys(this.documents).length;
                if (this.documents && size < 1 && typeof this.documents[0] !== 'undefined' && typeof this.documents[0].id === 'undefined' && typeof this.documents[0].valid === 'undefined') {
                   // console.log('asd');
                    this.documents = [{}];
                }
            })
            //this.documents = JSON.parse(JSON.stringify(this.$props.value));
            return this.$props.value;
        },
        /* modelValue: {
             get() {
                 if (typeof this.value !== 'undefined' && typeof this.value[0] !== 'undefined' && typeof this.value[0].id !== 'undefined')
                     return this.value;
                 else return this.value = [{}];
             },
             set(newModelValue) {
                 //this.value= newModelValue;
                 this.$emit("input", newModelValue);
                 this.$emit("change", newModelValue);
             },
         },*/
        progress(val) {
            this.Initprogress(val)
        },
        isvalidDocument(tovar_id = null) {
            //tovar_id = this.tovarIndex;
            //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
            return !this.isValidDoc()
        },
        ilovaError() {
            if (this.$props.errors.length > 0) this.$refs.hujjatilova.applyResult({
                errors: [this.$props.errors], // array of string errors
                valid: false, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            });
            return this.$props.errors;

        }
    },
    watch: {
        dialog: {
            handler: function (val) {
                const _this = this;
                //_this.modelValue = [];
                if (val === true) {
                    if (typeof _this.value[0] !== 'undefined' && typeof _this.value[0].id !== 'undefined' && typeof _this.value[0].type !== 'undefined') {
                        _this.documents = [];
                        _this.value.forEach((document, k) => {
                            if (typeof document !== 'undefined' && typeof document.id !== 'undefined' && typeof document.type !== 'undefined' && typeof document.valid !== 'undefined' && document.id.length === 13 && document.type && document.valid === true) {
                                _this.documents.push({
                                    id: document.id,
                                    type: document.type,
                                    valid: document.valid,
                                    //color: 'default',
                                });
                            }

                        })
                        //console.log(_this.documents)
                        if (typeof _this.documents.length < 1) {
                           // console.log('aa')
                            _this.documents = [{}];
                        }

                    }
                } else {
                    _this.myArray = [];
                    if (typeof _this.documents !== 'undefined' && _this.documents.length > 0) {
                        //_this.value =[];

                        _this.documents.forEach((document, k) => {
                            if (typeof document !== 'undefined' && typeof document.id !== 'undefined' && typeof document.type !== 'undefined' && typeof document.valid !== 'undefined' && document.id.length === 13 && document.type && document.valid === true) {
                                ///console.log('555');
                                /*_this.value.push(JSON.parse(JSON.stringify({
                                    id: document.id,
                                    type: document.type,
                                    valid: document.valid,
                                    color: document.color,
                                })));*/
                                _this.myArray.push({
                                    id: document.id,
                                    type: document.type,
                                    valid: document.valid,
                                    color: document.color,
                                });
                            }
                        })
                        //_this.value=JSON.parse(JSON.stringify(_this.myArray))

                    }
                }

                if (_this.myArray) {

                    for (const [key, item] of Object.entries(_this.myArray)) {
                        //console.log(item)
                        if (!(item && typeof item.id !== 'undefined' && typeof item.valid !== 'undefined' && item.valid)) {
                           // console.log('aa')

                            if (_this.myArray.indexOf(item)) {
                                //console.log('sadasddsadsa')
                                _this.myArray.splice(_this.myArray.indexOf(item), 1)
                            }
                        }
                    }

                    /*                    _this.myArray.forEach((item)=>{
                                            if(!(item && typeof item.id !=='undefined' && typeof item.valid !=='undefined' && item.valid))
                                            {
                                                if(_this.myArray.indexOf(item)) {
                                                    console.log('sadasddsadsa')
                                                    _this.myArray.splice(_this.myArray.indexOf(item), 1)
                                                }
                                            }
                                        })*/
                }
                this.$emit("input", _this.myArray);
            }
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    }

}
</script>

<style scoped>

</style>
