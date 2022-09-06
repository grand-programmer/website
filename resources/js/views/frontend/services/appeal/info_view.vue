<template>
    <div class="section customs-value-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content" v-if=" typeof t_app.appNum !=='undefined'">
            <v-container>
                <v-row>
                    <h3 class="pb-5 mt-5 primary-color" style="font-weight: bold">Божхона органларига мурожаат</h3>
                    <h5><b>Ариза рақами: </b>{{ t_app.appNum }}</h5>
                </v-row>
                <v-row>
                    <!--                    <v-tabs
                                            v-model="tab"
                                            left
                                            class="fixed-color-tabs"

                                        >
                                            <v-tab
                                                v-for="item in items"
                                                :key="item.tab"
                                                style="width: 400px"


                                            >
                                                {{ item.tab }}
                                            </v-tab>
                                        </v-tabs>-->


                    <v-simple-table v-if="typeof  t_app.appNum !== 'undefined'" style="padding: 40px; margin-top: 20px">
                        <template v-slot:default>
                            <tbody>
                            <tr>
                                <td style="font-weight: 550">ЖШШИР</td>
                                <td>{{
                                        typeof t_app.personPin !== 'undefined' ? t_app.personPin : null
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: 550">Фамилияси, исми, шарифи</td>
                                <td>{{
                                        typeof t_app.firstName !== 'undefined' ? t_app.firstName : null
                                    }} {{
                                        typeof t_app.lastName !== 'undefined' ? t_app.lastName : null
                                    }} {{
                                        typeof t_app.surName !== 'undefined' ? t_app.surName : null
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: 550">Танланган бошқарма</td>
                                <td>{{
                                        typeof t_app.locationNm !== 'undefined' ? t_app.locationNm : null
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: 550">Такрорий ариза</td>
                                <td>{{
                                        (typeof t_app.appealType !== 'undefined' && t_app.appealType === 2) ? 'ХА' : 'ЙЎҚ'
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: 550">Манзили</td>
                                <td>{{
                                        typeof t_app.address !== 'undefined' ? t_app.address : null
                                    }}
                                </td>
                            </tr>


                            <tr>
                                <td style="font-weight: 550">Телефон рақами</td>
                                <td>{{
                                        typeof t_app.phoneNumber !== 'undefined' ? t_app.phoneNumber : null
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight: 550">Электрон манзили</td>
                                <td>{{
                                        typeof t_app.email !== 'undefined' ? t_app.email : null
                                    }}
                                </td>
                            </tr>
                            <tr v-if="typeof  t_app.profession !== 'undefined'">
                                <td style="font-weight: 550">Иш жойи</td>
                                <td>{{
                                        typeof t_app.profession !== 'undefined' ? t_app.profession : null
                                    }}
                                </td>
                            </tr>
                            <tr v-if="typeof  fileQuestion !== 'undefined' && fileQuestion">
                                <td style="font-weight: 550">Илова қилинган файл</td>
                                <td>
                                    <a :href="'data:'+fileQuestion.file_format +';base64,'+ fileQuestion.data"
                                       :download="fileQuestion.fileNameEx">Юклаб олиш!</a>
                                </td>
                            </tr>
                            <tr v-if="typeof  fileAnswer !== 'undefined' && fileAnswer && fileAnswer.length>0">
                                <td style="font-weight: 550">Жавоб хати</td>
                                <td>
                                    <a :href="'data:'+fileAnswer[0].file_format +';base64,'+ fileAnswer[0].data"
                                       :download="fileAnswer[0].fileNameEx">Юклаб олиш</a>
                                </td>
                            </tr>
                            <tr v-if="typeof  t_app.statusNm !== 'undefined'">
                                <td style="font-weight: 550">Ариза ҳолати</td>
                                <td>{{
                                        typeof t_app.statusNm !== 'undefined' ? t_app.statusNm : null
                                    }}
                                </td>
                            </tr>

                            <tr v-if="typeof $route.params.key !=='undefined' && 1===2">
                                <td>{{$route.params.key}}</td>
                                <td> <a @click="generateReport" class="primary-color">Мурожаатни чоп қилиш учун юклаб олинг</a></td>
                            </tr>
                            <tr v-if="typeof  t_app.messageBody !== 'undefined'">
                                <td style="font-weight: 550">Мурожаат мазмуни</td>
                                <td>{{
                                        typeof t_app.messageBody !== 'undefined' ? t_app.messageBody : null
                                    }}
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>


<vue-html2pdf
                         :show-layout="false"
                         :float-layout="true"
                         :enable-download="true"
                         :preview-modal="false"
                         filename="murojaat"
                         :pdf-quality="2"
                         pdf-format="a4"
                         pdf-orientation="portrait"
                         pdf-content-width="800px"
                         :manual-pagination="true"
                         ref="html2Pdfaa"

>

                        <section slot="pdf-content">
                            <section class="pdf-item">
                                <div class="container print_dialog"  style="background-color: #fff; ">

                                    <!--                                                <div class="background"></div>-->
                                    <div>
                                        <div class="dialog_header">
                                            <img width="40" height="40" src="/img/gtk_image.png">
                                            <p>Божхона органларига <span>мурожаат</span></p>
                                            <qrcode :value="baseURL" :options="{ width: 80 }"></qrcode>
                                        </div>
                                        <div class="dialog_content">


                                            <table>
                                                <tr>
                                                    <td>Мурожаат тартиб рақами</td>
                                                    <td>{{ appeal.appNum }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.password !=='undefined'">
                                                    <td>Мурожаат текшириш коди</td>
                                                    <td>{{ appeal.password }}</td>
                                                </tr>
                                                <tr  v-if="typeof appeal.insTime !=='undefined'">
                                                    <td>Мурожаат тушган сана ва вақт</td>
                                                    <td>{{ appeal.insTime }}</td>
                                                </tr>
                                                <!--                                    <tr>
                                                                                        <td>Ижрочига келиб тушган сана ва вақт</td>
                                                                                        <td>2313</td>
                                                                                    </tr>-->
                                                <tr v-if="typeof appeal.lastName !=='undefined' || typeof appeal.surName !=='undefined' || typeof appeal.firstName !=='undefined'">
                                                    <td>Мурожаат муаллифи Ф.И.О</td>
                                                    <td>{{ appeal.firstName?appeal.firstName:'' }} {{ appeal.lastName?appeal.lastName:'' }} {{ appeal.surName?appeal.surName:'' }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.address !=='undefined'">
                                                    <td>Жисмоний ёки юридик шахснинг манзили</td>
                                                    <td>{{ appeal.address }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.birthDate !=='undefined'">
                                                    <td>Туғилган йили</td>
                                                    <td>{{ appeal.birthDate }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.profession !=='undefined'">
                                                    <td>Иш жойи</td>
                                                    <td>{{ appeal.profession }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.position !=='undefined' && appeal.position ==='01' && typeof appeal.positionNm !=='undefined'">
                                                    <td>Юридик шахс номи</td>
                                                    <td>{{ appeal.positionNm }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.phoneNumber !=='undefined'">
                                                    <td>Телефон рақами</td>
                                                    <td>{{ appeal.phoneNumber }}</td>
                                                </tr>
                                                <tr v-if="typeof appeal.email !=='undefined'">
                                                    <td>Электрон манзили</td>
                                                    <td>{{ appeal.email }}</td>
                                                </tr>

                                                <!--
                                                                                                            <tr  v-if="typeof appeal.fileQuestion !=='undefined' && appeal.fileQuestion !==null && appeal.fileQuestion.data !==null && typeof appeal.fileQuestion.data !=='undefined'">
                                                                                                                <td>Илова қилинган файл</td>
                                                                                                                <td><a :href="'data:'+appeal.fileQuestion.file_format +';base64,'+ appeal.fileQuestion.data" :download="appeal.fileQuestion.fileNameEx">Юклаб олиш!</a></td>
                                                                                                            </tr>-->
                                                <tr v-if="typeof appeal.status !=='undefined' && typeof appeal.statusNm !=='undefined'">
                                                    <td>Ариза ҳолати</td>
                                                    <td>{{ appeal.statusNm }}</td>
                                                </tr><!--
                                                            <tr  v-if="typeof appeal.fileAnswer !=='undefined' && appeal.fileAnswer !==null && appeal.fileAnswer.data !==null && typeof appeal.fileAnswer.data !=='undefined'">
                                                                <td>Жавоб хати</td>
                                                                <td><a :href="'data:'+appeal.fileAnswer.file_format +';base64,'+ appeal.fileAnswer.data" :download="appeal.fileAnswer.fileNameEx">Юклаб олиш!</a></td>
                                                            </tr>-->
                                            </table>
                                            <table v-if="typeof appeal.messageBody !=='undefined'">
                                                <tr>
                                                    <td>
                                                        <p>Мурожаат матни </p>
                                                        <p>{{ appeal.messageBody }}</p>
                                                    </td>
                                                </tr>
                                            </table>


                                        </div>
                                        <!--                    <script type="application/javascript" src='/js/jquery.js'/>
                                                            <script type="application/javascript" src='/js/mix/app.js'/>-->
                                        <!--                    <div class="dialog_footer">
                                                                <router-link to="/"><span><img src="/img/icons/home.png"/></span>
                                                                    <p>Бош саҳифа</p></router-link>
                                                                <router-link to="/"><span><img src="/img/icons/download.png"/></span>
                                                                    <p>Юклаб олиш</p></router-link>
                                                            </div>-->
                                    </div>

                                </div>
                            </section>
                        </section>
                    </vue-html2pdf>

                </v-row>


            </v-container>


        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import Qrcode from '@chenfengyuan/vue-qrcode';
import VueHtml2pdf from 'vue-html2pdf';
import html2pdf from 'html2pdf.js'
import i18n from "../../../../i18n";
export default {
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
                    text: 'Менинг аризаларим',
                    to: '/applications',
                    disabled: false,
                    exact: true,
                },

            ],
            baseURL: window.location.href,
            appeal:[],
            tab: null,
            panel: 0,
            t_app: [],
            fileAnswer: null,
            fileQuestion: null,
            oferta: false,
            showed: false,
            dialog: false,
           // dialogResult: false,

            items: [
                {tab: "Аризачи умумиy маълумотлари"},
                {tab: 'Ариза ҳолати'},

            ],
            showPdf:false,

        }
    },

    mounted() {

        if (typeof this.$route.params.key != 'undefined' && this.$route.params.key.length > 0) {
            this.getAppData(this.$route.params.key)
        }else
        if (!this.$auth.user()) {
            this.$toast.success('Авторизациядан ўтишингиз талаб қилинади!')
            this.$router.push('/login');
        }
        else
            this.getAppData()


    },
    computed: {
        ...mapState(['loading'])
    },
    methods: {
        getAppData(key = null) {
            const _this = this;
            let params = null;

            if (key && key.length > 0) params = {
                appNum: _this.$route.params.id,
                password: key
            }
            else params = {
                appNum: _this.$route.params.id
            }
            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/appeal-check", {
                    params: params
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        if (typeof response.data.data.file != 'undefined' && typeof response.data.data.file[0] !== 'undefined' && response.data.data.file[0] !== null) {
                            _this.fileAnswer = response.data.data.file
                        }
                        if (typeof response.data.data.fileQuestion != 'undefined' && response.data.data.fileQuestion != null && typeof response.data.data.fileQuestion['fileName'] !== 'undefined') {
                            _this.fileQuestion = response.data.data.fileQuestion
                        }
                        if (typeof response.data.data.fileAnswer != 'undefined' && response.data.data.fileAnswer != null && typeof response.data.data.fileAnswer[0] !== 'undefined' && response.data.data.fileAnswer[0] !== null) {
                            _this.fileAnswer = response.data.data.fileAnswer
                        }
                        _this.t_app = response.data.data.appeal
                        _this.appeal = response.data.data.appeal
                        if(typeof _this.$route.params.key !='undefined') {
                            //_this.dialogResult = true;

                            _this.appeal.appNum = _this.$route.params.id;
                            _this.appeal.password = _this.$route.params.key;
                            _this.appeal.insTime = (typeof response.data.data.appeal.insTime != 'undefined') ? response.data.data.appeal.insTime : null;
                            _this.appeal.firstName = (typeof response.data.data.appeal.firstName != 'undefined') ? response.data.data.appeal.firstName : null;
                            _this.appeal.surName = (typeof response.data.data.appeal.surName != 'undefined') ? response.data.data.appeal.surName : null;
                            _this.appeal.lastName = (typeof response.data.data.appeal.lastName != 'undefined') ? response.data.data.appeal.lastName : null;
                            _this.appeal.address = (typeof response.data.data.appeal.address != 'undefined') ? response.data.data.appeal.address : null;
                            _this.appeal.birthDate = (typeof response.data.data.appeal.birthDate != 'undefined') ? response.data.data.appeal.birthDate : null;
                            _this.appeal.position = (typeof response.data.data.appeal.position != 'undefined') ? response.data.data.appeal.position : null;
                            _this.appeal.positionNm = (typeof response.data.data.appeal.positionNm != 'undefined') ? response.data.data.appeal.positionNm : null;
                            _this.appeal.phoneNumber = (typeof response.data.data.appeal.phoneNumber != 'undefined') ? response.data.data.appeal.phoneNumber : null;
                            _this.appeal.email = (typeof response.data.data.appeal.email != 'undefined') ? response.data.data.appeal.email : null;
                            _this.appeal.profession = (typeof response.data.data.appeal.profession != 'undefined') ? response.data.data.appeal.profession : null;
                            _this.appeal.messageBody = (typeof response.data.data.appeal.messageBody != 'undefined') ? response.data.data.appeal.messageBody : null;
                            _this.appeal.locationNm = (typeof response.data.data.appeal.locationNm != 'undefined') ? response.data.data.appeal.locationNm : null;
                            _this.appeal.status = (typeof response.data.data.appeal.status != 'undefined') ? response.data.data.appeal.status : null;
                            _this.appeal.statusNm = (typeof response.data.data.appeal.statusNm != 'undefined') ? response.data.data.appeal.statusNm : null;
                            _this.appeal.appealAnswer = (typeof response.data.data.appealAnswer != 'undefined') ? response.data.data.appealAnswer : null;
                            _this.appeal.fileAnswer = (typeof response.data.data.fileAnswer != 'undefined') ? response.data.data.fileAnswer : null;
                            _this.appeal.fileQuestion = (typeof response.data.data.fileQuestion != 'undefined') ? response.data.data.fileQuestion : null;


                            //_this.generateReport()
                        }
                        _this.breadcrumb_items.push({
                            text: "Мурожаат -" + _this.t_app.appNum,
                            to: '/services/appeals/' + _this.t_app.appNum,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error("Маълумот топилмади1!")
                        _this.$router.push("/applications");

                    }


                }).catch(function (error) {
                   if(error) {
                       console.log(error)
                       _this.$store.commit('setLoading', false)
                       _this.$toast.error("Маълумот топилмади2!")
                       _this.$router.push("/applications");
                   }
                })


            }, 500)

        },
        generateReport() {
            setTimeout(()=>
            {
/*                this.showPdf=true;
                html2pdf(this.$refs.html2Pdfaa, {
                    margin: 1,
                    filename: "murojaat.pdf",
                    //image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { dpi: 192, letterRendering: true },
                    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
                });*/
                //this.showPdf=false;
                this.$refs.html2Pdfaa.generatePdf()
            },100)
            //this.$refs['html2Pdf'][0].generatePdf()
        },
    },
    components:{
        VueHtml2pdf,
        Qrcode
    }
}
</script>
