<template>
    <v-row>
    <v-col cols="12">
        <ValidationProvider
            :name="$t('ID рақами')"
            v-slot="{ errors }"
        ref="myInput">
            <v-text-field
                v-model="document.id"
                :label="$t('ID рақами')"
                persistent-hint
                single-line
                :loading="loading"
                counter="16"
                :hint="$t('Ҳужжатнинг е-архив тизимидаги Fayl ID рақами')"
            >
                <template v-slot:append>
                    <v-icon
                        color="primary"
                        v-if="isValid">
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
                            @click="$emit('remove',key)">
                            mdi-minus
                        </v-icon>
                    </v-btn>
                </template>
                <template
                    v-slot:progress>
                    <v-progress-linear
                        :value="progress"
                        :color="document.color"
                        absolute
                        :indeterminate="loading"
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
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import i18n from "../../i18n";
export default {
    name: "e-arxiv-file-input",
    props: ['document', "multiple"],
    data() {
      return {
          loading:false,
          valid:false,
      }
    },
    watch: {
        'document.id': {
            handler: function(newValue) {
                this.myColor(newValue)
            },
            deep: true
        }
    },
    methods:{
       /* isValidDoc(index = null) {
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
        },*/
        Initprogress(val) {
            if (val && typeof val !== 'undefined')
                return Math.min(100, val.length * 8)
            else return 0;
        },
        async myColor(val, key) {
            this.$refs["myInput"].applyResult({
                errors: [], // array of string errors
                valid: true, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            })
            const _this = this;
            let fileIsset = [];

            // if (typeof this.documents[key] !== 'undefined' && this.documents[key]['id'] === val) this.documents[key].color = 'success';
            if (typeof val !== 'undefined' && val && (val.length === 13 || val.length === 16)) {

                fileIsset = await _this.checkFile(val)
                if (fileIsset && typeof fileIsset !== 'undefined' && typeof fileIsset[0] !== 'undefined' && fileIsset.length > 0) {

                        /*
                                                this.modelValue.push({
                                                    id: val,
                                                    type: fileIsset[0].cd_id + " - " + fileIsset[0].file_num
                                                });*/
                        this.document.id = val;
                        this.document.type = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;
                        this.document.doc_type = fileIsset[0].doc_type;
                        this.document.file_num = fileIsset[0].file_num;
                        this.document.file_data = fileIsset[0].file_data;
                        this.document.valid = true;
                    this.valid = true;


                } else {
                    this.document.color = 'warning';
                    this.document.valid = false;
                    this.valid = false;

                }
            } else {
                // console.log(key)
                //this.value.splice(key, 1);
                this.document.color = 'warning';
                this.document.valid = false;
            }
            if (typeof val !== 'undefined' && val && val.length < 13) {
                this.document.color = ['error', 'warning'][Math.floor(this.Initprogress(val) / 50)]
                this.document.valid = false;
                this.valid = false;
            }

        },
        async checkFile(file_id) {
            this.loading = true
            if (!(file_id && (file_id.length === 13 || file_id.length === 16))) {
                this.loading = false
                return false;
            }
            let response = null;
            response = await axios.get('/api/v1/ex_api/arxiv?file_id=' + file_id + '&pnfl=' + this.$auth.user().pin);
            if (response && response.data && response.data.count) {
               this.loading = false
                this.$refs["myInput"].applyResult({
                    errors: [], // array of string errors
                    valid: true, // boolean state
                    failedRules: {} // should be empty since this is a manual error.
                })
                return response.data.data;
            } else {
                this.$refs["myInput"].applyResult({
                    errors: [i18n.t('Бундай файл топилмади')], // array of string errors
                    valid: true, // boolean state
                    failedRules: {} // should be empty since this is a manual error.
                })
                 this.loading = false
            }
            return false;
        },
    },
    computed:{
        progress(val) {
            this.Initprogress(val)
        },
        isValid:{
            get() {
                return this.valid
            }
        }
    },
    components:{
        ValidationProvider
    }
}
</script>

<style scoped>

</style>
