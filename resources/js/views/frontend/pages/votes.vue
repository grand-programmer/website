<template>
    <section class="votes mt-15">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h3 class="votes-title">{{ $t("Сўровнома") }}</h3>
                    <p class="my-5 font-italic ">{{ $t("Божхона соҳасига оид сўровномаларда иштирок этинг") }}</p>
                </v-col>
                <v-col cols="9">
                    <v-row>
                        <v-list>
                            <v-list-item v-for="(voteItem,key) in votes" :key="key">
                                <v-col cols="12">
                                    <h4>
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

                            </v-list-item>
                        </v-list>


                    </v-row>

                </v-col>
                <v-col cols="3">

                </v-col>

            </v-row>

        </v-container>
    </section>
</template>
<script>
import api from "../../../src/services/apiService";

export default {
    name: 'Votes',
    data() {
        return {
            votes: [],
            displayResults: [],
            colors: [
                "light-blue",
                "light-green darken-4",
                "lime",
                "deep-orange",
            ]
        }
    },

    methods: {
        getResult(id){
            //if(this.displayResults.contain(id))
            //this.displayResults.push(id)
        },
        initialize(){
            let votes=this.$cookie.get('votes') ? JSON.parse(this.$cookie.get('votes')) : null;
            if(votes) {
                this.displayResults = votes;
            }
        },
        getQuestions() {
            const _app = this;
            api.readVotesForFront().then(function (response) {
                _app.votes = response.data.data;
            });
        },
        answer(key, answer) {
            if(!answer) return;
            const _app = this;
            axios.post("/api/v1/votescount/" + key, {answer: answer, _method: 'put'}).then(function (response) {
                if (response.data.success === true) {
                    _app.getQuestions();
                    _app.displayResults.push(key);
                    _app.$cookie.set('votes', JSON.stringify(_app.displayResults), 1);
                }
            });


        }
    },
    created() {
        this.$store.commit('setLoading', true)
        setTimeout(()=>{
            this.initialize()
            this.getQuestions()
        },1000)
        this.$store.commit('setLoading', false)
    }
}
</script>


