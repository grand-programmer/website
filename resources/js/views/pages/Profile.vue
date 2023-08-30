<template>
    <div class="section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>

        <v-container class="mening_arizalarim">
            <v-row v-if="$auth.user()">
                <v-col cols="3">
                    <v-card
                        class="mx-auto mt-9"
                    >
                        <v-navigation-drawer permanent class="accent-4 w-100">
                            <v-list>
                                <!--                                <v-list-item>
                                                                    <v-list-item-avatar>
                                                                        <v-img :src="'/public/images/users/'+ $auth.user().id +'.jpg'"></v-img>
                                                                    </v-list-item-avatar>
                                                                </v-list-item>-->

                                <v-list-item link>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">
                                            {{ $auth.user().first_name }} {{ $auth.user().sur_name }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>{{ $auth.user().email }}</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-icon>mdi-menu-down</v-icon>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list
                                nav
                                dense
                            >
                                <v-list-item-group
                                    v-model="selectedItem"
                                    color="primary"
                                >
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        :to="item.link"
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-navigation-drawer>
                    </v-card>

                    <!--                    <v-card class="p-3" elevation="1">
                                            <div class="d-flex align-items-center justify-space-between user_info">
                                                <img  :src="'/public/images/users/'+ $auth.user().id +'.jpg'" alt="Фойдаланувчи сурати">
                                                <p>
                                                    {{$auth.user().first_name}} {{$auth.user().sur_name}} {{$auth.user().mid_name}}
                                                </p>

                                            </div>
                                            <v-row>

                                            </v-row>

                                        </v-card>-->
                </v-col>
                <v-col cols="9">
                    <v-card class="mt-9 p-3 mening_profilim" elevation="1">
                        <h3 class="my-5 mb-10">Менинг профилим</h3>
<validation-observer ref="profileForm" v-slot="{ invalid }" tag="div"   >
                        <v-container>
                            <v-row class="dashed-border">
                                <v-col cols="12">
                                    <v-row class="align-items-start">
                                        <v-col cols="2">
                                            <img class="w-100" :src="user_image"/>
                                        </v-col>
                                        <v-col cols="10" class="profile-item border-0 mt-5">


                                            <h4>{{ $auth.user().first_name }} {{ $auth.user().sur_name }}
                                                {{ $auth.user().mid_name }}</h4>
                                            <span>{{ $auth.user().pin }}</span>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4" class="profile-item">
                                    <span>Туғилган сана</span>
                                    <span>{{ $auth.user().birth_date }}</span>
                                </v-col>
                                <v-col cols="4" class="profile-item">
                                    <span>Туғилган жойи</span>
                                    <span>{{ $auth.user().birth_place }}</span>
                                </v-col>
                                <v-col cols="4" class="profile-item">
                                    <ValidationProvider
                                        v-slot="{ errors}"
                                        name="Яшаш жойи"
                                        rules="required"
                                        tag="div"
                                    >
                                    <span>Яшаш жойи</span>
                                    <v-text-field v-model="$auth.user().per_adr" :error-messages="errors[0]"></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="4" class="profile-item" v-if="$auth.user().email">
                                    <span>Электрон почта</span>
                                    <span>{{ $auth.user().email }}</span>
                                </v-col>
                                <v-col cols="4" class="profile-item">
                                    <ValidationProvider
                                        v-slot="{ errors}"
                                        name="Телефон рақами"
                                        tag="div"
                                        rules="required"
                                    >
                                    <span>Телефон рақами</span>
                                        <v-text-field v-mask="'############'" v-model="$auth.user().phone" :error-messages="errors[0]"></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" class="mx-5"><v-btn color="primary" @click="changeProfile" >{{$t('Ўзгаришларни сақлаш')}}</v-btn></v-col>
                            </v-row>

                        </v-container>
</validation-observer>

                        <!--                        <h3 class="my-5">Менинг аризаларим</h3>

                                                <v-row>
                                                    <v-col cols="12">
                                                        <div class="vacancy-filter">
                                                            <v-row class=" mt-3">
                                                                <v-col cols="2">
                                                                    <v-text-field
                                                                        label="Ариза рақами"
                                                                    ></v-text-field>
                                                                </v-col>
                                                                <v-col cols="3">
                                                                    <v-menu
                                                                        ref="menu_sanadan"
                                                                        v-model="menu_sanadan"
                                                                        :close-on-content-click="false"
                                                                        transition="scale-transition"
                                                                        offset-y
                                                                        min-width="auto"
                                                                    >
                                                                        <template v-slot:activator="{ on, attrs }">
                                                                            <v-text-field
                                                                                v-model="filter.date_sanadan"
                                                                                label="Санадан"
                                                                                prepend-icon="mdi-calendar"
                                                                                readonly
                                                                                v-bind="attrs"
                                                                                v-on="on"
                                                                            ></v-text-field>
                                                                        </template>
                                                                        <v-date-picker
                                                                            class="m-0"
                                                                            :active-picker.sync="activePickerDan"
                                                                            v-model="filter.date_sanadan"
                                                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                                            min="1950-01-01"
                                                                            @change="save_sanadan"
                                                                        ></v-date-picker>
                                                                    </v-menu>
                                                                </v-col>
                                                                <v-col cols="3">
                                                                    <v-menu
                                                                        ref="menu_sanagacha"
                                                                        v-model="menu_sanagacha"
                                                                        :close-on-content-click="false"
                                                                        transition="scale-transition"
                                                                        offset-y
                                                                        min-width="auto"
                                                                    >
                                                                        <template v-slot:activator="{ on, attrs }">
                                                                            <v-text-field
                                                                                v-model="filter.date_sanagacha"
                                                                                label="Санагача"
                                                                                prepend-icon="mdi-calendar"
                                                                                readonly
                                                                                v-bind="attrs"
                                                                                v-on="on"
                                                                            ></v-text-field>
                                                                        </template>
                                                                        <v-date-picker
                                                                            class="m-0"
                                                                            :active-picker.sync="activePickerGacha"
                                                                            v-model="filter.date_sanagacha"
                                                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                                                            min="1950-01-01"
                                                                            @change="save_sanagacha"
                                                                        ></v-date-picker>
                                                                    </v-menu>
                                                                </v-col>
                                                                <v-col cols="3">
                                                                    <v-autocomplete
                                                                        v-model="filter.type"
                                                                        :items="types"
                                                                        label="Ариза тури"
                                                                    ></v-autocomplete>
                                                                </v-col>
                                                                <v-col cols="1" class="d-flex justify-content-center">
                                                                    <v-btn
                                                                        fab
                                                                        dark
                                                                        small
                                                                        color="primary"
                                                                        center
                                                                    >
                                                                        <v-icon dark>mdi-magnify</v-icon>
                                                                    </v-btn>
                                                                </v-col>
                                                            </v-row>
                                                        </div>

                                                    </v-col>

                                                </v-row>


                                                <v-row>
                                                    <v-col cols="12">
                                                        <v-data-table
                                                            :headers="headers"
                                                            :items="apps"
                                                            :items-per-page="5"
                                                        ></v-data-table>

                                                    </v-col>
                                                </v-row>-->
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<script>
import i18n from "../../i18n";
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    name: "MyProfile",
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
                    text: 'Хизматлар',
                    to: '/profile',
                    disabled: true,
                    exact: true,
                },
            ],
            selectedItem: 0,
            user_image:null,
            items: [
                {text: 'Профил', icon: 'mdi-account', link: '/profile'},
                {text: 'Менинг аризаларим', icon: 'mdi-history', link: '/applications'},
                {text: 'Хизматлар', icon: 'mdi-star', link: '/services'},
                {text: 'Реестрлар', icon: 'mdi-book-open-outline', link: '/services?page=3'},
            ],

        }
    },
    created() {

        this.getImage();
        if (this.$route.query.code) {
            this.auth();


        } else if (!this.$auth.check()) {
            this.$router.push('/login')
        }
    },

    methods: {
        authWithOutside() {
            var redirect = this.$auth.redirect()
            var _this = this

            this.$store.commit('setLoading', true)
            this.$auth.login({
                data: {
                    code: _this.$route.query.code
                },
                success: function () {
                    // handle redirection
                    this.success = true
                    const redirectTo = 'admin';
                    //this.$auth.role=
                    this.$router.push('/profile')
                },
                error: function () {
                    _this.has_error = true
                    _this.error = res.error
                },
                redirect: (this.$route.params.slug === 'admin') ? '/admin' : '/profile',
                //rememberMe: true,
                fetchUser: true
            }).then((res) => {
                _this.has_error = true
                _this.error = res.error
                _this.$store.commit('setLoading', false);
            }).catch((err) => {
                _this.has_error = true
                _this.error = 'login_error'
            })

        },
        auth() {
            var redirect = this.$auth.redirect()
            var _this = this

            this.$store.commit('setLoading', true)
            this.$auth.login({
                data: {
                    code: _this.$route.query.code
                },
                success: function () {
                    // handle redirection
                    this.success = true
                    const redirectTo = 'admin';
                    //this.$auth.role=
                    this.$router.push('/profile')
                },
                error: function () {
                    _this.has_error = true
                    _this.error = res.error
                },
                redirect: (this.$route.params.slug === 'admin') ? '/admin' : '/profile',
                //rememberMe: true,
                fetchUser: true
            }).then((res) => {
                _this.has_error = true
                _this.error = res.error
                _this.$store.commit('setLoading', false);
            }).catch((err) => {
                _this.has_error = true
                _this.error = 'login_error'
            })

        },
        getImage() {
            const _this=this;
            let returnValue;
            if(this.$auth.user) {
                setTimeout(async () => {
                    await this.axios.get("/api/v1/get_image", {responseType: 'arraybuffer'}).then(res => {
                        /*                    let reader = new FileReader();
                    reader.readAsDataURL(res.data);
                    reader.onload = () => {
                        _this.user_image = reader.result;
                    }*/
                        let bytes = new Uint8Array(res.data);
                        let binary = bytes.reduce((data, b) => data += String.fromCharCode(b), '');
                        _this.user_image = "data:image/jpeg;base64," + btoa(binary);

                    }).catch(() => {
                        // alert("Unable to load raw attachment from this task and ID");
                    });

                }, 1000);
            }
        },
        async changeProfile(){
            const isValid = await  this.$refs.profileForm.validate()
            if(isValid) {
                axios.post('/api/v1/userUpdate', {
                    address: this.$auth.user().per_adr,
                    phone: this.$auth.user().phone,
                }).then(res => {
                    if (res.status === 200) {
                        this.$toast.success(this.$t('Маълумотлар омадли тарзда сақланди'))
                    } else this.$toast.error(this.$t('Маълумотлар сақлашда хатолик юз берди'))
                })
            }else
            {
                this.$toast.error(this.$t('Маълумотлар тўғрилаб қайтадан юборинг'))
            }
        }

    },
        components:{
            ValidationProvider,
            ValidationObserver,
        }

}
</script>
<style>
.profile-item span:last-child{
    margin-top: 35px;
}
</style>

