<template>
    <div class="position-sidebar">
        <v-dialog v-model="searchDialog1" max-width="800">
            <v-card class="px-4">
                <v-col cols="12">
                    <v-autocomplete
                        color="primary" hide-details hide-no-data
                        v-model="searchText"
                        placeholder="Қидириш учун ёзинг"
                        :items="searchResults"
                        :loading="isLoading"
                        :search-input.sync="search"
                        item-value="slug"
                        item-text="title"
                        :filter="customFilter"
                        autofocus
                    >
                        <template v-slot:append-outer>
                            <v-icon color="primary" size="35">mdi-magnify</v-icon>
                        </template>
                        <template v-slot:item="data">
                            <div @click="openItem(data.item.slug)">{{ data.item.title }}</div>
                        </template>
                    </v-autocomplete>
                    <a @click="openSpreadedSearch">{{ $t('Кенгайтирилган қидирув') }}</a>
                </v-col>
            </v-card>
            <template v-slot:activator="{ on, attrs }">
                <div class="sidebar-items"
                     v-bind="attrs"
                     v-on="on"
                     v-on:click="opensearchDialog1"
                >
                    <v-icon size="30" color="#fff">mdi-magnify</v-icon>
                </div>
            </template>
        </v-dialog>

        <div class="sidebar-items">
            <div class="phone-number">
                <div>
                    <a href="tel:1108">1108</a>
                    <v-dialog v-model="baholashDialog" max-width="800">
                        <v-card class="px-4">
                            <v-col cols="12">
                                <h4 style="text-align: center">
                                    {{ $t('Ишонч телефонини баҳолаш статистикаси') }}
                                </h4>
                                <v-row class="mt-6">
                                    <v-col cols="2">
                                        <v-autocomplete
                                            :items="[
                                            {text: 2022,value: 2022},
                                            {text: 2023,value: 2023}
                                        ]"
                                            v-model="year"
                                        >
                                    </v-autocomplete>
                                    </v-col><v-col cols="2">
                                        <v-autocomplete
                                            :items=months
                                            v-model="month"
                                            clearable
                                        >
                                    </v-autocomplete>
                                    </v-col>
                                </v-row>
                                <template v-if="!showResults">
                                    <v-radio-group
                                        v-model="votes[key].selected"
                                        dense
                                    >
                                        <v-radio v-for="(answerItem,key) in voteItem.answers"
                                                 :label="answerItem.text"
                                                 :value="answerItem.value"
                                                 :key="key"
                                        ></v-radio>
                                    </v-radio-group>
                                    <div class="text-center flex-direction-nav d-flex">
                                        <v-btn class="ma-2" color="primary" small
                                               @click="answer(key,votes[key].selected)">
                                            {{ $t("Жавоб бериш") }}
                                        </v-btn>
                                        <v-btn
                                            class="ma-2"
                                            color="primary"
                                            small
                                            @click="getResult(votes[key].id)"
                                        >
                                            {{ $t("Натижалар") }}
                                        </v-btn>
                                    </div>
                                </template>
                                <template v-else>
                                    <template v-for="(resultItem,rkey) in votes">
                                        <div class="my-5"
                                             :data="(votes[rkey].count / votes[rkey].total * 100)">
                                            <p>{{ votes[rkey].text }}
                                                <v-btn x-small color="#4e4646">
                                                    {{ resultItem.count ? resultItem.count : 0 }}
                                                </v-btn>
                                            </p>
                                            <v-progress-linear
                                                :value="(votes[rkey]['count'] / votes[rkey].total * 100)"
                                                :color="colors[(rkey % colors.length)]"
                                                striped
                                                rounded
                                                height="20" class="my-3 white--text font-weight-bold" :key="rkey"


                                            >
                                                <template v-slot:default="{ value }">
                                                    <strong>{{ Math.ceil(value) }}%</strong>
                                                </template>
                                            </v-progress-linear>
                                        </div>
                                    </template>

                                    <p style="border-top: 1px solid #cccccc4d; padding-top: 15px; margin-top: 25px;" v-if="votes.length">
                                        {{ $t("Барчаси") }}
                                        <v-btn x-small color="#4e4646" v-if="votes[0]">{{ votes[0].total }}</v-btn>
                                    </p>
                                    <hr>
                                    <p v-if="votes.length < 1" class="text-center">{{$t('Маълумот топилмади')}}</p>
                                    <div class="text-center flex-direction-nav d-none mt-10">
                                        <v-btn class="ma-2" color="primary" small
                                               @click="showResults = false">
                                            {{ $t("Баҳолаш") }}
                                        </v-btn>
                                    </div>
                                </template>


                            </v-col>

                        </v-card>
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                            >{{$t('Статистика')}}</span>

                        </template>
                    </v-dialog>

                </div>
            </div>
            <v-icon size="30" color="#fff" style="transform: rotate(265px)">mdi-phone</v-icon>
        </div>
        <v-list v-click-outside="clickOutside" class="sidebar-items specific" :class="specific?'active':''"
                :style="specific?'margin-right:-153px':'margin-right:154px'">
            <div class="specific-fields">
                <p>{{ $t('Кўриниш') }}</p>
                <div class="grayscale d-flex mt-1">

                    <v-icon dark size="34" class="eye" :class="grayscale?'active':''" @click="selectGrayscale(true)">
                        mdi-circle-half-full
                    </v-icon>

                    <v-icon dark size="34" class="eye" :class="!grayscale?'active':''" color=""
                            @click="selectGrayscale(false)">
                        mdi-circle-slice-8
                    </v-icon>

                </div>
                <v-spacer></v-spacer>
                <div class="mt-2">
                    <p class="mt-5">{{ $t('Шрифт ўлчами') }}</p>
                    <v-slider
                        class="cursor-pointer w-75"
                        hide-details
                        max="3"
                        :tick-labels="ticksLabels"
                        track-color="#fff"
                        track-fill-color="#fff"
                        thumb-color="#fff"
                        min="1"
                        label=""
                        v-model="shrift"
                    ></v-slider>
                </div>
                <v-spacer></v-spacer>
                <div class="mt-2">
                    <p class="mt-5 mb-0">{{ $t('Экран диктори') }}</p>
                    <v-switch v-model="diktor" color="black"/>
                </div>
                <div class="my-2">
                    <a class="text-decoration-underline white--text" @click="refreshSpecific">{{ $t('Тозалаш') }}</a>
                </div>
            </div>
            <v-icon size="30" color="#fff" @click="clickedSpecific" class="m-0 eye">
                mdi-eye-outline
            </v-icon>
        </v-list>
        <div class="sidebar-items"
             v-on:click="popupWindow('', '', 447, 600)"
        >
            <v-icon size="30" class="mr-0" color="#fff" style="margin-right: 0px !important;">mdi-cellphone</v-icon>
        </div>
        <div v-show="diktor" style="position: fixed; bottom: 65px; right: 10px;">
            <v-btn @click="startVoice" color="primary" fab>
                <v-icon color="white">mdi-volume-high</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import api from "../../src/services/apiService";

export default {
    name: "position-sidebar",
    data() {
        return {
            ticksLabels: [
                '-',
                '0',
                '+',
            ],
            diktor: false,
            year: (new Date()).getFullYear(),
            month: (new Date()).getMonth() + 1,
            months: [
                { value: 1, text: "Январ"},
                { value: 2, text: "Феврал"},
                { value: 3, text: "Март"},
                { value: 4, text: "Апрел"},
                { value: 5, text: "Май"},
                { value: 6, text: "Июн"},
                { value: 7, text: "Июл"},
                { value: 8, text: "Август"},
                { value: 9, text: "Сентябр"},
                { value: 10, text: "Октябр"},
                { value: 11, text: "Ноябр"},
                { value: 12, text: "Декабр"},
            ],
            masshtab: 1,
            shrift: 2,
            grayscale: false,
            searchDialog1: false,
            baholashDialog: false,
            searchText: "",
            searchResults: [],
            isLoading: false,
            search: null,
            votes: [],
            showResults: true,
            displayResults: [],
            specific: false,
            clickedEye: true,
            colors: [
                "light-blue",
                "light-green darken-4",
                "lime",
                "deep-orange",
            ]

        }
    },
    methods: {
        openSpreadedSearch(){
          this.searchDialog1=false;
          this.$router.push('/page/search')
        },
        popupWindow(url, title, w, h) {
            console.log(window)
            console.log(document)
            if (url.length === 0) {
                url = this.$route.path;
            }
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            return window.open(url, title, 'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        },
        refreshSpecific() {
            this.grayscale = false;
            this.shrift = 2;
            $("html").removeClass("blackAndWhite")
            $("html").removeClass("maxSize");
            $("html").removeClass("minSize");

        },
        clickedSpecific() {

            if (this.specific) {
                this.specific = false
                $(".sidebar-items.specific").removeClass("active");
                $(".sidebar-items.specific").css("margin-right", "154px");
            } else {
                $(".sidebar-items.specific").addClass("active");
                $(".sidebar-items.specific").css("margin-right", "-153px");
                this.specific = true
            }
        },
        clickOutside() {
            if (this.specific) this.specific = false;
        },
        getResult(id) {
            this.showResults = true;
            //if(this.displayResults.contain(id))
            //this.displayResults.push(id)
        },
        getQuestions() {
            const _app = this;
            api.readVotesForFront().then(function (response) {
                _app.votes = response.data.data;
            });
        },
        getPhoneQuestions(){
            const _app = this;
            axios.get('/api/v1/phoneVotes',{params: {
                month: this.month,
                year: this.year
                }}).then(function (response) {
                _app.votes = response.data.data;
            });
        },
        answer(key, answer) {
            if (!answer) return;
            const _app = this;
            if(_app.displayResults.includes(key)) {
                _app.$toast.warning(_app.$t('Сиз аллақачон овоз бергансиз!'))
                return
            }
            axios.post("/api/v1/votescount/" + _app.votes[key].id, {answer: answer, _method: 'put'}).then(function (response) {

                if (response.data.success === true) {
                    _app.showResults  = true
                    _app.getQuestions();
                    if (_app.votes[key]) _app.votes[key].selected =true
                    _app.displayResults.push(key);
                    _app.$cookie.set('votes', JSON.stringify(_app.displayResults), 1);
                }
            });


        },
        initialize() {
            let votes = this.$cookie.get('votes') ? JSON.parse(this.$cookie.get('votes')) : null;
            if (votes) {
                this.displayResults = votes;
            }
        },
        customFilter(item, queryText, itemText) {
            const textOne = item.title.toLowerCase()
            const textTwo = item.description.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1 ||
                textTwo.indexOf(searchText) > -1
        },
        opensearchDialog1() {

            this.searchDialog1 = true;
        },
        openItem(slug) {
            this.searchDialog1 = false;
            this.$router.replace("/news/" + slug)
        },
        selectGrayscale(val) {
            if (val) {
                this.grayscale = true;
                $("html").addClass("blackAndWhite")
            } else {
                this.grayscale = false;
                $("html").removeClass("blackAndWhite")
            }
        },
        startVoice() {
            const _this = this


                setTimeout(function () { // When clicking on a highlighted area, the value stays highlighted until after the mouseup event, and would therefore stil be captured by getSelection. This micro-timeout solves the issue.
                    responsiveVoice.cancel(); // stop anything currently being spoken
                    responsiveVoice.speak(getSelectionText()); //speak the text as returned by getSelectionText
                }, 1);


            function getSelectionText() {
                var text = "";
                if (window.getSelection) {
                    text = window.getSelection().toString();
                    // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
                } else if (document.selection && document.selection.type !== "Control") {
                    text = document.selection.createRange().text;
                }
                return text;
            }
        }


    },
    watch: {
        year(val) {
            this.getPhoneQuestions()
        },
        month(val) {
            this.getPhoneQuestions()
        },
        search(val) {
            // Items have already been loaded
            this.isLoading = true

            // Lazily load input items
            axios.post('/api/v1/news/search', {text: val})
                .then(res => {
                    this.searchResults = res.data
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (this.isLoading = false))
        },
        baholashDialog(val) {
            if (!val) return;
            this.initialize()
            this.getPhoneQuestions()

        },
        shrift(val) {
            if (val === 1) {
                $("html").removeClass("maxSize");
                $("html").addClass("minSize");
            }
            if (val === 2) {
                $("html").removeClass("maxSize");
                $("html").removeClass("minSize");
            }
            if (val === 3) {
                $("html").removeClass("minSize");
                $("html").addClass("maxSize");
            }
        },
        masshtab(val) {
            if (val === 1) {
                $('body').css({
                    // 'zoom': '1.' + parseInt(size),
                    // '-ms-zoom': '1.' + parseInt(size),
                    // '-webkit-zoom': '1.' + parseInt(size),
                    // '-moz-zoom': '1.' + parseInt(size),
                    // '-o-zoom': '1.' + parseInt(size),
                    '-webkit-transform': 'scale(1.' + 0 + ')',
                    '-moz-transform': 'scale(1.' + 0 + ')',
                    '-ms-transform': 'scale(1.' + 0 + ')',
                    'transform': 'scale(1.' + 0 + ')',
                    '-webkit-transform-origin': 'top center',
                    '-moz-transform-origin': 'top center',
                    '-ms-transform-origin': 'top center',
                    'transform-origin': 'top center',
                    // '-webkit-transform': 'scale(1.'+parseInt(size)+')',
                    // 'transform': "scale(1."+parseInt(size)+")",
                    // 'margin-top': ""+ (parseInt(size) + 20) +"%",
                });
            }
            if (val === 2) {
                $('body').css({
                    // 'zoom': '1.' + parseInt(size),
                    // '-ms-zoom': '1.' + parseInt(size),
                    // '-webkit-zoom': '1.' + parseInt(size),
                    // '-moz-zoom': '1.' + parseInt(size),
                    // '-o-zoom': '1.' + parseInt(size),
                    '-webkit-transform': 'scale(1.' + 1 + ')',
                    '-moz-transform': 'scale(1.' + 1 + ')',
                    '-ms-transform': 'scale(1.' + 1 + ')',
                    'transform': 'scale(1.' + 1 + ')',
                    '-webkit-transform-origin': 'top center',
                    '-moz-transform-origin': 'top center',
                    '-ms-transform-origin': 'top center',
                    'transform-origin': 'top center',
                    // '-webkit-transform': 'scale(1.'+parseInt(size)+')',
                    // 'transform': "scale(1."+parseInt(size)+")",
                    // 'margin-top': ""+ (parseInt(size) + 20) +"%",
                });
            }
            if (val === 3) {
                $('body').css({
                    // 'zoom': '1.' + parseInt(size),
                    // '-ms-zoom': '1.' + parseInt(size),
                    // '-webkit-zoom': '1.' + parseInt(size),
                    // '-moz-zoom': '1.' + parseInt(size),
                    // '-o-zoom': '1.' + parseInt(size),
                    '-webkit-transform': 'scale(1.' + 2 + ')',
                    '-moz-transform': 'scale(1.' + 2 + ')',
                    '-ms-transform': 'scale(1.' + 2 + ')',
                    'transform': 'scale(1.' + 2 + ')',
                    '-webkit-transform-origin': 'top center',
                    '-moz-transform-origin': 'top center',
                    '-ms-transform-origin': 'top center',
                    'transform-origin': 'top center',
                    // '-webkit-transform': 'scale(1.'+parseInt(size)+')',
                    // 'transform': "scale(1."+parseInt(size)+")",
                    // 'margin-top': ""+ (parseInt(size) + 20) +"%",
                });
            }
        }


    },
    computed: {
        specificValue() {
            // console.log(this.specific)
            return this.specific;
        }
    }
}
</script>

<style>
.specific-fields {
    z-index: 10000000;
}

.sidebar-items {
    z-index: 100000000;
}

.specific-fields .v-slider__track-container {
    cursor: pointer;
}

.specific-fields .v-slider__thumb-container {
    cursor: pointer;
}

.position-sidebar .v-list.specific {
    background: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.position-sidebar p, .position-sidebar a {
    font-size: 16px;
    color: #000e08;
}

.specific-fields .v-slider__thumb {
    width: 20px;
    height: 20px;
}

.specific-fields .v-slider__track-container {
    height: 5px;
}

.specific-fields .v-slider .v-slider__thumb:before {
    top: -8px;
    left: -8px;
}
</style>
