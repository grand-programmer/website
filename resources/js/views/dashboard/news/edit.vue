<template>
    <v-container
        class="news-main"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <div class="dashboardbreadcrumb">
                <v-container>
                    <v-breadcrumbs :items="breadcrumb_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-container>
            </div>
            <v-col
                cols="12"
                md="12"
            >
                <v-btn v-for="language in languages" @click="lang=language.value"
                       :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                </v-btn>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="newsForm" enctype="multipart/form-data">
                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <v-row>
                                                    <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                        <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - ' + getLang()['text']"
                                                                          v-model="news.title"
                                                                          name="title"></v-text-field>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12"  :key="'title' + langKey"
                                                           v-for="(langItem,langKey) in langtext" v-show="lang===langKey" >
                                                        <ValidationProvider name="Сарлавха"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - ' + getLang()['text']"
                                                                          v-model="langtext[lang].title"
                                                                          name="title"></v-text-field>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="12" md="12">
                                                        <ValidationProvider name="Категория" rules="required"
                                                                            v-slot="{ errors }">
                                                            <v-autocomplete
                                                                label="Категория"
                                                                v-model="news.cats"
                                                                :items="categories"
                                                                auto-select-first
                                                                chips
                                                                deletable-chips
                                                                multiple
                                                                small-chips
                                                                hide-selected
                                                                no-data-text="Бошқа категориялар топилмади"
                                                            ></v-autocomplete>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="6">
                                                        <v-switch
                                                            v-model="news.home"
                                                            inset
                                                            name="home"
                                                            :label="news.home ? `Бош сахифада чиқарилсин` : `Бош сахифада чиқарилмасин`">
                                                        </v-switch>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-autocomplete clearable persistent-hint
                                                                        label="Бошқармани белгиланг"
                                                                        :items="boshqarmalar" item-text="title"
                                                                        item-value="id"
                                                                        v-model="news.boshqarma"></v-autocomplete>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col>
                                                        <v-file-input
                                                            v-model="news.image"
                                                            color="deep-purple accent-4"
                                                            label="Асосий расм"
                                                            placeholder="Select your files"
                                                            prepend-icon="mdi-paperclip"
                                                            accept="image/*"
                                                            name="image"
                                                            v-on:change="previewImage"
                                                        >

                                                        </v-file-input>

                                                    </v-col>
                                                </v-row>


                                            </v-col>
                                            <v-col cols="6" sm="6" md="6">
                                                <div class="row justify-content-center">
                                                    <template v-if="preview">
                                                        <h3 class="text-center">Юкланган расм </h3>
                                                        <img :src="preview" class="img-400 p4"/>
                                                    </template>
                                                </div>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-text-field label="Сана"
                                                              v-model="news.created_at"
                                                              type="date"></v-text-field>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-btn
                                                    v-if="news.telegram"
                                                    small
                                                    class="success"
                                                >
                                                    Телеграмга чиқарилган
                                                </v-btn>
                                                <v-btn
                                                    v-else
                                                    small
                                                    v-model="news.telegram"
                                                    :loading="loading.telegram"
                                                    class="success"
                                                    @click="telegram(news)"
                                                > Телеграмга чиқариш
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Қисқача мазмуни" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <label>Қисқача - {{ languages[0]['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            :api-key="getApiKey"
                                                            v-model="news.short"
                                                            :init="{
                                                                selector: 'textarea',
                                                                height: 500,
                                                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                                                imagetools_cors_hosts: ['picsum.photos'],
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                autosave_ask_before_unload: true,
                                                                autosave_interval: '30s',
                                                                autosave_prefix: '{path}{query}-{id}-',
                                                                autosave_restore_when_empty: false,
                                                                autosave_retention: '2m',
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                noneditable_noneditable_class: 'mceNonEditable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                file_browser_callback:file_browser_callback,
                                                            }"/>


                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Қисқача мазмуни"
                                                                    v-slot="{ errors }">
                                                    <label>Қисқача - {{ getLang(langKey)['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            :api-key="getApiKey"
                                                            v-model="langtext[langKey].short"
                                                            :init="{
                                                                selector: 'textarea',
                                                                height: 500,
                                                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                                                imagetools_cors_hosts: ['picsum.photos'],
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                autosave_ask_before_unload: true,
                                                                autosave_interval: '30s',
                                                                autosave_prefix: '{path}{query}-{id}-',
                                                                autosave_restore_when_empty: false,
                                                                autosave_retention: '2m',
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                noneditable_noneditable_class: 'mceNonEditable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                file_browser_callback:file_browser_callback,
                                                            }"/>


                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>


                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Сахифа тексти" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <label>Тўлиқ тексти - {{ languages[0]['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            :api-key="getApiKey"
                                                            v-model="news.description"
                                                            :init="{
                                                                selector: 'textarea',
                                                                height: 500,
                                                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                                                imagetools_cors_hosts: ['picsum.photos'],
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                valid_elements: '@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|'
                                                                                + 'onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|'
                                                                                + 'onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|'
                                                                                + 'name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,'
                                                                                + '#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|'
                                                                                + 'src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,'
                                                                                + '-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|'
                                                                                + 'height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|'
                                                                                + 'height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,'
                                                                                + '#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor'
                                                                                + '|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,'
                                                                                + '-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face'
                                                                                + '|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],'
                                                                                + 'object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width'
                                                                                + '|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,'
                                                                                + 'button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|'
                                                                                + 'valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],'
                                                                                + 'input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],'
                                                                                + 'kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],'
                                                                                + 'q[cite],samp,select[disabled|multiple|name|size],small,'
                                                                                + 'textarea[cols|rows|disabled|name|readonly],tt,var,big',
                                                                autosave_ask_before_unload: true,
                                                                autosave_interval: '30s',
                                                                autosave_prefix: '{path}{query}-{id}-',
                                                                autosave_restore_when_empty: false,
                                                                autosave_retention: '2m',
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                noneditable_noneditable_class: 'mceNonEditable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                file_browser_callback:file_browser_callback,
                                                            }"/>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="'description'+langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Сахифа тексти"
                                                                    v-slot="{ errors }">
                                                    <label>Тўлиқ тексти - {{ getLang(langKey)['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro"
                                                            v-model="langtext[langKey].description"
                                                            :init="{
                                                                selector: 'textarea',
                                                                height: 500,
                                                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                                                imagetools_cors_hosts: ['picsum.photos'],
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                valid_elements: '@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|'
                                                                                + 'onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|'
                                                                                + 'onkeydown|onkeyup],a[rel|rev|charset|hreflang|tabindex|accesskey|type|'
                                                                                + 'name|href|target|title|class|onfocus|onblur],strong/b,em/i,strike,u,'
                                                                                + '#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|'
                                                                                + 'src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,'
                                                                                + '-blockquote,-table[border=0|cellspacing|cellpadding|width|frame|rules|'
                                                                                + 'height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|'
                                                                                + 'height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,'
                                                                                + '#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor'
                                                                                + '|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,'
                                                                                + '-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face'
                                                                                + '|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],'
                                                                                + 'object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width'
                                                                                + '|height|src|*],script[src|type],map[name],area[shape|coords|href|alt|target],bdo,'
                                                                                + 'button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|'
                                                                                + 'valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],'
                                                                                + 'input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],'
                                                                                + 'kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],'
                                                                                + 'q[cite],samp,select[disabled|multiple|name|size],small,'
                                                                                + 'textarea[cols|rows|disabled|name|readonly],tt,var,big',
                                                                autosave_ask_before_unload: true,
                                                                autosave_interval: '30s',
                                                                autosave_prefix: '{path}{query}-{id}-',
                                                                autosave_restore_when_empty: false,
                                                                autosave_retention: '2m',
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                noneditable_noneditable_class: 'mceNonEditable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                file_browser_callback:file_browser_callback,
                                                            }"/>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>

                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Ёпиш</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Сақлаш</v-btn>
                                </v-card-actions>
                            </v-form>
                        </ValidationObserver>
                    </v-card>
                </v-flex>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "./../../../src/services/adminApi";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/oz.json';
/*import Editor from '../../../components/form/tinyeditor';*/
import Editor from '@tinymce/tinymce-vue';


export default {
    name: "NewsEdit",
    data: () => ({
            news: [],
            lang: 'uz',
            langtext: {
                oz: {
                    title: null,
                    short: "",
                    description: null,
                },
                ru: {
                    title: null,
                    short: "",
                    description: null,
                },
                en: {
                    title: null,
                    short: "",
                    description: null,
                }


            },
            loading:{ telegram:false },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            preview: '',
            categories: [],
            created_at:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Янгиликлар', to: '/admin/news', exact: true},
                    {text: 'Янгилик таҳрирлаш', to: '/admin/news/edit', exact: true},
                ],
            boshqarmalar: [],//[{value:"1700",text:"'Тошкент-АЭРО' ИБК"},{value:"1703",text:"Андижон вилояти божхона бошқармаси"},{value:"1706",text:"Бухоро вилояти божхона бошқармаси"},{value:"1708",text:"Жиззах вилояти божхона бошқармаси"},{value:"1710",text:"Қашқадарё вилояти божхона бошқармаси"},{value:"1712",text:"Навоий вилояти божхона бошқармаси"},{value:"1714",text:"Наманган вилояти божхона бошқармаси"},{value:"1718",text:"Самарқанд вилояти божхона бошқармаси"},{value:"1722",text:"Сурхондарё вилояти божхона бошқармаси"},{value:"1724",text:"Сирдарё вилояти божхона бошқармаси"},{value:"1726",text:"Тошкент шахар божхона бошқармаси"},{value:"1727",text:"Тошкент вилояти божхона бошқармаси"},{value:"1730",text:"Фарғона вилояти божхона бошқармаси"},{value:"1733",text:"Хоразм вилояти божхона бошқармаси"},{value:"1735",text:"Қорақалпоғистон Республикаси божхона бошқармаси"}]
        }
    ),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш'
        },
    },
    created() {
        this.initialize();
    },
    methods: {
      getApiKey(){
        if((new Date).getDate()>25) return 'mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro'
        if((new Date).getDate()>15) return '08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7'
        if((new Date).getDate()>0) return '9d25drmrgzfvoui0c24tdc4yhevomkvwzyukwfeeisgvshi7'
      },
        async telegram(news){
          this.loading.telegram = true
            if(news.telegram) {
                this.$toast.error('Аллақачон жойланган')
                this.loading.telegram = false
                return
            }
            await axios.put("/api/v1/admin/news/" + this.$route.params.id, { telegram: true}).then(res =>{
                if(res.status===200){
                    this.$toast.success('Янгилик телеграм каналга юборилди')
                    this.loading.telegram = false
                    this.news.telegram = true

                } else {
                    this.$toast.error('Хатолик содир бўлди')
                    this.loading.telegram = false
                }
            }).catch(error => {
                console.log(error)
                this.$toast.error('Хатолик содир бўлди')
                this.loading.telegram = false
            });
            this.loading.telegram = false
        },
        formatDate(date,type=1) {
            console.log(date)
            if (!date) return null

            const [year, month, day] = date.split('-')
            if(type===2) return `${day}-${month}-${year}`;
            console.log('asd'+date)
            if(type===1) return `${day}.${month}.${year}`; else return `${year}-${day}-${month}`
        },
        getLang(code = null) {
            if (code) {
                let language = this.languages.filter((language) => {
                    if (language.value === code) return language;
                })
                if (language) return language[0]
                return null;

            } else {
                let language = this.languages.filter((language) => {
                    if (language.value === this.lang) return language;
                })
                if (language) return language[0]
                return null;
            }
        },
        initialize() {
            const _this = this;
            api.readOneNews(this.$route.params.id).then((response) => {
                this.news = response.data.data;
                if (typeof this.news.categories !== 'undefined' && _this.news.categories) {
                    _this.news['cats'] = [];
                    _this.news.categories.forEach(function (category) {
                        _this.news['cats'].push(category.id);
                    })
                }
                    if (typeof _this.news.translates !== 'undefined' && _this.news.translates && _this.news.translates.length>0 ) {
                        _this.news.translates.map(function(translate){
                            _this.langtext[translate.language]=translate;
                        })
                    }
                if (typeof _this.news.created_at !== 'undefined' && _this.news.created_at) {
                    _this.news.created_at = JSON.parse(JSON.stringify(_this.formatDate(_this.news.created_at,2)));

                }
                this.preview = "/storage/uploads/" + this.news.image;
                this.news.image = null;//"/storage/uploads/"+this.news.image;
                delete this.news.image;//"/storage/uploads/"+this.news.image;
            }).catch((error) => {
                console.log(error);
                this.$router.replace("/admin/news").catch(() => {
                });
            })
            api.readCategoriesForSelect().then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                console.log(error);
            })

            api.readOrgs().then((response) => {
                _this.boshqarmalar = response.data.data;
            }).catch((error) => {
                console.log(error)
            })
        },
        previewImage: function (input) {
            if (input) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.news.image = input;
                reader.readAsDataURL(input);
            }
        },
        file_browser_callback(field_name, url, type, win) {
            let x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
            let y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

            let cmsURL = '/laravel-filemanager?field_name=' + field_name;

            if (type === 'image') {
                cmsURL = cmsURL + "&type=Images";
            } else {
                cmsURL = cmsURL + "&type=Files";
            }

            this.$refs.tinymce_editor.editor.windowManager.open({
                file: cmsURL,
                title: 'Filemanager',
                width: x * 0.8,
                height: y * 0.8,
                resizable: "yes",
                close_previous: "no"
            });
        },


        close() {
            this.$router.replace('/admin/news');
        },

        async save() {
            const isValid = await this.$refs.newsForm.validate();
            if (isValid) {
                var data = new FormData();
                for (var key in this.news) {
if(key!=='telegram') {
    if (Array.isArray(this.news[key]) || key === 'cats') {
        for (var category in this.news[key]) {
            data.append(key + '[]', this.news[key][category]);
        }
    } else
        data.append(key, this.news[key]);
}
                }
                data.append("_method", "put");
                data.append("translates", JSON.stringify(this.langtext));
                api.updateNews(this.news.id, data).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                }).catch((error) => {
                    this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                    console.log(error)
                })
            }

        },
        onUpdate({getJSON, getHTML}) {
            this.json = getJSON();
            this.html = getHTML();
        }

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor
    },
}
</script>
<style>
.news-main .v-data-table button.new_item {
    margin-top: -77px;
}

.news-main .v-card.v-sheet {
    margin-top: 50px;
}
</style>
