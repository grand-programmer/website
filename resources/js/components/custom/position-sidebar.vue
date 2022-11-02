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
            <div class="phone-number">1108</div>
            <v-icon size="30" color="#fff" style="transform: rotate(265px)">mdi-phone</v-icon>
        </div>


    </div>
</template>

<script>
export default {
    name: "position-sidebar",
    data() {
        return {
            searchDialog1: false,
            searchText: "",
            searchResults:[],
            isLoading:false,
            search:null
        }
    },
    methods:{
        customFilter (item, queryText, itemText) {
            const textOne = item.title.toLowerCase()
            const textTwo = item.description.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1 ||
                textTwo.indexOf(searchText) > -1
        },
        opensearchDialog1(){
            console.log('asd');
            console.log(this.searchDialog1)
            this.searchDialog1=true;
            console.log(this.searchDialog1)
        },
        openItem(slug){
            this.searchDialog1=false;
            this.$router.replace("/news/"+ slug)
        }

    },
    watch:{
        search (val) {
            // Items have already been loaded
            this.isLoading = true

            // Lazily load input items
            axios.post('/api/v1/news/search',{text:val})
                .then(res => {
                    this.searchResults = res.data
                })
                .catch(err => {
                    console.log('err')
                    console.log(err)
                })
                .finally(() => (this.isLoading = false))
        },
    }
}
</script>

<style scoped>

</style>
