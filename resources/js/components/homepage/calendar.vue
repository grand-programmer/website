<template>
    <div class="col-md-6 last_page_right">

        <div class="section_tittle">
            <h2>Божхонага доир муҳим саналар</h2>
        </div>
        <div class="calendar_wrapper" v-if="months">
            <div class="top-months">
                <div class="month-item" @click="activeMonth=index" :class="(index==activeMonth)?'active':''"  v-if="index <= 6" v-for="(month,index) in months">
                    <div class="month-text">{{ month.month }}</div>
                </div>
            </div>
            <div class="calendar_content">
                <div class="calendar_content-item"   v-if="(months[activeMonth]['items'] && key < 4)" v-for="(item,key) in months[activeMonth]['items']">
                    <span>{{ item.day }} </span>
                    <p>{{item.title}}</p>
                </div>



            </div>
            <div class="footer-months">
                <div class="month-item" @click="activeMonth=index" :class="(index==activeMonth)?'active':''"  v-if="index > 6" v-for="(month,index) in months">
                    <div class="month-text">{{ month.month }}</div>
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
            months: null,
            activeMonth:1,
        }
    },
    mounted() {
        this.initialize();
    },
    methods: {
       async initialize() {
           await api.readEventsForFront().then((response) => {
                this.months = response.data.data;
            }).catch((error) => {
/*                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)*/
               this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)



                console.log(error)
            })


        }
    }
}
</script>
