<template>
    <div class="chose_inner_area">
        <div class="section_tittle">
            <h2>{{ $t("Кўп бериладиган саволлар") }}</h2>
        </div>
        <div class="panel-group" aria-multiselectable="true" role="tablist"  id="accordion" >

            <div class="panel panel-default" v-if="fkey<5" v-for="(faq,fkey) in faqs"
                 :key="fkey">
                <div class="panel-heading"  :id="'headingThree' + fkey">
                    <h4 class="panel-title">
                        <a role="button" data-bs-toggle="collapse" data-bs-parent="#accordion"
                           :href="'#chose'+fkey" aria-expanded="true"
                           aria-controls="chose3">{{
                                typeof faq.question !== 'undefined' ? faq.question : ''
                            }}<span>
                                                    <i class="fa fa-plus" aria-hidden="false"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                        </a>
                    </h4>
                </div>
                <div :id="'chose'+fkey" class="panel-collapse collapse "
                     :class="fkey===0?' in show':''"
                     aria-labelledby="headingThree">
                    <div class="panel-body">
                        {{ typeof faq.answer !== 'undefined' ? faq.answer : '' }}
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import api from "../../src/services/apiService";

export default {
    name: "Homefaq",
    data(){
        return{
            faqs:[]
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

<style scoped>

</style>
