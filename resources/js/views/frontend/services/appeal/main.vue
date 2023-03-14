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
                                                <qrcode :value="baseURL+'/'+appeal.appNum+'/'+appeal.password" :options="{ width: 80 }"></qrcode>
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

<!--                                                <div class="background"></div>-->
                                                <div>
                                                    <div class="dialog_header">
                                                        <img width="40" height="40" src="/img/gtk_image.png">
                                                        <p>Божхона органларига <span>мурожаат</span></p>
                                                        <qrcode :value="baseURL+'/'+appeal.appNum+'/'+appeal.password" :options="{ width: 80 }"></qrcode>
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
                                <form ref="form" class="check_appeal">
                                    <div class="form-field"><label>Мурожаат рақами </label><v-text-field name="appeal_id" v-model="submit_appeal.appeal_id">
                                </v-text-field></div>
                                    <div class="form-field">
                                        <label >Текшириш коди</label> <v-text-field name="appeal_code" v-model="submit_appeal.appeal_code">
                                    </v-text-field></div>
                                    <v-btn color="primary" @click="submit()" :loading="buttonLoading">
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


                                        <!--
                                        <ValidationProvider name="Туғилган сана" rules="required"
                                                            v-slot="{ errors }">-->
                                        <v-text-field
                                            v-model="passport.date"
                                            persistent-hint
                                            prepend-icon="mdi-calendar"
                                            v-mask="'##.##.####'"
                                        ></v-text-field>
<!--                                            <v-menu
                                                ref="menu1"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                max-width="290px"
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">

                                                </template>
                                                <v-date-picker
                                                    v-model="date"
                                                    no-title
                                                    @input="menu = false"
                                                ></v-date-picker>
                                            </v-menu>-->

<!--
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>-->
                                    </div>
                                    <span class="izoh">
                                        <sup>*</sup>Шахсни тасдиқловчи ҳужжат сифатида фуқаролик паспорти, ID-карта ва хорижга чиқиш паспортидан фойдаланиш мумкин
                                    </span>
                                    <v-btn color="primary" :loading="yuborishLoading" @click="createAppeal">
                                        Мурожаат юбориш
                                    </v-btn>
                                </v-form>

                            </v-card-text>
                        </v-list-item>
                        <v-list-item>
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Ҳужжатлар</v-card-title>
                            </div>
                            <v-card-text class="p-0 mt-5 text-left">
                                <a class="d-block my-2" href="https://lex.uz/docs/3336169" target="_blank">"Жисмоний ва юридик шахсларнинг мурожаатлари тўғрисида"ги қонун</a>
                                <a class="d-block my-2" href="/storage/files/308-buyruq.pdf" target="_blank">Идоравий алоқа маркази фаолиятини ташкил этиш тўғрисида божхона қўмитасининг буйруғи</a>

                                <v-btn color="primary" href="https://lex.uz/docs/3336169" type="button" target="_blank" style="
    position: absolute;
    bottom: 15px;
    display: none;
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
import i18n from "../../../../i18n";

export default {
    name: 'ServiceAppeals',

    components: {
        Qrcode, VueHtml2pdf,Helper
    },
    data() {
        return {
            baseURL: window.location.href,
            dialog: false,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
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
                date:this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            },
            appeal_types: [
                "Ариза",
                "Шикоят",
                "Таклиф"
            ],
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
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
            buttonLoading:false,
            yuborishLoading:false
        }
    },
    methods: {
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        },
        createAppeal(){
            this.yuborishLoading=true;
            if(!this.$auth.user() )
            this.getPasportData();
            else {
                if(this.passport.seriya.length>0 && this.passport.number.length>0 && this.passport.date.length>0)
                    this.getPasportData(); else
                this.$router.push({path: '/services/appeals/create'});
            }
        },
        async getPasportData(){
            const _this=this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData',{params: {
                    pasnum: _this.passport.seriya + _this.passport.number,
                    //key:md,
                    pasdata: _this.passport.date,
                }

            }).then(function (response){
                _this.yuborishLoading=false;
                if(typeof response.data.data.birth_date !=='undefined')
                    _this.$router.push({path:'/services/appeals/create',query:{pasnum:_this.passport.seriya + _this.passport.number,pasdate: _this.passport.date }});
                else _this.$toast.error('Маълумотларни текшириб қайтадан киринг')
            }).catch(()=>{
                _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                this.yuborishLoading=false;
            })
            this.yuborishLoading=false;
        },
        parseDate(date) {
            if (!date) return null

            const [ day,month, year] = date.split('.')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
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
            this.buttonLoading=true;
            this.checkData({
                appeal_id: this.$refs.form.appeal_id.value,
                appeal_code: this.$refs.form.appeal_code.value
            });
            this.submit_appeal.appeal_id = '';
            this.submit_appeal.appeal_code = '';
            this.$refs.form.reset();
        },
        checkData(appeal) {
            const _this=this;
            axios.post("/api/v1/ex_api/appeal-check", {
                appNum: appeal.appeal_id,
                password: appeal.appeal_code,
            }).then((response) => {
                if(typeof response.data.data.appeal!=='undefined'){

                    _this.buttonLoading=false;
                    _this.dialog = true;

                    _this.appeal.appNum=appeal.appeal_id;
                    _this.appeal.password=appeal.appeal_code;
                    _this.appeal.insTime=(typeof response.data.data.appeal.insTime!='undefined')?response.data.data.appeal.insTime:null;
                    _this.appeal.firstName=(typeof response.data.data.appeal.firstName!='undefined')?response.data.data.appeal.firstName:null;
                    _this.appeal.surName=(typeof response.data.data.appeal.surName!='undefined')?response.data.data.appeal.surName:null;
                    _this.appeal.lastName=(typeof response.data.data.appeal.lastName!='undefined')?response.data.data.appeal.lastName:null;
                    _this.appeal.address=(typeof response.data.data.appeal.address!='undefined')?response.data.data.appeal.address:null;
                    _this.appeal.birthDate=(typeof response.data.data.appeal.birthDate!='undefined')?response.data.data.appeal.birthDate:null;
                    _this.appeal.position=(typeof response.data.data.appeal.position!='undefined')?response.data.data.appeal.position:null;
                    _this.appeal.positionNm=(typeof response.data.data.appeal.positionNm!='undefined')?response.data.data.appeal.positionNm:null;
                    _this.appeal.phoneNumber=(typeof response.data.data.appeal.phoneNumber!='undefined')?response.data.data.appeal.phoneNumber:null;
                    _this.appeal.email=(typeof response.data.data.appeal.email!='undefined')?response.data.data.appeal.email:null;
                    _this.appeal.profession=(typeof response.data.data.appeal.profession!='undefined')?response.data.data.appeal.profession:null;
                    _this.appeal.messageBody=(typeof response.data.data.appeal.messageBody!='undefined')?response.data.data.appeal.messageBody:null;
                    _this.appeal.locationNm=(typeof response.data.data.appeal.locationNm!='undefined')?response.data.data.appeal.locationNm:null;
                    _this.appeal.status=(typeof response.data.data.appeal.status!='undefined')?response.data.data.appeal.status:null;
                    _this.appeal.statusNm=(typeof response.data.data.appeal.statusNm!='undefined')?response.data.data.appeal.statusNm:null;
                    _this.appeal.appealAnswer=(typeof response.data.data.appealAnswer!='undefined')?response.data.data.appealAnswer:null;
                    _this.appeal.fileAnswer=(typeof response.data.data.fileAnswer!='undefined')?response.data.data.fileAnswer:null;
                    _this.appeal.fileQuestion=(typeof response.data.data.fileQuestion!='undefined')?response.data.data.fileQuestion:null;
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
            if (this.$route.query.appeal_id != null) {
                this.$router.push({query: null});
            }
            setTimeout(() => {
                this.alert = {
                    value: false,
                }
            }, 4000)
        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}.${month}.${year}`
        },
    },
    watch:{
        date(val) {
            this.passport.date = this.formatDate(this.date)
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
