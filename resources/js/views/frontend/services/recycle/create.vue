<template>
    <div class="section customs-value-section service-recycle">
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
                            Товарни божхона ҳудудида/ҳудудидан ташқарида қайта ишлаш учун рухсатнома бериш тўғрисида
                            ариза
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
                            Ариза маълумотлари
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="isCompleted(3)"
                            @click="goStep(3)"
                            step="3"

                        >
                            Товар тўғрисидаги маълумотлар
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
                                    href="/storage/files/Pererabotka.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
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
                                    href="/storage/files/Pererabotka.pptx"> Ариза тўлдириш бўйича йўриқмани юклаб
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
                                            <v-container class="w-100 m-0 p-4" fluid>
                                                <v-row>

                                                    <v-col cols="4">
                                                        <autocomplete-field
                                                            :options="[{text:'Божхона ҳудудида қайта ишлаш',value:100},
                                                                {text:'Божхона ҳудудидан ташқарида қайта ишлаш',value:200}]"
                                                            v-model="application.rejim"
                                                            rules="required"
                                                            title="Режим"
                                                            hint=" "
                                                        ></autocomplete-field>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <autocomplete-field
                                                            :options="application.rejim===200?methodIdentificationsOut:methodIdentificationsIn"
                                                            title="Идентификация усули"
                                                            rules="required"
                                                            v-model="application.method"
                                                        ></autocomplete-field>
                                                    </v-col>
                                                    <v-col cols="4" v-show="application.method === 5" >
                                                        <ValidationProvider name="Бошқа идентификация усули"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Идентификация усулини ёзинг"
                                                                required
                                                                hint="Рўйхатда йўқ бўлган идентификация усули"
                                                                persistent-placeholder
                                                                v-model="application.method2"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>

                                                    <v-col cols="4">
                                                        <autocomplete-field
                                                            :options="regions"
                                                            title="Ҳудудий бошқарма"
                                                            rules="required"
                                                            v-model="application.region"
                                                        ></autocomplete-field>

                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider name="Қайта ишлаш операцияларининг қиймати"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Қайта ишлаш операцияларининг қиймати *"
                                                                required
                                                                hint="Қайта ишлаш операцияларининг қиймати"
                                                                persistent-placeholder
                                                                v-model="application.recycleCost"
                                                            >

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider name="Валюта"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                v-model="application.currency"
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
                                                    <v-col cols="4">
                                                        <ValidationProvider
                                                            name="Қайта ишлаш муддати"
                                                            rules="required|max_value:24|numeric|between:1,24"
                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Қайта ишлаш муддати *"
                                                                persistent-placeholder
                                                                name="muddat"
                                                                type="number"
                                                                hint="1 ойдан 24 ойгача муддатда"
                                                                v-model="application.muddat"
                                                            >
                                                                <template v-slot:append>
                                                                    ой
                                                                </template>

                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="4">
                                                        <ValidationProvider
                                                            name="Қайта ишловчи СТИРи"
                                                            rules="required"
                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                v-model="application.recycle_org"
                                                                label="Қайта ишловчи СТИРи*"
                                                                required
                                                                hint="Қайта ишловчи СТИРи"
                                                                persistent-placeholder
                                                                :items="recycle_orgs"
                                                                item-text="shortname"
                                                                item-value="tin"
                                                                name="importInn"
                                                                hide-no-data
                                                                clearable
                                                                :loading="loading.recycle_org"
                                                                :search-input.sync="search_inn"
                                                                return-object
                                                                v-if="application.rejim===100"
                                                            >
                                                            </v-autocomplete>
                                                            <v-text-field v-else
                                                            v-model="application.recycle_org"
                                                                          label="Қайта ишловчи ташкилот*"
                                                                          persistent-placeholder
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="8">
                                                        <ValidationProvider
                                                            name="Шартнома идентификация рақами"
                                                            rules="required"
                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                v-model="application.contract"
                                                                label="Шартнома идентификация рақами*"
                                                                required
                                                                persistent-placeholder
                                                                :items="contracts"
                                                                item-text="kntid"
                                                                item-value="kntid"
                                                                name="contract"
                                                                deletable-chips
                                                                multiple
                                                                small-chips
                                                                hide-no-data
                                                                v-if="application.rejim===100"
                                                            >
                                                            </v-autocomplete>
                                                            <v-text-field v-else
                                                                          type="number"
                                                                          v-mask="'###########################'"
                                                                          v-model="application.contract"
                                                                          label="Шартнома идентификация рақами"
                                                                          persistent-placeholder
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>

                                                    <v-col cols="3">
                                                        <ValidationProvider name="Товар қайта ишланадиган жой манзили"
                                                                            rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-text-field
                                                                label="Товар қайта ишланадиган жой манзили *"
                                                                required
                                                                hint="Товар қайта ишланадиган жой манзили"
                                                                persistent-placeholder
                                                                v-model="application.recycleAddress"
                                                            >
                                                            </v-text-field>
                                                            <span class="red--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </v-col>

                                                    <v-col cols="9" class="position-relative">
                                                        <e-arxiv-file
                                                            v-model="application.documents"
                                                            multiple
                                                            :errors="application.ilova_error"
                                                            title="Илова қилинадиган файллар"
                                                            hint="Шартнома, техник иқтисодий асос, чиқиш нормаси, идентификация усули "
                                                        ></e-arxiv-file>

                                                    </v-col>

                                                </v-row>
                                                <v-row class="mt-2 pt-2">

                                                    <v-col cols="3">

                                                        <textfield
                                                            title="Ваколатли органлар рухсатномаси"
                                                            persistent-placeholder
                                                            v-model="application.orgPermission"
                                                        >
                                                        </textfield>

                                                    </v-col>
                                                    <v-col cols="3">

                                                        <textfield
                                                            title="Алмаштириладиган эквивалент товар"
                                                            persistent-placeholder
                                                            v-model="application.replProductNm"
                                                        >
                                                        </textfield>
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

                        <v-stepper-content step="3" class="recyle-product-wrapper">

                            <div class="p-1 d-flex align-items-start">

                                <div class="nav flex-column p-0 nav-pills col-1 product_parts"
                                     id="v-pills-tab"
                                     role="tablist"
                                     aria-orientation="vertical">

                                    <button class="nav-link create" @click="AddProduct">Қўшиш
                                        <v-icon>mdi-plus-circle-outline</v-icon>
                                    </button>
                                    <div class="product-button-actions">
                                        <button class="nav-link pl-0"
                                                :class="application.tovarlar[key].id===tovarIndex?'active':''"
                                                :id="'v-pills-profile-tab' + tovar.id"
                                                :data-id="tovar.id" data-bs-toggle="pill"
                                                @click="selectTabTovar(tovar.id)"
                                                :data-bs-target="'#v-pills-profile'+ tovar.id" type="button" role="tab"
                                                :aria-controls="'#v-pills-profile'+ tovar.id" aria-selected="true"
                                                v-for="(tovar,key) in getProducts"
                                                :style="'border-bottom:3px solid '+ colors[tovar.status - 1]"
                                        >
                                            <template
                                                v-if="tovar.tftn && tovar.tftn.id && tovar.tftn.id.length === 10 && tovar.status > 0">
                                            <span class="number-of-product">
                                                <span>{{ tovar.tftn.id }}</span>
                                            </span>
                                            </template>
                                            <template v-else>
                                                Товар
                                                {{ key + 1 }}
                                            </template>
                                            <div class="close-icon">
                                                <v-icon @click="RemoveProduct(tovar.id)">
                                                    mdi-close-circle-outline
                                                </v-icon>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div class="tab-content w-100" id="v-pills-tabContent">

                                    <div class="tab-pane fadeInUp"
                                         :class="(tovar.id===tovarIndex)?'list-enter-active active':'list-move'"
                                         :id="'v-pills-profile'+ tovar.id" role="tabpanel" :key="key"
                                         aria-labelledby="v-pills-home-tab" v-for="(tovar,key) in getProducts">
                                        <v-card
                                            class="mb-12">
                                            <h3 class="primary-color">Товар тўғрисидаги маълумотлар</h3>
                                            <v-tabs-items
                                                class="product_info_tab">
                                                <v-row class="p-2 my-2 mx-1"
                                                       flat
                                                >
                                                    <ValidationObserver v-slot="{ invalid }"
                                                                        :ref="'stepValidation2Product' + key">
                                                        <v-row>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Мақоми"

                                                                                    v-slot="{ errors }">
                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].status"
                                                                        label="Мақоми *"
                                                                        required
                                                                        :items="statusList"
                                                                        hide-selected
                                                                        persistent-placeholder
                                                                        name="maqom"
                                                                    >
                                                                        <template v-slot:selection="data">
                                                                            <div class="d-flex align-items-center"><span
                                                                                class="maqom-color"
                                                                                :style="'background-color:'+ colors[data.item.value - 1]"></span>
                                                                                {{ data.item.text }}
                                                                            </div>
                                                                        </template>
                                                                        <template v-slot:item="data">
                                                                            <div class="d-flex align-items-center"><span
                                                                                class="maqom-color"
                                                                                :style="'background-color:'+ colors[data.item.value - 1]"></span>
                                                                                {{ data.item.text }}
                                                                            </div>
                                                                        </template>

                                                                    </v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="ТИФ ТН код"
                                                                                    v-slot="{ errors }">
                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].tftn"
                                                                        label="ТИФ ТН кодни киритинг *"
                                                                        required
                                                                        :items="application.tovarlar[key].tftncodes"
                                                                        item-text="name"
                                                                        item-value="id"
                                                                        name="tftncode"
                                                                        hint="Товарнинг ТИФ ТН коди"
                                                                        persistent-placeholder
                                                                        hide-no-data
                                                                        clearable
                                                                        hide-details
                                                                        hide-selected
                                                                        :loading="loading.tftncode"
                                                                        return-object
                                                                        :search-input.sync="application.tovarlar[key].search_tftn"
                                                                    >
                                                                        <!--                                                                        <template v-slot:selection="data" >
                                                                                                                                                    <v-chip
                                                                                                                                                        :data="data"
                                                                                                                                                        v-bind="data.attrs"
                                                                                                                                                        :input-value="data.selected"
                                                                                                                                                        close
                                                                                                                                                        @click="data.select"
                                                                                                                                                        @click:close="remove(data.item)"
                                                                                                                                                    >
                                                                                                                                                        {{ data.item.name }}
                                                                                                                                                    </v-chip>
                                                                                                                                                </template>-->


                                                                    </v-autocomplete>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>

                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Товар номи"

                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Товар номи *"
                                                                        persistent-placeholder
                                                                        name="nomlanishi"
                                                                        hint="Товар номи"
                                                                        v-model="application.tovarlar[key].nomlanishi"
                                                                    >
                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>



                                                            <v-col cols="6">
                                                                <ValidationProvider
                                                                    name="Товар қиймати"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Товар қиймати *"
                                                                        persistent-placeholder
                                                                        name="tasnifi"
                                                                        hint="Қиймати"
                                                                        v-model="application.tovarlar[key].qiymati"
                                                                    >

                                                                        <template v-slot:append>
                                                                            {{
                                                                                (typeof application.tovarlar[key].currency != 'undefined' && (typeof getCurrencyByCode(application.tovarlar[key].currency)) !== 'undefined') ? getCurrencyByCode(application.tovarlar[key].currency).name : ""
                                                                            }}
                                                                        </template>


                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <v-col cols="6">
                                                                <ValidationProvider name="Валюта"
                                                                                    v-slot="{ errors }">
                                                                    <v-autocomplete
                                                                        v-model="application.tovarlar[key].currency"
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
                                                            <v-col cols="3">
                                                                <ValidationProvider
                                                                    name="Асосий ўлчов бирлигидаги миқдори"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Асосий ўлчов бирлигидаги миқдори *"
                                                                        persistent-placeholder
                                                                        name="guvohnoma_raqami"
                                                                        hint="Миқдори"
                                                                        v-model="application.tovarlar[key].weight"
                                                                    >
                                                                        <template v-slot:append>
                                                                            <span class="append-slot">кг</span>
                                                                        </template>

                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>

                                                            <v-col cols="3"
                                                                   v-if="(application.tovarlar[key].tftn && application.tovarlar[key].tftn.unit2 != null)">

                                                                <ValidationProvider
                                                                    name="Қўшимча ўлчов бирлигидаги миқдори"
                                                                    v-slot="{ errors }">
                                                                    <v-text-field
                                                                        label="Қўшимча ўлчов бирлигидаги миқдори"
                                                                        persistent-placeholder
                                                                        hint="Товарнинг қўшимча ўлчов бирлигидаги миқдори"
                                                                        name="size"
                                                                        type="number"
                                                                        v-model="application.tovarlar[key].size"
                                                                    >
                                                                        <template v-slot:append-outer>
                                                                            <span
                                                                                class="append-slot">{{
                                                                                    application.tovarlar[key].tftn.u2
                                                                                }}</span>
                                                                        </template>
                                                                    </v-text-field>
                                                                    <span class="red--text">{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </v-col>
                                                            <div style="border: 1px dashed ; padding:10px;"
                                                                 v-if="(typeof application.tovarlar[key].status !=='undefined' && application.tovarlar[key].status===3)">
                                                                <h4>Қайта ишлаш махсулотларининг чиқиш нормаси </h4>
                                                                <v-col cols="3"
                                                                       v-if="(typeof application.tovarlar[key].status !=='undefined' && application.tovarlar[key].status===3)">
                                                                    <autocomplete-field
                                                                        title="Шартли бирлик"
                                                                        v-model="application.tovarlar[key].shb"
                                                                        rules="required"
                                                                        :options="[
                                                                        {text:1,value:1},
                                                                        {text:10,value:10},
                                                                        {text:100,value:100},
                                                                        {text:1000,value:1000}
                                                                    ]"
                                                                    />
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-row>
                                                                        <v-col cols="3">
                                                                            <v-autocomplete label="Товар"
                                                                                            :items="listForSubProduct"
                                                                                            item-text="nomlanishi"
                                                                                            item-value="id"
                                                                                            v-model="application.subProduct.id"
                                                                                            persistent-placeholder></v-autocomplete>
                                                                        </v-col>
                                                                        <v-col cols="1">
                                                                            <v-text-field
                                                                                label="Миқдор"
                                                                                persistent-placeholder
                                                                                v-model="application.subProduct.miqdor"
                                                                                type="number"
                                                                            >
                                                                                <template v-slot:append-outer>
                                                                            <span
                                                                                class="append-slot">{{
                                                                                    (getProductsByID(application.subProduct.id).length > 0 && typeof getProductsByID(application.subProduct.id)[0] !== 'undefined' && typeof getProductsByID(application.subProduct.id)[0].tftn !== 'undefined') ? (getProductsByID(application.subProduct.id)[0].tftn.u2?getProductsByID(application.subProduct.id)[0].tftn.u2:getProductsByID(application.subProduct.id)[0].tftn.u1) : ''
                                                                                }}</span>
                                                                                </template>
                                                                            </v-text-field>
                                                                        </v-col>
                                                                        <v-col cols="1">
                                                                            <v-btn color="primary"
                                                                                   @click="addSubProduct(key)">Қўшиш
                                                                            </v-btn>
                                                                        </v-col>
                                                                    </v-row>
                                                                    <v-row
                                                                        v-if="(typeof application.tovarlar[key].status !=='undefined' && application.tovarlar[key].status===3)">
                                                                        <v-data-table
                                                                            :headers="subHeaders"
                                                                            :items="application.tovarlar[key].subProducts"
                                                                            class="elevation-1 p-0"
                                                                        >
                                                                            <template v-slot:header.name="{ header }">
                                                                                {{ header.text.toUpperCase() }}
                                                                            </template>
                                                                            <template v-slot:item.miqdor="{item}">
                                                                                {{ item.miqdor }}
                                                                                {{(getProductsByID(item.id).length > 0 && typeof getProductsByID(item.id)[0] !== 'undefined' && typeof getProductsByID(item.id)[0].tftn !== 'undefined') ? (( getProductsByID(item.id)[0].tftn.u2)?getProductsByID(item.id)[0].tftn.u2:getProductsByID(item.id)[0].tftn.u1) : '' }}


                                                                            </template>
                                                                            <template v-slot:item.actions="{ item }">
                                                                                <v-icon
                                                                                    small
                                                                                    class="mr-2"
                                                                                    @click="editSubProduct(item,key)"
                                                                                >
                                                                                    mdi-pencil
                                                                                </v-icon>
                                                                                <v-icon
                                                                                    small
                                                                                    @click="deleteSubProduct(item,key)"
                                                                                >
                                                                                    mdi-delete
                                                                                </v-icon>
                                                                            </template>
                                                                        </v-data-table>

                                                                    </v-row>
                                                                </v-col>
                                                            </div>


                                                        </v-row>
                                                    </ValidationObserver>

                                                </v-row>

                                            </v-tabs-items>

                                            <v-row class="bottom-required-info"><i style="font-size: 12px;"><sub
                                                style="font-size: 20px">*</sub> - майдонлари албатта тўлдирилиши
                                                шарт!</i></v-row>

                                        </v-card>
                                    </div>

                                </div>


                            </div>
                            <v-row class="row mb-0 bottom-0 end-0">
                                <v-col>


                                    <v-dialog
                                        v-model="dialog.tovarlarresult"
                                        transition="dialog-bottom-transition"
                                        max-width="900"
                                        style="max-width:900px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text
                                                   v-bind="attrs"
                                                   v-on="on"
                                            >Киритилган товарлар - <span style="color: var(--mycolor)">{{application.tovarlar.length}}</span>
                                            </v-btn>

                                        </template>
                                        <v-card>
                                            <v-toolbar
                                                color="primary"><span
                                                style="color: #fff; font-size: 18px;text-align: center;"> Киритилган товарлар рўйхати мақомлар кесимида </span>
                                            </v-toolbar>


                                            <v-card-text v-if="issetProductswithStatus()">
                                                <v-tabs
                                                    v-model="tab"
                                                    background-color="transparent"
                                                    color="primary"
                                                    grow
                                                >
                                                    <v-tabs-slider color="primary"></v-tabs-slider>

                                                    <v-tab
                                                        v-for="item in statusList"
                                                        :key="item.value"
                                                        v-if="(getProductsByStatus(item.value)).length>0 "
                                                        :style="'border: 2px solid ' + colors[item.value - 1] + ';'"
                                                        style='display: flex; font-weight:bold; font-size: 15px; justify-content:center; align-items:center; margin:0 2px; border-radius: 5px;'
                                                    >
                                                        <span>{{ item.value }}</span>
                                                    </v-tab>
                                                    <v-tab-item
                                                        v-for="item in statusList"
                                                        :key="item.value"
                                                        v-if="(getProductsByStatus(item.value)).length>0"

                                                    >

                                                        <v-card flat>
                                                            <v-container>
                                                                <v-row><h5 class=" mt-5 "
                                                                           :style="' font-weight:bold; '">
                                                                    {{ item.text }}</h5></v-row>
                                                            </v-container>
                                                            <v-card-text
                                                                v-if="(getProductsByStatus(item.value)).length>0"
                                                                :style="' font-weight:bold; border-radius:15px;'">
                                                                <v-data-table
                                                                    :headers="headers"
                                                                    :items="getProductsByStatus(item.value)"
                                                                    class="elevation-1 p-0"
                                                                >
                                                                    <template v-slot:header.name="{ header }">
                                                                        {{ header.text.toUpperCase() }}
                                                                    </template>
                                                                </v-data-table>
                                                            </v-card-text>
                                                            <v-card-text v-else>
                                                                <v-row
                                                                    class="d-flex justify-content-center align-items-center p-2">
                                                                    Бу мақомдаги товарлар киритилмади
                                                                </v-row>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-tab-item>
                                                </v-tabs>


                                            </v-card-text>
                                            <v-card-text v-else>
                                                <v-row class="d-flex justify-content-center align-items-center p-2">
                                                    Товарлар киритилмади
                                                </v-row>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="primary"
                                                    text
                                                    @click="dialog.tovarlarresult = false"
                                                >
                                                    Ёпиш
                                                </v-btn>
                                            </v-card-actions>


                                        </v-card>
                                    </v-dialog>
                                </v-col>
                                <v-col class="d-flex tab_action_buttons justify-content-end p-0">
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
        <a class="all_news service" target="_blank" href="https://t.me/bojxonaqaytaishlash">
            <img src="/public/images/telegram.png">


            <p> Саволларингизни йўлланг
                <br>
                @bojxonaqaytaishlash
            </p></a>
    </div>
</template>
<script>
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';
import {types} from "../../../../../../public/js/mix/pdfmake";
import i18n from "../../../../i18n";
import AutocompleteField from "../../../../components/form/autocomplete";
import EArxivFile from "../../../../components/form/e-arxiv-file";
import Textfield from "../../../../components/form/textfield";


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
            currencies: [],
            recycle_orgs: [],
            search_inn: null,
            colors: [
                '#000000',
                '#d747a4',
                '#1e2de5',
                '#39e70e',
                '#7ed1f1',
                '#c9b210',
            ],
            maqomlar: [
                {text: typeof this.application!=='undefined' && this.application.rejim===200?"Олиб чиқиладиган товарлар":"Олиб кириладиган товарлар", value: 1},
                {text: typeof this.application!=='undefined' && this.application.rejim===200?"Ишлатиладиган чет эл товари":"Ўзбекистон товари", value: 2},
                {text: "Қайта ишлаш маҳсулоти", value: 3},
                {text: "Қайта ишлашда ҳосил бўладиган иккиламчи товар", value: 4},
                {text: "Чиқиндилар", value: 5},
                {text: "Йўқ бўлиб кетадиган товарлар", value: 6},
            ],

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
                    text: 'Товарни божхона ҳудудида/ҳудудидан ташқарида қайта ишлаш учун рухсатнома бериш тўғрисида ариза',
                    to: '/services/decisions',
                    disabled: true,
                    exact: true,
                },
            ],
            tovarIndex: 0,
            tab: 0,
            headers: [
                {text: 'ТИФ ТН', align: 'start', value: 'tftn.id'},
                {text: 'Товар номи', align: 'start', value: 'nomlanishi'},
                {text: 'Товар миқдори', align: 'start', value: 'qiymati'},
            ],
            subHeaders: [
                {text: 'Товар номи', align: 'start', value: 'nomlanishi'},
                {text: 'Товар миқдори', align: 'start', value: 'miqdor'},
                {text: 'Операция', align: 'start', value: 'actions'},
            ],
            contracts: [],
            subProduct: {
                hsCode: null,
                mainCmdtNm: null,
                cmdtQty: null,
                cmdtUnits: null
            },
            application: {
                shb: null,
                methodIdentificationsIn: null,
                recycleCost: null,
                rejim: null,
                currency: null,
                recycleAddress: null,
                orgPermission: null,
                replProductNm: null,
                muddat: null,
                method: null,
                method2: null,
                documents: [],
                contract:null,
                ilova_error: "",
                recycle_org: null,
                subProduct: {
                    id: null,
                    miqdor: null
                },
                tovarlar: [
                    {
                        id: 0,
                        tftn: [],
                        tftncodes:[],
                        nomlanishi: null,
                        status: null,
                        qiymati: null,
                        currency: null,
                        weight: null,
                        search_tftn: "",
                        shb: null,
                        subProducts: []
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
                tftn: [],
                nomlanishi: null,
                status: null,
                qiymati: null,
                currency: null,
                weight: null,
                search_tftn: "",
                subProducts: []
            },
            commodity: [],
            app: {
                id: null,
                common: {
                    //oldAppId: null, ///  oldingi app_id edit qilayotganda
                    personId: null,
                    locationId: null, ///Viloyat
                    repubInOut: null, //100 - Bojxona hududida 200- bosjxona tashqarisida
                    methodIden: null, //
                    contractIdenNumber: [], //// KONTTYPE : 11,12,16,17 ACTIVE_PR :0
                    recycleDeadlineDate: null, ///0-24 gacha
                    recycleCost: null, /// Қайта ишлаш оператцияларининг қиймати *
                    recycleCurrency: null, //valyuta
                    recycleName: null,
                    recycleTin: "", /// INN
                    recycleAddress: null,
                    orgPermission: null,
                    replProductNm: null,
                    //oldAppNum: null
                },
                docs: [],
                commodities: [],
            },

            dialog: {
                tovarlarresult: false,
                ishlabchiqaruvchi: false,
            },
            boolDialogIshChiqNew: -1,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            modal: false,
            completedSteps: [],
            tags: [],
            methodIdentificationsIn: [
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш",
                    value: 1
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш",
                    value: 2
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш",
                    value: 3
                },
                {
                    text: "Қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш",
                    value: 4
                },
                {text: "Бошқа усуллар", value: 5}
            ],
            methodIdentificationsOut: [
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарга ваколатли шахс ва (ёки) божхона органи томонидан муҳрлар қўйиш ва, зарур бўлган ҳолларда, штамплар қўйиш, рақамли ва (ёки) бошқа турда тамғалаш",
                    value: 1
                },
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарни батафсил тавсифлаш, уни суратга тушириш ёки бошқа ўлчамларда тасвирлаш",
                    value: 2
                },
                {
                    text: "қайта ишлаш учун олиб чиқилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва уни қайта ишлаш маҳсулотини тадқиқ этиш натижаларини қиёслаш",
                    value: 3
                },
                {
                    text: "Қайта ишлаш учун олиб чиқилаётган товарнинг завод ва серия рақамлари тарзида мавжуд бўлган тамғалашдан ёхуд бошқача тамғалашдан фойдаланиш",
                    value: 4
                },
                {text: "Бошқа усуллар", value: 5}
            ],
            loadingButton: {
                first: false,
                second: false,
                third: false,
                four: false
            },
            loading: {tftncode: false, recycle_org: false, contract: false},
            tftncodes: [],
            search_tftn: null,
            search_contract: null,
            postloading: false,
            noRequiredTab: false,
            fields: [
                {key: 'repubInOut', value: 'Режим'},
                {key: 'methodIden', value: 'Идентификация усули'},
                {key: 'locationId', value: 'Ҳудудий бошқарма'},
                {key: 'recycleCost', value: 'Қайта ишлаш операцияларининг қиймати'},
                {key: 'recycleCurrency', value: 'Валюта'},
                {key: 'recycleDeadlineDate', value: 'Қайта ишлаш муддати'},
                {key: 'recycleTin', value: 'Қайта ишловчи СТИРи'},
                {key: 'contractIdenNumber', value: 'Шартнома идентификация рақами'},
                {key: 'recycleAddress', value: 'Товар қайта ишланадиган жой манзили'},
                {key: 'orgPermission', value: 'Ваколатли органлар рухсатномаси'},
                {key: 'replProductNm', value: 'Алмаштириладиган эквивалент товар'},
                {key: 'hsCode', value: 'ТИФ ТН код'},
                {key: 'cmdtNm', value: 'Товар номи'},
                {key: 'cmdtStatus', value: 'Мақоми'},
                {key: 'cmdtCost', value: 'Товар қиймати'},
                {key: 'currency', value: 'Валюта'},
                {key: 'cmdtNetto', value: 'Асосий ўлчов бирлигидаги миқдори'},
                {key: 'cmdtQty', value: 'Қўшимча ўлчов бирлигидаги миқдори'},
            ],
            float: ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$'],
            editedSubProducts:[],
            recycle_org_inn:false,

        }

    },
    methods: {

        async getCurrencies() {
            let root = this
            await axios.get('/api/v1/data/currency?lang=uz').then(function (result) {
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
        addSubProduct(key) {
            if(!(this.application.subProduct.miqdor>=0)) return ;
            const _this = this;
            const subProduct = [];
            if (typeof this.application.tovarlar[this.application.subProduct.id] !== 'undefined') {
                if (this.application.tovarlar.filter((tovar) => {
                    if (tovar.id === _this.application.subProduct.id) return tovar;
                }).length > 0)
                    subProduct['tovar'] = JSON.parse(JSON.stringify(this.application.tovarlar.filter((tovar) => {
                        if (tovar.id === _this.application.subProduct.id) return tovar;
                    })[0]));
                subProduct['miqdor'] = this.application.subProduct.miqdor;

                if (typeof this.application.tovarlar[key].subProducts === 'undefined' || !this.application.tovarlar[key].subProducts)
                    this.application.tovarlar[key].subProducts = [];
                this.application.tovarlar[key].subProducts.push({
                    nomlanishi: subProduct['tovar'].nomlanishi,
                    id: subProduct['tovar'].id,
                    miqdor: this.application.subProduct.miqdor,
                })
                this.application.subProduct = JSON.parse(JSON.stringify({id: null, miqdor: null}));

            }

        },
        getField(val) {
            return this.fields.filter((obj) => {
                if (obj.key === val) return obj.value
            })
        },
        issetProductswithStatus() {
            let returnData = this.application.tovarlar.filter((obj) => {
                if (typeof obj.status !== 'undefined' && obj.status) return obj
            })
            if (returnData.length > 0) return true;
            return false
        },
        getProductsByStatus(val) {
            return this.application.tovarlar.filter((obj) => {
                if (obj.status === val) return obj
            })
        },
        getProductsByID(val) {
            return this.application.tovarlar.filter((obj) => {
                if (obj.id === val) return obj
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
        setCommonErrors(errors) {
            const _this = this;
            if (errors) {
                let errorfield = [];

                Object.keys(errors).forEach(keyItem => {
                    if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
                        errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
                    }
                });

                this.application.tovarlar.forEach((tovar) => {

                    _this.$refs['stepValidation2'].setErrors(errorfield)

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
            this.tovarIndex = copytovar['id'];
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
            if (typeof data['phone'] !== 'undefined') {
                data['phone'] = data.phone.replaceAll(" ", "");
                data['phone'] = data.phone.replaceAll("+", "");
            }
            data['personType'] = data.type === 1 ? 0 : 1;
            data['legalName'] = data.organization_name;

            let result = null;
            try {
                await axios.post('/api/v1/ex_api/recycle-person', data).then(function (res) {
                    result = res;
                })
                return result;
            } catch (error) {
                 console.log(error)

            }
        },
        async sendCommon(data = null) {

            let result = null;
            try {
                await axios.post('/api/v1/ex_api/recycle-common', data).then(function (res) {
                    result = res;
                }).catch((inValidErrors) => {
                    if (typeof inValidErrors.response !== 'undefined') result = inValidErrors.response;
                })
                return result;
            } catch (error) {
                // console.log(error)
                return error.response

            }
        },
        async sendProduct(data) {
            let result = null;
            try {
                await axios.post('/api/v1/ex_api/recycle-product', data).then(function (res) {
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
                            let resultData = await this.sendPerson(JSON.parse(JSON.stringify(this.person)));

                            this.loadingButton.first = false;
                            if (resultData && typeof resultData.data!=='undefined' && resultData.data.success === true) {
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
                    this.loadingButton.second = true;
                    //console.log(!this.validateField("create_customs_person_value"))
                    setTimeout(async () => {
                        isValid = true;//await this.validateField("stepValidation2");
                        if (isValid === true) {

                            _this.resetVar(_this.app.common)

                            _this.app.common.personId = _this.person.person_id;
                            _this.app.common.locationId = _this.application.region;                   ///Viloyat
                            _this.app.common.repubInOut = _this.application.rejim;                   //100 - Bojxona hududida 200- bosjxona tashqarisida

                            if(_this.application.method===5) _this.app.common.methodIden = _this.application.method2;
                            else {
                                if(_this.application.method >0 || _this.application.method < 5){
                                    if (_this.application.rejim === 200)
                                        _this.app.common.methodIden = _this.methodIdentificationsOut.filter((item)=>{
                                            if(item.value===_this.application.method) return item;
                                        })[0].text;
                                    else
                                        _this.app.common.methodIden = _this.methodIdentificationsIn.filter((item)=>{
                                            if(item.value===_this.application.method) return item;
                                        })[0].text;
                                }

                            }              //
                            if (_this.application.contract && typeof _this.application.contract !== 'undefined') {
                                if(_this.application.rejim===200) {
                                    _this.app.common.contractIdenNumber.push(_this.application.contract);
                                }
                                else {
                                    _this.app.common.contractIdenNumber = JSON.parse(JSON.stringify(_this.application.contract));
                                }
                            }                   //// KONTTYPE : 11,12,16,17 ACTIVE_PR :0
                            _this.app.common.recycleDeadlineDate = _this.application.muddat;                      ///0-24 gacha
                            _this.app.common.recycleCost = _this.application.recycleCost;                      /// Қайта ишлаш оператцияларининг қиймати *
                            _this.app.common.recycleCurrency = _this.application.currency;                      //valyuta
                            if(_this.application.rejim===200){
                                _this.app.common.recycleName=_this.application.recycle_org;
                                _this.app.common.recycleTin =null;
                            }
                            else {
                                _this.app.common.recycleName = (_this.application.recycle_org && typeof _this.application.recycle_org.name !== 'undefined') ? _this.application.recycle_org.name : null;
                                _this.app.common.recycleTin = (_this.application.recycle_org && typeof _this.application.recycle_org.tin !== 'undefined') ? _this.application.recycle_org.tin : null;                    /// INN}
                            }
                            _this.app.common.recycleAddress = _this.application.recycleAddress;
                            _this.app.common.orgPermission = _this.application.orgPermission;
                            _this.app.common.replProductNm = _this.application.replProductNm;
                            if (_this.application.documents && typeof _this.application.documents !== 'undefined') {
                                _this.app.docs = [];
                                _this.application.documents.forEach((document) => {
                                    _this.app.docs.push({fileId: document.id})
                                });
                                ///_this.app.docs=JSON.parse(JSON.stringify(_this.application.contract));
                            }


                            let resultData = await this.sendCommon(JSON.parse(JSON.stringify({
                                s03AppsBody: _this.app.common,
                                s03EarxivBody: _this.app.docs
                            })));
                            this.loadingButton.second = false;
                            if (resultData && resultData.data && resultData.data.success === true) {

                                this.$cookie.delete('common');
                                this.$cookie.set('common', JSON.stringify({
                                    common: _this.app.common,
                                    docs: _this.app.docs
                                }), 1);

                                _this.app.id = resultData.data.data.data.id;
                                _this.stepper = 3;
                                _this.completedSteps.push(_this.stepper - 1);
                                _this.$toast.success("Ариза умумий маълумотлари сақланди!");

                            } else {
                                if (typeof resultData.data !== 'undefined' && resultData.data && typeof resultData.data.data !== 'undefined'
                                    && resultData.data.data
                                    && typeof resultData.data.data.errors !== 'undefined'
                                    && typeof resultData.data.data.errors) {
                                    if (typeof resultData.data.data.errors.appsBody !== 'undefined')
                                        _this.setCommonErrors(resultData.data.data.errors.appsBody)
                                    if (typeof resultData.data.data.errors.docsBody !== 'undefined') {
                                        _this.application.ilova_error = [];
                                        if (typeof resultData.data.data.errors.docsBody === 'String')
                                            _this.application.ilova_error = resultData.data.data.errors.docsBody;
                                        if (typeof resultData.data.data.errors.docsBody[0] !== 'undefined' && typeof resultData.data.data.errors.docsBody[0]['fileId'] !== 'undefined')
                                            _this.application.ilova_error = resultData.data.data.errors.docsBody[0]['fileId'];
                                    }
                                    this.$toast.error("Маълумотларингизни тўғрилаб юборинг!");
                                } else

                                    this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");
                            }


                        }
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
                        _this.app.commodities = [];

                        _this.application.tovarlar.forEach(function (tovar) {


                            /////commodities


                            //_this.subProduct.id,
                            const subProducts = [];
                            if (typeof tovar.subProducts !== 'undefined' && tovar.subProducts && tovar.subProducts.length > 0) {
                                tovar.subProducts.forEach((item) => {
                                    _this.application.tovarlar.map((x) => {
                                        if (x.id === item.id) subProducts.push({
                                            hsCode: (typeof x.tftn !== 'undefined')?parseInt(x.tftn.id):'',
                                            mainCmdtNm: x.nomlanishi,
                                            cmdtQty: item.miqdor,
                                            cmdtUnits: (typeof x.tftn !== 'undefined' && typeof x.tftn.unit2 !== 'undefined' && x.tftn.unit2) ? x.tftn.unit2 : x.tftn.unit1,
                                        })
                                    })
                                })
                            }

                            _this.app.commodities.push({
                                commodityBodies: {
                                    appId: _this.app.id,
                                    hsCode: typeof tovar.tftn !== 'undefined' && tovar.tftn && typeof tovar.tftn.id !== 'undefined' ? tovar.tftn.id : null,
                                    cmdtNm: typeof tovar.nomlanishi !== 'undefined' ? tovar.nomlanishi : null,
                                    cmdtQty: typeof tovar.size !== 'undefined' ? tovar.size : null,
                                    cmdtNetto: typeof tovar.weight !== 'undefined' ? tovar.weight : null,
                                    cmdtNettoUnit: typeof tovar.tftn !== 'undefined' && tovar.tftn && typeof tovar.tftn.unit1 !== 'undefined' ? tovar.tftn.unit1 : null,
                                    cmdtUnit: typeof tovar.tftn !== 'undefined' && tovar.tftn && typeof tovar.tftn.unit2 !== 'undefined' ? tovar.tftn.unit2 : null,
                                    cmdtCost: typeof tovar.qiymati !== 'undefined' ? tovar.qiymati : null,
                                    currency: typeof tovar.currency !== 'undefined' ? tovar.currency : null,
                                    cmdtStatus: typeof tovar.status !== 'undefined' ? tovar.status : null,
                                    conUnit: typeof tovar.shb !== 'undefined' ? tovar.shb : null,

                                },
                                commodityDopBodies: JSON.parse(JSON.stringify(subProducts))
                            })


                        })
                        let resultData = await this.sendProduct(_this.app.commodities);
                        if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                            //console.log(resultData.data['data']['data']['id'])
                            //this.app.app_id = resultData.data['data']['data']['id'];
                            //console.log(resultData.data)
                            this.$cookie.delete('user');
                            this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");
                            setTimeout(() => {
                                _this.$router.push("/services/recycle/" + _this.app.id)

                            }, 500)
                        } else {
                            if (resultData.status === 400) {

                                if (typeof resultData.data.data !== 'undefined' && typeof resultData.data.data.errorsCommodity !== 'undefined') {

                                    Object.entries(resultData.data.data.errorsCommodity).forEach(([key, value]) => {
                                        if (typeof value['commodityBody'] !== 'undefined')
                                            _this.setProductErrors(key, value['commodityBody']);
                                    })
                                    //_this.setProductErrors(resultData.data.data.errorsCommodity);
                                } else if (typeof resultData.data.data !== 'undefined' && typeof resultData.data.data.error !== 'undefined') {
                                    this.$toast.error(resultData.data.data.error);
                                } else
                                this.$toast.error("Маълумотларингизни текшириб қайтадан юборинг!");
                            } else
                                this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");
                        }


                        // console.log(_this.app)


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
        editSubProduct(item,tovarKey){
            const _this=this;
            this.application.tovarlar[tovarKey].subProducts.forEach((subItem)=>{
                if(subItem.id===item.id) {

                    const indexSubItem=_this.application.tovarlar[tovarKey].subProducts.indexOf(subItem);
                    if(indexSubItem!==-1) _this.application.tovarlar[tovarKey].subProducts.splice(indexSubItem,1)
                    _this.application.subProduct.id=subItem.id
                    _this.application.subProduct.miqdor=subItem.miqdor
                    this.editedSubProducts.push(subItem.id)

                }
            })
        },
        deleteSubProduct(item,tovarKey){
            const _this=this;
            this.application.tovarlar[tovarKey].subProducts.forEach((subItem)=>{
                if(subItem.id===item.id) {

                    const indexSubItem=_this.application.tovarlar[tovarKey].subProducts.indexOf(subItem);
                    if(indexSubItem!==-1) _this.application.tovarlar[tovarKey].subProducts.splice(indexSubItem,1)
                    _this.editedSubProducts.push(subItem.id)
                }
            })
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

        initialize() {
            this.getBoshqarmalar();
            this.setCookieData();
            this.createWatcher(0);  /// listener for product[0]
            this.getCurrencies();

        },
        setCookieData() {
            /////  Step  1  Fill  Person data
            let CPerson = null;
            CPerson = this.$cookie.get('user') ? JSON.parse(this.$cookie.get('user')) : null;
            this.setPersonData(CPerson)
            let CCommon = null;
            CCommon = this.$cookie.get('common') ? JSON.parse(this.$cookie.get('common')) : null;
            if (CCommon) this.setCommonData(CCommon);
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
        setCommonData(data) {
            const _this = this;
            if (typeof data.common !== 'undefined') {
                if (data.common && typeof data.common.locationId !== 'undefined') _this.application.region = data.common.locationId;
                if (data.common && typeof data.common.repubInOut !== 'undefined') _this.application.rejim = data.common.repubInOut;
                if (data.common && typeof data.common.methodIden !== 'undefined') _this.application.method = data.common.methodIden;
                if (data.common && typeof data.common.recycleDeadlineDate !== 'undefined') _this.application.muddat = data.common.recycleDeadlineDate;
                if (data.common && typeof data.common.recycleCost !== 'undefined') _this.application.recycleCost = data.common.recycleCost;
                if (data.common && typeof data.common.recycleCurrency !== 'undefined') _this.application.currency = data.common.recycleCurrency;
                if (data.common && typeof data.common.recycleAddress !== 'undefined') _this.application.recycleAddress = data.common.recycleAddress;
                if (data.common && typeof data.common.orgPermission !== 'undefined') _this.application.orgPermission = data.common.orgPermission;
                if (data.common && typeof data.common.replProductNm !== 'undefined') _this.application.replProductNm = data.common.replProductNm;
                if (data.common && typeof data.common.contractIdenNumber !== 'undefined') {
                    data.common.contractIdenNumber.forEach((contract) => {
                        setTimeout(() => {
                            _this.search_contract = contract;
                        }, 100)

                    })
                    _this.application.contract = data.common.contractIdenNumber;
                }
                if (data.docs && typeof data.docs !== 'undefined') {
                    data.docs.forEach((file) => {
                        if (typeof file['fileId'] !== 'undefined')
                            _this.application.documents.push({id: file['fileId']});
                    })
                }
                if (data.common && typeof data.common.recycleTin !== 'undefined' && typeof data.common.recycleName !== 'undefined') {
                    //_this.search_inn=data.common.recycleTin;
                    setTimeout(async () => {
                        await fetch(window.location.origin + "/api/v1/data/inn?code=" + data.common.recycleTin)
                            .then((res) => res.json())
                            .then(res => {
                                res.map(function (item) {
                                    item.shortname = item.tin + " - " + item.shortname;
                                    return item;
                                })
                                this.recycle_orgs = res;
                            });
                        _this.recycle_orgs.filter((item) => {
                            if (item.tin == parseInt(data.common.recycleTin)) {
                                _this.application.recycle_org = item;
                            }
                        })
                    })
                }
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
        createWatcher(key) {
            const _this = this
            this.$watch('application.tovarlar.' + key + '.search_tftn', (val) => {
                // console.log(val)
                if (val === null || (val && val.length > 10)) return

                this.loading.tftncode = true

                // Lazily load input items
                fetch("https://new.customs.uz/api/v1/data/tftn?code=" + val)
                    .then((res) => res.json())
                    .then(res => {
                        res.map(function (item) {
                            item.name = item.id + " - " + item.name;
                            return item;
                        })

                        _this.application.tovarlar[key].tftncodes=res;
                    })
                    .catch(err => {
                        //console.log(err)
                    })
                    .finally(() => (
                        this.loading.tftncode = false
                    ))

            })
            this.$watch('application.tovarlar.' + key + '.status', (val) => {
                _this.application.tovarlar.sort((a, b) => {
                    if (a.status > b.status) {
                        return a - b;
                    }

                })

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
        search_inn: {
            handler: function (val) {
                if (!val) return;
                if (val.length !== 9) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.recycle_org = true;

                // Lazily load input items
                fetch(window.location.origin + "/api/v1/data/inn?code=" + val)
                    .then((res) => res.json())
                    .then(res => {
                        res.map(function (item) {
                            item.shortname = item.tin + " - " + item.shortname;
                            return item;
                        })
                        this.loading.recycle_org = false
                        this.recycle_orgs = res;

                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (
                        this.loading.recycle_org = false
                    ))
            },
            deep: true
        },
        search_contract: {
            handler: function (val) {
                if (!val) return;
                //if (val.length ) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.contract = true;

                // Lazily load input items
                fetch(window.location.origin + "/api/v1/data/contract?code=" + val)
                    .then((res) => res.json())
                    .then(res => {
                        this.loading.contract = false
                        //this.contracts.push(res.data[0]);
                        this.contracts = this.contracts.concat(res.data.filter((item) => this.contracts.indexOf(item) < 0));
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (
                        this.loading.contract = false
                    ))
            },
            deep: true
        },
        "application.recycle_org": {
            handler: function (val) {
                if (!val) return;
                if (typeof val.tin === 'undefined') return
                if (!val.tin) return
                if (val.tin.length !== 9) return
                //if (val.length ) return
                //if (this.tftncodes.length > 0) return

                // Items have already been requested
                //if (this.loading.tftncode) return

                this.loading.contract = true;

                // Lazily load input items
                fetch(window.location.origin + "/api/v1/data/contract?inn=" + val.tin)
                    .then((res) => res.json())
                    .then(res => {
                        this.loading.contract = false
                        //this.contracts.push(res.data[0]);
                        this.contracts = this.contracts.concat(res.data.filter((item) => this.contracts.indexOf(item) < 0));
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (
                        this.loading.contract = false
                    ))
            },
            deep: true
        },
    },

    mounted() {
        this.initialize();
    },
    computed: {
        statusList(){

            if(this.application.rejim===200){
                this.maqomlar[0].text="Олиб чиқиладиган товарлар";
                this.maqomlar[1].text="Ишлатиладиган чет эл товари";
            }

          return this.maqomlar;
        },
        progress(val) {
            this.Initprogress(val)
        },
        isvalidDocument(tovar_id = null) {
            //tovar_id = this.tovarIndex;
            //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
            return !this.isValidDoc()
        },
        getProducts() {
            if (this.application.tovarlar.length > 0) {
                return this.application.tovarlar.sort((a, b) => {

                    if (typeof a.status !== 'undefined' && typeof b.status !== 'undefined') {
                        if (a.status > b.status) return 1; else return -1;

                    }
                    return 0;
                })
            }
            return this.application.tovarlar
        },
        listForSubProduct() {
            const _this = this;
            if (typeof _this.application.tovarlar.filter((tovar) => {
                if (_this.tovarIndex === tovar.id) return tovar;
            })[0] !== 'undefined' && typeof _this.application.tovarlar.filter((tovar) => {
                if (_this.tovarIndex === tovar.id) return tovar;
            })[0].subProducts !== 'undefined') {
                return (this.getProductsByStatus(1).concat(this.getProductsByStatus(2))).filter((item) => {
                    var returnData = true;
                    const myList = JSON.parse(JSON.stringify(_this.application.tovarlar.filter((tovar) => {
                        if (_this.tovarIndex === tovar.id) return tovar;
                    })));
                    if (typeof myList[0] !== 'undefined' && myList[0].subProducts !== 'undefined') {

                        myList[0].subProducts.filter((subProduct) => {

                            if (subProduct.nomlanishi === item.nomlanishi) {
                                returnData = false;
                            }
                            ;

                        })
                    }
                    if (returnData) return item;


                });
            }
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
        Textfield,
        EArxivFile,
        AutocompleteField,
        ValidationProvider,
        ValidationObserver,
    }
}
</script>
<style>
.append-slot {
    font-size: 15px;
}

.recyle-product-wrapper .v-stepper__wrapper {
    box-shadow: 0 0 28px 2px #e5e5e5;
    padding: 20px;
}

</style>

