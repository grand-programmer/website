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
                        <h3 align="center" class="lh-sm font-weight-bold primary-color my-5">
                            {{ $t('Ваколатли иқтисодий оператор реестрига кириш учун ариза топшириш') }}
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
                            {{ $t('Умумий маълумотлар') }}
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="2"
                            :complete="isCompleted(2)"
                            @click="goStep(2)"
                        >
                            {{ $t('Қўшимча маълумотлар') }}
                        </v-stepper-step>
                        <v-divider></v-divider>

                        <v-stepper-step
                            step="3"
                            :complete="isCompleted(3)"
                            @click="goStep(3)"
                        >
                            {{ $t('Омбор маълумоти') }}
                        </v-stepper-step>

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-15 px-10 py-10"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"> {{
                                        $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                                    }}
                                </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation1">
                                    <v-row class="mt-2">
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
                                            <div class="vio_card">
                                                <div class="vio_card_title">
                                                    {{$t('Корхона рахбари')}}
                                                </div>
                                                <div class="field">
                                                    <text-field
                                                        v-model="app.chief.passport"
                                                        :title="$t('ID-карта (паспорт) маълумотлари')"
                                                        rules="required"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>
                                                <div class="field">
                                                    <editable-date
                                                        v-model="app.chief.birthdate"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                        :label="$t('Туғилган санаси')"
                                                    ></editable-date>
                                                    <v-btn color="primary"
                                                           :loading="loading.yuborishLoading"
                                                           @click="getPasportData"
                                                           style="margin-left: 10px; margin-top:-3px; height: 40px"
                                                           x-small>
                                                        <v-icon color="white" size="40">mdi-magnify</v-icon>
                                                    </v-btn>
                                                </div>

                                                <div class="field">
                                                    <text-field
                                                        v-model="app.chief.fio"
                                                        :title="$t('Ф.И.О')"
                                                        rules="required"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>

                                            </div>

                                        </v-col>
                                        <v-col cols="4">
                                            <div class="vio_card">
                                                <div class="vio_card_title">
                                                   {{ $t('Юридик шахс манзили, боғланиш маълумотлари') }}
                                                </div>
                                                <div class="field">
                                                    <text-field
                                                        v-model="app.phone"
                                                        :title="$t('Телефон')"
                                                        rules="required"
                                                        dense
                                                        v-mask="'(##) ### - ## - ##'"
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>
                                                <div class="field">
                                                    <text-field
                                                        v-model="app.email"
                                                        :title="$t('Электрон почта')"
                                                        rules="required"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>
                                                <div class="field">
                                                    <text-field
                                                        v-model="app.address"
                                                        :title="$t('Ташкилот манзили')"
                                                        rules="required"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>

                                            </div>

                                        </v-col>
                                        <v-col cols="4">
                                            <div class="vio_card">
                                                <div class="vio_card_title">
                                                    {{$t('Ариза тури ва юридик шахснинг асосий фаолияти')}}
                                                </div>
                                                <ValidationProvider name="Ариза тури" rules="required"
                                                                    v-slot="{ errors }" class="field" tag="div">
                                                    <v-autocomplete
                                                        v-model="app.type"
                                                        :title="$t('Ариза турини танланг')"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        :items="list.types"
                                                        class="w-100"
                                                        :error-messages="errors"
                                                    >
                                                    </v-autocomplete>
                                                </ValidationProvider>

                                                <ValidationProvider name="Ариза тури" rules="required"
                                                                    v-slot="{ errors }" class="field" tag="div">
                                                    <v-autocomplete
                                                        v-model="app.way"
                                                        :title="$t('Фаолият йўналишини танланг')"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        :items="list.ways"
                                                        class="w-100"
                                                        :error-messages="errors"
                                                    >
                                                    </v-autocomplete>
                                                </ValidationProvider>

                                                <div class="field">
                                                    <text-field
                                                        v-model="app.faoliyat"
                                                        :title="$t('Фаолият ҳақида')"
                                                        rules="required"
                                                        dense
                                                        outlined
                                                        persistent-placeholder
                                                        hide-details
                                                        class="w-100"
                                                    >
                                                    </text-field>
                                                </div>

                                            </div>

                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span>{{
                                                $t('Корхона таъсисчилари')
                                            }}</span></div>
                                        <div class="d-flex justify-end w-100 mb-2 ">
                                            <v-btn color="primary" small @click="dialog.founder = true">
                                                <v-icon color="white">mdi-plus</v-icon>
                                                <span>{{ $t('Қўшиш') }}</span>
                                            </v-btn>
                                        </div>
                                        <v-dialog v-model="dialog.founder" max-width="600">
                                            <v-card elevation="2">
                                                <v-toolbar
                                                    color="primary" style="font-size: 20px; color: #fff;">
                                                    {{ $t('Янги таъсисчи қўшиш') }}
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-row class="px-4 pt-4">
                                                        <v-col cols="6">
                                                            <text-field
                                                            :title="$t('ID-карта (паспорт) маълумотлари')"
                                                                        persistent-placeholder
                                                                        v-model="temp.founder.passport"></text-field>
                                                        </v-col>
                                                        <v-col cols="6">
                                                            <editable-date
                                                            :label="$t('Туғилган санаси')"
                                                                           v-model="temp.founder.birthdate"
                                                                           persistent-placeholder></editable-date>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                                <v-card-actions class="d-flex justify-content-end">
                                                    <v-btn color="primary" text @click="dialog.founder=false">
                                                        {{$t('Ёпиш')}}
                                                    </v-btn>
                                                    <v-btn color="primary" text @click="addFounder"
                                                           :loading="loading.founder">
                                                           {{$t('Сақлаш')}}
                                                    </v-btn>
                                                </v-card-actions>

                                            </v-card>
                                        </v-dialog>
                                        <div class="px-4 d-block">
                                            <v-data-table
                                                :headers="a.headers"
                                                :items="app.founders"
                                                :items-per-page="2"
                                                class="elevation-1"
                                                :no-data-text="$t('Маълумот топилмади')"
                                                :footer-props="{
                                                    'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                    'items-per-page-all-text': $t('Барчаси')
                                                }"
                                                :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                <template #item.id="{ item }">
                                                    {{ app.founders.indexOf(item) + 1 }}
                                                </template>
                                                <template #item.actions="{ item }">
                                                    <v-btn text @click="deleteFounder(item)">
                                                        <v-icon color="danger">mdi-delete</v-icon>
                                                    </v-btn>
                                                </template>
                                            </v-data-table>
                                        </div>
                                    </v-row>
                                </ValidationObserver>
                                <div class="mt-10">
                                    <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                                        <v-col class="d-flex tab_action_buttons">
                                            <v-btn text
                                                   @click="prevStep"
                                            >
                                                {{ $t('Орқага') }}
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click="nextStep"
                                                size="large"
                                            >
                                                {{ $t('Давом этиш') }}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-card
                                class="mb-15 px-10 py-10"
                            >
                              <div class="row position-absolute yoriqnoma-text"><a
                                  :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"> {{
                                  $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                                }}
                              </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation2">
                                    <v-row>
                                    </v-row>
                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span>{{
                                                $t('Корхона бухгалтери')
                                            }}</span></div>
                                        <div class="px-4 pt-10 d-block">
                                            <v-row>
                                                <v-col cols="4">
                                                    <div class="field">
                                                        <text-field
                                                            v-model="app.accountant.passport"
                                                            :title="$t('ID-карта (паспорт) маълумотлари')"
                                                            rules="required"
                                                            dense
                                                            outlined
                                                            persistent-placeholder
                                                            hide-details
                                                            class="w-100"
                                                        >
                                                        </text-field>
                                                    </div>
                                                </v-col>
                                                <v-col cols="4">
                                                    <div class="field">
                                                        <editable-date
                                                            v-model="app.accountant.birthdate"
                                                            dense
                                                            outlined
                                                            persistent-placeholder
                                                            hide-details
                                                            class="w-100"
                                                            :label="$t('Туғилган санаси')"
                                                        ></editable-date>
                                                        <v-btn :loading="loading.accountant" @click="addAccountant"
                                                               color="primary"
                                                               style="margin-left: 10px; margin-top:-3px; height: 40px"
                                                               x-small>
                                                            <v-icon color="white" size="40">mdi-magnify</v-icon>
                                                        </v-btn>
                                                    </div>
                                                </v-col>
                                                <v-col cols="4">
                                                    <div class="field">
                                                        <text-field
                                                            v-model="app.accountant.fio"
                                                            :title="$t('Ф.И.О')"
                                                            rules="required"
                                                            dense
                                                            outlined
                                                            persistent-placeholder
                                                            hide-details
                                                            class="w-100"
                                                        >
                                                        </text-field>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-row>
                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span>{{
                                                $t('Ваколатли шахслар')
                                            }}</span></div>
                                        <div class="d-flex justify-end w-100 mb-2 ">
                                            <v-btn color="primary" small @click="dialog.authPerson = true">
                                                <v-icon color="white">mdi-plus</v-icon>
                                                <span>{{ $t('Қўшиш') }}</span>
                                            </v-btn>
                                        </div>

                                        <v-dialog v-model="dialog.authPerson" max-width="600">
                                            <v-card elevation="2">
                                                <v-toolbar
                                                    color="primary" style="font-size: 20px; color: #fff;">
                                                    {{ $t('Янги ваколатли шахс қўшиш') }}
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-row class="px-4 pt-4">
                                                        <v-col cols="6">
                                                            <text-field
                                                            :title="$t('ID-картаси (паспорт) маълумотлари')"
                                                                        persistent-placeholder
                                                                        v-model="temp.authPerson.passport"></text-field>
                                                        </v-col>
                                                        <v-col cols="6">
                                                            <editable-date
                                                            :label="$t('Туғилган санаси')"
                                                                           v-model="temp.authPerson.birthdate"
                                                                           persistent-placeholder></editable-date>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                                <v-card-actions class="d-flex justify-content-end">
                                                    <v-btn color="primary" text @click="dialog.authPerson=false">
                                                        {{$t('Ёпиш')}}
                                                    </v-btn>
                                                    <v-btn color="primary" text @click="addAuthPerson"
                                                           :loading="loading.authPerson">
                                                           {{$t('Сақлаш')}}
                                                    </v-btn>
                                                </v-card-actions>

                                            </v-card>
                                        </v-dialog>
                                        <div class="px-4 d-block">
                                            <v-data-table
                                                :headers="a.headers"
                                                :items="app.authPersons"
                                                :items-per-page="2"
                                                class="elevation-1"
                                                :no-data-text="$t('Маълумот топилмади')"
                                                :footer-props="{
                                                    'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                    'items-per-page-all-text': $t('Барчаси')
                                                }"
                                                :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                <template #item.id="{ item }">
                                                    {{ app.authPersons.indexOf(item) + 1 }}
                                                </template>
                                                <template #item.actions="{ item }">
                                                    <v-btn text @click="deleteAuthPerson(item)">
                                                        <v-icon color="danger">mdi-delete</v-icon>
                                                    </v-btn>
                                                </template>
                                            </v-data-table>
                                        </div>
                                    </v-row>
                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span
                                            class="d-flex align-center justify-space-between py-0">{{
                                                $t('Корхона шартнома асосида брокерлик фирмалари хизматларидан фойдаланиладими ?')
                                            }}
                                            <span class="d-flex justify-center align-center">
                                                {{$t('Йўқ')}}
                                                 <v-switch hide-details
                                                                                                           inset
                                                                                                           v-model="temp.issetBranch.broker"
                                                                                                           class="ml-6 mr-2 my-2"></v-switch>
                                                                                                            {{$t('Ҳа')}}
                                                                                                        </span>
                                        </span></div>
                                        <template v-if="temp.issetBranch.broker">
                                            <div class="d-flex justify-end w-100 mb-2 ">
                                                <v-btn color="primary" small @click="dialog.broker = true">
                                                    <v-icon color="white">mdi-plus</v-icon>
                                                    <span>{{ $t('Қўшиш') }}</span>
                                                </v-btn>
                                            </div>
                                            <v-dialog v-model="dialog.broker" max-width="600">
                                                <v-card elevation="2">
                                                    <v-toolbar
                                                        color="primary" style="font-size: 20px; color: #fff;">
                                                        {{ $t('Янги брокерлик фирмани қўшиш') }}
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <validation-observer v-slot="{ invalid }"
                                                                             ref="stepValidationBroker" disabled>
                                                            <v-row class="px-4 pt-4">
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Ташкилот номи')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.broker.org"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Ташкилот СТИРи')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.broker.tin"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Шартнома рақами')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.broker.contract"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                        :title="$t('ID-картаси (паспорт) маълумотлари')"
                                                                        persistent-placeholder
                                                                        rules="required"
                                                                        v-model="temp.broker.passport"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <editable-date
                                                                    :label="$t('Туғилган санаси')"
                                                                                   v-model="temp.broker.birthdate"
                                                                                   persistent-placeholder></editable-date>
                                                                </v-col>
                                                            </v-row>
                                                        </validation-observer>
                                                    </v-card-text>
                                                    <v-card-actions class="d-flex justify-content-end">
                                                        <v-btn color="primary" text @click="dialog.broker=false">
                                                            {{$t('Ёпиш')}}
                                                        </v-btn>
                                                        <v-btn color="primary" text @click="addBroker"
                                                               :loading="loading.broker">
                                                               {{$t('Сақлаш')}}
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-dialog>
                                            <div class="px-4 d-block">
                                                <v-data-table
                                                    :headers="a.headers2"
                                                    :items="app.brokers"
                                                    :items-per-page="2"
                                                    class="elevation-1"
                                                    :no-data-text="$t('Маълумот топилмади')"
                                                    :footer-props="{
                                                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                        'items-per-page-all-text': $t('Барчаси')
                                                    }"
                                                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                    <template #item.id="{ item }">
                                                        {{ app.brokers.indexOf(item) + 1 }}
                                                    </template>
                                                    <template #item.actions="{ item }">
                                                        <v-btn text @click="deleteBroker(item)">
                                                            <v-icon color="danger">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </div>
                                        </template>
                                    </v-row>
                                </ValidationObserver>
                                <div class="mt-15">
                                    <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                                        <v-col class="d-flex tab_action_buttons">
                                            <v-btn text
                                                   @click="prevStep"
                                            >
                                                {{ $t('Орқага') }}
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click="nextStep"
                                                size="large"
                                            >
                                                {{ $t('Давом этиш') }}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card
                                class="mb-15 px-10 py-10"
                            >
                              <div class="row position-absolute yoriqnoma-text"><a
                                  :href="($i18n.locale === 'ru')?'/storage/files/vio_ru.pptx' :'/storage/files/vio_uz.pptx'"> {{
                                  $t("Ариза тўлдириш бўйича йўриқмани юклаб олинг!")
                                }}
                              </a></div>
                                <ValidationObserver v-slot="{ invalid }" ref="stepValidation3">
                                    <v-row>
                                    </v-row>

                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span
                                            class="d-flex align-center justify-space-between py-0">{{
                                                $t('Ташкилотингиз доимий бир турдаги етказиб берувчилар хизматидан фойдаланадими?')
                                            }}
                                            <span class="d-flex justify-center align-center">{{$t('Йўқ')}} <v-switch hide-details
                                                                                                           inset
                                                                                                           v-model="temp.issetBranch.shipping"
                                                                                                           class="ml-6 mr-2 my-2"></v-switch> {{$t('Ҳа')}}</span>
                                        </span></div>
                                        <template v-if="temp.issetBranch.shipping">
                                            <div class="d-flex justify-end w-100 mb-2 ">
                                                <v-btn color="primary" small @click="dialog.shipping = true">
                                                    <v-icon color="white">mdi-plus</v-icon>
                                                    <span>{{ $t('Қўшиш') }}</span>
                                                </v-btn>
                                            </div>
                                            <v-dialog v-model="dialog.shipping" max-width="600">
                                                <v-card elevation="2">
                                                    <v-toolbar
                                                        color="primary" style="font-size: 20px; color: #fff;">
                                                        {{ $t('Янги етказиб берувчини қўшиш') }}
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <v-row class="px-4 pt-4">
                                                            <v-col cols="6">
                                                                <text-field
                                                                :title="$t('Ташкилот номи')"
                                                                            persistent-placeholder
                                                                            v-model="temp.shipping.org"></text-field>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <text-field
                                                                :title="$t('Ташкилот манзили')"
                                                                            v-model="temp.shipping.address"
                                                                            persistent-placeholder></text-field>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                    <v-card-actions class="d-flex justify-content-end">
                                                        <v-btn color="primary" text @click="dialog.shipping=false">
                                                            {{$t('Ёпиш')}}
                                                        </v-btn>
                                                        <v-btn color="primary" text @click="addShipping"
                                                               :loading="loading.shipping">
                                                               {{$t('Сақлаш')}}
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-dialog>
                                            <div class="px-4 d-block">
                                                <v-data-table
                                                    :headers="a.headers4"
                                                    :items="app.shippings"
                                                    :items-per-page="2"
                                                    class="elevation-1"
                                                    :no-data-text="$t('Маълумот топилмади')"
                                                    :footer-props="{
                                                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                        'items-per-page-all-text': $t('Барчаси')
                                                    }"
                                                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                    <template #item.id="{ item }">
                                                        {{ app.shippings.indexOf(item) + 1 }}
                                                    </template>
                                                    <template #item.actions="{ item }">
                                                        <v-btn text @click="deleteShipping(item)">
                                                            <v-icon color="danger">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </div>
                                        </template>
                                    </v-row>

                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span
                                            class="d-flex align-center justify-space-between py-0">{{
                                                $t('Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончаларга эгамисиз?')
                                            }}
                                            <span class="d-flex justify-center align-center">
                                                {{$t('Йўқ')}}
                                                <v-switch hide-details
                                                                                                           inset
                                                                                                           v-model="temp.issetBranch.owner"
                                                                                                           class="ml-6 mr-2 my-2"></v-switch>
                                                                                                           {{$t('Ҳа')}}
                                                                                                        </span>
                                        </span></div>
                                        <template v-if="temp.issetBranch.owner">
                                            <div class="d-flex justify-end w-100 mb-2 ">
                                                <v-btn color="primary" small @click="dialog.owner = true">
                                                    <v-icon color="white">mdi-plus</v-icon>
                                                    <span>{{ $t('Қўшиш') }}</span>
                                                </v-btn>
                                            </div>

                                            <v-dialog v-model="dialog.owner" max-width="600">
                                                <v-card elevation="2">
                                                    <v-toolbar
                                                        color="primary" style="font-size: 20px; color: #fff;">
                                                        {{ $t('Янги эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончаларни қўшиш') }}
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <validation-observer v-slot="{ invalid }"
                                                                             ref="stepValidationOwner" disabled>
                                                            <v-row class="px-4 pt-4">
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Ташкилот номи')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.owner.org"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Ташкилот СТИРи')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.owner.address"></text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </validation-observer>
                                                    </v-card-text>
                                                    <v-card-actions class="d-flex justify-content-end">
                                                        <v-btn color="primary" text @click="dialog.owner=false">
                                                            {{$t('Ёпиш')}}
                                                        </v-btn>
                                                        <v-btn color="primary" text @click="addOwner"
                                                               :loading="loading.owner">
                                                               {{$t('Сақлаш')}}
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-dialog>
                                            <div class="px-4 d-block">
                                                <v-data-table
                                                    :headers="a.headers2"
                                                    :items="app.owners"
                                                    :items-per-page="2"
                                                    class="elevation-1"
                                                    :no-data-text="$t('Маълумот топилмади')"
                                                    :footer-props="{
                                                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                        'items-per-page-all-text': $t('Барчаси')
                                                    }"
                                                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                    <template #item.id="{ item }">
                                                        {{ app.owners.indexOf(item) + 1 }}
                                                    </template>
                                                    <template #item.actions="{ item }">
                                                        <v-btn text @click="deleteOwner(item)">
                                                            <v-icon color="danger">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </div>
                                        </template>
                                    </v-row>

                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span
                                            class="d-flex align-center justify-space-between py-0">{{
                                                $t('Ижара шартномаси асосида иншоотлар, бинолар ва очиқ майдончаларга эгамисиз?')
                                            }}
                                            <span class="d-flex justify-center align-center">
                                                {{$t('Йўқ')}} <v-switch hide-details
                                                                                                           inset
                                                                                                           v-model="temp.issetBranch.flat"
                                                                                                           class="ml-6 mr-2 my-2"></v-switch>
                                                                                                           {{ $t('Ҳа') }} </span>
                                        </span></div>
                                        <template v-if="temp.issetBranch.flat">
                                            <div class="d-flex justify-end w-100 mb-2 ">
                                                <v-btn color="primary" small @click="dialog.flat = true">
                                                    <v-icon color="white">mdi-plus</v-icon>
                                                    <span>{{ $t('Қўшиш') }}</span>
                                                </v-btn>
                                            </div>

                                            <v-dialog v-model="dialog.flat" max-width="900">
                                                <v-card elevation="2">
                                                    <v-toolbar
                                                        color="primary" style="font-size: 20px; color: #fff;">
                                                        {{ $t('Янги ижара шартномаси асосида иншоотлар, бинолар ва очиқ майдончаларни қўшиш') }}
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <validation-observer v-slot="{ invalid }"
                                                                             ref="stepValidationOwner" disabled>
                                                            <v-row class="px-4 pt-4">
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Шартнома рақами')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.flat.contractNumber"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <e-arxiv-file
                                                                    :label="$t('Шартнома нусхаси')"
                                                                    v-model="temp.flat.fileId"></e-arxiv-file>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Кадастр рақами')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.flat.cadastralNumber"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Омбор манзили')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.flat.address"></text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </validation-observer>
                                                    </v-card-text>
                                                    <v-card-actions class="d-flex justify-content-end">
                                                        <v-btn color="primary" text @click="dialog.flat=false">
                                                            {{$t('Ёпиш')}}
                                                        </v-btn>
                                                        <v-btn color="primary" text @click="addFlat"
                                                               :loading="loading.flat">
                                                               {{$t('Сақлаш')}}
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-dialog>
                                            <div class="px-4 d-block">
                                                <v-data-table
                                                    :headers="a.headers3"
                                                    :items="app.flats"
                                                    :items-per-page="2"
                                                    class="elevation-1"
                                                    :no-data-text="$t('Маълумот топилмади')"
                                                    :footer-props="{
                                                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                        'items-per-page-all-text': $t('Барчаси')
                                                    }"
                                                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                    <template #item.id="{ item }">
                                                        {{ app.flats.indexOf(item) + 1 }}
                                                    </template>
                                                    <template #item.actions="{ item }">
                                                        <v-btn text @click="deleteFlat(item)">
                                                            <v-icon color="danger">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </div>
                                        </template>
                                    </v-row>
                                    <v-row class="mt-10 outlined-row">
                                        <div class="row-title"><span
                                            class="d-flex align-center justify-space-between py-0">{{
                                                $t('Ўқув курслари ўқиб тугатганлиги тўғрисидаги сертификатларга эгамисиз?')
                                            }}
                                            <span class="d-flex justify-center align-center">{{$t('Йўқ')}} <v-switch hide-details
                                                                                                           inset
                                                                                                           v-model="temp.issetBranch.course"
                                                                                                           class="ml-6 mr-2 my-2"></v-switch> {{$t('Ҳа')}}</span>
                                        </span></div>
                                        <template v-if="temp.issetBranch.course">
                                            <div class="d-flex justify-end w-100 mb-2 ">
                                                <v-btn color="primary" small @click="dialog.course = true">
                                                    <v-icon color="white">mdi-plus</v-icon>
                                                    <span>{{ $t('Қўшиш') }}</span>
                                                </v-btn>
                                            </div>

                                            <v-dialog v-model="dialog.course" max-width="900">
                                                <v-card elevation="2">
                                                    <v-toolbar
                                                        color="primary" style="font-size: 20px; color: #fff;">
                                                        {{ $t('Янги сертификат қўшиш') }}
                                                    </v-toolbar>
                                                    <v-card-text>
                                                        <validation-observer v-slot="{ invalid }"
                                                                             ref="stepValidationSertifikat" disabled>
                                                            <v-row class="px-4 pt-4">
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Сертификат рақами')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.course.contractNumber"></text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <e-arxiv-file
                                                                    :label="$t('Сертификат нусхаси')"
                                                                    v-model="temp.course.fileId"></e-arxiv-file>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <editable-date
                                                                    :title="$t('Сертификат санаси')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.course.cadastralNumber"></editable-date>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <text-field
                                                                    :title="$t('Сертификат номи')"
                                                                                persistent-placeholder
                                                                                rules="required"
                                                                                v-model="temp.course.address"></text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </validation-observer>
                                                    </v-card-text>
                                                    <v-card-actions class="d-flex justify-content-end">
                                                        <v-btn color="primary" text @click="dialog.course=false">
                                                            {{$t('Ёпиш')}}
                                                        </v-btn>
                                                        <v-btn color="primary" text @click="addCourse"
                                                               :loading="loading.course">
                                                               {{$t('Сақлаш')}}
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-dialog>
                                            <div class="px-4 d-block">
                                                <v-data-table
                                                    :headers="a.headers5"
                                                    :items="app.courses"
                                                    :items-per-page="2"
                                                    class="elevation-1"
                                                    :no-data-text="$t('Маълумот топилмади')"
                                                    :footer-props="{
                                                        'items-per-page-text': $t('Сахифадаги элементлар сони'),
                                                        'items-per-page-all-text': $t('Барчаси')
                                                    }"
                                                    :loading-text="$t('Юкланмоқда... Илтимос кутиб туринг')">
                                                    <template #item.id="{ item }">
                                                        {{ app.courses.indexOf(item) + 1 }}
                                                    </template>
                                                    <template #item.actions="{ item }">
                                                        <v-btn text @click="deleteCourse(item)">
                                                            <v-icon color="danger">mdi-delete</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-data-table>
                                            </div>
                                        </template>
                                    </v-row>

                                </ValidationObserver>
                                <div class="mt-10">
                                    <v-row class="row mt-3 mb-3 position-absolute bottom-0 end-0">
                                        <v-col class="d-flex tab_action_buttons">
                                            <v-btn text
                                                   @click="prevStep"
                                            >
                                                {{ $t('Орқага') }}
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click="nextStep"
                                                size="large"
                                            >
                                                {{ $t('Давом этиш') }}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-container>
        </div>

        <a class="all_news service" target="_blank" href="https://t.me/dastlabkiqaror">
            <img src="/public/images/telegram.png">


            <p> {{ $t('Саволларингизни йўлланг') }}
                <br>
                @dastlabkiqaror
            </p></a>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import Myfield from "../../../../components/form/myfield";
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';
//
import i18n from "../../../../i18n";
import TextField from "../../../../components/form/textfield";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import DialogChips from "../../../../components/form/dialog-chips";
import Textfield from "../../../../components/form/textfield";
import EditableDate from "../../../../components/custom/EditableDate";


export default {
    name: "VioCreate",
    data() {
        return {
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Хизматлар'),
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Ваколатли иқтисодий оператор реестрига кириш учун ариза топшириш'),
                    to: '/services/vio',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Ариза юбориш'),
                    to: '/services/vio/create',
                    disabled: true,
                    exact: true,
                },
            ],
            app: {
                id: null,
                phone: null,
                email: null,
                address: null,
                type: null,
                way: null,
                faoliyat: null,
                chief: {
                    fio: null,
                    passport: null,
                    birthdate: null,
                    pin: null,
                },
                accountant: {
                    fio: null,
                    passport: null,
                    birthdate: null,
                    pin: null,
                },
                founders: [],
                authPersons: [],
                brokers: [],
                shippings: [],
                owners: [],
                courses: [],
                flats: [],
                branches: []
            },
            a: {
                headers: [
                    {text: this.$t('№'), value: 'id'},
                    {text: this.$t('Ф.И.О'), value: 'fio'},
                    {text: this.$t('ID-картаси (паспорт) маълумотлари'), value: 'passport', sortable: false},
                    {text: this.$t('Туғилган санаси'), value: 'birthdate', sortable: false},
                    {text: '', value: 'actions', sortable: false, width: 100},
                ],
                headers2: [
                    {text: this.$t('№'), value: 'id'},
                    {text: this.$t('Ташкилот номи'), value: 'org'},
                    {text: this.$t('Ташкилот СТИРИ'), value: 'tin', sortable: false},
                    {text: this.$t('Шартнома рақами'), value: 'contract', sortable: false},
                    {text: this.$t('Ф.И.О'), value: 'fio', sortable: false},
                    {text: this.$t('ID-карта (паспорт) маълумотлари'), value: 'passport', sortable: false},
                    {text: this.$t('Туғилган санаси'), value: 'birthdate', sortable: false},
                    {text: '', value: 'actions', sortable: false, width: 100},
                ],
                headers3: [
                    {text: this.$t('№'), value: 'id'},
                    {text: this.$t('Шартнома рақами'), value: 'contractNumber'},
                    {text: this.$t('Кадастр рақами'), value: 'cadastralNumber', sortable: false},
                    {text: this.$t('Омбор манзили'), value: 'address', sortable: false},
                    {text: '', value: 'actions', sortable: false, width: 100},
                ],

                headers4: [
                    {text: this.$t('№'), value: 'id'},
                    {text: this.$t('Ташкилот номи'), value: 'org'},
                    {text: this.$t('Ташкилот манзили'), value: 'address', sortable: false},
                    {text: '', value: 'actions', sortable: false, width: 100},
                ],

                headers5: [
                    {text: this.$t('№'), value: 'id'},
                    {text: this.$t('Сертификат рақами'), value: 'contractNumber'},
                    {text: this.$t('Сертификат санаси'), value: 'cadastralNumber', sortable: false},
                    {text: this.$t('Сертификат номи'), value: 'address', sortable: false},
                    {text: '', value: 'actions', sortable: false, width: 100},
                ],
                person: {
                    personType: 1, /// 1- fiz 0- yur
                    firstName: "",
                    surName: "",
                    lastName: "",
                    perAdr: "",
                    pin: null,
                    tin: null,
                    legalName: "Жисмоний шахс",
                    phone: '-',
                    email: '-',
                },
            },
            stepper: 1,
            completedSteps: [],
            temp: {
                issetBranch: {
                    broker: false,
                    shipping: false,
                    owner: false,
                    course: false,
                    flat: false,

                },
                founder: {
                    passport: null,
                    fio: null,
                    birthdate: null,
                    pin: null,
                },
                authPerson: {
                    passport: null,
                    fio: null,
                    birthdate: null,
                    pin: null,
                },
                shipping: {
                    org: null,
                    address: null
                },
                owner: {
                    org: null,
                    address: null
                },
                broker: {
                    org: null,
                    tin: null,
                    contract: null,
                    passport: null,
                    fio: null,
                    birthdate: null,
                    pin: null,
                },
                flat: {
                    contractNumber: null,
                    fileId: [],
                    cadastralNumber: null,
                    address: null
                },
                course: {
                    contractNumber: null,
                    fileId: [],
                    cadastralNumber: null,
                    address: null
                },
                branch: {
                    inn: null,
                    name: null,
                    address: null,
                }
            },
            list: {
                types: [
                    {value: 1, text: i18n.t('Божхона масалалари бўйича ваколатли иқтисодий оператор')},
                    {value: 2, text: i18n.t('Хавфсизлик масалалари бўйича ваколатли иқтисодий оператор')},
                    {value: 3, text: i18n.t('Божхона ва хавфсизлик масалалари бўйича ваколатли иқтисодий оператор')},
                ],
                ways: [
                    {value: 11, text: i18n.t('Божхона брокери')},
                    {value: 22, text: i18n.t('Божхона омбори эгаси')},
                    {value: 33, text: i18n.t('Ташувчи сифатида')},
                    {value: 44, text: i18n.t('Товарлар импорт ва (ёки) экспортини амалга ошириш')},
                ]
            },
            loading: {
                yuborishLoading: false,
                founder: false,
                accountant: false,
                broker: false,
                shipping: false,
                owner: false,
                flat: false,
                authPerson: false,
            },
            dialog: {
                founder: false,
                broker: false,
                shipping: false,
                owner: false,
                course: false,
                flat: false,
                authPerson: false
            }
        }

    },
    created() {
        this.getPersonId()
    },
    methods: {
        deleteOwner(item) {
            if (this.app.owners.indexOf(item) !== -1) {
                this.app.owners.splice(this.app.owners.indexOf(item), 1)
                this.$toast.success(i18n.t("Муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Элемент топилмади"))
        },
        deleteFlat(item) {
            if (this.app.flats.indexOf(item) !== -1) {
                this.app.flats.splice(this.app.flats.indexOf(item), 1)
                this.$toast.success(i18n.t("Муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Элемент топилмади"))
        },
        deleteCourse(item) {
            if (this.app.courses.indexOf(item) !== -1) {
                this.app.courses.splice(this.app.courses.indexOf(item), 1)
                this.$toast.success(i18n.t("Муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Элемент топилмади"))
        },
        deleteFounder(item) {
            if (this.app.founders.indexOf(item) !== -1) {
                this.app.founders.splice(this.app.founders.indexOf(item), 1)
                this.$toast.success(i18n.t("Таъсисчи муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Таъсисчи топилмади"))
        },
        deleteAuthPerson(item) {
            if (this.app.authPersons.indexOf(item) !== -1) {
                this.app.authPersons.splice(this.app.authPersons.indexOf(item), 1)
                this.$toast.success(i18n.t("Ваколатли шахс муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Ваколатли шахс топилмади"))
        },
        deleteBroker(item) {
            if (this.app.brokers.indexOf(item) !== -1) {
                this.app.brokers.splice(this.app.brokers.indexOf(item), 1)
                this.$toast.success(i18n.t("Брокер муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Брокер топилмади"))
        },
        deleteShipping(item) {
            if (this.app.shippings.indexOf(item) !== -1) {
                this.app.shippings.splice(this.app.shippings.indexOf(item), 1)
                this.$toast.success(i18n.t("Етказиб берувчи муваффаққиятли ўчирилди"))
            } else this.$toast.error(i18n.t("Етказиб берувчи топилмади"))
        },
        async addFounder() {
            this.loading.founder = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData', {
                params: {
                    pasnum: _this.temp.founder.passport,
                    pasdata: _this.temp.founder.birthdate,
                }
            }).then(function (response) {
                _this.loading.founder = false;
                if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.dialog.founder = false
                    _this.temp.founder.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.temp.founder.pin = response.data.data.pinpp
                    _this.app.founders.push(JSON.parse(JSON.stringify(_this.temp.founder)))
                    Object.keys(_this.temp.founder).forEach((propertyItemKey) => {
                        _this.temp.founder[propertyItemKey] = null
                    })
                    _this.$toast.success('Таъсисчи омадли тарзда қўшилди')

                } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
            }).catch((error) => {
                console.log(error)
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"));
                this.loading.founder = false;
            })
            this.loading.founder = false;
        },
        async addShipping() {
            this.loading.shipping = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

            if (_this.temp.shipping.org && _this.temp.shipping.address) {
                _this.app.shippings.push(JSON.parse(JSON.stringify(_this.temp.shipping)))
                Object.keys(_this.temp.shipping).forEach((propertyItemKey) => {
                    _this.temp.shipping[propertyItemKey] = null
                })
                _this.dialog.shipping = false
                this.loading.shipping = false
                _this.$toast.success(i18n.t("Етказиб берувчи омадли тарзда қўшилди"))

            } else {
                this.loading.shipping = false
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киритинг"))
            }

        },
        async addOwner() {
            this.loading.owner = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

            if (_this.temp.owner.org && _this.temp.owner.address) {
                _this.app.owners.push(JSON.parse(JSON.stringify(_this.temp.owner)))
                Object.keys(_this.temp.owner).forEach((propertyItemKey) => {
                    _this.temp.owner[propertyItemKey] = null
                })
                _this.dialog.owner = false
                _this.loading.owner = false
                _this.$toast.success(i18n.t("Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди"))

            } else {
                _this.loading.owner = false
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киритинг"))
            }

        },
        async addFlat() {
            this.loading.flat = true
            const _this = this;
            if (_this.temp.flat.contractNumber && _this.temp.flat.address) {
                _this.app.flats.push(JSON.parse(JSON.stringify(_this.temp.flat)))
                Object.keys(_this.temp.flat).forEach((propertyItemKey) => {
                    _this.temp.flat[propertyItemKey] = null
                })
                _this.dialog.flat = false
                _this.loading.flat = false
                _this.$toast.success(i18n.t("Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди"))

            } else {
                _this.loading.flat = false
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киритинг"))
            }

        },
        async addCourse() {
            this.loading.course = true
            const _this = this;
            if (_this.temp.course.contractNumber && _this.temp.course.address) {
                _this.app.courses.push(JSON.parse(JSON.stringify(_this.temp.course)))
                Object.keys(_this.temp.course).forEach((propertyItemKey) => {
                    _this.temp.course[propertyItemKey] = null
                })
                _this.dialog.course = false
                _this.loading.course = false
                _this.$toast.success(i18n.t("Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди"))

            } else {
                _this.loading.course = false
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киритинг"))
            }

        },
        async addAuthPerson() {
            this.loading.authPerson = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData', {
                params: {
                    pasnum: _this.temp.authPerson.passport,
                    pasdata: _this.temp.authPerson.birthdate,
                }
            }).then(function (response) {
                _this.loading.authPerson = false;
                if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.dialog.authPerson = false
                    _this.temp.authPerson.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.temp.authPerson.pin = response.data.data.pinpp
                    _this.app.authPersons.push(JSON.parse(JSON.stringify(_this.temp.authPerson)))
                    Object.keys(_this.temp.authPerson).forEach((propertyItemKey) => {
                        _this.temp.authPerson[propertyItemKey] = null
                    })
                    _this.$toast.success(i18n.t("Ваколатли шахс омадли тарзда қўшилди"))

                } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
            }).catch((error) => {
                console.log(error)
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"));
                this.loading.authPerson = false;
            })
            this.loading.authPerson = false;
        },
        async addBroker() {
            this.loading.broker = true
            const _this = this;
            const isValid = await this.$refs.stepValidationBroker.validate()
            if (isValid) {
                await axios.get('/api/v1/ex_api/getPData', {
                    params: {
                        pasnum: _this.temp.broker.passport,
                        pasdata: _this.temp.broker.birthdate,
                    }
                }).then(function (response) {
                    _this.loading.broker = false;
                    if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                        _this.dialog.broker = false
                        _this.temp.broker.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                        _this.temp.broker.pin = response.data.data.pinpp
                        _this.app.brokers.push(JSON.parse(JSON.stringify(_this.temp.broker)))
                        Object.keys(_this.temp.broker).forEach((propertyItemKey) => {
                            _this.temp.broker[propertyItemKey] = null
                        })
                        _this.$toast.success(i18n.t("Ваколатли шахс омадли тарзда қўшилди"))

                    } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
                }).catch((error) => {
                    console.log(error)
                    _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг."));
                    this.loading.broker = false;
                })
            } else _this.$toast.error(i18n.t("Маълумотларни тўлдириб қайтадан юборинг"))
            this.loading.broker = false;
        },
        async addAccountant() {
            this.loading.accountant = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData', {
                params: {
                    pasnum: _this.app.accountant.passport,
                    pasdata: _this.app.accountant.birthdate,
                }
            }).then(function (response) {
                _this.loading.accountant = false;
                if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.app.accountant.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.app.accountant.pin = response.data.data.pinpp
                    _this.$toast.success(i18n.t("Бухгалтер омадли тарзда қўшилди"))

                } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
            }).catch((error) => {
                console.log(error)
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг."));
                this.loading.accountant = false;
            })
            this.loading.accountant = false;
        },
        async getPasportData() {
            this.loading.yuborishLoading = true
            const _this = this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData', {
                params: {
                    pasnum: _this.app.chief.passport,
                    pasdata: _this.app.chief.birthdate,
                }
            }).then(function (response) {
                _this.loading.yuborishLoading = false;
                if (typeof response.data.data.birth_date !== 'undefined') {
                    _this.app.chief.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.app.chief.pin = response.data.data.pinpp
                } else _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг"))
            }).catch(() => {
                _this.$toast.error(i18n.t("Маълумотларни текшириб қайтадан киринг."));
                this.loading.yuborishLoading = false;
            })
            this.loading.yuborishLoading = false;
        },
        async getPersonId() {
            const _this = this
            try {
                this.a.person.firstName = this.$auth.user().first_name
                this.a.person.surName = this.$auth.user().mid_name
                this.a.person.lastName = this.$auth.user().sur_name
                this.a.person.phone = this.$auth.user().phone
                this.a.person.email = this.$auth.user().email
                this.a.person.pin = this.$auth.user().pin
                this.a.person.tin = this.$auth.user().tin
                this.a.person.perAdr = this.$auth.user().per_adr
                if (this.$auth.user().type !== 1) {
                    this.a.person.personType = 0
                    let legal_info = JSON.parse(this.$auth.user().legal_info)
                    if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
                        this.a.person.legalName = legal_info[0].le_name
                    } else this.a.person.legalName = "";
                }
                await this.$auth.plugins.http.post('/api/v1/ex_api/vio-person', this.a.person).then(function (res) {
                    if (res.status === 200) {
                        _this.app.id = res.data.data.id
                    } else {
                        _this.$toast.error(i18n.t("Сервер билан алоқа йўқ!"))
                    }
                })
            } catch (error) {
                _this.$toast.error(i18n.t("Сервер билан алоқа йўқ!"))
                console.log(error)
            }
        },
        async nextStep() {
            let isValid = false;
            const _this = this;
            switch (this.stepper) {
                case 1:
                    //console.log(!this.validateField("create_customs_person_value"))
                    isValid = await _this.$refs.stepValidation1.validate()
                    if (isValid) {
                        const requestData = {
                            id: _this.app.id,
                            step: 1,
                            s10AppsDTO1: {
                                pin: _this.$auth.user().pin,
                                phone: _this.$auth.user().phone,
                                tin: _this.$auth.user().tin,
                                legalName: _this.a.person.legalName,
                                legalAddress: _this.$auth.user().per_adr,
                                legalEmail: _this.$auth.user().email,
                                vioType: _this.app.type, /* 1-1tur; 2-2tur, 3-3tur, 4-1va2tur */
                                lineOfWork: _this.app.way,  // /** yonalish */
                                workAbout: _this.app.faoliyat
                            },
                            personDTO1: [
                                {
                                    legalName: "",
                                    legalAddress: "",
                                    tin: "",
                                    contractNum: "",
                                    fullName: _this.app.chief.fio,
                                    passport: _this.app.chief.passport,
                                    birthDate: _this.app.chief.birthdate,
                                    personType: 0
                                },
                            ],


                        }
                        // requestData.push
                        if (_this.app.founders && _this.app.founders.length > 0) _this.app.founders.forEach((founderItem) => {
                            requestData.personDTO1.push({
                                legalName: "",
                                legalAddress: "",
                                tin: "",
                                contractNum: "",
                                fullName: founderItem.fio,
                                passport: founderItem.passport,
                                birthDate: founderItem.birthdate,
                                personType: 1
                            })
                        })
                        _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', requestData).then((res) => {
                            if (res.status === 200) {
                                _this.stepper++
                                _this.completedSteps.push(1)
                            } else {
                                _this.$toast.error(i18n.t("Хатолик юз берди. Қайта уриниб кўринг!"))
                            }
                        }).catch((error) => {
                            _this.$toast.error(i18n.t("Хатолик юз берди. Қайта уриниб кўринг!"))
                            console.log(error)
                        })
                    }
                    break;


                case 2:
                    isValid = await _this.$refs.stepValidation2.validate()
                    if (isValid) {
                        const requestData = {
                            id: _this.app.id,
                            step: 2,
                            personDTO1: [{
                                legalName: "",
                                legalAddress: "",
                                tin: "",
                                contractNum: "",
                                fullName: _this.app.accountant.fio,
                                passport: _this.app.accountant.passport,
                                birthDate: _this.app.accountant.birthdate,
                                personType: 2
                            }]
                        }
                        // requestData.push
                        if (_this.app.authPersons && _this.app.authPersons.length > 0) _this.app.authPersons.forEach((item) => {
                            requestData.personDTO1.push({
                                legalName: "",
                                legalAddress: "",
                                tin: "",
                                contractNum: "",
                                fullName: item.fio,
                                passport: item.passport,
                                birthDate: item.birthdate,
                                personType: 3
                            })
                        })
                        if (_this.app.brokers && _this.app.brokers.length > 0) _this.app.brokers.forEach((item) => {
                            requestData.personDTO1.push({
                                legalName: item.org,
                                legalAddress: "",
                                tin: item.tin,
                                contractNum: item.contract,
                                fullName: item.fio,
                                passport: item.passport,
                                birthDate: item.birthdate,
                                personType: 4
                            })
                        })
                        _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', requestData).then((res) => {
                            if (res.status === 200) {
                                _this.stepper++
                                _this.completedSteps.push(2)
                            } else {
                                _this.$toast.error(i18n.t("Хатолик юз берди. Қайта уриниб кўринг"))
                            }
                        }).catch((error) => {
                            _this.$toast.error(i18n.t("Хатолик юз берди. Қайта уриниб кўринг!"))
                            console.log(error)
                        })
                    }
                    break;

                case 3:
                        const requestData = {
                            id: _this.app.id,
                            step: 3,
                            personDTO1: [],
                            earxivDTO1: []
                        }
                        // requestData.push
                        if (_this.app.owners && _this.app.owners.length > 0) _this.app.owners.forEach((item) => {
                            requestData.personDTO1.push({
                                legalName: item.org,
                                legalAddress: item.address,
                                tin: "",
                                contractNum: "",
                                fullName: "",
                                passport: "",
                                birthDate: "",
                                personType: 6
                            })
                        })
                        if (_this.app.shippings && _this.app.shippings.length > 0) _this.app.shippings.forEach((item) => {
                            requestData.personDTO1.push({
                                legalName: item.org,
                                legalAddress: item.address,
                                tin: "",
                                contractNum: "",
                                fullName: "",
                                passport: "",
                                birthDate: "",
                                personType: 5
                            })
                        })
                        if (_this.app.flats && _this.app.flats.length > 0) _this.app.flats.forEach((item) => {
                            requestData.earxivDTO1.push({
                                contractNumber: item.contractNumber,
                                fileId: (item.fileId && item.fileId.length > 0 && item.fileId[0].id) ? item.fileId[0].id : null,
                                cadastralNumber: item.cadastralNumber,
                                depotAddress: item.address,
                                docType: "1"
                            })
                        })
                        if (_this.app.courses && _this.app.courses.length > 0) _this.app.courses.forEach((item) => {
                            requestData.earxivDTO1.push({
                                contractNumber: item.contractNumber,
                                fileId: (item.fileId && item.fileId.length > 0 && item.fileId[0].id) ? item.fileId[0].id : null,
                                cadastralNumber: item.cadastralNumber,
                                depotAddress: item.address,
                                docType: "2"
                            })
                        })
                        _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', requestData).then((res) => {
                            if (res.status === 200) {
                                _this.$toast.success(i18n.t("Аризангиз қабул қилинди!"))
                                setTimeout(() => {
                                    _this.$router.push("/services/vio/" + _this.app.id)

                                }, 500)

                            } else {
                                _this.$toast.error(i18n.t("Хатолик юз берди. Қайта уриниб кўринг"))
                            }
                        }).catch((error) => {
                            _this.$toast.error(i18n.$t("Хатолик юз берди. Қайта уриниб кўринг!"))
                            console.log(error)
                        })

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
    },
    components: {
        EditableDate,
        Textfield,
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
<style lang="scss">
.yoriqnoma-text {
    right: 40px;
    font-weight: bold;
}

.outlined-row {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-bottom: 20px;

    .row-title {
        width: 100%;
        padding: 10px 20px;

        > span {
            padding: 10px 0;
            width: 100%;
            display: block;
            text-transform: uppercase;
            font-weight: bolder;
            border-bottom: 1px solid #ccc;
        }
    }

    .field {
        display: flex;
        align-items: start;
    }

}

.vio_card {
    padding: 10px 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-bottom: 0;

    .vio_card_title {
        padding: 10px 0 10px;
        border-bottom: 1px solid #ccc;
        text-transform: uppercase;
        font-weight: 600;
    }

    .field {
        display: flex;
        align-items: start;
        margin: 40px 0;
    }

}

.v-text-field.v-input--dense .v-label {
    top: 5px;
    background-color: #fff;
    width: max-content;
}

</style>
