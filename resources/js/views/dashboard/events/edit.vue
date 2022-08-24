<template>
    <v-container
        class="menu-main"
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
                            <v-form ref="eventForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="event.title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="6" sm="6" md="6">
                                                <!--                                                <label>Ходиса санаси</label>-->
                                                <ValidationProvider name="Ҳодиса санаси" rules="required"
                                                                    v-slot="{ errors }">
                                                    <v-menu
                                                        ref="menu"
                                                        v-model="menu2"
                                                        :close-on-content-click="false"
                                                        transition="scale-transition"
                                                        offset-y
                                                        max-width="290px"
                                                        min-width="auto"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field
                                                                v-model="event.date"
                                                                persistent-hint
                                                                prepend-icon="mdi-calendar"
                                                                v-bind="attrs"
                                                                @blur="date = parseDate(event.date)"
                                                                v-on="on"
                                                                name="date"
                                                                label="Ҳодиса санаси"
                                                            ></v-text-field>
                                                        </template>
                                                        <v-date-picker
                                                            v-model="date"
                                                            no-title
                                                            @input="menu = false"
                                                        ></v-date-picker>
                                                    </v-menu>


                                                    <span>{{ errors[0] }}</span>
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
    name: "EventUpdate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Ҳодисалар', to: '/admin/events', exact: true},
                    {text: 'Ҳодисани тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            event: [],
            menu2:'',
            menu:'',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menus: [],
            pages: [],
        }
    ),

    computed: {
        formTitle() {
            return 'Тахрирлаш'
        },
        computedDateFormatted() {
            return this.formatDate(this.date)
        },

    },
    watch: {
        date(val) {
            this.event.date = this.formatDate(this.date)
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readEvent(this.$route.params.id).then((response) => {
                this.event = response.data.data;
                this.date=this.event.date;
                this.event.date=this.formatDate(this.event.date);

            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                this.$router.replace("/admin/events").catch(()=>{});
            });

        },
        close() {
            this.$router.replace('/admin/events');
        },

        async save() {
            const isValid = await this.$refs.eventForm.validate();
            console.log(this.event.date)

            if (isValid) {
                api.updateEvent(this.event.id, this.event).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                }).catch((error) => {
                    this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                })
            }
        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}-${month}-${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [ day,month, year] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
