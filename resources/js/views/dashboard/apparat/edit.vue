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
            >
                <v-container>
                    <v-row>
                        <h3>Бошқармани таҳрирлаш</h3>
                    </v-row>
                    <v-col cols="12" class="d-block mt-3">
                        <v-btn v-for="language in languages" @click="lang=language.value"
                               :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                        </v-btn>



                    </v-col>
                </v-container>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <ValidationObserver ref="pageForm" v-slot="{ invalid }">
                            <v-form>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="4" v-show="lang==='uz'">
                                                <my-field
                                                    title="Бошқарма номи"
                                                    v-model="organization.org_name"
                                                    name="org_title"
                                                    rules="required|min:3"/>

                                            </v-col>
                                            <v-col cols="4" :key="'title' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <my-field
                                                    :title="'Бошқарма номи - ' + getLang()['text']"
                                                    v-model="langtext[langKey].org_name"
                                                    name="org_title"/>

                                            </v-col>

                                            <v-col cols="4" v-show="lang==='uz'">
                                                <my-field
                                                    title="Лавозим номи"
                                                    v-model="organization.lavozim_name"
                                                    name="lavozim_name"
                                                    rules="required|min:3"/>


                                            </v-col>
                                            <v-col cols="4" :key="'lavozim' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <my-field
                                                    :title="'Лавозим номи ' +  getLang()['text']"
                                                    v-model="langtext[langKey].lavozim_name"/>
                                            </v-col>

                                            <v-col cols="4"  v-show="lang==='uz'">
                                                <my-field
                                                    title="Бошқарма бошлиғи исми фамилияси исми шарифи"
                                                    v-model="organization.fio"
                                                    name="fio"
                                                    rules="required|min:3"/>


                                            </v-col>

                                            <v-col cols="4" :key="'fioboshliq' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <my-field
                                                    :title="'Бошқарма бошлиғи исми фамилияси исми шарифи ' +  getLang()['text']"
                                                    v-model="langtext[langKey].fio"/>
                                            </v-col>

                                            <v-col cols="4">
                                                <my-field
                                                    title="Раҳбар телефон рақамлари"
                                                    v-model="organization.phone"
                                                    name="phone"
                                                    rules="required|min:3"/>
                                            </v-col>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Бошқарма ҳодимлари телефонлари"
                                                    v-model="organization.add_phone"
                                                    name="add_phone"
                                                    rules="required|min:3"/>
                                            </v-col>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Email"
                                                    v-model="organization.email"
                                                    name="boshliq_telefon"
                                                    rules="required|min:3"/>
                                            </v-col>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Сортировка"
                                                    v-model="organization.sort"
                                                    name="boshliq_sort"
                                                rules="required"/>
                                            </v-col>
                                            <v-col cols="4">
                                                <ValidationProvider
                                                    v-slot="{ errors}"
                                                    rules="required"
                                                    name="Рахбарият тасарруфидалиги"
                                                >
                                                    <span>Рахбарият тасарруфидалиги</span>
                                                <v-autocomplete
                                                    v-model="organization.rahbariyat"
                                                    name="rahbariyat"
                                                    :items="rahbariyat"
                                                    item-text="fio"
                                                    item-value="id"
                                                    clearable
                                                    >
                                                    </v-autocomplete>
                                                </ValidationProvider>
                                            </v-col>

                                            <v-col cols="4">
                                                <ValidationProvider
                                                    v-slot="{ errors}"
                                                    name="Расми"
                                                >
                                                    <v-file-input label="Расми"
                                                                  v-model="organization_image"
                                                                  name="boshliq_image"
                                                                  accept="image/*"
                                                                  @change="setImage"
                                                    >
                                                    </v-file-input>
                                                    <span class="red--text">{{ errors[0] }}</span>
                                                </ValidationProvider>


                                            </v-col>

                                            <section class="preview-area">
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="4" v-show="organization_image">
                                                            <vue-cropper
                                                                ref="cropper"
                                                                :aspect-ratio="10/11"
                                                                :scalable="true"
                                                                :cropBoxResizable="false"
                                                                :src="'/storage/uploads/markaziy/'+organization.image"
                                                                v-show="organization_image"
                                                                :autoCrop ="true"
                                                                style="max-width:1000px"
                                                            />

                                                        </v-col>
                                                        <v-col cols="2" v-if="imgSrc" ><v-btn v-if="imgSrc" @click.prevent="cropImage">Кесиш</v-btn>
                                                        </v-col>
                                                        <v-col cols="4">
                                                            <div class="cropped-image">
                                                                <div class="profile-icon-wrapper orinbosar" v-if="cropImg">
                                                                    <div class="profile-icon" :style="'background-image: url('+cropImg+')'">

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>


                                            </section>

                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Бошқарма вазифалари" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <label>Бошқарма вазифалари</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="organization.biografiyasi"
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
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }"/>


                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Бошқарма вазифалари"
                                                                    v-slot="{ errors }">
                                                    <label>Бошқарма вазифалари - {{ getLang(langKey)['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="langtext[langKey].biografiyasi"
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
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }"/>


                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
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
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "ApparatUpdate",
    data: () => ({
            content: '<h1>Initial Content</h1>',

            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Бошқармалар', to: '/admin/apparat', exact: true},
                    {text: 'Бошқармани тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            organization: {
                title: "",
                biografiyasi: "",
                sort: null

            },
            organization_image: null,
            lang: 'uz',
            langtext: {
                oz: {
                    org_name: null,
                    biografiyasi: null,
                },
                ru: {
                    org_name: null,
                    biografiyasi: null,
                },
                en: {
                    org_name: null,
                    biografiyasi: null,
                }
            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],

            cropImg: null,
            imgSrc: null,
            title: null,
            rahbariyat:[],
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
        getLang(code = null) {
            if (code) {
                let language = this.languages.filter((language) => {
                    if (language.value === code) return language;
                })
                if (language) return language[0]
                return null;

            } else {
                let language = this.languages.filter((language) => {
                    if (language.value === this.lang) return language;
                })
                if (language) return language[0]
                return null;
            }
        },
        cropImage() {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
        },
        setImage(e) {
            // console.log(e)
            const file = e;
            if (file.type.indexOf('image/') === -1) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.imgSrc = event.target.result;
                    // rebuild cropperjs with the updated source
                    this.$refs.cropper.replace(event.target.result);

                };
                reader.readAsDataURL(file);

            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        async initialize() {
            const _this = this;

            if(this.$route.params.org!==0) this.breadcrumb_items[1].to='/admin/apporg/' + this.$route.params.org
            else this.breadcrumb_items[1].to='/admin/apparat/'
            await api.readApparat(this.$route.params.id).then((response) => {
                _this.organization = response.data.data;

                if (typeof _this.organization.translates !== 'undefined' && _this.organization.translates ) {
                    for (const [key, translate] of Object.entries(_this.organization.translates)){
                        //_this.vote.translates.each(function(translate,key){
                        _this.langtext[key]=translate;
                    }
                }

                _this.cropImg = "/storage/uploads/markaziy/" + _this.organization.image;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/admin/apparat").catch(() => {
                });
            });
            await api.readRahbariyats(this.$route.params.org).then((response) => {
                _this.rahbariyat = response.data.data;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))

            });

        },
        close() {
            this.$router.replace('/admin/apparat');
        },
        async save() {
            const isValid = await this.$refs.pageForm.validate();
            if (isValid) {
                const _this = this;
                const form = new FormData();
                form.append('org_name', _this.organization.org_name);
                form.append('fio', _this.organization.fio);
                form.append('lavozimi', _this.organization.lavozim);
                form.append('lavozim_name', _this.organization.lavozim_name);
                form.append('qabul', _this.organization.qabul);
                form.append('phone', _this.organization.phone);
                form.append('biografiyasi', _this.organization.biografiyasi);
                form.append('add_phone', _this.organization.add_phone);
                form.append('email', _this.organization.email);
                form.append('sort', _this.organization.sort);
                form.append('rahbariyat', _this.organization.rahbariyat);
                form.append('_method', 'PUT');
                form.append('translates', JSON.stringify(_this.langtext));
                if (this.cropImg && this.$refs.cropper.getCroppedCanvas()) this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {

                    form.append('image', blob);

                    api.updateApparat(_this.organization.id, form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    })
                }); else {
                    form.append('image', _this.organization.image);

                    api.updateApparat(_this.organization.id, form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    })
                }

            }
        },


    },
    components: {
        ValidationProvider,
        ValidationObserver,
        MyField,
        VueCropper,
        Editor
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
