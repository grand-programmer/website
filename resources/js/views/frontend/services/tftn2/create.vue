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
                        <h3 align="center" class="lh-sm  m-3 font-weight-bold primary-color">
                            ТИФ ТН кодини аниқлаш юзасидан дастлабки қарор олиш
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
                            Товар тўғрисида маълумотлар
                        </v-stepper-step>

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/dastlabki-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
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


                                            <v-btn color="primary" v-if="person.type===1">
                                                Жисмоний шахс
                                            </v-btn>
                                            <v-btn color="primary" v-if="person.type===0">
                                                Юридик шахс
                                            </v-btn>
                                            <!--

                                                                                        </v-btn-toggle>-->

                                        </v-col>
                                    </v-row>
                                    <v-row class="person_data">
                                        <v-col cols="6" v-if="person.type===1">
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
                                                    :disabled="(person.tin!==null && (person.tin).toString().length===9)"
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


                                        <v-col cols="6" v-if="person.type==='01'">
                                            <ValidationProvider :slim="(person.type!=='01')" v-if="person.type==='02'"
                                                                name="Лавозими" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.position"
                                                    :counter="200"
                                                    required
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
                                                    :hint="person.type==1?'Аризачининг манзили':'Юридик шахснинг манзили'"
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

                                                    required
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
                                <v-row class="bottom-required-info">
                                    <i style="font-size: 12px;"><sub
                                        style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!
                                    </i>

                                </v-row>

                            </v-card>

                        </v-stepper-content>

                        <v-stepper-content step="2">


                            <div class="p-1 d-flex align-items-start">

                                <div class="nav flex-column nav-pills me-3 col-1 product_parts"
                                     id="v-pills-tab"
                                     role="tablist"
                                     aria-orientation="vertical">
                                    <button class="nav-link create" @click="AddProduct">Қўшиш
                                        <v-icon>mdi-plus-circle-outline</v-icon>
                                    </button>
                                    <button class="nav-link"
                                            :class="application.tovarlar[key].id===tovarIndex?'active':''"
                                            :id="'v-pills-profile-tab' + tovar.id"
                                            :data-id="tovar.id" data-bs-toggle="pill"
                                            @click="selectTabTovar(tovar.id)"
                                            :data-bs-target="'#v-pills-profile'+ tovar.id" type="button" role="tab"
                                            :aria-controls="'#v-pills-profile'+ tovar.id" aria-selected="true"
                                            v-for="(tovar,key) in application.tovarlar">Товар
                                        {{ key + 1 }}
                                        <div class="close-icon">
                                            <v-icon @click="RemoveProduct(tovar.id)">
                                                mdi-close-circle-outline
                                            </v-icon>
                                        </div>
                                    </button>

                                </div>

                                <div class="tab-content w-100" id="v-pills-tabContent">

                                    <div class="tab-pane fadeInUp"
                                         :class="(tovar.id===tovarIndex)?'list-enter-active active':'list-move'"
                                         :id="'v-pills-profile'+ tovar.id" role="tabpanel" :key="key"
                                         aria-labelledby="v-pills-home-tab" v-for="(tovar,key) in application.tovarlar">
                                        <v-card
                                            class="mb-12">
                                            <h3 class="primary-color">Товар тўғрисидаги маълумотлар</h3>
                                            <v-tabs-items
                                                class="product_info_tab">
                                                <v-row class="p-2 my-2 mx-1"
                                                       flat
                                                >
                                                    <ValidationObserver v-slot="{ invalid }"
                                                                        :ref="'stepValidation2Product'+tovar.id">
                                                        <v-row>
                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Товарнинг тижорат номи"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Товарнинг тижорат номи *"
                                                                        persistent-placeholder
                                                                        name="tijorat_nomi"
                                                                        v-model="application.tovarlar[key].tijorat_nomi"
                                                                    >
                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Товар маркаси"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Товар маркаси *"
                                                                        persistent-placeholder
                                                                        name="mark"
                                                                        v-model="application.tovarlar[key].mark"
                                                                    >

                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Товар модели"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Товар модели *"
                                                                        persistent-placeholder
                                                                        name="model"
                                                                        v-model="application.tovarlar[key].model"
                                                                    >

                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <v-row>
                                                                    <v-col cols="4">
                                                                        <v-switch v-model="issetNamuna"
                                                                                  :label="issetNamuna?'Намуна мавжуд':'Намуна мавжуд эмас'">

                                                                        </v-switch>
                                                                    </v-col>
                                                                    <v-col cols="4" v-show="issetNamuna">
                                                                        <ValidationProvider
                                                                            name="Намуналар сони"
                                                                            v-slot="{ errors }">
                                                                            <v-text-field
                                                                                label="Намуналар сони *"
                                                                                persistent-placeholder
                                                                                name="namunasoni"
                                                                                v-model="application.tovarlar[key].namunasoni"
                                                                            >

                                                                            </v-text-field>
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>

                                                                    </v-col>
                                                                    <v-col cols="4" v-show="issetNamuna">
                                                                        <ValidationProvider
                                                                            name="Ўлчов бирлиги"
                                                                            v-slot="{ errors }">
                                                                            <v-autocomplete label="Ўлчов бирлиги *"
                                                                                            persistent-placeholder
                                                                                            name="olchovbirligi"
                                                                                            v-model="application.tovarlar[key].olchovbirligi"
                                                                                            :items="olchamlar">
                                                                            </v-autocomplete>
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>

                                                                    </v-col>
                                                                </v-row>
                                                                <!--                                                                    <ValidationProvider
                                                                                                                                        name="Қўшича маълумотлар ва изоҳлар"
                                                                                                                                        v-slot="{ errors }">
                                                                                                                                        <v-textarea
                                                                                                                                            label="Қўшича маълумотлар ва изоҳлар"
                                                                                                                                            rows="4"
                                                                                                                                            filled
                                                                                                                                            no-resize
                                                                                                                                            v-model="application.tovarlar[key].comment"

                                                                                                                                        >

                                                                                                                                        </v-textarea>
                                                                                                                                        <span class="red&#45;&#45;text">{{
                                                                                                                                                errors[0]
                                                                                                                                            }}</span>
                                                                                                                                    </ValidationProvider>-->
                                                            </v-col>
                                                            <v-col cols="6" class="position-relative">
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
                                                                            v-for="(doc,key) in application.tovarlar[key].documents"
                                                                            :key="key"
                                                                            v-if="doc.id && doc.type && doc.id.length>0"
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
                                                                    :ref="'hujjatilova' + application.tovarlar[key].id"
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
                                                                                       @click="authorizeToEArxiv">Э-архив
                                                                                        тизимига
                                                                                        ўтиш </a>

                                                                                </v-col><!--
                                                                    <v-col cols="12">

                                                                    </v-col>-->
                                                                            </v-row>
                                                                        </v-container>
                                                                        <v-container>
                                                                            <ValidationObserver v-slot="{ invalid }"
                                                                                                :ref="'create_customs_documents' + tovar.id"
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
                                                                                                hint="Ҳужжатнинг е-архив тизимидаги Fayl ID рақами"
                                                                                            >
                                                                                                <template v-slot:append>
                                                                                                    <v-icon
                                                                                                        color="primary"
                                                                                                        v-if="documents[key].valid">
                                                                                                        mdi-check
                                                                                                    </v-icon>
                                                                                                    <v-icon color="red"
                                                                                                            v-else>
                                                                                                        mdi-close
                                                                                                    </v-icon>
                                                                                                </template>
                                                                                                <template
                                                                                                    v-slot:append-outer>
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
                                                                                                <template
                                                                                                    v-slot:progress>
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

                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Қўшича маълумотлар ва изоҳлар"
                                                                    v-slot="{ errors }">
                                                                    <v-textarea
                                                                        label="Қўшича маълумотлар ва изоҳлар"
                                                                        rows="4"
                                                                        filled
                                                                        no-resize
                                                                        v-model="application.tovarlar[key].comment"

                                                                    >

                                                                    </v-textarea>
                                                                    <span class="red--text">{{
                                                                            errors[0]
                                                                        }}</span>
                                                                </ValidationProvider>
                                                            </v-col>


                                                        </v-row>
                                                    </ValidationObserver>
                                                </v-row>

                                            </v-tabs-items>

                                            <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                                style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши
                                                шарт!</i></v-row>
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
                                                        :loading="loadingButton.second"
                                                    >
                                                        Ариза юбориш
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
import messages from '../../../../locales/uz.json';
import {types} from "../../../../../../public/js/mix/pdfmake";


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
            index: [],
            regions: [],
            olchamlar: [
                {'value': '006', 'text': 'м'},
                {'value': '055', 'text': 'м2'},
                {'value': '112', 'text': 'л'},
                {'value': '113', 'text': 'м3'},
                {'value': '114', 'text': '1000 м3'},
                {'value': '130', 'text': '1000 л'},
                {'value': '162', 'text': 'кар'},
                {'value': '163', 'text': 'г'},
                {'value': '166', 'text': 'кг'},
                {'value': '246', 'text': '1000 кВтч'},
                {'value': '305', 'text': 'КИ'},
                {'value': '306', 'text': 'г Д/И'},
                {'value': '715', 'text': 'пар'},
                {'value': '796', 'text': 'шт'},
                {'value': '797', 'text': '100 шт'},
                {'value': '798', 'text': '1000 шт'},
                {'value': '831', 'text': 'л100% сп.'},
                {'value': '841', 'text': 'кг H2O2'},
                {'value': '845', 'text': 'кг 90% с/в'},
                {'value': '852', 'text': 'кг К2О'},
                {'value': '859', 'text': 'кг КОH'},
                {'value': '861', 'text': 'кг N'},
                {'value': '863', 'text': 'кг NаОH'},
                {'value': '865', 'text': 'кг Р2О5'},
                {'value': '867', 'text': 'кг U'},
            ],
            issetNamuna: false,

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
                    text: 'Божхона тўловлари бўйича дастлабки қарор олиш',
                    to: '/services/decisions',
                    disabled: true,
                    exact: true,
                },
            ],
            tovarIndex: 0,

            application: {
                tovarlar: [
                    {
                        id: 0,
                        tab: 0,
                        documents: [],
                    },

                ],


            },

            documents: [
                {
                    type: null,
                    id: null,
                    valid: false,
                }
            ],
            person: {
                type: 1, /// 1- fiz 0- yur
                fio: "",
                pin: null,
                tin: null,
                organization_name: "Жисмоний шахс",
                position: "01",
                phone: null,
                email: null,
            },
            doc: {
                type: null,
                file: null,
            },
            copytovar: {
                id: 0,
                tab: 0,
                documents: [],
                tradeName: null,
                tradeMark: null,
                model: null,
                comment: null,
                basicQty: null,
                extraUnits: null,
            },
            app: {
                apps: [],
                docs: [],
                commodities: [],
            },
            dialog: {
                documenttype: false,
            },
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
            completedSteps: [],
            loadingButton: {
                first: false,
                second: false,
                third: false,
                four: false
            },
            noRequiredTab: false,
            fields: [
                {key: 'tradeName', value: 'Товарнинг тижорат номи'},
                {key: 'tradeMark', value: 'Товар маркаси'},
                {key: 'model', value: 'Товар модели', tab: 1},
                {key: 'basicQty', value: 'Намуналар сони', tab: 1},
                {key: 'extraUnits', value: 'Ўлчов бирлиги'},
                {key: 'comment', value: 'Қўшича маълумотлар ва изоҳлар'},
            ],
            float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$']
        }

    },
    methods: {

        getField(val) {
            return this.fields.filter((obj) => {
                if (obj.key === val) return obj.value
            })
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

                } else if (tab === 2) {
                    _this.application.tovarlar[_this.tovarIndex].tab = 1;

                } else if (tab === 3) {
                    _this.application.tovarlar[_this.tovarIndex].tab = 2;
                } else if (tab === 4) {
                    _this.application.tovarlar[_this.tovarIndex].tab = 3;
                }

                /*                _this.$refs.create_customs_tovar1_value0[0].setErrors(errorfield)
                                _this.$refs.create_customs_tovar2_value0[0].setErrors(errorfield)
                                _this.$refs.create_customs_tovar3_value0[0].setErrors(errorfield)
                                _this.$refs.create_customs_tovar4_value0[0].setErrors(errorfield)*/

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

        isValidDoc(tovar, index = null) {
            if (index) {
                return !(!this.application.tovarlar[tovar].documents[index].id || !this.application.tovarlar[tovar].documents[index].type)
            } else {
                var returnDoc = false;
                if (typeof this.application.tovarlar[tovar] !== 'undefined' && typeof this.application.tovarlar[tovar].documents !== 'undefined' && !this.application.tovarlar[tovar].documents.length) {
                    return false;
                }
                if (typeof this.application.tovarlar[tovar] !== 'undefined')
                    this.application.tovarlar[tovar].documents.forEach((document, k) => {

                        returnDoc = (!document.id || !document.type)
                        if (returnDoc) {
                            return true;
                        }
                    })
                return !returnDoc;
            }
        },
        openDocumentType() {
            //console.log(this.$refs["hujjatilova" + this.tovarIndex]);
            this.$refs["hujjatilova" + this.tovarIndex][0].applyResult({
                errors: [], // array of string errors
                valid: true, // boolean state
                failedRules: {} // should be empty since this is a manual error.
            })
            this.documents=[];
            let object = this.filterObject(this.application.tovarlar, this.tovarIndex, 'id')
            if (object) {
                this.documents = object.documents;
            }
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
        AddDocument() {
            this.documents.push([
                {
                    id: null,
                    type: null,
                }
            ]);
        },

        removeDocument(document) {
            this.application.tovarlar[this.tovarIndex].documents.splice(document, 1);
            this.documents.splice(document, 1);
        },

        selectTabTovar(id = 0) {
            if (id === 0) {
                this.tovarIndex = 0;
                return;
            }
            if (!isNaN(parseFloat(id)) && isFinite(id)) {
                this.tovarIndex = JSON.parse(JSON.stringify(id))
            }
        },

        AddProduct() {
            const copytovar = JSON.parse(JSON.stringify(this.copytovar));
            let max = 0;
            //const keys = Object.keys(this.application.tovarlar);
            this.application.tovarlar.forEach(function (tovar) {
                if (tovar.id > max) max = tovar.id
            })
            copytovar['id'] = max + 1;
            this.application.tovarlar.push(copytovar);
        },
        RemoveProduct(product) {
            const _this = this;
            let k = 0;
            let selected = this.application.tovarlar.filter((obj, key) => {
                if (obj.id === product) {
                    k = key;
                    return obj
                }
            })
            if (this.application.tovarlar.length > 1) {

                setTimeout(() => {
                    if (typeof selected[0] !== 'undefined')
                        this.application.tovarlar.splice(selected[0], 1);
                    if (typeof this.application.tovarlar[k - 1] !== 'undefined' && typeof this.application.tovarlar[k - 1].id !== 'undefined') {
                        _this.tovarIndex = this.application.tovarlar[k - 1].id;
                    } else {
                        _this.tovarIndex = JSON.parse(JSON.stringify(this.application.tovarlar[0].id)); //JSON.parse(JSON.stringify(this.application.tovarlar[this.application.tovarlar.indexOf(selected[0])].id));

                    }
                }, 1)

            } else this.tovarIndex = 0;


        },
        filterObject(objects, element, prop = 'value') {
            let object = objects.filter(function (item) {

                if (item && item[prop] === parseInt(element)) {
                    return item;
                }
            })
            if (typeof object !== 'undefined') return object[0]; else return null;
            //return (objects.find(object => { object[prop] === parseInt(element)}))
        },
        async sendPerson(data = null) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/tftn-person', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                // console.log(error)

            }
        },
        async sendProduct(data) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/tftn-product', data).then(function (res) {
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
                        isValid = await this.validateField("stepValidation1");
                        if (isValid === true) {
                            this.person.lastName = this.$auth.user().mid_name;
                            this.person.firstName = this.$auth.user().first_name;
                            this.person.surName = this.$auth.user().sur_name;
                            this.person.locationId = this.person.region;
                            let resultData = await this.sendPerson(this.person);
                            this.loadingButton.first = false;
                            if (resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                this.person.person_id = resultData.data['data']['data']['id'];
                                this.$cookie.delete('user');
                                this.$cookie.set('user', JSON.stringify(this.person), 1);
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

                    let count = 0;
                    //this.$refs["create_customs_tovar4_value" + this.tovarIndex][0].syncValue()

                    this.loadingButton.second = true;
                    //setTimeout(async () => {
                    setTimeout(async () => {
                        _this.index = [];
                        //console.log(this.application.tovarlar.length)
                        await Promise.all(
                            this.application.tovarlar.map(async (tovar) => {
                                //console.log(tovar)
                                if (_this.index.indexOf(tovar.id) !== -1)
                                    _this.index.push(tovar.id);
                                count++;
                                isValid = await this.validateField("stepValidation2Product" + tovar.id)
                                if (!this.isValidDoc(tovar.id)) {
                                    _this.$refs["hujjatilova" + tovar.id][0].applyResult({
                                        errors: ["Илова қилинадиган ҳужжатларни киритинг"], // array of string errors
                                        valid: false, // boolean state
                                        failedRules: {} // should be empty since this is a manual error.
                                    })

                                } else
                                    _this.$refs["hujjatilova" + tovar.id][0].applyResult({
                                        errors: [], // array of string errors
                                        valid: true, // boolean state
                                        failedRules: {} // should be empty since this is a manual error.
                                    })

                                if (isValid !== true) {
                                    //console.log(this.$refs["stepValidation2Product" + tovar.id])
                                    //console.log('push')
                                    _this.index.push(tovar.id);
                                    if(_this.index.indexOf(tovar.id - 1)===-1){
                                        _this.tovarIndex=tovar.id

                                    }
                                    //console.log(_this.index)
                                    //console.log('push')

                                } else {
                                    if (_this.index.indexOf(tovar.id) !== -1) _this.index.splice(_this.index.indexOf(tovar.id), 1)

                                }


                                /*
                                                    isValid = await this.validateField("stepValidation2Product" + this.tovarIndex)

                                                    if (isValid !== true) {
                                                        //console.log('1111')
                                                        // console.log(this.$refs['create_customs_tovar1_value'+this.tovarIndex])
                                                        this.application.tovarlar[this.tovarIndex].tab = 0;

                                                    } else {
                                                        //if (!this.$refs['create_customs_tovar2_value']) this.tabs.additional_docs = 1;

                                                        setTimeout(async () => {
                                                            isValid = await this.validateField("create_customs_tovar2_value" + this.tovarIndex);
                                                            //isValid = true;
                                                            console.log(_this.$refs['create_customs_tovar2_value0'])
                                                            if (!isValid || !this.noRequiredTab) {
                                                                this.application.tovarlar[this.tovarIndex].tab = 1;
                                                                this.noRequiredTab = true;
                                                            } else {
                                                                setTimeout(async () => {
                                                                    console.log(_this.$refs['create_customs_tovar3_value0'])
                                                                    isValid = await this.validateField("create_customs_tovar3_value" + this.tovarIndex);
                                                                    //isValid = true;
                                                                    if (!isValid) this.application.tovarlar[this.tovarIndex].tab = 2;
                                                                    else {
                                                                        //console.log("sddf11111")
                                                                        setTimeout(async () => {
                                                                            //if(_this.application.tovarlar[_this.tovarIndex].product.usul<2)
                                                                            isValid = await this.validateField("create_customs_tovar4_value" + this.tovarIndex);
                                                                            console.log(_this.$refs['create_customs_tovar4_value0'])
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
                                                                                                errors: [j + 1 + " - усулни қўлламаслик сабаби майдони албатта тўлдирилиши лозим"], // array of string errors
                                                                                                valid: false, // boolean state
                                                                                                failedRules: {} // should be empty since this is a manual error.
                                                                                            })
                                                                                        }, 200)
                                                                                        break;
                                                                                    }

                                                                                }
                                                                                //console.log(noValid);
                                                                                if (noValid.length < 1) {
                                                                                    this.loadingButton.third = true;

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
                                                                                    this.commodity.methodDescription = (_this.application.tovarlar[_this.tovarIndex].product.usul_text) ? _this.application.tovarlar[_this.tovarIndex].product.usul_text.join("~~~~~") : "";

                                                                                    let resultData = await this.sendProduct(this.commodity);
                                                                                    this.loadingButton.third = false;
                                                                                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                                                                                        //console.log(resultData.data['data']['data']['id'])
                                                                                        //this.person.person_id = resultData.data['data']['data']['id'];
                                                                                        /!*_this.stepper = 4;
                                                                                        _this.completedSteps.push(this.stepper - 1);*!/
                                                                                        this.$cookie.delete('yuk');
                                                                                        this.$cookie.delete('user');
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
                                                    }*/

                            })
                        )
                        //if(count===_this.application.tovarlar.length)

                        if (!_this.index.length) {


                            //// apps


                            _this.app.apps.personId = _this.person.person_id;
                            _this.app.apps.personFio = _this.person.fio;
                            _this.app.apps.personPosition = _this.person.position;
                            _this.app.apps.personAddr = _this.person.perAdr;
                            _this.app.apps.personTin = _this.person.tin;
                            _this.app.apps.personPin = _this.person.pin;
                            _this.app.apps.personMail = _this.person.email;
                            _this.app.apps.personPhone = _this.person.phone;
                            _this.app.apps.locationId = 1735 ///_this.person.region ;
                            _this.app.apps.postId = 3500///_this.person.postId ;
                            _this.app.docs = [];
                            _this.app.commodities = [];
                            this.application.tovarlar.forEach(function (tovar) {

                                /////// documents
                                if (typeof tovar.documents[0] !== 'undefined') {
                                    tovar.documents.forEach((tov_doc, doc_key) => {
                                        _this.app.docs.push({
                                            doc_key: {
                                                id: tov_doc.id,
                                                type: tov_doc.type,
                                            }
                                        })
                                    })
                                }

                                /////commodities
                                let commodity=[];
                                if(typeof tovar.tijorat_nomi !=='undefined' && tovar.tijorat_nomi.length) commodity['tradeName']=tovar.tijorat_nomi
                                if(typeof tovar.mark !=='undefined' && tovar.mark.length) commodity['tradeMark']=tovar.mark
                                if(typeof tovar.model !=='undefined' && tovar.model.length) commodity['model']=tovar.model
                                if(typeof tovar.comment !=='undefined' && tovar.comment.length) commodity['comment']=tovar.comment
                                if(typeof tovar.namunasoni !=='undefined' && tovar.namunasoni.length) commodity['basicQty']=tovar.namunasoni
                                if(typeof tovar.olchovbirligi !=='undefined' && tovar.olchovbirligi.length) commodity['extraUnits']=tovar.olchovbirligi
                                _this.app.commodities.push(commodity)



                            })
                            console.log(_this.app)


                        }

                    })


                    this.loadingButton.second = false;

                    // },3000);
                    //isValid = true;


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


            }
        },
        goStep(step = 1) {

            if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(3)) {
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
            if (provider) return await provider.validate()
            /*.then(()=>{
            console.log(provider.errors);
        });*/
        },

        async getBoshqarmalar() {
            const _this = this
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                if (typeof result.data.data !== 'undefined')
                    result.data.data.forEach(function (item) {
                        if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                            _this.regions.push({
                                'value': item['kod_id'],
                                'text': (item['name']).replace("Ўзбекистон Республикаси Давлат божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Давлат божхона қўмитасининг ").length)
                            })
                    })
            })
        },
        saveDocument() {
            const _this = this;
            setTimeout(async () => {

                this.dialog.documenttype = false;

            })
        },

        initialize() {
            this.getBoshqarmalar();
            this.setCookieData();
        },
        setCookieData() {
            /////  Step  1  Fill  Person data
            let CPerson = null;
            CPerson = this.$cookie.get('user') ? JSON.parse(this.$cookie.get('user')) : null;
            this.setPersonData(CPerson)
            let CYuk = null;
            CYuk = this.$cookie.get('yuk') ? JSON.parse(this.$cookie.get('yuk')) : null;
            if (CYuk) this.setYukData(CYuk);
        },
        setPersonData(data) {

            this.person.pin = this.$auth.user().pin;
            this.person.tin = this.$auth.user().tin;
            this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
            this.person.perAdr = this.$auth.user().per_adr;
            this.person.email = this.$auth.user().email;
            this.person.type = (this.$auth.user().type === 1) ? 1 : 0;
            if (this.person.type === 0) {
                let legal_info = JSON.parse(this.$auth.user().legal_info)
                //console.log(legal_info[0].le_name)
                if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
                    this.person.organization_name = legal_info[0].le_name
                } else this.person.organization_name = "";
            }
            let personId = null;
            const _this = this;

            if (data) {
                this.person.phone = (typeof data['phone'] !== 'undefined') ? data['phone'] : null;
                this.person.region = (typeof data['region'] !== 'undefined') ? data['region'] : null;
                this.person.person_id = (typeof data['person_id'] !== 'undefined') ? data['person_id'] : null;
            }

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
            if (this.application.tovarlar[_this.tovarIndex].documents[key] && this.application.tovarlar[_this.tovarIndex].documents[key]['id'] === val) this.documents[key].color = 'success';
            if (typeof val !== 'undefined' && val.length === 13) {
                fileIsset = await this.checkFile(val)
                if (fileIsset && fileIsset.length > 0) {
                    if (typeof this.application.tovarlar[this.tovarIndex].documents !== 'undefined' && typeof this.application.tovarlar[this.tovarIndex].documents[key] !== 'undefined') {
                        this.application.tovarlar[this.tovarIndex].documents[key]['id'] = val;
                        this.application.tovarlar[this.tovarIndex].documents[key]['type'] = fileIsset[0].cd_id + " - " + fileIsset[0].file_num;
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;
                    } else {

                        this.application.tovarlar[this.tovarIndex].documents.push({
                            id: val,
                            type: fileIsset[0].cd_id + " - " + fileIsset[0].file_num
                        });
                        this.documents[key].color = 'success';
                        this.documents[key].valid = true;

                    }
                } else {
                    this.documents[key].color = 'warning';
                    this.documents[key].valid = false;

                }
            } else {
                //this.application.tovarlar[this.tovarIndex].documents.splice(key, 1);
                this.documents[key].color = 'warning';
                this.documents[key].valid = false;
            }
            if (val.length < 13) {
                this.documents[key].color = ['error', 'warning'][Math.floor(this.Initprogress(val) / 50)]
                this.documents[key].valid = false;
            }
        },

    },
    mounted() {
        this.initialize();
    },
    computed: {
        progress(val) {
            this.Initprogress(val)
        },
        isvalidDocument(tovar_id = null) {
            //tovar_id = this.tovarIndex;
            if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
            return !this.isValidDoc(tovar_id)
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
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
