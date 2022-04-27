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
                        <h3>Таҳрирлаш</h3>
                    </v-row>
                </v-container>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>

                        <ValidationObserver ref="pageForm" v-slot="{ invalid }">
                            <v-form>

                                <v-card-text>
                                    <v-container>
                                        <v-row >
                                            <v-col cols="4">

                                                <ValidationProvider
                                                    v-slot="{ errors}"
                                                    rules="required"
                                                    name="Лавозими"

                                                >
                                                    <span>Лавозими</span>
                                                    <v-autocomplete :items="[
                                                        {text:'Раис',value:'1'},
                                                        {text:'Биринчи ўринбосар',value:'2'},
                                                        {text:'Ўринбосар',value:'3'}
                                                        ]" v-model="organization.lavozimi">
                                                    </v-autocomplete>

                                                    <span class="red--text">{{ errors[0] }}</span>
                                                </ValidationProvider>




                                            </v-col>
                                            <v-col cols="4">
                                                <my-field
                                                    title="Рахбар исми фамилияси исми шарифи"
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
                                                    title="Қабул вақти"
                                                    v-model="organization.qabul"
                                                    name="add_phone"
                                                    rules="required"/>
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
                                                                <div class="profile-icon-wrapper" :class="organization.lavozimi==='1'?'boshliq':'orinbosar'" v-if="cropImg">
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
import api from "./../../../src/services/apiService";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/uz.json';
//import Editor from '@tinymce/tinymce-vue';
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
                    {text: 'Рахбарият', to: '/admin/rahbariyat', exact: true},
                    {text: 'Тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            organization: {
                title: "",

            },
            organization_image:null,
            cropImg:null,
            imgSrc:null,
            title: null,
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
            await api.readApparat(this.$route.params.id).then((response) => {
                _this.organization = response.data.data;
                _this.cropImg="/storage/uploads/markaziy/"+ _this.organization.rahbariyat.image;
            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                this.$router.replace("/admin/rahbariyat").catch(() => {
                });
            });

        },
        close() {
            this.$router.replace('/admin/rahbariyat');
        },
        async save() {
            const isValid = await this.$refs.pageForm.validate();
            if (isValid) {
                const _this=this;
                const form = new FormData();
                //form.append('org_name', _this.organization.name);
                form.append('fio', _this.organization.fio);
                form.append('lavozimi', _this.organization.lavozimi);
                form.append('qabul', _this.organization.qabul);
                form.append('phone', _this.organization.phone);
                //form.append('add_phone', _this.organization.add_phone);
                //form.append('email', _this.organization.email);
                form.append('rahbar', 0);

                form.append('_method', 'PUT');
                if(_this.imgSrc)   this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                    form.append('image',blob);
                    api.updateRahbariyat(_this.organization.id, form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                    })
                });
                else {
                    form.append('image',_this.cropImg);
                    api.updateRahbariyat(_this.organization.id, form).then((response) => {
                        _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                    }).catch((error) => {
                        _this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                    })
                }

            }
        },


    },
    components: {
        ValidationProvider,
        ValidationObserver,
        MyField,
        VueCropper
    },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
