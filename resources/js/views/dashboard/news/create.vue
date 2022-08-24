<template>
    <v-container
        class="page-main"
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
                <v-col class="m-4 " cols="12" >
                    <v-btn v-for="language in languages" @click="lang=language.value"
                           :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                    </v-btn>
                </v-col>


                <v-flex xs12 sm12 md12 lg12>
                    <v-card class="m-4">

                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="pageForm" enctype="multipart/form-data">
                                <v-card-text>
                                    <v-container>

                                        <v-row>
                                            <v-col cols="6" sm="6" md="6">
                                                <v-row>
                                                    <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                        <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                          v-model="editedItem.title"
                                                                          name="title"></v-text-field>
                                                            <span class="error--text">{{ errors[0] }}</span>
                                                        </ValidationProvider>

                                                    </v-col>
                                                    <v-col cols="12" sm="12" md="12"  :key="'title'+langKey"
                                                           v-for="(langItem,langKey) in langtext" v-show="lang===langKey" >
                                                        <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                            v-slot="{ errors }">
                                                            <v-text-field :label="'Сарлавха - '+ getLang()['text']"
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
                                                                v-model="editedItem.categories"
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
                                                            v-model="editedItem.home"
                                                            inset
                                                            name="home"
                                                            :label="editedItem.home ? `Бош сахифада чиқарилсин` : `Бош сахифада чиқарилмасин`">
                                                        </v-switch>
                                                    </v-col>

                                                    <v-col cols="6">
                                                        <v-autocomplete clearable persistent-hint label="Бошқармани белгиланг" :items="boshqarmalar" item-text="title" item-value="id" v-model="editedItem.boshqarma"></v-autocomplete>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col>
                                                        <v-file-input
                                                            v-model="editedItem.image"
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

                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Қисқача мазмуни" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <label>Қисқача - {{ languages[0]['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="editedItem.short"
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
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
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
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="editedItem.description"
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
                                            <v-col cols="12" sm="12" md="12" :key="'description' + langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Сахифа тексти"
                                                                    v-slot="{ errors }">
                                                    <label>Тўлиқ тексти - {{ getLang(langKey)['text'] }}</label>
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="langtext[langKey].description"
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
import Editor from '@tinymce/tinymce-vue';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});

export default {
    name: "NewsCreate",
    data: () => ({
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
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            preview: '',
            allnews: [],
            categories: [],
            editedIndex: -1,
            editedItem: {
                id: null,
                title: '',
                slug: '',
                description: '',
                image: null,
                category: 0,
            },
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Янгиликлар', to: '/admin/news', exact: true},
                    {text: 'Янгилик яратиш', to: '/admin/news/create', exact: true},
                ],
            boshqarmalar:[],//[{value:"1700",text:"'Тошкент-АЭРО' ИБК"},{value:"1703",text:"Андижон вилояти божхона бошқармаси"},{value:"1706",text:"Бухоро вилояти божхона бошқармаси"},{value:"1708",text:"Жиззах вилояти божхона бошқармаси"},{value:"1710",text:"Қашқадарё вилояти божхона бошқармаси"},{value:"1712",text:"Навоий вилояти божхона бошқармаси"},{value:"1714",text:"Наманган вилояти божхона бошқармаси"},{value:"1718",text:"Самарқанд вилояти божхона бошқармаси"},{value:"1722",text:"Сурхондарё вилояти божхона бошқармаси"},{value:"1724",text:"Сирдарё вилояти божхона бошқармаси"},{value:"1726",text:"Тошкент шахар божхона бошқармаси"},{value:"1727",text:"Тошкент вилояти божхона бошқармаси"},{value:"1730",text:"Фарғона вилояти божхона бошқармаси"},{value:"1733",text:"Хоразм вилояти божхона бошқармаси"},{value:"1735",text:"Қорақалпоғистон Республикаси божхона бошқармаси"}]
        }
    ),

    computed: {
        formTitle() {
            return 'Янги';
        },

    },
    created() {
        this.initialize();
    },

    methods: {

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
            const _this=this;
            api.readCategoriesForSelect().then((response) => {
                this.categories = response.data;
            }).catch((error) => {
                console.log(error);
                this.$toast.error('Категорияларни олишда хатолик юз берди!');

            });
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
                this.editedItem.image = input;
                reader.readAsDataURL(input);
            }
        },

        close() {
            this.$router.replace("/admin/news").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.allnews[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {

                    const data = new FormData();
                    for (var key in this.editedItem) {
                        if(Array.isArray(this.editedItem[key]) || key==='categories') {
                            for (var category in this.editedItem[key]) {
                                data.append(key + '[]', this.editedItem[key][category]);
                            }
                        }
                        else
                            data.append(key, this.editedItem[key]);
                    }
                    data.append("translates", JSON.stringify(this.langtext));
                    api.addNews(data).then((response) => {
                        this.$toast.success(`Маълумотларни омадли тарзда юкланди!`);
                        this.close();

                    }).catch((error) => {
                        this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                        console.log(error)
                    })
                }
            }

        },
        onUpdate({getJSON, getHTML}) {
            this.json = getJSON()
            this.html = getHTML()
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

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}

.page-main .v-card.v-sheet {
    margin-top: 50px;
}
</style>
