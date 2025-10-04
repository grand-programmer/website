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
                                        <v-row>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Бошқарма номи"
                                                    v-model="organization.name"
                                                    name="org_title"
                                                    rules="required|min:3"/>

                                            </v-col>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Бошқарма бошлиғи исми фамилияси исми шарифи"
                                                    v-model="organization.fio"
                                                    name="fio"
                                                    rules="required|min:3"/>


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
                                                    <span class="red--text">{{ errors[0] }}</span>
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
                                                                :src="imgSrc"

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


export default {
    name: "OrgCreate",
    data() {
        return {
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Бошқармалар', to: '/admin/apparat', exact: true},
                    {text: 'Бошқарма яратиш', to: '#', exact: true, disabled: true},
                ],
            organization: {
                name: "",
                fio: "",
                lavozim: "Бошқарма бошлиғи",
                qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                phone: "",
                add_phone: "",
                email: "",
                image: null,
                org: null,
                rahbariyat: 0,
            },
            title: null,
            rahbariyat:[],
            cropImg: null,
            organization_image: null,
            imgSrc: '/assets/images/berserk.jpg',

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
        this.initialize()

    },

    watch: {
        /*        date(val) {
                    this.editedItem.date = this.formatDate(this.date)
                },*/
    },
    methods: {
        initialize() {
            if(this.$route.params.org!==0) this.breadcrumb_items[1].to='/admin/apporg/' + this.$route.params.org
            else this.breadcrumb_items[1].to='/admin/apparat/'

                        api.readRahbariyats(this.$route.params.org).then((response) => {
                            this.rahbariyat= response.data.data;
                        }).catch((error) => {
                            this.$toast.error(`Ходисаларни олишда муаммо бор!`)

                            console.log(error)
                        });

        },

        close() {
            this.$router.replace("/admin/apparat").catch(() => {
            });
        },

        async save() {

            const isValid = await this.$refs.pageForm.validate();

            if (isValid) {

                const _this=this;
                const form = new FormData();
                form.append('org_name', _this.organization.name);
                if (_this.$route.params.org > 0 && _this.$route.fullPath.indexOf('apporg') !== -1  ) form.append('org', _this.$route.params.org);
                form.append('fio', _this.organization.fio);
                form.append('lavozimi', _this.organization.lavozim);
                form.append('qabul', _this.organization.qabul);
                form.append('phone', _this.organization.phone);
                form.append('add_phone', _this.organization.add_phone);
                form.append('email', _this.organization.email);
                form.append('rahbariyat', _this.organization.rahbariyat);
                if(this.cropImg)   this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                    form.append('image',blob);

                    api.addApparat(form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    })
                }); else {
                    form.append('image',this.organization.image);
                    api.addApparat(form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    })
                }
                /*const form = new FormData();
                form.append('org_name', this.organization.name);
                form.append('fio', this.organization.fio);
                form.append('lavozimi', this.organization.lavozim);
                form.append('qabul', this.organization.qabul);
                form.append('phone', this.organization.phone);
                form.append('add_phone', this.organization.add_phone);
                form.append('email', this.organization.email);
                form.append('rahbariyat', this.organization.rahbariyat);
                form.append('image', this.organization.image);


                api.addApparat(form).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    //this.$router.push('/admin/apparat')
                    this.close()
                }).catch((error) => {
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    console.log(error)
                })*/
            }

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
        cropImage() {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
        }


    },

    components: {
        ValidationProvider,
        ValidationObserver,
        //Editor,
        MyField, VueCropper
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
