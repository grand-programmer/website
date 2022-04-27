<template>
    <div class="section customs-value-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <h3 align="center">
                            Божхона қиймати бўйича дастлабки қарор<br>
                        </h3>
                    </v-col>
                </v-row>
                <v-stepper v-model="stepper" color="none">
                    <v-stepper-header>
                        <v-stepper-step
                            :complete="isCompleted(1)"
                            step="1"
                            @click="goStep(1)"
                        >
                            Аризачи тўғрисида маълумотлар
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="2"
                            :complete="isCompleted(2)"
                            @click="goStep(2)"
                        >
                            Юк тўғрисида асосий маълумотлар
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="isCompleted(3)"
                            @click="goStep(3)"
                            step="3"

                        >
                            Товар тўғрисида маълумотлар
                        </v-stepper-step>


                        <v-divider></v-divider>

                        <v-stepper-step
                            step="4"
                            @click="goStep(4)"
                            :complete="isCompleted(4)"
                        >
                            Дастлабки қарорни олиш учун тўлов
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <ValidationObserver v-slot="{ invalid }" ref="create_customs_person_value">
                                    <v-row>

                                        <v-col cols="3" class="d-flex align-items-center jis_yur">
                                            <!--                                        <div class="form-field d-flex align-items-center jis_yur">
                                                                                        <label :class="person.type==0?'primary':''">Юридик шахс</label>

                                                                                        <v-switch v-model="person.type"></v-switch>
                                                                                        <label :class="person.type==1?'primary':''">Жисмоний шахс</label>

                                                                                    </div>-->

                                            <v-btn-toggle
                                                v-model="person.type"
                                                tile
                                                group
                                                mandatory
                                            >


                                                <v-btn :value="1">
                                                    Жисмоний шахс
                                                </v-btn>
                                                <v-btn :value="0">
                                                    Юридик шахс
                                                </v-btn>


                                            </v-btn-toggle>

                                        </v-col>
                                    </v-row>
                                    <v-row class="person_data">
                                        <v-col cols="6" v-if="person.type==1">
                                            <ValidationProvider name="ЖШШИР" rules="required|digits:14"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.pin"
                                                    :counter="14"
                                                    label="ЖШШИР"
                                                    required
                                                    type="number"
                                                    persistent-placeholder
                                                    hint="ЖШШИР - жисмоний шахснинг шахсий идентификацион рақами"
                                                    v-mask="'##############'"
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6" v-if="person.type==0">
                                            <ValidationProvider name="Ташкилот номи" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.organization_name"
                                                    :counter="200"
                                                    label="Ташкилот номи"
                                                    required
                                                    hint="Юридик шахснинг тўлиқ номи"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="СТИР" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.tin"
                                                    :counter="9"
                                                    label="СТИР"
                                                    type="number"
                                                    v-mask="'#########'"
                                                    required

                                                    hint="Солиқ тўловчининг идентификацион рақами"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Фамилияси исми шарифи" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.fio"
                                                    :counter="200"
                                                    label="Фамилияси исми шарифи"
                                                    required
                                                    hint="Аризачининг фамилияси, исми, шарифи"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>

                                        <v-col cols="6" v-if="person.type===0">
                                            <ValidationProvider :slim="(person.type!==0)" v-if="person.type===0"
                                                                name="Лавозими" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.position"
                                                    :counter="200"
                                                    label="Лавозими"
                                                    required
                                                    hint="Аризачининг ташкилотдаги лавозими"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Манзили" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.address"
                                                    :counter="200"
                                                    label="Манзили"
                                                    required
                                                    :hint="person.type==1?'Аризачининг манзили':'Юридик шахснинг манзили'"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Ҳудуд" rules="required"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    v-model="person.region"
                                                    label="Ҳудудни танланг"
                                                    required
                                                    hint="Ҳудудий божхона бошқармаси жойлашган ҳудуд"
                                                    :items="regions"
                                                    persistent-placeholder
                                                ></v-autocomplete>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Телефон рақами" rules="required|max:10"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.phone"
                                                    :counter="10"
                                                    label="Телефон рақами"
                                                    required
                                                    v-mask="'##########'"
                                                    hint="Аризачининг телефон рақами"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Электрон почта" rules="required|email"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.email"
                                                    :counter="200"
                                                    label="Электрон почта манзили"
                                                    required
                                                    hint="Аризачининг электрон почтаси"
                                                    persistent-placeholder
                                                ></v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>

                                    </v-row>

                                </ValidationObserver>
                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>

                            </v-card>

                        </v-stepper-content>

                        <v-stepper-content step="2">

                            <v-card
                                class="mb-12"
                            >


                                <v-tabs
                                    background-color="transparent"
                                    color="basil"
                                    :right="false"
                                    :centered="false"
                                    grow
                                    slider-color="black"
                                    v-model="tabs.additional_docs"

                                >
                                    <v-tab>
                                        Юк кузатув маълумотлари
                                    </v-tab>
                                    <v-tab>
                                        Илова қилинадиган Ҳужжатлар
                                    </v-tab>
                                </v-tabs>

                                <v-tabs-items class="additional_tab" v-model="tabs.additional_docs">
                                    <v-tab-item>
                                        <v-card
                                            color="basil"
                                            flat
                                        >
                                            <ValidationObserver v-slot="{ invalid }"
                                                                ref="create_customs_yuk_kuzatuv_value">
                                                <v-row class="align-end">

                                                    <v-dialog
                                                        v-model="dialog.jonatuvchi"
                                                        persistent
                                                        max-width="600px"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-col cols="4" class="position-relative">
                                                                <label
                                                                    v-if="application.sender.name && application.sender.country">Юк
                                                                    жўнатувчи</label>

                                                                <v-btn
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                    min-width="100%"
                                                                    class="button-style-1"

                                                                >
                                                                <span
                                                                    v-if="application.sender.name && application.sender.country">{{
                                                                        application.sender.name
                                                                    }} ({{
                                                                        countries.filter(country => country.value === application.sender.country)[0]['text']
                                                                    }})</span>
                                                                    <span v-else>Юк жўнатувчи</span>
                                                                </v-btn>
                                                                <div class="errors_under_button">
                                                                    <ValidationProvider name="Юборувчи ташкилот номи"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <input type="hidden"
                                                                               name="application_sender_name"
                                                                               :value="application.sender.name">
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                    <ValidationProvider name="Юборувчи ташкилот давлати"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <input type="hidden"
                                                                               name="application_sender_name"
                                                                               :value="application.sender.country">
                                                                        <span v-if="application.sender.name">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </ValidationProvider>
                                                                </div>

                                                            </v-col>
                                                        </template>
                                                        <v-card>
                                                            <v-card-title>
                                                            <span
                                                                class="text-h5">Юк жўнатувчи тўғрисида маълумотлар</span>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-container>
                                                                    <v-row>

                                                                        <v-col cols="6">
                                                                            <v-text-field
                                                                                label="Юк жўнатувчи номи *"
                                                                                required
                                                                                persistent-placeholder
                                                                                v-model="application.sender.name"
                                                                            ></v-text-field>

                                                                        </v-col>

                                                                        <v-col
                                                                            cols="12"
                                                                            sm="6"
                                                                        >
                                                                            <v-autocomplete
                                                                                :items="countries"
                                                                                label="Юк жўнатувчи мамлакати"
                                                                                persistent-placeholder
                                                                                v-model="application.sender.country"
                                                                            ></v-autocomplete>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                                <small>* майдонлар тўлдирилиши шарт</small>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="blue darken-1"
                                                                    text
                                                                    @click="dialog.jonatuvchi = false"
                                                                >
                                                                    Ёпиш
                                                                </v-btn>
                                                                <!--                                                            <v-btn
                                                                                                                                color="blue darken-1"
                                                                                                                                text
                                                                                                                                @click="dialog.jonatuvchi = false"
                                                                                                                            >
                                                                                                                                Сақлаш
                                                                                                                            </v-btn>-->
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                    <v-dialog
                                                        v-model="dialog.sotuvchi"
                                                        persistent
                                                        max-width="600px"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-col cols="4" class="position-relative">
                                                                <label
                                                                    v-if="application.seller.name && application.seller.country">Сотувчи</label>
                                                                <v-btn
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                    min-width="100%"
                                                                    class="button-style-1"

                                                                >
                                                                <span
                                                                    v-if="application.seller.name && application.seller.country">{{
                                                                        application.seller.name
                                                                    }} ({{
                                                                        countries.filter(country => country.value === application.seller.country)[0]['text']
                                                                    }})</span>
                                                                    <span v-else>Сотувчи</span>
                                                                </v-btn>
                                                                <div class="errors_under_button">
                                                                    <ValidationProvider name="Сотувчи ташкилот номи"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <input type="hidden"
                                                                               name="application_seller_name"
                                                                               :value="application.seller.name">
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                    <ValidationProvider name="Сотувчи ташкилот давлати"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <input type="hidden"
                                                                               name="application_seller_name"
                                                                               :value="application.seller.country">
                                                                        <span v-if="application.seller.name">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </v-col>
                                                        </template>
                                                        <v-card>
                                                            <v-card-title>
                                                                <span
                                                                    class="text-h5">Сотувчи тўғрисида маълумотлар</span>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-container>
                                                                    <v-row>

                                                                        <v-col cols="6">
                                                                            <v-text-field
                                                                                label="Сотувчи номи *"
                                                                                required
                                                                                persistent-placeholder
                                                                                v-model="application.seller.name"
                                                                            ></v-text-field>
                                                                        </v-col>

                                                                        <v-col
                                                                            cols="12"
                                                                            sm="6"
                                                                        >
                                                                            <v-autocomplete
                                                                                :items="countries"
                                                                                label="Сотувчи мамлакати"
                                                                                v-model="application.seller.country"
                                                                                persistent-placeholder
                                                                            ></v-autocomplete>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                                <small>* майдонлар тўлдирилиши шарт</small>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="blue darken-1"
                                                                    text
                                                                    @click="dialog.sotuvchi = false"
                                                                >
                                                                    Ёпиш
                                                                </v-btn>
                                                                <!--                                                            <v-btn
                                                                                                                                color="blue darken-1"
                                                                                                                                text
                                                                                                                                @click="dialog.sotuvchi = false"
                                                                                                                            >
                                                                                                                                Сақлаш
                                                                                                                            </v-btn>-->
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>

                                                    <v-dialog
                                                        v-model="dialog.dastlabkiqaror"
                                                        persistent
                                                        max-width="600px"
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-col cols="4" class="position-relative ">
                                                                <label
                                                                    v-if="application.old_decision.number && application.old_decision.date">Илгари
                                                                    қабул қилинган дастлабки қарор</label>
                                                                <v-btn
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                    min-width="100%"
                                                                    class="button-style-1"
                                                                >
                                                                 <span
                                                                     v-if="application.old_decision.number && application.old_decision.date">{{
                                                                         application.old_decision.number
                                                                     }} ({{ application.old_decision.date }})</span>
                                                                    <span
                                                                        v-else>Илгари қабул қилинган дастлабки қарор</span>

                                                                </v-btn>

                                                            </v-col>
                                                        </template>

                                                        <v-card>
                                                            <v-card-title>
                                                            <span
                                                                class="text-h5">Илгари қабул қилинган дастлабки қарор</span>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-container>
                                                                    <v-row>

                                                                        <v-col cols="6">
                                                                            <v-text-field
                                                                                v-model="application.old_decision.number"
                                                                                label="Дастлабки қарор рақами"
                                                                                required
                                                                                persistent-placeholder
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                        <v-col cols="6">
                                                                            <v-menu
                                                                                ref="menu_dastlabkiqarorsanasi"
                                                                                v-model="menu.dastlabkiqarorsanasi"
                                                                                :close-on-content-click="false"
                                                                                :return-value.sync="application.old_decision.date"
                                                                                transition="scale-transition"
                                                                                offset-y
                                                                                min-width="auto"
                                                                            >
                                                                                <template
                                                                                    v-slot:activator="{ on, attrs }">
                                                                                    <v-text-field
                                                                                        v-model="application.old_decision.date"
                                                                                        label="Дастлабки қарор санаси"
                                                                                        prepend-icon="mdi-calendar"
                                                                                        readonly
                                                                                        persistent-placeholder
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    ></v-text-field>
                                                                                </template>
                                                                                <v-date-picker
                                                                                    v-model="application.old_decision.date"
                                                                                    no-title
                                                                                    scrollable
                                                                                >
                                                                                    <v-spacer></v-spacer>
                                                                                    <v-btn
                                                                                        text
                                                                                        color="primary"
                                                                                        @click="menu.dastlabkiqarorsanasi = false"
                                                                                    >
                                                                                        Cancel
                                                                                    </v-btn>
                                                                                    <v-btn
                                                                                        text
                                                                                        color="primary"
                                                                                        @click="$refs.menu_dastlabkiqarorsanasi.save(application.old_decision.date)"
                                                                                    >
                                                                                        OK
                                                                                    </v-btn>
                                                                                </v-date-picker>
                                                                            </v-menu>
                                                                        </v-col>


                                                                    </v-row>
                                                                </v-container>
                                                                <small>* майдонлар тўлдирилиши шарт</small>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="blue darken-1"
                                                                    text
                                                                    @click="dialog.dastlabkiqaror = false"
                                                                >
                                                                    Ёпиш
                                                                </v-btn>
                                                                <v-btn
                                                                    color="blue darken-1"
                                                                    text
                                                                    @click="dialog.dastlabkiqaror = false"
                                                                >
                                                                    Сақлаш
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                    <v-col cols="12"></v-col>
                                                    <v-col cols="6">
                                                        <ValidationProvider name="Етказиб бериш шарти"
                                                                            v-slot="{ errors }" rules="required">
                                                            <v-autocomplete
                                                                v-model="application.inkoterms"
                                                                label="Товарни етказиб бериш шарти"
                                                                persistent-placeholder
                                                                required
                                                                :items="inkoterms"
                                                                name="inkoterms"
                                                            ></v-autocomplete>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <ValidationProvider name="Етказиб бериш манзили"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Етказиб бериш манзили"
                                                                required
                                                                persistent-placeholder
                                                                v-model="application.shipping_address"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>


                                                    <v-col cols="12">
                                                        <v-dialog
                                                            v-model="dialog.transportturi"
                                                            persistent
                                                            max-width="1200px"
                                                        >
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-col cols="12" class="position-relative">
                                                                    <div
                                                                        class="border-bottom-dashed chips-dialog"

                                                                        v-bind="attrs"
                                                                        v-on="on"
                                                                    >
                                                                        <span>Транспорт тури:</span>
                                                                        <v-chip-group
                                                                            mandatory
                                                                            style="height: 50px" class="d-block"

                                                                        >
                                                                            <v-chip
                                                                                v-if="application.transportations[key].transport_type"
                                                                                v-for="(transportation,key) in application.transportations"
                                                                                :key="key"
                                                                                Ёпиш
                                                                                :close="key!=0?true:false"
                                                                                @click:close="removeTransportation(key)"
                                                                            >
                                                                                {{
                                                                                    transportation.country_from.text
                                                                                }}-{{
                                                                                    transportation.country_to.text
                                                                                }}/[{{
                                                                                    (filterObject(transports, transportation.transport_type)) ? (filterObject(transports, transportation.transport_type))[0].text : ''
                                                                                }}]
                                                                            </v-chip>
                                                                        </v-chip-group>
                                                                    </div>

                                                                    <div class="errors_under_button">
                                                                        <ValidationProvider name="Жўнатиладиган давлат"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <input type="hidden"
                                                                                   :value="application.transportations[0].country_from">
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                        <ValidationProvider name="Кирувчи давлат"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <input type="hidden"
                                                                                   :value="application.transportations[0].country_to">
                                                                            <span class="red--text"
                                                                                  v-if="application.transportations[0].country_from">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                        <ValidationProvider name="Транспорт тури"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <input type="hidden"
                                                                                   :value="application.transportations[0].transport_type">
                                                                            <span class="red--text"
                                                                                  v-if="application.transportations[0].country_from && application.transportations[0].country_to">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                        <ValidationProvider name="Ташиш ҳаражати"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <input type="hidden"
                                                                                   :value="application.transportations[0].price">
                                                                            <span class="red--text"
                                                                                  v-if="application.transportations[0].country_from && application.transportations[0].country_to && application.transportations[0].transport_type">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                    </div>

                                                                </v-col>
                                                            </template>
                                                            <v-card>
                                                                <v-card-title>
                                                            <span
                                                                class="text-h5">Товарнинг ҳаракат йўналиши </span>
                                                                </v-card-title>
                                                                <v-card-text>
                                                                    <v-container>
                                                                        <v-row
                                                                            v-for="(transportation,key) in application.transportations"
                                                                            :key="key">

                                                                            <v-col cols="3">


                                                                                <v-autocomplete
                                                                                    label="Давлатни танланг"
                                                                                    required
                                                                                    v-model="application.transportations[key].country_from"
                                                                                    persistent-placeholder
                                                                                    hide-no-data
                                                                                    :items="countries"
                                                                                    :loading="loading.country_transport_type_from"
                                                                                    return-object
                                                                                >
                                                                                    <template
                                                                                        slot="append-outer">
                                                                                        дан
                                                                                    </template>

                                                                                </v-autocomplete>
                                                                            </v-col>
                                                                            <v-col cols="3">
                                                                                <v-autocomplete
                                                                                    label="Давлатни танланг"
                                                                                    required
                                                                                    v-model="application.transportations[key].country_to"
                                                                                    persistent-placeholder
                                                                                    :items="countries"
                                                                                    return-object
                                                                                >
                                                                                    <template
                                                                                        slot="append-outer">
                                                                                        гача
                                                                                    </template>

                                                                                </v-autocomplete>
                                                                            </v-col>
                                                                            <v-col cols="2">
                                                                                <v-autocomplete
                                                                                    v-model="application.transportations[key].transport_type"
                                                                                    label="Транспорт тури"
                                                                                    persistent-placeholder
                                                                                    required
                                                                                    hint="Ташишда фойдаланиладиган транспорт тури"
                                                                                    :items="transports"
                                                                                ></v-autocomplete>
                                                                            </v-col>
                                                                            <v-col cols="2">
                                                                                <v-text-field
                                                                                    v-model="application.transportations[key].price"
                                                                                    label="Ташиш ҳаражати"
                                                                                    persistent-placeholder
                                                                                    hint="Товарни ташиш ва юклаш ҳаражатлари">
                                                                                    <template
                                                                                        slot="append"><span
                                                                                        style="white-space: nowrap">(UZS) сўм</span>
                                                                                    </template>
                                                                                </v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="2" :data="key" v-if="key==0">
                                                                                <v-list-item
                                                                                    style="height: 30px; position: relative">
                                                                                    <v-fab-transition>

                                                                                        <v-btn
                                                                                            color="primary"
                                                                                            dark
                                                                                            center
                                                                                            fab
                                                                                            @click="addTransportation"
                                                                                            style="height:35px; width: 36px"
                                                                                        >
                                                                                            <v-icon>mdi-plus
                                                                                            </v-icon>
                                                                                        </v-btn>
                                                                                    </v-fab-transition>
                                                                                </v-list-item>
                                                                            </v-col>

                                                                            <v-col cols="2" :data="key" v-else>
                                                                                <v-list-item
                                                                                    style="height: 30px; position: relative">
                                                                                    <v-fab-transition>

                                                                                        <v-btn
                                                                                            color="danger"
                                                                                            dark
                                                                                            center
                                                                                            fab
                                                                                            @click="removeTransportation(key)"
                                                                                            style="height:35px; width: 36px"
                                                                                        >
                                                                                            <v-icon>mdi-minus
                                                                                            </v-icon>
                                                                                        </v-btn>
                                                                                    </v-fab-transition>
                                                                                </v-list-item>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </v-container>
                                                                    <small>* майдонлар тўлдирилиши шарт</small>
                                                                </v-card-text>
                                                                <v-card-actions>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="dialog.transportturi = false"
                                                                    >
                                                                        Ёпиш
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="dialog.transportturi = false; transport_type=transport_turi_chips"
                                                                    >
                                                                        Сақлаш
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </v-dialog>
                                                    </v-col>


                                                </v-row>
                                            </ValidationObserver>
                                        </v-card>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <v-card
                                            color="basil"
                                            flat
                                            max-height="46vh"
                                            style="overflow: auto"
                                        >
                                            <ValidationObserver v-slot="{ invalid }"
                                                                ref="create_customs_yuk_ilovalar_value">
                                                <v-row justify="center" v-for="(document,key) in application.documents"
                                                       :key="key">
                                                    <v-col cols="2">
                                                        <ValidationProvider name="Ҳужжат тури"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                v-model="application.documents[key].type"
                                                                label="Ҳужжат тури"
                                                                required
                                                                name="document_type"
                                                                persistent-placeholder
                                                                :items="document_types"
                                                            ></v-autocomplete>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="2">
                                                        <ValidationProvider name="Ҳужжат рақами"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                v-model="application.documents[key].number"
                                                                label="Ҳужжат рақами"
                                                                name="document_number"
                                                                append-outer-icon="mdi-map-marker"
                                                                persistent-placeholder
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="2">
                                                        <v-menu
                                                            :ref="'menu'+ key"
                                                            v-model="application.documents[key].menu"
                                                            :Ёпиш-on-content-click="false"
                                                            :return-value.sync="date"
                                                            transition="scale-transition"
                                                            offset-y
                                                            min-width="auto"
                                                        >
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <ValidationProvider name="Ҳужжат санаси"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        v-model="application.documents[key].date"
                                                                        label="Ҳужжат санаси"
                                                                        prepend-icon="mdi-calendar"
                                                                        readonly
                                                                        name="document_date"
                                                                        v-bind="attrs"
                                                                        v-on="on"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="application.documents[key].date"
                                                                no-title
                                                                scrollable
                                                            >
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    text
                                                                    color="primary"
                                                                    @click="application.documents[key].menu = false"
                                                                >
                                                                    Ёпиш`
                                                                </v-btn>
                                                                <v-btn
                                                                    text
                                                                    color="primary"
                                                                    @click="$refs['menu' + key].save(application.documents[key].date)"
                                                                >
                                                                    Сақлаш
                                                                </v-btn>
                                                            </v-date-picker>
                                                        </v-menu>


                                                    </v-col>
                                                    <v-col cols="2">
                                                        <ValidationProvider name="Файл"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-file-input
                                                                v-model="application.documents[key].file"
                                                                label="Файл"
                                                                name="file"
                                                                prepend-icon="mdi-paperclip"
                                                            >
                                                                <template v-slot:selection="{ text }">
                                                                    <v-chip
                                                                        small
                                                                        label
                                                                        color="primary"
                                                                    >
                                                                        {{ text }}
                                                                    </v-chip>
                                                                </template>
                                                                <template v-slot:prepend>
                                                                    <v-icon>
                                                                        mdi-attachment
                                                                    </v-icon>
                                                                </template>
                                                            </v-file-input>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="1" v-if="key==0" class="align-items-center">
                                                        <v-btn
                                                            depressed
                                                            color="primary"
                                                            @click="AddDocument"
                                                        >
                                                            Қўшиш
                                                        </v-btn>
                                                    </v-col>
                                                    <v-col cols="1" v-else class="align-items-center">
                                                        <v-btn
                                                            depressed
                                                            color="error"
                                                            @click="removeDocument(key)"
                                                        >
                                                            Ўчириш
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>

                                            </ValidationObserver>
                                        </v-card>


                                    </v-tab-item>

                                </v-tabs-items>


                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-stepper-content>

                        <v-stepper-content step="3">


                            <div class="p-1 d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3 col-1 product_parts" id="v-pills-tab"
                                     role="tablist"
                                     aria-orientation="vertical">
                                    <button class="nav-link create" @click="AddProduct">Қўшиш
                                        <v-icon>mdi-plus-circle-outline</v-icon>
                                    </button>
                                    <button class="nav-link" :class="(key==0)?'active':''"
                                            :id="'v-pills-profile-tab'+key"
                                            :data-id="key" data-bs-toggle="pill"
                                            @click="selectTabTovar(key) "
                                            :data-bs-target="'#v-pills-profile'+key" type="button" role="tab"
                                            :aria-controls="'#v-pills-profile'+key" aria-selected="true"
                                            v-for="(tovar,key) in tovarlar">Товар
                                        {{ key + 1 }}
                                        <div class="close-icon">
                                            <v-icon @click="RemoveProduct(key)">mdi-close-circle-outline</v-icon>
                                        </div>
                                    </button>

                                </div>
                                <div class="tab-content w-100" id="v-pills-tabContent">
                                    <div class="tab-pane fade " :class="(key==0)?' show active':''"
                                         :id="'v-pills-profile'+ key" role="tabpanel"
                                         aria-labelledby="v-pills-home-tab" v-for="(tovar,key) in application.tovarlar">
                                        <v-card
                                            class="mb-12"
                                        >
                                            <v-tabs
                                                v-model="application.tovarlar[key].tab"
                                                background-color="transparent"
                                                color="basil"
                                                centered
                                                slider-color="black"
                                                fixed-tabs
                                            >
                                                <v-tab
                                                    v-for="(item,index) in items"
                                                    :key="index">
                                                    {{ item.content }}
                                                </v-tab>
                                            </v-tabs>

                                            <v-tabs-items v-model="application.tovarlar[key].tab"
                                                          class="product_info_tab">
                                                <v-tab-item :key="0" :eager="true">
                                                    <v-card
                                                        color="basil"
                                                        flat
                                                    >
                                                        <ValidationObserver v-slot="{ invalid }"
                                                                            :ref="'create_customs_tovar1_value'+key">
                                                            <v-row>
                                                                <v-col cols="12">
                                                                    <ValidationProvider name="ТИФ ТН код"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-autocomplete
                                                                            v-model="application.tovarlar[key].product.tftn"
                                                                            label="ТИФ ТН кодни киритинг"
                                                                            required
                                                                            :items="tftncodes"
                                                                            item-text="name"
                                                                            item-value="id"
                                                                            name="tftncode"
                                                                            hint="Товарнинг ТИФ ТН коди"
                                                                            persistent-placeholder
                                                                            hide-no-data
                                                                            :loading="loading.tftncode"
                                                                            :search-input.sync="search_tftn"
                                                                            return-object
                                                                        ></v-autocomplete>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                            </v-row>
                                                            <v-row>
                                                                <v-col cols="6">
                                                                    <ValidationProvider
                                                                        name="Асосий ўлчов бирлигидаги миқдори"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Асосий ўлчов бирлигидаги миқдори"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг асосий ўлчов бирлигидаги миқдори"
                                                                            name="weight"
                                                                            v-model="application.tovarlar[key].product.weight"

                                                                        >
                                                                            <template v-slot:append>
                                                                                <span class="append-slot">кг</span>
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>


                                                                </v-col>
                                                                <v-col cols="6"
                                                                       v-if="(application.tovarlar[key].product.tftn && application.tovarlar[key].product.tftn.unit2 != null)">

                                                                    <ValidationProvider
                                                                        name="Қўшимча ўлчов бирлигидаги миқдори"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Қўшимча ўлчов бирлигидаги миқдори"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг қўшимча ўлчов бирлигидаги миқдори"
                                                                            name="size"
                                                                            v-model="application.tovarlar[key].product.size"
                                                                        >
                                                                            <template v-slot:append-outer>
                                                                        <span class="append-slot">{{
                                                                                application.tovarlar[key].product.tftn.unit2
                                                                            }}</span>
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Нетто оғирлиги"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Нетто оғирлиги"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг нетто оғирлиги"
                                                                            name="netto"
                                                                            v-model="application.tovarlar[key].product.netto"

                                                                        >
                                                                            <template v-slot:append-outer>
                                                                                <span class="append-slot">кг</span>
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Брутто оғирлиги"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Брутто оғирлиги"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг брутто оғирлиги"
                                                                            name="brutto"
                                                                            v-model="application.tovarlar[key].product.brutto"
                                                                        >
                                                                            <template v-slot:append-outer>
                                                                                <span class="append-slot">кг</span>
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>

                                                                <v-col cols="4">
                                                                    <ValidationProvider name="Товарнинг шартномадаги қиймати"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Товарнинг шартномадаги қиймати"
                                                                            persistent-placeholder
                                                                            name="price"
                                                                            v-model="application.tovarlar[key].product.price"
                                                                        >

                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="2">
                                                                    <ValidationProvider name="Валюта"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-autocomplete
                                                                            v-model="application.tovarlar[key].product.currency"
                                                                            label="Валюта"
                                                                            required
                                                                            :items="currencies"
                                                                            :menu-props="{ auto: true,  }"
                                                                            hide-selected
                                                                            persistent-placeholder
                                                                            name="currency"
                                                                        >
                                                                            <template slot="selection"
                                                                                      slot-scope="data">
                                                                                <!-- HTML that describe how select should render items when the select is open -->
                                                                                {{ data.item.value }} -
                                                                                {{ data.item.text }}
                                                                            </template>
                                                                            <template slot="item" slot-scope="data">
                                                                                <!-- HTML that describe how select should render items when the select is open -->
                                                                                {{ data.item.value }} -
                                                                                {{ data.item.text }}
                                                                            </template>

                                                                        </v-autocomplete>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>


                                                            </v-row>
                                                        </ValidationObserver>
                                                    </v-card>
                                                </v-tab-item>
                                                <v-tab-item :key="1" eager>
                                                    <v-card
                                                        color="basil"
                                                        flat
                                                    >
                                                        <ValidationObserver v-slot="{ invalid }"
                                                                            :ref="'create_customs_tovar2_value'+key">
                                                        <v-row>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Тижорат номи"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                <v-text-field
                                                                    label="Тижорат номи"
                                                                    required
                                                                    name="trade_name"
                                                                    v-model="application.tovarlar[key].product.tftn"
                                                                    persistent-placeholder
                                                                ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Савдо белгиси"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                <v-text-field
                                                                    label="Савдо белгиси"
                                                                    hint=""
                                                                    name="trade_mark"
                                                                    v-model="application.tovarlar[key].product.trade_mark"
                                                                    persistent-placeholder
                                                                ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Марка"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                <v-text-field
                                                                    label="Маркаси"
                                                                    hint=""
                                                                    name="mark"
                                                                    v-model="application.tovarlar[key].product.mark"
                                                                    persistent-hint
                                                                    required
                                                                    persistent-placeholder
                                                                ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Модели"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Модели"
                                                                        required
                                                                        name="model"
                                                                        v-model="application.tovarlar[key].product.model"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Артикул"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Артикули"
                                                                        required
                                                                        name="article"
                                                                        v-model="application.tovarlar[key].product.article"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">

                                                                <ValidationProvider name="Нав"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Нави"
                                                                        required
                                                                        name="nav"
                                                                        v-model="application.tovarlar[key].product.nav"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Стандарти"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                <v-text-field
                                                                    label="Стандарти"
                                                                    required
                                                                    name="standart"
                                                                    v-model="application.tovarlar[key].product.standart"
                                                                    persistent-placeholder
                                                                ></v-text-field>
                                                                <span class="red--text">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Ранги"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Ранги"
                                                                        required
                                                                        name="color"
                                                                        v-model="application.tovarlar[key].product.nav"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Фойдаланиш мақсади"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Фойдаланиш мақсади"
                                                                        required
                                                                        name="maqsad"
                                                                        v-model="application.tovarlar[key].product.maqsad"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>


                                                            </v-col>

                                                        </v-row>
                                                        </ValidationObserver>
                                                    </v-card>


                                                </v-tab-item>
                                                <v-tab-item :key="2" eager>
                                                    <v-card
                                                        color="basil"
                                                        flat
                                                    >
                                                        <ValidationObserver v-slot="{ invalid }"
                                                                            :ref="'create_customs_tovar3_value'+key">
                                                        <v-row>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Тижорат хусусияти"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Тижорат хусусияти"
                                                                        required
                                                                        name="tijorat_xususiyati"
                                                                        v-model="application.tovarlar[key].product.tijorat_xususiyati"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>

                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Техник хусусияти"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Техник хусусияти"
                                                                        required
                                                                        name="texnik_xususiyati"
                                                                        v-model="application.tovarlar[key].product.texnik_xususiyati"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>

                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <ValidationProvider name="Юк жойларининг умумий сони"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Юк жойларининг умумий сони"
                                                                        required
                                                                        name="yuk_soni"
                                                                        v-model="application.tovarlar[key].product.yuk_soni"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>

                                                            </v-col>
                                                            <v-col cols="6">

                                                                <ValidationProvider name="Ўрам тури"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">

                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].product.oram_turi"
                                                                        label="Ўрам тури"
                                                                        name="oram_turi"
                                                                        required
                                                                        persistent-placeholder
                                                                        :items="oramlar"
                                                                    ></v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Ўрамлар сони"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Ўрамлар сони"
                                                                        required
                                                                        name="oram_soni"
                                                                        v-model="application.tovarlar[key].product.oram_soni"
                                                                        persistent-placeholder
                                                                    ></v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-dialog
                                                                v-model="application.tovarlar[key].dialog.ishlabchiqaruvchi"
                                                                persistent
                                                                max-width="600px"
                                                            >
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-col cols="4" class="position-relative d-flex justify-content-end" style="flex-direction: column">
                                                                        <label
                                                                            v-if="application.tovarlar[key].product.manufacturer.name && application.tovarlar[key].product.manufacturer.country">Товар ишлаб чиқарувчи</label>

                                                                        <v-btn
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                            min-width="100%"
                                                                            class="button-style-1"

                                                                        >
                                                                <span
                                                                    v-if="application.tovarlar[key].product.manufacturer.name && application.tovarlar[key].product.manufacturer.country">{{
                                                                        application.tovarlar[key].product.manufacturer.name
                                                                    }} ({{
                                                                        countries.filter(country => country.value === application.tovarlar[key].product.manufacturer.country)[0]['text']
                                                                    }})</span>
                                                                            <span v-else>Ишлаб чиқарувчи</span>
                                                                        </v-btn>
                                                                        <div class="errors_under_button">
                                                                            <ValidationProvider name="Ишлаб чиқарувчи ташкилот номи"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="hidden"
                                                                                       name="application_manufacturer_name"
                                                                                       :value="application.tovarlar[key].product.manufacturer.name">
                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                            <ValidationProvider name="Ишлаб чиқарувчи ташкилот давлати"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="hidden"
                                                                                       name="application_manufacturer_country"
                                                                                       :value="application.tovarlar[key].product.manufacturer.country">
                                                                                <span v-if="application.tovarlar[key].product.manufacturer.name">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                    </v-col>
                                                                </template>
                                                                <v-card>
                                                                    <v-card-title>
                                                            <span
                                                                class="text-h5">Товар ишлаб чиқарувчи тўғрисида маълумотлар</span>
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-container>
                                                                            <v-row>

                                                                                <v-col cols="6">
                                                                                    <v-text-field
                                                                                        label="Ишлаб чиқарувчи номи *"
                                                                                        required
                                                                                        persistent-placeholder
                                                                                        v-model="application.tovarlar[key].product.manufacturer.name"
                                                                                    ></v-text-field>

                                                                                </v-col>

                                                                                <v-col
                                                                                    cols="12"
                                                                                    sm="6"
                                                                                >
                                                                                    <v-autocomplete
                                                                                        :items="countries"
                                                                                        label="Ишлаб чиқарувчи мамлакати"
                                                                                        persistent-placeholder
                                                                                        v-model="application.tovarlar[key].product.manufacturer.country"
                                                                                    ></v-autocomplete>
                                                                                </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                        <small>* майдонлар тўлдирилиши шарт</small>
                                                                    </v-card-text>
                                                                    <v-card-actions>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="application.tovarlar[key].dialog.ishlabchiqaruvchi = false"
                                                                        >
                                                                            Сақлаш
                                                                        </v-btn>

                                                                    </v-card-actions>
                                                                </v-card>
                                                            </v-dialog>
<!--                                                            <v-dialog
                                                                v-model="dialog.tiftnqaror"
                                                                persistent
                                                                max-width="600px"
                                                            >
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-col cols="3" class="d-flex align-items-center">
                                                                        <v-btn
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                            class="button-style-1"
                                                                        >
                                                                            ТИФ ТН коди бўйича берилган дастлабки қарор
                                                                        </v-btn>
                                                                    </v-col>
                                                                </template>

                                                                <v-card>
                                                                    <v-card-title>
                                                            <span
                                                                class="text-h5">ТИФ ТН коди бўйича берилган қарор</span>
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-container>
                                                                            <v-row>

                                                                                <v-col cols="6">
                                                                                    <v-text-field
                                                                                        label="ТИФ ТН коди бўйича берилган дастлабки қарор рақами"
                                                                                        required
                                                                                        persistent-placeholder
                                                                                    ></v-text-field>
                                                                                </v-col>
                                                                                <v-col cols="6">
                                                                                    <v-menu
                                                                                        ref="menu_tiftnqarorsanasi"
                                                                                        v-model="application.tovarlar[key].menu.tftnqarorsanasi"
                                                                                        :save-on-content-click="false"
                                                                                        :return-value.sync="date"
                                                                                        transition="scale-transition"
                                                                                        offset-y
                                                                                        min-width="auto"
                                                                                    >
                                                                                        <template
                                                                                            v-slot:activator="{ on, attrs }">
                                                                                            <v-text-field
                                                                                                v-model="application.tovarlar[key].date"
                                                                                                label="ТИФ ТН код бўйича қарор санаси"
                                                                                                prepend-icon="mdi-calendar"
                                                                                                readonly
                                                                                                persistent-placeholder
                                                                                                v-bind="attrs"
                                                                                                v-on="on"
                                                                                            ></v-text-field>
                                                                                        </template>
                                                                                        <v-date-picker
                                                                                            v-model="application.tovarlar[key].date"
                                                                                            no-title
                                                                                            scrollable
                                                                                        >
                                                                                            <v-spacer></v-spacer>
                                                                                            <v-btn
                                                                                                text
                                                                                                color="primary"
                                                                                                @click="application.tovarlar[key].menu.tftnqarorsanasi = false"
                                                                                            >
                                                                                                Cancel
                                                                                            </v-btn>
                                                                                            <v-btn
                                                                                                text
                                                                                                color="primary"
                                                                                                @click="$refs.menu_tiftnqarorsanasi.save(date)"
                                                                                            >
                                                                                                OK
                                                                                            </v-btn>
                                                                                        </v-date-picker>
                                                                                    </v-menu>
                                                                                </v-col>


                                                                            </v-row>
                                                                        </v-container>
                                                                        <small>* майдонлар тўлдирилиши шарт</small>
                                                                    </v-card-text>
                                                                    <v-card-actions>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="application.tovarlar[key].dialog.tiftnqaror = false"
                                                                        >
                                                                            Ёпиш
                                                                        </v-btn>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="application.tovarlar[key].dialog.tiftnqaror = false"
                                                                        >
                                                                            Сақлаш
                                                                        </v-btn>
                                                                    </v-card-actions>
                                                                </v-card>
                                                            </v-dialog>-->
                                                            <v-dialog
                                                                v-model="dialog.tiftnqaror"
                                                                persistent
                                                                max-width="600px"
                                                            >
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-col cols="4" class="position-relative d-flex justify-content-end" style="flex-direction: column">
                                                                        <label
                                                                            v-if="application.tovarlar[key].product.tftnqaror.number && application.tovarlar[key].product.tftnqaror.date">ТИФ ТН коди бўйича берилган дастлабки қарор</label>
                                                                        <v-btn
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                            min-width="100%"
                                                                            class="button-style-1"
                                                                        >
                                                                 <span
                                                                     v-if="application.tovarlar[key].product.tftnqaror.number && application.tovarlar[key].product.tftnqaror.date">{{
                                                                         application.tovarlar[key].product.tftnqaror.number
                                                                     }} ({{ application.tovarlar[key].product.tftnqaror.date }})</span>
                                                                            <span
                                                                                v-else>ТИФ ТН коди бўйича берилган қарор</span>

                                                                        </v-btn>

                                                                    </v-col>
                                                                </template>

                                                                <v-card>
                                                                    <v-card-title>
                                                            <span
                                                                class="text-h5">ТИФ ТН коди бўйича берилган қарор</span>
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-container>
                                                                            <v-row>

                                                                                <v-col cols="6">
                                                                                    <v-text-field
                                                                                        v-model="application.tovarlar[key].product.tftnqaror.number"
                                                                                        label="ТИФ ТН код бўйича қарор рақами"
                                                                                        required
                                                                                        persistent-placeholder
                                                                                    ></v-text-field>
                                                                                </v-col>
                                                                                <v-col cols="6">
                                                                                    <v-menu
                                                                                        ref="menu_tiftnqarorsanasi"
                                                                                        v-model="application.tovarlar[key].menu.tftnqarorsanasi"
                                                                                        :close-on-content-click="false"
                                                                                        :return-value.sync="application.tovarlar[key].product.tftnqaror.date"
                                                                                        transition="scale-transition"
                                                                                        offset-y
                                                                                        min-width="auto"
                                                                                    >
                                                                                        <template
                                                                                            v-slot:activator="{ on, attrs }">
                                                                                            <v-text-field
                                                                                                v-model="application.tovarlar[key].product.tftnqaror.date"
                                                                                                label="ТИФ ТН код бўйича қарор санаси"
                                                                                                prepend-icon="mdi-calendar"
                                                                                                readonly
                                                                                                persistent-placeholder
                                                                                                v-bind="attrs"
                                                                                                v-on="on"
                                                                                            ></v-text-field>
                                                                                        </template>
                                                                                        <v-date-picker
                                                                                            v-model="application.tovarlar[key].product.tftnqaror.date"
                                                                                            no-title
                                                                                            scrollable
                                                                                        >
                                                                                            <v-spacer></v-spacer>
                                                                                            <v-btn
                                                                                                text
                                                                                                color="primary"
                                                                                                @click="application.tovarlar[key].menu.tftnqarorsanasi = false"
                                                                                            >
                                                                                                Cancel
                                                                                            </v-btn>
                                                                                            <v-btn
                                                                                                text
                                                                                                color="primary"
                                                                                                @click="$refs.menu_tiftnqarorsanasi[0].save(application.tovarlar[key].product.tftnqaror.date)"
                                                                                            >
                                                                                                OK
                                                                                            </v-btn>
                                                                                        </v-date-picker>
                                                                                    </v-menu>
                                                                                </v-col>


                                                                            </v-row>
                                                                        </v-container>
                                                                        <small>* майдонлар тўлдирилиши шарт</small>
                                                                    </v-card-text>
                                                                    <v-card-actions>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="dialog.tiftnqaror = false"
                                                                        >
                                                                            Ёпиш
                                                                        </v-btn>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="dialog.tiftnqaror = false"
                                                                        >
                                                                            Сақлаш
                                                                        </v-btn>
                                                                    </v-card-actions>
                                                                </v-card>
                                                            </v-dialog>

                                                        </v-row>

                                                        </ValidationObserver>
                                                    </v-card>
                                                </v-tab-item>
                                                <v-tab-item :key="3" eager>
                                                    <v-card
                                                        color="basil"
                                                        flat
                                                    >

                                                        <v-row>

                                                            <v-col cols="12" class="float-start">
                                                                <v-autocomplete
                                                                    v-model="application.tovarlar[key].product.usul"
                                                                    label="Божхона қийматини аниқлаш усули"
                                                                    required
                                                                    persistent-placeholder
                                                                    :items="usullar"
                                                                    name="usul"

                                                                ></v-autocomplete>
                                                            </v-col>

                                                            <v-col cols="12" v-if="application.tovarlar[key].product.usul">
                                                                <v-expansion-panels
                                                                    :value="0">
                                                                    <v-expansion-panel
                                                                        v-for="(item,i) in 5"
                                                                        :key="i"
                                                                        v-if="application.tovarlar[key].product.usul - 1 > i"
                                                                    >
                                                                        <v-expansion-panel-header>
                                                                            {{ item }} - усулни қўлламаслик сабаби
                                                                        </v-expansion-panel-header>
                                                                        <v-expansion-panel-content>
                                                                            <v-text-field :ref="'usultext' + key"
                                                                                filled
                                                                            ></v-text-field>
                                                                        </v-expansion-panel-content>
                                                                    </v-expansion-panel>
                                                                </v-expansion-panels>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-textarea
                                                                    label="Қўшича маълумотлар ва изоҳлар"
                                                                    rows="4"
                                                                    filled
                                                                    no-resize

                                                                >

                                                                </v-textarea>

                                                            </v-col>
                                                        </v-row>
                                                    </v-card>
                                                </v-tab-item>
                                            </v-tabs-items>
                                            <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                                <v-col class="d-flex tab_action_buttons">
                                                    <v-btn text
                                                           @click="prevStep"
                                                    >
                                                        Орқага
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="nextStep"
                                                        size="large"
                                                    >
                                                        Давом этиш
                                                    </v-btn>


                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </div>


                                </div>
                            </div>

                        </v-stepper-content>


                        <v-stepper-content step="4">
                            <v-card
                                class="mb-12 tolovlar-tab"
                            >
                                <v-row>

                                    <v-col cols="6">
                                        <v-list>
                                            <v-list-item class="ariza_nomer"> Ариза рақами: <span>ТШ000001 </span>
                                            </v-list-item>
                                            <v-list-item class="arizachi_fio"> Аризачи Ф.И.Ш: <span> Қодиров Азамат Усманович</span>
                                            </v-list-item>
                                            <v-list-item> Ишлаб чиқарувчи: <span> Unicon LTD</span></v-list-item>
                                            <v-list-item> Сотувчи: <span> Prisma LTD </span></v-list-item>
                                            <v-list-item> Жўнатувчи:<span> Cyan LTD </span></v-list-item>
                                        </v-list>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-list>
                                            <v-list-item class="">Божхона қийматини аниқлаш усули: <span>5-усул </span>
                                            </v-list-item>
                                            <v-list-item class=""> Етказиб бериш шарти: <span>CIP</span></v-list-item>
                                            <v-list-item> Илгари қабул қилинган дастлабки қарор:
                                                <span> № ДҚТШ 1651</span></v-list-item>
                                            <v-list-item> Қўшимча маълумотлар: <span> товар серияси XV156EFEF, ўлчами 50*30*20 </span>
                                            </v-list-item>
                                        </v-list>


                                    </v-col>
                                    <v-col cols="12" class="tolov_product_table">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        ТИФ ТН код
                                                    </th>
                                                    <th class="text-left">
                                                        Марка
                                                    </th>
                                                    <th class="text-left">
                                                        Модел
                                                    </th>
                                                    <th class="text-left">
                                                        Савдо белгиси
                                                    </th>
                                                    <th class="text-left">
                                                        Нетто оғирлик
                                                    </th>
                                                    <th class="text-left">
                                                        Брутто оғирлик
                                                    </th>
                                                    <th class="text-left">
                                                        Фактура қиймати
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr
                                                >
                                                    <td>23432424</td>
                                                    <td>asd asda das a</td>
                                                    <td>asd asda das a</td>
                                                    <td>asd asda das a</td>
                                                    <td>asd asda das a</td>
                                                    <td>asd asda das a</td>
                                                    <td>asd asda das a</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                    </v-col>

                                </v-row>
                                <v-row>
                                    <v-col class="d-flex justify-content-end summary-div">
                                        <div>
                                            Дастлабки қарор қабул қилганлик учун йиғим: 189 000 сўм
                                            <v-icon small color="primary">mdi-information-outline</v-icon>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-list class="payment_systems">

                                    <v-list-item>
                                        Тўлов тизимлари орқали тўловни амалга оширинг:
                                    </v-list-item>
                                    <v-list-item>
                                        <v-row class="payment_systems_items">
                                            <v-list class="">

                                                <v-list-item class="payme"></v-list-item>
                                                <v-list-item class="upay"></v-list-item>
                                                <v-list-item class="click"></v-list-item>
                                                <v-list-item class="oz_hisobidan">Божхона органларидаги ҳисоб
                                                    рақамидан
                                                </v-list-item>

                                            </v-list>
                                        </v-row>
                                    </v-list-item>
                                </v-list>

                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                            </v-card>

                        </v-stepper-content>
                    </v-stepper-items>

                </v-stepper>
            </v-container>
        </div>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/uz.json';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "Initialdecision",
    data() {
        return {
            stepper: 1,
            search_country: null,
            search_currency: null,
            search_tftn: null,
            countries: [],
            transport_type: null,
            regions: [
                {
                    text: "Қорақалпоғистон Республикаси",
                    value: 0
                }, {
                    text: "Хоразм вилояти",
                    value: 1
                }
            ],
            inkoterms: [
                {text: 'EXW', value: 1},
                {text: 'FCA', value: 2},
                {text: 'FAS', value: 3},
                {text: 'FOB', value: 4},
                {text: 'CFR', value: 5},
                {text: 'CIF', value: 6},
                {text: 'CPT', value: 7},
                {text: 'CIP', value: 8},
                {text: 'DAF', value: 9},
                {text: 'DES', value: 10},
                {text: 'DEQ', value: 11},
                {text: 'DDU', value: 12},
                {text: 'DDP', value: 13},
                {text: 'DAР', value: 14},
                {text: 'DAT', value: 15},
                {text: '---', value: 16},
            ],
            oramlar:[
                {text:'oram1',value:1}
            ],
            usullar:[
                {text:'1-усул, Олиб кириладиган товарга доир битимнинг қиймати бўйича',value:1},
                {text:'2-усул, Айнан бир xил товарга доир битимнинг қиймати бўйича',value:2},
                {text:'3-усул, Ўxшаш товарга доир битимнинг қиймати бўйича',value:3},
                {text:'4-усул, Қийматларни чегириб ташлаш',value:4},
                {text:'5-усул, Қийматларни қўшиш',value:5},
                {text:'6-усул, Захира',value:6}
            ],
            tftncodes: [],
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Божхона қиймати дастлабки қарорини олиш',
                    to: '/services/decisions',
                    disabled: true,
                    exact: true,
                },
            ],
            document_types: [
                {
                    'text': "220 - ИНВ",
                    'value': 220,
                }
            ],
            tovarlar: [
                {
                    tab: 0,
                    product: {
                        tftn: null,
                        transport_type: null,
                        currency: null,
                        transportations: null,
                        weight: null,
                        unit2: null,
                        size: null,
                        brutto: null,
                        netto: null,
                        price: null
                    },
                    dialog: {
                        transportturi: false,
                        tiftnqaror: false,
                        ishlabchiqaruvchi: false,
                    },
                    menu: {
                        dastlabkiqarorsanasi: null,
                        tiftnqaror: null,
                        tftnqarorsanasi: null
                    },
                    transportation: {
                        country_from: null
                    },


                },

            ],
            tovarIndex: 0,
            application: {

                date: "",
                dastlabkiqarorsanasi: false,
                inkoterms: null,
                shipping_address: "",
                sender: {
                    name: "",
                    country: "",
                },
                seller: {
                    name: "",
                    country: "",
                },
                old_decision: {
                    number: null,
                    date: "",
                },
                transportations: [
                    {
                        country_from: null,
                        country_to: null,
                        transport_type: null,
                        price: null,
                    }
                ],
                documents: [
                    {
                        type: null,
                        number: null,
                        date: null,
                        file: null,
                        menu: false
                    }
                ],
                errors: {
                    transportation_error: "",
                },

                tovarlar: [
                    {
                        tab: 0,
                        product: {
                            tftn: null,
                            transport_type: null,
                            currency: null,
                            transportations: null,
                            weight: null,
                            unit2: null,
                            size: null,
                            brutto: null,
                            netto: null,
                            price: null,
                            trade_name:"",
                            trade_mark:"",
                            mark:"",
                            model:"",
                            article:"",
                            nav:"",
                            standart:"",
                            color:"",
                            maqsad:"",
                            texnik_xususiyati:"",
                            tijorat_xususiyati:"",
                            yuk_soni:null,
                            oram_turi:null,
                            manufacturer:{
                                name:"",
                                country:"",
                            },
                            tftnqaror:{
                                name:"",
                                date:null,
                            },
                            usul:null

                        },
                        dialog: {
                            transportturi: false,
                            tiftnqaror: false,
                            ishlabchiqaruvchi: false,
                        },
                        menu: {
                            dastlabkiqarorsanasi: null,
                            tiftnqaror: null,
                            tftnqarorsanasi: null
                        },
                        transportation: {
                            country_from: null
                        },


                    },

                ],


            },
            person: {
                type: 1, /// 1- fiz 0- yur
                fio: "",
                pin: null,
                tin: null,
                organization_name: null,
                position: null,
                phone: null,
                email: null,
                dqaror: null,
                tftnqaror:{
                    number:null,
                    date:null,
                }

            },
            currencies: [{
                text: "АқШ доллари",
                value: 840
            }],
            transports: [{
                text: "30 - Авто",
                value: 30
            }],

            items: [
                {tab: 0, content: 'Умумий маълумотлар'},
                {tab: 1, content: 'Таснифи'},
                {tab: 2, content: 'Хусусиятлари'},
                {tab: 2, content: 'Қўшимча маълумотлар'},
            ],

            doc: {
                type: null,
                file: null,
            },
            tabs: {
                tovar: 1,
                additional_docs: 0
            },

            copytovar: {
                tab: 0,
                product: {
                    tftn: null,
                    transport_type: null,
                    currency: null,
                    transportations: null
                },
                dialog: {
                    transportturi: false,
                    dastlabkiqaror: false,
                    tiftnqaror: false,
                    jonatuvchi: false,
                    sotuvchi: false,
                    ishlabchiqaruvchi: false,
                },
                menu: {
                    dastlabkiqarorsanasi: null,
                    tiftnqaror: null,
                    tftnqarorsanasi: null
                },
                transportation: {
                    country_from: null
                }

            },
            tab: 0,
            dialog: {
                dastlabkiqaror: false,
                tiftnqaror: false,
                ishlabchiqaruvchi: false,
                sotuvchi: false,
                jonatuvchi: false,
                tovarxus: false,
                tovarmark: false,

            },
            loading: {
                tftncode: false,
                country_transport_type_from: false
            },
            transport_turi_chips: [
                '30-Авто',
                '20-ЖД',
            ],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: {
                valyuta: false,
                dastlabkiqaror: false,
                dastlabkiqarorsanasi: false,
                tftnqarorsanasi: false,
                hujjatsanasi: false
            },
            modal: false,
            completedSteps: []
        }
    },
    watch: {
        search_tftn: {
            handler: function (val) {

                if (val.length > 10) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.tftncode = true

                // Lazily load input items
                fetch("https://new.customs.uz/api/v1/data/tftn?code=" + val)
                    .then((res) => res.json())
                    .then(res => {
                        res.map(function (item) {
                            item.name = item.id + " - " + item.name;
                            return item;
                        })
                        this.tftncodes = res;
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (
                        this.loading.tftncode = false
                    ))
            },
            deep: true
        },
        search_country: function (val) {

            //if (val.length > 10) return
            if (this.transportation.country_from && this.transportation.country_from.CODE + " - " + this.transportation.country_from.CD_NM == this.search_country) return

            // Items have already been requested
            //if (this.loading.tftncode) return

            this.loading.country_transport_type_from = true

            // Lazily load input items
            fetch("https://new.customs.uz/api/v1/data/country?name=" + val + '&lang=uz')
                .then((res) => res.json())
                .then(res => {
                    res.map(function (item) {
                        item.name = item.CODE + " - " + item.CD_NM;
                        item.id = item.CODE;
                        return item;
                    })
                    this.countries = res;
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (
                    this.loading.country_transport_type_from = false
                ))

        },
        search_currency: function (v) {

        }
    },
    methods: {
/*        InputFocus(){
            console.log(this.$refs.usultext0.$el);
        },*/
        selectTabTovar(id = 0) {

            this.tovarIndex = id;
        },
        AddProduct() {
            this.tovarlar.push(this.copytovar);
        },
        AddDocument() {
            this.application.documents.push([
                {
                    type: null,
                    number: null,
                    date: null,
                    file: null,
                    menu: false
                }
            ]);
        },
        addTransportation() {
            this.application.transportations.push([{
                country_from: null,
                country_to: null,
                transport_type: null,
                price: null,
            }])
        },
        removeDocument(document) {
            this.application.documents.splice(document, 1);
        },
        removeTransportation(transportation) {
            this.application.transportations.splice(transportation, 1);
        },
        RemoveProduct(product) {
            if (this.tovarlar.length > 1) {
                this.tovarlar.splice(product, 1);
                $(".product_parts .nav-link").removeClass(["show active"]);
                $(".product_parts").closest('div').find('.tab-pane').removeClass(["show", "active"]);
                $('#v-pills-profile' + (product - 1)).addClass(["show", "active"]);
                $('[data-id="' + (product - 1) + '"]').addClass(["active"]);
            }

        },
        filterObject(objects, element, prop = 'value') {
            console.log(objects);
            return objects.filter(function (item) {

                if (item && item[prop] === parseInt(element)) {
                    return item;
                }
            })
            //return (objects.find(object => { object[prop] === parseInt(element)}))
        },
        async nextStep() {
            let isValid = false;
            switch (this.stepper) {
                case 1:
                    //console.log(!this.validateField("create_customs_person_value"))
                    isValid = await this.validateField("create_customs_person_value");
                    isValid = true;
                    if (isValid) {
                        if (this.countries.length < 1) this.getCountries();
                        this.stepper = 2;
                        this.completedSteps.push(this.stepper - 1);
                    }
                    break;

                case 2:
                    isValid = await this.validateField("create_customs_yuk_kuzatuv_value");
                    isValid = true;
                    if (!isValid) {
                        this.tabs.additional_docs = 0;

                    } else {

                        if (!this.$refs['create_customs_yuk_ilovalar_value']) this.tabs.additional_docs = 1;
                        setTimeout(async () => {
                            isValid = await this.validateField("create_customs_yuk_ilovalar_value");
                            isValid = true;
                            if (!isValid) this.tabs.additional_docs = 1;
                            else {
                                this.stepper = 3;
                                this.completedSteps.push(this.stepper - 1);
                            }
                        });
                    }

                    //isValid = true;
                    // this.tabs.additional_docs = 0;
                    //isValid = false;
                    /*            if (isValid) {
                                    this.stepper = 3;
                                    this.completedSteps.push(this.stepper - 1);
                                }*/
                    break;

                case 3:
                    //setTimeout(async () => {
                    isValid = await this.validateField("create_customs_tovar1_value"+this.tovarIndex)
                    // },3000);
                    isValid=true;
                    if (!isValid) {
                        this.application.tovarlar[this.tovarIndex].tab = 0;

                    } else {
                        console.log('asd');
                        //if (!this.$refs['create_customs_tovar2_value']) this.tabs.additional_docs = 1;
                        setTimeout(async () => {
                            isValid = await this.validateField("create_customs_yuk_ilovalar_value"+this.tovarIndex);
                            isValid = true;
                            if (!isValid) this.tabs.additional_docs = 1;
                            else {
                                this.stepper = 4;
                                this.completedSteps.push(this.stepper - 1);
                            }
                        });
                    }

                    /*

                                        this.stepper = 4;
                                        this.completedSteps.push(this.stepper - 1);*/
                    break;

                case 4:
                    this.stepper = 4;
                    this.completedSteps.push(this.stepper - 1);
                    break;

            }


        },
        prevStep() {
            switch (this.stepper) {
                case 1:
                    this.stepper = 1;
                    break;

                case 2:
                    this.stepper = 1;
                    break;

                case 3:
                    this.stepper = 2;
                    break;

                case 4:
                    this.stepper = 3;
                    break;

            }
        },
        goStep(step = 1) {
            if (this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) {
                this.stepper = step;
            }
        },
        isCompleted(step) {
            if (this.completedSteps.includes(step)) {
                //console.log(step);
                return true;
            } else return false;

        },
        async validateField(field) {
            let provider = this.$refs[field];
            if (Array.isArray(provider)) provider = provider[0];
            // Validate the field
            if(provider) return await provider.validate();
        },
        async getCountries() {
            let root = this
            await axios.get('/api/v1/data/country?lang=uz').then(function (result) {
                let countries = [];
                result.data.forEach(function (item) {
                    countries.push({
                        'value': item['CD_ID'],
                        'text': item['CD_NM']
                    })
                })
                root.countries = countries;
            })
        }

    },
    components: {
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
