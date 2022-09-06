<template>
    <div class="section page-container">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <v-container>
            <v-row>
                <v-col cols="3" v-if="relates.length>0">
                    <div class="left_sidebar_widget">
                        <div class="single_widget categori_widget wow fadeInUp"
                             style="visibility: visible; animation-name: fadeInUp;">
                            <ul>
                                <li  :class="(related_item!=null && $route.params.id==parseInt(related_item.id) || $route.params.id==related_item.url.substr(6)) ? 'active' : ''"  v-for="related_item in relates"><router-link v-if="related_item" :to="related_item.url" ><i aria-hidden="true" class="fa fa-caret-right"></i>{{related_item.title}}</router-link>
                                    <ul>
                                        <li :class="(childRelated!=null && $route.params.id==parseInt(childRelated.id) || $route.params.id==childRelated.url.substr(6)) ? 'active' : ''"  v-for="childRelated in related_item.children"><router-link v-if="childRelated" :to="childRelated.url" ><i aria-hidden="true" class="fa fa-caret-right"></i>{{childRelated.title}}</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </v-col>
                <v-col :cols="(relates.length>0) ? 9 : 12">
                    <div class="single_blog_content">
                        <div class="widget_tittle"><h3>{{ page.title }}</h3></div>
                        <div v-html="page.description"></div>
                    </div>
                </v-col>

            </v-row>
        </v-container>


    </div>
</template>
<script>
import api from "./../../../src/services/apiService";
import i18n from "../../../i18n";

export default {
    name: 'Page',
    data: () => ({
        breadcrumb_items: [
            {
                text: i18n.t('Асосий саҳифа'),
                to: '/',
                disabled: false,
                exact: true,
            },
            {
                text: '',
                to: '/page/',
                disabled: true,
                exact: true,
            },
        ],
        /*id:this.$route.params.id,*/
        page:{},
        relates:{}
    }),
    watch:{
        $route (to, from){
            this.initialize();
        }
    },
    async created() {
        this.initialize();
    },
    title(){
        this.page.title;
    },

    methods: {
        close() {
            this.$router.replace('/');
        },
        initialize() {
           api.readPage(this.$route.params.id).then((response) => {
                this.page = response.data.data;
                if(!this.page.id) this.$router.replace('/404')
               this.breadcrumb_items[1].text=this.page.title;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/").catch(() => {
                });
            })
            api.readRelated(this.$route.params.id).then((response) => {
                this.relates = response.data;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/").catch(() => {
                });
            })


        },
    }

}
</script>
<style>

</style>
