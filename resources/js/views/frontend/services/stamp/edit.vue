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
                        <h3 align="center" class="lh-sm font-weight-bold primary-color">
                            Ўзбекистон Республикасига олиб кириладиган товарларга тўланиши лозим бўлган <br> божхона
                            тўловлари миқдорини аниқлаш бўйича дастлабки қарор олиш
                            <br>
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
                        <!--

                                                <v-divider></v-divider>

                                                <v-stepper-step
                                                    step="4"
                                                    @click="goStep(4)"
                                                    :complete="isCompleted(4)"
                                                >
                                                    Ариза юбориш
                                                </v-stepper-step>-->
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/dastlabki-user-qaytarilgan.pptx"> Ариза тўлдириш бўйича
                                    йўриқмани юклаб олинг!
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="create_customs_person_value">
                                    <v-row>

                                        <v-col cols="3" class="d-flex align-items-center jis_yur">
                                            <!--                                        <div class="form-field d-flex align-items-center jis_yur">
                                                                                        <label :class="person.type==0?'primary':''">Юридик шахс</label>

                                                                                        <v-switch v-model="person.type"></v-switch>
                                                                                        <label :class="person.type==1?'primary':''">Жисмоний шахс</label>

                                                                                    </div>-->

                                            <!--                                            <v-btn-toggle
                                                                                            v-model="person.type"

                                                                                            tile
                                                                                            group
                                                                                            mandatory
                                                                                        >-->


                                            <v-btn color="primary" v-if="person.type==='01'">
                                                Жисмоний шахс
                                            </v-btn>
                                            <v-btn color="primary" v-if="person.type==='02'">
                                                Юридик шахс
                                            </v-btn>
                                            <!--

                                                                                        </v-btn-toggle>-->

                                        </v-col>
                                    </v-row>
                                    <v-row class="person_data">
                                        <v-col cols="6" v-if="person.type==='01'">
                                            <ValidationProvider name="ЖШШИР" rules="required|digits:14"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.pin"
                                                    :counter="14"
                                                    label="ЖШШИР"
                                                    required
                                                    disabled
                                                    type="number"
                                                    persistent-hint
                                                    hint="ЖШШИР - жисмоний шахснинг шахсий идентификацион рақами"
                                                >
                                                    <template v-slot:label>ЖШШИР <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6" v-else>
                                            <ValidationProvider name="Ташкилот номи" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.organization_name"
                                                    :counter="200"
                                                    label="Ташкилот номи"
                                                    required
                                                    disabled
                                                    hint="Юридик шахснинг тўлиқ номи"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Ташкилот номи <sup>*</sup></template>

                                                </v-text-field>
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
                                                    required
                                                    disabled
                                                    hint="Солиқ тўловчининг идентификацион рақами"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>СТИР <sup>*</sup></template>

                                                </v-text-field>
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
                                                    disabled
                                                    hint="Аризачининг фамилияси, исми, шарифи"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>Фамилияси исми шарифи <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>

                                        <v-col cols="6" v-if="person.type==='02'">
                                            <ValidationProvider :slim="(person.type!=='01')" v-if="person.type==='02'"
                                                                name="Лавозими" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.position"
                                                    :counter="200"
                                                    required
                                                    disabled
                                                    hint="Аризачининг ташкилотдаги лавозими"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Лавозими <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Манзили" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.perAdr"
                                                    :counter="200"
                                                    required
                                                    :hint="person.type==='01'?'Аризачининг манзили':'Юридик шахснинг манзили'"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Манзили <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Ҳудуд" rules="required"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    v-model="person.region"

                                                    disabled
                                                    hint="Ҳудудий божхона бошқармаси жойлашган ҳудуд"
                                                    :items="regions"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>Ҳудудни танланг <sup>*</sup></template>
                                                </v-autocomplete>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider name="Телефон рақами" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.phone"
                                                    label="Телефон рақами"
                                                    required
                                                    v-mask="'+998 ## ### ## ##'"
                                                    hint="Аризачининг телефон рақами"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>Телефон рақами <sup>*</sup></template>
                                                </v-text-field>
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
                                                >
                                                    <template v-slot:label>Электрон почта манзили <sup>*</sup>
                                                    </template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>

                                    </v-row>

                                </ValidationObserver>
                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">

                                        <v-btn text style="width: 240px" color="warning"
                                               @click="dialog.openDialogComment=true"
                                        >
                                            <v-icon>mdi-comment-alert</v-icon>
                                            &nbsp; Инспектор хабари
                                        </v-btn>

                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                                <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                    style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!</i>


                                </v-row>

                            </v-card>

                        </v-stepper-content>

                        <v-stepper-content step="2">

                            <v-card
                                class="mb-12 "
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/dastlabki-user-qaytarilgan.pptx"> Ариза тўлдириш бўйича
                                    йўриқмани юклаб олинг!
                                </a></div>

                                <!--                                    <v-tab-item>-->
                                <v-card
                                    color="basil"
                                    flat
                                    style="border: 1px dashed #ccc"
                                >
                                    <ValidationObserver v-slot="{ invalid }"
                                                        ref="create_customs_yuk_kuzatuv_value">
                                        <v-row class="align-end">

                                            <v-dialog
                                                v-model="dialog.jonatuvchi"
                                                max-width="600px"

                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-col cols="6" class="position-relative">
                                                        <label
                                                            v-if="application.sender.name && application.sender.country">Юк
                                                            жўнатувчи <sup>*</sup></label>

                                                        <v-btn
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            min-width="100%"
                                                            class="button-style-1">
                                                                <span
                                                                    v-if="application.sender.name && application.sender.country>0">{{
                                                                        application.sender.name
                                                                    }} ({{
                                                                        countries.filter(country => country.value === application.sender.country).length > 0 ? countries.filter(country => country.value === application.sender.country)[0]['text'] : ''
                                                                    }})</span>
                                                            <span v-else>Юк жўнатувчи <sup>*</sup></span>
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
                                                                        persistent-hint
                                                                        v-model="application.sender.name"
                                                                    ></v-text-field>

                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                >
                                                                    <v-autocomplete
                                                                        :items="countries"
                                                                        label="Юк жўнатувчи мамлакати *"
                                                                        persistent-placeholder
                                                                        v-model="application.sender.country"
                                                                        autofocus
                                                                        hide-selected
                                                                    >
                                                                        <template v-slot:item="data">
                                                                            <template
                                                                                v-if="typeof data.item !== 'object'">
                                                                                {{ data.item }}
                                                                            </template>
                                                                            <template v-else>

                                                                                <flag :iso="data.item.code"
                                                                                      style="font-size: 20px"/>
                                                                                <span
                                                                                    class="ml-4">{{
                                                                                        data.item.text
                                                                                    }}</span>


                                                                            </template>
                                                                        </template>
                                                                        <template v-slot:selection="data">
                                                                            <template
                                                                                v-if="typeof data.item !== 'object'">
                                                                                {{ data.item }}
                                                                            </template>
                                                                            <template v-else>

                                                                                <flag :iso="data.item.code"
                                                                                      style="font-size: 20px"/>
                                                                                <span
                                                                                    class="ml-4">{{ data.item.text }}</span>


                                                                            </template>
                                                                        </template>


                                                                    </v-autocomplete>
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
                                                            Сақлаш
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                            <v-dialog
                                                v-model="dialog.sotuvchi"

                                                max-width="600px"

                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-col cols="6" class="position-relative">
                                                        <label
                                                            v-if="application.seller.name && application.seller.country">Сотувчи
                                                            <sup>*</sup></label>
                                                        <v-btn
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            min-width="100%"
                                                            class="button-style-1"

                                                        >
                                                                <span
                                                                    v-if="application.seller.name && application.seller.country>0">{{
                                                                        application.seller.name
                                                                    }}({{
                                                                        (countries.filter(country => country.value === application.seller.country).length > 0) ? countries.filter(country => country.value === application.seller.country)[0]['text'] : ''
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
                                                                        label="Сотувчи мамлакати *"
                                                                        v-model="application.seller.country"
                                                                        persistent-placeholder
                                                                    >
                                                                        <template v-slot:item="data">
                                                                            <template
                                                                                v-if="typeof data.item !== 'object'">
                                                                                {{ data.item }}
                                                                            </template>
                                                                            <template v-else>

                                                                                <flag :iso="data.item.code"
                                                                                      style="font-size: 20px"/>
                                                                                <span
                                                                                    class="ml-4">{{
                                                                                        data.item.text
                                                                                    }}</span>


                                                                            </template>
                                                                        </template>
                                                                        <template v-slot:selection="data">
                                                                            <template
                                                                                v-if="typeof data.item !== 'object'">
                                                                                {{ data.item }}
                                                                            </template>
                                                                            <template v-else>

                                                                                <flag :iso="data.item.code"
                                                                                      style="font-size: 20px"/>
                                                                                <span
                                                                                    class="ml-4">{{
                                                                                        data.item.text
                                                                                    }}</span>


                                                                            </template>
                                                                        </template>
                                                                    </v-autocomplete>
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
                                                            Сақлаш
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


                                            <v-col cols="12"></v-col>
                                            <v-col cols="6">
                                                <ValidationProvider name="Етказиб бериш шарти"
                                                                    v-slot="{ errors }" rules="required">
                                                    <v-autocomplete
                                                        v-model="application.inkoterms"
                                                        label="Товарни етказиб бериш шарти *"
                                                        persistent-hint
                                                        hint="Товарни етказиб бериш шарти"
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
                                                        label="Етказиб бериш манзили *"
                                                        required
                                                        hint="Етказиб бериш манзили"
                                                        persistent-hint
                                                        v-model="application.shipping_address"
                                                    >

                                                    </v-text-field>
                                                    <span class="red--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>


                                            <v-col cols="12">
                                                <div
                                                    class="border-bottom-dashed chips-dialog"
                                                    @click="openTransportturi"

                                                >
                                                    <span>Товарнинг транспортлардаги ҳаракати: {{
                                                            application.inkoterms === '06' || application.inkoterms === '08' ? '' : '*'
                                                        }}</span>
                                                    <v-chip-group
                                                        mandatory
                                                        style="height: 50px" class="d-block"


                                                    >
                                                        <v-chip
                                                            v-if="isValidTransportTuri(key)"
                                                            v-for="(transportation,key) in application.transportations"
                                                            :key="key"
                                                            Ёпиш
                                                            :close="key!=0?true:false"
                                                            @click:close="removeTransportation(key)"
                                                        >
                                                            <template slot="default">
                                                                <!-- HTML that describe how select should render items when the select is open -->
                                                                <!--                                                                                {{ data.item.value }} - -->
                                                                <span class="v-chip__content"
                                                                      style="font-size: 15px">{{
                                                                        getCountryByCode(transportation.country_from) && getCountryByCode(transportation.country_from) ? getCountryByCode(transportation.country_from).text : ''
                                                                    }}-{{
                                                                        getCountryByCode(transportation.country_to) ? getCountryByCode(transportation.country_to).text : ''
                                                                    }}/[{{
                                                                        (filterObject(transports, transportation.transport_type) && filterObject(transports, transportation.transport_type)[0]) ? (filterObject(transports, transportation.transport_type))[0].text : ''
                                                                    }}]
                                                                            </span>
                                                            </template>


                                                        </v-chip>
                                                    </v-chip-group>
                                                </div>
                                                <v-input
                                                    :messages="['Товарнинг ҳаракат йўналишини кўрсатинг ']"
                                                />
                                                <!--                                                <span class="error&#45;&#45;text"
                                                                                                      :class="(application.inkoterms==='06' || application.inkoterms==='08')?'':'d-none'">-->
                                                <ValidationProvider
                                                    ref="transportharakati"
                                                    name="Транспорт ҳаракати"
                                                    v-show="isvalidTransport "
                                                    v-slot="{ errors }">
                                                        <span class="error--text">
                                                       {{
                                                                errors[0]
                                                            }}
                                                              </span>
                                                </ValidationProvider>


                                            </v-col>
                                            <v-dialog
                                                v-model="dialog.transportturi"

                                                max-width="1200px"

                                            >
                                                <v-card class="scroll_card">
                                                    <v-card-title class=" px-4 py-4">
                                                            <span
                                                                class="text-h5 white--text">Товарнинг ҳаракат йўналиши </span>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-container>
                                                            <v-row>
                                                                <v-col cols="2">
                                                                    <v-fab-transition>

                                                                        <v-btn
                                                                            color="primary"
                                                                            dark
                                                                            center
                                                                            large
                                                                            @click="addTransportation"
                                                                            style="height:35px;"
                                                                        >

                                                                            <v-icon>mdi-plus
                                                                            </v-icon>
                                                                            Қўшиш

                                                                        </v-btn>
                                                                    </v-fab-transition>
                                                                </v-col>
                                                                <v-col cols="12">

                                                                </v-col>
                                                            </v-row>
                                                            <ValidationObserver v-slot="{ invalid }"
                                                                                ref="create_customs_transport_yunalish">


                                                                <v-row
                                                                    v-for="(transportation,key) in transportations"
                                                                    :key="key">

                                                                    <v-col cols="3">
                                                                        <ValidationProvider
                                                                            name="Жўнатиладиган давлат"
                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                            v-slot="{ errors }">


                                                                            <v-autocomplete
                                                                                label="Давлатни танланг"
                                                                                required
                                                                                v-model="transportations[key].country_from"
                                                                                persistent-hint
                                                                                hide-no-data
                                                                                :items="countries"
                                                                                :loading="loading.country_transport_type_from"
                                                                                hint="Чиқувчи давлатни танланг"
                                                                                clearable
                                                                            >
                                                                                <template
                                                                                    slot="append-outer">
                                                                                    дан
                                                                                </template>
                                                                                <template v-slot:item="data">
                                                                                    <template
                                                                                        v-if="typeof data.item !== 'object'">
                                                                                        {{ data.item }}
                                                                                    </template>
                                                                                    <template v-else>

                                                                                        <flag :iso="data.item.code"
                                                                                              style="font-size: 20px"/>
                                                                                        <span
                                                                                            class="ml-4">{{
                                                                                                data.item.text
                                                                                            }}</span>


                                                                                    </template>
                                                                                </template>
                                                                                <template v-slot:selection="data">
                                                                                    <template
                                                                                        v-if="typeof data.item !== 'object'">
                                                                                        {{ data.item }}
                                                                                    </template>
                                                                                    <template v-else>

                                                                                        <flag :iso="data.item.code"
                                                                                              style="font-size: 20px"/>
                                                                                        <span
                                                                                            class="ml-4">{{
                                                                                                data.item.text
                                                                                            }}</span>


                                                                                    </template>
                                                                                </template>

                                                                            </v-autocomplete>
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                    </v-col>
                                                                    <v-col cols="3">
                                                                        <ValidationProvider name="Кирувчи давлат"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <v-autocomplete
                                                                                label="Давлатни танланг"
                                                                                required
                                                                                v-model="transportations[key].country_to"
                                                                                persistent-hint
                                                                                :items="countries"
                                                                                clearable
                                                                                hint="Келувчи давлатни танланг"
                                                                            >
                                                                                <template
                                                                                    slot="append-outer">
                                                                                    гача
                                                                                </template>
                                                                                <template v-slot:item="data">
                                                                                    <template
                                                                                        v-if="typeof data.item !== 'object'">
                                                                                        {{ data.item }}
                                                                                    </template>
                                                                                    <template v-else>

                                                                                        <flag :iso="data.item.code"
                                                                                              style="font-size: 20px"/>
                                                                                        <span
                                                                                            class="ml-4">{{
                                                                                                data.item.text
                                                                                            }}</span>


                                                                                    </template>
                                                                                </template>
                                                                                <template v-slot:selection="data">
                                                                                    <template
                                                                                        v-if="typeof data.item !== 'object'">
                                                                                        {{ data.item }}
                                                                                    </template>
                                                                                    <template v-else>

                                                                                        <flag :iso="data.item.code"
                                                                                              style="font-size: 20px"/>
                                                                                        <span
                                                                                            class="ml-4">{{
                                                                                                data.item.text
                                                                                            }}</span>


                                                                                    </template>
                                                                                </template>

                                                                            </v-autocomplete>
                                                                            <span class="red--text"
                                                                                  v-if="transportations[key].country_from">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                    </v-col>
                                                                    <v-col cols="3">
                                                                        <ValidationProvider name="Транспорт тури"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }">
                                                                            <v-autocomplete
                                                                                v-model="transportations[key].transport_type"
                                                                                label="Транспорт тури"
                                                                                persistent-hint
                                                                                required
                                                                                hint="Ташишда фойдаланиладиган транспорт тури"
                                                                                :items="transports"
                                                                                clearable
                                                                            ></v-autocomplete>
                                                                            <span class="red--text"
                                                                                  v-if="transportations[key].country_from && transportations[key].country_to">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                    </v-col>
                                                                    <v-col cols="3"
                                                                           class="d-flex justify-content-between">
                                                                        <ValidationProvider name="Ташиш ҳаражати"
                                                                                            :rules="(application.inkoterms===6 || application.inkoterms===8)?'':'required'"
                                                                                            v-slot="{ errors }"
                                                                                            style="flex: 0 0 85%;"
                                                                        >
                                                                            <v-text-field
                                                                                v-model="transportations[key].price"
                                                                                label="Ташиш ҳаражати"
                                                                                persistent-hint
                                                                                hint="Товарни ташиш ва юклаш ҳаражатлари"
                                                                                type="number"
                                                                            >
                                                                                <template
                                                                                    slot="append"><span
                                                                                    style="white-space: nowrap">(UZS) сўм</span>
                                                                                </template>
                                                                            </v-text-field>
                                                                            <span class="red--text"
                                                                                  v-if="transportations[key].country_from && transportations[key].country_to && transportations[key].transport_type">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
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
                                                            </ValidationObserver>
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
                                                            @click="saveTransportTuri"
                                                        >
                                                            Сақлаш
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                            <v-col cols="12" class="position-relative">
                                                <div
                                                    class="border-bottom-dashed chips-dialog"
                                                    @click="openDocumentType"
                                                >
                                                    <span>Илова қилинадиган ҳужжатлар: *</span>
                                                    <v-chip-group
                                                        mandatory
                                                        style="height: 50px" class="d-block"

                                                    >
                                                        <v-chip
                                                            v-for="(doc,key) in application.documents"
                                                            :key="key"
                                                            v-if="doc.id && doc.type"
                                                            @click:close="removeDocument(key)"
                                                        >
                                                            <template slot="default">
                                                                <!-- HTML that describe how select should render items when the select is open -->
                                                                <!--                                                                                {{ data.item.value }} - -->
                                                                <span class="v-chip__content"
                                                                      style="font-size: 15px">
                                                                        {{ doc.type }}
                                                                            </span>
                                                            </template>
                                                        </v-chip>
                                                    </v-chip-group>
                                                </div>

                                                <v-input
                                                    :messages="['Юк тўғрисидаги ҳужжатларни илова қилинг']"
                                                />
                                                <ValidationProvider
                                                    ref="hujjatilova"
                                                    name="Илова қилинадиган ҳужжатлар"
                                                    v-show="isvalidDocument"
                                                    v-slot="{ errors }">
                                                        <span class="error--text">
                                                       {{
                                                                errors[0]
                                                            }}
                                                              </span>
                                                </ValidationProvider>
                                                <!--
                                                        <v-input
                                                            :messages="['Транспорт тури маълумотлари тўлдирилиши шарт! ']"
                                                        />-->

                                            </v-col>
                                            <v-dialog
                                                v-model="dialog.documenttype"
                                                max-width="700px"

                                            >

                                                <v-card class="scroll_card" light>
                                                    <v-card-title class=" px-4 py-4">
                                                            <span
                                                                class="text-h5 white--text">Илова қилинадиган ҳужжатлар </span>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-container>
                                                            <v-row>

                                                                <v-col cols="12">
                                                                    <v-fab-transition>

                                                                        <v-btn
                                                                            color="primary"
                                                                            dark
                                                                            center
                                                                            large
                                                                            class="float-end"
                                                                            @click="AddDocument"
                                                                            style="height:35px;"
                                                                        >

                                                                            <v-icon>mdi-plus
                                                                            </v-icon>
                                                                            Файл Қўшиш

                                                                        </v-btn>
                                                                    </v-fab-transition>
                                                                    <a class="float-left"
                                                                       style="border: 2px dashed;  width:50%; border-radius: 15px; padding: 10px 20px 5px;"
                                                                       @click="authorizeToEArxiv">Э-архив тизимига
                                                                        ўтиш </a>

                                                                </v-col><!--
                                                                    <v-col cols="12">

                                                                    </v-col>-->
                                                            </v-row>
                                                        </v-container>
                                                        <v-container>
                                                            <ValidationObserver v-slot="{ invalid }"
                                                                                ref="create_customs_documents"
                                                                                style="display: flex; flex-direction: column-reverse"
                                                            >
                                                                <v-row
                                                                    v-for="(doc,key) in documents"
                                                                    :key="key">

                                                                    <v-col cols="12">
                                                                        <ValidationProvider
                                                                            name="ID рақами"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                                            <v-text-field
                                                                                v-model="documents[key].id"
                                                                                label="ID рақами"
                                                                                persistent-hint
                                                                                loading
                                                                                counter="13"
                                                                                @keyup="myColor(documents[key].id,key)"
                                                                                @keydown="myColor(documents[key].id,key)"
                                                                                @change="myColor(documents[key].id,key)"
                                                                                hint="Ҳужжатнинг е-архив тизимидаги Fayl ID рақами"
                                                                            >
                                                                                <template v-slot:append>
                                                                                    <v-icon color="primary"
                                                                                            v-if="documents[key].valid">
                                                                                        mdi-check
                                                                                    </v-icon>
                                                                                    <v-icon color="red" v-else>
                                                                                        mdi-close
                                                                                    </v-icon>
                                                                                </template>
                                                                                <template v-slot:append-outer>
                                                                                    <v-btn
                                                                                        color="danger"
                                                                                        dark
                                                                                        center
                                                                                        x-small
                                                                                        fab>
                                                                                        <v-icon
                                                                                            @click="removeDocument(key)">
                                                                                            mdi-minus
                                                                                        </v-icon>
                                                                                    </v-btn>
                                                                                </template>
                                                                                <template v-slot:progress>
                                                                                    <v-progress-linear
                                                                                        :value="Initprogress(documents[key].id)"
                                                                                        :color="documents[key].color"
                                                                                        absolute
                                                                                        height="3"
                                                                                    ></v-progress-linear>
                                                                                </template>
                                                                            </v-text-field>
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>
                                                                    </v-col>
                                                                </v-row>
                                                            </ValidationObserver>
                                                        </v-container>
                                                        <small>* майдонлар тўлдирилиши шарт</small>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            color="blue darken-1"
                                                            text
                                                            @click="dialog.documenttype = false"
                                                        >
                                                            Ёпиш
                                                        </v-btn>

                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>


                                        </v-row>

                                    </ValidationObserver>
                                </v-card>
                                <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                    style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!</i></v-row>
                                <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                    <v-col class="d-flex tab_action_buttons">
                                        <v-btn text style="width: 240px" color="warning"
                                               @click="dialog.openDialogComment=true"
                                        >
                                            <v-icon>mdi-comment-alert</v-icon>
                                            &nbsp; Инспектор хабари
                                        </v-btn>

                                        <v-btn text
                                               @click="prevStep"
                                        >
                                            Орқага
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.second"
                                        >
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-stepper-content>

                        <v-stepper-content step="3">


                            <div class="p-1 d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3 col-1 product_parts" v-if="1==2"
                                     id="v-pills-tab"
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
                                                    :key="index"
                                                    @click="noRequiredTab=true"

                                                >
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
                                                                            label="ТИФ ТН кодни киритинг *"
                                                                            required
                                                                            :items="tftncodes"
                                                                            item-text="name"
                                                                            item-value="id"
                                                                            name="tftncode"
                                                                            hint="Товарнинг ТИФ ТН коди"
                                                                            persistent-placeholder
                                                                            disabled
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
                                                                            label="Асосий ўлчов бирлигидаги миқдори *"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг асосий ўлчов бирлигидаги миқдори"
                                                                            name="weight"
                                                                            type="number"
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
                                                                        name="Қўшимча ўлчов бирлигидаги миқдори *"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Қўшимча ўлчов бирлигидаги миқдори"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг қўшимча ўлчов бирлигидаги миқдори"
                                                                            name="size"
                                                                            type="number"
                                                                            v-model="application.tovarlar[key].product.size"
                                                                        >
                                                                            <template v-slot:append-outer>
                                                                        <span class="append-slot">{{
                                                                                application.tovarlar[key].product.tftn.u2
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
                                                                            label="Нетто оғирлиги *"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг нетто оғирлиги"
                                                                            name="netto"
                                                                            type="number"
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
                                                                            label="Брутто оғирлиги *"
                                                                            persistent-placeholder
                                                                            hint="Товарнинг брутто оғирлиги"
                                                                            name="brutto"
                                                                            type="number"
                                                                            v-model="application.tovarlar[key].product.brutto"
                                                                        >
                                                                            <template v-slot:append-outer>
                                                                                <span class="append-slot">кг</span>
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Валюта"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">
                                                                        <v-autocomplete
                                                                            v-model="application.tovarlar[key].product.currency"
                                                                            label="Валюта *"
                                                                            required
                                                                            :items="currencies"
                                                                            hide-selected
                                                                            persistent-placeholder
                                                                            name="currency"
                                                                        >
                                                                            <template slot="item" slot-scope="data">
                                                                                <!-- HTML that describe how select should render items when the select is open -->
                                                                                <!--                                                                                {{ data.item.value }} - -->
                                                                                {{ data.item.text }}
                                                                            </template>

                                                                        </v-autocomplete>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider
                                                                        name="Товарнинг шартномадаги қиймати"
                                                                        rules="required|double"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Товарнинг шартномадаги қиймати *"
                                                                            persistent-placeholder
                                                                            name="price"
                                                                            type="number"
                                                                            v-model="application.tovarlar[key].product.price"
                                                                        >
                                                                            <template v-slot:append>
                                                                                {{
                                                                                    (typeof application.tovarlar[key].product.currency != 'undefined' && typeof getCurrencyByCode(application.tovarlar[key].product.currency)!=='undefined' )?getCurrencyByCode(application.tovarlar[key].product.currency).name:""
                                                                                }}
                                                                            </template>
                                                                        </v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider
                                                                        name="Божхона қиймати"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Божхона қиймати *"
                                                                            persistent-placeholder
                                                                            name="customsprice"
                                                                            type="number"
                                                                            v-model="application.tovarlar[key].product.customsprice"
                                                                        >
                                                                            <template v-slot:append>
                                                                                {{
                                                                                    (typeof application.tovarlar[key].product.currency != 'undefined' && typeof getCurrencyByCode(application.tovarlar[key].product.currency)!=='undefined' )?getCurrencyByCode(application.tovarlar[key].product.currency).name:""
                                                                                }}
                                                                            </template>

                                                                        </v-text-field>
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
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Тижорат номи"
                                                                            required
                                                                            name="trade_name"
                                                                            v-model="application.tovarlar[key].product.trade_name"
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
                                                                <v-col cols="4">
                                                                    <ValidationProvider name="Ранги"
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Ранги"
                                                                            required
                                                                            name="color"
                                                                            v-model="application.tovarlar[key].product.color"
                                                                            persistent-placeholder
                                                                        ></v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="4">
                                                                    <ValidationProvider name="Фойдаланиш мақсади"
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
                                                                <v-col cols="4">
                                                                    <ValidationProvider name="Вазифаси"
                                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Вазифаси"
                                                                            required
                                                                            name="function"
                                                                            v-model="application.tovarlar[key].product.function"
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
                                                                                        v-slot="{ errors }"
                                                                                        rules="required">
                                                                        <v-autocomplete
                                                                            v-model="application.tovarlar[key].product.tijorat_xususiyati"
                                                                            label="Тижорат хусусияти *"
                                                                            name="tijorat_xususiyati"
                                                                            required
                                                                            persistent-placeholder
                                                                            :items="[
                                                                                { text:'Улгуржи', value:'Улгуржи'},
                                                                                { text:'Чакана', value:'Чакана'},
                                                                                { text:'Аралаш', value:'Аралаш'},
                                                                            ]"
                                                                        ></v-autocomplete>

                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>

                                                                </v-col>
                                                                <v-col
                                                                    cols="12"
                                                                    sm="6"
                                                                    md="4"
                                                                >
                                                                    <ValidationProvider name="Техник хусусияти"
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
                                                                    <ValidationProvider
                                                                        name="Юк жойларининг умумий сони"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <v-text-field
                                                                            label="Юк жойларининг умумий сони *"
                                                                            required
                                                                            v-mask="'############'"
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
                                                                            label="Ўрам тури *"
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
                                                                            label="Ўрамлар сони *"
                                                                            required
                                                                            v-mask="'############'"
                                                                            name="oram_soni"
                                                                            v-model="application.tovarlar[key].product.oram_soni"
                                                                            persistent-placeholder
                                                                        ></v-text-field>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-dialog
                                                                    v-model="application.tovarlar[key].dialog.ishlabchiqaruvchi"
                                                                    max-width="600px"

                                                                >
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-col cols="4"
                                                                               class="position-relative d-flex justify-content-end"
                                                                               style="flex-direction: column">
                                                                            <label
                                                                                v-if="application.tovarlar[key].product.manufacturer.name && application.tovarlar[key].product.manufacturer.country">Товар
                                                                                ишлаб чиқарувчи *</label>

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
                                                                                <span v-else>Ишлаб чиқарувчи *</span>
                                                                            </v-btn>
                                                                            <div class="errors_under_button">
                                                                                <ValidationProvider
                                                                                    name="Ишлаб чиқарувчи ташкилот номи "
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_manufacturer_name"
                                                                                           :value="application.tovarlar[key].product.manufacturer.name">
                                                                                    <span class="red--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                                <ValidationProvider
                                                                                    name="Ишлаб чиқарувчи ташкилот давлати"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_manufacturer_country"
                                                                                           :value="application.tovarlar[key].product.manufacturer.country">
                                                                                    <span
                                                                                        v-if="application.tovarlar[key].product.manufacturer.name">{{
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
                                                                                        >
                                                                                            <template
                                                                                                v-slot:item="data">
                                                                                                <template
                                                                                                    v-if="typeof data.item !== 'object'">
                                                                                                    {{ data.item }}
                                                                                                </template>
                                                                                                <template v-else>

                                                                                                    <flag
                                                                                                        :iso="data.item.code"
                                                                                                        style="font-size: 20px"/>
                                                                                                    <span class="ml-4">{{
                                                                                                            data.item.text
                                                                                                        }}</span>


                                                                                                </template>
                                                                                            </template>
                                                                                            <template
                                                                                                v-slot:selection="data">
                                                                                                <template
                                                                                                    v-if="typeof data.item !== 'object'">
                                                                                                    {{ data.item }}
                                                                                                </template>
                                                                                                <template v-else>

                                                                                                    <flag
                                                                                                        :iso="data.item.code"
                                                                                                        style="font-size: 20px"/>
                                                                                                    <span class="ml-4">{{
                                                                                                            data.item.text
                                                                                                        }}</span>


                                                                                                </template>
                                                                                            </template>

                                                                                        </v-autocomplete>
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

                                                                <v-dialog
                                                                    v-model="dialog.tiftnqaror"
                                                                    max-width="600px"

                                                                >
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-col cols="4"
                                                                               class="position-relative d-flex justify-content-end"
                                                                               style="flex-direction: column">
                                                                            <label
                                                                                v-if="application.tovarlar[key].product.tftnqaror.number && application.tovarlar[key].product.tftnqaror.date">ТИФ
                                                                                ТН коди бўйича берилган дастлабки
                                                                                қарор</label>
                                                                            <v-btn
                                                                                v-bind="attrs"
                                                                                v-on="on"
                                                                                min-width="100%"
                                                                                class="button-style-1"
                                                                            >
                                                                 <span
                                                                     v-if="application.tovarlar[key].product.tftnqaror.number && application.tovarlar[key].product.tftnqaror.date">{{
                                                                         application.tovarlar[key].product.tftnqaror.number
                                                                     }} ({{
                                                                         application.tovarlar[key].product.tftnqaror.date
                                                                     }})</span>
                                                                                <span
                                                                                    v-else>ТИФ ТН коди бўйича берилган қарор</span>

                                                                            </v-btn>
                                                                            <div class="errors_under_button">
                                                                                <ValidationProvider
                                                                                    name="ТИФ ТН коди бўйича берилган қарор рақами"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_tftn_qaror_number"
                                                                                           :value="application.tovarlar[key].product.tftnqaror.number">
                                                                                    <span class="red--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                                <ValidationProvider
                                                                                    name="ТИФ ТН коди бўйича берилган қарор санаси"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_tftn_qaror_sanasi"
                                                                                           :value="application.tovarlar[key].product.tftnqaror.date">
                                                                                    <span
                                                                                        v-if="application.tovarlar[key].product.tftnqaror.number">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </div>

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
                                                                                                :locale="$i18n.locale ==='en'?'en-US':'ru-RU'"
                                                                                            >
                                                                                                <v-spacer></v-spacer>
                                                                                                <v-btn
                                                                                                    text
                                                                                                    color="primary"
                                                                                                    @click="application.tovarlar[key].menu.tftnqarorsanasi = false"
                                                                                                >
                                                                                                    Бекор қилиш
                                                                                                </v-btn>
                                                                                                <v-btn
                                                                                                    text
                                                                                                    color="primary"
                                                                                                    @click="$refs.menu_tiftnqarorsanasi[0].save(application.tovarlar[key].product.tftnqaror.date)"
                                                                                                >
                                                                                                    Сақлаш
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
                                                                            <!--                                                                            <v-btn
                                                                                                                                                            color="blue darken-1"
                                                                                                                                                            text
                                                                                                                                                            @click="dialog.tiftnqaror = false"
                                                                                                                                                        >
                                                                                                                                                            Ёпиш
                                                                                                                                                        </v-btn>-->
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
                                                                <v-dialog
                                                                    v-model="application.tovarlar[key].dialog.dastlabkiqaror"

                                                                    max-width="600px"

                                                                >
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-col cols="4"
                                                                               class="position-relative d-flex justify-content-end flex-column">
                                                                            <label
                                                                                v-if="application.tovarlar[key].product.old_decision.number && application.tovarlar[key].product.old_decision.date">Илгари
                                                                                қабул қилинган дастлабки қарор</label>
                                                                            <v-btn
                                                                                v-bind="attrs"
                                                                                v-on="on"
                                                                                min-width="100%"
                                                                                class="button-style-1"
                                                                            >
                                                                 <span
                                                                     v-if="application.tovarlar[key].product.old_decision.number && application.tovarlar[key].product.old_decision.date">{{
                                                                         application.tovarlar[key].product.old_decision.number
                                                                     }} ({{
                                                                         application.tovarlar[key].product.old_decision.date
                                                                     }})</span>
                                                                                <span
                                                                                    v-else>Илгари қабул қилинган дастлабки қарор</span>

                                                                            </v-btn>
                                                                            <div class="errors_under_button">
                                                                                <ValidationProvider
                                                                                    name="Илгари қабул қилинган дастлабки қарор рақами"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_tftn_qaror_number"
                                                                                           :value="application.tovarlar[key].product.old_decision.number">
                                                                                    <span class="red--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                                <ValidationProvider
                                                                                    name="Илгари қабул қилинган дастлабки қарор санаси"
                                                                                    v-slot="{ errors }">
                                                                                    <input type="hidden"
                                                                                           name="application_tftn_qaror_sanasi"
                                                                                           :value="application.tovarlar[key].product.old_decision.date">
                                                                                    <span
                                                                                        v-if="application.tovarlar[key].product.old_decision.number">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </div>

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
                                                                                            v-model="application.tovarlar[key].product.old_decision.number"
                                                                                            label="Дастлабки қарор рақами"
                                                                                            required
                                                                                            persistent-placeholder
                                                                                        ></v-text-field>
                                                                                    </v-col>
                                                                                    <v-col cols="6">
                                                                                        <v-menu
                                                                                            ref="menu_dastlabkiqarorsanasi"
                                                                                            v-model="application.tovarlar[key].menu.dastlabkiqarorsanasi"
                                                                                            :close-on-content-click="false"
                                                                                            :return-value.sync="application.tovarlar[key].product.old_decision.date"
                                                                                            transition="scale-transition"
                                                                                            offset-y
                                                                                            min-width="auto"
                                                                                        >
                                                                                            <template
                                                                                                v-slot:activator="{ on, attrs }">
                                                                                                <v-text-field
                                                                                                    v-model="application.tovarlar[key].product.old_decision.date"
                                                                                                    label="Дастлабки қарор санаси"
                                                                                                    prepend-icon="mdi-calendar"
                                                                                                    readonly
                                                                                                    persistent-placeholder
                                                                                                    v-bind="attrs"
                                                                                                    v-on="on"
                                                                                                ></v-text-field>
                                                                                            </template>
                                                                                            <v-date-picker
                                                                                                v-model="application.tovarlar[key].product.old_decision.date"
                                                                                                no-title
                                                                                                scrollable
                                                                                                :locale="$i18n.locale ==='en'?'en-US':'ru-RU'"
                                                                                            >
                                                                                                <v-spacer></v-spacer>
                                                                                                <v-btn
                                                                                                    text
                                                                                                    color="primary"
                                                                                                    @click="application.tovarlar[key].menu.dastlabkiqarorsanasi = false"
                                                                                                >
                                                                                                    Бекор қилиш
                                                                                                </v-btn>
                                                                                                <v-btn
                                                                                                    text
                                                                                                    color="primary"
                                                                                                    @click="$refs.menu_dastlabkiqarorsanasi[0].save(application.tovarlar[key].product.old_decision.date)"
                                                                                                >
                                                                                                    Сақлаш
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
                                                                            <!--                                                                            <v-btn
                                                                                                                                                            color="blue darken-1"
                                                                                                                                                            text
                                                                                                                                                            @click="dialog.dastlabkiqaror = false"
                                                                                                                                                        >
                                                                                                                                                            Ёпиш
                                                                                                                                                        </v-btn>-->
                                                                            <v-btn
                                                                                color="blue darken-1"
                                                                                text
                                                                                @click="application.tovarlar[key].dialog.dastlabkiqaror = false"
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
                                                        <ValidationObserver v-slot="{errors, invalid,validate }"
                                                                            :ref="'create_customs_tovar4_value'+key">

                                                            <v-row>

                                                                <v-col cols="12" class="float-start">
                                                                    <ValidationProvider
                                                                        name="Божхона қийматини аниқлаш усули"
                                                                        rules="required" v-slot="{ errors }">
                                                                        <v-autocomplete
                                                                            v-model="application.tovarlar[key].product.usul"
                                                                            label="Божхона қийматини аниқлаш усули"
                                                                            required
                                                                            persistent-placeholder
                                                                            :items="usullar"
                                                                            name="usul"

                                                                        ></v-autocomplete>
                                                                        <span class="red--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>

                                                                <v-col cols="12"
                                                                       v-if="application.tovarlar[key].product.usul">
                                                                    <v-expansion-panels
                                                                        v-model="application.tovarlar[key].product.usul_panel">
                                                                        <v-expansion-panel
                                                                            v-for="(item,i) in 5"
                                                                            :key="i"
                                                                            v-show="application.tovarlar[key].product.usul - 1 > i"
                                                                        >
                                                                            <v-expansion-panel-header>
                                                                                {{ item }} - усулни қўлламаслик сабаби
                                                                            </v-expansion-panel-header>
                                                                            <v-expansion-panel-content>
                                                                                <ValidationProvider :vid="'attribute'+i"
                                                                                                    :name="item + ' - усулни қўлламаслик сабаби'"
                                                                                                    rules="required"
                                                                                                    v-slot="{ errors }"
                                                                                                    :ref="'usultext' + key + '-' + i">
                                                                                    <v-text-field
                                                                                        :name="'1product_usul'+i"
                                                                                        class="product_usul"
                                                                                        v-model="application.tovarlar[key].product.usul_text[i]"
                                                                                        filled
                                                                                    ></v-text-field>
                                                                                    <span class="red--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-expansion-panel-content>
                                                                        </v-expansion-panel>
                                                                    </v-expansion-panels>
                                                                </v-col>
                                                                <v-col cols="12">

                                                                    <ValidationProvider
                                                                        name="Қўшича маълумотлар ва изоҳлар"
                                                                        v-slot="{ errors }">
                                                                        <v-textarea
                                                                            label="Қўшича маълумотлар ва изоҳлар"
                                                                            rows="4"
                                                                            filled
                                                                            no-resize
                                                                            v-model="application.tovarlar[key].product.comment"

                                                                        >

                                                                        </v-textarea>
                                                                        <span class="red--text">{{
                                                                                errors[0]
                                                                            }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                            </v-row>
                                                        </ValidationObserver>
                                                    </v-card>
                                                </v-tab-item>
                                            </v-tabs-items>

                                            <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                                style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши
                                                шарт!</i></v-row>
                                            <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                                <v-col class="d-flex tab_action_buttons">
                                                    <v-btn text style="width: 240px" color="warning"
                                                           @click="dialog.openDialogComment=true"
                                                    >
                                                        <v-icon>mdi-comment-alert</v-icon>
                                                        &nbsp; Инспектор хабари
                                                    </v-btn>
                                                    <v-btn text
                                                           @click="prevStep"
                                                    >
                                                        Орқага
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="nextStep"
                                                        size="large"
                                                        v-if="application.tovarlar[key].tab===3"
                                                        :loading="loadingButton.third"
                                                    >
                                                        Ариза юбориш
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="nextStep"
                                                        size="large"
                                                        v-else
                                                        :loading="loadingButton.third"
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
                    </v-stepper-items>

                </v-stepper>
            </v-container>
        </div>
        <v-dialog v-model="dialog.openDialogComment"
                  persistent
                  max-width="600px"
        >
            <v-card>
                <v-card-text v-html="comment"></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog.openDialogComment = false"
                    >
                        Ёпиш
                    </v-btn>

                </v-card-actions>
            </v-card>

        </v-dialog>
        <form ref="arxivSubmit" action="https://ed2.customs.uz/E_ARXIV/authentication"
              method="post" target="_blank" class="d-none">
            <input type="hidden" id="SessionID" name="SessionID"><br/>
            <input type="hidden" id="serialNumberHex" name="serialNumberHex" value="778ccc63"><br/>
            <input type="hidden" id="INN" name="INN" value="511420390"/><br/>
            <input type="hidden" id="YUR_INN" name="YUR_INN"/><br/>
            <input type="hidden" id="PNFL" name="PNFL" value="30603901000109"><br/>
            <input type="hidden" id="username" name="username" value="МУРАДОВ ФАРРУХ ШАКИРОВИЧ"/><br/>
            <input type="hidden" id="ETR" name="ETR" value="ETR"><br/>
            <!--            <input type="hidden" id="FOLDER_ID" name="FOLDER_ID" value="0058338434">-->

        </form>
        <a class="all_news service" target="_blank" href="https://t.me/dastlabkiqaror">
            <img src="/public/images/telegram.png">


            <p> Саволларингизни йўлланг
                <br>
                @dastlabkiqaror
            </p></a>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';

import ServicePage from "../index";
import i18n from "../../../../i18n";


export default {
    name: "EditPiecePay",
    methods: {
        /*        InputFocus(){
                    console.log(this.$refs.usultext0.$el);
                },*/
        selectTabTovar(id = 0) {

            this.tovarIndex = id;
        },
        getField(val) {
            return this.fields.filter((obj) => {
                if (obj.key === val) return obj.value
            })
        },
        setYukErrors(errors) {
            const _this = this;
            if (errors) {
                let errorfield = [];
                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });
                /*

                                errors.forEach(function (keyItem, errorItem) {
                                    console.log(keyItem)
                                    console.log(errorItem)
                                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                                        errorfield[_this.getField(keyItem)[0].value] = [errorItem];
                                    }
                                    console.log(errorfield)
                                });*/
                this.$refs.create_customs_yuk_kuzatuv_value.setErrors(errorfield)
            }
        },
        setProductErrors(errors) {
            const _this = this;
            if (errors) {
                let errorfield = [];
                let tab = 4;
                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                        if (typeof _this.getField(keyItem)[0].tab != 'undefined' && _this.getField(keyItem)[0].tab < tab) {
                            tab = _this.getField(keyItem)[0].tab;
                        }
                    }
                });

                if (tab === 1) {
                    _this.application.tovarlar[_this.tovarIndex].tab = 0;

                }
                else if(tab === 2)
                {
                    _this.application.tovarlar[_this.tovarIndex].tab = 1;

                }
                else if(tab === 3)
                {
                    _this.application.tovarlar[_this.tovarIndex].tab = 2;
                }
                else if(tab === 4)
                {
                    _this.application.tovarlar[_this.tovarIndex].tab = 3;
                }

                _this.$refs.create_customs_tovar1_value0[0].setErrors(errorfield)
                _this.$refs.create_customs_tovar2_value0[0].setErrors(errorfield)
                _this.$refs.create_customs_tovar3_value0[0].setErrors(errorfield)
                _this.$refs.create_customs_tovar4_value0[0].setErrors(errorfield)

                /*

                                errors.forEach(function (keyItem, errorItem) {
                                    console.log(keyItem)
                                    console.log(errorItem)
                                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                                        errorfield[_this.getField(keyItem)[0].value] = [errorItem];
                                    }
                                    console.log(errorfield)
                                });*/

            }
        },

        openTransportturi() {
            this.$refs["transportharakati"].applyResult({
                errors: [], // array of string errors
                valid: true, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            })
            this.transportations = this.application.transportations;
            this.dialog.transportturi = true;
        },
        isValidTransportTuri(index = null) {
            if (index) {
                return !(!this.application.transportations[index].country_from || !this.application.transportations[index].country_to || !this.application.transportations[index].price || !this.application.transportations[index].transport_type)
            } else {
                var returnTransport = false;
                if (this.application.transportations.length < 1) {
                    return false;
                }
                this.application.transportations.forEach((transport, k) => {

                    returnTransport = (!transport.country_from || !transport.country_to || !transport.price || !transport.transport_type)
                    if (returnTransport) {
                        return true;
                    }
                })
                return !returnTransport;
            }
        },
        isValidDoc(index = null) {
            if (index) {
                return !(!this.application.documents[index].id || !this.application.documents[index].type)
            } else {
                var returnDoc = false;
                if (this.application.documents.length < 1) {
                    return false;
                }
                this.application.documents.forEach((document, k) => {

                    returnDoc = (!document.id || !document.type)
                    if (returnDoc) {
                        return true;
                    }
                })/*
              console.log(returnTransport)
              console.log("!returnTransport")
              console.log(!returnTransport)*/
                return !returnDoc;
            }
        },
        openDocumentType() {
            this.$refs["hujjatilova"].applyResult({
                errors: [], // array of string errors
                valid: true, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            })
            this.documents = this.application.documents;
            this.dialog.documenttype = true;
        },
        isCompletedStep(step) {
            return this.completedSteps.includes(step);
        },
        async getSessionId() {
            let returnObject;
            await axios.get("/api/v1/ex_api/gen_session").then(function (response) {
                returnObject = response;
            })
            return returnObject;
        },
        async authorizeToEArxiv() {
            const _this = this;
            let result_data = null;
            result_data = await this.getSessionId()
            if (result_data && result_data.status === 200) {
                $("#SessionID").attr('value', result_data.data.data.sesid)
                $("#serialNumberHex").attr('value', result_data.data.data.serialnumber)
                //$("#serialNumberHex").attr('value',result_data.data.data.serialnumber)
                $("#INN").attr('value', result_data.data.data.userinn)
                $("#PNFL").attr('value', _this.$auth.user().pin)

                $("#username").attr('value', result_data.data.data.name.replaceAll("", "'"))
                ///*_this.$toast.success(result_data.data.data.name)
                //console.log(_this.$refs['arxivSubmit'])*/
                //console.log(_this.$refs['arxivSubmit']);
                _this.$refs['arxivSubmit'].submit();
            }

        },
        AddProduct() {
            this.tovarlar.push(this.copytovar);
        },
        AddDocument() {
            this.documents.push([
                {
                    id: null,
                    type: null,
                }
            ]);
        },
        addTransportation() {
            this.transportations.push({
                country_from: null,
                country_to: null,
                transport_type: null,
                price: null,
            })
        },
        removeDocument(document) {
            this.application.documents.splice(document, 1);
            this.documents.splice(document, 1);
        },
        removeTransportation(transportation) {
            this.transportations.splice(transportation, 1);
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
            return objects.filter(function (item) {

                if (item && item[prop] === parseInt(element)) {
                    return item;
                }
            })
            //return (objects.find(object => { object[prop] === parseInt(element)}))
        },
        async sendPerson(data = null) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/customprice-person', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                return error.response

            }
        },
        async sendYukHujjatlari(data) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/customprice-update', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                return error.response

            }

        },
        async sendProduct(data) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/customprice-product', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                return error.response

            }

        },
        async checkFile(file_id) {
            let response = null;
            response = await axios.get('/api/v1/ex_api/arxiv?file_id=' + file_id + '&pnfl=' + this.$auth.user().pin);
            if (response && response.data && response.data.count) {
                return response.data.data;
            }
            return false;
        },

        async nextStep() {
            let isValid = false;
            const _this = this;

            /*            if (this.completedSteps.includes(this.stepper)) {
                            this.stepper = this.stepper + 1;
                        } else {*/
            switch (this.stepper) {
                case 1:
                    this.loadingButton.first = true;
                    //console.log(!this.validateField("create_customs_person_value"))
                    setTimeout(async () => {
                        isValid = await this.validateField("create_customs_person_value");
                        if (isValid === true) {
                            this.person.lastName = this.$auth.user().mid_name;
                            this.person.firstName = this.$auth.user().first_name;
                            this.person.surName = this.$auth.user().sur_name;
                            this.person.locationId = this.person.region;
                            this.person.personId = this.person.person_id;
                            if (this.countries.length < 1) this.getCountries();

                            let resultData = await this.sendPerson(this.person);
                            this.loadingButton.first = false;
                            if (resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                _this.stepper = 2;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success("Аризачи маълумотлари сақланди!");

                            } else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");

                        }
                        this.loadingButton.first = false;


                    })


                    //isValid = true;

                    break;

                case 2:
                    isValid = false;
                    this.loadingButton.second = true;
                    setTimeout(async () => {
                        if (!this.isValidTransportTuri()) {

                            _this.$refs["transportharakati"].applyResult({
                                errors: ["Транспорт ҳаракати албатта тўлдирилиши лозим"], // array of string errors
                                valid: false, // boolean state
                                failedRules: {} // should be empty since this is a manual error.
                            })
                        } else {
                            _this.$refs["transportharakati"].applyResult({
                                errors: [], // array of string errors
                                valid: true, // boolean state
                                failedRules: {} // should be empty since this is a manual error.
                            })

                        }

                        if (!this.isValidDoc()) {
                            _this.$refs["hujjatilova"].applyResult({
                                errors: ["Илова қилинадиган ҳужжатларни киритинг"], // array of string errors
                                valid: false, // boolean state
                                failedRules: {} // should be empty since this is a manual error.
                            })

                        } else
                            _this.$refs["hujjatilova"].applyResult({
                                errors: [], // array of string errors
                                valid: true, // boolean state
                                failedRules: {} // should be empty since this is a manual error.
                            })
                        isValid = await this.validateField("create_customs_yuk_kuzatuv_value");
                        if (isValid === true && this.isValidDoc() && this.isValidTransportTuri()) {

                            let myYukData = [];
                            myYukData['docs'] = [];
                            _this.application.documents.forEach(function (document) {
                                myYukData['docs'].push({
                                    fileId: document.id,
                                    type: document.type
                                })
                            })
                            myYukData['transports'] = [];
                            _this.application.transportations.forEach(function (transportation) {
                                myYukData['transports'].push({
                                    finishCountry: transportation.country_from,
                                    endCountry: transportation.country_to,
                                    tarnsportType: transportation.transport_type,
                                    transportPrice: transportation.price,
                                })
                            })

                            _this.yukData['apps']['personId'] = this.person.person_id;
                            _this.yukData['apps']['id'] = this.$route.params.id;
                            _this.yukData['apps']['customerCountry'] = this.application.seller.country;
                            _this.yukData['apps']['senderCountry'] = this.application.sender.country;
                            _this.yukData['apps']['senderOrg'] = this.application.sender.name;
                            _this.yukData['apps']['sellerOrg'] = this.application.seller.name;
                            _this.yukData['apps']['terms'] = this.application.inkoterms;
                            _this.yukData['apps']['termsAddr'] = this.application.shipping_address;
                            _this.yukData['apps']['personFio'] = this.person.fio;
                            _this.yukData['apps']['orgName'] = this.person.organization_name;
                            _this.yukData['apps']['personPosition'] = this.person.position;
                            _this.yukData['apps']['personAddr'] = this.person.perAdr;
                            _this.yukData['apps']['personTin'] = this.person.tin;
                            _this.yukData['apps']['personPin'] = this.person.pin;
                            _this.yukData['apps']['personMail'] = this.person.email;
                            _this.yukData['apps']['personPhone'] = this.person.phone;
                            _this.yukData['apps']['locationId'] = this.person.region;
                            _this.yukData['apps']['transExp'] = null;
                            _this.yukData['docs'] = myYukData['docs'];
                            _this.yukData['transports'] = myYukData['transports'];

                            let resultData = await this.sendYukHujjatlari(_this.yukData);

                            if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                //this.person.person_id = resultData.data['data']['data']['id'];
                                this.commodity.appId = resultData.data['data']['data']['id'];
                                this.commodity.appNum = resultData.data['data']['data']['appNum'];
                                _this.stepper = 3;
                                _this.completedSteps.push(_this.stepper - 1);
                                this.$toast.success("Юк ҳужжатлари тўғрисидаги маълумотлар сақланди!");
                            } else {
                                if (resultData.status === 400) {

                                    if (typeof resultData.data.data.errorsApps !== 'undefined') {
                                        _this.setYukErrors(resultData.data.data.errorsApps);
                                    }
                                    this.$toast.error("Маълумотларингизни текшириб қайтадан юборинг!");
                                } else
                                    this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");
                            }
                            /*
                                                        {
                                                            this.$cookie.delete('yuk');
                                                            this.$cookie.set('yuk', JSON.stringify(_this.yukData), 1);
                                                            _this.stepper = 3;
                                                            _this.completedSteps.push(_this.stepper - 1);
                                                            this.$toast.success("Юк ҳужжатлари тўғрисидаги маълумотлар сақланди!");
                                                        }*/
                        } else {

                            if (!this.isValidTransportTuri())
                                _this.$refs["transportharakati"].applyResult({
                                    errors: ["Транспорт ҳаракатини киритинг"], // array of string errors
                                    valid: false, // boolean state
                                    failedRules: {} // should be empty since this is a manual error.
                                })
                            if (!this.isValidDoc())
                                _this.$refs["hujjatilova"].applyResult({
                                    errors: ["Илова қилинадиган ҳужжатларни киритинг"], // array of string errors
                                    valid: false, // boolean state
                                    failedRules: {} // should be empty since this is a manual error.
                                })
                        }
                        _this.loadingButton.second = false;
                    });


                    break;

                case 3:
                    //this.$refs["create_customs_tovar4_value" + this.tovarIndex][0].syncValue()

                    this.loadingButton.third = true;
                    //setTimeout(async () => {
                    setTimeout(async () => {
                        isValid = await this.validateField("create_customs_tovar1_value" + this.tovarIndex)

                        if (isValid !== true) {
                            //console.log('1111')
                            // console.log(this.$refs['create_customs_tovar1_value'+this.tovarIndex])
                            this.application.tovarlar[this.tovarIndex].tab = 0;

                        } else {
                            //if (!this.$refs['create_customs_tovar2_value']) this.tabs.additional_docs = 1;

                            setTimeout(async () => {
                                isValid = await this.validateField("create_customs_tovar2_value" + this.tovarIndex);
                                //isValid = true;
                                if (!isValid || !this.noRequiredTab) {
                                    this.application.tovarlar[this.tovarIndex].tab = 1;
                                    this.noRequiredTab = true;
                                } else {
                                    setTimeout(async () => {
                                        isValid = await this.validateField("create_customs_tovar3_value" + this.tovarIndex);
                                        //isValid = true;
                                        if (!isValid) this.application.tovarlar[this.tovarIndex].tab = 2;
                                        else {
                                            //console.log("sddf11111")
                                            setTimeout(async () => {
                                                //if(_this.application.tovarlar[_this.tovarIndex].product.usul<2)
                                                isValid = await this.validateField("create_customs_tovar4_value" + this.tovarIndex);
                                                //isValid = true;
                                                if (!isValid && (_this.application.tovarlar[_this.tovarIndex].product.usul > 2 || _this.application.tovarlar[_this.tovarIndex].product.usul < 1)) {
                                                    this.application.tovarlar[this.tovarIndex].tab = 3;
                                                } else {
                                                    //console.log(this.$refs["create_customs_tovar4_value" + this.tovarIndex][0].setErrors({'attribute2':['ssdfsf']}))
                                                    let noValid = [];
                                                    for (let j = 0; j < parseInt(_this.application.tovarlar[0].product.usul) - 1; j++) {

                                                        _this.application.tovarlar[0].product.usul_panel = j;
                                                        if (typeof this.$refs["usultext" + this.tovarIndex + '-' + j] === 'undefined') {
                                                            noValid.push(j)

                                                            setTimeout(() => {
                                                                this.$refs["usultext" + this.tovarIndex + '-' + j][0].applyResult({
                                                                    errors: [j + 1 + " - усулни қўлламаслик сабаби майдони албатта тўлдирилиши лозим1"], // array of string errors
                                                                    valid: false, // boolean state
                                                                    failedRules: {} // should be empty since this is a manual error.
                                                                })
                                                            }, 200)
                                                            break;
                                                        }

                                                    }
                                                    if (noValid.length < 1) {
                                                        this.loadingButton.third = true;
                                                        this.commodity.appId = _this.$route.params.id;
                                                        this.commodity.hsCode = _this.application.tovarlar[_this.tovarIndex].product.tftn.id;
                                                        this.commodity.hsDecDate = _this.application.tovarlar[_this.tovarIndex].product.tftnqaror.date;
                                                        this.commodity.hsDecNum = _this.application.tovarlar[_this.tovarIndex].product.tftnqaror.name;
                                                        this.commodity.inDecDate = _this.application.tovarlar[_this.tovarIndex].product.old_decision.date;
                                                        this.commodity.inDecNum = _this.application.tovarlar[_this.tovarIndex].product.old_decision.number;
                                                        this.commodity.originCountry = _this.application.tovarlar[_this.tovarIndex].product.manufacturer.country;
                                                        this.commodity.originOrg = _this.application.tovarlar[_this.tovarIndex].product.manufacturer.name;
                                                        this.commodity.tradeName = _this.application.tovarlar[_this.tovarIndex].product.trade_name;
                                                        this.commodity.tradeMark = _this.application.tovarlar[_this.tovarIndex].product.trade_mark;
                                                        this.commodity.mark = _this.application.tovarlar[_this.tovarIndex].product.mark;
                                                        this.commodity.model = _this.application.tovarlar[_this.tovarIndex].product.model;
                                                        this.commodity.article = _this.application.tovarlar[_this.tovarIndex].product.article;
                                                        this.commodity.sort = _this.application.tovarlar[_this.tovarIndex].product.nav;
                                                        this.commodity.standarts = _this.application.tovarlar[_this.tovarIndex].product.standart;
                                                        this.commodity.functions = _this.application.tovarlar[_this.tovarIndex].product.function; /////
                                                        this.commodity.comProp = _this.application.tovarlar[_this.tovarIndex].product.tijorat_xususiyati;
                                                        this.commodity.techChar = _this.application.tovarlar[_this.tovarIndex].product.texnik_xususiyati;
                                                        this.commodity.productGoal = _this.application.tovarlar[_this.tovarIndex].product.maqsad;
                                                        this.commodity.brutto = _this.application.tovarlar[_this.tovarIndex].product.brutto ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.brutto).toFixed(3) : null;
                                                        this.commodity.netto = _this.application.tovarlar[_this.tovarIndex].product.netto ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.netto).toFixed(3) : null;
                                                        this.commodity.basicQty = _this.application.tovarlar[_this.tovarIndex].product.weight ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.weight).toFixed(3) : null;
                                                        this.commodity.extraUnits = _this.application.tovarlar[_this.tovarIndex].product.unit2;
                                                        this.commodity.extraQty = _this.application.tovarlar[_this.tovarIndex].product.tftn.size ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.tftn.size).toFixed(3) : null;
                                                        this.commodity.price = _this.application.tovarlar[_this.tovarIndex].product.price ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.price).toFixed(3) : null;
                                                        this.commodity.customsPrice = _this.application.tovarlar[_this.tovarIndex].product.customsprice ? parseFloat(_this.application.tovarlar[_this.tovarIndex].product.customsprice).toFixed(3) : null;
                                                        this.commodity.currencyType = _this.application.tovarlar[_this.tovarIndex].product.currency;
                                                        this.commodity.cargoSpace = _this.application.tovarlar[_this.tovarIndex].product.yuk_soni;
                                                        this.commodity.packType = _this.application.tovarlar[_this.tovarIndex].product.oram_turi;
                                                        this.commodity.packQty = _this.application.tovarlar[_this.tovarIndex].product.oram_soni;
                                                        this.commodity.extraInfo = _this.application.tovarlar[_this.tovarIndex].product.comment;
                                                        if (_this.application.tovarlar[_this.tovarIndex].product.usul < 6)
                                                            this.commodity.method = "0" + _this.application.tovarlar[_this.tovarIndex].product.usul; else
                                                            this.commodity.method = _this.application.tovarlar[_this.tovarIndex].product.usul;
                                                        this.commodity.methodDescription =(_this.application.tovarlar[_this.tovarIndex].product.usul_text)? _this.application.tovarlar[_this.tovarIndex].product.usul_text.join("~~~~~"):"";

                                                        let resultData = await this.sendProduct(this.commodity);
                                                        this.loadingButton.third = false;
                                                        if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                                                            //console.log(resultData.data['data']['data']['id'])
                                                            //this.person.person_id = resultData.data['data']['data']['id'];
                                                            /*_this.stepper = 4;
                                                            _this.completedSteps.push(this.stepper - 1);*/
                                                            this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                                                            setTimeout(() => {
                                                                _this.$router.push("/services/decisions/" + _this.commodity.appId)

                                                            }, 1000)
                                                        } else {
                                                            if (resultData.status === 400) {

                                                                if (typeof resultData.data.data !== 'undefined') {
                                                                    _this.setProductErrors(resultData.data.data);
                                                                }
                                                                this.$toast.error("Маълумотларингизни текшириб қайтадан юборинг!");
                                                            } else
                                                                this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");
                                                        }


                                                    }

                                                    // this.stepper = 4;
                                                    //this.completedSteps.push(this.stepper - 1);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }

                    })
                    this.loadingButton.third = false;
                    // },3000);
                    //isValid = true;


                    /*

                                        this.stepper = 4;
                                        this.completedSteps.push(this.stepper - 1);*/
                    break;
                /*
                                case 4:
                                    this.stepper = 4;
                                    this.completedSteps.push(this.stepper - 1);
                                    break;*/

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

                /*                case 4:
                                    this.stepper = 3;
                                    break;*/

            }
        },
        goStep(step = 1) {
            this.stepper = step;
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
            if (provider) return await provider.validate()
            /*.then(()=>{
            console.log(provider.errors);
        });*/
        },
        async getCountries() {
            let root = this
            this.$auth.plugins.http.get('/api/v1/data/country').then(function (result) {
                let countries = [];
                result.data.forEach(function (item) {
                    countries.push({
                        'value': item['CODE'],
                        'text': item['CODE'] + '-' + item['CD_NM'],
                        'code': item['CD_ID_L']
                    })
                })
                root.countries = countries;
            })
        },
        async getCurrencies() {
            let root = this
            this.$auth.plugins.http.get('/api/v1/data/currency').then(function (result) {
                let currencies = [];
                result.data.forEach(function (item) {
                    currencies.push({
                        'value': item['CODE'],
                        'text': item['CODE'] + ' - ' + item['CD_NM'],
                        'name': item['CD_NM']
                    })
                })
                root.currencies = currencies;
            })
        },
        getCountryByCode(code) {
            let returnCountry;
            this.countries.forEach(function (country) {
                if (country.value === code) {
                    returnCountry = country;
                    return true;
                }

            })
            if (returnCountry) {
                //console.log(returnCountry)
                return returnCountry;
            }
        },
        getCurrencyByCode(code) {
            let returnCurrency;
            this.currencies.forEach(function (currency) {
                if (currency.value === code) {
                    returnCurrency = currency;
                    return true;
                }

            })
            if (returnCurrency) {
                //console.log(returnCountry)
                return returnCurrency;
            }
        },
        getDocumentTypeByCode(code) {
            let returnDocument;
            this.document_types.forEach(function (document) {
                if (document.value === code) {
                    returnDocument = document;
                    return;
                }

            })
            return returnDocument;
        },
        async getBoshqarmalar() {
            const _this = this
            await this.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {

                result.data.data.forEach(function (item) {
                    if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                        _this.regions.push({
                            'value': item['kod_id'],
                            'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
                        })
                })
            })
        },
        saveTransportTuri() {
            const _this = this;
            setTimeout(async () => {
                let isValid = await this.validateField('create_customs_transport_yunalish');
//console.log(isValid)
                if (isValid)
                    if (typeof this.transportations[this.transportations.length - 1] !== 'undefined' && this.transportations[this.transportations.length - 1].country_to !== "860") {
                        this.$toast.error('Охирги кирувчи давлат Ўзбекистон бўлиши лозим')
                    } else {
                        this.transportations.forEach(function (transportation, key) {
                            _this.application.transportations[key] = transportation;
                        })
                        this.dialog.transportturi = false;
                    }
            })
            //this.transport_type=this.transport_turi_chips
        },
        saveDocument() {
            const _this = this;
            setTimeout(async () => {
                /*                let isValid = await this.validateField('create_customs_documents');
                //console.log(isValid)
                                if (isValid) {

                                    this.documents.forEach(function (document, key) {
                                        _this.application.documents[key] = document;
                                    })*/
                this.dialog.documenttype = false;
                // }

            })
            //this.transport_type=this.transport_turi_chips
        },

        initialize() {

            this.getAppData();
            setTimeout(async ()=>{
                this.setCookieData();
            },1000)
            this.getBoshqarmalar();
            this.getCountries();
            this.getCurrencies();



            /*
                        if (step >= 2) {
                            this.stepper = 2;
                            this.completedSteps.push(this.stepper - 1);

                            setTimeout(() => {
                                this.$toast.success("Фойдаланувчининг маълумотлари сақланди!")
                            }, 100)

                        }*/


        },
        getAppData() {
            const _this = this;
            this.$store.commit('setLoading', true)

            setTimeout(() => {

                axios.get("/api/v1/ex_api/customprice-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {
                    _this.$store.commit('setLoading', false)
                    if (typeof response.data.data !== "undefined") {
                        _this.app = response.data.data;
                        if (_this.app.general.status !== 125) {
                            _this.$router.push('/applications');
                        } else {

                            if (typeof _this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback != 'undefined' && typeof _this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback.rollBackComment!= 'undefined') {
                                _this.comment = _this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback.rollBackComment;
                                if(typeof _this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback.rollBackAppList!=='undefined' && Array.isArray(_this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback.rollBackAppList))
                                _this.app.statuses.filter((status)=>{if(status.status=="125") return status;})[0].rolback.rollBackAppList.forEach(function (rolback) {
                                    _this.comment = _this.comment + '<br/>' + rolback.rollbackName;
                                })

                            }
                        }
                        _this.setPersonData({
                            'type': (typeof _this.app.general.personPosition !== 'undefined') ? _this.app.general.personPosition : "01",
                            'pin': (typeof _this.app.general.personPin !== 'undefined') ? _this.app.general.personPin : null,
                            'tin': (typeof _this.app.general.personTin !== 'undefined') ? _this.app.general.personTin : null,
                            'fio': (typeof _this.app.general.personFio !== 'undefined') ? _this.app.general.personFio : null,
                            'perAdr': (typeof _this.app.general.personAddr !== 'undefined') ? _this.app.general.personAddr : null,
                            'email': (typeof _this.app.general.personMail !== 'undefined') ? _this.app.general.personMail : null,
                            'phone': (typeof _this.app.general.personPhone !== 'undefined') ? _this.app.general.personPhone : null,
                            'region': (typeof _this.app.general.locationId !== 'undefined') ? _this.app.general.locationId : null,
                            'person_id': (typeof _this.app.general.personId !== 'undefined') ? _this.app.general.personId : null,
                        })

                        let docs = [];
                        if(_this.app.docs && Array.isArray(_this.app.docs))
                        _this.app.docs.forEach(function (doc) {
                            docs.push({
                                'fileId': (typeof doc.fileId !== 'undefined') ? doc.fileId : null,
                                'type': (typeof doc.docTypeName !== 'undefined') ? doc.docTypeName : null,
                                'valid': true,
                                'color': 'success',
                                //'file_num':(typeof doc.id !=='undefined')?doc.id:null,
                            })
                        })
                        let transports = [];
                        _this.app.transports.forEach(function (transport) {
                            transports.push({
                                'finishCountry': (typeof transport.finishCountry !== 'undefined') ? transport.finishCountry : null,
                                'endCountry': (typeof transport.endCountry !== 'undefined') ? transport.endCountry : null,
                                'tarnsportType': (typeof transport.tarnsportType !== 'undefined') ? transport.tarnsportType : null,
                                'transportPrice': (typeof transport.transportPrice !== 'undefined') ? transport.transportPrice : null,
                            })
                        })

                        _this.setYukData({
                            "apps": {
                                'customerCountry': (typeof _this.app.general.customerCountry !== 'undefined') ? _this.app.general.customerCountry : null,
                                'senderCountry': (typeof _this.app.general.senderCountry !== 'undefined') ? _this.app.general.senderCountry : null,
                                'senderOrg': (typeof _this.app.general.senderOrg !== 'undefined') ? _this.app.general.senderOrg : null,
                                'sellerOrg': (typeof _this.app.general.sellerOrg !== 'undefined') ? _this.app.general.sellerOrg : null,
                                'terms': (typeof _this.app.general.terms !== 'undefined') ? _this.app.general.terms : null,
                                'termsAddr': (typeof _this.app.general.termsAddr !== 'undefined') ? _this.app.general.termsAddr : null,
                                'locationId': (typeof _this.app.general.locationId !== 'undefined') ? _this.app.general.locationId : null,
                            },
                            "docs": docs,
                            "transports": transports
                        })
                        if (Array.isArray(_this.app.product)) {
                           /// console.log("asdasd")
                        } else
                            _this.setProductData([
                                {
                                    product: {
                                        tftn: _this.app.product.hsCode,
                                        weight: _this.app.product.basicQty,
                                        size: _this.app.product.extraQty,
                                        netto: _this.app.product.netto,
                                        brutto: _this.app.product.brutto,
                                        price: _this.app.product.price,
                                        customsprice: _this.app.product.customsPrice,
                                        currency: _this.app.product.currencyType,
                                        trade_name: _this.app.product.tradeName,
                                        trade_mark: _this.app.product.tradeMark,
                                        mark: _this.app.product.mark,
                                        model: _this.app.product.model,
                                        article: _this.app.product.article,
                                        nav: _this.app.product.sort,
                                        standart: _this.app.product.standarts,
                                        color: _this.app.product.color,
                                        maqsad: _this.app.product.productGoal,
                                        function: _this.app.product.functions,
                                        tijorat_xususiyati: _this.app.product.comProp,
                                        texnik_xususiyati: _this.app.product.techChar,
                                        yuk_soni: _this.app.product.cargoSpace,
                                        oram_turi: _this.app.product.packType,
                                        oram_soni: _this.app.product.packQty,
                                        manufacturer: {
                                            name: _this.app.product.originOrg,
                                            country: _this.app.product.originCountry,
                                        },
                                        tftnqaror: {
                                            date: _this.app.product.hsDecDate,
                                            number: _this.app.product.hsDecNum
                                        },
                                        old_decision: {
                                            date: _this.app.product.inDecDate,
                                            number: _this.app.product.inDecNum
                                        },
                                        usul: _this.app.product.method.replace("0", ""),
                                        usul_text: (typeof _this.app.product.methodDescription !== 'undefined' && _this.app.product.methodDescription !== null) ? _this.app.product.methodDescription.split("~~~~~") : [],
                                        comment: _this.app.product.extraInfo
                                    }
                                }
                            ])

                        _this.breadcrumb_items.push({
                            text: "Дастлабки қарор қайта ариза юбориш - " + _this.app.general.appNum,
                            to: '/services/decisions/' + _this.app.general.appId,
                            disabled: true,
                            exact: true,
                        })

                    } else {
                        _this.$toast.error("Маълумот топилмади!")
                        _this.$router.push("/applications");

                    }


                })


            })

        },
        setCookieData() {


            /////  Step  1  Fill  Person data
            let CPerson = null;
            CPerson = this.$cookie.get('user') ? JSON.parse(this.$cookie.get('user')) : null;
            if(this.$auth.user() !==null && CPerson!==null) {
                CPerson['pin'] = this.$auth.user().pin;
                CPerson['tin'] = this.$auth.user().tin;
                CPerson['perAdr'] = this.$auth.user().per_adr;
                CPerson['email'] = this.$auth.user().email;
                CPerson['type'] = (this.$auth.user().user_type === "I") ? 1 : 0;
                CPerson['fio'] = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
            }
            //this.setPersonData(CPerson)
            //let CYuk = null;
            ///CYuk = this.$cookie.get('yuk') ? JSON.parse(this.$cookie.get('yuk')) : null;
            //if(CYuk) this.setYukData(CYuk);

            /*            let CProduct = null;
                        CProduct = this.$cookie.get('product') ? JSON.parse(this.$cookie.get('product')) : null;
                        if(CProduct) this.setProductData(CProduct)*/

            /*
                        if (!this.person.person_id) {
                            setTimeout(async () => {
                            let resultData = await this.sendPerson(CPerson);
                            if (resultData.data.success === true) {
                                CPerson.person_id = resultData.data['data']['data']['id']
                                if (typeof resultData.data['data']['data'] !=='undefined') {
                                    this.setPersonData(resultData.data['data']['data'] )
                                }
                            } else return false; //CStep=null;
                             })


                        }*/


            // let FirstStepResult = await this.setPersonData();
            /*if (FirstStepResult) {
                const _this = this
                let CYuk = null;
                CYuk = this.$cookie.get('yuk') ? JSON.parse(this.$cookie.get('yuk')) : null;
                //console.log(CPerson)
                if (CYuk && CYuk['apps'] && typeof CYuk['apps'] !== 'undefined') {
                    this.setYukData(CYuk);
                }

                setTimeout(async () => {
                    let resultData = await this.sendYukHujjatlari(_this.yukData);
                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                        //console.log(resultData.data['data']['data']['id'])
                        //this.person.person_id = resultData.data['data']['data']['id'];
                        this.commodity.appId = resultData.data['data']['data']['id'];
                        this.commodity.appNum = resultData.data['data']['data']['appNum'];
                        this.$cookie.delete('yuk');
                        this.$cookie.set('yuk', JSON.stringify(_this.yukData), 1);


                        setTimeout(() => {
                            this.$toast.success("Юк ҳужжатлари тўғрисидаги маълумотлар сақланди!");
                        }, 100)


                    }

                })


            }*/

        },
        setPersonData(data) {

            //console.log(this.$auth.user())
            this.person.pin = (typeof data['pin'] !== 'undefined') ? data['pin'] : null; //.pin;
            //this.person.type=(this.$auth.user().user_type==="I")?1:0;
            this.person.type = (typeof data['type'] !== 'undefined') ? data['type'] : "01";
            this.person.tin = (typeof data['tin'] !== 'undefined') ? data['tin'] : null;
            this.person.fio = (typeof data['fio'] !== 'undefined') ? data['fio'] : null; //this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
            this.person.perAdr = (typeof data['perAdr'] !== 'undefined') ? data['perAdr'] : null;
            this.person.email = (typeof data['email'] !== 'undefined') ? data['email'] : null;
            let personId = null;
            const _this = this;
            this.person.phone = (typeof data['phone'] !== 'undefined') ? data['phone'] : null;
            this.person.region = (typeof data['region'] !== 'undefined') ? data['region'] : null;
            this.person.person_id = (typeof data['person_id'] !== 'undefined') ? data['person_id'] : null;

        },
        setYukData(data) {
            const _this = this;
            this.application.seller.country = (typeof data['apps']['customerCountry'] !== undefined) ? data['apps']['customerCountry'] : this.application.seller.country;
            this.application.sender.country = (typeof data['apps']['senderCountry'] !== undefined) ? data['apps']['senderCountry'] : this.application.sender.country;
            this.application.sender.name = (typeof data['apps']['senderOrg'] !== undefined) ? data['apps']['senderOrg'] : null;
            this.application.seller.name = (typeof data['apps']['sellerOrg'] !== undefined) ? data['apps']['sellerOrg'] : null;
            this.application.inkoterms = (typeof data['apps']['terms'] !== undefined) ? data['apps']['terms'] : null;
            this.application.shipping_address = (typeof data['apps']['termsAddr'] !== undefined) ? data['apps']['termsAddr'] : null;

            this.person.region = (typeof data['apps']['locationId'] !== undefined) ? data['apps']['locationId'] : this.person.region;

            const docs = (typeof data['docs'] !== undefined) ? data['docs'] : null;
            if (docs) {
                docs.forEach(async function (item, key) {

                    _this.application.documents[key] = {
                        id: docs[key].fileId,
                        type: docs[key].type,
                        valid: docs[key].type ? docs[key].type : false,
                        color: docs[key].type ? docs[key].type : null
                    }
                })
            }
            const Ctransports = (typeof data['transports'] !== undefined) ? data['transports'] : null;
            if (typeof Ctransports !== undefined) {
                Ctransports.forEach(function (item, key) {
                    //console.log(key)
                    _this.application.transportations[key] = {
                        country_from: Ctransports[key].finishCountry,
                        country_to: Ctransports[key].endCountry,
                        transport_type: Ctransports[key].tarnsportType,
                        price: Ctransports[key].transportPrice
                    }
                })
            }

        },
        setProductData(pData) {
            const _this = this;
           // console.log(pData)
            if (pData && Array.isArray(pData)) {
                pData.forEach(function (product, key) {

                    product = product['product']
                    _this.search_tftn = (typeof product['tftn'] !== 'undefined') ? product['tftn'] : null
                    setTimeout(() => {
                        _this.application.tovarlar[key].product.tftn = _this.tftncodes[0]
                    }, 500)
                    _this.application.tovarlar[key].product.weight = (typeof product['weight'] !== 'undefined') ? product['weight'] : null
                    _this.application.tovarlar[key].product.size = (typeof product['size'] !== 'undefined') ? product['size'] : null
                    _this.application.tovarlar[key].product.netto = (typeof product['netto'] !== 'undefined') ? product['netto'] : null
                    _this.application.tovarlar[key].product.brutto = (typeof product['brutto'] !== 'undefined') ? product['brutto'] : null
                    _this.application.tovarlar[key].product.price = (typeof product['price'] !== 'undefined') ? product['price'] : null
                    _this.application.tovarlar[key].product.customsprice = (typeof product['customsprice'] !== 'undefined') ? product['customsprice'] : null
                    _this.application.tovarlar[key].product.currency = (typeof product['currency'] !== 'undefined') ? product['currency'] : null
                    _this.application.tovarlar[key].product.trade_name = (typeof product['trade_name'] !== 'undefined') ? product['trade_name'] : null
                    _this.application.tovarlar[key].product.trade_mark = (typeof product['trade_mark'] !== 'undefined') ? product['trade_mark'] : null
                    _this.application.tovarlar[key].product.mark = (typeof product['mark'] !== 'undefined') ? product['mark'] : null
                    _this.application.tovarlar[key].product.model = (typeof product['model'] !== 'undefined') ? product['model'] : null
                    _this.application.tovarlar[key].product.article = (typeof product['article'] !== 'undefined') ? product['article'] : null
                    _this.application.tovarlar[key].product.nav = (typeof product['nav'] !== 'undefined') ? product['nav'] : null
                    _this.application.tovarlar[key].product.standart = (typeof product['standart'] !== 'undefined') ? product['standart'] : null
                    _this.application.tovarlar[key].product.color = (typeof product['color'] !== 'undefined') ? product['color'] : null
                    _this.application.tovarlar[key].product.maqsad = (typeof product['maqsad'] !== 'undefined') ? product['maqsad'] : null
                    _this.application.tovarlar[key].product.function = (typeof product['function'] !== 'undefined') ? product['function'] : null
                    _this.application.tovarlar[key].product.tijorat_xususiyati = (typeof product['tijorat_xususiyati'] !== 'undefined') ? product['tijorat_xususiyati'] : null
                    _this.application.tovarlar[key].product.texnik_xususiyati = (typeof product['texnik_xususiyati'] !== 'undefined') ? product['texnik_xususiyati'] : null
                    _this.application.tovarlar[key].product.yuk_soni = (typeof product['yuk_soni'] !== 'undefined') ? product['yuk_soni'] : null
                    _this.application.tovarlar[key].product.oram_turi = (typeof product['oram_turi'] !== 'undefined') ? product['oram_turi'] : null
                    _this.application.tovarlar[key].product.oram_soni = (typeof product['oram_soni'] !== 'undefined') ? product['oram_soni'] : null
                    _this.application.tovarlar[key].product.usul = (typeof product['usul'] !== 'undefined') ? parseFloat(product['usul']) : null
                    _this.application.tovarlar[key].product.usul_text = (typeof product['usul_text'] !== 'undefined') ? product['usul_text'] : null
                    _this.application.tovarlar[key].product.comment = (typeof product['comment'] !== 'undefined') ? product['comment'] : null
                    _this.application.tovarlar[key].product.manufacturer.name = (typeof product['manufacturer'] !== 'undefined' && typeof product['manufacturer']['name'] !== 'undefined') ? product['manufacturer']['name'] : null
                    _this.application.tovarlar[key].product.manufacturer.country = (typeof product['manufacturer'] !== 'undefined' && typeof product['manufacturer']['country'] !== 'undefined') ? product['manufacturer']['country'] : null
                    _this.application.tovarlar[key].product.tftnqaror.date = (typeof product['tftnqaror'] !== 'undefined' && typeof product['tftnqaror']['date'] !== 'undefined') ? product['tftnqaror']['date'] : null
                    _this.application.tovarlar[key].product.tftnqaror.number = (typeof product['tftnqaror'] !== 'undefined' && typeof product['tftnqaror']['number'] !== 'undefined') ? product['tftnqaror']['number'] : null
                    _this.application.tovarlar[key].product.old_decision.date = (typeof product['old_decision'] !== 'undefined' && typeof product['old_decision']['date'] !== 'undefined') ? product['old_decision']['date'] : null
                    _this.application.tovarlar[key].product.old_decision.number = (typeof product['old_decision'] !== 'undefined' && typeof product['old_decision']['number'] !== 'undefined') ? product['old_decision']['number'] : null
                })
            } else
                console.log('aaa111')
        },


        async validatePersonData(silent = false) {
            let isValid = false;

            return await this.$refs['create_customs_person_value'].validate({silent: silent})
        },
        Initprogress(val) {
            if (val)
                return Math.min(100, val.length * 8)
            else return 0;
        },
        async myColor(val, key) {
            const _this = this;
            let fileIsset = false;
            if (this.application.documents[key] && this.application.documents[key]['id'] === val) this.documents[key].color = 'success';
            if (val.length === 13) {
                fileIsset = await this.checkFile(val)
                if (fileIsset && fileIsset.length > 0) {
                    if (typeof this.application.documents !== 'undefined' && typeof this.application.documents[key] !== 'undefined') {
                        this.application.documents[key]['id'] = val;
                        this.application.documents[key]['type'] = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;
                    } else {

                        this.application.documents.push({
                            id: val,
                            type: fileIsset[0].cd_id + " - № " + fileIsset[0].file_num
                        });
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;

                    }
                } else {
                    this.documents[key].color = 'warning';
                    this.documents[key].valid = false;

                }
            } else {
                //this.application.documents.splice(key, 1);
                this.documents[key].color = 'warning';
                this.documents[key].valid = false;
            }
            if (val.length < 13) {
                this.documents[key].color = ['error', 'warning'][Math.floor(this.Initprogress(val) / 50)]
                this.documents[key].valid = false;
            }
        },
        getTftn(code) {
            // Lazily load input items
            fetch("https://customs.uz/api/v1/data/tftn?code=" + val)
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


    },
    data() {
        return {

            stepper: 1,
            search_country: null,
            search_currency: null,
            search_tftn: null,
            countries: [],
            transport_type: null,
            regions: [],
            inkoterms: [
                {text: 'EXW', value: '01'},
                {text: 'FCA', value: '02'},
                {text: 'FAS', value: '03'},
                {text: 'FOB', value: '04'},
                {text: 'CFR', value: '05'},
                {text: 'CIF', value: '06'},
                {text: 'CPT', value: '07'},
                {text: 'CIP', value: '08'},
                {text: 'DAF', value: '09'},
                {text: 'DES', value: '10'},
                {text: 'DEQ', value: '11'},
                {text: 'DDU', value: '12'},
                {text: 'DDP', value: '13'},
                {text: 'DAР', value: '14'},
                {text: 'DAT', value: '15'},
                {text: '---', value: '16'},
            ],
            oramlar: [
                {value: '000', text: 'қадоқсиз'},
                {value: '001', text: 'комплект'},
                {value: '002', text: 'ўрам'},
                {value: '003', text: 'ўрама'},
                {value: '004', text: 'бонка'},
                {value: '005', text: 'қадоқ'},
                {value: '006', text: 'тўплам'},
                {value: '007', text: 'бочка'},
                {value: '008', text: 'пакет'},
                {value: '009', text: 'кип'},
                {value: '010', text: 'қоп'},
                {value: '011', text: 'навал'},
                {value: '012', text: 'қоплар'},
                {value: '013', text: 'кип'},
                {value: '014', text: 'бочкалар'},
                {value: '015', text: 'тахтали қути'},
                {value: '016', text: 'пластмассали қути'},
                {value: '017', text: 'тагликлар'},
                {value: '018', text: 'картонли коробкалар'},
                {value: '019', text: 'ўрамлар'},
                {value: '020', text: 'цистерналар'}
            ],
            usullar: [
                {text: '1-усул, Олиб кириладиган товарга доир битимнинг қиймати бўйича', value: 1},
                {text: '2-усул, Айнан бир xил товарга доир битимнинг қиймати бўйича', value: 2},
                {text: '3-усул, Ўxшаш товарга доир битимнинг қиймати бўйича', value: 3},
                {text: '4-усул, Қийматларни чегириб ташлаш', value: 4},
                {text: '5-усул, Қийматларни қўшиш', value: 5},
                {text: '6.1-усул, Захира', value: 6.1},
                {text: '6.2-усул, Захира', value: 6.2},
                {text: '6.3-усул, Захира', value: 6.3},
                {text: '6.4-усул, Захира', value: 6.4},
                {text: '6.5-усул, Захира', value: 6.5}
            ],
            tftncodes: [],
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Менинг аризаларим',
                    to: '/applications',
                    disabled: false,
                    exact: true,
                },
            ],
            document_types: [
                {
                    'text': "101 - Лицензия",
                    'value': 101,
                },
                {
                    'text': "201 - КРГ",
                    'value': 201,
                },
                {
                    'text': "202 - СМР",
                    'value': 202,
                },
                {
                    'text': "203 - КНСМ",
                    'value': 203,
                },
                {
                    'text': "204 - TIR",
                    'value': 204,
                },
                {
                    'text': "205 - АВИА",
                    'value': 205,
                },
                {
                    'text': "206 - НКПЧТ",
                    'value': 206,
                },
                {
                    'text': "207 - СМГС",
                    'value': 207,
                },
                {
                    'text': "208 - ТТН",
                    'value': 208,
                },
                {
                    'text': "209 - ПТС",
                    'value': 209,
                },
                {
                    'text': "220 - ИНВ",
                    'value': 220,
                },
                {
                    'text': "221 - ИНВПРФ",
                    'value': 221,
                },
                {
                    'text': "222 - УПЛИСТ",
                    'value': 222,
                },
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
                        u2: null,
                        size: null,
                        brutto: null,
                        netto: null,
                        price: null,
                        customsprice: null
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
                documents: [],
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
                            u2: null,
                            size: null,
                            brutto: null,
                            netto: null,
                            price: null,
                            customsprice: null,
                            trade_name: "",
                            trade_mark: "",
                            mark: "",
                            model: "",
                            article: "",
                            nav: "",
                            standart: "",
                            color: "",
                            maqsad: "",
                            texnik_xususiyati: "",
                            tijorat_xususiyati: "",
                            yuk_soni: null,
                            oram_turi: null,
                            manufacturer: {
                                name: "",
                                country: "",
                            },
                            tftnqaror: {
                                name: "",
                                date: null,
                            },
                            old_decision: {
                                number: null,
                                date: null,
                            },
                            usul: null,
                            usul_text: [],
                            usul_panel: 0,
                            comment: ""

                        },
                        dialog: {
                            transportturi: false,
                            tiftnqaror: false,
                            ishlabchiqaruvchi: false,
                            dastlabkiqaror: false,
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
                    id: null,
                    valid: false,
                }
            ],
            yukData: {
                apps: {
                    personId: null,
                    customerCountry: null,
                    senderCountry: null,
                    senderOrg: null,
                    sellerOrg: null,
                    terms: null,
                    termsAddr: null,
                    personFio: null,
                    orgName: null,
                    personPosition: null,
                    personAddr: null,
                    personTin: null,
                    personPin: null,
                    personMail: null,
                    personPhone: null,
                    locationId: null,
                    transExp: null,
                },
                docs: {},
                transports: {}

            },
            person: {
                type: 1, /// 1- fiz 0- yur
                fio: "",
                pin: null,
                tin: null,
                organization_name: "Жисмоний шахс",
                position: "01",
                phone: null,
                email: null,
                dqaror: null,
                tftnqaror: {
                    number: null,
                    date: null,
                }

            },
            currencies: [{
                text: "АқШ доллари",
                value: 840
            }],
            transports: [
                {
                    text: "10 - Денгиз транспорти",
                    value: 10
                },
                {
                    text: "20 - Темир йўл транспорти",
                    value: 20
                }, {

                    text: "30 - Автомобиль транспорти",
                    value: 30
                },
                {
                    text: "40 - Ҳаво транспорти",
                    value: 40
                },
                {
                    text: "80 - Дарё транспорти",
                    value: 80
                }, {
                    text: "90 - САМОХОД",
                    value: 90
                },

            ],
            items: [
                {tab: 0, content: 'Умумий маълумотлар'},
                {tab: 1, content: 'Таснифи'},
                {tab: 2, content: 'Хусусиятлари'},
                {tab: 3, content: 'Қўшимча маълумотлар'},
            ],
            doc: {
                type: null,
                file: null,
            },
            tabs: {
                tovar: 1,
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
            commodity: {
                appId: null,
                appNum: null,
                hsCode: null,
                hsDecDate: null,
                hsDecNum: null,
                inDecDate: null,
                inDecNum: null,
                originCountry: null,
                originOrg: null,
                tradeName: null,
                tradeMark: null,
                mark: null,
                model: null,
                article: null,
                sort: null,
                standarts: null,
                functions: null,
                comProp: null,
                techChar: null,
                productGoal: null,
                brutto: null,
                netto: null,
                basicQty: null,
                extraUnits: null,
                extraQty: null,
                price: null,
                customsprice: null,
                currencyType: null,
                cargoSpace: null,
                packType: null,
                packQty: null,
                extraInfo: null,
                method: null,
                methodDescription: null,
            },
            tab: 0,
            dialog: {
                documenttype: false,
                dastlabkiqaror: false,
                tiftnqaror: false,
                ishlabchiqaruvchi: false,
                sotuvchi: false,
                jonatuvchi: false,
                tovarxus: false,
                tovarmark: false,
                transportturi: false,
                openDialogComment: false,
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
            completedSteps: [],
            loadingButton: {
                first: false,
                second: false,
                third: false,
                four: false
            },
            fields: [
                {key: 'termsAddr', value: 'Етказиб бериш манзили'},
                {key: 'senderOrg', value: 'Юборувчи ташкилот номи'},
                {key: 'senderCountry', value: 'Юборувчи ташкилот давлати'},
                {key: 'sellerOrg', value: 'Сотувчи ташкилот номи'},
                {key: 'customerCountry', value: 'Сотувчи ташкилот давлати'},
                {key: 'originOrg', value: 'Ишлаб чиқарувчи ташкилот номи ', tab: 3},
                {key: 'article', value: 'Артикул', tab: 2},
                {key: 'basicQty', value: 'Асосий ўлчов бирлигидаги миқдори', tab: 1},
                {key: 'brutto', value: 'Брутто оғирлиги', tab: 1},
                {key: 'customsPrice', value: 'Божхона қиймати', tab: 1},
                {key: 'extraInfo', value: 'Қўшича маълумотлар ва изоҳлар', tab: 4},
                {key: 'functions', value: 'Вазифаси', tab: 2},
                {key: 'mark', value: 'Марка', tab: 2},
                {key: 'model', value: 'Модели', tab: 2},
                {key: 'netto', value: 'Нетто оғирлиги', tab: 1},
                {key: 'price', value: 'Товарнинг шартномадаги қиймати', tab: 1},
                {key: 'productGoal', value: 'Фойдаланиш мақсади', tab: 2},
                {key: 'sort', value: 'Нав', tab: 2},
                {key: 'tradeMark', value: 'Савдо белгиси', tab: 2},
                {key: 'tradeName', value: 'Тижорат номи', tab: 2},
                {key: 'inDecNum', value: 'Илгари қабул қилинган дастлабки қарор рақами', tab: 3},
                {key: 'techChar', value: 'ТИФ ТН коди бўйича берилган қарор рақами', tab: 3},
            ],
            float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$'],
            noRequiredTab: false,
            comment: "",
        }

    },
    watch: {

        search_tftn: {
            handler: function (val) {

                if (!val || (val && val.length > 10)) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.tftncode = true

                // Lazily load input items
                fetch("https://customs.uz/api/v1/data/tftn?code=" + val)
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
            this.$auth.plugins.http.get('/api/v1/data/country?name=' + val)
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

    },
    mounted() {
        this.initialize();
    },
    computed: {
        progress(val) {
            this.Initprogress(val)
        },
        isvalidTransport() {
            return !this.isValidTransportTuri()
        },
        isvalidDocument() {
            return !this.isValidDoc()
        }


    }
    ,
    filters: {
        reverse: function (array) {
            return array.slice().reverse()
        }
    }
    ,
    components: {
        ServicePage,
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
