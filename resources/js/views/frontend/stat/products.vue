<template>
    <div class="slide_products" v-if="items.length">
        <VueSlickCarousel
            v-bind="settings"
        >
            <div class="slide_item" v-for="item in items" v-if="item.titleen">
                <div class="slide_item_wrapper">
                    <div class="slide_item_sub_wrapper">
                        <img v-if="1===2" src="/img/icons/2279036.png"/>
                        <div class="slide_item_title">{{ $t(item['title' + $i18n.locale]) }}</div>
                        <div class="slide_item_total_price" v-if="(item.total / 10000000000).toFixed(1) !== '0.0'"><span>{{
                                (item.total / 1000000000).toFixed(1)
                            }}</span> {{ $t('трл') }}. $
                        </div>
                        <div class="slide_item_total_price" v-else-if="parseFloat((item.total / 10000000).toFixed(1)) >1">
                            <span>{{ (item.total / 1000000).toFixed(1) }}</span> {{ $t('млрд') }}. $
                        </div>
                        <div class="slide_item_total_price" v-else-if="(item.total / 10000).toFixed(1) !== '0.0'"><span>{{
                                (item.total / 1000).toFixed(1)
                            }}</span> {{ $t('млн') }}. $
                        </div>
                        <div class="slide_item_total_price" v-else><span>{{ item.total.toFixed(1) }}</span>{{
                                $t('минг')
                            }} $
                        </div>
                        <div class="slide_item_total_difference">
                <span>
                    <v-icon v-if="(item.result1 - item.result2) > 0" color="primary" large>mdi-trending-up</v-icon>
                    <v-icon v-else color="red" large>mdi-trending-down</v-icon>
                    <p v-if="item.result1 && item.result2">{{ (((item.result1 - item.result2) * 100)/item.result2).toFixed(1) }} %</p>
                    <p>{{ $t('ўтган йилга нисбатан') }}</p>
                </span>
                            <span>
                    <v-icon color="cyan" large>mdi-check</v-icon>
                    <p>{{ ((item.total * 100) / (items.map(el => { return (el.result1); }).reduce((x, y) => { return x + y },0))).toFixed(1) }} %</p>
                    <p>{{ $t('жамига  нисбатан') }}</p>
                </span>
                        </div>
                        <h4>{{ $t('Асосий товарлар') }}</h4>
                        <div class="slide_item_cats">
                            <div class="slide_item_cat_tem" v-for="catItem in item.cats.filter((item,itemKey)=> itemKey < 4)">
                                <span>{{ $t(catItem['title'+ $i18n.locale]) }}</span>
                                <div class="catItemPrice" v-html="moneyFormat(catItem.price)"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <template #prevArrow="arrowOption">
                <div class="custom-arrow left-arrow">
                    <v-icon x-large :color="arrowOption.currentSlide  > 0 ? 'primary': 'default'">mdi-chevron-left
                    </v-icon>
                </div>
            </template>
            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                    <v-icon x-large
                            :color="arrowOption.currentSlide  <  arrowOption.slideCount - 4 ? 'primary': 'default'">
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

export default {
    name: "statProducts",
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

    components: {VueSlickCarousel},
    data() {
        return {
            settings: {
                "dots": true,
                arrows: true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
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
        async run() {
            await axios.get('/api/v1/stat', {
                params: {
                    name: 'tovarimex_n',
                    rejim: this.regime,
                    month: this.month ? this.month : 0,
                    toMonth: this.toMonth ? this.toMonth : 0,
                    year: this.year ? this.year : 0
                }
            }).then(res => {
                this.items = res.data.data
            })
        },
      moneyFormat(price) {
        if ((price / 10000000000).toFixed(1) !== '0.0')
          return '<span>' + (price / 1000000000).toFixed(1) + '</span> ' + this.$t('трл') + '. $';
        else if (((price / 10000000).toFixed(1)) !== '0.0')
          return '<span>' + (price / 1000000).toFixed(1) + '</span> ' + this.$t('млрд') + '. $';
        if ((price / 10000).toFixed(1) !== '0.0')
          return '<span>' + (price / 1000).toFixed(1) + '</span> ' + this.$t('млн') + '. $'; else
          return '<span>' + parseFloat(price).toFixed(1) + '</span> ' + this.$t('минг') + ' $'
      }
    }
}
</script>

<style scoped lang="scss">
.v-picker.v-card.v-picker--date {
    margin: 0;
}

.slide_products {
    margin-top: 20px;


}

.custom-arrow {
    .v-icon {
        right: 25px;
        font-size: 70px !important;
    }

    &.left-arrow i {
        left: -25px;
        right: initial;
    }

}

.slide_item {

    .slide_item_wrapper {
        margin: 0 10px;
        padding: 5px;
        border: 1px solid #1372aa4a;
        border-radius: 5px;

        .slide_item_sub_wrapper {
            box-shadow: 0 0 11px 2px #d8d8d8;
            padding: 10px 0;
            border-radius: 5px;
        }

        .slide_item_title {
            font-size: 20px;
            text-align: center;
            margin: 15px auto;
            font-weight: 600;
            min-height: 60px;
            max-width: 90%;
        }

        h4 {
            text-align: center;
            color: #39ae69;
            margin: 10px auto;
            padding-top: 10px;
        }

        .slide_item_total_price {
            text-align: center;
            font-size: 12px;
            padding-top: 20px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: baseline;
            color: #777;

            span {
                font-size: 25px;
                font-weight: 600;
                margin-right: 6px;
                color: #000;
                letter-spacing: 1px;
            }

            &::before {
                content: ". . . . . . . . . . . . . . ";
                width: 80%;
                margin: 0 auto;
                /* border-top: 1px dotted #ccc; */
                height: 1px;
                display: inline-block;
                letter-spacing: 1.8px;
                position: absolute;
                top: -10px;
                left: 10%;
                color: #00af65;
                font-size: 15px;
            }
        }

        img {
            max-width: 50px;
            margin: 0 auto;
        }

        .slide_item_total_difference {
            display: flex;
            padding: 10px;
            position: relative;
            margin-bottom: 15px;
            justify-content: center;

            span {
                text-align: center;

                &:nth-of-type(1) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 20px;
                            line-height: 30px;
                        }

                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-green);
                            width: 70%;
                            margin: 0 auto;
                        }
                    }
                }

                &:nth-of-type(2) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 20px;
                            line-height: 30px;
                        }

                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-cyan);
                            width: 70%;
                            margin: 0 auto;
                        }
                    }
                }
            }

            &:after {
                content: ". . . . . . . . . . . . . . ";
                display: block;
                width: 90%;
                font-size: 15px;
                height: 1px;
                position: absolute;
                bottom: 5px;
                letter-spacing: 1.8px;
                left: 18%;
                color: #39ae69;
                font-weight: 400;
            }
        }

        .slide_item_cats {
            min-height: 230px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            .slide_item_cat_tem {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 20px;

                span {
                    &:nth-of-type(1) {
                        width: 70%;
                    }


                }
                .catItemPrice {
                    width: 30%;
                    display: block;
                    text-align: center;
                    line-height: 10px;
                    padding-top: 5px;
                    font-size: 9px;
                    span {
                        font-weight: bold;
                        font-size: 15px;
                    }
                }
            }
        }
    }
}

</style>
<style lang="scss">
.slick-arrow.slick-prev:before, .slick-arrow.slick-next:before {
    display: none;
}
.catItemPrice span{
    font-weight: bold;
    font-size: 15px;
    margin-right: 5px;
}
.slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: -45px;

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

        button {
            width: 30px;

            &:before {
                content: "";
                height: 4px;
                background-color: #39ae69;
                border-radius: 10px;
            }
        }

        &.slick-active button {
            width: 40px !important;

            &:before {
                width: 30px !important;
            }
        }
    }
}

</style>
