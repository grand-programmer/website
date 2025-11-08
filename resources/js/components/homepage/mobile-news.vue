<template>
    <div class="news in-style">
        <router-link class="all_news d-none" to="/news" >
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;"
                 xml:space="preserve">
        <path d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
            s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"/>
                <path style="fill:#FAFAFA;" d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
            c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483
            c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
            c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"/>
        </svg>
            <p> {{ $t("Барча янгиликлар") }} </p>
        </router-link>
        <div class="container" style="padding: 15px">
            <div class="news-head">
                <div class="news-title">{{ $t("Янгиликлар") }}</div>
                <router-link to="/news"  class="all-news_link"> <span>{{ $t("Барча янгиликлар") }}</span>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;"
                         xml:space="preserve">
                    <path d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
                    c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483
                    c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
                    c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"/>
                </svg>
                </router-link>
            </div>

            <v-carousel cycle interval="3000" hide-delimiters class="news-carousel" style="height: 360px">
                <v-carousel-item v-for="(newsItem,key) in news" id="yangi">
                    <div class="news in-style">
                        <div class="news-content" style="margin-top: -20%">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div  class="news-item">
                                        <div class="news-box">
                                            <div class="box-img">
                                                <img
                                                    :src="`/storage/uploads/`+ newsItem.image" :alt="newsItem.image">
                                            </div>
                                            <div class="box-content">
                                                <div class="box-content-top">
                                                    <div class="box-date">
                                                        <div class="box-time">
                                                            {{ newsItem.created_at.split(' ')[1] }}
                                                        </div>
                                                        <div class="box-date-cal">
                                                            {{ newsItem.created_at.split(' ')[0] }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul class="news-item-cats">
                                                    <li v-for="(categoryItem,key) in newsItem.categories" v-if="key===0">
                                                        <a :href="'category/' + categoryItem.slug">{{ categoryItem.title }}</a>
                                                    </li>
                                                </ul>
                                                <router-link :to="`news/`+newsItem.slug" class="box-text">{{ newsItem.title }}</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: "news-in-homepage",
    data() {
        return {
            news: [],
            categories: [],
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readNews().then((response) => {
                this.news = response.data.data.map(function (i) {
                    i.title = i.title.substr(0, 100) + '  ...';
                    return i;
                });
            }).catch((error) => {
                this.$toast.error(this.$t("Маълумотларни олишда хатолик содир бўлди!"))
            })
            api.readCategories(8).then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                this.$toast.error(this.$t("Маълумотларни юклашда хатолик содир бўлди!"))
            })

        }
    }
}
</script>
