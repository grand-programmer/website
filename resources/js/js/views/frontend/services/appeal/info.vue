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
                                <qrcode value="Hello, World!" :options="{ width: 80 }"></qrcode>
                            </div>
                            <div class="dialog_content">

                                <table>
                                    <tr>
                                        <td>Мурожаат тартиб рақами</td>
                                        <td>{{ appeal.id }}</td>
                                    </tr>
                                    <tr>
                                        <td>Мурожаат текшириш коди</td>
                                        <td>{{ appeal.number }}</td>
                                    </tr>
                                    <tr>
                                        <td>Мурожаат тушган сана ва вақт</td>
                                        <td>{{ appeal.created_at }}</td>
                                    </tr>
                                    <!--                                    <tr>
                                                                            <td>Ижрочига келиб тушган сана ва вақт</td>
                                                                            <td>2313</td>
                                                                        </tr>-->
                                    <tr>
                                        <td>Мурожаат муаллифи Ф.И.О</td>
                                        <td>{{ appeal.firstname }} {{ appeal.name }} {{ appeal.lastname }}</td>
                                    </tr>
                                    <tr>
                                        <td>Жисмоний ёки юридик шахснинг манзили</td>
                                        <td>{{ appeal.address }}</td>
                                    </tr>
                                    <tr>
                                        <td>Туғилган йили</td>
                                        <td>{{ appeal.date_birth }}</td>
                                    </tr>
                                    <tr>
                                        <td>Юридик шахс номи</td>
                                        <td>{{ appeal.yur_shaxs }}</td>
                                    </tr>
                                    <tr>
                                        <td>Телефон рақами</td>
                                        <td>{{ appeal.phone }}</td>
                                    </tr>
                                    <tr>
                                        <td>Электрон манзили</td>
                                        <td>{{ appeal.email }}</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <td>
                                            <p>Мурожаат матни </p>
                                            <p>{{ appeal.text }}</p>
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
                        <div id="qrcode"><qrcode value="Hello, World!" :options="{ width: 80 }"></qrcode></div>
                    </div>
                    <div class="dialog_content">

                        <table>
                            <tr>
                                <td>Мурожаат тартиб рақами</td>
                                <td>{{ appeal.id }}</td>
                            </tr>
                            <tr>
                                <td>Мурожаат тушган сана ва вақт</td>
                                <td>{{ appeal.created_at }}</td>
                            </tr>
                            <!--                                    <tr>
                                                                    <td>Ижрочига келиб тушган сана ва вақт</td>
                                                                    <td>2313</td>
                                                                </tr>-->
                            <tr>
                                <td>Мурожаат муаллифи Ф.И.О</td>
                                <td>{{ appeal.firstname }} {{ appeal.name }} {{ appeal.lastname }}</td>
                            </tr>
                            <tr>
                                <td>Жисмоний ёки юридик шахснинг манзили</td>
                                <td>{{ appeal.address }}</td>
                            </tr>
                            <tr>
                                <td>Туғилган йили</td>
                                <td>{{ appeal.date_birth }}</td>
                            </tr>
                            <tr>
                                <td>Юридик шахс номи</td>
                                <td>{{ appeal.yur_shaxs }}</td>
                            </tr>
                            <tr>
                                <td>Телефон рақами</td>
                                <td>{{ appeal.phone }}</td>
                            </tr>
                            <tr>
                                <td>Электрон манзили</td>
                                <td>{{ appeal.email }}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <p>Мурожаат матни </p>
                                    <p>{{ appeal.text }}</p>
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
                :preview-modal="true"
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
                            <qrcode value="Hello, World!" :options="{ width: 80 }"></qrcode>
                        </div>
                        <div class="dialog_content">

                            <table>
                                <tr>
                                    <td>Мурожаат тартиб рақами</td>
                                    <td>{{ appeal.id }}</td>
                                </tr>
                                <tr>
                                    <td>Мурожаат текшириш коди</td>
                                    <td>{{ appeal.number }}</td>
                                </tr>
                                <tr>
                                    <td>Мурожаат тушган сана ва вақт</td>
                                    <td>{{ appeal.created_at }}</td>
                                </tr>
                                <!--                                    <tr>
                                                                        <td>Ижрочига келиб тушган сана ва вақт</td>
                                                                        <td>2313</td>
                                                                    </tr>-->
                                <tr>
                                    <td>Мурожаат муаллифи Ф.И.О</td>
                                    <td>{{ appeal.firstname }} {{ appeal.name }} {{ appeal.lastname }}</td>
                                </tr>
                                <tr>
                                    <td>Жисмоний ёки юридик шахснинг манзили</td>
                                    <td>{{ appeal.address }}</td>
                                </tr>
                                <tr>
                                    <td>Туғилган йили</td>
                                    <td>{{ appeal.date_birth }}</td>
                                </tr>
                                <tr>
                                    <td>Юридик шахс номи</td>
                                    <td>{{ appeal.yur_shaxs }}</td>
                                </tr>
                                <tr>
                                    <td>Телефон рақами</td>
                                    <td>{{ appeal.phone }}</td>
                                </tr>
                                <tr>
                                    <td>Электрон манзили</td>
                                    <td>{{ appeal.email }}</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td>
                                        <p>Мурожаат матни </p>
                                        <p>{{ appeal.text }}</p>
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
            <p><strong>{{ appeal.id }}</strong></p>
            <br>
            <p>Мурожаат ҳолатини текшириш коди</p>
            <p><strong>{{ appeal.number }}</strong></p>
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
            print_dialog: false,
        }
    }, components: {qrcode,VueHtml2pdf},
    methods: {
        print() {
            $("#printMe1 > div.print_dialog").css('display','block');
            print({
                printable:'printMe1',
                type: 'html',
                css:['/css/bootstrap5.1.min.css','/css/one.css'],
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
