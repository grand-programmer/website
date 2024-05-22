<template>
    <div class="section">
        <div class="row"><h3 class="text-center section_title mb-0">{{ $t("Очиқ маълумотлар") }}</h3></div>
        <v-container>
            <v-row class="mt-6">
                <v-col cols="10">
                    <v-text-field
                        style="border: 1px solid var(--mycolor)"
                        dense
                        solo
                        hide-details
                        elevation="0"
                        :placeholder="$t('Қидириш учун ёзинг')"
                        v-model="search"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn color="primary"
                           style="      background-color: #39ae691f !important;
                                        color: var(--mycolor);
                                        border: 1px solid;
                                        height: 40px;
                                        padding: 25px;
                                        margin-top: -1px; "
                           class="py-2"
                           block
                           depressed
                           @click="searchItems()"
                    >{{ $t('Излаш') }}
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="px-2">
                <v-col cols="12" class="pa-0" style="border-bottom: 1px solid #ccc">
                    <v-list-item color="primary">{{ $t('Маълумотлар сони') }}: {{ length }} та</v-list-item>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-expansion-panels v-model="panel" accordion>
                        <v-expansion-panel
                            v-for="(item,i) in items"
                            :key="i"
                            class="my-2 opendataItem"
                            style="border-radius: 10px; border:none !important;"
                        >
                            <v-expansion-panel-header
                                hide-actions
                                class="pb-0 pl-8"
                                @click.native.stop="panel===i?getItem(item.id): null"
                            >
                                <div  style="    display: flex;
                                                flex-direction: column;
                                                justify-content: space-between;
                                                align-items: stretch;
                                                padding-bottom: 10px;"
                                :style="panel===i?'border-bottom:1px solid var(--mycolor)':''">
                                <div>{{item.title}}</div>
                                <template v-if="panel!==i && item.files">
                                    <div class="d-flex justify-content-end">
                                        <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(item.files.xml)">xml</v-btn>
                                        <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(item.files.csv)">csv</v-btn>
                                        <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(item.files.json)">json</v-btn>
                                        <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(item.files.xls)">xls</v-btn>
                                        <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(item.files.rdf)">rdf</v-btn>
                                    </div>
                                </template>
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row class="pt-2">
                                    <v-col cols="6">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <tbody>
                                                <tr>
                                                    <td><b>{{ $t('Масъул бошқарма') }}:</b></td>
                                                    <td>{{ item.boshqarma }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('Масъул шахс') }}:</b></td>
                                                    <td>{{ item.contact }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('Телефон') }}:</b></td>
                                                    <td>+998{{ item.phone }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('Эл.манзил') }}:</b></td>
                                                    <td>{{ item.email }}</td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                    <v-col cols="6">
                                        <h6 class="pr-15" style="line-height: 20px">{{ $t('Архивланган очиқ маълумотлар тўпламига кириш учун керакли йил ва чоракни танланг') }}</h6>
                                        <v-row class="py-4">
                                            <v-col cols="6">
                                                <v-autocomplete
                                                    solo
                                                    dense
                                                    hide-details
                                                    clearable
                                                    :label="$t('Йилни танланг')"
                                                    :suffix="$t('йил')"
                                                    :items="years"
                                                    item-value="year"
                                                    item-text="year"
                                                    v-model="year"
                                                >
                                                </v-autocomplete>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-autocomplete
                                                    solo
                                                    dense
                                                    hide-details
                                                    clearable
                                                    :label="$t('Чоракни танланг')"
                                                    v-model="quarter"
                                                    :items="[
                                                    {text:'1 - ' + $t('чорак'), value:1},
                                                    {text:'2 - ' + $t('чорак'), value:2},
                                                    {text:'3 - ' + $t('чорак'), value:3},
                                                    {text:'4 - ' + $t('чорак'), value:4},
                                                    {text:$t('Йиллик'), value: null},
                                                ]">
                                                </v-autocomplete>
                                            </v-col>
                                        </v-row>
                                        <div class="d-flex justify-content-end mt-2" v-if="sFiles">
                                            <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(sFiles.xml)">xml</v-btn>
                                            <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(sFiles.csv)">csv</v-btn>
                                            <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(sFiles.json)">json</v-btn>
                                            <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(sFiles.xls)">xls</v-btn>
                                            <v-btn color="primary" x-small class="mx-1" @click.native.stop="getFile(sFiles.rdf)">rdf</v-btn>
                                        </div>
                                        <div class="d-flex justify-content-end mt-2" v-else>
                                            {{$t('Маълумот топилмади')}}
                                        </div>
                                    </v-col>
                                </v-row>

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
            <v-row v-if="length > 10">
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="parseInt(length/10) +1 "
                        circle
                    ></v-pagination>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import apiService from "../../../src/services/apiService";

export default {
    name: "OpenDatas",
    data() {
        return {
            items: [],
            panel: null,
            search: null,
            page: 1,
            length: 1,
            years:[],
            sFiles: null,
            year: null,
            quarter: null

        }
    },
    methods: {
        headerClicked(e){
            e.prevent.stop
          console.log(e)
        },
        getFile(val){
            window.location.href=val

        },
        getItem(id){
            this.sFiles = null
               apiService.getOneOpenData(id,{ quarter: this.quarter, year: this.year }).then(res =>{
                if(res.status===200) {
                    this.years=res.data.years
                        /*.map(item => {
                        return {year : item}
                    })*/
                    this.sFiles = res.data.data
                    //this.items = res.data.data
                    //this.length = res.data.total
                }
            })
        },
        searchItems(){
            this.getItems({search: this.search })
        },
        getItems(data=null){
            apiService.getOpenData(data).then(res =>{
                if(res.status===200) {
                    this.items = res.data.data
                    this.length = res.data.total
                }
            })
        }
    },
    created() {
        this.getItems()
    },
    watch:{
        year:{
            handler(val, oldVal){
                // if(oldVal){
                    this.getItem(this.items[this.panel].id)
                // }
            }
        },
        quarter:{
            handler(val, oldVal){
                if(this.year){
                    this.getItem(this.items[this.panel].id)
                }
            }
        },
        page:{
            handler(val, oldVal){
                    this.getItems({page: this.page})
            }
        }

    }
}
</script>
<style>
.opendataItem::after{
    border: none !important;

}
</style>
