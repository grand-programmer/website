<template>
    <v-container
        class="page-main"
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
            >
                <v-container>
                    <v-row>
                        <h3>Бошқарма яратиш</h3>
                    </v-row>
                </v-container>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <ValidationObserver ref="pageForm" v-slot="{ invalid }">
                            <v-form>

                                <v-card-text>
                                    <v-container>

                                        <v-row v-if="organization">
                                            <v-col cols="6" sm="6" md="6">
                                                <my-field
                                                    title="Бошқарма номи"
                                                    v-model="organization.title"
                                                    edit="true"
                                                    name="org_title"
                                                    rules="required|min:3" />

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
                                                    rules="required|min:3" />


                                            </v-col>
                                            <v-col cols="3">
                                                <my-field
                                                    title="Бошқарма бошлиғи қабул кунлари"
                                                    v-model="rahbariyat.boshliq.qabul"
                                                    edit="true"
                                                    name="boshliq_qabul"
                                                    rules="required|min:3" />
                                            </v-col>
                                            <v-col cols="3">
                                                <my-field
                                                    title="Бошқарма бошлиғи телефон рақамлари"
                                                    v-model="rahbariyat.boshliq.telefon"
                                                    edit="true"
                                                    name="boshliq_telefon"
                                                    rules="required|min:3" />
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

                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Бошқарма бошлиғи биографияси" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <label>Бошқарма бошлиғи биографияси</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="rahbariyat.boshliq.biografiyasi"
                                                            :init="{
                                                                selector: 'textarea',
                                                                height: 500,
                                                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                                                imagetools_cors_hosts: ['picsum.photos'],
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                autosave_ask_before_unload: true,
                                                                autosave_interval: '30s',
                                                                autosave_prefix: '{path}{query}-{id}-',
                                                                autosave_restore_when_empty: false,
                                                                autosave_retention: '2m',
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                noneditable_noneditable_class: 'mceNonEditable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                file_browser_callback:file_browser_callback,
                                                            }"/>


                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="12"><hr/></v-col>
                                            <h4 style="color:#39ae69; font-weight: bold">Ўринбосарлар </h4>
                                            <br/>
                                            <v-col cols="12">

                                            </v-col>
                                            <v-col cols="12">
                                                <v-btn class="float-start mb-5" color="primary" @click="AddOrinbosar">
                                                    Қўшиш
                                                </v-btn>
                                            </v-col>
                                            <v-row v-for="(orinbosar,k) in rahbariyat.orinbosarlar" :key="k"
                                                   v-if="orinbosar">
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Исми фамилияси исми шарифи"
                                                        v-model="rahbariyat.orinbosarlar[k].name"
                                                        edit="true"
                                                        name="orinbosar_name[]"
                                                        rules="required|min:3" />
                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Лавозими"
                                                        v-model="rahbariyat.orinbosarlar[k].lavozimi"
                                                        edit="true"
                                                        name="orinbosar_lavozimi[]"
                                                        rules="required|min:3"/>


                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Қабул кунлари"
                                                        v-model="rahbariyat.orinbosarlar[k].qabul"
                                                        edit="true"
                                                        name="orinbosar_qabul[]"
                                                        rules="required|min:3" />

                                                </v-col>
                                                <v-col cols="2">
                                                    <my-field
                                                        title="Телефон рақамлари"
                                                        v-model="rahbariyat.orinbosarlar[k].telefon"
                                                        edit="true"
                                                        name="boshliq_telefon[]"
                                                        rules="required|min:3" />
                                                </v-col>

                                                <v-col cols="3">
                                                    <v-file-input label="Расми"
                                                                  v-model="images[k]"
                                                                  name="orinbosar_image[]"
                                                                  accept="image/*"
                                                                  @change="setImage(k,images[k])"
                                                    >
                                                    </v-file-input>

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
                                                                    :ref="'orinbosarCropper'+k"
                                                                    :aspect-ratio="10/11"
                                                                    :scalable="true"
                                                                    :cropBoxResizable="false"
                                                                    :src="'/storage/uploads/boshqarmalar/orinbosar/'+rahbariyat.orinbosarlar[k].image"
                                                                    :autoCrop="true"
                                                                    style="max-width:1000px"
                                                                    v-show="images[k]"
                                                                />


                                                            </v-col>

                                                            <v-col cols="2" v-show="images[k]">
                                                                <v-btn v-show="images[k]"
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


                                            </v-row>


                                            <v-col cols="12"><hr/></v-col>
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
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Автобуслар"
                                                        v-model="manzil.avtobus"
                                                        edit="true"
                                                        name="boshqarma_avtobus"
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Йўналишдаги такси"
                                                        v-model="manzil.ytaksi"
                                                        edit="true"
                                                        name="boshqarma_ytaksi"
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Телефон"
                                                        v-model="manzil.telefon"
                                                        edit="true"
                                                        name="boshqarma_telefon"
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Факс"
                                                        v-model="manzil.faks"
                                                        edit="true"
                                                        name="boshqarma_faks"
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Email"
                                                        v-model="manzil.email"
                                                        edit="true"
                                                        name="boshqarma_email"
                                                        rules="required|email" />

                                                </v-col>
                                                <v-col cols="3">
                                                    <my-field
                                                        title="Яндекс карта html коди"
                                                        v-model="manzil.map"
                                                        edit="true"
                                                        name="boshqarma_map"
                                                        rules="required" />
                                                </v-col>
                                                <v-col cols="3">
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
                                            </v-row>
                                            <v-col cols="12"><hr/>
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
import api from "./../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/oz.json';
import Editor from '@tinymce/tinymce-vue';
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
    name: "OrgCreate",
    data() {
        return {
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Бошқармалар', to: '/admin/orgs', exact: true},
                    {text: 'Бошқарма яратиш', to: '#', exact: true, disabled: true},
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
                        biografiyasi: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        telefon: "(78) - 120-76-00"
                    },
                    orinbosarlar: [
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
            imgSrcOrinbosar: [],
            rahbariyat_boshliq_image: null,
            images: [],
            orinbosarlar: [],

        }
    },
    computed: {
        formTitle() {
            return 'Янги';
        },
        /*        computedDateFormatted() {
                    return this.formatDate(this.date)
                },*/

    },
    created() {

    },

    watch: {
        /*        date(val) {
                    this.editedItem.date = this.formatDate(this.date)
                },*/
    },
    methods: {

        cropImage(k = null) {
            const croppedimages = this.cropImgOrinbosar;
            this.cropImgOrinbosar = [];
            const _this=this;
            croppedimages.forEach(function (item, k) {
                _this.cropImgOrinbosar[k] = item;
            })
            if (k >= 0) {

                this.cropImgOrinbosar[k] = this.$refs['orinbosarCropper' + k][0].getCroppedCanvas().toDataURL()
                console.log("sdfsdf");
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
                        //console.log('asdasd')
                        this.imgSrcOrinbosar[k] = event.target.result;
                    } else {
                        //console.log(k);
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
            /*            api.readorgs().then((response) => {
                            this.editedItem = response.data;
                        }).catch((error) => {
                            this.$toast.error(`Ходисаларни олишда муаммо бор!`)

                            console.log(error)
                        });*/
        },

        close() {
            this.$router.replace("/admin/orgs").catch(() => {
            });
        },
        all() {
            this.panel = [...Array(this.items).keys()].map((k, i) => i)
        },

        async save() {
            const _this=this;

            const isValid = await this.$refs.pageForm.validate();

            if (isValid) {
                const form = new FormData();
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
                // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                if (_this.imgSrc) this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                    form.append('rahbariyat[boshliq][image]', blob);
                    if(this.rahbariyat.orinbosarlar)
                    Object.entries(this.rahbariyat.orinbosarlar).forEach(([valkey, v]) => {
                        Object.entries(v).forEach(([itemkey, item]) => {
                            if (itemkey === 'image') {
                                if (_this.imgSrcOrinbosar[valkey]) {
                                    console.log(_this.$refs['orinbosarCropper' + valkey]);
                                    _this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas().toBlob((blob1) => {
                                        form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, blob1);
                                    })
                                } else
                                    form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item);
                            } else
                                form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, `${item}`)
                        });
                    });
                    if(this.posts)
                        Object.entries(this.posts).forEach(([valkey, v]) => {
                            Object.entries(v).forEach(([itemkey, item]) => {
                                form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
                            });
                        });
                    setTimeout(() => {
                        api.addOrg(form).then((response) => {
                            this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                            this.close()
                        }).catch((error) => {
                            this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                            console.log(error)
                        })
                    }, 200)
                })
                else
                this.$toast.error(`Бошлиқ расми тўлдирилмади!`);



/*


                Object.entries(this.rahbariyat.orinbosarlar).forEach(([valkey, v]) => {
                    Object.entries(v).forEach(([itemkey, item]) => {
                        if(itemkey==='image') form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item); else
                        form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, `${item}`)
                    });
                });
                Object.entries(this.posts).forEach(([valkey, v]) => {
                    Object.entries(v).forEach(([itemkey, item]) => {
                        form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
                    });
                });
*/


            } else {
                const _this = this;
                if(this.posts)
                this.posts.forEach(function (item, key) {

                    console.log(item)
                    if (item.title.length < 1 || item.body.length < 1) _this.panel.push(key)
                });

            }

        },
        addPost() {
            this.posts.push({title: null, manzili: null, telefon: null,description:null})
        },
        AddOrinbosar() {
            this.rahbariyat.orinbosarlar.push({
                name: "",
                image: null,
                lavozimi: "Бошқарма бошлиғи ўринбосари",
                qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                telefon: "(78) - 120-76-00"
            })
        },
        deleteOrganization(key) {
            if (key >= 0)
                this.posts.splice(key, 1);
        },
        removeOrinbosar(key) {
            if (key > 0)
            this.rahbariyat.orinbosarlar.splice(key, 1);
        },


    },

    components: {
        ValidationProvider,
        ValidationObserver,
        //Editor,
        MyField,VueCropper
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
