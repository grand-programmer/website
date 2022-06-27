<template>
    <div class="appeal_info">
        <v-container>
            <div>
                <v-dialog v-model="print_dialog" width="35%">
                    <div class="container print_dialog" id="printMe" style="background-color: #fff">
                        <div class="background"></div>
                        <div>
                            <div class="dialog_header">
                                <img width="40" height="40" src="/img/gtk_image.png">
                                <p style="float: left">Божхона органларига <span>мурожаат</span></p>
                                <qrcode :value="baseURL+'/'+appeal.appNum+'/'+appeal.code" :options="{ width: 80 }"></qrcode>
                            </div>
                            <div class="dialog_content">

                                <table>
                                    <tr>
                                        <td>Мурожаат тартиб рақами</td>
                                        <td>{{ appeal.appNum }}</td>
                                    </tr>
                                    <tr v-if="typeof appeal.code !=='undefined'">
                                        <td>Мурожаат текшириш коди</td>
                                        <td>{{ appeal.code }}</td>
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

                                    <tr  v-if="typeof appeal.fileQuestion !=='undefined' && appeal.fileQuestion !==null && appeal.fileQuestion.data !==null && typeof appeal.fileQuestion.data !=='undefined'">
                                        <td>Илова қилинган файл</td>
                                        <td><a :href="'data:'+appeal.fileQuestion.file_format +';base64,'+ appeal.fileQuestion.data" :download="appeal.fileQuestion.fileNameEx">Юклаб олиш!</a></td>
                                    </tr>
                                    <tr v-if="typeof appeal.status !=='undefined' && typeof appeal.statusNm !=='undefined'">
                                        <td>Ариза ҳолати</td>
                                        <td>{{ appeal.statusNm }}</td>
                                    </tr>
                                    <tr  v-if="typeof appeal.fileAnswer !=='undefined' && appeal.fileAnswer !==null && appeal.fileAnswer.data !==null && typeof appeal.fileAnswer.data !=='undefined'">
                                        <td>Жавоб хати</td>
                                        <td><a :href="'data:'+appeal.fileAnswer.file_format +';base64,'+ appeal.fileAnswer.data" :download="appeal.fileAnswer.fileNameEx">Юклаб олиш!</a></td>
                                    </tr>
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
                            <div class="dialog_footer">
                                <router-link to="/"><span><img src="/img/icons/home.png"/></span>
                                    <p>Бош саҳифа</p></router-link>
                                <router-link to="/"><span><img src="/img/icons/download.png"/></span>
                                    <p>Юклаб олиш</p></router-link>
                            </div>
                        </div>

                    </div>
                </v-dialog>
            </div>
            <div id="printMe1">
            <div class="container print_dialog"  style="background-color: #fff; display: none;">
                <div class="background"></div>
                <div>
                    <div class="dialog_header">
                        <img width="40" height="40" src="/img/gtk_image.png">
                        <p>Божхона органларига <span>мурожаат</span></p>
                        <div id="qrcode"><qrcode :value="baseURL+appeal.appNum+appeal.code" :options="{ width: 80 }"></qrcode></div>
                    </div>
                    <div class="dialog_content">

                        <table>
                            <tr>
                                <td>Мурожаат тартиб рақами</td>
                                <td>{{ appeal.appNum }}</td>
                            </tr>
                            <tr v-if="typeof appeal.code !=='undefined'">
                                <td>Мурожаат текшириш коди</td>
                                <td>{{ appeal.code }}</td>
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

                            <tr  v-if="typeof appeal.fileQuestion !=='undefined' && appeal.fileQuestion !==null && appeal.fileQuestion.data !==null && typeof appeal.fileQuestion.data !=='undefined'">
                                <td>Илова қилинган файл</td>
                                <td><a :href="'data:'+appeal.fileQuestion.file_format +';base64,'+ appeal.fileQuestion.data" :download="appeal.fileQuestion.fileNameEx">Юклаб олиш!</a></td>
                            </tr>
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


            </div>
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
                ref="html2Pdf"
                >
                <section slot="pdf-content">
                    <section class="pdf-item">
                <div class="container print_dialog"  style="background-color: #fff; ">
                    <div class="background"></div>
                    <div>
                        <div class="dialog_header">
                            <img width="40" height="40" src="/img/gtk_image.png">
                            <p>Божхона органларига <span>мурожаат</span></p>
                            <qrcode :value="baseURL+appeal.appNum+appeal.code" :options="{ width: 80 }"></qrcode>
                        </div>
                        <div class="dialog_content">

                            <table>
                                <tr>
                                    <td>Мурожаат тартиб рақами</td>
                                    <td>{{ appeal.appNum }}</td>
                                </tr>
                                <tr v-if="typeof appeal.code !=='undefined'">
                                    <td>Мурожаат текшириш коди</td>
                                    <td>{{ appeal.code }}</td>
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
                                <tr v-if="typeof appeal.position !=='undefined' && appeal.position ==='02' && typeof appeal.positionNm !=='undefined'">
                                    <td>Юридик шахс номи</td>
                                    <td>{{ appeal.positionNm }}</td>
                                </tr>
                                <tr v-if="typeof appeal.phoneNumber !=='undefined'">
                                    <td>Телефон рақами</td>
                                    <td>{{ appeal.phoneNumber }}</td>
                                </tr>
                                <tr>
                                    <td>Электрон манзили</td>
                                    <td>{{ appeal.email }}</td>
                                </tr>


                                <tr  v-if="typeof appeal.fileQuestion !=='undefined' && appeal.fileQuestion !==null && appeal.fileQuestion.data !==null && typeof appeal.fileQuestion.data !=='undefined'">
                                    <td>Илова қилинган файл</td>
                                    <td><a :href="'data:'+appeal.fileQuestion.file_format +';base64,'+ appeal.fileQuestion.data" :download="appeal.fileQuestion.fileNameEx">Юклаб олиш!</a></td>
                                </tr>
                                <tr v-if="typeof appeal.status !=='undefined' && typeof appeal.statusNm !=='undefined'">
                                    <td>Ариза ҳолати</td>
                                    <td>{{ appeal.statusNm }}</td>
                                </tr>
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
        </v-container>
        <div class="background"></div>
        <div class="appeal_info_content">
            <h3>Сизнинг мурожаатингиз қабул қилинди</h3>
            <span class="info_check">
            <v-icon>fa-check</v-icon>
        </span>
            <p>Мурожаат рақами</p>
            <p><strong>{{ appeal.appNum }}</strong></p>
            <br>
            <p>Мурожаат ҳолатини текшириш коди</p>
            <p><strong>{{ appeal.code }}</strong></p>
            <div class="actions">
                <router-link to="/services/appeals"><img src="/img/icons/return.png"/></router-link>
                <a @click="generateReport"><img src="/img/icons/download.png"/></a>
                <a @click="print"><img src="/img/icons/print.png"/></a>
            </div>
        </div>
    </div>
</template>
<script>
import qrcode from '@chenfengyuan/vue-qrcode';
import print from 'print-js'
import VueHtml2pdf from 'vue-html2pdf'

export default {
    props: ['appeal'],
    data() {
        return {
            baseURL: process.env.MIX_DOMAIN_URL + "/services/appeals/",
            print_dialog: false,
        }
    },
    components: {qrcode,VueHtml2pdf},
    created(){
        ///this.getAppeal()
    },
    methods: {
        getAppeal(){
            const _this=this;
            axios.post("/api/v1/ex_api/appeal-check", {
                appNum: appeal.id,
                password: appeal.number,
            }).then((response) => {
                if(typeof response.data.data.appeal!=='undefined'){

                    _this.buttonLoading=false;
                    _this.dialog = true;

                    appeal.appNum=appeal.appeal_id;
                    appeal.password=appeal.appeal_code;
                    appeal.insTime=(typeof response.data.data.appeal.insTime!='undefined')?response.data.data.appeal.insTime:null;
                    appeal.firstName=(typeof response.data.data.appeal.firstName!='undefined')?response.data.data.appeal.firstName:null;
                    appeal.surName=(typeof response.data.data.appeal.surName!='undefined')?response.data.data.appeal.surName:null;
                    appeal.lastName=(typeof response.data.data.appeal.lastName!='undefined')?response.data.data.appeal.lastName:null;
                    appeal.address=(typeof response.data.data.appeal.address!='undefined')?response.data.data.appeal.address:null;
                    appeal.birthDate=(typeof response.data.data.appeal.birthDate!='undefined')?response.data.data.appeal.birthDate:null;
                    appeal.position=(typeof response.data.data.appeal.position!='undefined')?response.data.data.appeal.position:null;
                    appeal.positionNm=(typeof response.data.data.appeal.positionNm!='undefined')?response.data.data.appeal.positionNm:null;
                    appeal.phoneNumber=(typeof response.data.data.appeal.phoneNumber!='undefined')?response.data.data.appeal.phoneNumber:null;
                    appeal.email=(typeof response.data.data.appeal.email!='undefined')?response.data.data.appeal.email:null;
                    appeal.profession=(typeof response.data.data.appeal.profession!='undefined')?response.data.data.appeal.profession:null;
                    appeal.messageBody=(typeof response.data.data.appeal.messageBody!='undefined')?response.data.data.appeal.messageBody:null;
                    appeal.locationNm=(typeof response.data.data.appeal.locationNm!='undefined')?response.data.data.appeal.locationNm:null;
                    appeal.status=(typeof response.data.data.appeal.status!='undefined')?response.data.data.appeal.status:null;
                    appeal.statusNm=(typeof response.data.data.appeal.statusNm!='undefined')?response.data.data.appeal.statusNm:null;
                    appeal.appealAnswer=(typeof response.data.data.appealAnswer!='undefined')?response.data.data.appealAnswer:null;
                    appeal.fileAnswer=(typeof response.data.data.fileAnswer!='undefined')?response.data.data.fileAnswer:null;
                    appeal.fileQuestion=(typeof response.data.data.fileQuestion!='undefined')?response.data.data.fileQuestion:null;
                }else {
                    this.$toast.error("Сервердан маълумот олишда хатолик юз берди!")
                }
            }).catch((error) => {
                _this.buttonLoading=false;
                this.dialog = false;
                this.$toast.error("Маълумот топилмади!");
                /*                this.alert.value = true;
                                this.alert.alert_type = 'error';
                                this.alert.alert_text = "Маълумот топилмади!";*/
            });

        },
        print() {
            $("#printMe1 > div.print_dialog").css('display','block');
            print({
                printable:'printMe1',
                type: 'html',
                css:['/css/bootstrap.min.css','/css/one.css'],
                scanStyles:false,
                documentTitle:'.',
                header:' '
            });
            $("#printMe1 > div.print_dialog").css('display','none');
/*            var QRCode = require('qrcode');
            QRCode.toCanvas('Hello World', { errorCorrectionLevel: 'H' }, function (err, canvas) {
                if (err) throw err

                var container = document.getElementById('qrcode')
                container.appendChild(canvas)
            })

            // Pass the element id here
            $("#printMe1 > div.print_dialog").css('display','block');
            this.$htmlToPaper('printMe1');
            $("#printMe1 > div.print_dialog").css('display','none');*/
        },
        generateReport () {
            $("#printMe1 > div.print_dialog").css('display','block');
            this.$refs.html2Pdf.generatePdf();
            $("#printMe1 > div.print_dialog").css('display','none');
        }
    }
}

</script>
<style>

</style>
