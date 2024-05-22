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


            <p> {{ $t("Барча янгиликлар") }} </p></router-link>
        <div class="container">
            <div class="news-head">
                <div class="news-title">{{ $t("Янгиликлар") }}</div>
                <router-link to="/news"  class="all-news_link"> {{ $t("Барча янгиликлар") }}
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
                <!--                <ul>
                                    <li  v-for="(categoryItem,key) in categories">
                                        <a :href="'category/' + categoryItem.slug">{{categoryItem.title}}</a>
                                    </li>
                                </ul>-->
                <!--                <router-link to="category/gender-tenglik" class="news-link">Барча янгиликлар</router-link>-->
            </div>
            <!--            <div class="news-cats">
                            <ul >
                                <li v-for="(category,catkey) in categories" > <router-link :to="`category/`+category.slug">{{
                                        category.title
                                    }}{{ (catkey < categories) ? ',' : '' }}
                                </router-link> </li>
                            </ul>
                        </div>-->

            <div class="news-content">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6" v-for="(newsItem,key) in news" id="yangi">
                        <div  class="news-item">
                            <div class="news-box">
                                <div class="box-img">
                                    <img
                                        :src="`/storage/uploads/`+ newsItem.image"></div>
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
                                        <!--                                        <div class="box-eye">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213Z"
                                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                                            stroke-linejoin="round"></path>
                                                                                        <path
                                                                                            d="M2.45801 12C3.73201 7.943 7.52301 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.52301 19 3.73201 16.057 2.45801 12Z"
                                                                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                                                                            stroke-linejoin="round"></path>
                                                                                    </svg>
                                                                                    31
                                                                                </div>-->
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
