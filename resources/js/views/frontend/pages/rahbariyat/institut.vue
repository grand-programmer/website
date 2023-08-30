<template>
    <div class="section page-container">
        <div class="background"></div>
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="container">

            <div class="row">
                <!---->
                <div class="col col-12">
                    <div class="single_blog_content">
                        <div class="widget_tittle"><h3>{{ $t("Божхона институти раҳбарияти") }}</h3></div>
                        <div>


                            <div class="container">
                                <div class="row">
                                    <div class="col-12 rais">
                                        <div class="wrapper">
                                            <div class="row">
                                                <div class="col-2">
                                                    <div class="profile-icon-wrapper">
                                                        <div class="profile-icon"
                                                             @click="dialog_image=true; image=rais.image!=='null'?'/storage/uploads/markaziy/'+ rais.image:'/img/gtk_image.png'; description=rais.biografiyasi && rais.biografiyasi.length>10? '<h3>' + rais.fio +'</h3>' + rais.biografiyasi:''"
                                                             :style="'background-image: url('+ (rais.image!=='null'?'/storage/uploads/markaziy/'+ rais.image:'/img/gtk_image.png') +');'">
                                                            &nbsp;
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-9">
                                                    <div>
                                                        <div class="text-row">
                                                            <p>{{ $t(rais.fio) }}</p>
                                                        </div>
                                                        <div class="text-row">
                                                            <div class="far fa-user">&nbsp;</div>
                                                            <p>{{
                                                                    (typeof rais.translates !== 'undefined' && typeof rais.translates[$i18n.locale] !== 'undefined' && rais.translates[$i18n.locale]['lavozim_name'] && typeof rais.translates[$i18n.locale]['lavozim_name'] !== 'undefined') ? rais.translates[$i18n.locale]['lavozim_name'] : rais.lavozim_name
                                                                }} </p>
                                                        </div>
                                                        <div class="text-row">
                                                            <div class="far fa-clock">&nbsp;</div>
                                                            <p>{{
                                                                    (typeof rais.translates !== 'undefined' && typeof rais.translates[$i18n.locale] !== 'undefined' && rais.translates[$i18n.locale]['qabul'] && typeof rais.translates[$i18n.locale]['qabul'] !== 'undefined') ? rais.translates[$i18n.locale]['qabul'] : rais.qabul
                                                                }}</p>
                                                        </div>
                                                        <div class="text-row">
                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                            <p>{{ rais.phone }}</p>
                                                        </div>
                                                        <div class="text-row d-none"
                                                             v-show="rais.biografiyasi && rais.biografiyasi.length>10"
                                                             @click="biograf_show=!biograf_show">
                                                            <p>{{ $t('Раис биографияси') }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <v-row>
                                            <v-expand-transition mode="in-out">
                                                <div v-show="biograf_show" class="px-15 pt-10 white--text biograf_show"
                                                     v-html="rais.biografiyasi"></div>
                                            </v-expand-transition>
                                        </v-row>
                                    </div>
                                    <div class="col-12 orinbosarlar" style="/* margin: 20px auto;">
                                        <div class="row">
                                            <h3 style="text-align: center;">&nbsp;</h3>
                                        </div>
                                        <div class="row">
                                            <div class="orinbosar col-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div>
                                                            <div class="orinbosar-header">
                                                                <div class="profile-icon-wrapper">
                                                                    <div class="profile-icon"
                                                                         @click="dialog_image=true; image=birinchi_orinbosar.image!=='null'?'/storage/uploads/markaziy/'+ birinchi_orinbosar.image:'/img/gtk_image.png';
                                                                                description=birinchi_orinbosar.biografiyasi && birinchi_orinbosar.biografiyasi.length>10? '<h3>' + birinchi_orinbosar.fio +'</h3>' + birinchi_orinbosar.biografiyasi:''"
                                                                         :style="'background-image: url('+ (birinchi_orinbosar.image!=='null'?'/storage/uploads/markaziy/'+ birinchi_orinbosar.image:'/img/gtk_image.png') +');'">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                                <p>{{ $t(birinchi_orinbosar.fio) }}</p>
                                                            </div>
                                                            <div class="orinbosar-info">
                                                                <div class="text-row">
                                                                    <div class="far fa-user">&nbsp;</div>
                                                                    <p>{{
                                                                            (typeof birinchi_orinbosar.translates !== 'undefined' && typeof birinchi_orinbosar.translates[$i18n.locale] !== 'undefined' && birinchi_orinbosar.translates[$i18n.locale]['lavozim_name'] && typeof birinchi_orinbosar.translates[$i18n.locale]['lavozim_name'] !== 'undefined') ? birinchi_orinbosar.translates[$i18n.locale]['lavozim_name'] : birinchi_orinbosar.lavozim_name
                                                                        }}</p>
                                                                </div>
                                                                <div class="text-row">
                                                                    <div class="far fa-clock">&nbsp;</div>
                                                                    <p>{{
                                                                            (typeof birinchi_orinbosar.translates !== 'undefined' && typeof birinchi_orinbosar.translates[$i18n.locale] !== 'undefined' && birinchi_orinbosar.translates[$i18n.locale]['qabul'] && typeof birinchi_orinbosar.translates[$i18n.locale]['qabul'] !== 'undefined') ? birinchi_orinbosar.translates[$i18n.locale]['qabul'] : birinchi_orinbosar.qabul
                                                                        }}</p>
                                                                </div>
                                                                <div class="text-row">
                                                                    <div class="fas fa-phone-alt">&nbsp;</div>
                                                                    <p>{{ birinchi_orinbosar.phone }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="orinbosar col-3" v-for="orinbosar in orinbosarlar">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div>
                                                            <div class="orinbosar-header">
                                                                <div class="profile-icon-wrapper">
                                                                    <div class="profile-icon"
                                                                         @click="dialog_image=true; image=orinbosar.image!=='null'?'/storage/uploads/markaziy/'+ orinbosar.image:'/img/gtk_image.png';
description=orinbosar.biografiyasi && orinbosar.biografiyasi.length>10? '<h3>' + orinbosar.fio +'</h3>' + orinbosar.biografiyasi:''"
                                                                         :style="'background-image: url('+ (orinbosar.image!=='null'?'/storage/uploads/markaziy/'+ orinbosar.image:'/img/gtk_image.png') +');'">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                                <p>{{ $t(orinbosar.fio) }}</p>
                                                            </div>
                                                            <div class="orinbosar-info">
                                                                <div class="text-row">
                                                                    <div class="far fa-user">&nbsp;</div>
                                                                    <p>
                                                                        {{ (typeof orinbosar.translates !== 'undefined' && typeof orinbosar.translates[$i18n.locale] !== 'undefined' && orinbosar.translates[$i18n.locale]['lavozim_name'] && typeof orinbosar.translates[$i18n.locale]['lavozim_name'] !== 'undefined') ? orinbosar.translates[$i18n.locale]['lavozim_name'] : orinbosar.lavozim_name }}</p>
                                                                </div>
                                                                <div class="text-row">
                                                                    <div class="far fa-clock">&nbsp;</div>
                                                                    <p>{{
                                                                            (typeof orinbosar.translates !== 'undefined' && typeof orinbosar.translates[$i18n.locale] !== 'undefined' && orinbosar.translates[$i18n.locale]['qabul'] && typeof orinbosar.translates[$i18n.locale]['qabul'] !== 'undefined') ? orinbosar.translates[$i18n.locale]['qabul'] : orinbosar.qabul
                                                                        }}</p>
                                                                </div>
                                                                <div class="text-row">
                                                                    <div class="fas fa-phone-alt">&nbsp;</div>
                                                                    <p>{{ orinbosar.phone }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog v-model="dialog_image" content-class="my_dialog" v-show="image">
            <v-btn
                icon
                dark
                @click="dialog_image = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="d-flex justify-content-start">
                <img :src="image" style="max-width: 100%; width: initial;"/>
                <div v-if="description && description.length>10"
                     class="rahbar_description"
                     v-html="description">

                </div>
            </div>

        </v-dialog>
    </div>
</template>

<script>

import api from "./../../../../src/services/apiService";
import i18n from "../../../../i18n";

export default {
    name: "rahbariyat",
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
                    text: i18n.t('Божхона институти раҳбарияти'),
                    to: '/page/rahbariyat/institut',
                    disabled: true,
                    exact: true,
                },
            ],
            rahbariyat: null,
            biograf_show: false,
            rais: [],
            birinchi_orinbosar: [],
            dialog_image: false,
            image: null,
            description: null,
            orinbosarlar: []
        }
    },
    methods: {
        async initialize() {

            const _this = this;
            await api.readRahbariyats(1).then((response) => {
                _this.rahbariyat = response.data.data;
                Object.entries(_this.rahbariyat).forEach(([valkey, v]) => {
                    if (v.lavozimi === '1') {
                        _this.rais = v;
                    } else if (v.lavozimi === '2') {
                        _this.birinchi_orinbosar = v;
                    } else _this.orinbosarlar.push(v);
                })
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                // this.$router.replace("/").catch(() => {
                // });
            });

        }
    },
    created() {
        this.initialize()
    }
}
</script>
<style>
.biograf_show.white--text p {
    color: white;
}
.rahbar_description{
    width: 500px;
    padding: 30px;
    background-color: rgb(132 132 132);
    font-size: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;
}
.rahbar_description h3{
    text-align: center;
    margin-bottom: 60px;
}
.rahbar_description p{
    line-height: 36px;
    text-align: justify;
}
</style>

