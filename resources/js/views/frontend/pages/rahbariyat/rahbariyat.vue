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
                        <div class="widget_tittle"><h3>{{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Раҳбарияти") }}</h3></div>
                        <div>


                            <div class="container">
                                <div class="row">
                                    <div class="col-12 rais">
                                        <div class="wrapper">
                                            <div class="row">
                                                <div class="col-2">
                                                    <div class="profile-icon-wrapper">
                                                        <div class="profile-icon"
                                                             @click="dialog_image=true; image='/storage/uploads/markaziy/'+ rais.image; description=rais.biografiyasi && rais.biografiyasi.length>10? '<h3>' + rais.fio +'</h3>' + rais.biografiyasi:''"
                                                             :style="'background-image: url(/storage/uploads/markaziy/'+ rais.image +');'">
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
                                                            <p>{{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раиси") }}</p>
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
                                                                         @click="dialog_image=true; image='/storage/uploads/markaziy/'+ birinchi_orinbosar.image;
description=birinchi_orinbosar.biografiyasi && birinchi_orinbosar.biografiyasi.length>10? '<h3>' + birinchi_orinbosar.fio +'</h3>' + birinchi_orinbosar.biografiyasi:''"
                                                                         :style="'background-image: url(/storage/uploads/markaziy/'+ birinchi_orinbosar.image +');'">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                                <p>{{ $t(birinchi_orinbosar.fio) }}</p>
                                                            </div>
                                                            <div class="orinbosar-info">
                                                                <div class="text-row">
                                                                    <div class="far fa-user">&nbsp;</div>
                                                                    <p>{{
                                                                            $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг биринчи ўринбосари")
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
                                                                         @click="dialog_image=true; image='/storage/uploads/markaziy/'+ orinbosar.image;
description=orinbosar.biografiyasi && orinbosar.biografiyasi.length>10? '<h3>' + orinbosar.fio +'</h3>' + orinbosar.biografiyasi:''"
                                                                         :style="'background-image: url(/storage/uploads/markaziy/'+ orinbosar.image +');'">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                                <p>{{ $t(orinbosar.fio) }}</p>
                                                            </div>
                                                            <div class="orinbosar-info">
                                                                <div class="text-row">
                                                                    <div class="far fa-user">&nbsp;</div>
                                                                    <p>
                                                                        {{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг ўринбосари") }}</p>
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
                                            <!--                        <div class="orinbosar col-3">
                                                                        <div class="row">
                                                                            <div class="col-12">
                                                                                <div>
                                                                                    <div class="orinbosar-header">
                                                                                        <div class="profile-icon-wrapper">
                                                                                            <div class="profile-icon">&nbsp;</div>
                                                                                        </div>
                                                                                        <p>КОДИРОВ УТКИРЖОН ГАЙРАТОВИЧ</p>
                                                                                    </div>
                                                                                    <div class="orinbosar-info">
                                                                                        <div class="text-row">
                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                            <p>Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раиси ўринбосари</p>
                                                                                        </div>
                                                                                        <div class="text-row">
                                                                                            <div class="far fa-clock">&nbsp;</div>
                                                                                            <p>Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача</p>
                                                                                        </div>
                                                                                        <div class="text-row">
                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                            <p>(78) - 120-76-00</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="orinbosar col-3">
                                                                        <div class="row">
                                                                            <div class="col-12">
                                                                                <div>
                                                                                    <div class="orinbosar-header">
                                                                                        <div class="profile-icon-wrapper">
                                                                                            <div class="profile-icon">&nbsp;</div>
                                                                                        </div>
                                                                                        <p>МУСАМУХАМЕДОВ НОДИР КАМАЛИТДИНОВИЧ</p>
                                                                                    </div>
                                                                                    <div class="orinbosar-info">
                                                                                        <div class="text-row">
                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                            <p>Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раиси ўринбосари</p>
                                                                                        </div>
                                                                                        <div class="text-row">
                                                                                            <div class="far fa-clock">&nbsp;</div>
                                                                                            <p>Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача</p>
                                                                                        </div>
                                                                                        <div class="text-row">
                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                            <p>(78) - 120-76-00</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>-->
                                        </div>
                                    </div>
                                  <!-- maslahatchilar-->
                                    <div class="col-12 orinbosarlar">
                                        <div class="row">
                                            <h3 style="text-align: center;">&nbsp;</h3>
                                        </div>
                                        <div class="row justify-content-center">

                                            <div class="orinbosar col-3" v-for="orinbosar in maslahatchilar">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div>
                                                            <div class="orinbosar-header">
                                                                <div class="profile-icon-wrapper">
                                                                    <div class="profile-icon"
                                                                         @click="dialog_image=true; image='/storage/uploads/markaziy/'+ orinbosar.image;
description=orinbosar.biografiyasi && orinbosar.biografiyasi.length>10? '<h3>' + orinbosar.fio +'</h3>' + orinbosar.biografiyasi:''"
                                                                         :style="'background-image: url(/storage/uploads/markaziy/'+ orinbosar.image +');'">
                                                                        &nbsp;
                                                                    </div>
                                                                </div>
                                                                <p>{{ $t(orinbosar.fio) }}</p>
                                                            </div>
                                                            <div class="orinbosar-info">
                                                                <div class="text-row">
                                                                    <div class="far fa-user">&nbsp;</div>
                                                                    <p>
                                                                      {{
                                                                        (typeof orinbosar.translates !== 'undefined' && typeof orinbosar.translates[$i18n.locale] !== 'undefined' && orinbosar.translates[$i18n.locale]['lavozim_name'] && typeof orinbosar.translates[$i18n.locale]['lavozim_name'] !== 'undefined') ? orinbosar.translates[$i18n.locale]['lavozim_name'] : orinbosar.lavozim_name
                                                                      }}</p>
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

                                  <!-- maslahatchilar -->
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
                    text: i18n.t('Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раҳбарияти'),
                    to: '/page/rahbariyat',
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
            orinbosarlar: [],
            maslahatchilar: []
        }
    },
    methods: {
        async initialize() {

            const _this = this;
            await api.readRahbariyats(0).then((response) => {
                _this.rahbariyat = response.data.data;
                Object.entries(_this.rahbariyat).forEach(([valkey, v]) => {
                    if (v.lavozimi === '1') {
                        _this.rais = v;
                    } else if (v.lavozimi === '2') {
                        _this.birinchi_orinbosar = v;
                    }  else if (v.lavozimi === '3') {
                      _this.orinbosarlar.push(v);
                    } else _this.maslahatchilar.push(v);
                })
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/").catch(() => {
                });
            });

        }
    },
    created() {
        this.initialize()
    },
  mounted(){
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mavlonov Akmalxuja Yusupovich",
      "jobTitle": "Bojxona qo‘mitasi raisi",
      "image": "https://bojxona.uz/storage/uploads/markaziy/1650972408.png",
      "url": "https://bojxona.uz/oz/page/rahbariyat",
      "worksFor": {
        "@type": "GovernmentOrganization",
        "name": "O‘zbekiston Respublikasi Bojxona qo‘mitasi",
        "url": "https://bojxona.uz"
      }
    })
    document.head.appendChild(script)
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

