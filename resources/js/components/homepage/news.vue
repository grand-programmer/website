<template>
    <div class="news">
    <a class="all_news">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;"
             xml:space="preserve">
<path style="fill:#009688;" d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"/>
            <path style="fill:#FAFAFA;" d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
	c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483 c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
	c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"/>
</svg>
        <p> Барча янгиликлар </p></a>
    <div class="container">
        <h3 class="text-center bolimlar_title">Қўмита янгиликлари</h3>
        <div class="row news_categories_1">
            <ul>
                <li  v-for="(categoryItem,key) in categories">
                    <a :href="'category/' + categoryItem.slug">{{categoryItem.title}}</a>
                </li>
<!--                <li><a href="#">Тадбирлар</a></li>
                <li><a href="#">Технологиялар</a></li>
                <li><a href="#">Спорт</a></li>
                <li><a href="#">Эълон</a></li>
                <li><a href="#">Экспорт</a></li>
                <li><a href="#">Халқаро ҳамкорлик</a></li>
                <li><a href="#">Ҳуқуқий саводхонлик</a></li>
                <li><a href="#">Гендер тенглик</a></li>-->
            </ul>
        </div>

        <div class="row">
            <div class="col-md-12 new_section">

                <div id="carouselExampleDark" class="carousel carousel-dark slide"
                     data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" :class="key!=1 || 'active'" data-bs-interval="10000"
                             v-for="(newsItem,key) in news">
                            <div class="col-md-8">
                                <div class="company_image"
                                     :style="`background-image: url(/storage/uploads/`+ newsItem.image + `)`">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="company_content">
                                    <ul class="cats" v-for="(category,catkey) in newsItem.categories">
                                        <li>
                                            <router-link :to="`category/`+category.slug">{{
                                                    category.title
                                                }}{{ (catkey < newsItem.categories) ? ',' : '' }}
                                            </router-link>
                                        </li>
                                    </ul>
                                    <div class="about_tittle">
                                        <h2>
                                            <router-link :to="`news/`+newsItem.slug"> {{ newsItem.title }}</router-link>
                                        </h2>
                                    </div>
                                    <div class="date">
                                        <svg
                                            height="512"
                                            viewBox="0 0 512 512" width="512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="m391.017 251.454h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-.357 145h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-102.273-45h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-168.475 170.546h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm.357-235.546h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm168.475 107.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm159.365-259.953h-32.066v-11.467c0-12.576-10.231-22.807-22.807-22.807h-3.444c-12.575 0-22.806 10.231-22.806 22.807v11.467h-223.4v-11.467c0-12.576-10.231-22.807-22.807-22.807h-3.444c-12.576 0-22.807 10.231-22.807 22.807v11.467h-32.065c-20.705 0-37.55 16.845-37.55 37.55v402.676c0 20.678 16.822 37.5 37.5 37.5h385.748c20.678 0 37.5-16.822 37.5-37.5v-402.676c-.001-20.705-16.846-37.55-37.552-37.55zm-66.123-11.467c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467h-19.058zm-272.457 0c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467h-19.057v-11.467zm361.131 451.693c0 12.407-10.093 22.5-22.5 22.5h-385.748c-12.407 0-22.5-10.093-22.5-22.5v-.047c6.284 4.735 14.095 7.547 22.551 7.547h304.083c10.03 0 19.46-3.906 26.552-10.999l77.562-77.562zm-85.215-17.059c.588-2.427.908-4.958.908-7.563v-50.064c0-9.44 7.681-17.121 17.122-17.121h50.063c2.605 0 5.136-.32 7.563-.908zm85.215-315.987h-319.574c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h319.574v194.118c0 9.441-7.681 17.122-17.122 17.122h-50.063c-17.712 0-32.122 14.41-32.122 32.121v50.064c0 9.441-7.681 17.122-17.121 17.122h-291.769c-12.434 0-22.55-10.116-22.55-22.551v-287.996h81.173c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-81.174v-69.63c0-12.434 10.116-22.55 22.55-22.55h32.066v22.052c0 12.576 10.231 22.807 22.807 22.807 4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.305 0-7.807-3.502-7.807-7.807v-22.052h257.458v22.052c0 12.576 10.231 22.807 22.807 22.807 4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.305 0-7.807-3.502-7.807-7.807v-22.052h66.124c12.434 0 22.55 10.116 22.55 22.55zm-350.391 137.773h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm66.559-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm101.907 220.546c-.186-3.977-3.469-7.143-7.492-7.143-4.142 0-7.5 3.358-7.5 7.5 0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v10.3c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.943h35v35zm-102.264-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-.357 142.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35z"/>
                                            </g>
                                        </svg>
                                        21/08/2021
                                    </div>
                                    <div v-html="newsItem.short.substring(0,550)"
                                         style="  overflow: hidden; text-overflow: ellipsis; height:200px"></div>

                                    <router-link :to="`news/`+newsItem.slug" class="read_more">Батафсил</router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true">
                                                        <img src="/img/icons/right-arrow.svg">
                                                    </span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true">
                                                        <img src="/img/icons/right-arrow.svg">
                                                    </span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>

    </div>
</div>
</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: "NewsInHomepage",
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
                this.news = response.data.map(function (i) {
                    i.title = i.title.substr(0, 100) + '  ...';
                    return i;
                });
            }).catch((error) => {
                this.$store.dispatch('setSnackbar', {
                    color: 'error',
                    text: 'Маълумотларни юклашда хатолик содир бўлди!'
                });
                console.log(error)
            })
            api.readCategories(8).then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                this.$store.dispatch('setSnackbar', {
                    color: 'error',
                    text: 'Маълумотларни юклашда хатолик содир бўлди!'
                });
            })

        }
    }
}
</script>
