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

                <v-col :cols="9">
                    <div class="single_blog_content">
                        <div class="widget_tittle"><h3>{{ category.title }}</h3></div>
                        <v-row style="height:40px; width: 100%"></v-row>
                        <v-row>
                            <v-col cols="4" class="news-item" v-for="(news,index) in category.news" :key="news.slug+index">
                                <div class="news-item-content">
                                    <router-link class="news__img" :to="`/news/` + news.slug "><img
                                        :src="`/storage/uploads/`+news.image"></router-link>
                                    <div class="news-meta"><span>{{ news.created_at }}</span></div>
                                    <router-link class="news__title" :to="`/news/` + news.slug ">{{ news.title }}
                                    </router-link>
                                </div>
                            </v-col>

                        </v-row>
                        <v-row class="justify-content-center mb-4" v-show="category.news && category.news.length/currentPage === 6">
                            <v-btn text color="primary" :loading="buttonLoading" style="width:max-content "
                                   @click="getAnotherNews()"> {{ $t("Яна кўриш") }}
                            </v-btn>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="left_sidebar_widget">
                        <div class="widget_tittle"><h3>{{ $t("Сўнги янгиликлар") }}</h3></div>
                        <div class="single_layout-right">
                            <router-link class="news-lenta" :to="/news/+related_item.slug"
                                         v-for="(related_item,index) in related_news" :key="related_item.slug + index">
                                <div class="news-meta"><span>{{ related_item.created_at }}</span></div>
                                <span class="news-lenta__title">{{ related_item.title }} </span></router-link>
                        </div>
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
    name: 'Category',
    data: () => ({
        breadcrumb_items: [
            {
                text: i18n.t('Асосий саҳифа'),
                to: '/',
                disabled: false,
                exact: true,
            },
            {
                text: i18n.t('Янгиликлар'),
                to: '/news/',
                disabled: false,
                exact: true,
            },
            {
                text: '',
                to: '/category/',
                disabled: true,
                exact: true,
            },
        ],
        /*id:this.$route.params.id,*/
        categories: {},
        category: {},
        buttonLoading: false,
        currentPage: 1,
        pageMeta: {
            current_page:1,
            last_page:2,
        },
        related_news: {}
    }),
    watch: {
        $route(to, from) {
            this.initialize();
        }
    },
    async created() {
        this.initialize();
    },
    methods: {
        close() {
            this.$router.replace('/');
        },
        async initialize() {
            await api.readCategory(this.$route.params.slug, true,null).then((response) => {
                this.category = response.data.data;
                //this.category.news = response.data.data.news.data;
                this.category.news.map(function (i) {
                    let dateParts = i.created_at.split("T");
                    if ((new Date(i.created_at)).getDate() === (new Date).getDate() && dateParts.length > 1 )
                        i.created_at = dateParts[1].substring(0, 5);
                    else i.created_at = dateParts[0];
                    return i;
                });
                this.breadcrumb_items[this.breadcrumb_items.length - 1].text = this.category.title;
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.$router.replace("/").catch(() => {
                });
            });


           await api.readNews().then((response) => {
                this.related_news = response.data.data.map(function (i) {
                    let dateParts = i.created_at.split("T");
                    if ((new Date(i.created_at)).getDate() === (new Date).getDate())
                        i.created_at = dateParts[1].substring(0, 5);
                    else i.created_at = dateParts[0];
                    return i;
                });
            }).catch((error) => {
               this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
            })
        },
        async getAnotherNews() {
            this.buttonLoading=true;
            await api.readCategory(this.$route.params.slug, true,this.currentPage + 1)
                .then((response) => {
                    this.category.news = this.category.news.concat(response.data.data.news.map(function (i) {
                    let dateParts = i.created_at.split("T");
                    if ((new Date(i.created_at)).getDate() === (new Date).getDate())
                        i.created_at = dateParts[1].substring(0, 5);
                    else i.created_at = dateParts[0];
                    return i;
                }));
                this.buttonLoading=false;
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                this.buttonLoading=false;
            })
            this.currentPage = this.currentPage + 1;
        },
    }

}
</script>
<style>
.news__img {
    position: relative;
    width: 100%;
    padding-bottom: 60%;
    overflow: hidden;
    display: block;
    margin-bottom: 12px;
}

.news__img img {
    display: block;
    -webkit-transition: 1s ease;
    -o-transition: 1s ease;
    transition: 1s ease;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.news-item .news__title {
    color: #000;
}

.news-item {
    margin-bottom: 20px;
}

.news-lenta {
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(197, 197, 197, 0.8);
    margin-bottom: 18px;
    display: inline-block;
    cursor: pointer;
}

.news-meta {
    margin-bottom: 10px;
    opacity: 0.8;
    color: #000000;
    font-size: 12px;
    padding-left: 20px;
    background: url(/img/calendar.svg) no-repeat center left;
    background-size: contain;
}

.news-meta > span {
    color: #8F8F8F;
    font-weight: 300;
}

.news-lenta__title {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #000000;
    -webkit-transition: .2s ease;
    -o-transition: .2s ease;
    transition: .2s ease;
}

.widget_tittle {
    padding-bottom: 35px;
    border-bottom: 2px solid #39ae69;
}

.left_sidebar_widget {
    margin-top: 30px;
}

.single_layout-right {
    margin-top: 40px;
}

.news-item.col.col-4:hover {
    box-shadow: 0 0 9px -6px #000;
}
</style>
