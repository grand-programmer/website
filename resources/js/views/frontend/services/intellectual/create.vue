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
                            Интеллектуал мулк объектлари божхона реестрига киритиш учун ариза
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
                            Ҳуқуқ эгаси тўғрисидаги маълумотлар
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="isCompleted(3)"
                            @click="goStep(3)"
                            step="3"

                        >
                            Интеллектуал мулк объектлари тўғрисидаги маълумотлар
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
                                    href="/storage/files/dastlabki-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                                    <v-row>

                                        <!--                                        <v-col cols="3" class="d-flex align-items-center jis_yur">
                                                                                    &lt;!&ndash;                                        <div class="form-field d-flex align-items-center jis_yur">
                                                                                                                                <label :class="person.type==0?'primary':''">Юридик шахс</label>

                                                                                                                                <v-switch v-model="person.type"></v-switch>
                                                                                                                                <label :class="person.type==1?'primary':''">Жисмоний шахс</label>

                                                                                                                            </div>&ndash;&gt;

                                                                                    &lt;!&ndash;                                            <v-btn-toggle
                                                                                                                                    v-model="person.type"

                                                                                                                                    tile
                                                                                                                                    group
                                                                                                                                    mandatory
                                                                                                                                >&ndash;&gt;


                                                                                    <v-btn :color="app_type==='ariza'?'primary':''" @click="app_type='ariza'" >
                                                                                        Реестрга киритиш
                                                                                    </v-btn>
                                                                                    <v-btn :color="app_type==='xabar'?'primary':''" @click="app_type='xabar'">
                                                                                        Мулк ҳуқуқи бузилганлиги тўғрисида хабар бериш
                                                                                    </v-btn>
                                                                                    &lt;!&ndash;

                                                                                                                                </v-btn-toggle>&ndash;&gt;

                                                                                </v-col>-->
                                    </v-row>
                                    <v-row class="person_data mt-10">
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

                            <v-card
                                class="mb-12 "
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/dastlabki-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>


                                <!--                                    <v-tab-item>-->
                                <v-card
                                    color="basil"
                                    flat
                                    style="border: 1px dashed #ccc"
                                >
                                    <ValidationObserver v-slot="{ invalid }"
                                                        ref="stepValidation2">
                                        <v-row class="align-end">


                                            <!--                                            <v-tabs
                                                                                            color="deep-purple accent-4"
                                                                                            left
                                                                                        >
                                                                                            <v-tab>Ҳуқуқ эгаси</v-tab>
                                                                                            <v-tab>Ишлаб чиқарувчи</v-tab>-->

                                            <!--                                                <v-tab-item>-->
                                            <v-container class="w-100 m-0 p-4">
                                                <v-row>
                                                    <v-col cols="4">
                                                        <ValidationProvider name="Ҳуқуқ эгасининг номи"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Ҳуқуқ эгасининг номи *"
                                                                required
                                                                hint="Ҳуқуқ эгасининг номи"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_nomi"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider name="Ҳуқуқ эгасининг манзили"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Ҳуқуқ эгасининг манзили *"
                                                                required
                                                                hint="Ҳуқуқ эгасининг манзили"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_manzili"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider name="Ҳуқуқ эгаси яшаётган давлат"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Ҳуқуқ эгаси яшаётган давлат *"
                                                                required
                                                                hint="Ҳуқуқ эгаси яшаётган давлат"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_davlat"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider
                                                            name="Ҳуқуқ эгасининг телефон рақами"
                                                            rules="required"
                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Ҳуқуқ эгасининг телефон рақами *"
                                                                required
                                                                hint="Ҳуқуқ эгасининг телефон рақами"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_phone"
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>

                                                    <v-col cols="4">
                                                        <ValidationProvider name="Ҳуқуқ эгасининг эмаили"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Ҳуқуқ эгасининг эмаили *"
                                                                required
                                                                hint="Ҳуқуқ эгасининг эмаили"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_mail"
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="6 d-flex align-items-center">
                                                        <h5 class=" pb-2">
                                                            Ишлаб чиқарувчи
                                                        </h5>

                                                        <v-btn
                                                            class="ml-5"
                                                            color="primary"
                                                            rounded
                                                            dark
                                                            @click="openIshChiq"
                                                        >
                                                            <v-icon large class="mr-2 " style="font-size: 15px">
                                                                mdi-plus
                                                            </v-icon>

                                                            Қўшиш
                                                        </v-btn>

                                                    </v-col>
                                                    <v-dialog
                                                        v-model="dialog.ishlabchiqaruvchi"
                                                        max-width="900px"

                                                    >


                                                        <v-card>
                                                            <v-card-title>
                                                            <span
                                                                class="text-h5">Ишлаб чиқарувчи тўғрисида маълумотлар</span>
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-container class="w-100 m-0 p-4">

                                                                    <ValidationObserver v-slot="{ invalid }"
                                                                                        ref="ishlabchiqarilgan"
                                                                                        tag="div" class="row">
                                                                        <v-col cols="4">
                                                                            <ValidationProvider
                                                                                name="Ишлаб чиқарувчининг номи"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <v-text-field
                                                                                    label="Ишлаб чиқарувчининг номи *"
                                                                                    required
                                                                                    hint="Ишлаб чиқарувчининг номи"
                                                                                    persistent-placeholder
                                                                                    v-model="ishchiq.nomi"
                                                                                >

                                                                                </v-text-field>
                                                                                <span class="red--text">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                        <v-col cols="4">
                                                                            <ValidationProvider
                                                                                name="Ишлаб чиқарувчининг манзили"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <v-text-field
                                                                                    label="Ишлаб чиқарувчининг манзили *"
                                                                                    required
                                                                                    hint="Ишлаб чиқарувчининг манзили"
                                                                                    persistent-placeholder
                                                                                    v-model="ishchiq.manzili"
                                                                                >

                                                                                </v-text-field>
                                                                                <span class="red--text">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                        <v-col cols="4">
                                                                            <ValidationProvider
                                                                                name="Ишлаб чиқарувчи яшаётган давлат"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <v-text-field
                                                                                    :label="$t('Ишлаб чиқарувчи яшаётган давлат') + '*'"
                                                                                    required
                                                                                    hint="Ишлаб чиқарувчи яшаётган давлат"
                                                                                    persistent-placeholder
                                                                                    v-model="ishchiq.davlat"
                                                                                >

                                                                                </v-text-field>
                                                                                <span class="red--text">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                        <v-col cols="4">
                                                                            <ValidationProvider
                                                                                name="Ишлаб чиқарувчининг телефон рақами"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <v-text-field
                                                                                    label="Ишлаб чиқарувчининг телефон рақами *"
                                                                                    required
                                                                                    hint="Ишлаб чиқарувчининг телефон рақами"
                                                                                    persistent-placeholder
                                                                                    v-model="ishchiq.phone"
                                                                                >
                                                                                </v-text-field>
                                                                                <span class="red--text">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                        <v-col cols="4">
                                                                            <ValidationProvider
                                                                                name="Ишлаб чиқарувчининг эмаили"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <v-text-field
                                                                                    label="Ишлаб чиқарувчининг эмаили *"
                                                                                    required
                                                                                    hint="Ишлаб чиқарувчининг эмаили"
                                                                                    persistent-placeholder
                                                                                    v-model="ishchiq.mail"
                                                                                >
                                                                                </v-text-field>
                                                                                <span class="red--text">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                    </ValidationObserver>

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
                                                                    @click="dialog.ishlabchiqaruvchi = false"
                                                                >
                                                                    Бекор қилиш
                                                                </v-btn>
                                                                <v-btn
                                                                    color="blue darken-1"
                                                                    text
                                                                    @click="saveIshChiq"
                                                                >
                                                                    Сақлаш
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>


                                                    <v-chip-group
                                                        column
                                                    >


                                                        <v-chip
                                                            v-for="(ishchiqItem,key) in application.ishchiq"
                                                            :key="key"
                                                            class="ma-2"
                                                            close
                                                            v-if="ishchiqItem.nomi"
                                                            @click="openIshChiq(key)"
                                                            @click:close="application.ishchiq.splice(key,1)"
                                                        >

                                                            <span style="font-size: 18px">{{ ishchiqItem.nomi }}</span>
                                                        </v-chip>
                                                    </v-chip-group>


                                                </v-row>
                                            </v-container>

                                            <!--                                                </v-tab-item>-->
                                            <!--                                                <v-tab-item>
                                                                                                <v-container class="w-100 m-0 p-4">
                                                                                                    <v-row>
                                                                                                        <v-col cols="4">
                                                                                                            <ValidationProvider name="Ишлаб чиқарувчининг номи"
                                                                                                                                rules="required"
                                                                                                                                v-slot="{ errors }">
                                                                                                                <v-text-field
                                                                                                                    label="Ишлаб чиқарувчининг номи *"
                                                                                                                    required
                                                                                                                    hint="Ишлаб чиқарувчининг номи"
                                                                                                                    persistent-placeholder
                                                                                                                    v-model="ishchiq.nomi"
                                                                                                                >

                                                                                                                </v-text-field>
                                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                                            </ValidationProvider>
                                                                                                        </v-col>
                                                                                                        <v-col cols="4">
                                                                                                            <ValidationProvider name="Ишлаб чиқарувчининг манзили"
                                                                                                                                rules="required"
                                                                                                                                v-slot="{ errors }">
                                                                                                                <v-text-field
                                                                                                                    label="Ишлаб чиқарувчининг манзили *"
                                                                                                                    required
                                                                                                                    hint="Ишлаб чиқарувчининг манзили"
                                                                                                                    persistent-placeholder
                                                                                                                    v-model="ishchiq.manzili"
                                                                                                                >

                                                                                                                </v-text-field>
                                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                                            </ValidationProvider>
                                                                                                        </v-col>
                                                                                                        <v-col cols="4">
                                                                                                            <ValidationProvider
                                                                                                                name="Ишлаб чиқарувчи яшаётган давлат"
                                                                                                                rules="required"
                                                                                                                v-slot="{ errors }">
                                                                                                                <v-text-field
                                                                                                                    label="Ишлаб чиқарувчи яшаётган давлат *"
                                                                                                                    required
                                                                                                                    hint="Ишлаб чиқарувчи яшаётган давлат"
                                                                                                                    persistent-placeholder
                                                                                                                    v-model="ishchiq.davlat"
                                                                                                                >

                                                                                                                </v-text-field>
                                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                                            </ValidationProvider>
                                                                                                        </v-col>
                                                                                                        <v-col cols="4">
                                                                                                            <ValidationProvider
                                                                                                                name="Ишлаб чиқарувчининг телефон рақами"
                                                                                                                rules="required"
                                                                                                                v-slot="{ errors }">
                                                                                                                <v-text-field
                                                                                                                    label="Ишлаб чиқарувчининг телефон рақами *"
                                                                                                                    required
                                                                                                                    hint="Ишлаб чиқарувчининг телефон рақами"
                                                                                                                    persistent-placeholder
                                                                                                                    v-model="ishchiq.phone"
                                                                                                                >
                                                                                                                </v-text-field>
                                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                                            </ValidationProvider>
                                                                                                        </v-col>
                                                                                                        <v-col cols="4">
                                                                                                            <ValidationProvider name="Ишлаб чиқарувчининг эмаили"
                                                                                                                                rules="required"
                                                                                                                                v-slot="{ errors }">
                                                                                                                <v-text-field
                                                                                                                    label="Ишлаб чиқарувчининг эмаили *"
                                                                                                                    required
                                                                                                                    hint="Ишлаб чиқарувчининг эмаили"
                                                                                                                    persistent-placeholder
                                                                                                                    v-model="ishchiq.mail"
                                                                                                                >
                                                                                                                </v-text-field>
                                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                                            </ValidationProvider>
                                                                                                        </v-col>

                                                                                                    </v-row>

                                                                                                </v-container>
                                                                                            </v-tab-item>-->
                                            <!--                                            </v-tabs>-->


                                            <!--                                            <v-col cols="5">
                                                                                            <ValidationProvider name="Импортчи/юкни қабул қилувчи СТИРи" rules="required"
                                                                                                                v-slot="{ errors }">
                                                                                                <v-autocomplete
                                                                                                    v-model="application.importInn"
                                                                                                    label="Импортчи/юкни қабул қилувчи СТИРи"
                                                                                                    required
                                                                                                    hint="Импортчи/юкни қабул қилувчи СТИРи"
                                                                                                    persistent-hint
                                                                                                    :items="importInns"
                                                                                                    item-text="shortname"
                                                                                                    item-value="tin"
                                                                                                    name="importInn"
                                                                                                    hide-no-data
                                                                                                    :loading="loading.importInn"
                                                                                                    :search-input.sync="search_inn"
                                                                                                    return-object
                                                                                                >
                                                                                                </v-autocomplete>
                                                                                                <span class="red--text">{{ errors[0] }}</span>
                                                                                            </ValidationProvider>

                                                                                        </v-col>-->


                                        </v-row>

                                    </ValidationObserver>
                                </v-card>
                                <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                    style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши шарт!</i></v-row>
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
                                            Давом этиш
                                        </v-btn>


                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-stepper-content>

                        <v-stepper-content step="3">

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
                                                                    name="Интеллектуал мулк объекти номланиши"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Номланиши *"
                                                                        persistent-placeholder
                                                                        name="nomlanishi"
                                                                        hint="Интеллектуал мулк объекти тавсифи"
                                                                        v-model="application.tovarlar[key].nomlanishi"
                                                                    >
                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Интеллектуал мулк объекти ТХХК таснифи"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Интеллектуал мулк объекти ТХХК таснифи *"
                                                                        persistent-placeholder
                                                                        name="tasnifi"
                                                                        hint="Товарнинг ва хизматларнинг халқаро классификатори"
                                                                        v-model="application.tovarlar[key].tasnifi"
                                                                    >

                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="ТИФ ТН код"
                                                                                    rules="required"
                                                                                    v-slot="{ errors }">
                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].tftn"
                                                                        label="ТИФ ТН кодни киритинг *"
                                                                        required
                                                                        :items="tftncodes"
                                                                        item-text="name"
                                                                        item-value="id"
                                                                        name="tftncode"
                                                                        hint="Товарнинг ТИФ ТН коди"
                                                                        persistent-placeholder
                                                                        hide-no-data
                                                                        chips
                                                                        clearable
                                                                        hide-details
                                                                        hide-selected
                                                                        multiple
                                                                        :loading="loading.tftncode"
                                                                        return-object
                                                                        class="pt-0"
                                                                        :search-input.sync="application.tovarlar[key].search_tftn"
                                                                    >
                                                                        <template v-slot:selection="data" >
                                                                            <v-chip
                                                                                :data="data"
                                                                                v-bind="data.attrs"
                                                                                :input-value="data.selected"
                                                                                close
                                                                                @click="data.select"
                                                                                @click:close="remove(data.item)"
                                                                            >
                                                                                {{ data.item.id }}
                                                                            </v-chip>
                                                                        </template>


                                                                    </v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <ValidationProvider
                                                                    name="Гувоҳномаси рақами"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Гувоҳнома рақамини киритинг *"
                                                                        persistent-placeholder
                                                                        name="guvohnoma_raqami"
                                                                        hint="Ҳуқуқий ҳимояга олганлик гувоҳномаси"
                                                                        v-model="application.tovarlar[key].guvohnoma_raqami"
                                                                    >

                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-menu
                                                                    :ref="'menu_guvohnoma_ga'+key"
                                                                    v-model="application.tovarlar[key].menu.guvohnoma_ga"
                                                                    :close-on-content-click="false"
                                                                    :return-value.sync="application.tovarlar[key].guvohnoma_ga"
                                                                    transition="scale-transition"
                                                                    offset-y
                                                                    min-width="auto"
                                                                >
                                                                    <template
                                                                        v-slot:activator="{ on, attrs }">
                                                                        <v-text-field
                                                                            v-model="application.tovarlar[key].guvohnoma_sana"
                                                                            label="Гувоҳнома муддати"
                                                                            prepend-icon="mdi-calendar"
                                                                            readonly
                                                                            hint="Гувоҳнома амал қилиш муддати"
                                                                            persistent-placeholder
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                        ></v-text-field>
                                                                    </template>
                                                                    <v-date-picker
                                                                        v-model="application.tovarlar[key].datepicker"
                                                                        no-title
                                                                        range
                                                                        scrollable
                                                                        locale="ru-ru"
                                                                    >
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            text
                                                                            color="primary"
                                                                            @click="application.tovarlar[key].menu.guvohnoma_ga = false"
                                                                        >
                                                                            Бекор қилиш
                                                                        </v-btn>
                                                                        <v-btn
                                                                            text
                                                                            color="primary"
                                                                            @click="$refs['menu_guvohnoma_ga'+key][0].save(application.tovarlar[key].guvohnoma_ga);  application.tovarlar[key].guvohnoma_sana=formatDateRange(application.tovarlar[key].datepicker)"
                                                                        >
                                                                            Сақлаш
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>

                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-menu
                                                                    :ref="'menu_reestr_muddat'+key"
                                                                    v-model="application.tovarlar[key].menu.reestr_muddat"
                                                                    :close-on-content-click="false"
                                                                    :return-value.sync="application.tovarlar[key].r_muddat"
                                                                    transition="scale-transition"
                                                                    offset-y
                                                                    min-width="auto"
                                                                >
                                                                    <template
                                                                        v-slot:activator="{ on, attrs }">
                                                                        <v-text-field
                                                                            v-model="application.tovarlar[key].reestr_muddat"
                                                                            label="Реестр муддати"
                                                                            prepend-icon="mdi-calendar"
                                                                            readonly
                                                                            hint="Сўралаётган реестр вақт оралиғи"
                                                                            persistent-placeholder
                                                                            v-bind="attrs"
                                                                            v-on="on"
                                                                        ></v-text-field>
                                                                    </template>
                                                                    <v-date-picker
                                                                        v-model="application.tovarlar[key].datepickerreestr"
                                                                        no-title
                                                                        range
                                                                        scrollable
                                                                        locale="ru-ru"
                                                                    >
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            text
                                                                            color="primary"
                                                                            @click="application.tovarlar[key].menu.reestr_muddat = false"
                                                                        >
                                                                            Бекор қилиш
                                                                        </v-btn>
                                                                        <v-btn
                                                                            text
                                                                            color="primary"
                                                                            @click="$refs['menu_reestr_muddat'+key][0].save(application.tovarlar[key].reestr_muddat); application.tovarlar[key].reestr_muddat=formatDateRange(application.tovarlar[key].datepickerreestr)"
                                                                        >
                                                                            Сақлаш
                                                                        </v-btn>
                                                                    </v-date-picker>
                                                                </v-menu>

                                                            </v-col>

                                                            <v-col cols="9" class="position-relative">
                                                                <div
                                                                    class="border-bottom-dashed chips-dialog"
                                                                    @click="openDocumentType"
                                                                >
                                                                    <span>Илова қилинадиган ҳужжатлар: *</span>
                                                                    <v-chip-group
                                                                        mandatory
                                                                        style="height: 42px" class="d-block"

                                                                    >
                                                                        <v-chip
                                                                            v-for="(doc,key) in application.documents"
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
                                                                    :messages="['Мулк гувоҳномаси, мулк расми, ва бошқалар']"
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

                        <!--
                                                <v-stepper-content step="4">
                                                    <v-card
                                                        class="mb-12 tolovlar-tab"
                                                    >
                                                        <v-row>

                                                            <v-col cols="6">
                                                                <v-list>
                                                                    <v-list-item class="ariza_nomer"> Ариза рақами: <span>{{
                                                                            commodity.appNum
                                                                        }} </span>
                                                                    </v-list-item>
                                                                    <v-list-item class="arizachi_fio"> Аризачи Ф.И.Ш: <span> {{
                                                                            person.fio
                                                                        }}</span>
                                                                    </v-list-item>
                                                                    <v-list-item> Ишлаб чиқарувчи: <span> Unicon LTD</span></v-list-item>
                                                                    <v-list-item> Сотувчи: <span> Prisma LTD </span></v-list-item>
                                                                    <v-list-item> Жўнатувчи:<span> Cyan LTD </span></v-list-item>
                                                                </v-list>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <v-list>
                                                                    <v-list-item class="">Божхона қийматини аниқлаш усули:
                                                                        <span>{{ commodity.method }} </span>
                                                                    </v-list-item>
                                                                    <v-list-item class=""> Етказиб бериш шарти:
                                                                        <span>{{ inkoterms[yukData.apps.terms] }}</span></v-list-item>
                                                                    <v-list-item> Илгари қабул қилинган дастлабки қарор:
                                                                        <span> № {{ commodity.hsDecNum }}</span></v-list-item>
                                                                    <v-list-item> Қўшимча маълумотлар: <span> {{ commodity.extraInfo }} </span>
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
                                                                            <td>{{ commodity.hsCode }}</td>
                                                                            <td>{{ commodity.mark }}</td>
                                                                            <td>{{ commodity.model }}</td>
                                                                            <td>{{ commodity.tradeMark }}</td>
                                                                            <td>{{ commodity.netto }}</td>
                                                                            <td>{{ commodity.brutto }}</td>
                                                                            <td>{{ commodity.price }}</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </template>
                                                                </v-simple-table>

                                                            </v-col>

                                                        </v-row>
                                                        <v-row>
                                                            <v-col class="d-flex justify-content-end summary-div">
                                                                <div>
                                                                    Дастлабки қарор қабул қилганлик учун йиғим: 210 000 сўм
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
                                                                &lt;!&ndash;                                        <v-btn text
                                                                                                               @click="prevStep"
                                                                                                        >
                                                                                                            Орқага
                                                                                                        </v-btn>&ndash;&gt;
                                                                <router-link to="/applications">
                                                                    <v-btn
                                                                        color="primary"
                                                                        class="ma-2" style="min-width: max-content"

                                                                    >
                                                                        Ариза ҳолатини кўриш
                                                                    </v-btn>

                                                                </router-link>


                                                            </v-col>
                                                        </v-row>
                                                    </v-card>

                                                </v-stepper-content>-->
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
import messages from '../../../../locales/oz.json';
import {types} from "../../../../../../public/js/mix/pdfmake";
import i18n from "../../../../i18n";


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "InitialIntellectual",
    data() {
        return {
            stepper: 1,
            index: [],
            regions: [],
            posts: [],

            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
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
            ishchiq: {
                nomi: "",
                manzili: "",
                davlat: "",
                phone: "",
                mail: "",
            },
            NullIshChiq: {
                nomi: "",
                manzili: "",
                davlat: "",
                phone: "",
                mail: "",
            },
            application: {
                huquq_egasi_nomi: null,
                huquq_egasi_manzili: null,
                huquq_egasi_davlat: null,
                huquq_egasi_phone: null,
                huquq_egasi_mail: null,
                ishchiq: [],
                tovarlar: [
                    {
                        id: 0,
                        tab: 0,
                        documents: [],
                        tftn: [],
                        datepicker: null,
                        datepickerreestr: null,
                        reestr_muddat: null,
                        r_muddat: null,
                        guvohnoma_sana: null,
                        menu: {
                            guvohnoma_ga: false,
                            guvohnoma_cha: false,
                            reestr_muddat: false
                        },
                        search_tftn: ""

                    },


                ],


            },
            documents: [],
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
                tftn: [],
                menu: {
                    guvohnoma_ga: false,
                    guvohnoma_cha: false,
                    reestr_muddat: false
                },
                search_tftn:"",
            },
            commodity: [],
            app: {
                apps: [],
                docs: [],
                commodities: [],
            },
            dialog: {
                documenttype: false,
                ishlabchiqaruvchi: false,
            },
            boolDialogIshChiqNew: -1,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
            completedSteps: [],
            tags: [],
            loadingButton: {
                first: false,
                second: false,
                third: false,
                four: false
            },
            loading: {tftncode: false},
            tftncodes: [],
            search_tftn: null,
            postloading: false,
            noRequiredTab: false,
            menu: {
                guvohnoma_ga: false,
                guvohnoma_cha: false,
                reestr_muddat: false
            },

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

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });

                this.application.tovarlar.forEach((tovar) => {

                    _this.$refs['stepValidation2Product' + tovar.id][0].setErrors(errorfield)

                })

            }
        },

        isValidDoc(index = null) {
            if (index) {
                return !(!this.application.documents[index].id || !this.application.documents[index].type)
            } else {
                var returnDoc = false;
                if (typeof this.application.documents !== 'undefined' && !this.application.documents.length) {
                    return false;
                }
                if (typeof this.application.documents !== 'undefined')
                    this.application.documents.forEach((document, k) => {

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
            this.documents = [];
            //let object = this.filterObject(this.application.tovarlar, this.tovarIndex, 'id')
            //if (object)
            {
                this.documents = this.application.documents;
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
            //console.log(this.documents)
            this.documents.push(
                {
                    id: null,
                    type: null,
                }
            );
        },

        removeDocument(document) {
            this.application.documents.splice(document, 1);
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
            this.createWatcher(copytovar['id'])
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
                    if (typeof selected[0] !== 'undefined') {
                        k = this.application.tovarlar.indexOf(selected[0])
                        if (k !== -1) {
                            this.application.tovarlar.splice(k, 1);
                            this.removeWatcher(selected[0].id)
                        }
                    }
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
                            /*let resultData = await this.sendPerson(this.person);
                            this.loadingButton.first = false;
                            if (resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                this.person.person_id = resultData.data['data']['data']['id'];
                                this.$cookie.delete('user');
                                this.$cookie.set('user', JSON.stringify(this.person), 1);
                                _this.stepper = 2;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success("Аризачи маълумотлари сақланди!");

                            } else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");*/

                        }
                        _this.stepper = 2;
                        _this.completedSteps.push(_this.stepper - 1);
                        _this.$toast.success("Аризачи маълумотлари сақланди!");
                        this.loadingButton.first = false;
                    })
                    //isValid = true;

                    break;


                case 2:
                    this.loadingButton.second = true;
                    //console.log(!this.validateField("create_customs_person_value"))
                    setTimeout(async () => {
                        isValid = await this.validateField("stepValidation2");
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
                        _this.stepper = 3;
                        _this.completedSteps.push(_this.stepper - 1);
                        _this.$toast.success("Аризачи маълумотлари сақланди!");
                        this.loadingButton.second = false;
                    })
                    //isValid = true;
                    break;
                case 3:

                    let count = 0;
                    //this.$refs["create_customs_tovar4_value" + this.tovarIndex][0].syncValue()

                    this.loadingButton.third = true;
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
                                if (!this.isValidDoc()) {
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
                                    if (_this.index.indexOf(tovar.id - 1) === -1) {
                                        _this.tovarIndex = tovar.id

                                    }
                                    //console.log(_this.index)
                                    //console.log('push')

                                } else {
                                    if (_this.index.indexOf(tovar.id) !== -1) _this.index.splice(_this.index.indexOf(tovar.id), 1)

                                }


                            })
                        )
                        //if(count===_this.application.tovarlar.length)

                        if (!_this.index.length) {


                            //// apps


                            _this.app.apps['personId'] = _this.person.person_id;
                            _this.app.apps['personFio'] = _this.person.fio;
                            _this.app.apps['personPosition'] = _this.person.position;
                            _this.app.apps['personAddr'] = _this.person.perAdr;
                            _this.app.apps['personTin'] = _this.person.tin;
                            _this.app.apps['personPin'] = _this.person.pin;
                            _this.app.apps['personMail'] = _this.person.email;
                            _this.app.apps['personPhone'] = _this.person.phone;
                            _this.app.apps['locationId'] = _this.person.region;
                            _this.app.apps['postId'] = _this.person.post;


                            _this.app.apps = {
                                personId: _this.person.person_id,
                                personFio: _this.person.fio,
                                personPosition: _this.person.position,
                                personAddr: _this.person.perAdr,
                                personTin: _this.person.tin,
                                personPin: _this.person.pin,
                                personMail: _this.person.email,
                                personPhone: (_this.person.phone).replaceAll(" ", "").replaceAll("+", ""),
                                locationId: 1735, ///_this.person.region ,
                                postId: 3500,  ///_this.person.postId ,
                            }


                            _this.app.docs = [];

                            /////// documents
                            if (typeof this.application.documents[0] !== 'undefined' && typeof this.application.documents !== 'undefined') {
                                this.application.documents.forEach((tov_doc, doc_key) => {
                                    _this.app.docs.push({
                                        fileId: tov_doc.id,
                                        type: tov_doc.type,
                                    })
                                })
                            }


                            _this.app.commodities = [];


                            _this.application.tovarlar.forEach(function (tovar) {


                                /////commodities
                                _this.commodity = [];

                                _this.app.commodities.push({
                                    tradeName: typeof tovar.tijorat_nomi !== 'undefined' ? tovar.tijorat_nomi : null,
                                    tradeMark: typeof tovar.mark !== 'undefined' ? tovar.mark : null,
                                    model: typeof tovar.model !== 'undefined' ? tovar.model : null,
                                    comment: typeof tovar.comment !== 'undefined' ? tovar.comment : null,
                                    basicQty: typeof tovar.namunasoni !== 'undefined' ? tovar.namunasoni : null,
                                    extraUnits: typeof tovar.olchovbirligi !== 'undefined' ? tovar.olchovbirligi : null,
                                })


                            })
                            let resultData = await this.sendProduct(_this.app);
                            if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                this.app.app_id = resultData.data['data']['data']['id'];
                                console.log(resultData.data)
                                this.$cookie.delete('user');
                                this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                                setTimeout(() => {
                                    _this.$router.push("/services/tftn/" + _this.app.app_id)

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


                            // console.log(_this.app)


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
        async getPosts(code) {
            this.postloading = true;
            const _this = this
            this.posts = [];
            await axios.get('/api/v1/ex_api/posts?code=' + code,).then(function (result) {
                if (typeof result.data.locations !== 'undefined')
                    result.data.locations.forEach(function (item) {
                        _this.posts.push({
                            'value': item['code'],
                            'text': item['cdNm']
                        })
                    })
            })
            this.postloading = false;
        },
        saveDocument() {
            const _this = this;
            setTimeout(async () => {

                this.dialog.documenttype = false;

            })
        },
        openIshChiq(id = null) {
            if (id === null || typeof id === 'object') {
                if (this.boolDialogIshChiqNew !== -1) {
                    this.ishchiq = JSON.parse(JSON.stringify(this.NullIshChiq))
                }
                this.boolDialogIshChiqNew = -1;
            } else {
                if (this.boolDialogIshChiqNew !== id) {
                    this.ishchiq = JSON.parse(JSON.stringify(this.application.ishchiq[id]))
                }
                this.boolDialogIshChiqNew = id;
            }
            this.dialog.ishlabchiqaruvchi = true;
            setTimeout(() => {
                if (typeof this.$refs['ishlabchiqarilgan'] !== 'undefined')
                    this.$refs['ishlabchiqarilgan'].reset()

            });
        },
        saveIshChiq(id = null) {
            const _this = this;
            let isValid = true;
            if (id === null || typeof id === 'object') {
                setTimeout(async () => {
                    isValid = await this.validateField("ishlabchiqarilgan");
                    if (isValid) {
                        if (_this.boolDialogIshChiqNew >= 0) {
                            if (typeof this.application.ishchiq[_this.boolDialogIshChiqNew] !== 'undefined')
                                this.application.ishchiq[_this.boolDialogIshChiqNew] = _this.ishchiq;
                        } else {
                            this.application.ishchiq.push(_this.ishchiq);
                            _this.ishchiq = JSON.parse(JSON.stringify(this.NullIshChiq))
                        }
                        if (typeof this.$refs['ishlabchiqarilgan'] !== 'undefined')
                            this.$refs['ishlabchiqarilgan'].reset()

                        this.dialog.ishlabchiqaruvchi = false;

                    }
                })

            } else {
                console.log(id)

            }


        },

        initialize() {
            this.getBoshqarmalar();
            this.setCookieData();
            this.createWatcher(0);  /// listener for product[0]
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
            if (this.application.documents[key] && this.application.documents[key]['id'] === val) this.documents[key].color = 'success';
            if (typeof val !== 'undefined' && val.length === 13) {
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
                //this.application.documents.splice(key, 1);
                this.documents[key].color = 'warning';
                this.documents[key].valid = false;
            }
            if (val.length < 13) {
                this.documents[key].color = ['error', 'warning'][Math.floor(this.Initprogress(val) / 50)]
                this.documents[key].valid = false;
            }
        },
        remove(item) {
            const index = this.application.tovarlar[this.tovarIndex].tftn.indexOf(item)
            if (index >= 0) this.application.tovarlar[this.tovarIndex].tftn.splice(index, 1)
        },
        formatDateRange(dates) {
            if (dates.length > 1) {
                if (dates[1] < dates[0]) {
                    const date = dates[1];
                    dates[1] = dates[0];
                    dates[0] = date;
                }
            }
            return dates.join(' -- ')
        },
        createWatcher(key) {
            const _this=this
            this.$watch('application.tovarlar.' + key + '.search_tftn', (val) => {
               // console.log(val)
                if (val === null || (val && val.length > 10)) return
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
                        //_this.tftncodes = _this.tftncodes.concat(res);
                        _this.tftncodes = _this.tftncodes.concat(res.filter((item) => _this.tftncodes.indexOf(item) < 0));
/*                        let selected=this.filterObject(this.application.tovarlar,key,'id');
                        let selectedIndex=this.application.tovarlar.indexOf(selected);
                        if (selectedIndex!==-1 && this.application.tovarlar[selectedIndex].tftn.length > 0 )
                            this.application.tovarlar.forEach((item) => {
                                item.tftn.forEach((tftn)=>{
                                    _this.tftncodes.push(tftn)
                                })

                            })*/
                        //this.tftncodes.push(this.application.tovarlar[this.tovarIndex].tftn)
                    })
                    .catch(err => {
                        //console.log(err)
                    })
                    .finally(() => (
                        this.loading.tftncode = false
                    ))

            })

        },


        removeWatcher(key) {
            let unwatch = this.$watch('application.tovarlar.' + key + '.search_tftn');
            unwatch();

        }

    },
    watch: {
        /*search_tftn: {
            handler: function (val) {


                if (val===null || (val && val.length > 10)) return
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
                        if(this.application.tovarlar[this.tovarIndex].tftn.length>0)
                        this.application.tovarlar[this.tovarIndex].tftn.forEach((item)=>{
                            this.tftncodes.push(item)
                        })
                            //this.tftncodes.push(this.application.tovarlar[this.tovarIndex].tftn)
                    })
                    .catch(err => {
                        //console.log(err)
                    })
                    .finally(() => (
                        this.loading.tftncode = false
                    ))
            },
            deep: false
        },*/
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
            //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
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
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
