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
            to="menu/create"
        >
            Янги қўшиш
        </v-btn>
        <v-row>
            <v-col cols="4" offset="8" align-self="end">
                <v-autocomplete
                    label="Меню номидан қидириш"
                    single-line
                    hide-details
                    clearable
                    item-text="title"
                    item-value="id"
                    :items="menusForSelect"
                    @change="updateMenus"
                ></v-autocomplete>
            </v-col></v-row>

        <v-row justify="center">
            <v-col
                cols="12"
                md="12"
            >
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <v-data-table
                            :headers="headers"
                            :items="menus"
                            calculate-widths
                            class="elevation-1"
                            :footer-props="{
                            'items-per-page-text':'Сахифадаги элементлар сони'
                            }"
                        >

                            <template v-slot:top="{ item }">
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Сиз хақиқатдан ҳам ўчирмоқчимисиз?
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Ёпиш</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm" >
                                                Тасдиқлайман
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-btn :to="'/admin/menu/view/' + item.id" color="primary" small><v-icon
                                    small
                                    class="mr-2"

                                >
                                    mdi-eye
                                </v-icon>
                                     Подменюлар
                                </v-btn>
                                <v-btn :to="'/admin/menu/edit/' + item.id" color="primary" small><v-icon
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

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {

    data: () => ({
        dialogDelete: false,
        menusForSelect: [],
        headers: [
            {text: 'ID', sortable: true, value: 'id', align: 'start'},
            {text: 'Сарлавха', sortable: true, value: 'title', align: 'start',width:'30%'},
            {text: 'Урл адреси', sortable: true, value: 'url', align: 'center'},
            {text: 'Статус', sortable: true, value: 'status', align: 'center'},
            {text: 'Тип', sortable: true, value: 'type', align: 'center'},
            {text: 'Ота меню', sortable: true, value: 'parent', align: 'center'},
            {text: 'Амаллар', value: 'actions', sortable: false, align: 'center'}
        ],
        menus: [],
        originalMenus: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            title: '',
            url: '',
            status: '',
            type: '',
            parent: null,
            sort_number: null,
        },
        breadcrumb_items:
            [
                {text: 'Админ панел', to: '/admin', exact: true},
                {text: 'Меню', to: '/admin/menu', exact: true},
            ],
    }),
    mounted() {
        this.initialize();
    },

    methods: {
        updateMenus(value){
            if(value===null) this.menusForSelect=this.originalMenus; else
                this.menus=this.originalMenus.filter(item=>item.id===value);
        },
        initialize() {
            api.readMenus(0).then((response) => {
                this.menus = response.data.data;
            }).catch((error) => {
                console.log(error)
            })
            api.readMenus().then((response) => {
                this.menusForSelect = response.data;
                this.originalMenus = response.data;
            }).catch((error) => {
                console.log(error)
            })
        },

        editItem(item) {
            this.editedIndex = this.menus.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.menus.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            api.deleteMenu(this.editedItem.id).then(response => {
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

