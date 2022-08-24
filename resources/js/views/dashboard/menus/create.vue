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
                            <v-form ref="pageForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="editedItem.title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-autocomplete
                                                    label="Ота менюни танлаш"
                                                    v-model="editedItem.parent"
                                                    name="parent"
                                                    chips
                                                    clearable
                                                    :items="menus"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-autocomplete
                                                    label="Меню элементи турини белгиланг"
                                                    v-model="editedItem.type"
                                                    name="type"
                                                    chips
                                                    clearable
                                                    :items="menuTypes"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="editedItem.type==0">
                                                <ValidationProvider name="Урл"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Урл"
                                                                  chips
                                                                  style="margin-top: 10px"
                                                                  clearable
                                                                  v-model="editedItem.url"
                                                                  name="url"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="editedItem.type==1">

                                                <ValidationProvider name="Сахифа"
                                                                    v-slot="{ errors }">
                                                    <v-autocomplete
                                                        label="Саҳифани белгиланг"
                                                        v-model="editedItem.page_id"
                                                        name="related_id"
                                                        chips
                                                        clearable
                                                        item-text="title"
                                                        item-value="id"
                                                        :items="pages"
                                                    ></v-autocomplete>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>

                                            <v-col cols="3" sm="3" md="3">
                                                <ValidationProvider name="Позиция" rules="numeric" v-slot="{ errors }">
                                                    <v-text-field
                                                        name="sort_number"
                                                        v-model="editedItem.sort_number"
                                                        style="margin-top: 8px"
                                                        label="Позиция"
                                                    ></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch label="Фойдаланувчиларга кўрсатиш"
                                                          v-model="editedItem.status"
                                                          name="status"></v-switch>
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
    name: "PageCreate",
    data: () => ({
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Сахифалар', to: '/admin/menu', exact: true},
                    {text: 'Сахифа яратиш', to: '#', exact: true, disabled: true},
                ],
            menus: [],
            editedIndex: -1,
            editedItem: {
                id: null,
                title: '',
                type: 0,
                url: '',
                status: '',
                sort_number: '',
                parent: 0,
                page_id: '',
            },
            pages: [],
            menuTypes: [
                {text: 'Одатий', value: 0},
                {text: 'Страница', value: 1},
                //{text: 'Янгилик',value:1},

            ],
            menus_without_self: [],
        }
    ),

    computed: {
        formTitle() {
            return 'Янги';
        },

    },
    created() {
        this.initialize();
    },
    watch: {
        editedItem: {
            handler(val, oldVal) {
                if (val.page_id > 0) {
                    this.editedItem.title = this.pages.find(o => o.id === this.editedItem.page_id)['title'];
                }
            },
            deep: true
        }
    },
    methods: {
        initialize() {
            api.readMenusForSelect(5).then((response) => {
                this.menus = response.data;
            }).catch((error) => {
                this.$toast.error(`Менюларни олишда муаммо бор!`)

                console.log(error)
            })
            api.readPages().then((response) => {
                this.pages = response.data;
            }).catch((error) => {
                this.$toast.error(`Сахифаларни олишда муааммо бор!`);
            })
        },

        close() {
            this.$router.replace("/admin/menu").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.menus[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {
                    this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                    api.addMenu(this.editedItem).then((response) => {
                        this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        this.close()
                    }).catch((error) => {
                        this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                        console.log(error)
                    })
                }
            }

        },

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
