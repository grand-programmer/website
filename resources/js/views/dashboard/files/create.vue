<template>
    <v-container
        class="page-main"
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
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});


export default {
    name: "FileCreate",
    data: () => ({
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Файллар', to: '/admin/files', exact: true},
                    {text: 'Файл яратиш', to: '#', exact: true, disabled: true},
                ],
            editedIndex: -1,
            editedItem: {
                title: '',
                file: '',
            },
        }
    ),

    computed: {
        formTitle() {
            return 'Янги';
        },

    },
    created() {

    },

    methods: {
        close() {
            this.$router.replace("/admin/files").catch(() => {
            });
        },
        fileChange(file) {
            this.editedItem.file = file
        },
        async save() {
            const isValid = await this.$refs.fileForm.validate();
            if (isValid) {

                let formData = new FormData();
                formData.append('file', this.editedItem.file);
                formData.append('name', this.editedItem.title);

                api.addFile(formData).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    this.close()
                }).catch((error) => {
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    console.log(error)
                })
            }

        }
    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor,
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
