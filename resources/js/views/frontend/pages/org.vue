<template>
    <div class="section page-container">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <v-container v-if="organization" class="boshqarma-page">
            <v-row>
                <v-card>
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3>
                                {{ organization.title }}
                            </h3>
                        </v-col>
                    </v-card-title>
                    <v-col cols="12" class="rais">
                        <div class="wrapper">
                            <div class="row">
                                <div class="col-2">
                                    <div class="profile-icon-wrapper">
                                        <div class="profile-icon"
                                             :style="'background-image: url(/storage/uploads/boshqarmalar/boshliq/'+organization.rahbariyat.boshliq.image + ');'">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div>
                                        <div class="text-row">
                                            <p>{{ organization.rahbariyat.boshliq.name }}</p>
                                        </div>
                                        <div class="text-row">
                                            <div class="far fa-user">&nbsp;</div>
                                            <p>{{organization.rahbariyat.boshliq.lavozimi}}</p>
                                        </div>
                                        <div class="text-row">
                                            <div class="far fa-clock">&nbsp;</div>
                                            <p>{{ organization.rahbariyat.boshliq.qabul }}</p>
                                        </div>
                                        <div class="text-row">
                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                            <p>{{organization.rahbariyat.boshliq.telefon}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <div class="col-12 orinbosarlar" style="/* margin: 20px auto;">
                        <div class="row">
                            <h3 style="text-align: center;">&nbsp;</h3>
                        </div>
                        <div class="row">
                            <div class="orinbosar col-3" v-for="orinbosar in organization.rahbariyat.orinbosar">
                                <div class="row">
                                    <div class="col-12">
                                        <div>
                                            <div class="orinbosar-header">
                                                <div class="profile-icon-wrapper">
                                                    <div class="profile-icon"
                                                         :style="'background-image: url(/storage/uploads/boshqarmalar/orinbosar/'+orinbosar.image + ');'"></div>
                                                </div>
                                                <p>{{orinbosar.name}}</p>
                                            </div>
                                            <div class="orinbosar-info">
                                                <div class="text-row">
                                                    <div class="far fa-user">&nbsp;</div>
                                                    <p>{{orinbosar.lavozimi}}</p>
                                                </div>
                                                <div class="text-row">
                                                    <div class="far fa-clock">&nbsp;</div>
                                                    <p>{{orinbosar.qabul}}</p>
                                                </div>
                                                <div class="text-row">
                                                    <div class="fas fa-phone-alt">&nbsp;</div>
                                                    <p>{{orinbosar.telefon}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="orinbosar col-3">
                                <div class="row">
                                    <div class="col-12">
                                        <div>
                                            <div class="orinbosar-header">
                                                <div class="profile-icon-wrapper">
                                                    <div class="profile-icon">&nbsp;</div>
                                                </div>
                                                <p>САЛИЕВ МУТАЛИБДЖАН ОБИДЖОНОВИЧ</p>
                                            </div>
                                            <div class="orinbosar-info">
                                                <div class="text-row">
                                                    <div class="far fa-user">&nbsp;</div>
                                                    <p>Давлат божхона қўмитаси раиси ўринбосари</p>
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
                                                <p>КОДИРОВ УТКИРЖОН ГАЙРАТОВИЧ</p>
                                            </div>
                                            <div class="orinbosar-info">
                                                <div class="text-row">
                                                    <div class="far fa-user">&nbsp;</div>
                                                    <p>Давлат божхона қўмитаси раиси ўринбосари</p>
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
                                                    <p>Давлат божхона қўмитаси раиси ўринбосари</p>
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
                </v-card>
                <v-card>
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3>
                                Манзил
                            </h3>
                        </v-col>
                    </v-card-title>
                    <v-card-text class="mt-10 pb-10">
                        <v-row>
                            <v-col cols="6">

                                <img :src="'/storage/uploads/boshqarmalar/manzil/'+organization.manzil.image" class="w-100"/>
                            </v-col>
                            <v-col cols="6">

                                <v-row class="boshqarma-manzil">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td class="th ">
                                                <v-icon color="primary">mdi-map-marker</v-icon>
                                                Manzil:
                                            </td>
                                            <td><p><span>{{ organization.manzil.manzil }}</span><br></p></td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-navigation</v-icon>
                                                Avtobuslar:
                                            </td>
                                            <td>{{organization.manzil.avtobus}}</td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-navigation</v-icon>
                                                Yunalishdagi taksi:
                                            </td>
                                            <td>{{organization.manzil.ytaksi}}</td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-phone</v-icon>
                                                Telefon:
                                            </td>
                                            <td><span
                                                style="font-size: 12pt; line-height: 107%; font-family: 'Times New Roman', 'serif'; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">{{organization.manzil.telefon}}</span><br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-phone</v-icon>
                                                Faks:
                                            </td>
                                            <td><span
                                                style="font-size: 12pt; line-height: 107%; font-family: 'Times New Roman', 'serif'; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">{{organization.manzil.faks}}</span><br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-email-open-outline</v-icon>
                                                E-mail:
                                            </td>
                                            <td>{{organization.manzil.email}}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </v-row>
                                <v-row v-html="organization.manzil.map" style="height: 150px" class="yandex-map">

<!--                                    <div style="position:relative;overflow:hidden;">
                                        <a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                                           style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a
                                        href="https://yandex.com/maps/profile?ll=69.251162%2C41.311011&utm_medium=mapframe&utm_source=maps&z=16"
                                        style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты —
                                        транспорт,
                                        навигация, поиск мест</a>
                                        <iframe src="https://yandex.com/map-widget/v1/-/CCUFALF3TD" width="560"
                                                height="200"
                                                frameborder="1" allowfullscreen="true"
                                                style="position:relative;"></iframe>
                                    </div>-->
                                </v-row>
                            </v-col>

                        </v-row>
                    </v-card-text>

                </v-card>
                <v-card>
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3> Божхона постлари</h3>
                        </v-col>
                        <v-col cols="4" offset="8">
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Қидириш"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="organization.posts"
                        :search="search"
                        class="boshqarma-postlar"
                    ></v-data-table>
                </v-card>
            </v-row>
        </v-container>


    </div>
</template>
<script>
import api from "./../../../src/services/apiService";

export default {
    name: 'SingleOrganization',
    data: () => ({
        breadcrumb_items: [
            {
                text: 'Асосий саҳифа',
                to: '/',
                disabled: false,
                exact: true,
            },
            {
                text: '',
                to: '/page/',
                disabled: true,
                exact: true,
            },
        ],
        /*id:this.$route.params.id,*/
        organization: {},
        relates: {},
        search: '',
        headers: [
            {
                text: 'Пост номи',
                align: 'start',
                sortable: true,
                value: 'title',
                width:300
            },
            {text: 'Пост ҳақида қисқача маълумот', value: 'description'},
            {text: 'Манзили', value: 'manzili'},
            {text: 'Боғланиш учун телефонлар', value: 'telefon',width:180},
        ],
        posts: [

        ],
    }),
    watch: {
        $route(to, from) {
            this.initialize();
        }
    },
    created() {
        this.initialize();
    },
    title() {
        this.organization.title;
    },

    methods: {
        close() {
            //this.$router.replace('/');
        },
        initialize() {
            api.readOrg(this.$route.params.id).then((response) => {
                this.organization = response.data.data;
                //if(!this.organization.id) this.$router.replace('/404')
                this.breadcrumb_items[1].text = this.organization.title;
            }).catch((error) => {
                this.$router.replace('/404')
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                /*this.$router.replace("/").catch(() => {
                });*/
            })


        },
    }

}
</script>
<style>

</style>
