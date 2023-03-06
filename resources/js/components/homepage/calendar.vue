<template>
    <div class="col-md-6 last_page_right">

        <div class="section_tittle">
            <h2>{{ $t("Божхонага доир муҳим саналар") }}</h2>
        </div>
        <div class="calendar_wrapper" v-if="months">
            <div class="top-months">
                <div class="month-item" @click="activeMonth=index" :class="(index==activeMonth)?'active':''"  v-if="index <= 6" v-for="(month,index) in months">
                    <div class="month-text">{{ $t(month.month) }}</div>
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
                    <div class="month-text">{{ $t(month.month) }}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: "CalendarInHomepage",
    data() {
        return {
            months: null,
            activeMonth:1,
        }
    },
    mounted() {
        this.initialize();
        this.activeMonth=(new Date()).getMonth()+1;
    },
    methods: {
       async initialize() {
           const _this =this
           await api.readEventsForFront().then((response) => {
                this.months = response.data.data;
               for (const [key, value] of Object.entries(this.months)) {
                   this.months[key].month=_this.$t(value.month.substring(0,1).toUpperCase() + value.month.substring(1))
               }

            }).catch((error) => {
/*                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`)) */
               this.$toast.error(_this.$t(`Маълумотларни юклашда хатолик содир бўлди!`))
                console.log(error)
            })


        }
    }
}
</script>
