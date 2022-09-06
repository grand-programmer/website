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
        <div class="page-content">
            <div class="background"></div>
            <v-container v-if="appeal_send">
                <info :appeal="sended_appeal"></info>
            </v-container>

            <v-container v-else>
                <div class="alert-container" v-if="alert.multiple">
                    <v-alert
                        v-for="(alertItem,k) in alert.alert_text"
                        :type="alert.alert_type"
                        :key="k"
                        v-model="alert.value"
                        transition="slide-y-transition"
                        height="45px"
                        text
                        rounded
                    >
                        {{ alertItem[0] }}
                    </v-alert>
                </div>
                <v-alert v-else
                         :type="alert.alert_type"
                         v-model="alert.value"
                         transition="slide-y-transition"
                         height="40px"
                         text
                         rounded
                >
                    {{ alert.alert_text }}
                </v-alert>

                <ValidationObserver v-slot="{ invalid }" ref="create_apple">
                    <v-form v-on:submit.prevent="create_appeal" enctype="multipart/form-data">
                        <h3 center class="appeals-title text-center">
                            Божхона органларига мурожаат юбориш
                        </h3>

                        <div class="col-12">

                            <div class="application-form">

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-field">
                                            <label>Фамилия </label>
                                            <ValidationProvider name="Фамилия" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.lastname"></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field">
                                            <label>Исм </label>
                                            <ValidationProvider name="Исм" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.name"></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field">
                                            <label>Отасининг исми </label>
                                            <ValidationProvider name="Отасининг исми" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.surname"></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field">
                                            <label>Яшаш жойингиз </label>
                                            <ValidationProvider name="Яшаш жойингиз" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.address"></v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field">
                                            <label>Туғилган сана </label>
                                            <ValidationProvider name="Туғилган сана" rules="required"
                                                                v-slot="{ errors }">
                                                <v-menu
                                                    ref="menu1"
                                                    v-model="menu"
                                                    :close-on-content-click="false"
                                                    transition="scale-transition"
                                                    offset-y
                                                    max-width="290px"
                                                    min-width="auto"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="appeal.date_birth"
                                                            persistent-hint
                                                            prepend-icon="mdi-calendar"
                                                            v-bind="attrs"
                                                            @blur="date = parseDate(appeal.date_birth)"
                                                            v-on="on"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                        v-model="date"
                                                        no-title
                                                        @input="menu = false"
                                                    ></v-date-picker>
                                                </v-menu>


                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field">
                                            <label>Такрорий мурожаат </label>
                                            <ValidationProvider name="Такрорий мурожаат" rules=""
                                                                v-slot="{ errors }">
                                                <v-switch v-model="appeal.retry"></v-switch>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-field"><label>Ҳудудий бошқарма номи </label>
                                            <ValidationProvider name="Ҳудудий бошқарма номи" rules="required"
                                                                v-slot="{ errors }">
                                                <v-autocomplete dense clearable label="Божхона органи"
                                                                :items="adresatlar" hide-details="auto"
                                                                v-model="appeal.state"></v-autocomplete>
                                                <span style="margin-top: 0">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field"><label>Электрон почта </label>
                                            <ValidationProvider name="Электрон почта" rules="required|email"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.email">
                                                </v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field"><label>Иш жойи </label>
                                            <ValidationProvider name="Иш жойи" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.work">
                                                </v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field"><label>Телефон рақами </label>
                                            <ValidationProvider name="Телефон рақами" rules="required"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.phone" return-masked-value
                                                              v-mask="'## ###-##-##'" placeholder="78 123-45-67"
                                                              prefix="+998">
                                                </v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-field"><label>Тадбиркор ёки юридик шахс </label>
                                            <v-switch v-model="yur_shaxs">
                                            </v-switch>
                                        </div>
                                        <div class="form-field" v-if="yur_shaxs"><label>Юридик шахс номи </label>
                                            <ValidationProvider name="Юридик шахс номи"
                                                                v-slot="{ errors }">
                                                <v-text-field v-model="appeal.yur_shaxs">
                                                </v-text-field>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <v-col cols="12" style="margin-top: -35px; margin-bottom: -20px;">
                                        <div class="floatend">
                                            <div class="form-field">
                                                <v-file-input v-model="appeal.file"
                                                              label="Файл бириктириш">
                                                </v-file-input>
                                                <span>{{ errors[0] }}</span>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" style="margin: -40px auto">
                                        <div class="form-field appeal_text">
                                            <label>Мурожаат матни </label>
                                            <ValidationProvider name="Мурожаат матни" rules="required|min:3"
                                                                v-slot="{ errors }">
                                                <v-textarea v-model="appeal.text">
                                                </v-textarea>
                                                <span>{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>

                                    </v-col>
                                    <v-col cols="6">
                                        <div class="form-field checkbox_agree" style="width: 100%">
                                            <v-checkbox style="width: 100%; float: none;" v-model="agreement"
                                                        @click.stop="dialog = true">
                                                <template v-slot:label>
                                                    <u>
                                                        Фойдаланиш қоидалари билан танишдим
                                                    </u>
                                                </template>
                                            </v-checkbox>
                                            <v-dialog
                                                v-model="dialog1"
                                                @click:outside="agreement=false"
                                                width="600px"
                                            >
                                                <v-card>
                                                    <v-card-title>
                                                        <span class="text-h5">Веб сайт фойдаланиш қоидалари</span>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.
                                                        Nostra urna at, magna at neque sed sed ante imperdiet, dolor
                                                        mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus
                                                        placerat leo, augue in, duis erat proin condimentum in a eget,
                                                        sed fermentum sed vestibulum varius ac, vestibulum volutpat orci
                                                        ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu.
                                                        Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum
                                                        pellentesque, vitae id quam ut mauris dui tempor, aptent non.
                                                        Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.
                                                        Amet donec vestibulum mattis commodo, nulla aliquet, nibh
                                                        praesent, elementum nulla. Sit lacus pharetra tempus magna neque
                                                        pellentesque, nulla vel erat.
                                                        Justo ex quisque nulla accusamus venenatis, sed quis. Nibh
                                                        phasellus gravida metus in, fusce aenean ut erat commodo eros.
                                                        Ut turpis, dui integer, nonummy pede placeat nec in sit leo.
                                                        Faucibus porttitor illo taciti odio, amet viverra scelerisque
                                                        quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum
                                                        elit condimentum, amet rutrum vitae tempor torquent nunc.
                                                        Praesent vestibulum integer maxime felis. Neque aenean quia
                                                        vitae nostra, tempus elit enim id dui, at egestas pulvinar.
                                                        Integer libero vestibulum, quis blandit scelerisque mattis
                                                        fermentum nulla, tortor donec vestibulum dolor amet eget, elit
                                                        nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla
                                                        justo mattis duis interdum vel, mollis vitae et id, vestibulum
                                                        erat ridiculus sit pulvinar justo sed. Vehicula convallis, et
                                                        nulla wisi, amet vestibulum risus, quam ac egestas.
                                                        Et vitae, nulla gravida erat scelerisque nullam nunc
                                                        pellentesque, a dictumst cras augue, purus imperdiet non. Varius
                                                        montes cursus varius vel tortor, nec leo a qui, magni cras,
                                                        velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo
                                                        porttitor, sapien nibh sapien pede mi, sed eget porttitor,
                                                        repellendus arcu ac quis. Luctus vulputate aut est sem magna,
                                                        placerat accumsan nunc vestibulum ipsum ac auctor, maecenas
                                                        lorem in ut nec mauris tortor, doloribus varius sem tortor
                                                        vestibulum mollis, eleifend tortor felis tempus lacus eu eu.
                                                        Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor
                                                        porta ridiculus potenti, massa tristique nam magna, et wisi
                                                        placerat et erat ante. Eget pede erat in facilisis, fermentum
                                                        venenatis sodales. Ac tortor sociis et non animi tristique,
                                                        rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin,
                                                        elit curabitur dui pede purus dolor, integer aenean risus taciti
                                                        nulla eleifend accumsan. At pulvinar diam parturient, interdum
                                                        mi velit aliquet et a. Arcu at ac placerat eget justo semper,
                                                        purus sociis curabitur mi ipsum consequat ut, mollis vestibulum,
                                                        est ante ornare lacus sem. Neque magna mauris, commodo quisque,
                                                        praesent semper suscipit lobortis nam. Justo malesuada cursus ac
                                                        nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus
                                                        purus fermentum.
                                                    </v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            color="green darken-1"
                                                            text
                                                            @click="dialog = false; agreement=false;"
                                                        >
                                                            Disagree
                                                        </v-btn>
                                                        <v-btn
                                                            color="green darken-1"
                                                            text
                                                            @click="dialog = false; agreement=true;"
                                                        >
                                                            Agree
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>

                                        </div>
                                    </v-col>
                                    <v-col cols="6">
                                        <div class="buttons">
                                            <v-btn type="button" class="primary orange" to="/services/appeals">Ортга
                                            </v-btn>
                                            <v-btn class="primary" :loading="jonatishLoading" type="submit">Жўнатиш</v-btn>
                                        </div>
                                    </v-col>
                                </div>


                            </div>
                        </div>
                    </v-form>
                </ValidationObserver>
            </v-container>
        </div>

    </div>

</template>
<script>
import Info from './info';


import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../../locales/oz.json';
import api from "../../../../src/services/apiService";
import i18n from "../../../../i18n";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: 'ServiceAppeals',
    data() {
        return {
            baseURL: window.location.href,
            dialog: false,
            dialog1: false,
            agreement: false,
            appeal_send: false,
            yur_shaxs: false,
            sended_appeal: {
                id: 0,
                number: 0
            },
            alert: {
                value: false,
                alert_type: 'success',
                alert_text: '',
                multiple: false,
            },
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
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Мурожаат юбориш',
                    to: '/services/appeals/create',
                    disabled: true,
                    exact: true,
                },
            ],

            errors: [],
            adresatlar:
                [
                    {value: 0, text: 'Давлат божхона қўмитаси'},
                    {value: 1, text: 'Қорақалпоғистон Республикаси бошқармаси'},
                    {value: 2, text: 'Андижон вилояти бошқармаси'},
                    {value: 3, text: 'Бухоро вилояти бошқармаси'},
                    {value: 4, text: 'Навоий вилояти бошқармаси'},
                    {value: 5, text: 'Тошкент шахар бошқармаси'},
                    {value: 6, text: 'Самарқанд вилояти бошқармаси'},
                    {value: 7, text: 'Наманган вилояти бошқармаси'},
                ]
            ,
            appeal: {
                surname: '',
                name: '',
                lastname: '',
                address: '',
                state: null,
                retry: false,
                work: '',
                yur_shaxs: '',
                personPin:'',
                email: '',
                phone: '',
                text: '',
                file: null,
                date_birth: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),

            },
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            regions:[],
            jonatishLoading:false,
        }
    },
    created(){
        this.getPasportData()
        this.getBoshqarmalar()
    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date)
        },
    },

    watch: {
        date(val) {
            this.appeal.date_birth = this.formatDate(this.date)
        },
    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Info
    },
    methods: {
        async getPasportData(){
            const _this=this;
            //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)
            await axios.get('/api/v1/ex_api/getPData',{params: {
                    pasnum: _this.$route.query.pasnum,
                    //key:md,
                    pasdata: _this.$route.query.pasdate,
                }

            }).then(function (response){
                if(typeof response.data.data.birth_date ==='undefined') {
                    _this.$toast.error("Маълумотлар мос келмади1!")
                    _this.$router.push('/services/appeals/');
                }
                else{
                    _this.appeal.date_birth=_this.formatDate(response.data.data.birth_date)
                    _this.appeal.personPin=response.data.data.pinpp
                    _this.appeal.name=response.data.data.namelatin
                    _this.appeal.surname=response.data.data.patronymlatin
                    _this.appeal.lastname=response.data.data.surnamelatin

                }
            })
        },
        async getBoshqarmalar() {
            const _this = this
            await axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                _this.adresatlar=[];
                result.data.data.forEach(function (item) {
                    if (!(['1790', '1791', '1701'].includes(item['kod_id'])))
                        _this.adresatlar.push({
                            'value': item['kod_id'],
                            'text': (item['name']).replace("Ўзбекистон Республикаси Давлат божхона қўмитасининг ", "")//(item['name']).substring(("Ўзбекистон Республикаси Давлат божхона қўмитасининг ").length)
                        })
                })
            })
        },
        //create appeal
        async create_appeal() {
            const _this=this;
            this.jonatishLoading=true;
            const isValid = await this.$refs.create_apple.validate();
            if (isValid && this.appeal.file !=null && this.appeal.file.size > 5 * 1024 * 1024) {
                _this.$toast.error("Юкланган файл ҳажми 5мбдан ошмаслиги керак!");
                this.jonatishLoading = false;
            }
/*                this.alert = {
                    value: true,
                    alert_type: "error",
                    alert_text: "Юкланган файл ҳажми 5мбдан ошмаслиги керак!"
                }*/
            if (isValid && !this.agreement) {
                _this.$toast.error("Фойдаланиш қоидаларига розилик билдиришингиз лозим!");
                this.jonatishLoading = false;
            }

                /*this.alert = {
                    value: true,
                    alert_type: "error",
                    alert_text: "Фойдаланиш қоидаларига розилик билдиришингиз лозим!"
                }*/
            if (isValid && this.agreement) {
                const appeal = this.appeal;
                const data=new FormData();
                data.append("firstName",this.appeal.name);
                data.append("surName",this.appeal.surname);
                data.append("lastName",this.appeal.lastname);
                data.append("address",this.appeal.address);
                data.append("birthDate",this.appeal.date_birth.split('.').reverse().join('-'));
                data.append("phoneNumber",this.appeal.phone);
                data.append("locationId",this.appeal.state);
                data.append("email",this.appeal.email);
                data.append("profession",this.appeal.work);
                data.append("position",this.yur_shaxs);
                data.append("appealType",this.appeal.retry);
                data.append("messageBody",this.appeal.text);
                if(this.appeal.file) data.append("multipartFile",this.appeal.file);
                data.append("positionNm",this.appeal.yur_shaxs);
                data.append("personPin",this.appeal.personPin);


                /*
                for (var key in this.appeal) {
                        data.append(key, this.appeal[key]);
                }*/
                //data.append("_method", "put");
// .post('/api/v1/appeal', data, {

                axios
                    .post('/api/v1/ex_api/appeal', data, {
                        headers: {
                            //'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((resp) => {
                        if (resp.status === 200) {
                            //reset form
                            _this.jonatishLoading=false;
                            this.appeal = {
                                surname: '',
                                name: '',
                                lastname: '',
                                address: '',
                                retry: false,
                                yur_shaxs: '',
                                work: '',
                                state: 0,
                                email: '',
                                phone: '',
                                file: null,
                                text: '',
                                date_birth: Date.now(),
                            };
                            this.$refs.create_apple.reset();
                            setTimeout(() => {
                                /*                                this.alert = {
                                                                    value: false,
                                                                }*/
                                this.appeal_send = true;
                                //this.sended_appeal = appeal;
                                this.sended_appeal.appNum = resp.data.number;
                                this.sended_appeal.code = resp.data.code;
                                if(typeof resp.data.appeal.appeal!='undefined' && resp.data.appeal.appeal!==null)
                                this.sended_appeal.appNum = (typeof resp.data.appeal.appeal.appNum !='undefined')?resp.data.appeal.appeal.appNum:null;

                                this.sended_appeal.lastName = (typeof resp.data.appeal.appeal.lastName !='undefined')?resp.data.appeal.appeal.lastName:null;
                                this.sended_appeal.firstName = (typeof resp.data.appeal.appeal.firstName !='undefined')?resp.data.appeal.appeal.firstName:null;
                                this.sended_appeal.surName = (typeof resp.data.appeal.appeal.surName !='undefined')?resp.data.appeal.appeal.surName:null;
                                this.sended_appeal.address = (typeof resp.data.appeal.appeal.address !='undefined')?resp.data.appeal.appeal.address:null;
                                this.sended_appeal.birthDate = (typeof resp.data.appeal.appeal.birthDate !='undefined')?resp.data.appeal.appeal.birthDate:null;
                                this.sended_appeal.profession = (typeof resp.data.appeal.appeal.profession !='undefined')?resp.data.appeal.appeal.profession:null;
                                this.sended_appeal.position = (typeof resp.data.appeal.appeal.position !='undefined')?resp.data.appeal.appeal.position:null;
                                this.sended_appeal.positionNm = (typeof resp.data.appeal.appeal.positionNm !='undefined')?resp.data.appeal.appeal.positionNm:null;
                                this.sended_appeal.phoneNumber = (typeof resp.data.appeal.appeal.phoneNumber !='undefined')?resp.data.appeal.appeal.phoneNumber:null;
                                this.sended_appeal.email = (typeof resp.data.appeal.appeal.email !='undefined')?resp.data.appeal.appeal.email:null;
                                this.sended_appeal.fileQuestion = (typeof resp.data.appeal.appeal.fileQuestion !='undefined')?resp.data.appeal.appeal.fileQuestion:null;
                                this.sended_appeal.status = (typeof resp.data.appeal.appeal.status !='undefined')?resp.data.appeal.appeal.status:null;
                                this.sended_appeal.statusNm = (typeof resp.data.appeal.appeal.statusNm !='undefined')?resp.data.appeal.appeal.statusNm:null;
                                this.sended_appeal.messageBody = (typeof resp.data.appeal.appeal.messageBody !='undefined')?resp.data.appeal.appeal.messageBody:null;
                                //this.sended_appeal.created_at = resp.data.created_at;
                                //this.$router.push({path: '/services/appeals?appeal_id=' + resp.data.number + '&appeal_code=' + resp.data.code})
                            }, 1000)


                        } else {
                            this.jonatishLoading=false;
                            this.$toast.error("Маълумотларни юборишда хатолик юз берди!");
                            /*this.alert = {
                                value: true,
                                alert_type: "error",
                                alert_text: "Маълумотларни юборишда хатолик юз берди!",
                            }*/
                        }

                    })
                    .catch((e) => {
                        this.jonatishLoading=false;

                        for (const [key, value] of Object.entries(e.response.data.error.errors))
                        {
                            _this.$toast.error(key + " - " + value);

                        }


                        //_this.$toast.error(Object.values(e.response.data.error)[0])
                        /*this.alert = {
                            value: true,
                            alert_type: "error",
                            alert_text: Object.values(e.response.data.error),
                            multiple: true
                        }*/
                    })
                setTimeout(() => {
                    this.alert = {
                        value: false,
                    }
                }, 4000)
            } else
            this.jonatishLoading = false;

        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}.${month}.${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [ day,month, year] = date.split('.')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
    }


}
</script>
<style>
.v-menu__content {
    background-color: #fff;
}

.application-form .form-control {
    border: none;
    border-bottom: 1px solid #ced4da;
    outline: none;
    box-shadow: none;
    border-radius: 0;
}

.appeals-title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
}

.v-alert {
    padding: 0 10px !important;
}
</style>
