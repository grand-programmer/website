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
                        <div class="widget_tittle" style="height: 75px"><h3>{{ $t("Янгиликлар") }}</h3></div>
                        <v-row v-if="categories" style="flex-direction: row; justify-content: start" class="mt-5 categories-chip">
                            <v-hover v-for="(category,key) in categories" :key="'dsf'+key" v-if="category"  v-slot="{ hover }"> <v-chip color="primary" :style="hover?'background-color:#08642e !important;':''" style="width: max-content;" class="text-decoration-none cursor-pointer my-1 mx-1" :to="'/category/' + category.slug" > {{category.text}}</v-chip></v-hover>
                        </v-row>
                        <v-row style="height:20px; width: 100%"></v-row>
                        <v-row>
                            <v-col cols="4" class="news-item" v-for="(news,index) in news" :key="news.slug+index">
                                <div class="news-item-content">
                                    <div class="news__img"><img
                                        :src="`/storage/uploads/`+news.image"></div>
                                    <div class="news-meta"><span>{{ news.created_at }}</span></div>
                                    <router-link class="news__title" :to="`/news/` + news.slug ">{{ news.title }}
                                    </router-link>
                                </div>
                            </v-col>

                        </v-row>
                        <v-row class="justify-content-center mb-4" v-show="pageMeta.current_page!==pageMeta.last_page">
                            <v-btn text color="primary" :loading="buttonLoading" style="width:max-content "
                                   @click="getAnotherNews()"> {{ $t("Яна кўриш") }}
                            </v-btn>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="3">
                    <div class="left_sidebar_widget">
                        <div class="widget_tittle"><h3>{{ $t("Кўп марта кўрилганлар") }}</h3></div>
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
                text: 'Янгиликлар',
                to: '/news',
                disabled: true,
                exact: true,
            },
        ],
        /*id:this.$route.params.id,*/
        categories: {},
        category: {},
        related_news: {},
        news: {},
        buttonLoading: false,
        currentPage: 1,
        pageMeta: {
            current_page:1,
            last_page:2,
        },
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
        async getAnotherNews() {
            this.buttonLoading=true;
            await api.readNews({page: (this.currentPage + 1)}).then((response) => {
                this.pageMeta = response.data.meta;
                this.news = this.news.concat(response.data.data.map(function (i) {
                    let dateParts = i.created_at.split("T");
                    if ((new Date(i.created_at)).getDate() === (new Date).getDate()) {
                        if(dateParts.length < 2 && typeof dateParts[0] !== 'undefined'){
                            i.created_at = dateParts[0].substring(0, 5);
                        } else
                        i.created_at = dateParts[1].substring(0, 5);
                    }
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
        close() {
            this.$router.replace('/');
        },
        async initialize() {
            await api.readNews().then((response) => {
                this.pageMeta = response.data.meta;
                this.related_news = this.news = response.data.data.map(function (i) {
                    let dateParts = i.created_at.split("T");
                    if(dateParts.length < 2 && typeof dateParts[0] !== 'undefined'){
                        i.created_at = dateParts[0].substring(0, 10);
                    } else {
                        i.created_at = dateParts[1].substring(0, 10);
                    }
                    return i;
                });
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
            })
            api.readCategoriesForSelect().then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                console.log(error)
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
            })

            /*            api.readNews().then((response) => {
                            console.log()
                            this.related_news = response.data.data.map(function (i) {
                                let dateParts = i.created_at.split("T");
                                if ((new Date(i.created_at)).getDate() === (new Date).getDate())
                                    i.created_at = dateParts[1].substring(0, 5);
                                else i.created_at = dateParts[0];
                                return i;
                            });
                        }).catch((error) => {
                            console.log(error)
                            this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                        })*/
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
    cursor:pointer;
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
    margin-left: 5px;
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

.v-application .single_blog_content .widget_tittle h3{
    color: #39ae69;
    font-weight: bold;
    font-size: 25px;
}
.widget_tittle {
    padding-bottom: 35px;
    border-bottom: 2px solid #39ae69;
}

.left_sidebar_widget {
    margin-top: 9px;
}

.single_layout-right {
    margin-top: 40px;
}

.news-item.col.col-4:hover {
    box-shadow: 0 0 9px -6px #000;
}
</style>
