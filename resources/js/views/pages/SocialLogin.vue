<template>

</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {
        this.auth();
    },
    methods: {
        auth(){
            var redirect = this.$auth.redirect()
            var app = this

            this.$auth.login({
                data: {
                    code:app.$route.query.code
                },
                success: function () {
                    // handle redirection
                    this.success = true
                    //this.$auth.role=
                    this.$router.push('/profile');
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

        }

    }
}
</script>

