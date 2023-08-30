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

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    href="/storage/files/Intellektual-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                                    <v-row>
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
                                                    v-mask="'+### ## ### ## ##'"
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
                                    href="/storage/files/Intellektual-user.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
                                    олинг!
                                </a></div>


                                <v-card
                                    color="basil"
                                    flat
                                    style="border: 1px dashed #ccc"
                                >
                                    <ValidationObserver v-slot="{ invalid }"
                                                        ref="stepValidation2">
                                        <v-row class="align-end">

                                            <v-container fluid class="w-100 m-0 p-4">
                                                <v-row>
                                                    <v-col cols="12" class="row"
                                                           style="margin: 0 0 40px 0; border: 1px dashed #39ae69;">
                                                        <v-col cols="4">
                                                            <text-field
                                                                rules="required"
                                                                persistent-placeholder
                                                                v-model="application.huquq_egasi_nomi"
                                                                title="Ҳуқуқ эгасининг номи"/>
                                                        </v-col>

                                                        <v-col cols="4">
                                                            <text-field
                                                                title="Ҳуқуқ эгасининг манзили"
                                                                rules="required"
                                                                v-model="application.huquq_egasi_manzili"
                                                                persistent-placeholder>
                                                            </text-field>
                                                        </v-col>
                                                        <v-col cols="4">
                                                            <autocomplete-field
                                                                title="Ҳуқуқ эгаси яшаётган давлат"
                                                                rules="required"
                                                                v-model="application.huquq_egasi_davlat"
                                                                persistent-placeholder
                                                                :options="countries"
                                                                name="1111"
                                                                countryfield
                                                                clearable
                                                            >

                                                            </autocomplete-field>
                                                        </v-col>
                                                        <v-col cols="4">
                                                            <text-field
                                                                title="Ҳуқуқ эгасининг телефон рақами"
                                                                rules="required"
                                                                v-model="application.huquq_egasi_phone"
                                                                v-mask="'+### ## ### ## ##'"
                                                                persistent-placeholder>
                                                            </text-field>

                                                        </v-col>
                                                        <v-col cols="4">
                                                            <text-field
                                                                title="Ҳуқуқ эгасининг эмаил манзили"
                                                                rules="required|email"
                                                                type="email"
                                                                v-model="application.huquq_egasi_mail"
                                                                persistent-placeholder>
                                                            </text-field>
                                                        </v-col>
                                                        <dialog-chips
                                                            @errors-changed="setIshChiqTotalError($event)"
                                                            v-model="application.ishchiq"
                                                            :error="ishchiqErrors"
                                                            :total_error="ishchiqTotalErrors"></dialog-chips>


                                                        <v-col cols="3">
                                                            <text-field
                                                                v-model="application.ishonchnoma_sana"
                                                                title="Ишончнома амал қилиш муддати"
                                                                hint="М: 2020-01-01--2023-01-01"
                                                                persistent-placeholder
                                                                append-icon="mdi-calendar"
                                                                v-mask="'####-##-##--####-##-##'"
                                                            />

                                                        </v-col>
                                                        <v-col cols="5">
                                                            <e-arxiv-file v-model="application.ishonchnoma_file"
                                                                          norequired label="Ишончнома сканери"/>
                                                        </v-col>
                                                    </v-col>

                                                </v-row>
                                            </v-container>
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
                                                                        :ref="'stepValidation2Product'+ key">
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
                                                                        <template v-slot:selection="data">
                                                                            <v-chip
                                                                                :data="data"
                                                                                v-bind="data.attrs"
                                                                                :input-value="data.selected"
                                                                                close
                                                                                @click="data.select"
                                                                                @click:close="remove(data.item)"

                                                                            >
                                                                                <span style="font-size: 14px"> {{
                                                                                        data.item.id
                                                                                    }}</span>
                                                                            </v-chip>
                                                                        </template>


                                                                    </v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="12">

                                                                <ValidationProvider
                                                                    name="Интеллектуал мулк объекти ТХХК таснифи"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].tasnifi"
                                                                        label="Интеллектуал мулк объекти ТХХК таснифи *"
                                                                        :items="klassifikatorlar"
                                                                        item-text="label"
                                                                        name="klassifikator"
                                                                        hint="Товарнинг ва хизматларнинг халқаро классификатори"
                                                                        persistent-placeholder
                                                                        hide-no-data
                                                                        chips
                                                                        clearable
                                                                        hide-details
                                                                        multiple
                                                                        class="pt-0"
                                                                    >
                                                                        <template v-slot:selection="data">
                                                                            <v-chip
                                                                                :data="data"
                                                                                v-bind="data.attrs"
                                                                                :input-value="data.selected"
                                                                                close
                                                                                @click="data.select"
                                                                                @click:close="remove(data.item)"

                                                                            >
                                                                                <span style="font-size: 14px">{{
                                                                                        data.item.value
                                                                                    }}</span>
                                                                            </v-chip>
                                                                        </template>


                                                                    </v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>

                                                            </v-col>

                                                            <v-col cols="3">
                                                                <text-field
                                                                    title="Гувоҳнома рақами"
                                                                    hint="Ҳуқуқий ҳимояга олганлик гувоҳномаси"
                                                                    persistent-placeholder
                                                                    v-model="application.tovarlar[key].guvohnoma_raqami"
                                                                    rules="required"
                                                                >

                                                                </text-field>

                                                            </v-col>
                                                            <v-col cols="3">
                                                                <text-field
                                                                    v-model="application.tovarlar[key].guvohnoma_sana"
                                                                    title="Гувоҳнома муддати"
                                                                    append-icon="mdi-calendar"
                                                                    hint="М: 2020-01-01--2023-01-01"
                                                                    rules="required"
                                                                    persistent-placeholder
                                                                    v-mask="'####-##-##--####-##-##'"
                                                                ></text-field>
                                                                <!--                                                                <v-menu
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
                                                                                                                                </v-menu>-->

                                                            </v-col>
                                                            <v-col cols="3">
                                                                <text-field
                                                                    v-model="application.tovarlar[key].reestr_muddat"
                                                                    title="Реестр муддати"
                                                                    append-icon="mdi-calendar"
                                                                    hint="М: 2020-01-01--2023-01-01"
                                                                    rules="required"
                                                                    persistent-placeholder
                                                                    v-mask="'####-##-##--####-##-##'"
                                                                ></text-field>
                                                                <!--                                                                <v-menu
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
                                                                                                                                </v-menu>-->

                                                            </v-col>

                                                            <v-col cols="9" class="position-relative">
                                                                <e-arxiv-file
                                                                    v-model="application.tovarlar[key].documents"
                                                                    multiple
                                                                    :errors="ilova_error[key]"
                                                                    hint="Мулк гувоҳномаси, мулк расми, ва бошқалар"/>
                                                                <!--
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
                                                                                                                        <span class="error&#45;&#45;text">
                                                                                                                       {{
                                                                                                                                errors[0]
                                                                                                                            }}
                                                                                                                              </span>
                                                                                                                                </ValidationProvider>

                                                                -->

                                                            </v-col>
                                                            <!--                                                            <v-dialog
                                                                                                                            v-model="dialog.documenttype"
                                                                                                                            max-width="700px"

                                                                                                                        >

                                                                                                                            <v-card class="scroll_card" light>
                                                                                                                                <v-card-title class=" px-4 py-4">
                                                                                                                        <span
                                                                                                                            class="text-h5 white&#45;&#45;text">Илова қилинадиган ҳужжатлар </span>
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

                                                                                                                                            </v-col>
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
                                                                                                                                                        <span class="red&#45;&#45;text">{{
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
                                                                                                                        </v-dialog>-->
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

        <a class="all_news service" target="_blank" href="https://t.me/IMO_bojxona">
            <img src="/public/images/telegram.png">


            <p> Саволларингизни йўлланг
                <br>
                @IMO_bojxona
            </p></a>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import Myfield from "../../../../components/form/myfield";
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';
import {types} from "../../../../../../public/js/mix/pdfmake";
import i18n from "../../../../i18n";
import TextField from "../../../../components/form/textfield";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import DialogChips from "../../../../components/form/dialog-chips";


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
            countries: [],

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

            application: {
                id: null,
                huquq_egasi_nomi: null,
                huquq_egasi_manzili: null,
                huquq_egasi_davlat: null,
                huquq_egasi_phone: null,
                huquq_egasi_mail: null,
                ishonchnoma_sana: null,
                ishchiq: [],
                documents: [],
                ishonchnoma_file: [{}],
                tovarlar: [
                    {
                        id: 0,
                        tab: 0,
                        documents: [{}],
                        tftn: [],
                        reestr_muddat: null,
                        guvohnoma_sana: null,
                        search_tftn: ""
                    },


                ],


            },
            huquq_egasi: {
                ipHolder: "",
                ipHoldersAddr: "",
                ipHolderCountry: "",
                ipHolderTelNumber: "",
                ipHolderMail: "",
                dateStart: "",
                dateEnd: "",
                fileId: "",
                personId: null,
                personPin: null,
            },
            s01AppsManufacturerInfos: [],

            ishonchnoma_datepicker: null,
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
                documents: [{}],
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
                search_tftn: "",
            },
            commodity: [],
            app: [],
            dialog: {
                documenttype: false,
                ishlabchiqaruvchi: false,
            },
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
            search: null,
            postloading: false,
            noRequiredTab: false,
            menu: {
                guvohnoma_ga: false,
                guvohnoma_cha: false,
                reestr_muddat: false,
                ishonchnoma: false
            },
            errors: [],
            totalerrors: "",
            fields: [
                {key: 'ipHolder', value: 'Ҳуқуқ эгасининг номи'},
                {key: 'ipHoldersAddr', value: 'Ҳуқуқ эгасининг манзили'},
                {key: 'ipHolderCountry', value: 'Ҳуқуқ эгаси яшаётган давлат'},
                {key: 'ipHolderTelNumber', value: 'Ҳуқуқ эгасининг телефон рақами'},
                {key: 'ipHolderMail', value: 'Ҳуқуқ эгасининг эмаил манзили'},
                {key: 'fileId', value: 'Ишончнома сканери'},
                {key: 'personId', value: 'personId'},
                {key: 'personPin', value: 'personPin'},
                {key: 'dateStart', value: 'Ишончнома амал қилиш муддати'},
                {key: 'dateEnd', value: 'Ишончнома амал қилиш муддати'},
                {key: 'manufacturer', value: 'Ишлаб чиқарувчининг номи'},
                {key: 'manufacturerTelNum', value: 'Ишлаб чиқарувчининг телефон рақами'},
                {key: 'manufacturerAddr', value: 'Ишлаб чиқарувчининг манзили'},
                {key: 'manufacturerMAil', value: 'Ишлаб чиқарувчининг email манзили'},
                {key: 'ipDescription', value: 'Интеллектуал мулк объекти номланиши'},
                {key: 'ipPassEndDate', value: 'Гувоҳнома муддати'},
                {key: 'ipPassStartDate', value: 'Гувоҳнома муддати'},
                {key: 'ipPassNum', value: 'Гувоҳнома рақами'},
                {key: 'ipRegistrStartDate', value: 'Реестр муддати'},
                {key: 'ipRegistrEndDate', value: 'Реестр муддати'},
                {key: 'hsCode', value: 'ТИФ ТН код'},
                {key: 'mktu', value: 'Интеллектуал мулк объекти ТХХК таснифи'},
                {key: 'docs', value: 'Интеллектуал мулк объекти ТХХК таснифи'},
            ],
            klassifikatorlar: [
                {
                    value: '01',
                    label: '01-Саноат, илмий, фотография, қишлоқ хўжалиги, боғдорчилик ва ўрмон хўжалигида фойдаланиш учун мўлжалланган кимёвий маҳсулотлар; хом синтетик қатронлар, хом пластик материаллар; ўғитлар; ёнғинни ўчириш учун композициялар; металларни қотиш ва элимлаш учун препаратлар; озиқ-овқат маҳсулотларини сақлаш учун препаратлар; танинлар; саноат мақсадлари учун ёпиштирувчи моддалар',
                    text: 'Саноат, илмий, фотография, қишлоқ хўжалиги, боғдорчилик ва ўрмон хўжалигида фойдаланиш учун мўлжалланган кимёвий маҳсулотлар; хом синтетик қатронлар, хом пластик материаллар; ўғитлар; ёнғинни ўчириш учун композициялар; металларни қотиш ва элимлаш учун препаратлар; озиқ-овқат маҳсулотларини сақлаш учун препаратлар; танинлар; саноат мақсадлари учун ёпиштирувчи моддалар'
                },
                {
                    value: '02',
                    label: '02-Бўёқлар, қуритиш мойлари, лаклар; металларни коррозиядан ва ёғочни йўқ қилишдан ҳимоя қилувчи ҳимоя воситалари; бўёқлар; мордантлар; хом табиий қатронлар; бадиий ва безак мақсадларида ва бадиий босма учун ишлатиладиган қатлам ва кукунли металлар',
                    text: 'Бўёқлар, қуритиш мойлари, лаклар; металларни коррозиядан ва ёғочни йўқ қилишдан ҳимоя қилувчи ҳимоя воситалари; бўёқлар; мордантлар; хом табиий қатронлар; бадиий ва безак мақсадларида ва бадиий босма учун ишлатиладиган қатлам ва кукунли металлар'
                },
                {
                    value: '03',
                    label: '03-Оқартирувчи препаратлар ва бошқа кир ювиш воситалари; тозалаш, парлатиш, ёғсизлантириш ва абразив ишлов бериш учун препаратлар; доривор бўлмаган совунлар; парфюмерия, эфир мойлари, косметика, соч лосьонлари, тиш кукунлари ва пасталари, доривор бўлмаган',
                    text: 'Оқартирувчи препаратлар ва бошқа кир ювиш воситалари; тозалаш, парлатиш, ёғсизлантириш ва абразив ишлов бериш учун препаратлар; доривор бўлмаган совунлар; парфюмерия, эфир мойлари, косметика, соч лосьонлари, тиш кукунлари ва пасталари, доривор бўлмаган'
                },
                {
                    value: '04',
                    label: '04-Техник мойлар ва мойлаш материаллари; мойлаш материаллари; чангни ютиш, намлаш ва боғлаш учун формулалар; ёқилғи (шу жумладан автобензинлар) ва ёритиш материаллари; ёруғлик учун фитил ва шамлар',
                    text: 'Техник мойлар ва мойлаш материаллари; мойлаш материаллари; чангни ютиш, намлаш ва боғлаш учун формулалар; ёқилғи (шу жумладан автобензинлар) ва ёритиш материаллари; ёруғлик учун фитил ва шамлар'
                },
                {
                    value: '05',
                    label: '05-Фармацевтика маҳсулотлари, тиббий ва ветеринария препаратлари; тиббий мақсадлар учун гигиеник маҳсулотлар; тиббий ёки ветеринария учун мўлжалланган парҳез овқатлар ва моддалар, болалар овқатлари; одамлар ва ҳайвонлар учун озиқ-овқат қўшимчалари; гипслар, қопламалар; тишларни пломбалаш ва тиш гипсларини тайёрлаш учун материаллар; дезинфекциялаш воситалари; зарарли ҳайвонларни йўқ қилиш учун препаратлар; фунгицидлар, гербицидлар',
                    text: 'Фармацевтика маҳсулотлари, тиббий ва ветеринария препаратлари; тиббий мақсадлар учун гигиеник маҳсулотлар; тиббий ёки ветеринария учун мўлжалланган парҳез овқатлар ва моддалар, болалар овқатлари; одамлар ва ҳайвонлар учун озиқ-овқат қўшимчалари; гипслар, қопламалар; тишларни пломбалаш ва тиш гипсларини тайёрлаш учун материаллар; дезинфекциялаш воситалари; зарарли ҳайвонларни йўқ қилиш учун препаратлар; фунгицидлар, гербицидлар'
                },
                {
                    value: '06',
                    label: '06-Оддий металлар ва уларнинг қотишмалари, рудалари; металл қурилиш материаллари; мобил металл конструкциялар ва конструкциялар; металл кабеллар ва симлар, электр бўлмаган; кичик металл ва аппарат маҳсулотлари; сақлаш ва ташиш учун металл идишлар; сейфлар',
                    text: 'Оддий металлар ва уларнинг қотишмалари, рудалари; металл қурилиш материаллари; мобил металл конструкциялар ва конструкциялар; металл кабеллар ва симлар, электр бўлмаган; кичик металл ва аппарат маҳсулотлари; сақлаш ва ташиш учун металл идишлар; сейфлар'
                },
                {
                    value: '07',
                    label: '07-Машиналар ва машиналар; двигателлар (қуруқликдаги транспорт воситаларидан ташқари); уланишлар ва узатиш элементлари (ердаги транспорт воситалари учун мўлжалланганлардан ташқари); қўлда бошқариладиган асбоблардан ташқари қишлоқ хўжалиги асбоблари; инкубаторлар; савдо автоматлари',
                    text: 'Машиналар ва машиналар; двигателлар (қуруқликдаги транспорт воситаларидан ташқари); уланишлар ва узатиш элементлари (ердаги транспорт воситалари учун мўлжалланганлардан ташқари); қўлда бошқариладиган асбоблардан ташқари қишлоқ хўжалиги асбоблари; инкубаторлар; савдо автоматлари'
                },
                {
                    value: '08',
                    label: '08-Қўл асбоблари ва асбоблари; вилкалар пичоқлари, вилкалар ва қошиқлар; темир қўллар; устара',
                    text: 'Қўл асбоблари ва асбоблари; вилкалар пичоқлари, вилкалар ва қошиқлар; темир қўллар; устара'
                },
                {
                    value: '09',
                    label: '09-Илмий, денгиз, геодезия, фотография, кино, оптик асбоблар ва тортиш, ўлчаш, сигнализация, назорат қилиш (текшириш), қутқариш ва ўқитиш учун асбоблар; электр энергиясини узатиш, тақсимлаш, ўзгартириш, тўплаш, тартибга солиш ёки назорат қилиш учун асбоблар ва асбоблар; товуш ёки тасвирларни ёзиш, узатиш, қайта ишлаб чиқариш учун ускуналар; магнит сақлаш воситалари, овоз ёзиш дисклари; CД, ДВД ва бошқа рақамли ташувчилар; олдиндан тўлов билан қурилмалар учун механизмлар; касса аппаратлари, ҳисоблаш машиналари, ахборотни қайта ишлаш ускуналари ва компьютерлар; дастурий таъминот; ёнғинга қарши ускуналар',
                    text: 'Илмий, денгиз, геодезия, фотография, кино, оптик асбоблар ва тортиш, ўлчаш, сигнализация, назорат қилиш (текшириш), қутқариш ва ўқитиш учун асбоблар; электр энергиясини узатиш, тақсимлаш, ўзгартириш, тўплаш, тартибга солиш ёки назорат қилиш учун асбоблар ва асбоблар; товуш ёки тасвирларни ёзиш, узатиш, қайта ишлаб чиқариш учун ускуналар; магнит сақлаш воситалари, овоз ёзиш дисклари; CД, ДВД ва бошқа рақамли ташувчилар; олдиндан тўлов билан қурилмалар учун механизмлар; касса аппаратлари, ҳисоблаш машиналари, ахборотни қайта ишлаш ускуналари ва компьютерлар; дастурий таъминот; ёнғинга қарши ускуналар'
                },
                {
                    value: '10',
                    label: '10-Жарроҳлик, тиббий, стоматология ва ветеринария асбоблари ва асбоблари; оёқ-қўл протезлари, кўз ва тиш протезлари; ортопедик маҳсулотлар; тикув учун материаллар; ногиронлар учун мўлжалланган терапевтик ва ёрдамчи ускуналар; массаж учун асбоблар; чақалоқлар учун асбоблар, ускуналар ва маҳсулотлар;',
                    text: 'Жарроҳлик, тиббий, стоматология ва ветеринария асбоблари ва асбоблари; оёқ-қўл протезлари, кўз ва тиш протезлари; ортопедик маҳсулотлар; тикув учун материаллар; ногиронлар учун мўлжалланган терапевтик ва ёрдамчи ускуналар; массаж учун асбоблар; чақалоқлар учун асбоблар, ускуналар ва маҳсулотлар;'
                },
                {
                    value: '11',
                    label: '11-Озиқ-овқат маҳсулотларини ёритиш, иситиш, буг ʼ ишлаб чиқариш, иссиқлик билан ишлов бериш, совутиш, қуритиш, шамоллатиш, сув тақсимлаш ва санитария учун асбоблар.',
                    text: 'Озиқ-овқат маҳсулотларини ёритиш, иситиш, буг ʼ ишлаб чиқариш, иссиқлик билан ишлов бериш, совутиш, қуритиш, шамоллатиш, сув тақсимлаш ва санитария учун асбоблар.'
                },
                {
                    value: '12',
                    label: '12-Транспорт воситаси; қуруқликда, сувда ва ҳавода ҳаракатланадиган транспорт воситалари"',
                    text: 'Транспорт воситаси; қуруқликда, сувда ва ҳавода ҳаракатланадиган транспорт воситалари"'
                },
                {
                    value: '13',
                    label: '13-Ўқотар қуроллар; ўқ-дорилар ва снарядлар; портловчи моддалар; оташинлар',
                    text: 'Ўқотар қуроллар; ўқ-дорилар ва снарядлар; портловчи моддалар; оташинлар'
                },
                {
                    value: '14',
                    label: '14-Қимматбаҳо металлар ва уларнинг қотишмалари; заргарлик буюмлари, бижутерия, қимматбаҳо ва ярим қимматбаҳо тошлар; соатлар ва хронометрик қурилмалар',
                    text: 'Қимматбаҳо металлар ва уларнинг қотишмалари; заргарлик буюмлари, бижутерия, қимматбаҳо ва ярим қимматбаҳо тошлар; соатлар ва хронометрик қурилмалар'
                },
                {value: '15', label: '15-Мусиқий асбоблар', text: 'Мусиқий асбоблар'},
                {
                    value: '16',
                    label: '16-Қоғоз, картон; босма маҳсулотлар; боғловчи материаллар; фотосуратлар; канселярия буюмлари, офис анжомлари, мебелдан ташқари; иш юритиш ва маиший мақсадлар учун ёпиштирувчи моддалар; рассомлар учун материаллар ва чизиш учун материаллар; чўткалар; ўқув материаллари ва кўргазмали қуроллар; қадоқлаш ва қадоқлаш учун чойшаблар, кино ва полиетилен пакетлар; шрифтлар, типографик клишелар',
                    text: 'Қоғоз, картон; босма маҳсулотлар; боғловчи материаллар; фотосуратлар; канселярия буюмлари, офис анжомлари, мебелдан ташқари; иш юритиш ва маиший мақсадлар учун ёпиштирувчи моддалар; рассомлар учун материаллар ва чизиш учун материаллар; чўткалар; ўқув материаллари ва кўргазмали қуроллар; қадоқлаш ва қадоқлаш учун чойшаблар, кино ва полиетилен пакетлар; шрифтлар, типографик клишелар'
                },
                {
                    value: '17',
                    label: '17-Каучук, каучук, гуттаперча, асбест, слюда қисман ишланган ва ушбу материалларнинг ўрнини босувчи моддалар; қисман қайта ишланган пластмасса ва каучук; қуйиш, муҳрлаш ва изоляциялаш учун материаллар; мослашувчан қувурлар металл бўлмаган',
                    text: 'Каучук, каучук, гуттаперча, асбест, слюда қисман ишланган ва ушбу материалларнинг ўрнини босувчи моддалар; қисман қайта ишланган пластмасса ва каучук; қуйиш, муҳрлаш ва изоляциялаш учун материаллар; мослашувчан қувурлар металл бўлмаган'
                },
                {
                    value: '18',
                    label: '18-Чарм ва тақлид тери; ҳайвонларнинг терилари; саёҳат сандиқлари, чамадонлар; ёмғир ва қуёшдан соябонлар; қамишлар; қамчи, қамчи, от жабдуқлари ва эгар; ёқалар, тасмалар ва ҳайвонлар учун кийим',
                    text: 'Чарм ва тақлид тери; ҳайвонларнинг терилари; саёҳат сандиқлари, чамадонлар; ёмғир ва қуёшдан соябонлар; қамишлар; қамчи, қамчи, от жабдуқлари ва эгар; ёқалар, тасмалар ва ҳайвонлар учун кийим'
                },
                {
                    value: '19',
                    label: '19-Нометалл қурилиш материаллари; қурилиш учун мўлжалланган металл бўлмаган қаттиқ қувурлар; асфальт, қатронлар ва битум; металл бўлмаган мобил тузилмалар ва иншоотлар; металл бўлмаган ёдгорликлар.',
                    text: 'Нометалл қурилиш материаллари; қурилиш учун мўлжалланган металл бўлмаган қаттиқ қувурлар; асфальт, қатронлар ва битум; металл бўлмаган мобил тузилмалар ва иншоотлар; металл бўлмаган ёдгорликлар.'
                },
                {
                    value: '20',
                    label: '20-Мебель, шиша (ойна), расм рамкалари; сақлаш ёки ташиш контейнерлари, металл бўлмаган; шох, суяк, фил суяги, марварид, ишланган ёки қисман ишланган; чиғаноқлар; меэрсчаум; амбер.',
                    text: 'Мебель, шиша (ойна), расм рамкалари; сақлаш ёки ташиш контейнерлари, металл бўлмаган; шох, суяк, фил суяги, марварид, ишланган ёки қисман ишланган; чиғаноқлар; меэрсчаум; амбер.'
                },
                {
                    value: '21',
                    label: '21-Уй ва ошхона анжомлари ва идиш-товоқлар; тароқ ва губкалар; чўткалар, чўткалар бундан мустасно; чўтка маҳсулотлари учун материаллар; тозалаш ва тозалаш учун материал; ишлов берилмаган ёки қисман қайта ишланган шиша, қурилиш ойнасидан ташқари; шиша идишлар, чинни ва сопол идишлар',
                    text: 'Уй ва ошхона анжомлари ва идиш-товоқлар; тароқ ва губкалар; чўткалар, чўткалар бундан мустасно; чўтка маҳсулотлари учун материаллар; тозалаш ва тозалаш учун материал; ишлов берилмаган ёки қисман қайта ишланган шиша, қурилиш ойнасидан ташқари; шиша идишлар, чинни ва сопол идишлар'
                },
                {
                    value: '22',
                    label: '22-Арқонлар, арқонлар, иплар; тармоқлар; чодирлар, шийпонлар; тўқимачилик ёки синтетик  материаллардан тайёрланган тентлар; сузиб юриш; юкларни қадоқланмаган ҳолда ташиш ва сақлаш учун сумкалар; қоғоз, картон, каучук ва пластмассадан ташқари пломба материаллари; тўқимачилик толали хом ашё ва уларнинг ўрнини босувчи материаллардан',
                    text: 'Арқонлар, арқонлар, иплар; тармоқлар; чодирлар, шийпонлар; тўқимачилик ёки синтетик  материаллардан тайёрланган тентлар; сузиб юриш; юкларни қадоқланмаган ҳолда ташиш ва сақлаш учун сумкалар; қоғоз, картон, каучук ва пластмассадан ташқари пломба материаллари; тўқимачилик толали хом ашё ва уларнинг ўрнини босувчи материаллардан'
                },
                {value: '23', label: '23-Тўқимачилик иплари ва ипи', text: 'Тўқимачилик иплари ва ипи'},
                {
                    value: '24',
                    label: '24-Тўқимачилик ва унинг ўрнини босувчи маҳсулотлар; маиший фойдаланиш учун чойшаблар; тўқимачилик ва пластмасса материаллардан тайёрланган пардалар;',
                    text: 'Тўқимачилик ва унинг ўрнини босувчи маҳсулотлар; маиший фойдаланиш учун чойшаблар; тўқимачилик ва пластмасса материаллардан тайёрланган пардалар;'
                },

                {value: '25', label: '25-Кийим, пойабзал, бош кийимлар.', text: 'Кийим, пойабзал, бош кийимлар.'},
                {
                    value: '26',
                    label: '26-Дантел ва кашталар, ортиқча оро бермай ва ленталар; тугмалар, тугмалар, илгаклар ва блоклар, игналар ва игналар; сунъий гуллар; соч безаклари; сунъий сочлар',
                    text: 'Дантел ва кашталар, ортиқча оро бермай ва ленталар; тугмалар, тугмалар, илгаклар ва блоклар, игналар ва игналар; сунъий гуллар; соч безаклари; сунъий сочлар'
                },
                {
                    value: '27',
                    label: '27-Гиламлар,гиламларчалар, линолеум ва бошқа пол қопламалари; девор қоғози ва қоплама материаллари (тўқимачилик бўлмаган).',
                    text: 'Гиламлар,гиламларчалар, линолеум ва бошқа пол қопламалари; девор қоғози ва қоплама материаллари (тўқимачилик бўлмаган).'
                },
                {
                    value: '28',
                    label: '28-Ўйинлар, ўйинчоқлар; видео ўйинлар учун қурилмалар; гимнастика ва спорт буюмлари; Рождество безаклари',
                    text: 'Ўйинлар, ўйинчоқлар; видео ўйинлар учун қурилмалар; гимнастика ва спорт буюмлари; Рождество безаклари'
                },
                {
                    value: '29',
                    label: '29-Гўшт, балиқ, парранда ва ов; гўшт экстракти; консерваланган, қуритилган ва иссиқлик билан ишлов берилган сабзавотлар ва мевалар; желе, мураббо, компотлар; тухум; сут ва сут маҳсулотлари; истеъмол қилинадиган ёғлар ва ёғлар.',
                    text: 'Гўшт, балиқ, парранда ва ов; гўшт экстракти; консерваланган, қуритилган ва иссиқлик билан ишлов берилган сабзавотлар ва мевалар; желе, мураббо, компотлар; тухум; сут ва сут маҳсулотлари; истеъмол қилинадиган ёғлар ва ёғлар.'
                },
                {
                    value: '30',
                    label: '30-Қаҳва, чой, какао ва кофе ўрнини босувчи маҳсулотлар; гуруч; тапиока (маниока) ва саго; ун ва дон маҳсулотлари;нон маҳсулотлари, қандолат маҳсулотлари; музқаймоқ; шакар, асал, мелас сиропи; хамиртуруш, пишириш кукунлари; туз; хантал; сирка, зираворлар; зираворлар; совутиш учун муз',
                    text: 'Қаҳва, чой, какао ва кофе ўрнини босувчи маҳсулотлар; гуруч; тапиока (маниока) ва саго; ун ва дон маҳсулотлари;нон маҳсулотлари, қандолат маҳсулотлари; музқаймоқ; шакар, асал, мелас сиропи; хамиртуруш, пишириш кукунлари; туз; хантал; сирка, зираворлар; зираворлар; совутиш учун муз'
                },
                {
                    value: '31',
                    label: '31-Қишлоқ, сув хўжалиги, боғдорчилик ва ўрмон хўжалиги маҳсулотлари, қайта ишланмаган ва қайта ишланмаган; қайта ишланган ёки қайта ишланмаган дон ва уруғлар; янги мевалар, сабзавотлар ва хушбўй ўтлар; тирик ўсимликлар ва гуллар; лампочкалар, кўчатлар ва уруғлар; тирик ҳайвонлар; ҳайвонлар учун озуқа ва ичимликлар; солод.',
                    text: 'Қишлоқ, сув хўжалиги, боғдорчилик ва ўрмон хўжалиги маҳсулотлари, қайта ишланмаган ва қайта ишланмаган; қайта ишланган ёки қайта ишланмаган дон ва уруғлар; янги мевалар, сабзавотлар ва хушбўй ўтлар; тирик ўсимликлар ва гуллар; лампочкалар, кўчатлар ва уруғлар; тирик ҳайвонлар; ҳайвонлар учун озуқа ва ичимликлар; солод.'
                },
                {
                    value: '32',
                    label: '32-Пиво; минерал ва газланган сувлар ва бошқа алкоголсиз ичимликлар; мевали ичимликлар ва мева шарбатлари; сироплар ва бошқа ичимликлар препаратлари',
                    text: 'Пиво; минерал ва газланган сувлар ва бошқа алкоголсиз ичимликлар; мевали ичимликлар ва мева шарбатлари; сироплар ва бошқа ичимликлар препаратлари'
                },
                {
                    value: '33',
                    label: '33-Спиртли ичимликлар (пиводан ташқари).',
                    text: 'Спиртли ичимликлар (пиводан ташқари).'
                },
                {
                    value: '34',
                    label: '34-Табак; Чекиш учун аксессуарлар; Гугурт',
                    text: 'Табак; Чекиш учун аксессуарлар; Гугурт'
                },
            ],
            ilova_error: [],

            float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$']
        }

    },
    methods: {
        async getCountries() {
            let root = this
            await axios.get('/api/v1/data/country?lang=uz').then(function (result) {
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
        getField(val) {
            return this.fields.filter((obj) => {
                if (obj.key === val) return obj.value
            })
        },
        setProductErrors(tovar_id, errors) {
            const _this = this;
            if (errors) {
                //console.log(errors)
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });
/*                console.log('errorfield')
                console.log(tovar_id)
                console.log(errorfield)*/
                ///this.application.tovarlar.forEach((tovar) => {

                _this.$refs['stepValidation2Product' + tovar_id][0].setErrors(errorfield)

                /// })

            }
        },
        setHuquqEgasiErrors(errors) {
            const _this = this;
            if (errors) {

                console.log(errors);
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });
                ///console.log(_this.$refs['stepValidation2'])
                _this.$refs['stepValidation2'].setErrors(errorfield)
            }
        },
        setIshChiqTotalError(error) {
            this.totalerrors = error;
        },
        setIshlabChiqaruvchiErrors(errors) {
            const _this = this;
            if (errors) {
                let errorfield = [];
                _this.errors = [];
                Object.keys(errors).forEach(keyError => {
                    _this.errors[keyError] = [];
                    Object.keys(errors[keyError]).forEach(keyItem => {
                        if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {

                            //let mykey={};
                            //mykey[_this.getField(keyItem)[0].value]=errors[keyError][keyItem];
                            //_this.errors[keyError].push(mykey)
                            _this.errors[keyError][_this.getField(keyItem)[0].value] = errors[keyError][keyItem];

                        }
                    });
                });
                _this.errors.splice(0, 1)
                // console.log('asdasd')
                // console.log(_this.$refs['ishlabchiqarilgan'])
                //_this.$refs['ishlabchiqarilgan'].setErrors(errorfield)
                ///console.log(_this.errors);
                //_this.errors=errorfield;
            }
        },

        isCompletedStep(step) {
            return this.completedSteps.includes(step);
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

            data['personType'] = data.type === 1 ? 0 : 1;
            data['legalName'] = data.organization_name;
            //delete data.type;
            //delete data.region;
            //delete data.position;
            //delete data.fio;
            //delete data.locationId;
            delete data.organization_name;

            data['phone'] = data.phone.replaceAll(" ", "");
            data['phone'] = data.phone.replaceAll("+", "");
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/intellektual-person', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                // console.log(error)

            }
        },
        async SendHuquqEgasi(data = null) {
            const _this = this;
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/intellektual-huquq', data).then(function (res) {
                    _this.setIshlabChiqaruvchiErrors([]);
                    result = res;
                }).catch((error) => {
                    //console.log(error.response.data.data)
                    if (typeof error.response.data !== 'undefined' && typeof error.response.data.data !== 'undefined') {
                        let errorString = '';
                        if (typeof error.response.data.data.errorsApps !== 'undefined') {
                            _this.setHuquqEgasiErrors(error.response.data.data.errorsApps);
                            errorString = 'Ҳуқуқ эгаси тўғрисидаги маълумотлардаги хатоликларни тўғрилаб қайтадан юборинг!'
                        }
                        if (typeof error.response.data.data.errorsCommodity !== 'undefined') {
                            if (errorString.length > 0) {
                                errorString = 'Ҳуқуқ эгаси ва ишлаб чиқарувчи тўғрисидаги маълумотлардаги хатоликларни тўғрилаб қайтадан юборинг!'
                            } else {
                                errorString = 'ишлаб чиқарувчи тўғрисидаги маълумотлардаги хатоликларни тўғрилаб қайтадан юборинг!'
                            }
                            //_this.errors=error.response.data.data.errorsCommodity;
                            _this.setIshlabChiqaruvchiErrors(error.response.data.data.errorsCommodity);
                        }

                        /*if (typeof error.response.data.data.errorsCommodity !== 'undefined')
                        {
                            let $html=""
                            if(typeof error.response.data.data.errorsCommodity ==='object') {
                                let size = Object.keys(error.response.data.data.errorsCommodity).length;
                                if (size > 0) {
                                    Object.entries(error.response.data.data.errorsCommodity).forEach(([key, value]) => {
                                        let $htmlElement = "";
                                        if (Object.keys(value).length > 0) {
                                            console.log(value)
                                            Object.entries(value).forEach(([ekey, evalue]) => {
                                                $htmlElement = $htmlElement + key + " - ишлаб чиқарувчи " + _this.getField(ekey) + "майдони - " + evalue + "\n";
                                            })
                                        }
                                        $html = $html + $htmlElement;
                                    });
                                }
                                _this.$toast.error("Ишлаб чиқарувчи майдонларида:\n" +
                                    $html
                                )
                            } else if(typeof error.response.data.data.errorsCommodity ==='string'){
                                _this.$toast.error(error.response.data.data.errorsCommodity)
                            }

                        } */
                        if (typeof error.response.data.data.errorInManufacturer !== 'undefined') {

                            if (errorString.length > 0) {
                                errorString = 'Ҳуқуқ эгаси ва ишлаб чиқарувчи тўғрисидаги маълумотлардаги хатоликларни тўғрилаб қайтадан юборинг!'
                            } else {
                                errorString = 'ишлаб чиқарувчи тўғрисидаги маълумотлардаги хатоликларни тўғрилаб қайтадан юборинг!'
                            }

                            _this.totalerrors = error.response.data.data.errorInManufacturer;
                            /*_this.$refs["ishlab_chiqaruvchi_umumiy"].applyResult({
                                errors: [error.response.data.data.errorInManufacturer], // array of string errors
                                valid: false, // boolean state
                                failedRules: {} // should be empty since this is a manual error.
                            })*/

                            // _this.$toast.error(error.response.data.data.errorInManufacturer)
                        }
                        _this.$toast.error(errorString);

                    } else {
                        _this.$toast.error("Серверда хатолик юз берди! Бироздан ҳаракат қилиб кўринг!");
                        return error.response;
                    }
                })

            } catch (error) {
                return error;
            }
            return result;
        },
        async sendProduct(data) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/intellektual-product', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                return error.response

            }

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
                            let resultData = await this.sendPerson(JSON.parse(JSON.stringify(this.person)));
                            this.loadingButton.first = false;
                            if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                this.person.person_id = resultData.data['data']['data']['id'];
                                this.$cookie.delete('user');
                                this.$cookie.set('user', JSON.stringify(this.person), 1);
                                _this.stepper = 2;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success("Аризачи маълумотлари сақланди!");

                            } else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");

                        }
                        /*                        _this.stepper = 2;
                                                _this.completedSteps.push(_this.stepper - 1);
                                                _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                        this.loadingButton.first = false;
                    })
                    //isValid = true;

                    break;


                case 2:
                    this.loadingButton.second = true;
                    //console.log(_this.$refs["stepValidation2"])

                    setTimeout(async () => {

                        isValid = true;// await this.validateField("stepValidation2");
                        if (isValid === true) {
                            _this.huquq_egasi.ipHolder = _this.application.huquq_egasi_nomi;
                            _this.huquq_egasi.ipHoldersAddr = _this.application.huquq_egasi_manzili;
                            _this.huquq_egasi.ipHolderCountry = _this.application.huquq_egasi_davlat;
                            _this.huquq_egasi.ipHolderTelNumber = (_this.issetVar('application.huquq_egasi_phone')) ? JSON.parse(JSON.stringify(_this.application.huquq_egasi_phone)) : '';
                            _this.huquq_egasi.ipHolderMail = _this.application.huquq_egasi_mail;
                            _this.huquq_egasi.ipHolderTelNumber = _this.huquq_egasi.ipHolderTelNumber.replaceAll(" ", "").replaceAll("+", "");

                            //if()
                            if (_this.issetVar("application.ishonchnoma_file.[0].id")) {
                                _this.huquq_egasi.fileId = _this.application.ishonchnoma_file[0].id;
                            }
                            if (_this.issetVar("application.ishonchnoma_sana") && _this.application.ishonchnoma_sana !== null && _this.application.ishonchnoma_sana.length === 22) {
                                // && _this.application.ishonchnoma_sana.length==='22'
                                const [dateStart, dateEnd] = _this.application.ishonchnoma_sana.split('--');
                                _this.huquq_egasi.dateStart = dateStart;
                                _this.huquq_egasi.dateEnd = dateEnd;
                            }
                            _this.huquq_egasi.personPin = _this.person.pin;
                            _this.huquq_egasi.personId = _this.person.person_id;
                            _this.huquq_egasi.appId = _this.person.person_id;

                            _this.s01AppsManufacturerInfos = [];
                            /*                            _this.s01AppsManufacturerInfos.push({
                                                            manufacturer: 'dsfsf',
                                                            manufacturerTelNum: 'asdasdad',
                                                            manufacturerAddr: 'sdfsdf',
                                                            manufacturerMAil: null,
                                                        });*/
                            _this.application.ishchiq.forEach((ishchiqItem) => {
                                //let telnum = ishchiqItem.phone;
                                //telnum=telnum.replaceAll(" ", "");
                                _this.s01AppsManufacturerInfos.push({
                                    manufacturer: ishchiqItem.nomi,
                                    manufacturerTelNum: ishchiqItem.phone.replaceAll(" ", ""),
                                    manufacturerAddr: ishchiqItem.manzili,
                                    manufacturerMAil: ishchiqItem.mail,
                                });
                            })

                            _this.$cookie.delete('huquqegasi');
                            _this.$cookie.set('huquqegasi', JSON.stringify({
                                huquq_egasi: _this.huquq_egasi,
                                ishchiq: _this.s01AppsManufacturerInfos
                            }), 1);

                            let resultData = await this.SendHuquqEgasi({
                                s01Apps: this.huquq_egasi,
                                s01AppsManufacturerInfos: _this.s01AppsManufacturerInfos
                            });
                            this.loadingButton.first = false;
                            _this.resetVar(_this.huquq_egasi);
                            _this.resetVar(_this.s01AppsManufacturerInfos);

                            if (typeof resultData !== 'undefined' && resultData && typeof resultData.data !== 'undefined' && resultData.data.success === true) {


                                //console.log(resultData.data['data']['data']['id'])
                                this.application.id = resultData.data['data']['data']['id'];
                                this.$cookie.delete('user');
                                this.$cookie.set('user', JSON.stringify(this.person), 1);
                                _this.stepper = 3;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success("Ҳуқуқ эгаси ва ишлаб чиқарувчи маълумотлари сақланди!");

                            } else {
                                // console.log(resultData)

                                //_this.setHuquqEgasiErrors(errors);
                                //this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");
                            }

                        }
                        /*                        _this.stepper = 3;
                                                _this.completedSteps.push(_this.stepper - 1);
                                                _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                        this.loadingButton.second = false;
                    })


                    /*                    _this.stepper = 3;
                                        _this.completedSteps.push(_this.stepper - 1);
                                        _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                    //this.loadingButton.second = false;


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
                                isValid = true; // await this.validateField("stepValidation2Product" + tovar.id)


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


                            _this.app = [];
                            _this.application.tovarlar.forEach(function (tovar) {


                                _this.commodity = [];
                                tovar.tftn.forEach(function (tftn) {
                                    _this.commodity.push(tftn.id)
                                });
                                _this.documents = [];
                                tovar.documents.forEach(function (document) {
                                    _this.documents.push({fileId: document.id})
                                });

                                let guvohnoma = null;
                                let registr = null;
                                if (typeof tovar.guvohnoma_sana !== 'undefined' && tovar.guvohnoma_sana) guvohnoma = tovar.guvohnoma_sana.split("--");
                                if (typeof tovar.reestr_muddat !== 'undefined' && tovar.reestr_muddat) registr = tovar.reestr_muddat.split("--");
                                _this.app.push({
                                    commodityBody: {
                                        appId: _this.application.id,
                                        ipDescription: typeof tovar.nomlanishi !== 'undefined' ? tovar.nomlanishi : null,
                                        ipPassNum: typeof tovar.guvohnoma_raqami !== 'undefined' ? tovar.guvohnoma_raqami : null,
                                        ipPassStartDate: (guvohnoma && typeof guvohnoma[0] !== 'undefined') ? guvohnoma[0] : null,
                                        ipPassEndDate: (guvohnoma && typeof guvohnoma[1] !== 'undefined') ? guvohnoma[1] : null,
                                        ipRegistrStartDate: (registr && typeof registr[0] !== 'undefined') ? registr[0] : null,
                                        ipRegistrEndDate: (registr && typeof registr[1] !== 'undefined') ? registr[1] : null,
                                    },
                                    mktu: tovar.tasnifi,
                                    hsCode: _this.commodity.length > 0 ? _this.commodity : null,
                                    docs: (_this.documents.length > 0 && typeof _this.documents[0] !=='undefined' && typeof _this.documents[0].fileId !=='undefined') ? _this.documents : null
                                })
                                /* _this.app.push({
                                     tradeName: typeof tovar.tijorat_nomi !== 'undefined' ? tovar.tijorat_nomi : null,
                                     tradeMark: typeof tovar.mark !== 'undefined' ? tovar.mark : null,) ? _this.documents : null
                                })
                                /* _this.app.push({
                                     tradeName: typeof tovar.tijorat_nomi !== 'undefined' ? tovar.tijorat_nomi : null,
                                     tradeMark: typeof tovar.mark !== 'undefined' ? tovar.mark : null,
                                     model: typeof tovar.model !== 'undefined' ? tovar.model : null,
                                     comment: typeof tovar.comment !== 'undefined' ? tovar.comment : null,
                                     basicQty: typeof tovar.namunasoni !== 'undefined' ? tovar.namunasoni : null,
                                     extraUnits: typeof tovar.olchovbirligi !== 'undefined' ? tovar.olchovbirligi : null,
                                 })
 */

                            })

                            let resultData = await this.sendProduct(_this.app);
                            if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                                //console.log(resultData.data['data']['data']['id'])
                                //this.app.app_id = resultData.data['data']['data']['id'];
                                //console.log(resultData.data)
                                ///this.$cookie.delete('user');
                                //this.$cookie.delete('huquqegasi');
                                this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                                setTimeout(() => {
                                    _this.$router.push("/services/intellectual/" + _this.application.id)

                                }, 1000)
                            } else {
                                if (resultData.status === 400) {


                                    if (typeof resultData.data.data !== 'undefined' && typeof resultData.data.data.errorsCommodity !== 'undefined') {

                                        Object.entries(resultData.data.data.errorsCommodity).forEach(([key, value]) => {
                                            if (typeof value['commodityBody'] !== 'undefined')
                                                _this.setProductErrors(key, value['commodityBody']);
                                            if (typeof value['mktuBody'] !== 'undefined' && typeof value['mktuBody'][0] !== 'undefined')
                                                _this.setProductErrors(key, {mktu: value['mktuBody'][0]});
                                            if (typeof value['docsBody'] !== 'undefined' && typeof value['docsBody'][0] !== 'undefined')
                                                _this.ilova_error[key] = value['docsBody'][0];
                                            //_this.setProductErrors(key, {docs: value['mktuBody'][0]});
                                            if (typeof value['hsCodeBody'] !== 'undefined' && typeof value['hsCodeBody'][0] !== 'undefined')
                                                _this.setProductErrors(key, {hsCode: value['hsCodeBody'][0]});
                                        })
                                        //_this.setProductErrors(resultData.data.data.errorsCommodity);
                                    }
                                    this.$toast.error("Маълумотларингизни текшириб қайтадан юборинг!");
                                } else
                                    this.$toast.error("Серверда хатолик юз берди! Маълумотларингизни текшириб қайтадан юборинг!");
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
                                'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ").length)
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


        initialize() {
            this.getBoshqarmalar();
            this.getCountries();
            this.setCookieData();
            this.createWatcher(0);  /// listener for product[0]
        },
        setCookieData() {
            /////  Step  1  Fill  Person data
            let CPerson = null;
            CPerson = this.$cookie.get('user') ? JSON.parse(this.$cookie.get('user')) : null;
            this.setPersonData(CPerson)
            let CHuquq = null;
            CHuquq = this.$cookie.get('huquqegasi') ? JSON.parse(this.$cookie.get('huquqegasi')) : null;
            if (CHuquq) this.setHuquqData(CHuquq);
        },
        setHuquqData(data) {
            console.log(data)
            const huquq_egasi = (data && typeof data['huquq_egasi'] !== 'undefined') ? data['huquq_egasi'] : null;
            const ishchiq = (data && typeof data['ishchiq'] !== 'undefined') ? data['ishchiq'] : [];
            const _this = this;
            _this.application.huquq_egasi_nomi = (huquq_egasi && typeof huquq_egasi['ipHolder'] !== 'undefined') ? huquq_egasi['ipHolder'] : null;
            _this.application.huquq_egasi_manzili = (huquq_egasi && typeof huquq_egasi['ipHoldersAddr'] !== 'undefined') ? huquq_egasi['ipHoldersAddr'] : null;
            _this.application.huquq_egasi_davlat = (huquq_egasi && typeof huquq_egasi['ipHolderCountry'] !== 'undefined') ? huquq_egasi['ipHolderCountry'] : null;
            _this.application.huquq_egasi_phone = (huquq_egasi && typeof huquq_egasi['ipHolderTelNumber'] !== 'undefined') ? huquq_egasi['ipHolderTelNumber'] : null;
            _this.application.huquq_egasi_mail = (huquq_egasi && typeof huquq_egasi['ipHolderMail'] !== 'undefined') ? huquq_egasi['ipHolderMail'] : null;
            _this.application.ishonchnoma_sana = (huquq_egasi && typeof huquq_egasi['dateEnd'] !== 'undefined' && typeof huquq_egasi['dateStart'] !== 'undefined') ? huquq_egasi['dateStart'] + '--' + huquq_egasi['dateEnd'] : null;

            if (huquq_egasi && typeof huquq_egasi['fileId'] !== 'undefined') {
                _this.application.ishonchnoma_file = [];
                _this.application.ishonchnoma_file.push({id: huquq_egasi['fileId']});
                //console.log(_this.application.ishonchnoma_file)
            }


            if (ishchiq && typeof ishchiq[0] !== 'undefined') {
                _this.application.ishchiq = [];

                Object.entries(ishchiq).forEach(([key, value]) => {
                    _this.application.ishchiq.push({
                        nomi: value['manufacturer'],
                        manzili: value['manufacturerAddr'],
                        mail: value['manufacturerMAil'],
                        phone: value['manufacturerTelNum'],
                    });
                })
            }


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
            const _this = this
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

        },
        resetVar(myVar) {
            const _this = this;
            if (myVar === null) return null;
            if (typeof myVar === 'object') {
                Object.entries(myVar).forEach(([key, value]) => {

                    if (typeof value === 'object') {
                        if (_this.resetVar(value)) {
                            myVar[key] = _this.resetVar(value);
                        }
                    } else {
                        if (Array.isArray(value)) {
                            value.forEach((arrayKey, arrayValue) => {
                                if (arrayValue) {
                                    if (_this.resetVar(arrayValue)) {
                                        myVar[key][arrayKey] = _this.resetVar(arrayValue);
                                    } else {
                                        myVar[key][arrayKey] = null;
                                    }
                                } else return myVar[key]

                            });

                        } else
                            myVar[key] = null;
                    }
                });
                return myVar;
            }
            return null;

        },

        issetVar(myVarString) {
            const _this = this;
            const varToString = varObj => Object.keys(varObj)[0]
            let myVar = "_this";
            let returnVar = true;
            myVarString.split('.').forEach((mVar, key) => {
                let OldVar = JSON.parse(JSON.stringify(myVar));
                if (mVar.indexOf('[') !== -1) {
                    myVar = myVar + mVar;
                } else {
                    myVar = myVar + '.' + mVar;
                }
                //console.log(eval(OldVar));
                if (returnVar && (typeof eval(myVar) === 'undefined' || eval(myVar) === null || eval(OldVar) === null)) {
                    returnVar = false;
                    return false;
                }
                // console.log(myVar)

            })
            // console.log(returnVar)
            return returnVar;


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
        ishchiqErrors: {
            get() {
                return this.errors
            },
        },
        ishchiqTotalErrors: {
            get() {
                return this.totalerrors
            },
        }
        /*        progress(val) {
                    this.Initprogress(val)
                },
                isvalidDocument(tovar_id = null) {
                    //tovar_id = this.tovarIndex;
                    //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
                    return !this.isValidDoc()
                }*/

    },
    filters: {
        reverse: function (array) {
            return array.slice().reverse()
        }
    }
    ,
    components: {
        DialogChips,
        EArxivFile,
        AutocompleteField,
        TextField,
        ValidationProvider,
        ValidationObserver,
        Myfield
    }
}
</script>
