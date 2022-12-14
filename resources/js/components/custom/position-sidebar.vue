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
                            <v-col cols="12" v-for="(voteItem,key) in votes" :key="key" v-if="voteItem.id===11">
                                <h4 style="text-align: center">
                                    {{ voteItem.question }}
                                </h4>
                                <template v-if="!displayResults.includes(votes[key].id)">
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
                                               @click="answer(votes[key].id,votes[key].selected)">
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
                                    <template v-for="(resultItem,rkey) in votes[key].answers">
                                        <div class="my-5"
                                             :data="(votes[key].answers[rkey]['count'] / votes[key].total * 100)">
                                            <p>{{ votes[key].answers[rkey].text }}
                                                <v-btn x-small color="#4e4646">
                                                    {{ resultItem.count ? resultItem.count : 0 }}
                                                </v-btn>
                                            </p>
                                            <v-progress-linear
                                                :value="(votes[key].answers[rkey]['count'] / votes[key].total * 100)"
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

                                    <p style="border-top: 1px solid #cccccc4d; padding-top: 15px; margin-top: 25px;">
                                        {{ $t("Барчаси") }}
                                        <v-btn x-small color="#4e4646">{{ votes[key].total }}</v-btn>
                                    </p>
                                </template>
                                <hr>

                            </v-col>

                        </v-card>
                        <template v-slot:activator="{ on, attrs }">
                            <span
                                v-bind="attrs"
                                v-on="on"
                            >Баҳолаш</span>

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
                    <p>{{ $t('Шрифт ўлчами') }}</p>
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
                <div class="my-2">
                    <a class="text-decoration-underline white--text" @click="refreshSpecific">{{ $t('Тозалаш') }}</a>
                </div>
            </div>
            <v-icon size="30" color="#fff" @click="clickedSpecific" class="m-0 eye">
                mdi-eye-outline
            </v-icon>
        </v-list>

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
            shrift: 2,
            grayscale: false,
            searchDialog1: false,
            baholashDialog: false,
            searchText: "",
            searchResults: [],
            isLoading: false,
            search: null,
            votes: [],
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
                $(".sidebar-items.specific").css("margin-right","154px");
            } else {
                $(".sidebar-items.specific").addClass("active");
                $(".sidebar-items.specific").css("margin-right","-153px");
                this.specific = true
            }
        },
        clickOutside() {
            if (this.specific) this.specific = false;
        },
        getResult(id) {
            //if(this.displayResults.contain(id))
            //this.displayResults.push(id)
        },
        getQuestions() {
            const _app = this;
            api.readVotesForFront().then(function (response) {
                _app.votes = response.data.data;
            });
        },
        answer(key, answer) {
            if (!answer) return;
            const _app = this;
            axios.post("/api/v1/votescount/" + key, {answer: answer, _method: 'put'}).then(function (response) {
                if (response.data.success === true) {
                    _app.getQuestions();
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


    },
    watch: {
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
            this.getQuestions()

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
</style>
