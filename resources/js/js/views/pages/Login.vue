<template>
    <v-main style="min-height:100vh;background-color: #39ae69; ">
        <v-container fill-height="fill-height">
            <v-layout align-center="align-center" justify-center="justify-center">
                <v-flex class="login-form text-xs-center">
                    <div class="display-1 mb-3 text-center">
                        <v-icon class="mr-2" large="large">mdi-work</v-icon>
                        Бошқарув панели
                    </div>
                    <v-card light="light">
                        <v-card-text>
                            <h3 class="subheading text-center">
                                <template v-if="options.isLoggingIn">Кириш</template>
                                <template v-else="v-else">Рўйхатдан ўтиш</template>
                            </h3>
                            <v-divider></v-divider>
                            <div class="alert alert-danger" v-if="has_error && !success">
                                <p v-if="error == 'login_error'">Хатолик, ушбу маълумотлар мос келмади</p>
                                <p v-else-if="error=='register_error'">Хатолик, Рўйхатдан ўтишда хатолик юз берди</p>
                                <p v-else>Хатолик, Тизимга киришда хатолоик юз берди</p>
                            </div>
                            <v-alert type="success" v-model="alert">
                                <p>Сиз рўйхатдан муваффаққиятли тарзда ўтдингиз</p>
                            </v-alert>
                            <form autocomplete="off" @submit.prevent.stop="options.isLoggingIn ? login() : register()" method="post">
                                <v-text-field v-if="!options.isLoggingIn" v-model="name" light="light"
                                              prepend-icon="mdi-account" label="Исм" required></v-text-field>
                                <v-text-field v-model="email" light="light" prepend-icon="mdi-email"
                                              label="Электрон почта" type="email" required></v-text-field>
                                <v-text-field v-model="password" light="light" prepend-icon="mdi-lock"
                                              label="Парол" type="password" required></v-text-field>
                                <v-text-field v-model="password_confirmation" v-if="!options.isLoggingIn" light="light" prepend-icon="mdi-lock"
                                              label="Паролни тасдиқлаш" type="password" required></v-text-field>
                                <v-checkbox v-if="options.isLoggingIn" v-model="options.shouldStayLoggedIn"
                                            light="light"
                                            label="Кириш учун киритган маълумотларингиз сақланиб қолишини хоҳлайсизми?"
                                            hide-details="hide-details"></v-checkbox>
                                <v-btn v-if="options.isLoggingIn" type="submit" class="d-flex justify-content-center" style="margin:0 auto">
                                    Кириш
                                </v-btn>
                                <v-btn v-else="v-else" type="submit" class="d-flex justify-content-center" style="margin:0 auto">
                                    Рўйҳатдан ўтиш
                                </v-btn>
                            </form>
                        </v-card-text>
                    </v-card>
                    <div v-if="options.isLoggingIn" >
<!--                        Рўйхатдан ўтмаганмисиз?-->
                        <v-list-item color="primary"  @click="options.isLoggingIn = false" style="margin: 0 auto">Рўйҳатдан ўтмоқчимисиз ?</v-list-item>
                    </div>
                    <div v-else>
<!--                        Аллақачон рўйхатдан ўтиб қўйганмисиз ?-->
                        <v-list-item color="primary" @click="options.isLoggingIn = true">Тизимдан рўйхатдан ўтганмисиз?</v-list-item>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-main>

</template>
<script>
export default {
    data() {
        return {
            success: false,
            has_error: false,
            error: '',
            alert: false,
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
            options: {
                isLoggingIn: true,
                shouldStayLoggedIn: false,
            },
        }
    },
    methods: {
        login() {
            // get the redirect object
            var redirect = this.$auth.redirect()
            var app = this

            this.$auth.login({
                data: {
                    email: this.email,
                    password: this.password,
                    staySignedIn:this.options.shouldStayLoggedIn
                },
                success: function () {
                    // handle redirection
                    this.success = true
                    const redirectTo = 'admin';
                    //this.$auth.role=
                    this.$router.push('/')
                },
                error: function () {
                    app.has_error = true
                    app.error = res.error
                    /*console.log('sdf');*/
                },
                //rememberMe: true,
                fetchUser: true
            }).then((res) => {
                app.has_error = true
                app.error = res.error
            }).catch((err) => {
                app.has_error = true
                app.error = 'login_error'
            })
        },
        register() {
            var app = this
            this.$auth.register({
                data: {
                    name: app.name,
                    email: app.email,
                    password: app.password,
                    password_confirmation: app.password_confirmation,
                },
                success: function () {

                    this.success = true
                    this.has_error=false;
                    this.alert = true;
                    this.options.isLoggingIn=false;
                    this.$router.push('/')
                    //this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
                },
                error: function (res) {
                    // console.log(res.response.data.errors)
                    console.log('asdasd');
                    app.has_error = true
                    app.error = res.response.data.error
                    app.errors = res.response.data.errors || {}
                }
            }).then((res) =>{
                if(res.data.status=="success") {
                    this.alert = true;
                    this.options.isLoggingIn=true;

                }
            }).catch((err) => {
                app.has_error = true
                app.error = 'register_error'
                console.log('asdasd111');
            })
        }
    }
}
</script>

