<template>
    <div class="resume_info">
        <v-container>

            <div id="printMe1">
                <div class="container print_dialog vacancy" style="background-color: #fff; display: none;">
                    <div>
                        <div class="dialog_header">
                            <img src="/img/gtk_image.png">
                            <p style=""> Божхона органларига номзод <span> маълумотномаси </span></p>
                            <div id="qrcode">
                                <qrcode value="Hello, World!" :options="{ width: 80 }"></qrcode>
                            </div>
                        </div>
                        <div class="dialog_content">

                            <table>
                                <tr>

                                    <td colspan="2"
                                        style="text-align: left; font-size: 30px; padding-top: 60px;  font-weight: bold;">
                                        {{ resume.user.first_name }} {{ resume.user.sur_name }} {{
                                            resume.user.mid_name
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 60%" class="umumiy header">
                                        <p style=""> Умумий маълумотлар</p>
                                        <table style="width:100%; text-align: left">
                                            <tr>
                                                <td>Туғилган сана</td>
                                                <td>{{ resume.user.birth_date }}</td>
                                            </tr>
                                            <tr>
                                                <td>Манзил</td>
                                                <td>{{ resume.per_adr }}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{{ resume.user.email }}</td>
                                            </tr>
                                            <tr>
                                                <td>Телефон</td>
                                                <td>{{ resume.user.phone }}</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td style="width: 40%; margin-left: -20px">
                                        <img :src="'/public/images/users/'+ resume.user.id +'.jpg'"
                                             style="width: 150px">
                                    </td>
                                </tr>
                                <template v-if="resume.user_add">
                                    <tr>
                                        <td colspan="2" class="header"><p style="">Таълим тўғрисида</p></td>
                                    </tr>

                                    <tr>
                                        <td style="text-align: left">Ўқув юрти номи</td>
                                        <td >Ўқиган даври</td>
                                    </tr>
                                    <tr v-for="talim in resume.user_add.malumotlar" v-if="resume.user_add">
                                        <td style="width: 60%; text-align: left">
                                            {{ talim.ooy }}
                                        </td>
                                        <td>{{ talim.davr }}</td>
                                    </tr>

                                    <tr v-if="resume.user_add.sertifikatlar">
                                        <td colspan="2" class="header"><p style="">Сертификатлари</p></td>
                                    </tr>

                                    <tr v-if="resume.user_add.sertifikatlar">
                                        <td style="text-align: left"> Ўқув маркази</td>
                                        <td > Тугатган санаси</td>
                                    </tr>
                                    <tr v-for="sertifikat in resume.user_add.sertifikatlar">
                                        <td style="width: 60%; text-align: left">
                                            {{ sertifikat.oquv_markazi }}
                                        </td>
                                        <td>{{ sertifikat.hujjat_sanasi }}</td>
                                    </tr>
<!--                                    <tr>-->


<!--                                    <tr v-if="resume.user_add.mehnat_faoliyatlar">
                                        <td colspan="2" class="header"><p style="">Иш стажи</p></td>
                                    </tr>
                                    <tr v-for="mehnat in resume.user_add.mehnat_faoliyatlar">
                                        <td style="width: 60%; text-align: left">
                                            {{ mehnat.tashkilot }}
                                        </td>
                                        <td>{{ mehnat.davr }}</td>
                                    </tr>-->
                                </template>

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
                filename="resume"
                :pdf-quality="2"
                pdf-format="a4"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                :manual-pagination="true"
                ref="html2Pdf"
            >
                <section slot="pdf-content">
                    <section class="pdf-item" style="max-width:40vw">
                        <div class="container print_dialog vacancy vacancy-pdf" style="background-color: #fff; ">

                            <div>
                                <div class="dialog_header">
                                    <img width="40" height="40" src="/img/gtk_image.png">
                                    <p> Божхона органларига номзод <span> маълумотномаси </span></p>
                                    <qrcode value="Hello, World!" :options="{ width: 80 }"></qrcode>
                                </div>
                                <div class="dialog_content">

                                    <table>
                                        <tr>

                                            <td colspan="2"
                                                style="text-align: left; font-size: 30px; padding-top: 60px;  font-weight: bold;">
                                                {{ resume.user.first_name }} {{ resume.user.sur_name }}
                                                {{ resume.user.mid_name }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 90%" class="umumiy header">
                                                <p style=""> Умумий маълумотлар</p>
                                                <table style="width:100%; text-align: left">
                                                    <tr>
                                                        <td>Туғилган сана</td>
                                                        <td>{{ resume.user.birth_date }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Манзил</td>
                                                        <td>{{ resume.per_adr }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>{{ resume.user.email }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Телефон</td>
                                                        <td>{{ resume.user.phone }}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="width: 30%; margin-left: -20px">
                                                <img :src="'/public/images/users/'+ resume.user.id +'.jpg'"
                                                     style="width: 150px">
                                            </td>
                                        </tr>
                                        <template v-if="resume.user_add">
                                            <tr>
                                                <td colspan="2" class="header"><p style="">Таълим тўғрисида</p></td>
                                            </tr>
                                            <tr>
                                                <td >Ўқув юрти номи</td>
                                                <td >Ўқиган даври</td>
                                            </tr>
                                            <tr v-for="talim in resume.user_add.malumotlar" v-if="resume.user_add">
                                                <td style="width: 60%; text-align: left">
                                                    {{ talim.ooy }}
                                                </td>
                                                <td>{{ talim.davr }}</td>
                                            </tr>

                                            <tr v-if="resume.user_add.sertifikatlar">
                                                <td colspan="2" class="header"><p style="">Сертификатлари</p></td>
                                            </tr>
                                            <tr v-if="resume.user_add.sertifikatlar">
                                                <td > Ўқув маркази</td>
                                                <td > Тугатган санаси</td>
                                            </tr>

                                            <tr v-for="sertifikat in resume.user_add.sertifikatlar">
                                                <td style="width: 60%; text-align: left">
                                                    {{ sertifikat.oquv_markazi }}
                                                </td>
                                                <td>{{ sertifikat.hujjat_sanasi }}</td>
                                            </tr>
<!--                                            <tr>-->


<!--                                            <tr v-if="resume.user_add.mehnat_faoliyatlar">
                                                <td colspan="2" class="header"><p style="">Иш стажи</p></td>
                                            </tr>
                                            <tr v-for="mehnat in resume.user_add.mehnat_faoliyatlar">
                                                <td style="width: 60%; text-align: left">
                                                    {{ mehnat.tashkilot }}
                                                </td>
                                                <td>{{ mehnat.davr }}</td>
                                            </tr>-->
                                        </template>

                                    </table>

                                </div>
                                <!--                                <div class="dialog_content">

                                                                    <table>
                                                                        <tr>

                                                                            <td colspan="2">{{ resume.user.first_name }} {{ resume.user.mid_name }}
                                                                                {{ resume.user.sur_name }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Мурожаат тартиб рақами</td>
                                                                            <td>{{ resume.vacancy.id }}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Мурожаат тушган сана ва вақт</td>
                                                                            <td>{{ resume.vacancy.created_at }}</td>
                                                                        </tr>
                                                                        &lt;!&ndash;                                    <tr>
                                                                                                                <td>Ижрочига келиб тушган сана ва вақт</td>
                                                                                                                <td>2313</td>
                                                                                                            </tr>&ndash;&gt;
                                                                        <tr>
                                                                            <td>Мурожаат муаллифи Ф.И.О</td>
                                                                            <td>{{ resume.user.firstname }} {{ resume.user.name }}
                                                                                {{ resume.user.lastname }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Жисмоний ёки юридик шахснинг манзили</td>
                                                                            <td>{{ resume.user.address }}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Туғилган йили</td>
                                                                            <td>{{ resume.user.date_birth }}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Юридик шахс номи</td>
                                                                            <td>{{ resume.user.yur_shaxs }}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Телефон рақами</td>
                                                                            <td>{{ resume.user.phone }}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Электрон манзили</td>
                                                                            <td>{{ resume.user.email }}</td>
                                                                        </tr>
                                                                    </table>


                                                                </div>-->
                                <!--                    <script type="application/javascript" src='/js/jquery.js'/>
                                                    <script type="application/javascript" src='/js/mix/app.js'/>-->
                                <!--                    <div class="dialog_footer">
                                                        <router-link to="/"><span><img src="/img/icons/home.png"/></span>
                                                            <p>Бош саҳифа</p></router-link>
                                                        <router-link to="/"><span><img src="/img/icons/download.png"/></span>
                                                            <p>Юклаб олиш</p></router-link>
                                                    </div>-->
                            </div>
<!--                            <div class="background"></div>-->
                        </div>
                    </section>
                </section>
            </vue-html2pdf>
        </v-container>
        <div class="background"></div>
        <div class="resume_info_content">
            <h3>Сизнинг аризангиз қабул қилинди</h3>
            <span class="info_check">
            <v-icon>fa-check</v-icon>
        </span>
            <p>Ариза рақами</p>
            <p><strong>{{ resume.kod ? resume.kod : '' }}</strong></p>
            <br>
            <p>Аризалар рўйхатига ўтиб <br>аризангиз ҳолатини кўришингиз мумкин!</p>
            <router-link to="/applications" class="fs-3"><p> Аризаларингиз рўйхати</p></router-link>

            <div class="actions">
                <router-link :to="'/services/vacancy/'+ (resume.vacancy?resume.vacancy.id:1)"><img src="/img/icons/return.png"/>
                </router-link>
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
    props: ['resume'],
    data() {
        return {
            print_dialog: false,
        }
    }, components: {qrcode, VueHtml2pdf},
    methods: {
        print() {

            setTimeout(() => {
                $("#printMe1 > div.print_dialog").css('display', 'block');
                print({
                    printable: 'printMe1',
                    maxWidth: 1000,
                    type: 'html',
                    css: ['/css/bootstrap.min.css', '/css/mix/one.css'],
                    style: ["*"],
                    scanStyles: true,
                    targetStyles: ["*"], //accepts all the styles
                    targetStyle: ["*"], //accepts all the styles
                    documentTitle: '.',
                    header: ' ',
                    font_size: ""
                })
                $("#printMe1 > div.print_dialog").css('display', 'none');
            }, 200);

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
        generateReport() {
            $("#printMe1 > div.print_dialog").css('display', 'block');
            this.$refs.html2Pdf.generatePdf();
            $("#printMe1 > div.print_dialog").css('display', 'none');
        }
    }
}

</script>
<style>

</style>
