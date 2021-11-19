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
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="pageForm">

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field label="Сарлавха"
                                                                  v-model="editedItem.title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>

                                            <v-col cols="12" sm="12" md="12">
                                                <ValidationProvider name="Сахифа тексти" rules="required|min:3"
                                                                    v-slot="{ errors }">
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
                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch label="Фойдаланувчиларга кўрсатиш"
                                                          v-model="editedItem.publish"
                                                          name="publish"></v-switch>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch
                                                    v-model="menu"
                                                    inset
                                                    :label="menu ? `Бош сахифада чиқарилсин` : `Бош сахифада чиқарилмасин`">
                                                </v-switch>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="menu">
                                                <treeselect v-model="editedItem.menu" :options="menus"
                                                            noChildrenText="Қуйи даража менюлар топилмади"
                                                            placeholder="Юкори даража менюни танланг"
                                                            style="margin-top: 10px"
                                                />
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
import api from "./../../../src/services/apiService";
import {extend, ValidationProvider, ValidationObserver} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import messages from '../../../locales/uz.json';
import Editor from '@tinymce/tinymce-vue';
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages.messages[rule] // assign message

    });
});
function menuTree(menu) {
    if (menu.children)
        return {
            id: menu.id,
            label: menu.title,
            children: menu.children.map(function (child) {
                return menuTree(child);
            })
        }
    else return {
        id: menu.id,
        label: menu.title,
    }

}

export default {
    name: "PageCreate",
    data: () => ({
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Сахифалар', to: '/admin/pages', exact: true},
                    {text: 'Сахифа яратиш', to: '#', exact: true, disabled: true},
                ],
            pages: [],
            menu: false,
            menus: [],
            editedIndex: -1,
            editedItem: {
                id: null,
                title: '',
                slug: '',
                menu: null,
                description: '',
            },
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
        initialize() {
            api.readPages().then((response) => {

                this.pages = response.data;
            }).catch((error) => {
                this.$store.dispatch('setSnackbar', {
                    color: 'error',
                    text: 'Маълумотларни юклашда хатолик содир бўлди!'
                });
                console.log(error)
            })
            api.readMenusFront().then((response) => {
                this.menus = response.data.map(function (menu) {
                    if (menu.children)
                        return {
                            id: menu.id,
                            label: menu.title,
                            children: menu.children.map(function (child) {
                                return menuTree(child);
                            })
                        }
                    else return {
                        id: menu.id,
                        label: menu.title,
                    }


                });
                console.log(this.menus)

            }).catch((error) => {
                this.$store.dispatch('setSnackbar', {
                    color: 'error',
                    text: 'Маълумотларни юклашда хатолик содир бўлди!'
                });
                console.log(error)
            })
        },/*
        handleUploadImage(event, insertImage, files) {
            // Get the files and upload them to the file server, then insert the corresponding content into the editor
            // Here is just an example
            insertImage({
                url:
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
                desc: 'desc',
                // width: 'auto',
                // height: 'auto',
            });
        },*/

        close() {
            this.$router.replace("/admin/pages").catch(() => {
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.pages[this.editedIndex], this.editedItem)
            } else {
                const isValid = await this.$refs.pageForm.validate();
                if (isValid) {
                    if (this.menu && !(this.editedItem.menu > 0)) {
                        this.$store.dispatch('setSnackbar', {
                            color: 'warning',
                            text: 'Сиз юқори даража менюни танламадингиз!'
                        });
                        return false;
                    }
                    this.editedItem.inMenu = this.menu;
                    api.addPage(this.editedItem).then((response) => {
                        this.$store.dispatch('setSnackbar', {
                            color: 'default',
                            text: 'Маълумотларни омадли тарзда юкланди!'
                        });
                        this.close()
                    }).catch((error) => {
                        this.$store.dispatch('setSnackbar', {
                            color: 'error',
                            text: 'Маълумотларни юклашда хатолик содир бўлди!'
                        });
                        console.log(error)
                    })
                }
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
        onUpdate({getJSON, getHTML}) {
            this.json = getJSON()
            this.html = getHTML()
            console.log('html', this.html)
        }

    },
    components: {
        ValidationProvider,
        ValidationObserver,
        Editor,
        Treeselect
    },
}
</script>
<style>
.page-main .v-data-table button.new_item {
    margin-top: -77px;
}
</style>
