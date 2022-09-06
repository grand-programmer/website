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
import i18n from "../../../i18n";

export default {
    name: 'My applications',
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
                    text: i18n.t('Менинг аризаларим'),
                    to: '/applications',
                    disabled: true,
                    exact: true,
                },
            ],
        }
    },

}
</script>
