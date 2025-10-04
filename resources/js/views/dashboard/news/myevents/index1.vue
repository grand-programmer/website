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
            to="categories/create"
        >
            Янги қўшиш
        </v-btn>

        <v-row justify="center">
            <v-col
                cols="12"
                md="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="categories"
                    :single-expand="singleExpand"
                    :expanded.sync="expanded"
                    item-key="name"
                    show-expand
                    class="elevation-1"
                    :no-data-text="$t('Маълумот топилмади')"
                    :footer-props="{
                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                        'items-per-page-all-text': $t('Барчаси')
                    }"
                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Expandable Table</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-switch
                                v-model="singleExpand"
                                label="Single expand"
                                class="mt-2"
                            ></v-switch>
                        </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            More info about {{ item.name }}
                        </td>
                    </template>
                </v-data-table>

            </v-col>

        </v-row>
    </v-container>

</template>

<script>
import api from "../../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';


export default {

    data: () => ({
        search: '',
        singleExpand: true,

        dialog: false,
        dialogDelete: false,
        headers: [
            {text: 'ID', sortable: true, value: 'id', align: 'start'},
            {text: 'Номи', sortable: true, value: 'title', align: 'start'},
            {text: 'Урл адреси', sortable: true, value: 'slug'},
            {text: 'Амаллар', value: 'actions', sortable: false}
        ],
        breadcrumb_items:
            [
                {text: 'Админ панел', to: '/admin', exact: true},
                {text: 'Рубрикалар', to: '/admin/categories', exact: true, disabled: true},
            ],
        categories: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            title: '',
            parent: null,
            description: '',
        },
        defaultItem: {
            id: null,
            title: '',
            parent: null,
            description: '',
        },
    }),

    mounted() {
        this.initialize();
    },

    methods: {

            clickedRow(value) {
                if (this.expanded.length && this.expanded[0].id == value.id) {
                    this.expanded = [];
                } else {
                    this.expanded = [];
                    this.expanded.push(value);
                }
            },

        initialize() {
            api.readCategories().then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                console.log(error)
            })
        },

        editItem(item) {
            this.editedIndex = this.categories.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.categories.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            api.deleteCategory(this.editedItem.id).then(response => {
                if (response.status == 200) {
                    this.initialize();
                    this.dialogDelete = false
                }
            }).catch((error) => {
                console.log(error)
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
}
</script>

