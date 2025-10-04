<template>

    <v-container
        class="page-main 11"
        fluid
        tag="section"
    >
        <div class="dashboardbreadcrumb">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>

        <v-btn
            color="primary"
            dark
            class="new_item"
            to="documents/create"
        >
            Янги қўшиш
        </v-btn>

        <v-row justify="center">
            <v-col
                cols="12"
                md="12"
            >
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <v-data-table
                            :headers="headers"
                            :items="allDocs"
                            calculate-widths
                            class="elevation-1"
                            item-key="id"
                            :options.sync="options"
                            :server-items-length="totalCategories"
                            :footer-props="{
                                'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                'items-per-page-all-text': $t('Барчаси')
                            }"
                            :no-data-text="$t('Маълумот топилмади')"
                            :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                        >

                            <template v-slot:top="{ item }">
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Сиз хақиқатдан ҳам ўчирмоқчимисиз?
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Ёпиш</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                                                Тасдиқлайман
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:item.categories="{ headers, item }">
                                <p v-for="category in item.categories ">
                                    {{ category.title ? category.title : '' }}
                                </p>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-btn :to="'/admin/documents/edit/' + item.id " color="primary" small>
                                    <v-icon
                                        small
                                        class="mr-2"

                                    >
                                        mdi-pencil
                                    </v-icon>
                                    Тахрирлаш
                                </v-btn>
                                <v-btn @click="deleteItem(item.id)" color="secondary" small>
                                    <v-icon
                                        small

                                    >
                                        mdi-delete
                                    </v-icon>
                                    Ўчириш
                                </v-btn>
                            </template>
                            <template v-slot:no-data><br>
                                <h3>Маълумотлар топилмади</h3><br>

                                <!--                                <v-btn
                                                                    color="primary"
                                                                    @click="initialize"
                                                                >
                                                                    Янгилаш
                                                                </v-btn>-->
                                <v-spacer></v-spacer>
                                <br>
                            </template>
                        </v-data-table>


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



export default {

    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {text: 'ID', sortable: true, value: 'id', align: 'start'},
            {text: 'Сарлавҳа', sortable: true, value: 'name', align: 'center', width: '30%'},
            {text: 'Урл адреси', sortable: true, value: 'url'},
            {text: 'Ҳужжат санаси', sortable: true, value: 'date'},
            /*{text: 'Категорияси', sortable: true, value: 'categories'},*/
            {text: 'Амаллар', value: 'actions', sortable: false}
        ],
        totalCategories:0,
        options: {},
        breadcrumb_items:
            [
                {text: 'Админ панел', to: '/admin', exact: true},
                {text: 'Документлар', to: '/admin/docs', exact: true, disabled: true},
            ],
        allDocs: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            title: '',
            slug: '',
            category: 0,
            description: '',
        },
        defaultItem: {
            id: null,
            title: '',
            slug: '',
            category: 0,
            description: '',
        },
    }),


    mounted() {
       // this.initialize();
    },

    methods: {
        initialize() {
            api.readDocuments(this.options).then((response) => {
                this.allDocs = response.data.data;
                this.totalCategories = response.data.count;
            }).catch((error) => {
                console.log(error)
            })
        },

        editItem(item) {
            this.editedIndex = this.allDocs.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.allDocs.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            api.deleteDocument(this.editedItem.id).then(response => {
                if (response.status == 200) {
                    this.initialize();
                    this.dialogDelete = false
                    this.$toast.success(`Янгилик омадли тарзда ўчирилди!`)
                }
            }).catch((error) => {
                console.log(error)
                this.$toast.error(`Хатолик содир бўлди!`)
            })

        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },


    },
    watch: {
        options: {
            handler () {
                this.initialize()
            },
            deep: true,
        },
    },
}
</script>

