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
        <v-container class="news-container">
            <v-row>

                <v-col :cols="9">
                    <div class="single_blog_content">
                        <div class="widget_tittle"><h3>{{ news.title }}</h3></div>
                        <v-row style="height:40px; width: 100%"></v-row>
                        <v-row>
                            <div class="d-flex justify-content-between align-items-center" style="margin-top: -40px">

                                <!--                                    <template v-slot:activator>-->
                                <div class="d-flex align-items-center justify-content-center mr-2">

                                    <span class="primary-color cursor-pointer mr-1 "
                                          style="font-size: 18px">Улашинг</span>
                                    <v-icon color="primary" class="mr-1 " v-model="fab">
                                        mdi-share-variant
                                    </v-icon>
                                    <!--                                    </template>-->

                                    <a :href="'https://www.facebook.com/sharer/sharer.php?u='+currentUrl"
                                       class="text-decoration-none mx-1">
                                        <v-icon color="#1b74e4" style="font-size: 28px">mdi-facebook</v-icon>
                                    </a>
                                    <a :href="'https://t.me/share/url?url='+ currentUrl"
                                       class="text-decoration-none d-block mx-1" style="width: 25px;height: 25px;">
                                        <img src="/public/img/icons/telegram_icon.png" class="w-100">
                                    </a>
                                </div>
                                <!--
                                                                </v-speed-dial>-->
                                <p class="ml-2">
                                    <v-icon color="primary">mdi-calendar</v-icon>
                                    {{ news.created_at }}
                                </p>
                            </div>
                            <div v-html="news.description"></div>
                            <div class="news-content-footer d-flex justify-content-end align-items-center">

                                <!--                                    <template v-slot:activator>-->
                                <!--<div class="d-flex align-items-center justify-content-center mr-2">

                                                                        <span class="primary-color cursor-pointer mr-1 " style="font-size: 18px">Улашинг</span>
                                    <v-icon color="primary" class="mr-1 " v-model="fab">
                                        mdi-share-variant
                                    </v-icon>
                                &lt;!&ndash;                                    </template>&ndash;&gt;

                                                                    <a :href="'https://www.facebook.com/sharer/sharer.php?u='+currentUrl" class="text-decoration-none mx-1">
                                                                        <v-icon color="#1b74e4" style="font-size: 28px">mdi-facebook</v-icon>
                                                                    </a>
                                                                    <a :href="'https://t.me/share/url?url='+ currentUrl" class="text-decoration-none d-block mx-1" style="width: 25px;height: 25px;" >
                                                                        <img src="/public/img/icons/telegram_icon.png" class="w-100">
                                                                    </a>
                                </div>-->
                                <!--
                                                                </v-speed-dial>-->

                                <div class="d-flex justify-content-center align-items-center">
                                    <a class="text-decoration-none mx-2" @click="vote(1)">
                                        <v-icon color="primary">mdi-thumb-up</v-icon>
                                        {{ news.like }}
                                    </a>
                                    <a class="text-decoration-none mx-2" @click="vote(0)">
                                        <v-icon color="primary">mdi-thumb-down</v-icon>
                                        {{ news.dislike }}
                                    </a>
                                </div>
                                <p class="mx-2">
                                    Кўрилди
                                    <v-icon color="primary">mdi-eye-outline</v-icon>
                                    {{ news.viewed }}
                                </p>
                                <!--                                <p class="ml-2">
                                                                    <v-icon color="primary">mdi-calendar</v-icon>
                                                                    {{ news.created_at }}
                                                                </p>-->
                            </div>

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
import ListItem from "../../../views/dashboard/component/ListItem";
import i18n from "../../../i18n";

export default {
    name: 'News',
    components: {ListItem},
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
                disabled: false,
                exact: true,
            },
            {
                text: '',
                to: '/news/',
                disabled: true,
                exact: true,
            },
        ],
        /*id:this.$route.params.id,*/
        news: {},
        // currentUrl:"",
        fab: true,
        related_news: {},
        likes: [],
        dislikes: [],
        mdata: null,
    }),
    watch: {
        $route(to, from) {
            this.initialize();
        }
    },
    async created() {
        this.initialize();
    },
    computed: {
        currentUrl() {
            if ((window.location.href).indexOf(this.$route.fullPath) !== -1)
                return (window.location.href).substr(0, (window.location.href).indexOf(this.$route.fullPath)) + this.$route.fullPath
            return window.location.href;
        }
    },
    methods: {
        close() {
            this.$router.replace('/');
        },
        initialize() {
            setTimeout(async () => {
                await api.readOneNews(this.$route.params.slug).then((response) => {

                    this.news = response.data.data;
                    /*let dateParts = this.news.created_at.split("T");
                    if ((new Date(this.news.created_at)).getDate() === (new Date).getDate())
                        this.news.created_at = dateParts[1].substring(0, 5);
                    else this.news.created_at = dateParts[0];*/

                    if (this.news.categories.length > 0) {
                        this.breadcrumb_items[2].text = this.news.categories[0].title;
                        this.breadcrumb_items[2].to = "/category/" + this.news.categories[0].slug;
                        this.breadcrumb_items[3].text = this.news.title;
                    } else {
                        this.breadcrumb_items[2].text = this.news.title;
                        this.breadcrumb_items[2].disabled = true;
                        this.breadcrumb_items.splice(3,1)
                    }

                }).catch((error) => {
                    console.log(error)
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    /*this.$router.replace("/").catch(() => {
                    });*/
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
                    console.log(error)
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                })

            })


        },
        vote(vote) {
            const _this = this;
            _this.likes = this.$cookie.get('likes') ? JSON.parse(this.$cookie.get('likes')) : null;
            _this.dislikes = this.$cookie.get('dislikes') ? JSON.parse(this.$cookie.get('dislikes')) : null;

            /*            let likes=this.$cookie.get('likes') ? JSON.parse(this.$cookie.get('likes')) : null;
                        if(likes!==null && likes.include(this.news.id)) {

                        }else*/
            let discount = false;
            if (vote === 1) {
                if (_this.likes !== null && _this.likes.includes(_this.news.id)) {
                    this.$toast.warning(i18n.t('Сиз аллақачон овоз бергансиз') + '!')
                    return;

                } else {
                    if (_this.dislikes !== null && _this.dislikes.includes(_this.news.id))
                        discount = true;

                    if (_this.likes) {
                        this.$cookie.set('likes', JSON.stringify(_this.likes.concat([_this.news.id])))
                    } else
                        this.$cookie.set('likes', JSON.stringify([_this.news.id]))
                }


            }
            if (vote === 0) {
                if (_this.dislikes !== null && _this.dislikes.includes(_this.news.id)) {
                    this.$toast.warning(i18n.t('Сиз аллақачон овоз бергансиз') + '!')
                    return;

                } else {
                    if (_this.likes !== null && _this.likes.includes(_this.news.id))
                        discount = true;
                    if (_this.dislikes) {
                        this.$cookie.set('dislikes', JSON.stringify(_this.dislikes.concat([_this.news.id])))
                    } else
                        this.$cookie.set('dislikes', JSON.stringify([_this.news.id]))
                }

            }
            _this.mdata = {
                like: vote,
            }
            if (discount) _this.mdata['discount'] = 1;
            setTimeout(async () => {
                await axios.post('/api/v1/news/' + _this.news.id + '/vote', _this.mdata).then(() => {
                    if (vote === 1) {
                        _this.news.like = _this.news.like + 1;
                        if (discount) {
                            _this.news.dislike = _this.news.dislike - 1;
                            if (_this.dislikes?.indexOf(_this.news.id) !== -1) {
                                _this.dislikes = _this.dislikes.splice(_this.news.id, 1)
                                this.$cookie.set('dislikes', JSON.stringify(_this.dislikes))
                            }
                        }

                    }
                    if (vote === 0) {
                        _this.news.dislike = _this.news.dislike + 1;
                        if (discount) {
                            _this.news.like = _this.news.like - 1;
                            if (_this.likes?.indexOf(_this.news.id) !== -1) {
                                _this.likes = _this.likes.splice(_this.news.id, 1)
                                this.$cookie.set('likes', JSON.stringify(_this.likes))
                            }
                        }
                    }
                })
            })

        }
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

.widget_tittle h3 {
    color: #39ae69;
    font-weight: bold;
    font-size: 25px;
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

.single_blog_content img {
    max-width: 100%;

}

.news-content-footer {


}
</style>
