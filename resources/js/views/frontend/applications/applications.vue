<template>
        <div class="section" id="section">
            <div class="whitebreadcrumb breadcrumb-site">
                <v-container>
                    <v-breadcrumbs :items="breadcrumb_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-container>
            </div>
        </div>
</template>
<script>
export default {
    name: 'MyApplicationsList',
    data() {
        return {
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Менинг аризаларим',
                    to: '/applications',
                    disabled: true,
                    exact: true,
                },
            ],
        }
    },

}
</script>
