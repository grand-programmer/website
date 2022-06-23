<template>
    <div class="section customs-value-section">
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
            <v-container>
                <v-row>
                    <h3 class="pb-5 mt-5 primary-color" style="font-weight: bold">Божхона органларига ишга кириш учун ариза </h3>
                    <h5><b>Ариза рақами: </b>{{ vacancy.id }}</h5>
                </v-row>
                <v-row>
                                        <v-tabs
                                            v-model="tab"
                                            left
                                            class="fixed-color-tabs"

                                        >
                                            <v-tab
                                                v-for="item in items"
                                                :key="item.tab"
                                                style="width: 400px"


                                            >
                                                {{ item.tab }}
                                            </v-tab>
                                        </v-tabs>




                </v-row>


            </v-container>


        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import Qrcode from '@chenfengyuan/vue-qrcode';
import VueHtml2pdf from 'vue-html2pdf';
import html2pdf from 'html2pdf.js'
export default {
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
                    disabled: false,
                    exact: true,
                },

            ],
            items:[
                {tab:'Ариза ҳақида умумий маълумот'},
                {tab:'Ариза ҳолати'},],
            vacancy:null,
            baseURL: window.location.href,


        }
    },


    components:{

    }
}
</script>
