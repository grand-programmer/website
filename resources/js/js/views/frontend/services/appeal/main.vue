<template>
    <div class="section appeals-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>

        <div class="page-content service-appeal">
            <div class="background"></div>
            <v-container>
                <v-row>
                    <h3 class="info_text">Божхона органларига мурожаат юбориш</h3>
                </v-row>
                <v-row>
                    <div class="appeal_types">
<!--                        <v-list-item :to="{path:'appeals/create', query: { type: 0 }}">-->
                        <v-list-item>
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Мурожаат ҳолатини текшириш</v-card-title>
                            </div>
                            <v-card-text align="center">
                                <p class="card-info">Аввал жўнатилган мурожаат ҳолатини шу ердан билиб олинг</p>
                                <v-dialog v-model="dialog" width="35%">
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
                                                <a  @click="generateReport"><span><img src="/img/icons/download.png"/></span>
                                                    <p>Юклаб олиш</p></a>
                                            </div>
                                        </div>

                                    </div>
                                </v-dialog>
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

<!--                                                <div class="background"></div>-->
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
                                <form ref="form" class="check_appeal">
                                    <div class="form-field"><label>Мурожаат рақами </label><v-text-field name="appeal_id" v-model="submit_appeal.appeal_id">
                                </v-text-field></div>
                                    <div class="form-field">
                                        <label >Текшириш коди</label> <v-text-field name="appeal_code" v-model="submit_appeal.appeal_code">
                                    </v-text-field></div>
                                    <v-btn color="primary" @click="submit()">
                                        Текшириш
                                    </v-btn>
                                </form>
                            </v-card-text>


                        </v-list-item>
<!--                        <v-list-item :to="{path:'appeals/create', query: { type: 1 }}">-->
                        <v-list-item>
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Мурожаат йўллаш</v-card-title>
                            </div>
                            <v-card-text align="center">
                                <p class="card-info">Шахсни тасдиқловчи ҳужжат маълумотлари</p>
                                <v-form>
                                    <div class="form-field"><label>Серияси </label>
                                        <v-text-field v-model="passport.seriya"></v-text-field>
                                    </div>
                                    <div class="form-field">
                                        <label>Рақами</label>
                                        <v-text-field v-model="passport.number"></v-text-field>
                                    </div>
                                    <div class="form-field">
                                        <label>Туғилган сана</label>
                                        <v-text-field v-model="passport.data_birth"></v-text-field>
                                    </div>
                                    <span class="izoh">
                                        <sup>*</sup>Шахсни тасдиқловчи ҳужжат сифатида фуқаролик паспорти, ID-карта ва хорижга чиқиш паспортидан фойдаланиш мумкин
                                    </span>
                                    <v-btn color="primary" to="/services/appeals/create">
                                        Мурожаат юбориш
                                    </v-btn>
                                </v-form>

                            </v-card-text>
                        </v-list-item>
                        <v-list-item>
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Қонун</v-card-title>
                            </div>
                            <v-card-text align="center">
                                <p class="card-info" align="center">
                                    Жисмоний ва юридик шахсларнинг мурожаатлари тўғрисида
                                </p>
                                <v-btn color="primary" href="https://lex.uz/docs/3336169" type="button" target="_blank" style="
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
">
                                    Батафсил
                                </v-btn>

                            </v-card-text>
                        </v-list-item>
                    </div>
                </v-row>
                <v-alert
                    :type="alert.alert_type"
                    v-model="alert.value"
                    transition="slide-y-transition"
                    height="40px"
                    text
                    rounded
                    class="mt-4 center"
                >
                    {{ alert.alert_text }}
                </v-alert>

            </v-container>
        </div>

    </div>
</template>
<script>
import Qrcode from '@chenfengyuan/vue-qrcode';
import VueHtml2pdf from 'vue-html2pdf';
import api from "../../../../src/services/apiService";
import Helper from "./help";

export default {
    name: 'ServiceAppeals',

    components: {
        Qrcode, VueHtml2pdf,Helper
    },
    data() {
        return {
            baseURL: process.env.MIX_BASE_URL + "/services/appeals/",
            dialog: false,
            alert: {
                value: false,
                alert_type: 'warning',
                alert_text: ''
            },
            submit_appeal: {
                appeal_id: '',
                appeal_code: '',
            },
            passport:{
                seriya:'',
                number:'',
            },
            appeal_types: [
                "Ариза",
                "Шикоят",
                "Таклиф"
            ],
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Мурожаатлар',
                    to: '/services/appeals',
                    disabled: true,
                    exact: true,
                },
            ],
            appeal: {
                id: null,
                fio: '',
                appeal_type: 0,
                address: '',
                email: '',
                phone: 0,
                authority: 0,
                sphere: 0,
                text: '',
                number: '',
            },
        }
    },
    methods: {
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        },
        checkRequest() {
            if (this.$route.query.appeal_code && this.$route.query.appeal_id) {
                this.checkData({
                    appeal_id: this.$route.query.appeal_id,
                    appeal_code: this.$route.query.appeal_code
                })
            }
        },
        submit: function (event) {
            this.checkData({
                appeal_id: this.$refs.form.appeal_id.value,
                appeal_code: this.$refs.form.appeal_code.value
            });
            this.submit_appeal.appeal_id = '';
            this.submit_appeal.appeal_code = '';
            this.$refs.form.reset();
        },
        checkData(appeal) {
            api.checkAppeal({
                appeal_id: appeal.appeal_id,
                appeal_code: appeal.appeal_code,
            }).then((response) => {
                this.appeal = response.data;
                this.dialog = true;
            }).catch((error) => {
                console.log(error);
                this.dialog = false;
                this.alert.value = true;
                this.alert.alert_type = 'error';
                this.alert.alert_text = "Маълумот топилмади!";
            });
            if (this.$route.query.appeal_id != null) {
                this.$router.push({query: null});
            }
            setTimeout(() => {
                this.alert = {
                    value: false,
                }
            }, 4000)
        },
    },
    created() {
        this.checkRequest();
    }

}
</script>
<style>
.appeal_types {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.appeal_types > .v-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #39ae69;
    margin: 0 20px;
}

.appeal_types div.v-list-item--title .v-card__title {
    margin-top: 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-family: ui-monospace;
    font-weight: 800;
    padding: 0;
    width: 95%;
    justify-content: center;
}
.appeal_types div.v-list-item--title .v-card__title:after{
    content: "";
    width: 90%;
    height: 1px;
    background-color:#39ae69;
    opacity: 0.5;

}

.appeal_types div.v-list-item--title i {
    padding: 20px;
    font-size: 65px;
    color: #ffffff;
    background-color: #39ae69;
    border-radius: 72px;
    width: 120px;
    margin-top: -60px;
    height: 120px;
}

.appeal_types div.v-list-item--title {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    width: 100%;
}

.service-appeal .v-list-item {
    min-height: unset;
    border-radius: 10px;
}

.v-form .v-text-field{
    padding: 0;
    margin-top: 0;
}
.v-application p.card-info{
    text-transform: uppercase;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px !important;
}


</style>
