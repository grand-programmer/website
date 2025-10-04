<template>
  <div class="p-1 d-flex align-items-start">

    <div class="nav flex-column nav-pills me-3 col-1 product_parts"
         id="v-pills-tab"
         role="tablist"
         aria-orientation="vertical">
      <button class="nav-link create" @click="AddProduct">{{ $t('Қўшиш') }}
        <v-icon>mdi-plus-circle-outline</v-icon>
      </button>
      <button class="nav-link"
              :class="application.products[key].id===tovarIndex?'active':''"
              :id="'v-pills-profile-tab' + product.id"
              :data-id="product.id" data-bs-toggle="pill"
              @click="selectTabTovar(product.id)"
              :data-bs-target="'#v-pills-profile'+ product.id" type="button" role="tab"
              :aria-controls="'#v-pills-profile'+ product.id" aria-selected="true"
              v-for="(product,key) in application.products">{{ $t('Товар') }}
        {{ key + 1 }}
        <div class="close-icon">
          <v-icon @click="RemoveProduct(product.id)">
            mdi-close-circle-outline
          </v-icon>
        </div>
      </button>

    </div>

    <div class="tab-content w-100" id="v-pills-tabContent">
      <div class="tab-pane fadeInUp"
           :class="(product.id===tovarIndex)?'list-enter-active active':'list-move'"
           :id="'v-pills-profile'+ product.id" role="tabpanel" :key="key"
           aria-labelledby="v-pills-home-tab" v-for="(product,key) in application.products">
        <v-card
            class="mb-0 pt-4 pb-2">
          <h5 class="primary-color">{{ $t('Товар тўғрисидаги маълумотлар') }}</h5>
          <v-tabs-items
              class="product_info_tab">
            <v-row class="p-2 my-2 mx-1"
                   flat
            >
              <spt-commodity-content :value="product"/>
            </v-row>

          </v-tabs-items>
        </v-card>
      </div>

    </div>


  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import SptCommodityContent from "./sptCommodityContent";

export default {
  name: "sptCommodity",
  data() {
    return {
      application: {
        products: [
          {
            id: 0,
          },
        ]
      },
      tovarIndex: 0,
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts(){
      this.$auth.plugins.http.get('/api/v1/response/route_spt/commodity/' + this.$route.params.id).then(res=>{
        this.application.products = res.data.data
        this.tovarIndex  = this.application.products[0].id
      }).catch(e=>{
        console.log(e)
      });
    },
    AddProduct() {

    },
    selectTabTovar() {

    }

  },
  components: {
    SptCommodityContent,
    ValidationProvider,
    ValidationObserver,
  }
}
</script>
