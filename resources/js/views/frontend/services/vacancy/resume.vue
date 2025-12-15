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
            <v-container class="111" v-if="vacancy_send">
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
                                <img :src="user_image" alt="Фойдаланувчи сурати">
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
                                                       editable
                                                       :placeholder="user.per_adr"
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
                                                            <td colspan="8" class="text-center">Маълумот топилмади!</td>
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
                                                                            </ValidationProvider>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                            </v-card-text>
                                                        </v-card>
                                                    </validation-observer>
                                                </v-dialog>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </v-container>
        </div>
    </div>
</template>
