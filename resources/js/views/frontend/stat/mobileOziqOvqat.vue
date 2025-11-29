<template>
    <div class="slide_oziqovqat" v-if="collectionItems.length">
        <VueSlickCarousel
            v-bind="settings" style="gap: 10px; display: flex;"
        >
            <div class="slide_item" v-for="item in collectionItems">
                <div class="slide_item_wrapper">
                    <div class="slide_item_sub_wrapper">
                        <div class="product_header">
                            <div class="text-center" ><span>{{ item['name'+$i18n.locale] }}</span></div>
                            <v-icon color="primary" :size="iconSize" class="my-2">{{ icons[item.kod] }}</v-icon>
                        </div>
                        <div class="slide_item_total_difference">
                            <div v-html="moneyFormat(parseFloat(item.column1))" class="currentyearprice">
                            </div>
                            <span class="difference-percent">
                              <v-icon color="primary" v-if="(parseFloat(item.column1) - parseFloat(item.column2))>0">mdi-trending-up</v-icon>
                              <v-icon color="red" v-else>mdi-trending-down</v-icon>
                            <p>{{ (((parseFloat(item.column1) - parseFloat(item.column2)) * 100)/parseFloat(item.column2)).toFixed(1) }} % </p>
                            <p>{{ $t('ўтган йилга нисбатан') }}</p>
                        </span>
                        </div>
                        <div class="downloadExcel" @click="openExcel(item.kod, year, month, toMonth)"><v-btn icon  text :loading="findElementInlist(loading,item.kod,'category').bool"><v-icon :size="downloadIconSize" >mdi-download</v-icon> </v-btn></div>
                    </div>
                </div>
            </div>
            <template #prevArrow="arrowOption">
                <div class="custom-arrow left-arrow">
                    <v-icon :x-large="!isMobile" :large="isMobile" :color="arrowOption.currentSlide  > 0 ? 'primary': 'default'">mdi-chevron-left
                    </v-icon>
                </div>
            </template>
            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                    <v-icon :x-large="!isMobile" :large="isMobile"
                            :color="arrowOption.currentSlide  <  arrowOption.slideCount - (isMobile ? 1 : 4) ? 'primary': 'default'">
                        mdi-chevron-right
                    </v-icon>
                </div>
            </template>
        </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CountryFlag from 'vue-country-flag'
export default {
    name: "oziqOvqat",
    components: {VueSlickCarousel},
    props: {
        regime: {
            type: [Number]
        },
        year: {
            type: [Number]
        },
        month: {
            type: [Number]
        },
        toMonth: {
            type: [Number]
        }
    },
    data() {
        return {
            loading:[],
            windowWidth: window.innerWidth,
            icons:{
                '01': 'mdi-food-steak',
                '02': 'mdi-fish',
                '03': 'mdi-egg',
                '04': 'mdi-fruit-cherries',
                '05': 'mdi-coffee',
                '06': 'mdi-grain',
                '07': 'mdi-bread-slice-outline',
                '08': 'mdi-barley',
                '09': 'mdi-seed',
                '10': 'mdi-water',
                '11': 'mdi-soy-sauce',
                '12': 'mdi-tree',
                '13': 'mdi-spoon-sugar',
                '14': 'mdi-scanner',
                '15': 'mdi-cup',
                '16': 'mdi-beer-outline',
                '17': 'mdi-glass-wine',
                '18': 'mdi-tree-outline',
                '19': 'mdi-smoking',
                '20': 'mdi-oil',
                '21': 'mdi-basket-fill',
                '22': 'mdi-chemical-weapon',
                '23': 'mdi-layers-outline',
                '24': 'mdi-bag-personal',
                '25': 'mdi-table-chair',
                '26': 'mdi-file-outline',
                '27': 'mdi-tshirt-crew',
                '28': 'mdi-coffee-outline',
                '29': 'mdi-hammer-screwdriver',
                '30': 'mdi-lightning-bolt',
                '31': 'mdi-train-car'
            },
            settings: {
                "dots": true,
                "arrows": true,
                "fade": false,
                "rtl": false,
                "infinite": false,
                "speed": 500,
                "rows": 2,
                "slidesPerRow": 6,
                "slidesToShow": 12,
                "slidesToScroll": 2,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1400,
                        "settings": {
                            "rows": 2,
                            "slidesPerRow": 4,
                            "slidesToShow": 8,
                            "slidesToScroll": 2,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "rows": 2,
                            "slidesPerRow": 3,
                            "slidesToShow": 6,
                            "slidesToScroll": 1,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 768,
                        "settings": {
                            "rows": 2,
                            "slidesPerRow": 2,
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "rows": 1,
                            "slidesPerRow": 1,
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "rows": 1,
                            "slidesPerRow": 1,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "dots": true
                        }
                    }
                ]
            },
            items: [],
        }
    },
    created() {
        this.run()
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        async regime(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        },
        async year(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        },
        async month(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        },
        async toMonth(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        forceFileDownload(response, title) {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
            link.remove()
        },
        async downloadWithAxios(url, title) {
            await axios({
                method: 'get',
                url,
                responseType: 'blob',
            })
                .then((response) => {
                    this.forceFileDownload(response, title)
                })
                .catch(() => console.log('error occured'))
        },
        async openExcel(category){
            this.findElementInlist(this.loading,category,'category').bool = true
            await this.downloadWithAxios('https://customs.uz/api/v1/statdata/' + category + '/' + this.year + '/' + this.month + '/' + this.computedToMonth, 'products.xlsx')
            this.findElementInlist(this.loading,category,'category').bool = false
        },
        async run() {
            await axios.get('https://customs.uz/api/v1/stat', {
                params: {
                    name: 'istemolimex_n',
                    rejim: this.regime,
                    month: this.month ? this.month : 0,
                    toMonth: this.toMonth ? this.toMonth : 0,
                    year: this.year ? this.year : 0
                }
            }).then(res => {
                this.items = JSON.parse(JSON.stringify(res.data.data))
                this.items.forEach(item=>{
                    this.loading.push({ category:item.kod, bool: false })
                })
            })
        },
        moneyFormat(price) {
            if ((price / 10000000000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000000000).toFixed(1) + '</span> ' + this.$t('трл') + '. $';
            else if ((price / 10000000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000000).toFixed(1) + '</span> ' + this.$t('млрд') + '. $';
            if ((price / 1000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000).toFixed(1) + '</span> ' + this.$t('млн') + '. $'; else
                return '<span>' + parseFloat(price).toFixed(1) + '</span> ' + this.$t('минг') + ' $'
        },
        findElementInlist (list = [], search, searchKey = 'id', type = 'single') {
            if (typeof list !== 'object') return null
            const element = list.filter((valueItem, keyItem) => {
                if (search === valueItem[searchKey]) return valueItem
            })
            if (type === 'single') {
                if (element && typeof element[0] !== 'undefined') return element[0]
            } else return element
        },
    },
    computed: {
        collectionItems(){
            return JSON.parse(JSON.stringify(this.items))
        },
        computedToMonth(){
            if(!this.toMonth) return 0;
            return this.toMonth
        },
        isMobile() {
            return this.windowWidth < 768;
        },
        isTablet() {
            return this.windowWidth >= 768 && this.windowWidth < 1024;
        },
        iconSize() {
            if (this.windowWidth < 480) return 60;
            if (this.windowWidth < 768) return 70;
            if (this.windowWidth < 1024) return 80;
            return 100;
        },
        downloadIconSize() {
            if (this.windowWidth < 480) return 35;
            if (this.windowWidth < 768) return 40;
            return 50;
        }
    }
}
</script>
<style scoped lang="scss">
.v-picker.v-card.v-picker--date {
    margin: 0;
}
.currentyearprice{
    font-size: 12px;
    margin-top: 20px;
    margin-right: 0;
    min-width: 80px;

    @media (max-width: 768px) {
        font-size: 10px;
        min-width: 60px;
        margin-top: 10px;
    }

    @media (max-width: 480px) {
        font-size: 9px;
        min-width: 50px;
    }
}
.difference-percent{
    p {
        &:nth-of-type(1){
            font-size: 14px;

            @media (max-width: 768px) {
                font-size: 12px;
            }

            @media (max-width: 480px) {
                font-size: 10px;
            }
        }
        &:nth-of-type(2){
            @media (max-width: 768px) {
                font-size: 9px;
            }

            @media (max-width: 480px) {
                font-size: 8px;
            }
        }
    }
}
.slide_oziqovqat {
    margin-top: 20px;
    padding: 0 10px;

    @media (max-width: 768px) {
        margin-top: 15px;
        padding: 0 5px;
    }

    .statfilterRow {
        display: flex;
        justify-content: end;
        margin-bottom: 20px;
        margin-right: 15px;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            justify-content: center;
            margin-right: 0;
            margin-bottom: 15px;
        }

        .regimeButtons {
            margin-right: 30px;
            font-weight: bold;

            @media (max-width: 768px) {
                margin-right: 15px;
                margin-bottom: 10px;
            }
        }
        .date_rangers {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            @media (max-width: 768px) {
                justify-content: center;
            }

            .begin_date {
                margin-right: 5px;
                box-shadow: 0 3px 8px 2px #C9D9E8;
                border-radius: 6px;
                padding: 5px 10px;
                background-color: #F1F5F9;
                color: #39ae69;

                @media (max-width: 480px) {
                    padding: 3px 8px;
                    font-size: 14px;
                }

                i {
                    border-left: 1px dashed #ccc;
                    margin-left: 5px;
                    padding-left: 7px;
                }
            }
            .end_date {
                box-shadow: 0 3px 8px 2px #C9D9E8;
                border-radius: 6px;
                padding: 2px 10px;
                background-color: #F1F5F9;
                color: #39ae69;
                font-size: 17px;
                margin-left: 10px;

                @media (max-width: 480px) {
                    padding: 2px 8px;
                    font-size: 14px;
                    margin-left: 5px;
                }

                i {
                    border-left: 1px dashed #ccc;
                    margin-left: 5px;
                    padding-left: 7px;
                }
            }
        }
    }
}
.custom-arrow {
    .v-icon {
        right: 25px;
        font-size: 70px !important;

        @media (max-width: 768px) {
            font-size: 50px !important;
            right: 10px;
        }

        @media (max-width: 480px) {
            font-size: 40px !important;
            right: 5px;
        }
    }
    &.left-arrow i {
        left: -25px;
        right: initial;

        @media (max-width: 768px) {
            left: -10px;
        }

        @media (max-width: 480px) {
            left: -5px;
        }
    }
}
.slide_item {
    .slide_item_wrapper {
        margin: 10px;
        border-radius: 5px;

        @media (max-width: 768px) {
            margin: 5px;
        }

        @media (max-width: 480px) {
            margin: 3px;
        }

        .slide_item_sub_wrapper:hover .downloadExcel{
            opacity: 1;
        }
        .downloadExcel {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #39ae697a;
            bottom: 0;
            text-align: center;
            padding-top: 45%;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #000;
            opacity: 0;
            font-weight: bold;
            transition: all 0.8s;
            cursor: pointer;

            @media (max-width: 768px) {
                padding-top: 40%;
            }

            @media (max-width: 480px) {
                padding-top: 35%;
            }

            button.v-btn {
                padding: 20px;
                background-color: #fff;
                border-radius: 67px;
                height: auto !important;
                width: auto !important;

                @media (max-width: 768px) {
                    padding: 15px;
                }

                @media (max-width: 480px) {
                    padding: 10px;
                }

                i.v-icon {
                    font-size: 50px;
                    color: #39ae69;

                    @media (max-width: 768px) {
                        font-size: 40px;
                    }

                    @media (max-width: 480px) {
                        font-size: 35px;
                    }
                }
            }
        }
        .slide_item_sub_wrapper {
            box-shadow: 0 0 11px 2px #d8d8d8;
            padding: 10px 0;
            border-radius: 5px;
            position: relative;

            @media (max-width: 768px) {
                padding: 8px 0;
            }

            @media (max-width: 480px) {
                padding: 5px 0;
            }

            .product_header {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 95%;
                margin: 0 auto;
                margin-bottom: -15px;

                @media (max-width: 768px) {
                    margin-bottom: -10px;
                }

                @media (max-width: 480px) {
                    margin-bottom: -5px;
                }

                >div {
                    min-height: 50px;
                    color: var(--mycolor);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media (max-width: 768px) {
                        min-height: 40px;
                        font-size: 14px;
                    }

                    @media (max-width: 480px) {
                        min-height: 35px;
                        font-size: 12px;
                    }
                }
            }
        }
        .slide_item_title {
            font-size: 20px;
            text-align: center;
            margin: 15px auto;
            font-weight: 600;

            @media (max-width: 768px) {
                font-size: 16px;
                margin: 10px auto;
            }

            @media (max-width: 480px) {
                font-size: 14px;
                margin: 8px auto;
            }
        }
        h4 {
            text-align: center;
            color: #39ae69;
            margin: 10px auto;
            padding-top: 10px;

            @media (max-width: 768px) {
                font-size: 16px;
                margin: 8px auto;
                padding-top: 8px;
            }

            @media (max-width: 480px) {
                font-size: 14px;
                margin: 5px auto;
                padding-top: 5px;
            }
        }
        .slide_item_total_price {
            text-align: center;
            font-size: 20px;
            padding: 25px 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: baseline;
            color: #777;

            @media (max-width: 768px) {
                font-size: 16px;
                padding: 15px 0;
            }

            @media (max-width: 480px) {
                font-size: 14px;
                padding: 10px 0;
            }

            span {
                font-size: 25px;
                font-weight: 600;
                margin-right: 6px;
                color: #000;
                letter-spacing: 1px;

                @media (max-width: 768px) {
                    font-size: 20px;
                }

                @media (max-width: 480px) {
                    font-size: 16px;
                }
            }
        }
        img {
            max-width: 50px;
            margin: 0 auto;

            @media (max-width: 768px) {
                max-width: 40px;
            }

            @media (max-width: 480px) {
                max-width: 30px;
            }
        }
        .slide_item_total_difference {
            display: flex;
            padding: 0 10px;
            position: relative;
            justify-content: space-around;
            min-height: 81px;
            align-items: center;

            @media (max-width: 768px) {
                min-height: 70px;
                padding: 0 5px;
            }

            @media (max-width: 480px) {
                min-height: 60px;
                padding: 0 3px;
                flex-direction: column;
                gap: 5px;
            }

            span {
                text-align: center;
                &:nth-of-type(1) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 16px;
                            line-height: 20px;

                            @media (max-width: 768px) {
                                font-size: 14px;
                                line-height: 18px;
                            }

                            @media (max-width: 480px) {
                                font-size: 12px;
                                line-height: 16px;
                            }
                        }
                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-green);
                            margin: 0 auto;

                            @media (max-width: 480px) {
                                font-size: 9px;
                            }
                        }
                    }
                }
                &:nth-of-type(2) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 20px;
                            line-height: 30px;

                            @media (max-width: 768px) {
                                font-size: 16px;
                                line-height: 24px;
                            }

                            @media (max-width: 480px) {
                                font-size: 14px;
                                line-height: 20px;
                            }
                        }
                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-cyan);
                            margin: 0 auto;

                            @media (max-width: 480px) {
                                font-size: 9px;
                            }
                        }
                    }
                }
            }
        }
        .slide_item_cats {
            .slide_item_cat_tem {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 20px;

                @media (max-width: 768px) {
                    padding: 5px 10px;
                }

                @media (max-width: 480px) {
                    padding: 3px 5px;
                }

                span {
                    &:nth-of-type(1) {
                        width: 70%;
                    }
                    &:nth-of-type(2) {
                        width: 30%;
                        display: block;
                        text-align: center;
                        line-height: 10px;
                        padding-top: 5px;
                        p {
                            &:nth-of-type(1) {
                                font-weight: bold;
                                font-size: 15px;

                                @media (max-width: 768px) {
                                    font-size: 13px;
                                }

                                @media (max-width: 480px) {
                                    font-size: 11px;
                                }
                            }
                            &:nth-of-type(2) {
                                font-size: 9px;

                                @media (max-width: 480px) {
                                    font-size: 8px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss">
.slick-slide.slick-active.slick-current {
    z-index: 35;
}
.slick-arrow.slick-prev:before, .slick-arrow.slick-next:before {
    display: none;
}
.currentyearprice span{
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
}
.slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: -45px;

    @media (max-width: 768px) {
        bottom: -35px;
    }

    @media (max-width: 480px) {
        bottom: -30px;
    }

    li {
        position: relative;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        display: flex;
        height: min-content;
        width: max-content;
        justify-content: center;
        align-items: center;

        @media (max-width: 480px) {
            margin: 0 3px;
        }

        button {
            width: 30px;

            @media (max-width: 768px) {
                width: 25px;
            }

            @media (max-width: 480px) {
                width: 20px;
            }

            &:before {
                content: "";
                height: 4px;
                background-color: #39ae69;
                border-radius: 10px;

                @media (max-width: 480px) {
                    height: 3px;
                }
            }
        }
        &.slick-active button {
            width: 40px !important;

            @media (max-width: 768px) {
                width: 35px !important;
            }

            @media (max-width: 480px) {
                width: 30px !important;
            }

            &:before {
                width: 30px !important;

                @media (max-width: 768px) {
                    width: 25px !important;
                }

                @media (max-width: 480px) {
                    width: 20px !important;
                }
            }
        }
    }
}
.slide_item_total_price span {
    font-size: 25px;
    font-weight: 600;
    margin-right: 6px;
    color: #000;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
}
</style>