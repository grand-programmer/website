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
            <v-container>
                <v-row>
                    <p class="info_text">Мурожаат юбориш учун мурожаат турини белгиланг!</p>
                </v-row>
                <v-row>
                    <div class="appeal_types">
                        <v-list-item :to="{path:'appeals/create', query: { type: 0 }}">
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Ариза</v-card-title>
                            </div>
                            <v-card-text align="center">
                                Фуқароларнинг ўз ҳуқуқлари, эркинликлари ва қонуний манфаатларини рўёбга
                                чиқаришда ёрдам кўрсатиш тўғрисидаги илтимоси баён этилган мурожаати
                            </v-card-text>


                        </v-list-item>
                        <v-list-item :to="{path:'appeals/create', query: { type: 1 }}">
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Шикоят</v-card-title>
                            </div>
                            <v-card-text align="center">
                                Фуқароларнинг бузилган ҳуқуқлари, эркинликлари ва қонуний манфаатларини тиклаш
                                тўғрисидаги талаби баён этилган мурожаати
                            </v-card-text>
                        </v-list-item>
                        <v-list-item :to="{path:'appeals/create', query: { type: 2 }}">
                            <div class="v-list-item--title">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-card-title>Таклиф</v-card-title>
                            </div>
                            <v-card-text align="center">
                                Фуқароларнинг давлат ва жамият фаолиятини такомиллаштиришга доир тавсияларини ўз
                                ичига олган мурожаати
                            </v-card-text>
                        </v-list-item>
                    </div>
                </v-row>
                <v-row>
                    <span style="height: 50px; width: 100%"></span>
                    <p class="info_text">Олдин юборилган мурожаатингиз ҳолатини шу ердан билиб олинг!</p>
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
                <v-row class="check-appeal">

                    <div>
                        <form ref="form">
                            <v-container>
                                <v-row justify="center">
                                    <v-col md="3">
                                        <v-text-field label="Мурожаат рақами" name="appeal_id"
                                                      v-model="submit_appeal.appeal_id"/>
                                    </v-col>
                                    <v-col md="3">
                                        <v-text-field label="Холатни текшириш коди" name="appeal_code"
                                                      v-model="submit_appeal.appeal_code"/>
                                    </v-col>
                                    <v-col md="3" style="margin-top: 10px">
                                        <v-btn light color="#39ae69" @click="submit()">Текшириш</v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </form>
                    </div>
                    <v-dialog
                        transition="dialog-bottom-transition"
                        max-width="1000" class="appeal-result" v-model="dialog">
                        <template v-slot:default="dialog">
                            <v-card>
                                <v-card-text>
                                    <VueHtml2pdf :enable-download="false"
                                                 :preview-modal="true"
                                                 :paginate-elements-by-height="800"
                                                 :pdf-quality="2"
                                                 :manual-pagination="false"
                                                 pdf-format="a4"
                                                 ref="html2Pdf">
                                        <section slot="pdf-content">
                                            <div>
                                                <v-toolbar flat>
                                                    <div class="pull-left logo_neno">
                                                        <img src="/img/gtk_image.png" alt="">
                                                        <p>Ўзбекистон Республикаси Давлат божхона қўмитаси</p>
                                                    </div>
                                                </v-toolbar>
                                                <v-divider></v-divider>
                                                <div class="appeal-data">
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="4"><label>Ф.И.О. / Ташкилот</label>
                                                                {{ appeal.fio }}
                                                            </v-col>
                                                            <v-col cols="3"><label>Мурожаат тури</label>
                                                                {{ appeal_types[appeal.appeal_type] }}
                                                            </v-col>
                                                            <v-col cols="5"><label>Адрес</label> {{ appeal.address }}
                                                            </v-col>
                                                            <v-col cols="3"><label>Email</label> {{ appeal.email }}
                                                            </v-col>
                                                            <v-col cols="3"><label>Телефон</label> {{ appeal.phone }}
                                                            </v-col>
                                                            <v-col cols="3"><label>Божхона органи</label>
                                                                {{ appeal.authority }}
                                                            </v-col>
                                                            <v-col cols="3"><label>Тасниф</label> {{ appeal.sphere }}
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-col cols="12" aria-valuemax="500"><label>Мурожаат
                                                                мазмуни</label>
                                                                {{ appeal.text }}
                                                            </v-col>
                                                        </v-row>

                                                        <v-row>
                                                            <v-col cols="12" height="500px" align="center">
                                                                <p class="info_text">Мурожаатингиз ҳолатини текшириш
                                                                    учун QR codeни сканер
                                                                    қилинг ёки
                                                                    тагидаги мурожаат номерини ва мурожаатни текшириш
                                                                    учун
                                                                    кодни ўзизга
                                                                    сақлаб олинг!
                                                                </p>
                                                                <div class="qr-code">
                                                                    <qrcode :value="baseURL"
                                                                            :options="{ color: { dark: '#000' } }"></qrcode>
                                                                </div>
                                                                <div class="appeal_accesses" align="center">
                                                                    <v-row style="justify-content: center">
                                                                        <v-col cols="3"><label>Мурожаат номери</label>
                                                                            {{
                                                                                appeal.id
                                                                            }}
                                                                        </v-col>
                                                                        <v-col cols="1"></v-col>
                                                                        <v-col cols="3"><label>Мурожаатни текшириш учун
                                                                            код</label>
                                                                            {{ appeal.number }}
                                                                        </v-col>
                                                                    </v-row>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </div>
                                            </div>
                                        </section>
                                    </VueHtml2pdf>
                                    <v-toolbar flat>
                                        <div class="pull-left logo_neno">
                                            <img src="/img/gtk_image.png" alt="">
                                            <p>Ўзбекистон Республикаси Давлат божхона қўмитаси</p>
                                        </div>
                                    </v-toolbar>
                                    <div class="appeal-data">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="4"><label>Ф.И.О. / Ташкилот</label> {{ appeal.fio }}
                                                </v-col>
                                                <v-col cols="3"><label>Мурожаат тури</label> {{ appeal_types[appeal.appeal_type] }}
                                                </v-col>
                                                <v-col cols="5"><label>Адрес</label> {{ appeal.address }}</v-col>
                                                <v-col cols="3"><label>Email</label> {{ appeal.email }}</v-col>
                                                <v-col cols="3"><label>Телефон</label> {{ appeal.phone }}</v-col>
                                                <v-col cols="3"><label>Божхона органи</label> {{ appeal.authority }}
                                                </v-col>
                                                <v-col cols="3"><label>Тасниф</label> {{ appeal.sphere }}</v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12" aria-valuemax="500"><label>Мурожаат мазмуни</label>
                                                    {{ appeal.text }}
                                                </v-col>
                                            </v-row>

                                            <v-row>
                                                <v-col cols="12" height="500px" align="center">
                                                    <p class="info_text"> Мурожаатингиз ҳолатини текшириш учун QR codeни
                                                        сканер қилинг ёки
                                                        тагидаги мурожаат номерини ва мурожаатни текшириш учун кодни
                                                        ўзизга
                                                        сақлаб олинг!</p>
                                                    <div class="qr-code">
                                                        <qrcode :value="baseURL"
                                                                :options="{ color: { dark: '#000' } }"></qrcode>
                                                    </div>
                                                    <div class="appeal_accesses">
                                                        <v-row justify="center">
                                                            <v-col cols="3"><label>Мурожаат номери</label> {{
                                                                    appeal.id
                                                                }}
                                                            </v-col>
                                                            <v-col cols="1"></v-col>
                                                            <v-col cols="3"><label>Мурожаатни текшириш учун код</label>
                                                                {{ appeal.number }}
                                                            </v-col>
                                                        </v-row>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </div>
                                </v-card-text>

                                <v-card-actions class="justify-center">
                                    <v-btn text @click="generateReport()">
                                        <v-icon>
                                            mdi-download
                                        </v-icon>
                                        Юклаб олиш
                                    </v-btn>
                                    <v-btn text @click="dialog.value = false">
                                        <v-icon>
                                            mdi-window-close
                                        </v-icon>
                                        Ёпиш
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-row>
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
        }
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

.appeal_types > a.v-list-item--link {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #39ae69;
    margin: 0 20px;
}

.appeal_types > a > div.v-list-item--title .v-card__title {
    margin-top: 20px;
    font-size: 25px;
    text-transform: uppercase;
    /* font-family: 'Montserrat'; */
    padding-bottom: 10px;
    border-bottom: 1px solid #39ae69;
    font-weight: 600;
}

.appeal_types > a > div.v-list-item--title i {
    padding: 20px;
    font-size: 65px;
    color: #ffffff;
    background-color: #39ae69;
    border-radius: 72px;
    width: 120px;
    margin-top: -60px;
    height: 120px;
}

.appeal_types > a > div.v-list-item--title {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
}

.service-appeal .v-list-item {
    min-height: unset;
}

.service-appeal .row.check-appeal {
    box-shadow: 0 12px 14px -3px #ccc;
    padding: 30px 0;
}

</style>
