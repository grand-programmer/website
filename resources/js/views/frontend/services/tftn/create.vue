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
                            {{ $t('ТИФ ТН кодини аниқлаш юзасидан дастлабки қарор олиш') }}
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
                            {{ $t('Аризачи тўғрисида маълумотлар') }}
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="2"
                            :complete="isCompleted(2)"
                            @click="goStep(2)"
                        >
                            {{ $t('Товар тўғрисида маълумотлар') }}
                        </v-stepper-step>

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                                class="mb-12"
                            >
                                <div class="row position-absolute yoriqnoma-text"><a
                                    :href="($i18n.locale === 'ru')?'/storage/files/tftn_ru.pptx':'/storage/files/tftn_uz.pptx'"> {{
                                        $t('Ариза тўлдириш бўйича йўриқмани юклаб олинг')
                                    }}
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
                                                {{ $t('Жисмоний шахс') }}
                                            </v-btn>
                                            <v-btn color="primary" v-if="person.type===0">
                                                {{ $t('Юридик шахс') }}
                                            </v-btn>
                                            <!--

                                                                                        </v-btn-toggle>-->

                                        </v-col>
                                    </v-row>
                                    <v-row class="person_data">
                                        <v-col cols="6" v-if="person.type===1">
                                            <ValidationProvider :name="$t('ЖШШИР')" rules="required|digits:14"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.pin"
                                                    :counter="14"
                                                    :label="$t('ЖШШИР')"
                                                    required
                                                    disabled
                                                    type="number"
                                                    persistent-hint
                                                    :hint="$t('ЖШШИР - жисмоний шахснинг шахсий идентификацион рақами')"
                                                >
                                                    <template v-slot:label>{{ $t('ЖШШИР') }} <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </v-col>
                                        <v-col cols="6" v-else>
                                            <ValidationProvider :name="$t('Ташкилот номи')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.organization_name"
                                                    :counter="200"
                                                    :label="$t('Ташкилот номи')"
                                                    required
                                                    :hint="$t('Юридик шахснинг тўлиқ номи')"
                                                    persistent-placeholder
                                                    :error-messages="errors[0]"
                                                >
                                                    <template v-slot:label>{{ $t('Ташкилот номи') }} <sup>*</sup></template>

                                                </v-text-field>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('СТИР')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.tin"
                                                    :counter="9"
                                                    :label="$t('СТИР')"
                                                    type="number"
                                                    required
                                                    :disabled="(person.tin!==null && (person.tin).toString().length===9)"
                                                    :hint="$t('Солиқ тўловчининг идентификацион рақами')"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>{{ $t('СТИР') }} <sup>*</sup></template>

                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>

                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Фамилияси исми шарифи')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.fio"
                                                    :counter="200"
                                                    :label="$t('Фамилияси исми шарифи')"
                                                    required
                                                    disabled
                                                    :hint="$t('Аризачининг фамилияси, исми, шарифи')"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>{{ $t('Фамилияси исми шарифи') }} <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>


                                        <v-col cols="6" v-if="person.type==='01'">
                                            <ValidationProvider :slim="(person.type!=='01')" v-if="person.type==='02'"
                                                                :name="$t('Лавозими')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.position"
                                                    :counter="200"
                                                    required
                                                    :hint="$t('Аризачининг ташкилотдаги лавозими')"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>{{ $t('Лавозими') }} <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Манзили')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.perAdr"
                                                    :counter="200"
                                                    required
                                                    :hint="person.type===1?$t('Аризачининг манзили'):$t('Юридик шахснинг манзили')"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>{{ $t('Манзили') }} <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Ҳудуд')"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    v-model="person.region"
                                                    required
                                                    :hint="$t('Ҳудудий божхона бошқармаси жойлашган ҳудуд')"
                                                    :items="regions"
                                                    persistent-hint
                                                >
                                                    <template v-slot:label>{{ $t('Ҳудудни танланг') }} <sup>*</sup></template>
                                                </v-autocomplete>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Пост')"
                                                                v-slot="{ errors }">
                                                <v-autocomplete
                                                    v-model="person.post"
                                                    :loading="postloading"
                                                    required
                                                    :disabled="postloading"
                                                    :hint="$t('Божхона постини танланг')"
                                                    :items="posts"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>{{ $t('Божхона постини танланг') }} <sup>*</sup>
                                                    </template>
                                                </v-autocomplete>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Телефон рақами')" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.phone"
                                                    :label="$t('Телефон рақами')"
                                                    required
                                                    v-mask="'+998 ## ### ## ##'"
                                                    :hint="$t('Аризачининг телефон рақами')"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>{{ $t('Телефон рақами') }} <sup>*</sup></template>
                                                </v-text-field>
                                                <span class="red--text">{{ errors[0] }}</span>
                                            </ValidationProvider>

                                        </v-col>
                                        <v-col cols="6">
                                            <ValidationProvider :name="$t('Электрон почта')" rules="required|email"
                                                                v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="person.email"
                                                    :counter="200"
                                                    :label="$t('Электрон почта манзили')"
                                                    required
                                                    :hint="$t('Аризачининг электрон почтаси')"
                                                    persistent-placeholder
                                                >
                                                    <template v-slot:label>{{ $t('Электрон почта манзили') }} <sup>*</sup>
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
                                            {{ $t('Орқага') }}
                                        </v-btn>
                                        <v-btn
                                            color="primary"
                                            @click="nextStep"
                                            size="large"
                                            :loading="loadingButton.first"
                                        >
                                            {{ $t('Давом этиш') }}
                                        </v-btn>


                                    </v-col>
                                </v-row>
                                <v-row class="bottom-required-info">
                                    <i style="font-size: 12px;"><sub
                                        style="font-size: 20px">*</sub> {{ $t('-майдонлари албатта тўлдирилиши шарт!') }}
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
                                    <button class="nav-link create" @click="AddProduct">{{ $t('Қўшиш') }}
                                        <v-icon>mdi-plus-circle-outline</v-icon>
                                    </button>
                                    <button class="nav-link"
                                            :class="application.tovarlar[key].id===tovarIndex?'active':''"
                                            :id="'v-pills-profile-tab' + tovar.id"
                                            :data-id="tovar.id" data-bs-toggle="pill"
                                            @click="selectTabTovar(tovar.id)"
                                            :data-bs-target="'#v-pills-profile'+ tovar.id" type="button" role="tab"
                                            :aria-controls="'#v-pills-profile'+ tovar.id" aria-selected="true"
                                            v-for="(tovar,key) in application.tovarlar">{{ $t('Товар') }}
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
                                            <h3 class="primary-color">{{ $t('Товар тўғрисидаги маълумотлар') }}</h3>
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
                                                                    :name="$t('Товарнинг тижорат номи')"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        :label="$t('Товарнинг тижорат номи *')"
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
                                                                    :name="$t('Товар маркаси')"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        :label="$t('Товар маркаси **')"
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
                                                                    :name="$t('Товар модели')"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        :label="$t('Товар модели **')"
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
                                                                        <v-switch v-model="application.tovarlar[key].issetNamuna"
                                                                                  :label="application.tovarlar[key].issetNamuna?$t('Намуна мавжуд'):$t('Намуна мавжуд эмас')">

                                                                        </v-switch>
                                                                    </v-col>
                                                                    <v-col cols="4" v-show="application.tovarlar[key].issetNamuna">
                                                                        <ValidationProvider
                                                                            :name="$t('Намуналар сони')"
                                                                            v-slot="{ errors }">
                                                                            <v-text-field
                                                                                :label="$t('Намуналар сони *')"
                                                                                persistent-placeholder
                                                                                name="namunasoni"
                                                                                v-mask="'############'"
                                                                                v-model="application.tovarlar[key].namunasoni"
                                                                            >

                                                                            </v-text-field>
                                                                            <span class="red--text">{{
                                                                                    errors[0]
                                                                                }}</span>
                                                                        </ValidationProvider>

                                                                    </v-col>
                                                                    <v-col cols="4" v-show="application.tovarlar[key].issetNamuna">
                                                                        <ValidationProvider
                                                                            :name="$t('Ўлчов бирлиги')"
                                                                            v-slot="{ errors }">
                                                                            <v-autocomplete :label="$t('Ўлчов бирлиги *')"
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
                                                            </v-col>
                                                            <v-col cols="6" class="position-relative">
                                                                <e-arxiv-file
                                                                    multiple
                                                                    :errors="application.tovarlar[key].ilova_error"
                                                                    v-model="application.tovarlar[key].docs"
                                                                />

                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    :name="$t('Қўшимча маълумотлар ва изоҳлар')"
                                                                    v-slot="{ errors }">
                                                                    <v-textarea
                                                                        :label="$t('Товарнинг характеристикасини билдирувчи барча маълумотлар')"
                                                                        rows="4"
                                                                        filled
                                                                        :hint="$t('Товарнинг характеристикасини билдирувчи барча маълумотларни кўрсатинг')"
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
                                                style="font-size: 20px">*</sub> {{ $t('-майдонлари албатта тўлдирилиши шарт!') }}
                                                </i>

                                                <i style="font-size: 12px;"><sub
                                                    style="font-size: 20px">**</sub> {{$t('- майдонлари агар маълумот мавжуд бўлса албатта тўлдирилиши шарт!')}}
                                                </i>
                                            </v-row>
                                            <v-row class="row mb-3 position-absolute bottom-0 end-0">
                                                <v-col class="order-2 p-2 bd-highlight">
                                                    <v-btn text
                                                           @click="prevStep"
                                                    >
                                                        {{ $t('Орқага') }}
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="nextStep"
                                                        size="large"
                                                        style="width: max-content"
                                                        :loading="loadingButton.second"
                                                    >
                                                        {{ $t('Ариза юбориш') }}
                                                    </v-btn>

<v-dialog max-width="600" v-model="dialogAgree" >
    <v-card class="rozilik">
        <v-card-text>
            <p >{{$t('Дастлабки қарор, сиз тақдим қилган маълумот ва материаллар асосида шаклланади. Божхона расмийлаштирув жараёнида товар ва мазкур дастлабки қарор маълумотлари орасида тафовут мавжуд бўлса, дастлабки қарор ушбу товар учун юридик кучга эмас ҳисобланади.')}}</p>
<p>{{$t('Ўзбекистон Республикаси Вазирлар Маҳкамасининг 700-сон қарорига мувофиқ товарни таснифланиши бўйича дастлабки қарор қабул қилиниши учун 1 товар номланишига БҲМнинг 75 фоизи миқдорида йиғим белгиланган.')}}</p>
            <p>{{$t('Мен, юқорида кўрсатиб ўтилган шартларни қабул қиламан')}}</p>
        </v-card-text>
        <v-card-actions class="d-flex justify-content-end">
            <btn text color="primary" @click="dialogAgree=false" class="mr-4 cursor-pointer">{{ $t('Бекор қилиш') }}</btn>
            <v-btn color="primary" @click="agreed=true; dialogAgree=false" >
                {{ $t('Розиман') }}
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
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
        <a class="all_news service" target="_blank" href="https://t.me/HsCodeDecisions">
            <img src="/public/images/telegram.png">


            <p> {{ $t('Саволларингизни йўлланг') }}
                <br>
                @HsCodeDecisions
            </p></a>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';

import i18n from "../../../../i18n";
import EArxivFile from "../../../../components/form/e-arxiv-file";


export default {
    name: "InitialTftn",
    data() {
        return {
            stepper: 1,
            index: [],
            regions: [],
            posts: [],
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
                    text: i18n.t('Товарларнинг ТИФ ТН коди бўйича дастлабки қарор олиш'),
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
                        issetNamuna:false,
                    },

                ],
                documents: []


            },
            documents: [],
            person: {
                type: 1, /// 1- fiz 0- yur
                fio: "",
                post:null,
                pin: null,
                tin: null,
                organization_name: i18n.t("Жисмоний шахс"),
                position: "0",
                phone: null,
                email: null,
                region: null,
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
                issetNamuna:false,
            },
            commodity: [],
            dialogAgree:false,
            app: {
                apps: [],
                docs: [],
                commodities: [],
                id:null,
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
            postloading: false,
            noRequiredTab: false,
            agreed:false,

            fields: [
                {key: 'tradeName', value: i18n.t('Товарнинг тижорат номи')},
                {key: 'tradeMark', value: i18n.t('Товар маркаси')},
                {key: 'model', value: i18n.t('Товар модели'), tab: 1},
                {key: 'basicQty', value: i18n.t('Намуналар сони'), tab: 1},
                {key: 'extraUnits', value: i18n.t('Ўлчов бирлиги')},
                {key: 'comment', value: i18n.t('Қўшимча маълумотлар ва изоҳлар')},
                {key: 'email', value: i18n.t('Электрон почта')},
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
        setProductErrors(tovar_id,errors) {

            const _this = this;
            if (errors) {
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });

               // this.application.tovarlar.forEach((tovar) => {

                    _this.$refs['stepValidation2Product' + tovar_id][0].setErrors(errorfield)

               // })

            }
        },
        setCommonErrors(errors) {

            const _this = this;
            if (errors) {
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });

               // this.application.tovarlar.forEach((tovar) => {

                    _this.$refs['stepValidation1'].setErrors(errorfield)

               // })

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
                        if (k !== -1)
                            this.application.tovarlar.splice(k, 1);
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
                return error.response

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
                            let resultData = await this.sendPerson({
                                firstName: _this.person.firstName,
                                surName: _this.person.surName,
                                lastName: _this.person.lastName,
                                email: _this.person.email,
                                pin: _this.person.pin,
                                tin: _this.person.tin,
                                perAdr: _this.person.perAdr,
                                phone: _this.person.phone?_this.person.phone.replaceAll("+","").replaceAll(" ",""):null,
                                personType: _this.person.position,
                                legalName: _this.person.organization_name,
                                locationId: _this.person.locationId,
                                postId: _this.person.post
                            });
                            this.loadingButton.first = false;
                            if (resultData.data.success === true) {
                                console.log(resultData.data['data']['data']['id'])
                                _this.app.id = resultData.data['data']['data']['id'];
                                this.$cookie.delete('user');
                                this.$cookie.set('user', JSON.stringify(this.person), 1);
                                _this.stepper = 2;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success(i18n.t("Аризачи маълумотлари сақланди!"));

                            } else if(typeof resultData.data.data.message !=='undefined') {
                                if(typeof resultData.data.data.data !=='undefined') this.setCommonErrors(resultData.data.data.data);
                                this.$toast.error(resultData.data.data.message);
                            }
                            else this.$toast.error(i18n.t("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!"));

                        }
                        this.loadingButton.first = false;
                    })

                    break;


                case 2:

                    if(!_this.agreed) {
                        _this.dialogAgree = true;
                        return ;
                    }
                    this.loadingButton.second = true;

                    setTimeout(async ()=>{

                        _this.app.commodities = [];


                        _this.application.tovarlar.forEach(function (tovar) {

                            _this.documents=[];
                            if(typeof tovar.docs !== 'undefined'){
                                tovar.docs.forEach(function(document){
                                    _this.documents.push({fileId:document.id})
                                })
                            }

                            _this.app.commodities.push({
                                commodityDto: {
                                    appId: _this.app.id,
                                    tradeName: typeof tovar.tijorat_nomi !== 'undefined' ? tovar.tijorat_nomi : null,
                                    tradeMark: typeof tovar.mark !== 'undefined' ? tovar.mark : null,
                                    model: typeof tovar.model !== 'undefined' ? tovar.model : null,
                                    comment: typeof tovar.comment !== 'undefined' ? tovar.comment : null,
                                    basicQty: typeof tovar.namunasoni !== 'undefined' && tovar.issetNamuna ? tovar.namunasoni : null,
                                    extraUnits: typeof tovar.olchovbirligi !== 'undefined' && tovar.issetNamuna ? tovar.olchovbirligi : null,

                                },
                                earxivDto: JSON.parse(JSON.stringify(_this.documents))
                            })


                        })



                        let resultData = await this.sendProduct(_this.app.commodities);
                        if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                            //console.log(resultData.data['data']['data']['id'])
                            //this.app.app_id = resultData.data['data']['data']['id'];
                            //console.log(resultData.data)
                            //this.$cookie.delete('user');
                            this.$toast.success(i18n.t("Сизнинг аризангиз юборилди!"));
                            setTimeout(() => {
                                _this.$router.push("/services/tftn/" + _this.app.id)

                            }, 500)
                        } else {
                            if (resultData.status === 400) {

                                if (typeof resultData.data.data !== 'undefined' && typeof resultData.data.data.message !== 'undefined') {

                                    Object.entries(resultData.data.data.message).forEach(([key, value]) => {
                                        if (typeof value['errorCommodity'] !== 'undefined')
                                            _this.setProductErrors(key, value['errorCommodity']);

                                    })
                                    //_this.setProductErrors(resultData.data.data.errorsCommodity);
                                }
                                this.$toast.error(i18n.t("Маълумотларингизни текшириб қайтадан юборинг!"));
                            } else if(typeof resultData.data.data.message !=='undefined')  this.$toast.error(resultData.data.data.message);
                            else
                                this.$toast.error(i18n.t("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!"));
                        }




                    })




                    this.loadingButton.second = false;

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
            await this.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {
                if (typeof result.data.data !== 'undefined')
                    result.data.data.forEach(function (item) {
                        if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                            _this.regions.push({
                                'value': item['kod_id'],
                                'text': (item['name']).replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)
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
            this.setCookieData();
        },
        setCookieData() {
            /////  Step  1  Fill  Person data
            let CPerson = null;
            CPerson = this.$cookie.get('user') ? JSON.parse(this.$cookie.get('user')) : null;
            this.setPersonData(CPerson)

        },
        setPersonData(data) {

            this.person.pin = this.$auth.user().pin;
            this.person.tin = this.$auth.user().tin;
            this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
            this.person.perAdr = this.$auth.user().per_adr;
            this.person.email = this.$auth.user().email;
            this.person.type = (this.$auth.user().type === 1) ? 1 : 0;
            this.person.position = (this.$auth.user().type === 1) ? 1 : 0;
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


    },
    watch: {
        'person.region': {
            handler(value) {
                //console.log(value)
                if (typeof value !== 'undefined' && value && value.length > 3) {
                    const region = value.substr(2, 2);
                    //setTimeout(async () => {
                    this.getPosts(region)
                    // })
                }

            },
            immediate: true,
            deep: true,
            sync: true
        },


    },
    created() {

    },
    mounted() {
        this.initialize();
    },
    computed: {
    }
    ,
    filters: {
        reverse: function (array) {
            return array.slice().reverse()
        }
    }
    ,
    components: {
        EArxivFile,
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
<style scoped>
.rozilik p {
    font-size: 18px;
    line-height: 30px;
    text-align: justify;
}
</style>
