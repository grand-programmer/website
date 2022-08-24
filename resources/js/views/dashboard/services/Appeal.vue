<template>
    <v-container
        id="service-appeal"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="12"
            >
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <v-data-table
                            :headers="headers"
                            :items="appeals"
                            class="elevation-1"
                            :footer-props="{
                            'items-per-page-text':'Сахифадаги элементлар сони'
                            }"
                        >
                            <template v-slot:top>


                                <v-dialog
                                    v-model="dialog"
                                    max-width="500px"
                                >

                                    <v-card>
                                        <v-card-title>
                                            <span class="text-h5">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.fio"
                                                            label="Ф.И.О. / Ташкилот"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.appeal_type"
                                                            label="Мурожаат тури"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.address"
                                                            label="Адрес"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.email"
                                                            label="Email"
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="4"
                                                    >
                                                        <v-text-field
                                                            v-model="editedItem.phone"
                                                            label="Телефон"
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="Ёпиш"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="save"
                                            >
                                                Сақлаш
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Сиз хақиқатдан ҳам ўчирмоқчимисиз?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Ёпиш</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">Тасдиқлайман
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <!--                                <v-icon
                                                                    small
                                                                    class="mr-2"
                                                                    @click="editItem(item)"
                                                                >
                                                                    mdi-pencil
                                                                </v-icon>-->
                                <v-icon
                                    small
                                    @click="deleteItem(item.id)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                            <template v-slot:no-data>
                                <h3>Маълумотлар топилмади</h3><br>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    @click="initialize"
                                >
                                    Янгилаш
                                </v-btn>
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

export default {

    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {text: 'Ф.И.О. / Ташкилот', sortable: true, value: 'fio', align: 'start'},
            {text: 'Мурожаат тури', sortable: true, value: 'appeal_type'},
            {text: 'Адрес', sortable: true, value: 'address'},
            {text: 'Email', sortable: true, value: 'email'},
            {text: 'Телефон', value: 'phone', sortable: true},
            {text: 'Божхона органи', value: 'authority', sortable: true},
            {text: 'Тасниф', value: 'sphere', sortable: true},
            {text: 'Мурожаат мазмуни', value: 'text'},
            {text: 'Амаллар', value: 'actions', sortable: false}
        ],
        appeals: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            fio: '',
            appeal_type: 0,
            address: '',
            email: '',
            phone: 0,
            authority: 0,
            sphere: 0,
            text: '',
        },
        defaultItem: {
            id: null,
            fio: '',
            appeal_type: 0,
            address: '',
            email: '',
            phone: 0,
            authority: 0,
            sphere: 0,
            text: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш'
        },

    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            api.readAppeals().then((response) => {
                this.appeals = response.data;
            }).catch((error) => {
                console.log(error)
            })
        },

        editItem(item) {
            this.editedIndex = this.appeals.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.appeals.indexOf(item)
            this.editedItem = Object.assign({}, {'id': item})
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            //this.appeals.splice(this.editedIndex, 1)
            api.deleteAppeal(this.editedItem.id).then(response => {
                if (response.status == 200) {
                    this.initialize();
                    const index = this.appeals.findIndex(item => item.id === this.editedItem.id) // find the post index
                    if (~index) // if the post exists in array
                        this.appeals.splice(index, 1) //delete the post
                }
            }).catch((error) => {
                console.log(error)
            })
            this.closeDelete()

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

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.appeals[this.editedIndex], this.editedItem)
            } else {
                this.appeals.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
