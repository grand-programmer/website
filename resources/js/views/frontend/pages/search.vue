<template>

    <div class="section page-container">
        <div class="background"></div>
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="container">

            <div class="row">
                <v-col cols="12" class="pt-4">
                    <h3 class="search-title">{{ $t("Қидирув") }}</h3>
                    <p class="mt-5 font-italic ">{{ $t("Кенгайтирилган қидирув тизими") }}</p>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <v-card-text>
                            <v-row class="pt-4 pb-2">
                                <v-col cols="4" class="py-0">
                                    <v-text-field clearable v-model="searchtext" :label="$t('Калит сўз')"/>
                                </v-col>
                                <v-col cols="3" class="py-0">
                                    <v-autocomplete clearable v-model="searchBolim" :label="$t('Бўлимни танланг')"
                                                    :items="[{text:$t('Янгиликлар'), value: 0},{text:$t('Барча бўлимлар'), value: 1}]"/>
                                </v-col>
                                <v-col cols="3" class="py-0">
                                    <v-autocomplete :loading="loadingsearchCategory" v-model="searchCategory"
                                                    :label="$t('Категория')" :items="categories" item-text="title"
                                                    item-value="id" clearable/>
                                </v-col>
                                <v-col cols="2" class="py-0">
                                    <editable-date v-model="date" :label="$t('Сана')" clearable/>
                                </v-col>
                                <v-col cols="3" class="py-0 pr-0 d-flex justify-content-end" offset="9">
                                    <v-btn color="primary" @click="search">
                                        {{ $t('Қидириш') }}
                                    </v-btn>
                                </v-col>

                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <template v-if="message"><div class="d-flex justify-content-center align-items-center p-2">
                        {{message}}
                    </div></template>
                    <template v-else>
                        <v-card v-if="results && results.length > 0 " v-for="resultItem in results">
                            <v-card-text>
                               <h4>{{resultItem.title}}</h4>
                               <div class="p-2" v-html="getSelectionText(resultItem.description)"></div>
                                <div class="d-flex justify-content-end">
                                    <a :href="'/' + $i18n.locale + '/' + ((searchBolim===1)?'page':'news') + '/'+resultItem.slug" target="_blank" >{{$t('Батафсил')}}</a>
                                </div>

                            </v-card-text>
                        </v-card>
                        <div v-else class="d-flex justify-content-center align-items-center p-2">
                            {{ $t('Маълумот топилмади')}}
                        </div>
                    </template>
                </v-col>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../../src/services/apiService";
import i18n from "../../../i18n";
import EditableDate from "../../../components/custom/EditableDate";

export default {
    name: 'Votes',
    components: {EditableDate},
    data() {
        return {
            results:[],
            message: null,
            searchedText:null,
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Қидирув'),
                    to: '/page/search',
                    disabled: true,
                    exact: true,
                },
            ],
            votes: [],
            categories: [],
            loadingsearchCategory: false,
            searchtext: "",
            searchBolim: null,
            searchCategory: null,
            date: null,
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
        getSelectionText(val){
            const pos = val.indexOf(this.searchedText)
            if(pos > 0){
                if(pos > 100) {
                    const desc = ' ... ' + val.substring((pos - 100), pos + this.searchedText.length + 50) + ' ... '
                    return desc.replace(this.searchedText, '<b class="font-weight-bold text--primary">' + this.searchedText + '</b>')
                }    else {
                    const desc = ' ... ' + val.substring(0, pos + this.searchedText.length + 50) + ' ... '
                    return desc.replace(this.searchedText, '<b class="font-weight-bold text--primary">' + this.searchedText + '</b>')
                }
            }
            else {
                const desc = ' ... ' + val.substring(0, this.searchedText.length + 50) + ' ... '
                return desc.replace(this.searchedText, '<b class="font-weight-bold text--primary">' + this.searchedText + '</b>')
            }
        },
        search() {
            this.message=null

            if(!this.searchtext || (this.searchtext && this.searchtext.length<3)){
                this.message=this.$t('Калит сўз камида 3 та ҳарфдан иборат бўлиши лозим!')
                return ;
            }
            api.search({
                type: this.searchBolim,
                text: this.searchtext,
                bolim: this.searchCategory,
                date: this.date
            }).then(res =>{
                if(res.status===200) {
                    this.searchedText = JSON.parse(JSON.stringify(this.searchtext))
                    this.results = res.data
                    if(this.results.length < 1 ) this.message= this.$t('Маълумот топилмади')
                }
                else this.message=this.$t('Маълумотлар олишда хатолик юз берди!')
            })
        }
    },
    created() {

    },
    watch: {
        async searchBolim(val) {
            this.loadingsearchCategory = true
            if (val === 0) {
                this.categories = []
                await api.readCategories().then(res => {
                    if (res.status === 200) {
                        this.categories = res.data.data
                    }
                    console.log(res)
                })
            }
            if (val === 1) {
                this.categories = []
                await api.readPages().then(res => {
                    if (res.status === 200) {
                        this.categories = res.data
                    }
                })
            }
            this.loadingsearchCategory = false

        }
    }
}
</script>


