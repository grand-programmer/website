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
                <v-card v-if="typeof organization.rahbariyat !=='undefined' ">
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3>
                                {{ organization.title }}
                            </h3>
                        </v-col>
                    </v-card-title>
                    <v-col cols="12" class="rais" >
                        <div class="wrapper">
                            <div class="row">
                                <div class="col-2" :style="organization.id===20?'background:none; border:none':''" >
                                    <div class="profile-icon-wrapper">
                                        <div class="profile-icon"
                                             :style="'background-image: url(/storage/uploads/boshqarmalar/boshliq/'+ organization.rahbariyat.boshliq.image + ');'">
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
                                            <p v-if="organization.id===20">{{$t('Институт бошлиғи')}}</p>
                                            <p v-else-if="organization.id!==16">{{  $t('Бошқарма бошлиғи') }}</p>
                                            <p v-else>{{ $t("Директор") }}</p>
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

                    <div class="col-12 orinbosarlar " style="/* margin: 20px auto;">
                        <div class="row">
                            <h3 style="text-align: center;">&nbsp;</h3>
                        </div>
                        <div class="row justify-content-center">
                            <div class="orinbosar col-3" v-for="(orinbosar,keyOrinbosar) in organization.rahbariyat.orinbosar">
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
                                                    <p v-if="organization.id===20">
                                                        <template v-if="keyOrinbosar===0">{{$t('Бошлиқнинг ўқув ва илмий ишлар бўйича биринчи ўринбосари')}}</template>
                                                        <template v-if="keyOrinbosar===1">{{$t('Бошлиқнинг тарбиявий ишлар ва ҳарбий тайёргарлик бўйича ўринбосари')}}</template>
                                                        <template v-if="keyOrinbosar===2">{{$t('Бошлиқнинг молия-иқтисод ва хўжалик ишлари бўйича ўринбосари')}}</template>
                                                    </p>
                                                    <p v-else>{{orinbosar.lavozimi}}</p>
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
                        </div>
                    </div>

                </v-card>
                <v-card v-if="typeof organization.rahbariyat.boshliq.biografiyasi !=='undefined' && organization.rahbariyat.boshliq.biografiyasi.length>10">
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3>
                                <h3>{{ organization.title }} {{$t('функция ва вазифалари')}}</h3>

                            </h3>
                        </v-col>
                    </v-card-title>
                    <v-card-text class="mt-10 pb-10">
                        <v-row v-html="organization.rahbariyat.boshliq.biografiyasi">

                        </v-row>
                    </v-card-text>

                </v-card>
                <v-card v-if="typeof organization.manzil !=='undefined'">
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3>
                                {{ $t("Манзил") }}
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
                                                {{ $t("Манзил") }}:
                                            </td>
                                            <td><p><span>{{ organization.manzil.manzil }}</span><br></p></td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-navigation</v-icon>
                                                {{ $t("Автобуслар") }}:
                                            </td>
                                            <td>{{organization.manzil.avtobus}}</td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-navigation</v-icon>
                                                {{ $t("Йўналишдаги такси") }}:
                                            </td>
                                            <td>{{organization.manzil.ytaksi}}</td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-phone</v-icon>
                                                {{ $t("Телефон") }}:
                                            </td>
                                            <td><span
                                                style="font-size: 12pt; line-height: 107%; font-family: 'Times New Roman', 'serif'; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">{{organization.manzil.telefon}}</span><br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="th">
                                                <v-icon color="primary">mdi-phone</v-icon>
                                                {{ $t("Факс") }}:
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
                                </v-row>
                            </v-col>

                        </v-row>
                    </v-card-text>

                </v-card>

                <v-card v-if="typeof organization.posts !=='undefined' && organization.posts && organization.posts.length > 0">
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
                        :no-data-text="$t('Маълумот топилмади')"
                    ></v-data-table>
                </v-card>
                <v-card v-if="news.length>0">
                    <v-card-title>
                        <v-col cols="12" class="boshqarma-section-title">
                            <h3> Бошқармага оид янгиликлар</h3>
                        </v-col>
                    </v-card-title>
                    <v-card-text>
                        <div class="single_blog_content">
                            <v-row><v-col></v-col>

                            </v-row>
                            <v-row>
                                <v-col cols="4" class="news-item" v-for="(news,index) in news" :key="news.slug+index">
                                    <div class="news-item-content">
                                        <router-link class="news__img" :to="`/news/` + news.slug "><img
                                            :src="`/storage/uploads/`+news.image" class="w-100" style="height: 250px"></router-link>
                                        <div class="news-meta"><span>{{ news.created_at }}</span></div>
                                        <router-link class="news__title" :to="`/news/` + news.slug ">{{ news.title }}
                                        </router-link>
                                    </div>
                                </v-col>

                            </v-row>
                        </div>

                    </v-card-text>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import api from "./../../../src/services/apiService";
import i18n from "../../../i18n";

export default {
    name: 'SingleOrganization',
    data: () => ({
        breadcrumb_items: [
            {
                text: i18n.t('Асосий саҳифа'),
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
        news:[],
        headers: [
            {
                text: i18n.t('Пост номи'),
                align: 'start',
                sortable: true,
                value: 'title',
                width:300
            },
            {text: i18n.t('Пост ҳақида қисқача маълумот'), value: 'description'},
            {text: i18n.t('Манзили'), value: 'manzili'},
            {text: i18n.t('Боғланиш учун телефонлар'), value: 'telefon',width:180},
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
            const _this=this;
            api.readOrg(this.$route.params.id).then((response) => {
                this.organization = response.data.data;
                //if(!this.organization.id) this.$router.replace('/404')
                this.breadcrumb_items[1].text = this.organization.title;

                api.readNews({boshqarma:this.organization.id}).then((response) => {
                    _this.news = response.data;
                    //if(!this.organization.id) this.$router.replace('/404')
                }).catch((error) => {
                    //this.$router.replace('/404')

                    /*this.$router.replace("/").catch(() => {
                    });*/
                })

            }).catch((error) => {
                this.$router.replace('/404')
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                /*this.$router.replace("/").catch(() => {
                });*/
            })




        },
    }

}
</script>
<style>

</style>
