<template>
    <div class="chose_inner_area">
        <div class="section_tittle">
            <h2>{{ $t("Кўп бериладиган саволлар") }}</h2>
        </div>
        <v-expansion-panels flat v-model="panel" >
            <v-expansion-panel
                v-if="fkey<5" v-for="(faq,fkey) in faqs"
                :key="fkey"
            >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                    <template v-slot:default>
                        {{
                            typeof faq.question !== 'undefined' ? faq.question : ''
                        }}                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <template v-slot:default>
                        <div class="11111"> {{ typeof faq.answer !== 'undefined' ? faq.answer : '' }} </div>
                    </template>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>



    </div>

</template>

<script>
import api from "../../src/services/apiService";

export default {
    name: "faq2",
    data(){
        return{
            faqs:[],
            panel:0
        }
    },
    created() {
        this.getFaqs();
    },
    methods:{
        getFaqs() {
            const _this = this;
            api.readFaqs().then(function (response) {
                if (response.status === 200) _this.faqs = response.data.data;

            });

        },
    }
}
</script>

<style>
.chose_inner_area .v-expansion-panel-header{
    color: #0a0a0a;
    font-size: 16px;
    font-family: "latosm";
    height: 65px;
    border-bottom: 1px solid #39ae69;
}
.chose_inner_area .v-expansion-panel-content__wrap{
    padding: 16px 24px 0 16px;
    flex: 1 1 auto;
    max-width: 100%;
    background-color: #f3f9f6;
    font-style: italic;
    border: none;
    line-height: 30px;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    color: #6f6f6f;
}
.chose_inner_area .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{
    color: var(--mycolor);
    font-size: 30px;
}

</style>
