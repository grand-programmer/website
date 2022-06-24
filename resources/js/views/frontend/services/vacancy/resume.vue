<template>
    <div class="section nomzod-section">
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
            <v-container class="111" v-if="vacancy_send ">
                <info :resume="vacancy_resume"></info>
            </v-container>
            <v-container v-else>
                <section class="content_block" v-if="this.$auth.user()" :set="user =this.$auth.user()">

                        <section class="content_block">
                            <div class="pull-right profile-action-buttons">

                                <!--                                <v-btn type="button" @click="clickEdit" class="btn btn-success" :title="editButton">
                                                                    <i class="fa fa-user-edit"></i> {{ editButton }}
                                                                </v-btn>-->
                                <!--
                                                            <button type="button" class="btn btn-primary btn-print" title="Чоп этиш">

                                                                <i class="fa fa-print"></i>
                                                            </button>
                                                            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton"
                                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                                    title="Юклаб олиш">
                                                                <i class="fa fa-download"></i>
                                                            </button>-->
                                <!--                                <a @click="sendResume" class="btn btn-info" :class="edit?'disabled':''"
                                                                   title="Резюме юбориш">
                                                                    <i class="fa fa-upload mr-2"></i>Резюмени юбориш
                                                                </a>-->
                                <v-btn class="btn btn-info" :loading="resumeLoading"
                                   title="Резюме юбориш" @click="sendResume">
                                    <i class="fa fa-upload mr-2"></i>Резюмени юбориш
                                </v-btn>
                                <v-dialog
                                    v-model="dialogTilxat"
                                    width="800"
                                    style="font-size: 16px;"
                                >
                                    <v-card>
                                        <v-card-title class="primary p-2" dark style="color: #fff; font-size: 20px">
                                            "Божхона хизмати органларида хизматни ўташ тўғрисидаги" Низом талаблари
                                        </v-card-title>
                                        <v-card-text>
                                            <p style="
                                                line-height: 1.5;
                                                text-align: center;
                                            font-size: 16px;
                                            ">
                                                Ўзбекистон Республикасининг “Давлат божхона хизмати тўғрисида”ги
                                                Қонунига мувофиқ, белгиланган тартибда муомалага лаёқатсиз ёки муомала
                                                лаёқати чекланган деб топилган, хизматни ўташга тўсқинлик қиладиган
                                                касаллиги ёки жисмоний нуқсонлари бўлган, бошқа давлат органларидан
                                                салбий сабабларга кўра бўшатилган, шунингдек содир этган жинояти учун
                                                илгари ҳукм қилинганлар, қўлланилган жазо туридан, судланганлик ҳолати
                                                тугатилганлигидан ёки олиб ташланганлигидан ва ўзига нисбатан амнистия
                                                акти ёки афв этиш қўлланилганлигидан қатъи назар ёхуд ярашув муносабати
                                                билан жиноий жавобгарликдан озод қилинган фуқаролар хизматга қабул
                                                қилиниши мумкин эмас.
                                                Ўзбекистон Республикаси давлат божхона хизмати органларида хизматни ўташ
                                                тўғрисидаги Низомда белгиланган талабларга мос келмаган, ҳужжатларни
                                                белгиланган муддатда тақдим этмаган, саралаш босқичларидан ўта олмаган
                                                ёки ўзи ва яқин қариндошлари тўғрисида била туриб нотўғри маълумотлар
                                                берган номзодни хизматга қабул қилиш рад этилиши тўғрисида
                                                ОГОҲЛАНТИРИЛДИМ.

                                            </p>
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="primary"
                                                text
                                                @click="dialogTilxat = false"
                                            >
                                                Ёпиш
                                            </v-btn>
                                            <v-btn
                                                color="primary"
                                                @click="clickedAccept"
                                                text
                                            >
                                                Розиман
                                            </v-btn>
                                        </v-card-actions>

                                    </v-card>

                                </v-dialog>
                                <!--                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start"
                                                                 style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(999px, 38px, 0px);">
                                                                <a class="dropdown-item" href="/users/profiles/surat9/download/pdf">PDF шаклида</a>
                                                                <a class="dropdown-item" href="/users/profiles/surat9/download/docx">Word шаклида</a>
                                                                <a class="dropdown-item "
                                                                   href="https://oldvacancy.argos.uz/media/resume/Dars_jadvali.docx">Номзоднинг шахсий
                                                                    резюмеси</a>
                                                            </div>
                                                            <button type="button" id="reminder-modal-btn" class="btn btn-danger" title="Эслатма">
                                                                <i class="fa fa-bell"></i>
                                                            </button>-->

                            </div>
                            <div class="no_name_class">
                                <div class="inner_user_img">
                                    <img :src="'/public/images/users/'+ user.id +'.jpg'" alt="Фойдаланувчи сурати">
                                </div>
                                <div class="no_name_class2">
                                <span class="info_full_name">{{
                                        user.sur_name
                                    }} {{ user.first_name }} {{ user.mid_name }}</span>
                                    <span class="ident_number">ЖШШИР: {{ user.pin }}</span>

                                </div>
                            </div>
                            <div class="user_info_list">
                                <ValidationObserver v-slot="{ invalid }" ref="vacancy_application">
                                <v-row>
                                    <v-col cols="4">
                                        <div class="user_info_item">

                                            <div class="d-flex flex-col">
                                                <span>Туғилган сана</span>
                                                <span>{{ user.birth_date }}</span>

                                            </div>

                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="user_info_item">
                                            <span>Туғилган жойи</span> <span>{{ user.birth_place }}</span>
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <!--                                        <editablefield title="Яшаш жойи"
                                                                                          :edit="edit"
                                                                                          v-model="user.per_adr"
                                                                                          rules="required"
                                                                                          class="user_info_item"
                                                                                >

                                                                                </editablefield>-->
                                        <editablefield title="Яшаш жойи"
                                                       v-model="user.per_adr"
                                                       rules="required"
                                                       class="user_info_item"
                                        />
                                    </v-col>
                                    <v-col cols="4">
                                        <editablefield title="Телефони"
                                                       v-model="user.phone"
                                                       rules="required"
                                                       class="user_info_item"
                                                       type="phone"/>
                                    </v-col>
                                    <v-col cols="4">
                                        <editablefield title="Қўшимча телефони"
                                                       v-model="user.add_phone"
                                                       rules="required"
                                                       class="user_info_item"
                                                       type="phone"/>
                                    </v-col>
                                    <v-col cols="4">
                                        <editablefield title="Электрон почтаси"
                                                       :edit="edit"
                                                       v-model="user.email"
                                                       rules="required"
                                                       class="user_info_item"
                                                       type="email"
                                        />
                                    </v-col>
                                    <v-col cols="4">
                                        <editablefield title="Мутахассислиги"
                                                       :edit="edit"
                                                       v-model="user_add.mutaxassisligi"
                                                       rules="required"
                                                       class="user_info_item"
                                        />
                                    </v-col>
                                    <!--                                    <v-col cols="4">
                                                                            <editablefield title="Мартаба даражаси"
                                                                                           :edit="edit"
                                                                                           v-model="user_add.martaba"
                                                                                           rules="required"
                                                                                           class="user_info_item"
                                                                            />

                                                                        </v-col>--><!--
                                    <v-col cols="4">
                                        <editablefield title="Партиявийлиги"
                                                       :edit="edit"
                                                       v-model="user_add.partiyaviylik"
                                                       rules="required"
                                                       class="user_info_item"
                                        />


                                    </v-col>-->
                                    <v-col cols="4">
                                        <editablefield title="Чет тиллари"
                                                       :edit="edit"
                                                       v-model="user_add.languages"
                                                       rules="required"
                                                       class="user_info_item"
                                                       fieldType="autocomplete"
                                                       :options="languages"
                                        />
                                    </v-col>
                                    <v-col cols="4">

                                        <editablefield title="Ҳужжат топшириш учун бошқармани белгиланг"
                                                       :edit="edit"
                                                       v-model="user_add.hudud"
                                                       rules="required"
                                                       class="user_info_item"
                                                       fieldType="autocomplete"
                                                       :options="regions"
                                                       :multiple="false"
                                        />
                                    </v-col>
                                    <!--                                    <v-col cols="4">
                                                                            <editablefield title="Илмий даража"
                                                                                           :edit="edit"
                                                                                           v-model="user_add.ilmiy_daraja"
                                                                                           rules="required"
                                                                                           class="user_info_item"
                                                                            />
                                                                        </v-col>--><!--
                                    <v-col cols="4">
                                        <editablefield title="Давлат мукофотлари"
                                                       :edit="edit"
                                                       v-model="user_add.mukofot"
                                                       rules="required"
                                                       class="user_info_item"
                                        />
                                    </v-col>-->
                                    <!--                                    <v-col cols="4">
                                                                            <div class="user_info_item">
                                                                                &lt;!&ndash;                                        <editablefield title="Миллати"
                                                                                                                                  v-model="user.natn"
                                                                                                                                  rules="required"
                                                                                                                                  class="user_info_item"
                                                                                                                        />&ndash;&gt;
                                                                                <span>{{ user.natn }}</span>
                                                                            </div>
                                                                        </v-col>-->
                                    <!--                                    <v-col cols="4">
                                                                            <editablefield title="Маълумоти"
                                                                                           :edit="edit"
                                                                                           v-model="user_add.malumoti"
                                                                                           rules="required"
                                                                                           class="user_info_item"
                                                                            />

                                                                        </v-col>-->
                                    <!--                                    <v-col cols="4">-->
                                    <!--                                        <editablefield title="Депутатлиги"-->
                                    <!--                                                       :edit="edit"-->
                                    <!--                                                       v-model="user_add.deputat"-->
                                    <!--                                                       rules="required"-->
                                    <!--                                                       class="user_info_item"-->
                                    <!--                                        />-->


                                    <!--                                    </v-col>-->
                                </v-row>
                                </ValidationObserver>

                            </div>

                            <div class="clearfix"></div>
                            <div class="tab_panel">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#education"
                                           role="tab"
                                           aria-controls="home" aria-selected="false">Таълим
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="cert-tab" data-toggle="tab" href="#cert" role="tab"
                                           aria-controls="profile" aria-selected="false">Сертификатлар
                                        </a>
                                    </li><!--
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#career" role="tab"
                                           aria-controls="profile" aria-selected="false">Мехнат фаолияти
                                        </a>
                                    </li>--><!--
                                <li class="nav-item">
                                    <a class="nav-link " id="message-tab" data-toggle="tab" href="#family"
                                       role="tab" aria-controls="message" aria-selected="true">Қариндошлар
                                    </a>
                                </li>-->
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade  active show" id="education" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <div class="training_courses_first">
                                            <h3 class="profile-print-tab-title">Таълим</h3>
                                            <div class="training_courses_table rm_last_col">
                                                <div class="table-responsive">
                                                    <v-simple-table class="table d-print-table ">
                                                        <thead>
                                                        <tr>
                                                            <th class="text-white" scope="col">Мамлакат</th>
                                                            <th class="text-white" scope="col">Тугатган ўқув муассасаси
                                                                номи
                                                            </th>
                                                            <th class="text-white" scope="col">Мутахассислик номи</th>
                                                            <th class="text-white" scope="col">Диплом рақами</th>
                                                            <th class="text-white" scope="col">Давр</th>
                                                            <th class="text-white" scope="col">Таълим даражаси</th>
                                                            <th class="text-white " style="width: 100px;" scope="col">
                                                                Амаллар
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <template
                                                            v-for="(user_malumot,key) in user_add.malumotlar">
                                                            <tr :key="key">
                                                                <th scope="col">
                                                                    {{ user_malumot.mamlakat }}

                                                                </th>
                                                                <th scope="col">{{ user_malumot.ooy }}</th>
                                                                <th scope="col">{{ user_malumot.mutaxassislik }}</th>
                                                                <th scope="col">{{ user_malumot.hujjatsanasi }}</th>
                                                                <th scope="col">{{ user_malumot.davr }}</th>
                                                                <th scope="col">{{ user_malumot.talim_darajasi }}</th>
                                                                <th scope="col" style="width: 150px;">

                                                                    <v-btn fab x-small color="primary"
                                                                           @click="openEditDialog(key)">
                                                                        <v-icon>mdi-pencil</v-icon>
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="red"
                                                                        fab
                                                                        x-small
                                                                        @click="openRemoveDialog(key)"

                                                                    >
                                                                        <v-icon>mdi-delete</v-icon>
                                                                    </v-btn>


                                                                    <!--                                                                <v-btn color="danger" fab x-small >
                                                                                                                                        <v-icon>mdi-delete</v-icon>
                                                                                                                                    </v-btn>-->
                                                                </th>
                                                            </tr>
                                                        </template>
                                                        <template v-if="user_add.malumotlar.length<1">
                                                            <tr>
                                                                <td colspan="8" align="center">Маълумот топилмади!</td>
                                                            </tr>
                                                        </template>
                                                        </tbody>
                                                    </v-simple-table>
                                                    <v-dialog
                                                        v-model="button.malumot"
                                                        persistent
                                                        max-width="600px"
                                                    >
                                                        <validation-observer ref="malumotForm" v-slot="{ invalid }">
                                                            <v-card ref="malumotForm">
                                                                <v-card-title>
                                                            <span
                                                                class="text-h5">Таълим тўғрисида</span>
                                                                </v-card-title>
                                                                <v-card-text>
                                                                    <v-container>
                                                                        <v-row>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Мамлакат"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Мамлакат"
                                                                                        required
                                                                                        v-model="editMalumot.mamlakat"
                                                                                        name="country"
                                                                                    >

                                                                                    </v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ўқув муассасаси"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Ўқув муассасаси"
                                                                                        required
                                                                                        v-model="editMalumot.ooy"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ўқиган йўналиш"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Ўқиган йўналиш"
                                                                                        required
                                                                                        v-model="editMalumot.mutaxassislik"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Диплом рақами"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Диплом рақами"
                                                                                        required
                                                                                        v-model="editMalumot.hujjatsanasi"
                                                                                    ></v-text-field>

                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Давр"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Давр"
                                                                                        required
                                                                                        v-model="editMalumot.davr"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>

                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Таълим даражаси"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-autocomplete
                                                                                        label="Таълим даражаси"
                                                                                        required
                                                                                        :items="[
                                                                                {value:'maktab', text:'Мактаб'},
                                                                                {value:'kollej', text:'Коллеж'},
                                                                                {value:'tehnikum', text:'Техникум'},
                                                                                {value:'litsey', text:'Лицей'},
                                                                                {value:'bakalavr', text:'Бакалавр'},
                                                                                {value:'magistr', text:'Магистр'},
                                                                                ]"
                                                                                        v-model="editMalumot.talim_darajasi"
                                                                                    ></v-autocomplete>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                        </v-row>
                                                                    </v-container>
                                                                    <!--                                                            <small>*indicates required field</small>-->
                                                                </v-card-text>
                                                                <v-card-actions>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="button.malumot = false"
                                                                    >
                                                                        Ёпиш
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="Save(editIndex)"
                                                                    >
                                                                        Сақлаш
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </validation-observer>
                                                    </v-dialog>
                                                    <v-dialog v-model="button.remove" width="500">


                                                        <v-card>
                                                            <v-card-title
                                                                class="headline grey lighten-2"
                                                                primary-title
                                                            >Тасдиқлаш
                                                            </v-card-title>

                                                            <v-card-text>
                                                                Ҳақиқатдан ҳам ўчирмоқчимисиз?
                                                            </v-card-text>

                                                            <v-divider></v-divider>

                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="primary"
                                                                    text
                                                                    @click="deleteItem(editIndex)"
                                                                >
                                                                    Тасдиқлайман
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                    <v-btn
                                                        color="primary"
                                                        @click="openAddDialog('malumot')"

                                                    >
                                                        Қўшиш
                                                    </v-btn>
                                                    <v-dialog
                                                        v-model="button.newMalumot"
                                                        persistent
                                                        max-width="600px"
                                                    >

                                                        <ValidationObserver ref="newMalumotForm" v-slot="{ invalid }">
                                                            <v-card>
                                                                <v-card-title>
                                                            <span
                                                                class="text-h5">Маълумоти тўғрисида</span>
                                                                </v-card-title>
                                                                <v-card-text>
                                                                    <v-container>
                                                                        <v-row>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Мамлакат"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Мамлакат"
                                                                                        required
                                                                                        v-model="newMalumot.mamlakat"
                                                                                        name="country"
                                                                                    >

                                                                                    </v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ўқув муассасаси"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Тугатган ўқув муассасаси"
                                                                                        required
                                                                                        name="newMalumotooy"
                                                                                        v-model="newMalumot.ooy"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ўқиган йўналиш"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Ўқиган йўналиши"
                                                                                        required
                                                                                        name="newMalumotmut"
                                                                                        v-model="newMalumot.mutaxassislik"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Диплом рақами"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Диплом рақами"
                                                                                        required
                                                                                        name="newMalumothujjatsanasi"
                                                                                        v-model="newMalumot.hujjatsanasi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Давр"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Ўқиган даври"
                                                                                        required
                                                                                        name="newMalumotdavr"
                                                                                        v-model="newMalumot.davr"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Таълим даражаси"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-autocomplete
                                                                                        label="Таълим даражаси"
                                                                                        required
                                                                                        name="newMalumottalim_darajasi"
                                                                                        :items="[
                                                                                {value:'maktab', text:'Мактаб'},
                                                                                {value:'kollej', text:'Коллеж'},
                                                                                {value:'tehnikum', text:'Техникум'},
                                                                                {value:'litsey', text:'Лицей'},
                                                                                {value:'bakalavr', text:'Бакалавр'},
                                                                                {value:'magistr', text:'Магистр'},
                                                                                ]"
                                                                                        v-model="newMalumot.talim_darajasi"
                                                                                    ></v-autocomplete>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>

                                                                        </v-row>
                                                                    </v-container>
                                                                    <!--                                                            <small>*indicates required field</small>-->
                                                                </v-card-text>
                                                                <v-card-actions>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="button.newMalumot = false"
                                                                    >
                                                                        Бекор қилиш
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="newSave()"
                                                                    >
                                                                        Сақлаш
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </ValidationObserver>
                                                    </v-dialog>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="cert" role="tabpanel" aria-labelledby="cert-tab">
                                        <div class="training_courses_first">
                                            <h3 class="profile-print-tab-title">Сертификатлар</h3>
                                            <div class="training_courses_table">
                                                <div class="table-responsive">
                                                    <v-simple-table class="table d-print-table">

                                                        <thead>
                                                        <tr>
                                                            <th scope="col" class="text-white">Ўқув маркази</th>
                                                            <th scope="col" class="text-white">Курс номи</th>
                                                            <th scope="col" class="text-white">Ҳужжат берилган сана</th>
                                                            <!--
                                                                                                                        <th scope="col" class="text-white">Ҳужжат</th>
                                                            -->
                                                            <th scope="col" class="text-white">Амал</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <template
                                                            v-for="(user_sertifikat,key) in user_add.sertifikatlar">
                                                            <tr :key="key">
                                                                <th scope="col">{{ user_sertifikat.oquv_markazi }}</th>
                                                                <th scope="col">{{ user_sertifikat.kurs_nomi }}</th>
                                                                <th scope="col">{{ user_sertifikat.hujjat_sanasi }}</th>
                                                                <!--                                                                <th scope="col">{{ user_sertifikat.hujjat }}</th>-->
                                                                <th scope="col" style="width: 150px;">

                                                                    <v-btn fab x-small color="primary"
                                                                           @click="openEditDialog(key,'sertifikat')">
                                                                        <v-icon>mdi-pencil</v-icon>
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="red"
                                                                        fab
                                                                        x-small
                                                                        @click="button.removeSertifikat=true"

                                                                    >
                                                                        <v-icon>mdi-delete</v-icon>
                                                                    </v-btn>


                                                                    <!--                                                                <v-btn color="danger" fab x-small >
                                                                                                                                        <v-icon>mdi-delete</v-icon>
                                                                                                                                    </v-btn>-->
                                                                </th>
                                                            </tr>
                                                        </template>
                                                        <template v-if="user_add.sertifikatlar.length<1">
                                                            <tr>
                                                                <td colspan="8" align="center">Маълумот топилмади!</td>
                                                            </tr>
                                                        </template>
                                                        </tbody>

                                                    </v-simple-table>
                                                    <v-dialog
                                                        v-model="button.sertifikat"
                                                        persistent
                                                        max-width="600px"
                                                    >
                                                        <validation-observer ref="sertificateForm" v-slot="{ invalid }">
                                                            <v-input hidden v-model="editIndex"></v-input>
                                                            <v-card>
                                                                <v-card-title>
                                                            <span
                                                                class="text-h5">Сертификатлари тўғрисида</span>
                                                                </v-card-title>
                                                                <v-card-text>
                                                                    <v-container>
                                                                        <v-row>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Тамомлаган ўқув маркази"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Тамомлаган ўқув маркази"
                                                                                        required
                                                                                        name="oquv_markazi"
                                                                                        v-model="editMalumot.oquv_markazi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Курс номи"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Курс номи"
                                                                                        required
                                                                                        v-model="editMalumot.kurs_nomi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Диплом берилган сана"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Диплом берилган сана"
                                                                                        required
                                                                                        v-model="editMalumot.hujjat_sanasi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ҳужжат"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-file-input
                                                                                        label="Хужжат"
                                                                                        required
                                                                                        v-model="editMalumot.hujjat"
                                                                                    ></v-file-input>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>


                                                                        </v-row>
                                                                    </v-container>
                                                                    <!--                                                            <small>*indicates required field</small>-->
                                                                </v-card-text>
                                                                <v-card-actions>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="button.sertifikat = false"
                                                                    >
                                                                        Бекор қилиш
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="Save(editIndex,'sertifikat')"
                                                                    >
                                                                        Сақлаш
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </validation-observer>
                                                    </v-dialog>
                                                    <v-dialog v-model="button.removeSertifikat" width="500">


                                                        <v-card>
                                                            <v-card-title
                                                                class="headline grey lighten-2"
                                                                primary-title
                                                            >Тасдиқлаш
                                                            </v-card-title>

                                                            <v-card-text>
                                                                Ҳақиқатдан ҳам ўчирмоқчимисиз?
                                                            </v-card-text>

                                                            <v-divider></v-divider>

                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="primary"
                                                                    text
                                                                    @click="deleteItem(editIndex,'sertifikat')"
                                                                >
                                                                    Тасдиқлайман
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                    <v-btn
                                                        color="primary"
                                                        @click="openAddDialog('sertifikat')"


                                                    >
                                                        Қўшиш
                                                    </v-btn>
                                                    <v-dialog
                                                        v-model="button.newSertifikat"
                                                        persistent
                                                        max-width="600px"

                                                    >
                                                        <validation-observer ref="newSertificateForm"
                                                                             v-slot="{ invalid }">
                                                            <v-card>
                                                                <v-card-title>
                                                            <span
                                                                class="text-h5">Маълумоти тўғрисида</span>
                                                                </v-card-title>
                                                                <v-card-text>
                                                                    <v-container>
                                                                        <v-row>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Тамомлаган ўқув маркази"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Тамомлаган ўқув маркази"
                                                                                        required
                                                                                        v-model="newMalumot.oquv_markazi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col
                                                                                cols="6"
                                                                            >
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Курс номи"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Курс номи"
                                                                                        required
                                                                                        v-model="newMalumot.kurs_nomi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <!--                                                                        <v-col
                                                                                                                                                        cols="6"
                                                                                                                                                    >
                                                                                                                                                        <v-text-field
                                                                                                                                                            label="Мутахассислик"
                                                                                                                                                            required
                                                                                                                                                            v-model="newMalumot.mutaxassislik"
                                                                                                                                                        ></v-text-field>
                                                                                                                                                    </v-col>-->
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Диплом берилган сана"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-text-field
                                                                                        label="Диплом берилган сана"
                                                                                        required
                                                                                        v-model="newMalumot.hujjat_sanasi"
                                                                                    ></v-text-field>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>
                                                                            <v-col cols="6">
                                                                                <ValidationProvider
                                                                                    v-slot="{ errors}"
                                                                                    name="Ҳужжат"
                                                                                    rules="required"
                                                                                >
                                                                                    <v-file-input
                                                                                        label="Ҳужжат"
                                                                                        required
                                                                                        v-model="newMalumot.hujjat"
                                                                                    ></v-file-input>
                                                                                    <span class="error--text">{{
                                                                                            errors[0]
                                                                                        }}</span>
                                                                                </ValidationProvider>
                                                                            </v-col>


                                                                        </v-row>
                                                                    </v-container>
                                                                    <!--                                                            <small>*indicates required field</small>-->
                                                                </v-card-text>
                                                                <v-card-actions>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="button.newSertifikat = false"
                                                                    >
                                                                        Бекор қилиш
                                                                    </v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="newSave('sertifikat')"
                                                                    >
                                                                        Сақлаш
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </validation-observer>
                                                    </v-dialog>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--                                    <div class="tab-pane fade" id="career" role="tabpanel"
                                                                             aria-labelledby="profile-tab">
                                                                            <div class="training_courses_first">
                                                                                <h3 class="profile-print-tab-title">МЕХНАТ ФАОЛИЯТИ</h3>
                                                                                <div class="training_courses_table">
                                                                                    <div class="table-responsive">


                                                                                        <v-simple-table class="table d-print-table">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th scope="col" class="text-white">Давр</th>
                                                                                                <th scope="col" class="text-white">Ташкилот</th>
                                                                                                <th scope="col" class="text-white">Ташкилот манзили</th>
                                                                                                <th scope="col" class="text-white">Амал</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <template
                                                                                                v-for="(user_mehnat,key) in user_add.mehnat_faoliyatlar">
                                                                                                <tr :key="key">
                                                                                                    <th scope="col">{{ user_mehnat.davr }}</th>
                                                                                                    <th scope="col">{{ user_mehnat.tashkilot }}</th>
                                                                                                    <th scope="col">{{ user_mehnat.tashkilot_adress }}</th>
                                                                                                    <th scope="col" style="width: 150px;">

                                                                                                        <v-btn fab x-small color="primary"
                                                                                                               @click="openEditDialog(key,'mehnat')">
                                                                                                            <v-icon>mdi-pencil</v-icon>
                                                                                                        </v-btn>
                                                                                                        <v-btn
                                                                                                            color="red"
                                                                                                            fab
                                                                                                            x-small
                                                                                                            @click="button.removeMehnat=true"
                                                                                                        >
                                                                                                            <v-icon>mdi-delete</v-icon>
                                                                                                        </v-btn>


                                                                                                        &lt;!&ndash;                                                                <v-btn color="danger" fab x-small >
                                                                                                                                                                            <v-icon>mdi-delete</v-icon>
                                                                                                                                                                        </v-btn>&ndash;&gt;
                                                                                                    </th>
                                                                                                </tr>
                                                                                            </template>
                                                                                            <template v-if="user_add.mehnat_faoliyatlar.length<1">
                                                                                                <tr>
                                                                                                    <td colspan="4" align="center">Маълумот топилмади!</td>
                                                                                                </tr>
                                                                                            </template>
                                                                                            </tbody>
                                                                                        </v-simple-table>
                                                                                        <v-dialog
                                                                                            v-model="button.mehnat"
                                                                                            persistent
                                                                                            max-width="600px"
                                                                                        >

                                                                                            <v-input hidden v-model="editIndex"></v-input>
                                                                                            <validation-observer ref="mehnatForm"  v-slot="{ invalid }">
                                                                                                <v-card>
                                                                                                    <v-card-title>
                                                                                                <span
                                                                                                    class="text-h5">Мехнат фаолияти тўғрисида</span>
                                                                                                    </v-card-title>
                                                                                                    <v-card-text>
                                                                                                        <v-container>
                                                                                                            <v-row>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <ValidationProvider
                                                                                                                        v-slot="{ errors}"
                                                                                                                        name="Ишлаган даври"
                                                                                                                        rules="required"
                                                                                                                    >
                                                                                                                        <v-text-field
                                                                                                                            label="Ишлаган даври"
                                                                                                                            required
                                                                                                                            name="editMalumotdavr"
                                                                                                                            v-model="editMalumot.davr"
                                                                                                                        ></v-text-field>
                                                                                                                        <span class="error&#45;&#45;text">{{
                                                                                                                                errors[0]
                                                                                                                            }}</span>
                                                                                                                    </ValidationProvider>
                                                                                                                </v-col>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <ValidationProvider
                                                                                                                        v-slot="{ errors}"
                                                                                                                        name="Ташкилот номи"
                                                                                                                        rules="required"
                                                                                                                    >
                                                                                                                        <v-text-field
                                                                                                                            label="Ташкилот номи"
                                                                                                                            required
                                                                                                                            v-model="editMalumot.tashkilot"
                                                                                                                        ></v-text-field>
                                                                                                                        <span class="error&#45;&#45;text">{{
                                                                                                                                errors[0]
                                                                                                                            }}</span>
                                                                                                                    </ValidationProvider>
                                                                                                                </v-col>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <ValidationProvider
                                                                                                                        v-slot="{ errors}"
                                                                                                                        name="Ташкилот манзили"
                                                                                                                        rules="required"
                                                                                                                    >
                                                                                                                        <v-text-field
                                                                                                                            label="Ташкилот манзили"
                                                                                                                            required
                                                                                                                            v-model="editMalumot.tashkilot_adress"
                                                                                                                        ></v-text-field>
                                                                                                                        <span class="error&#45;&#45;text">{{
                                                                                                                                errors[0]
                                                                                                                            }}</span>
                                                                                                                    </ValidationProvider>
                                                                                                                </v-col>

                                                                                                            </v-row>
                                                                                                        </v-container>
                                                                                                        &lt;!&ndash;                                                            <small>*indicates required field</small>&ndash;&gt;
                                                                                                    </v-card-text>
                                                                                                    <v-card-actions>
                                                                                                        <v-spacer></v-spacer>
                                                                                                        <v-btn
                                                                                                            color="blue darken-1"
                                                                                                            text
                                                                                                            @click="button.mehnat = false"
                                                                                                        >
                                                                                                            Бекор қилиш
                                                                                                        </v-btn>
                                                                                                        <v-btn
                                                                                                            color="blue darken-1"
                                                                                                            text
                                                                                                            @click="Save(editIndex,'mehnat')"
                                                                                                        >
                                                                                                            Сақлаш
                                                                                                        </v-btn>
                                                                                                    </v-card-actions>
                                                                                                </v-card>
                                                                                            </validation-observer>
                                                                                        </v-dialog>
                                                                                        <v-dialog v-model="button.removeMehnat" width="500">


                                                                                            <v-card>
                                                                                                <v-card-title
                                                                                                    class="headline grey lighten-2"
                                                                                                    primary-title
                                                                                                >Тасдиқлаш
                                                                                                </v-card-title>

                                                                                                <v-card-text>
                                                                                                    Ҳақиқатдан ҳам ўчирмоқчимисиз?
                                                                                                </v-card-text>

                                                                                                <v-divider></v-divider>

                                                                                                <v-card-actions>
                                                                                                    <v-spacer></v-spacer>
                                                                                                    <v-btn
                                                                                                        color="primary"
                                                                                                        text
                                                                                                        @click="deleteItem(editIndex,'mehnat')"
                                                                                                    >
                                                                                                        Тасдиқлайман
                                                                                                    </v-btn>
                                                                                                </v-card-actions>
                                                                                            </v-card>
                                                                                        </v-dialog>
                                                                                        <v-btn
                                                                                            color="primary"
                                                                                            @click="openAddDialog('mehnat')"
                                                                                        >
                                                                                            Қўшиш
                                                                                        </v-btn>
                                    &lt;!&ndash;                                                    <v-dialog
                                                                                            v-model="button.newMehnat"
                                                                                            persistent
                                                                                            max-width="600px"
                                                                                        >
                                                                                            <validation-observer ref="newMehnatForm"  v-slot="{ invalid }">
                                                                                                <v-card>
                                                                                                    <v-card-title>
                                                                                                <span
                                                                                                    class="text-h5">Меҳнат фаолияти тўғрисида</span>
                                                                                                    </v-card-title>
                                                                                                    <v-card-text>
                                                                                                        <v-container>
                                                                                                            <v-row>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <ValidationProvider
                                                                                                                        v-slot="{ errors}"
                                                                                                                        name="Ишлаган даври"
                                                                                                                        rules="required"
                                                                                                                    >
                                                                                                                        <v-text-field
                                                                                                                            label="Ишлаган даври"
                                                                                                                            required
                                                                                                                            name="newMalumotishlagandavr"
                                                                                                                            v-model="newMalumot.davr"
                                                                                                                        ></v-text-field>
                                                                                                                        <span class="error&#45;&#45;text">{{
                                                                                                                                errors[0]
                                                                                                                            }}</span>
                                                                                                                    </ValidationProvider>
                                                                                                                </v-col>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <v-text-field
                                                                                                                        label="Ташкилот"
                                                                                                                        required
                                                                                                                        v-model="newMalumot.tashkilot"
                                                                                                                    ></v-text-field>
                                                                                                                </v-col>
                                                                                                                <v-col
                                                                                                                    cols="6"
                                                                                                                >
                                                                                                                    <ValidationProvider
                                                                                                                        v-slot="{ errors}"
                                                                                                                        name="Ташкилот манзили"
                                                                                                                        rules="required"
                                                                                                                    >
                                                                                                                        <v-text-field
                                                                                                                            label="Ташкилот манзили"
                                                                                                                            required
                                                                                                                            v-model="newMalumot.tashkilot_adress"
                                                                                                                        ></v-text-field>
                                                                                                                        <span class="error&#45;&#45;text">{{
                                                                                                                                errors[0]
                                                                                                                            }}</span>
                                                                                                                    </ValidationProvider>
                                                                                                                </v-col>
                                                                                                            </v-row>
                                                                                                        </v-container>
                                                                                                        &lt;!&ndash;                                                            <small>*indicates required field</small>&ndash;&gt;
                                                                                                    </v-card-text>
                                                                                                    <v-card-actions>
                                                                                                        <v-spacer></v-spacer>
                                                                                                        <v-btn
                                                                                                            color="blue darken-1"
                                                                                                            text
                                                                                                            @click="button.newMehnat = false"
                                                                                                        >
                                                                                                            Бекор қилиш
                                                                                                        </v-btn>
                                                                                                        <v-btn
                                                                                                            color="blue darken-1"
                                                                                                            text
                                                                                                            @click="newSave('mehnat')"
                                                                                                        >
                                                                                                            Сақлаш
                                                                                                        </v-btn>
                                                                                                    </v-card-actions>
                                                                                                </v-card>
                                                                                            </validation-observer>
                                                                                        </v-dialog>&ndash;&gt;
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>-->
                                    <!--                                <div class="tab-pane fade" id="family" role="tabpanel"
                                                                         aria-labelledby="message-tab">
                                                                        <div class="training_courses_first">
                                                                            <h3 class="profile-print-tab-title">ҚАРИНДОШЛАР</h3>
                                                                            <div class="training_courses_table rm_last_col">
                                                                                <div class="table-responsive">
                                                                                    <v-simple-table class="table d-print-table">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th scope="col" class="text-white">Қариндошлиги</th>
                                                                                            <th scope="col" class="text-white">Фамилияси, исми, шарифи</th>
                                                                                            <th scope="col" class="text-white">Туғилган йили</th>
                                                                                            <th scope="col" class="text-white">Туғилган жойи</th>
                                                                                            <th scope="col" class="text-white">Иш жойи ва лавозими</th>
                                                                                            <th scope="col" class="text-white">Яшаш манзили</th>

                                                                                            <th scope="col" class="text-white">Амал</th>

                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <template
                                                                                            v-for="(user_qarindosh,key) in user_add.qarindoshlar">
                                                                                            <tr :key="key">
                                                                                                <th scope="col">{{ user_qarindosh.qarindoshligi }}</th>
                                                                                                <th scope="col">{{ user_qarindosh.fio }}</th>
                                                                                                <th scope="col">{{ user_qarindosh.tug_yili }}</th>
                                                                                                <th scope="col">{{ user_qarindosh.tug_joyi }}</th>
                                                                                                <th scope="col">{{ user_qarindosh.ish }}</th>
                                                                                                <th scope="col">{{ user_qarindosh.yashash_manzili }}</th>
                                                                                                <th scope="col" style="width: 150px;">

                                                                                                    <v-btn fab x-small color="primary"
                                                                                                           @click="openEditDialog(key,'qarindosh')">
                                                                                                        <v-icon>mdi-pencil</v-icon>
                                                                                                    </v-btn>
                                                                                                    <v-btn
                                                                                                        color="red"
                                                                                                        fab
                                                                                                        x-small
                                                                                                        @click="button.removeQarindosh=true"
                                                                                                    >
                                                                                                        <v-icon>mdi-delete</v-icon>
                                                                                                    </v-btn>


                                                                                                    &lt;!&ndash;                                                                <v-btn color="danger" fab x-small >
                                                                                                                                                                        <v-icon>mdi-delete</v-icon>
                                                                                                                                                                    </v-btn>&ndash;&gt;
                                                                                                </th>
                                                                                            </tr>
                                                                                        </template>
                                                                                        <template v-if="user_add.qarindoshlar.length<1">
                                                                                            <tr>
                                                                                                <td colspan="8" align="center">Маълумот топилмади!</td>
                                                                                            </tr>
                                                                                        </template>
                                                                                        </tbody>
                                                                                    </v-simple-table>
                                                                                    <v-dialog
                                                                                        v-model="button.qarindosh"
                                                                                        persistent
                                                                                        max-width="600px"
                                                                                    >
                                                                                        <v-input hidden v-model="editIndex"></v-input>
                                                                                        <v-card>
                                                                                            <v-card-title>
                                                                                                <span
                                                                                                    class="text-h5">Қариндошлари тўғрисида</span>
                                                                                            </v-card-title>
                                                                                            <v-card-text>
                                                                                                <v-container>
                                                                                                    <v-row>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                    &lt;!&ndash;                                                                        <v-text-field
                                                                                                                label="Қариндошлиги"
                                                                                                                required

                                                                                                            ></v-text-field>&ndash;&gt;
                                                                                                            <v-autocomplete
                                                                                                            required
                                                                                                            label="Қариндошлиги"
                                                                                                            v-model="editMalumot.qarindoshligi"
                                                                                                            :items="qarindoshligi"
                                                                                                            >
                                                                                                            </v-autocomplete>
                                                                                                        </v-col>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                                                                                            <v-text-field
                                                                                                                label="Фамилияси, исми, шарифи"
                                                                                                                required
                                                                                                                v-model="editMalumot.fio"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                                                                                            <v-text-field
                                                                                                                label="Туғилган йили"
                                                                                                                required
                                                                                                                v-model="editMalumot.tug_yili"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Туғилган жойи"
                                                                                                                required
                                                                                                                v-model="editMalumot.tug_joyi"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Иш жойи ва лавозими"
                                                                                                                required
                                                                                                                v-model="editMalumot.ish"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Яшаш манзили"
                                                                                                                required
                                                                                                                v-model="editMalumot.yashash_manzili"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>


                                                                                                    </v-row>
                                                                                                </v-container>
                                                                                                &lt;!&ndash;                                                            <small>*indicates required field</small>&ndash;&gt;
                                                                                            </v-card-text>
                                                                                            <v-card-actions>
                                                                                                <v-spacer></v-spacer>
                                                                                                <v-btn
                                                                                                    color="blue darken-1"
                                                                                                    text
                                                                                                    @click="button.qarindosh = false"
                                                                                                >
                                                                                                    Бекор қилиш
                                                                                                </v-btn>
                                                                                                <v-btn
                                                                                                    color="blue darken-1"
                                                                                                    text
                                                                                                    @click="Save(editIndex,'qarindosh')"
                                                                                                >
                                                                                                    Сақлаш
                                                                                                </v-btn>
                                                                                            </v-card-actions>
                                                                                        </v-card>
                                                                                    </v-dialog>
                                                                                    <v-dialog v-model="button.removeQarindosh" width="500">


                                                                                        <v-card>
                                                                                            <v-card-title
                                                                                                class="headline grey lighten-2"
                                                                                                primary-title
                                                                                            >Тасдиқлаш
                                                                                            </v-card-title>

                                                                                            <v-card-text>
                                                                                                Ҳақиқатдан ҳам ўчирмоқчимисиз?
                                                                                            </v-card-text>

                                                                                            <v-divider></v-divider>

                                                                                            <v-card-actions>
                                                                                                <v-spacer></v-spacer>
                                                                                                <v-btn
                                                                                                    color="primary"
                                                                                                    text
                                                                                                    @click="deleteItem(editIndex,'qarindosh')"
                                                                                                >
                                                                                                    Тасдиқлайман
                                                                                                </v-btn>
                                                                                            </v-card-actions>
                                                                                        </v-card>
                                                                                    </v-dialog>
                                                                                    <v-dialog
                                                                                        v-model="button.newQarindosh"
                                                                                        persistent
                                                                                        max-width="600px"
                                                                                    >
                                                                                        <template v-slot:activator="{ on, attrs }">
                                                                                            <v-btn
                                                                                                color="primary"
                                                                                                v-bind="attrs"
                                                                                                v-on="on"

                                                                                            >
                                                                                                Қўшиш
                                                                                            </v-btn>
                                                                                        </template>
                                                                                        <v-card>
                                                                                            <v-card-title>
                                                                                                <span
                                                                                                    class="text-h5">Қариндошлари тўғрисида</span>
                                                                                            </v-card-title>
                                                                                            <v-card-text>
                                                                                                <v-container>
                                                                                                    <v-row>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                    &lt;!&ndash;                                                                        <v-text-field
                                                                                                                label="Қариндошлиги"
                                                                                                                required
                                                                                                                v-model="newMalumot.qarindoshligi"
                                                                                                            ></v-text-field>&ndash;&gt;
                                                                                                            <v-autocomplete
                                                                                                                required
                                                                                                                label="Қариндошлиги"
                                                                                                                v-model="newMalumot.qarindoshligi"
                                                                                                                :items="qarindoshligi"
                                                                                                            >
                                                                                                            </v-autocomplete>
                                                                                                        </v-col>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                                                                                            <v-text-field
                                                                                                                label="Фамилияси, исми, шарифи"
                                                                                                                required
                                                                                                                v-model="newMalumot.fio"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col
                                                                                                            cols="6"
                                                                                                        >
                                                                                                            <v-text-field
                                                                                                                label="Туғилган йили"
                                                                                                                required
                                                                                                                v-model="newMalumot.tug_yili"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Туғилган жойи"
                                                                                                                required
                                                                                                                v-model="newMalumot.tug_joyi"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Иш жойи ва лавозими"
                                                                                                                required
                                                                                                                v-model="newMalumot.ish"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>
                                                                                                        <v-col cols="6">
                                                                                                            <v-text-field
                                                                                                                label="Яшаш манзили"
                                                                                                                required
                                                                                                                v-model="newMalumot.yashash_manzili"
                                                                                                            ></v-text-field>
                                                                                                        </v-col>


                                                                                                    </v-row>
                                                                                                </v-container>
                                                                                                &lt;!&ndash;                                                            <small>*indicates required field</small>&ndash;&gt;
                                                                                            </v-card-text>
                                                                                            <v-card-actions>
                                                                                                <v-spacer></v-spacer>
                                                                                                <v-btn
                                                                                                    color="blue darken-1"
                                                                                                    text
                                                                                                    @click="button.newQarindosh = false"
                                                                                                >
                                                                                                    Бекор қилиш
                                                                                                </v-btn>
                                                                                                <v-btn
                                                                                                    color="blue darken-1"
                                                                                                    text
                                                                                                    @click="newSave('qarindosh')"
                                                                                                >
                                                                                                    Сақлаш
                                                                                                </v-btn>
                                                                                            </v-card-actions>
                                                                                        </v-card>
                                                                                    </v-dialog>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>-->
                                </div>
                            </div>
                        </section>


                </section>
            </v-container>


        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/uz.json';
import MyField from '../../../../components/form/myfield.vue';
import {useToast} from "vue-toastification";
import Editablefield from "../../../../components/form/editablefield";
import Info from './info';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
export default {
    name: "InitialVacancy",

    data() {
        return {
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
                    text: 'Вакансиялар',
                    to: '/services/vacancy',
                    disabled: false,
                    exact: true,
                },

            ],
            user: {
                birth_date: null,
                birth_place: null,
                ctzn: null,
                mid_name: null,
                first_name: null,
                sur_name: null,
                name: null,
                natn: null,
                per_adr: null,
                pin: null,
                pport_no: null,
                tin: null,
                _pport_expr_date: null,
                _pport_issue_date: null,

            },
            user_add: {
                malumotlar: [],
                malumoti: "",
                deputat: "",
                sertifikatlar: [],
                mehnat_faoliyatlar: [],
                qarindoshlar: [],
                mutaxassisligi: "",
                partiyaviylik: "",
                martaba: "",
                ilmiy_daraja: "",
                mukofot: "",
                hudud: null,
                languages: ['ingliz', 'rus']
            },
            regions: [],
            newMalumot: [],
            editMalumot: [],
            newMehnat: [],
            dialogTilxat: false,
            AcceptToOferta: false,
            newQarindoshlar: [],
            button: {
                remove: false,
                removeSertifikat: false,
                malumot: false,
                newMalumot: false,
                sertifikat: false,
                newSertifikat: false,
                newMehnat: false,
                mehnat: false,
                removeMehnat: false,
                removeQarindosh: false,
                newQarindosh: false,
                qarindosh: false
            },
            qarindoshligi: [
                {text: "Отаси", value: "otasi"},
                {text: "Онаси", value: "onasi"},
                {text: "Акаси", value: "akasi"},
                {text: "Укаси", value: "ukasi"},
                {text: "Опаси", value: "opasi"},
                {text: "Синглиси", value: "singlisi"},
                {text: "Турмуш ўртоғи", value: "turmushortogi"},
                {text: "Ўғли", value: "ogli"},
                {text: "Қизи", value: "qizi"},
                {text: "Турмуш ўртоғининг отаси", value: "turmushortogiotasi"},
                {text: "Турмуш ўртоғининг онаси", value: "turmushortogionasi"},
                {text: "Турмуш ўртоғининг акаси", value: "turmushortogiakasi"},
                {text: "Турмуш ўртоғининг укаси", value: "turmushortogiukasi"},
                {text: "Турмуш ўртоғининг опаси", value: "turmushortogiopasi"},
                {text: "Турмуш ўртоғининг синглиси", value: "turmushortogisinglisi"},
            ],
            languages: [{
                text: "Инглиз тили",
                value: 'ingliz',
            }, {
                text: "Рус тили",
                value: "rus",
            }, {
                text: "Немис тили",
                value: "nemis",
            }
            ],
            editButton: "Таҳрирлаш",
            editIndex: null,
            edit: false,
            menu_date_birth: null,
            activePicker: null,
            countries: [],
            vacancy: null,
            vacancy_send: false,
            resumeLoading:false,
            //vacancy_resume:[],
            vacancy_resume: {
                id: 1111,
                user: this.$auth.user(),
                text: 1111
            },
        }
    },
    mounted() {
        this.user = this.$auth.user();

        this.getCountries();
    },
    computed: {
        userLanguageValues: function () {
            if (!this.user_add.languages || this.user_add.languages.count < 1) return null;
            let myapp = this;
            const languageValues = [];
            myapp.languages.forEach(function (languageItem) {
                Object.values(myapp.user_add.languages).forEach(function (userLanguage) {
                    if (languageItem.value === userLanguage) languageValues.push(languageItem.text);
                })

            })
            return languageValues;
        },

    },
    /* created() {
         if (this.$route.query.code) {
             this.auth();
         } else if (!this.$auth.check()) {
             this.$router.push('/login')
         }
     },*/
    async created() {
        this.getBoshqarmalar()
        this.getVacancy()

        this.user = this.$auth.user();
        if (this.$route.query.code) {
            this.auth();
        } else {
            if (this.user == null) {
                this.$router.push('/login')
            }
        }

        //await this.getVacancy()
    },
    watch: {
        menu_date_birth(val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    },
    methods: {
        async getBoshqarmalar() {
            const _this = this
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {

                result.data.data.forEach(function (item) {
                    if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                        _this.regions.push({
                            'value': item['kod_id'],
                            'text': (item['name']).replace("Ўзбекистон Республикаси Давлат божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Давлат божхона қўмитасининг ").length)
                        })
                })
            })
        },
        selectedCountry: function (countryvalue) {
            let returnValue = '';
            this.countries.map((country) => {
                if (country.value === countryvalue) {
                    returnValue = country.text
                }
            })
            return returnValue;

        },
        openEditDialog(key, mytype = "malumot") {
            if (key < 1 && key !== 0) return;
            this.editIndex = key;
            this.newMalumot = [];
            this.editMalumot = [];
            const app = this;
            switch (mytype) {
                case "malumot":
                    this.button.malumot = true;
                    Object.keys(this.user_add.malumotlar[key]).map(function (keyItem) {
                        app.editMalumot[keyItem] = app.user_add.malumotlar[key][keyItem];
                    });
                    break;
                case "sertifikat":
                    this.button.sertifikat = true;
                    Object.keys(this.user_add.sertifikatlar[key]).map(function (keyItem) {
                        app.editMalumot[keyItem] = app.user_add.sertifikatlar[key][keyItem];
                    });
                    break;
                case "mehnat":
                    this.button.mehnat = true;
                    Object.keys(this.user_add.mehnat_faoliyatlar[key]).map(function (keyItem) {
                        app.editMalumot[keyItem] = app.user_add.mehnat_faoliyatlar[key][keyItem];
                    });
                    break;
                case "qarindosh":
                    this.button.qarindosh = true;
                    Object.keys(this.user_add.qarindoshlar[key]).map(function (keyItem) {
                        app.editMalumot[keyItem] = app.user_add.qarindoshlar[key][keyItem];
                    });
                    break;
            }
        },
        openAddDialog(mytype = "malumot") {
            if (this.$refs['newMalumotForm']) this.$refs['newMalumotForm'].reset();
            if (this.$refs['newSertificateForm']) this.$refs['newSertificateForm'].reset();
            if (this.$refs['newMehnatForm']) this.$refs['newMehnatForm'].reset();
            this.newMalumot = [];
            this.editMalumot = [];
            const app = this;
            switch (mytype) {
                case "malumot":
                    this.button.newMalumot = true;
                    break;
                case "sertifikat":
                    this.button.newSertifikat = true;
                    break;
                case "mehnat":
                    this.button.newMehnat = true;
                    break;
                case "qarindosh":
                    this.button.newQarindosh = true;
                    break;
            }
        },
        openRemoveDialog(key, mytype = "malumot") {
            if (key < 1 && key !== 0) return;
            this.editIndex = key;
            switch (mytype) {
                case "malumot":
                    this.button.remove = true;
                    break;
                case "sertifikat":
                    this.button.removeSertifikat = true;
                    break;
                case "mehnat":
                    this.button.removeMehnat = true;
                    break;
                case "qarindosh":
                    this.button.removeQarindosh = true;
                    break;
            }
        },
        async newSave(mytype = "malumot") {
            let isValid = false;
            const data = this.newMalumot;
            switch (mytype) {
                case "malumot":
                    isValid = await this.validateField('newMalumotForm')
                    if (isValid) {
                        this.user_add.malumotlar.push(data);
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.newMalumot = false;
                    }
                    break;
                case "sertifikat":
                    isValid = await this.validateField('newSertificateForm')
                    if (isValid) {
                        this.user_add.sertifikatlar.push(data);
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.newSertifikat = false;
                    }
                    break;
                case "mehnat":
                    isValid = await this.validateField('newMehnatForm')
                    if (isValid) {
                        this.user_add.mehnat_faoliyatlar.push(data);
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.newMehnat = false;
                    }
                    break;
                case "qarindosh":
                    this.user_add.qarindoshlar.push(this.newMalumot);
                    this.button.newQarindosh = false;
                    break;
            }
            if (isValid)
                this.newMalumot = [];
        },
        async Save(key, mytype = "malumot") {
            let isValid = false;
            switch (mytype) {
                case "malumot":
                    isValid = await this.validateField('malumotForm')
                    if (isValid) {
                        this.user_add.malumotlar[key] = this.editMalumot;
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.malumot = false;
                    }
                    break;
                case "sertifikat":
                    isValid = await this.validateField('sertificateForm')
                    if (isValid) {
                        this.user_add.sertifikatlar[key] = this.editMalumot;
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.sertifikat = false;
                    }
                    break;
                case "mehnat":
                    isValid = await this.validateField('mehnatForm')
                    if (isValid) {
                        this.user_add.mehnat_faoliyatlar[key] = this.editMalumot;
                        //console.log(this.user_add)
                        //let result = Object.keys(this.newMalumot).map((key) => [key=>this.newMalumot[key]]);
                        //this.user_add.malumotlar.push(result);
                        this.button.mehnat = false;
                    }
                    break;
                case "qarindosh":
                    this.user_add.qarindoshlar[key] = this.editMalumot;
                    this.button.qarindosh = false;
                    break;
            }
            if (isValid)
                this.editMalumot = [];
        },
        deleteItem(key, mytype = "malumot") {
            switch (mytype) {
                case "malumot":
                    this.user_add.malumotlar.splice(key, 1);
                    this.button.remove = false;
                    break;
                case "sertifikat":
                    this.user_add.sertifikatlar.splice(key, 1);
                    this.button.removeSertifikat = false;
                    break;
                case "mehnat":
                    this.user_add.mehnat_faoliyatlar.splice(key, 1);
                    this.button.removeMehnat = false;
                    break;
                case "qarindosh":
                    this.user_add.qarindoshlar.splice(key, 1);
                    this.button.removeQarindosh = false;
                    break;
            }
        },
        validateField(field) {
            let provider = this.$refs[field];
            if (Array.isArray(provider)) provider = provider[0];
            // Validate the field
            if (provider) return provider.validate();
        },
        async resetvalidationField(field) {
            let provider = this.$refs[field];
            if (Array.isArray(provider)) provider = provider[0];
            // Validate the field
            if (provider) return await provider.reset();
        },
        clickedAccept(){
            this.AcceptToOferta=true;
            this.dialogTilxat=false;
            this.sendResume();
        },
        sendResume() {


            this.resumeLoading=true;
            setTimeout(async ()=>
            {
                let isValid = true;
                isValid = await this.validateField("vacancy_application");

            if (!isValid) {
                this.edit = true;
                this.$toast.error(`Юборилаётган маълумотларда хатоликларни тўғрилаб кейин жўнатинг!`)
                return ;
            }
            //if (this.validateField("vacancy_application"))
/*                console.log(this.$refs['newMalumotForm'])
                console.log(this.$refs['MalumotForm'])
                let isValid1 = await this.validateField("newMalumotForm");
                let isValid2 = await this.validateField("MalumotForm");*/
                if (this.user_add.malumotlar.length < 1 ) {
                    this.$toast.error(`Таълим тўғрисидаги маълумотлар киритилмади!`)
                    return ;
                }
                if (!this.AcceptToOferta) {
                    this.dialogTilxat = true;
                    return ;
                }
                const _app = this;
                _app.vacancy_resume['user'] = this.user;
                _app.vacancy_resume['user_add'] = this.user_add;
                _app.vacancy_resume['vacancy'] = this.vacancy;
                const form = new FormData();
                form.append('pnfl', this.user.pin);
                form.append('vakant_id', this.$route.params.id);
                form.append('name', this.user.first_name + ' ' + this.user.sur_name + ' ' + this.user.mid_name);
                form.append('tug_sana', this.user.birth_date);
                form.append('telefon', this.user.phone);
                form.append('add_phone', this.user.add_phone);
                form.append('manzil', this.user.per_adr);
                form.append('email', this.user.email);
                form.append('mutaxasislik', this.user_add.mutaxassisligi);
                form.append('martaba', "----");
                form.append('partiya', this.user_add.partiyaviylik);
                form.append('chet_tili', this.user_add.languages.join(','));
                form.append('ilmiy_daraja', this.user_add.ilmiy_daraja);
                form.append('mukofot', this.user_add.mukofot);
                form.append('millati', this.user.natn);
                form.append('xudud', this.user_add.hudud);
                form.append('malimoti', "----");
                form.append('isdeputat', this.user_add.deputat);
                form.append('rasm', 'https://new.customs.uz/public/images/users/' + this.user.id + '.jpg');

                //mydata.malumoti.push(this.user_add.malumotlar);

                Object.entries(this.user_add.malumotlar).forEach(([valkey, v]) => {
                    Object.entries(v).forEach(([itemkey, item]) => {
                        switch (itemkey) {
                            case 'mamlakat':
                                form.append(`malumoti[${valkey}][mamlakat]`, `${item}`)
                                break;
                            case 'ooy':
                                form.append(`malumoti[${valkey}][muassa]`, `${item}`)
                                break;
                            case 'mutaxassislik':
                                form.append(`malumoti[${valkey}][mutaxasislik]`, `${item}`)
                                break;
                            case 'hujjatsanasi':
                                form.append(`malumoti[${valkey}][diplom_raqam]`, `${item}`)
                                break;
                            case 'davr':
                                form.append(`malumoti[${valkey}][davri]`, `${item}`)
                                break;
                            case 'talim_darajasi':
                                form.append(`malumoti[${valkey}][talim_daraja]`, `${item}`)
                                break;
                            default :
                                form.append(`malumoti[${valkey}][${valkey}]`, `${item}`)
                                break
                        }

                    });
                });
                Object.entries(this.user_add.sertifikatlar).forEach(([valkey, v]) => {
                    Object.entries(v).forEach(([itemkey, item]) => {
                        switch (itemkey) {
                            case 'oquv_markazi':
                                form.append(`sertifikat[${valkey}][uquv_muassa]`, `${item}`)
                                break;
                            case 'kurs_nomi':
                                form.append(`sertifikat[${valkey}][kurs_name]`, `${item}`)
                                break;
                            case 'hujjat':
                                form.append(`sertifikat[${valkey}][doc]`, `${item}`)
                                break;
                            case 'hujjat_sanasi':
                                form.append(`sertifikat[${valkey}][doc_date]`, `${item}`)
                                break;
                        }

                    });
                });
                /*Object.entries(this.user_add.mehnat_faoliyatlar).forEach(([valkey, v]) => {
                    Object.entries(v).forEach(([itemkey, item]) => {
                        switch (itemkey) {
                            case 'tashkilot':
                                form.append(`mehnat[${valkey}][tashkilot]`, `${item}`)
                                break;
                            case 'davr':
                                form.append(`mehnat[${valkey}][davr]`, `${item}`)
                                break;
                            case 'tashkilot_adress':
                                form.append(`mehnat[${valkey}][tashkilot_address]`, `${item}`)
                                break;
                        }

                    });
                });*/


                setTimeout(async () => {
                    await axios.post("/api/v1/ex_api/resume", form).then(function (response) {

                        if (response.data.data.success === true || response.data.data.succes === true) {
                            _app.vacancy_send = true;
                            _app.vacancy_resume.kod = response.data.data.data.kod;
                            _app.$toast.success(`Сизнинг маълумотларингиз юборилди!`);
                        } else {
                            if (!this.user_add.malumotlar) {
                                _app.$toast.error(`Аризачининг таълим тўғрисидаги маълумотлари кўрсатилмади!`);
                                return;
                            }
                            if (Object.keys(response.data.data.messages).length > 0) {
                                Object.entries(response.data.data.messages).map((item) => {
                                    if (item[0] === 'malimoti') _app.$toast.error(`Аризачининг таълим тўғрисидаги маълумотлари кўрсатилмади!`);
                                })
                            } else console.log(response.data)
                        }
                    }).catch(async (error) => {
                        console.log(error)
                        if (error.response.data.data.success === true || error.response.data.data.succes === true) {
                            _app.vacancy_send = true;
                            _app.$toast.success(`Сизнинг маълумотларингиз юборилди!`);
                        } else {
                            if (this.user_add.malumotlar.length < 1) {
                                _app.$toast.error(`Аризачининг таълим тўғрисидаги маълумотлари кўрсатилмади!`);
                                return;
                            }

                            if (Object.keys(error.response.data.data.messages).length > 0) {
                                Object.entries(error.response.data.data.messages).map((item) => {
                                    if (item[0] === 'malimoti') _app.$toast.error(`Аризачининг таълим тўғрисидаги маълумотлари кўрсатилмади!`);
                                })
                            } else console.log(error.response.data)
                        }
                    });
                });
            })
            this.resumeLoading=false;

            /*
                        this.$router.push({
                            path:'show?result=1',
                            params:{result:1},
                        }).catch(() => {
                            return {result:1}
                        });*/
        },
        save(date) {
            this.$refs.menu_date_birth.save(date)
        },
        auth() {
            var redirect = this.$auth.redirect()
            var app = this;

            this.$auth.login({
                data: {
                    code: app.$route.query.code
                },
                success: function () {
                    // handle redirection
                    app.user = app.$auth.user();
                    //console.log(app.user);

                    this.$router.push('/profile')
                },
                error: function () {
                    app.has_error = true
                    app.error = res.error
                },
                redirect: app.$route.path,
                //rememberMe: true,
                fetchUser: true
            }).then((res) => {
                app.has_error = true
                app.error = res.error
            }).catch((err) => {
                app.has_error = true
                app.error = 'login_error'
            })

        },
        getCountries() {
            const _app = this;
            axios.get('/api/v1/data/country?lang=ru').then(function (response) {
                let countries = response.data;
                countries.forEach(function (country) {
                    _app.countries.push({
                        text: country.CD_NM,
                        value: country.CD_ID
                    })
                })
            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик юз берди!`);
            })
        },/*
        clickEdit() {
            if (this.edit) {
                this.resetvalidationField("vacancy_application");
                this.$toast.success(`Сизнинг маълумотларингиз сақланди!`);
            }
            this.edit = !this.edit;
        },*/
        async getVacancy() {
            if (!(this.$route.params.id > 0)) this.$router.back();
            const _app = this;
            await axios.get("/api/v1/ex_api/vacancy-show?vacancy=" + this.$route.params.id).then(function (response) {
                if (response.status === 200) {
                    _app.vacancy = response.data.data.vakant;
                    if(_app.vacancy.applied===true) _app.$router.push('/services/vacancy/'+_app.vacancy.id);
                    _app.breadcrumb_items.push(
                        {
                            text: _app.vacancy.seven,
                            to: '/services/vacancy/' + _app.vacancy.id,
                            disabled: false,
                            exact: true,
                        }, {
                            text: 'Резюме',
                            to: '/services/vacancy/resume',
                            disabled: true,
                            exact: true,
                        }
                    )
                }

            })
        }
    },
    components: {
        Editablefield,
        ValidationProvider,
        ValidationObserver,
        MyField,
        Info
    }


}


</script>
<style lang="css">

@import "/public/css/mix/vacancy.css";
</style>
