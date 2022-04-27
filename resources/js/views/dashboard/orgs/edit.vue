<template>
    <v-container
        class="menu-main"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <div class="dashboardbreadcrumb">
                <v-container>
                    <v-breadcrumbs :items="breadcrumb_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-container>
            </div>
            <v-col
                cols="12"
                md="12"
                v-if="organization"
            >
                <v-container>
                    <v-row>
                        <h3>{{ organization.title }}</h3>
                    </v-row>
                </v-container>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <ValidationObserver ref="organizationForm" v-slot="{ invalid }">
                            <v-form>

                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <my-field
                                                    title="Бошқарма номи"
                                                    v-model="organization.title"
                                                    edit="true"
                                                    name="org_title"
                                                    rules="required|min:3"/>

                                            </v-col>
                                            <!--                                            <v-col cols="6" sm="6" md="6">
                                                                                            <v-switch v-model="organization.status"  :label="organization.status==1?'Фойдаланувчига кўрсатмаслик учун босинг!':'Фойдаланувчига кўрсатиш учун босинг!'" ></v-switch>
                                                                                        </v-col>-->
                                            <v-col cols="12"></v-col>
                                            <h4 style="color:#39ae69; font-weight: bold">Бошқарма бошлиғи </h4>
                                            <br/>
                                            <v-col cols="12">

                                            </v-col>
                                            <v-col cols="3">
                                                <my-field
                                                    title="Бошқарма бошлиғи исми фамилияси исми шарифи"
                                                    v-model="rahbariyat.boshliq.name"
                                                    edit="true"
                                                    name="boshliq_name"
                                                    rules="required|min:3"/>


                                            </v-col>
                                            <v-col cols="3">
                                                <my-field
                                                    title="Бошқарма бошлиғи қабул кунлари"
                                                    v-model="rahbariyat.boshliq.qabul"
                                                    edit="true"
                                                    name="boshliq_qabul"
                                                    rules="required|min:3"/>
                                            </v-col>
                                            <v-col cols="3">
                                                <my-field
                                                    title="Бошқарма бошлиғи телефон рақамлари"
                                                    v-model="rahbariyat.boshliq.telefon"
                                                    edit="true"
                                                    name="boshliq_telefon"
                                                    rules="required|min:3"/>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-file-input label="Бошқарма бошлиғи расми"
                                                              v-model="rahbariyat_boshliq_image"
                                                              name="boshliq_image"
                                                              accept="image/*"
                                                              @change="setImage('cropper',rahbariyat_boshliq_image)"
                                                >
                                                </v-file-input>
                                            </v-col>

                                            <section class="preview-area">
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="3" v-show="rahbariyat_boshliq_image">
                                                            <vue-cropper
                                                                ref="cropper"
                                                                :aspect-ratio="10/11"
                                                                :scalable="true"
                                                                :cropBoxResizable="false"
                                                                :src="'/storage/uploads/boshqarmalar/boshliq/' + rahbariyat.boshliq.image"
                                                                v-show="rahbariyat_boshliq_image"
                                                                :autoCrop="true"
                                                                style="max-width:1000px"
                                                            />


                                                        </v-col>

                                                        <v-col cols="2" v-if="rahbariyat_boshliq_image">
                                                            <v-btn v-if="rahbariyat_boshliq_image"
                                                                   @click.prevent="cropImage">Кесиш
                                                            </v-btn>
                                                        </v-col>

                                                        <v-col cols="3">
                                                            <div class="preview"></div>
                                                            <div class="cropped-image">
                                                                <div class="profile-icon-wrapper boshliq"
                                                                     v-if="cropImg">
                                                                    <div class="profile-icon"
                                                                         :style="'background-image: url('+cropImg+')'">

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>


                                            </section>

                                            <!--                                            <v-col cols="1" class="position-relative" v-else>
                                                                                            <span class="position-absolute close-button"
                                                                                                  @click="rahbariyat.boshliq.image=null">+</span>
                                                                                            <img width="100"
                                                                                                 :src="'/storage/uploads/boshqarmalar/boshliq/'+rahbariyat.boshliq.image"/>
                                                                                        </v-col>-->
                                            <v-col cols="12">
                                                <hr/>
                                            </v-col>
                                            <h4 style="color:#39ae69; font-weight: bold">Ўринбосарлар </h4>
                                            <br/>
                                            <v-col cols="12">

                                            </v-col>
                                            <v-col cols="12">
                                                <v-btn class="float-start mb-5" color="primary" @click="AddOrinbosar">
                                                    Қўшиш
                                                </v-btn>
                                            </v-col>
                                            <v-row v-for="(orinbosar,k) in rahbariyat.orinbosar" :key="k"
                                                   v-if="orinbosar">
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Исми фамилияси исми шарифи"
                                                        v-model="rahbariyat.orinbosar[k].name"
                                                        edit="true"
                                                        name="orinbosar_name[]"
                                                        rules="required|min:3"/>


                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Лавозими"
                                                        v-model="rahbariyat.orinbosar[k].lavozimi"
                                                        edit="true"
                                                        name="orinbosar_lavozimi[]"
                                                        rules="required|min:3"/>


                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Қабул кунлари"
                                                        v-model="rahbariyat.orinbosar[k].qabul"
                                                        edit="true"
                                                        name="orinbosar_qabul[]"
                                                        rules="required|min:3"/>

                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Телефон рақамлари"
                                                        v-model="rahbariyat.orinbosar[k].telefon"
                                                        edit="true"
                                                        name="boshliq_telefon[]"
                                                        rules="required|min:3"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <ValidationProvider
                                                        v-slot="{ errors}"
                                                        rules="required"
                                                        name="Расми"
                                                    >
                                                        <v-file-input label="Расми"
                                                                      v-model="images[k]"
                                                                      name="orinbosar_image[]"
                                                                      accept="image/*"
                                                                      @change="setImage('orinbosarCropper'+k,images[k])"
                                                        >
                                                        </v-file-input>
                                                        <span class="red--text">{{ errors[0] }}</span>
                                                    </ValidationProvider>

                                                </v-col>
                                                <v-col cols="1">
                                                    <v-btn fab x-small color="primary"
                                                           @click="removeOrinbosar(k)">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-col>

                                                <section class="preview-area">
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="3" v-show="images[k]">
                                                                <vue-cropper
                                                                    :ref="'orinbosarCropper'+ k"
                                                                    :aspect-ratio="10/11"
                                                                    :scalable="true"
                                                                    :cropBoxResizable="false"
                                                                    :src="'/storage/uploads/boshqarmalar/orinbosar/'+rahbariyat.orinbosar[k].image"
                                                                    v-show="images[k]"
                                                                    :autoCrop="true"
                                                                    style="max-width:1000px"
                                                                />


                                                            </v-col>

                                                            <v-col cols="2" v-if="images[k]">
                                                                <v-btn v-if="images[k]"
                                                                       @click.prevent="cropImage(k)">Кесиш
                                                                </v-btn>
                                                            </v-col>

                                                            <v-col cols="3">
                                                                <div class="preview"></div>
                                                                <div class="cropped-image">
                                                                    <div class="profile-icon-wrapper orinbosar"
                                                                         v-if="cropImgOrinbosar[k]">
                                                                        <div class="profile-icon"
                                                                             :style="'background-image: url('+ cropImgOrinbosar[k] + ')'">

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>


                                                </section>
                                                <!--                                                <v-col cols="2" v-else>
                                                                                                    <v-col cols="6" class="position-relative">
                                                                                                        <span class="position-absolute close-button"
                                                                                                              @click="rahbariyat.orinbosar[k].image=null">+</span>
                                                                                                        <img width="100"
                                                                                                             :src="'/storage/uploads/boshqarmalar/orinbosar/'+rahbariyat.orinbosar[k].image"/>
                                                                                                    </v-col>
                                                                                                </v-col>-->


                                            </v-row>

                                            <v-col cols="12">
                                                <hr/>
                                            </v-col>
                                            <v-row>
                                                <h4 style="color:#39ae69; font-weight: bold">Манзил </h4>
                                                <br/>
                                                <v-col cols="12">

                                                </v-col>
                                            </v-row>

                                            <v-row>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Манзил"
                                                        v-model="manzil.manzil"
                                                        edit="true"
                                                        name="boshqarma_manzil"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Автобуслар"
                                                        v-model="manzil.avtobus"
                                                        edit="true"
                                                        name="boshqarma_avtobus"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Йўналишдаги такси"
                                                        v-model="manzil.ytaksi"
                                                        edit="true"
                                                        name="boshqarma_ytaksi"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Телефон"
                                                        v-model="manzil.telefon"
                                                        edit="true"
                                                        name="boshqarma_telefon"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Факс"
                                                        v-model="manzil.faks"
                                                        edit="true"
                                                        name="boshqarma_faks"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Email"
                                                        v-model="manzil.email"
                                                        edit="true"
                                                        name="boshqarma_email"
                                                        rules="required|email"/>

                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Яндекс карта html коди"
                                                        v-model="manzil.map"
                                                        edit="true"
                                                        name="boshqarma_map"
                                                        rules="required"/>
                                                </v-col>
                                                <v-col cols="3" v-if="!manzil.image">
                                                    <ValidationProvider
                                                        v-slot="{ errors}"
                                                        rules="required"
                                                        name="Бошқарма расми"
                                                    >
                                                        <v-file-input label="Бошқарма расми"
                                                                      v-model="manzil.image"
                                                                      name="boshqarma_image"
                                                        >
                                                        </v-file-input>
                                                        <span class="red--text">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </v-col>

                                                <v-col cols="1" class="position-relative" v-else>
                                                    <span class="position-absolute close-button"
                                                          @click="manzil.image=null">+</span>
                                                    <img width="100"
                                                         :src="'/storage/uploads/boshqarmalar/manzil/'+ manzil.image"/>
                                                </v-col>
                                            </v-row>
                                            <v-col cols="12">
                                                <hr/>
                                                <h4 style="color:#39ae69; font-weight: bold">Постлар</h4>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-btn color="primary" class="float-end" @click="addPost">
                                                    Пост қўшиш
                                                </v-btn>

                                            </v-col>

                                            <v-col cols="12" sm="12" md="12">
                                                <v-expansion-panels v-model="panel" multiple>
                                                    <v-expansion-panel
                                                        v-for="(section,i) in posts"
                                                        :key="i"
                                                        class="my-2"

                                                    >
                                                        <v-expansion-panel-header>
                                                            <v-col cols="6" sm="6" md="6">
                                                                <p v-if="posts[i].title">{{ posts[i].title }}</p>
                                                                <p v-else> {{ i + 1 }} - пост</p>
                                                            </v-col>

                                                        </v-expansion-panel-header>
                                                        <v-expansion-panel-content eager>
                                                            <v-row>
                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Пост номи"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">

                                                                        <v-text-field label="Пост номи"
                                                                                      v-model="posts[i].title"
                                                                                      name="title"></v-text-field>
                                                                        <span class="error--text">{{ errors[0] }}</span>

                                                                    </ValidationProvider>
                                                                </v-col>

                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Пост манзили"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">

                                                                        <v-text-field label="Пост манзили"
                                                                                      v-model="posts[i].manzili"
                                                                                      name="title"></v-text-field>
                                                                        <span class="error--text">{{ errors[0] }}</span>

                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider name="Пост телефони"
                                                                                        rules="required"
                                                                                        v-slot="{ errors }">

                                                                        <v-text-field label="Пост телефони"
                                                                                      v-model="posts[i].telefon"
                                                                                      name="title"></v-text-field>
                                                                        <span class="error--text">{{ errors[0] }}</span>

                                                                    </ValidationProvider>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <ValidationProvider
                                                                        name="Пост ҳақида қисқача маълумот"
                                                                        rules="required"
                                                                        v-slot="{ errors }">
                                                                        <label>Пост ҳақида қисқача маълумот</label>
                                                                        <v-textarea v-model="posts[i].description"
                                                                                    rows="1"></v-textarea>
                                                                        <span class="error--text">{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </v-col>
                                                            </v-row>
                                                            <v-btn color="red" @click="deleteOrganization(i)"
                                                                   class="float-end">Ўчириш
                                                            </v-btn>

                                                        </v-expansion-panel-content>
                                                    </v-expansion-panel>
                                                </v-expansion-panels>
                                            </v-col>


                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Ёпиш</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Сақлаш</v-btn>
                                </v-card-actions>
                            </v-form>
                        </ValidationObserver>
                    </v-card>
                </v-flex>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "./../../../src/services/apiService";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/uz.json';
//import Editor from '@tinymce/tinymce-vue';
import MyField from '../../../components/form/myfield';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
    name: "OrgUpdate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Бошқармалар', to: '/admin/orgs', exact: true},
                    {text: 'Бошқармани тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            organization: {
                title: "",

            },
            rahbariyat:
                {
                    boshliq: {
                        name: "",
                        image: null,
                        lavozimi: "Бошқарма бошлиғи",
                        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        telefon: "(78) - 120-76-00"
                    },
                    orinbosar: [
                        {
                            name: "",
                            image: null,
                            lavozimi: "Бошқарма бошлиғи ўринбосари",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            telefon: "(78) - 120-76-00"
                        }
                    ]
                },
            manzil: {
                manzil: "",
                avtobus: "",
                ytaksi: "",
                telefon: "",
                faks: "",
                email: "",
                map: "",
                image: null
            },
            posts: [
                {
                    title: '',
                    description: '',
                    manzili: '',
                    telefon: '',
                }
            ],
            panel: [],
            title: null,
            cropImg: null,
            cropImgOrinbosar: [],
            imgSrc: null,
            imgSrcOrinbosar: null,
            rahbariyat_boshliq_image: null,
            images: [],

        }
    ),

    computed: {
        formTitle() {
            return 'Тахрирлаш'
        },

    },
    created() {
        this.initialize();

    },
    methods: {
        cropImage(k = null) {

            if (k >= 0) {
                this.cropImgOrinbosar = [];
                this.cropImgOrinbosar[0] = this.$refs['orinbosarCropper' + k][0].getCroppedCanvas().toDataURL()
            } else
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
        },
        setImage(k = null, e) {
            const file = e;
            if (file.type.indexOf('image/') === -1) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                const reader = new FileReader();
                reader.onload = (event) => {

                    // rebuild cropperjs with the updated source
                    if (k >= 0) {
                        this.$refs['orinbosarCropper' + k][0].replace(event.target.result);
                        this.imgSrcOrinbosar[k] = event.target.result;
                    } else {
                        this.$refs.cropper.replace(event.target.result);
                        this.imgSrc = event.target.result;
                    }

                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        initialize() {

            const _this = this;
            api.readOrg(this.$route.params.id).then((response) => {
                _this.organization = response.data.data;
                _this.posts = _this.organization.posts;
                _this.manzil = _this.organization.manzil;
                _this.rahbariyat = _this.organization.rahbariyat;
                _this.cropImg = "/storage/uploads/boshqarmalar/boshliq/" + _this.organization.rahbariyat.boshliq.image;
                _this.rahbariyat.orinbosar.forEach(function (item, k) {
                    _this.cropImgOrinbosar[k] = "/storage/uploads/boshqarmalar/orinbosar/" + item.image;
                })
            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                this.$router.replace("/admin/orgs").catch(() => {
                });
            });
            //_this.$refs.cropper.replace();
            ///this.$refs.cropper.zoom(15)

        },
        close() {
            this.$router.replace('/admin/orgs');
        },
        async save() {
            const _this = this;
            const isValid = await this.$refs.organizationForm.validate();
            if (isValid) {
                const form = new FormData();

                form.append('_method', 'PUT');
                form.append('title', this.organization.title);
                form.append('manzil[manzil]', this.manzil.manzil);
                form.append('manzil[avtobus]', this.manzil.avtobus);
                form.append('manzil[ytaksi]', this.manzil.ytaksi);
                form.append('manzil[telefon]', this.manzil.telefon);
                form.append('manzil[faks]', this.manzil.faks);
                form.append('manzil[email]', this.manzil.email);
                form.append('manzil[map]', this.manzil.map);
                form.append('manzil[image]', this.manzil.image);
                form.append('rahbariyat[boshliq][name]', this.rahbariyat.boshliq.name);
                form.append('rahbariyat[boshliq][image]', this.rahbariyat.boshliq.image);
                form.append('rahbariyat[boshliq][lavozimi]', this.rahbariyat.boshliq.lavozimi);
                form.append('rahbariyat[boshliq][qabul]', this.rahbariyat.boshliq.qabul);
                form.append('rahbariyat[boshliq][telefon]', this.rahbariyat.boshliq.telefon);

                if (_this.imgSrc) this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                    form.append('rahbariyat[boshliq][image]', blob);
                    Object.entries(this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
                        Object.entries(v).forEach(([itemkey, item]) => {
                            if (itemkey === 'image') {
                                if (_this.imgSrcOrinbosar[valkey]) {
                                    console.log(_this.$refs['orinbosarCropper' + valkey]);
                                    _this.$refs['orinbosarCropper' + valkey].getCroppedCanvas().toBlob((blob1) => {
                                        form.append('rahbariyat[orinbosar][${valkey}][${itemkey}]', blob1);
                                    })
                                } else
                                    form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item);
                            } else
                                form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, `${item}`)
                        });
                    });
                    Object.entries(this.posts).forEach(([valkey, v]) => {
                        Object.entries(v).forEach(([itemkey, item]) => {
                            form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
                        });
                    });
                    setTimeout(() => {
                        api.updateOrg(_this.organization.id, form).then((response) => {
                            _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        }).catch((error) => {
                            _this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                        })
                    }, 200)
                })
                else {
                    // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                    Object.entries(this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
                        Object.entries(v).forEach(([itemkey, item]) => {
                            if (itemkey === 'image') form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item); else
                                form.append(`rahbariy   at[orinbosar][${valkey}][${itemkey}]`, `${item}`)
                        });
                    });
                    Object.entries(this.posts).forEach(([valkey, v]) => {
                        Object.entries(v).forEach(([itemkey, item]) => {
                            form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
                        });
                    });
                    setTimeout(() => {
                        api.updateOrg(_this.organization.id, form).then((response) => {
                            _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                        }).catch((error) => {
                            _this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                        })
                    }, 200)
                }
            }
        },
        deleteOrganization(key) {
            if (key > 0)
                this.sections.splice(key, 1);
        },
        removeOrinbosar(key) {
            if (key > 0)
                this.rahbariyat.orinbosar.splice(key, 1);
        },
        addPost() {
            this.posts.push({title: null, manzili: null, telefon: null, description: null})
        },
        AddOrinbosar() {
            this.rahbariyat.orinbosar.push({
                name: "",
                image: null,
                lavozimi: "Бошқарма бошлиғи ўринбосари",
                qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                telefon: "(78) - 120-76-00"
            })
        },

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        MyField, VueCropper
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
