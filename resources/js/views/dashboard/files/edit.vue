<template>
    <v-container
        class="file-main"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <div class="dashboardbreadcrumb">
                <v-container>
                    <v-breadcrumbs :items="breadcrumb_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-container>
            </div>
            <v-col
                cols="12"
                md="12"
            >

                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="fileForm">
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="editedItem.title"
                                                                  name="title"
                                                                  :error-messages="errors"
                                                    ></v-text-field>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="12">
                                                <ValidationProvider name="Файл" rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-file-input label="Файл"
                                                                  @change="fileChange"
                                                                  name="title"
                                                                  :error-messages="errors"/>
                                                    <a target="_blank" v-if="editedItem.oldFile" :href="editedItem.oldFile">{{editedItem.oldFileName}}</a>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Ёпиш</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Сақлаш</v-btn>
                                </v-card-actions>
                            </v-form>
                        </ValidationObserver>
                    </v-card>
                </v-flex>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "./../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/oz.json';
import Editor from '@tinymce/tinymce-vue';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "FileCreate",
    data: () => ({
            editedIndex: -1,
            editedItem: {
                id: null,
                title: '',
                file: '',
                oldFile:null,
                oldFileName:null,
            },

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Файллар', to: '/admin/files', exact: true},
                    {text: 'Файлни тахрирлаш', to: '#', exact: true, disabled: true},
                ],
        }
    ),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш'
        },

    },
    created() {
        this.initialize();
    },
    methods: {
        fileChange(file) {
            this.editedItem.file = file
        },
        initialize() {
            const _this = this;
            api.readFile(this.$route.params.id).then((response) => {
                this.editedItem.title = response.data.name;
                this.editedItem.id = response.data.id;
                this.editedItem.oldFile = response.data.filename?'/public/docfiles/' + response.data.filename:null;
                this.editedItem.oldFileName = response.data.name?response.data.name:null;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/admin/files").catch(() => {
                });
            })
        },
        close() {
            this.$router.replace('/admin/files');
        },

        async save() {
            const isValid = await this.$refs.fileForm.validate();
            if (isValid) {

                let formData = new FormData();
               if(this.editedItem.file)  formData.append('docFile', this.editedItem.file);
                formData.append('name', this.editedItem.title);
                formData.append('_method', 'PUT');
                api.updateFile(this.editedItem.id, formData, {    headers: {
                        'content-type': 'x-www-from-urlencoded'
                    }}).then((response) => {
                    if(response.status===200) {
                        this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        this.initialize()
                    }
                }).catch((error) => {
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))

                })
            }


        },

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor,
    },
}
</script>
<style>
.file-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
