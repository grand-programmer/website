<template>
  <div class="section page-container">
    <div class="whitebreadcrumb breadcrumb-site">
      <v-container v-if="page.title.length">
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col cols="3" v-if="relates.length>0">
          <div class="left_sidebar_widget">
            <div class="single_widget categori_widget wow fadeInUp"
                 style="visibility: visible; animation-name: fadeInUp;">
              <ul>
                <li :class="(related_item!=null && $route.params.id==parseInt(related_item.id) || $route.params.id==related_item.url.substr(6)) ? 'active' : ''"
                    v-for="related_item in relates">
                  <router-link v-if="related_item" :to="related_item.url"><i aria-hidden="true"
                                                                             class="fa fa-caret-right"></i>{{ related_item.title }}
                  </router-link>
                  <ul>
                    <li :class="(childRelated!=null && childRelated.url!=null && ($route.params.id==parseInt(childRelated.id) || $route.params.id==childRelated.url.substr(6))) ? 'active' : ''"
                        v-for="childRelated in related_item.children">
                      <router-link v-if="childRelated" :to="childRelated.url"><i aria-hidden="true"
                                                                                 class="fa fa-caret-right"></i>{{ childRelated.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
        <v-col :cols="(relates.length>0) ? 9 : 12">
          <div class="single_blog_content">
            <div class="widget_tittle"><h3>{{ page.title }}</h3></div>
            <div v-html="page.description"></div>
          </div>
          <template v-if="page.id===157">
            <div style="border:1px dashed #ccc; border-radius: 10px; margin-top: 20px; padding: 10px;">
            <h4 class="mb-2">{{ $t('Ҳужжат лойихаларини баҳоланг') }}</h4>
            <div>
              <p>{{ $t('Рейтинг') }}</p>
              <p style="margin-left: -10px">
                <v-rating
                    hover
                    length="5"
                    size="20"
                    background-color="grey darken-1"
                    v-model="rateitem.rating"
                ></v-rating>
              </p>
            </div>
            <div>
              <p>{{ $t('Фикр қолдириш') }}</p>
              <p>
                <v-textarea class="my-2"
                            auto-grow
                            outlined
                            rows="1"
                            v-model="rateitem.text"
                            row-height="15"
                            hide-details
                >

                </v-textarea>
              </p>
              <v-btn color="primary" @click="sendCommit">{{ $t('Юбориш') }}</v-btn>
            </div>
            </div>
          </template>
        </v-col>

      </v-row>
    </v-container>



  </div>
</template>
<script>
import api from "./../../../src/services/apiService";
import i18n from "../../../i18n";

export default {
  name: 'Page',
  data: () => ({
    breadcrumb_items: [
      {
        text: i18n.t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true,
      },
      {
        text: '',
        to: '/page/',
        disabled: true,
        exact: true,
      },
    ],
    /*id:this.$route.params.id,*/
    page: {},
    rateitem: {
      rating: null,
      text: null,
    },
    relates: {}
  }),
  watch: {
    $route(to, from) {
      this.initialize();
    }
  },
  async created() {
    this.initialize();
  },
  computed: {
    breadcrumbs() {
      return this.breadcrumb_items
    }
  },
  title() {
    this.page.title;
  },

  methods: {
    sendCommit() {

      if (!this.rateitem.rating || !this.rateitem.text) {
        this.$toast.error(this.$t('Майдонларни тўлдириб қайтадан ҳаракат қилинг'))
      } else {

        this.$toast.success(this.$t('Маълумотлар омадли тарзда юборилди. Билдирган фикрингиз учун катта рахмат!'))

      }

    },
    close() {
      this.$router.replace('/');
    },
    async initialize() {
      this.page.title = ''
      await api.readPage(this.$route.params.id).then((response) => {
        this.page = response.data.data;
        if (!this.page.id) this.$router.replace('/404')
        if (this.page.parent && typeof this.page.parent.url !== 'undefined') {
          this.breadcrumb_items[1].text = this.page.parent.title;
          this.breadcrumb_items[1].to = this.page.parent.url;
          this.breadcrumb_items[1].disabled = false;
          this.breadcrumb_items[2] = {
            text: this.page.title,
            to: this.page.url,
            disabled: true,
            exact: true,
          }

        } else
          this.breadcrumb_items[1].text = this.page.title;
      }).catch((error) => {
        this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
        this.$router.replace("/").catch(() => {
        });
      })
      api.readRelated(this.$route.params.id).then((response) => {
        this.relates = response.data;
      }).catch((error) => {
        this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
        this.$router.replace("/").catch(() => {
        });
      })


    },
  }

}
</script>
<style lang="scss">
.categori_widget ul li {
  padding: 10px 0;
  border-color: #39ae69;
  border-bottom: 1px solid #39ae69;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ul {
    margin-top: 0;

    li:last-child {
      border: none;
    }
  }
}

</style>
