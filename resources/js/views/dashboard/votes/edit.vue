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
                <v-row>
                    <h3>Таҳрирлаш</h3>
                </v-row>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="voteForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="vote.question"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-text-field type="number" label="тартиб рақами"
                                                              v-model="vote.sort"
                                                              name="title"></v-text-field>

                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch label="Активлиги"   v-model="vote.active"></v-switch>
                                            </v-col>
                                            <v-row class="mb-5">
                                                <v-col cols="1">

                                                    <v-btn color="primary" @click="vote.answers.push({text:''})">
                                                        <v-icon class="mr-2">mdi-plus-box-multiple</v-icon>

                                                        Савол қўшиш
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                            <v-row  v-if="vote.answers.length>0" :key="anKey" v-for="(answer,anKey) in vote.answers">
                                                <v-col cols="10">
                                                    <ValidationProvider :name="'Савол ' + (anKey+1)" rules="required"
                                                                        v-slot="{ errors }">
                                                        <v-text-field :label="'Савол ' + (anKey+1) "
                                                                      v-model="vote.answers[anKey].text"
                                                                      :name="'answer'+anKey"></v-text-field>
                                                        <span class="error--text">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col cols="2">
                                                    <v-btn
                                                        color="red"

                                                    ><v-icon @click="vote.answers.splice(anKey,1)">mdi-close</v-icon> Ўчириш</v-btn>
                                                </v-col>

                                            </v-row>


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
    name: "VoteUpdate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Сўровномалар', to: '/admin/votes', exact: true},
                    {text: 'Сўровномани тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            vote: [],
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
            this.vote.date = this.formatDate(this.date)
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readVote(this.$route.params.id).then((response) => {
                this.vote = response.data.data;

            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                this.$router.replace("/admin/votes").catch(()=>{});
            });

        },
        close() {
            this.$router.replace('/admin/votes');
        },

        async save() {
            const isValid = await this.$refs.voteForm.validate();
            console.log(this.vote.date)

            if (isValid) {
                api.updateVote(this.vote.id, this.vote).then((response) => {
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
