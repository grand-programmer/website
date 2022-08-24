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
                <v-btn v-for="language in languages" @click="lang=language.value"
                       :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
                </v-btn>
                <v-flex xs12 sm12 md12 lg12>
                    <v-card>
                        <ValidationObserver v-slot="{ invalid }">
                            <v-form ref="pageForm">
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                                                <ValidationProvider name="Сарлавха" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                  v-model="page.title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" :key="'title'+langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                                                <ValidationProvider name="Сарлавха"                                                                     v-slot="{ errors }">
                                                    <v-text-field :label="'Сарлавха - '+ getLang()['text']"
                                                                  v-model="langtext[lang].title"
                                                                  name="title"></v-text-field>
                                                    <span class="error--text">{{ errors[0] }}</span>
                                                </ValidationProvider>

                                            </v-col>
                                            <v-col cols="12" sm="12" md="12" v-show="lang==='uz'" >

                                                <ValidationProvider name="Сахифа тексти" rules="required|min:3"
                                                                    v-slot="{ errors }">
                                                    <editor ref="tinymce_editor"
                                                            api-key="08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7"
                                                            v-model="page.description"
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
                                                                valid_elements:'a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev'
                                                                  +'|shape<circle?default?poly?rect|style|tabindex|title|target|type],'
                                                                +'abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase'
                                                                  +'|height|hspace|id|name|object|style|title|vspace|width],'
                                                                +'area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup'
                                                                  +'|shape<circle?default?poly?rect|style|tabindex|title|target],'
                                                                +'base[href|target],'
                                                                +'basefont[color|face|id|size],'
                                                                +'bdo[class|dir<ltr?rtl|id|lang|style|title],'
                                                                +'big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'blockquote[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title],'
                                                                +'body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink],'
                                                                +'br[class|clear<all?left?none?right|id|style|title],'
                                                                +'button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur'
                                                                  +'|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type'
                                                                  +'|value],'
                                                                +'caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
                                                                  +'|valign<baseline?bottom?middle?top|width],'
                                                                +'colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl'
                                                                  +'|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
                                                                  +'|valign<baseline?bottom?middle?top|width],'
                                                                +'dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'font[class|color|dir<ltr?rtl|face|id|lang|size|style|title],'
                                                                +'form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang'
                                                                  +'|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit'
                                                                  +'|style|title|target],'
                                                                +'frame[class|frameborder|id|longdesc|marginheight|marginwidth|name'
                                                                  +'|noresize<noresize|scrolling<auto?no?yes|src|style|title],'
                                                                +'frameset[class|cols|id|onload|onunload|rows|style|title],'
                                                                +'h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'head[dir<ltr?rtl|lang|profile],'
                                                                +'hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|size|style|title|width],'
                                                                +'html[dir<ltr?rtl|lang|version],'
                                                                +'iframe[align<bottom?left?middle?right?top|class|frameborder|height|id'
                                                                  +'|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style'
                                                                  +'|title|width],'
                                                                +'img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height'
                                                                  +'|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|src|style|title|usemap|vspace|width],'
                                                                +'input[accept|accesskey|align<bottom?left?middle?right?top|alt'
                                                                  +'|checked<checked|class|dir<ltr?rtl|disabled<disabled|id|ismap<ismap|lang'
                                                                  +'|maxlength|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
                                                                  +'|readonly<readonly|size|src|style|tabindex|title'
                                                                  +'|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text'
                                                                  +'|usemap|value],'
                                                                +'ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'isindex[class|dir<ltr?rtl|id|lang|prompt|style|title],'
                                                                +'kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick'
                                                                  +'|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title],'
                                                                +'legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang'
                                                                  +'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type'
                                                                  +'|value],'
                                                                +'link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type],'
                                                                +'map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'menu[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme],'
                                                                +'noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'noscript[class|dir<ltr?rtl|id|lang|style|title],'
                                                                +'object[align<bottom?left?middle?right?top|archive|border|class|classid'
                                                                  +'|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name'
                                                                  +'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap'
                                                                  +'|vspace|width],'
                                                                +'ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|start|style|title|type],'
                                                                +'optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|selected<selected|style|title|value],'
                                                                +'p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'param[id|name|type|value|valuetype<DATA?OBJECT?REF],'
                                                                +'pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title|width],'
                                                                +'q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'script[charset|defer|language|src|type],'
                                                                +'select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name'
                                                                  +'|onblur|onchange|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style'
                                                                  +'|tabindex|title],'
                                                                +'small[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'style[dir<ltr?rtl|lang|media|title|type],'
                                                                +'sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class'
                                                                  +'|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules'
                                                                  +'|style|summary|title|width],'
                                                                +'tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
                                                                  +'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
                                                                  +'|style|title|valign<baseline?bottom?middle?top|width],'
                                                                +'textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
                                                                  +'|readonly<readonly|rows|style|tabindex|title],'
                                                                +'tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
                                                                  +'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
                                                                  +'|style|title|valign<baseline?bottom?middle?top|width],'
                                                                +'thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'title[dir<ltr?rtl|lang],'
                                                                +'tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class'
                                                                  +'|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title|valign<baseline?bottom?middle?top],'
                                                                +'tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title|type],'
                                                                +'var[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title]',
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
                                            <v-col cols="12" sm="12" md="12" :key="'lang'+langKey"
                                                   v-for="(langItem,langKey) in langtext" v-show="lang===langKey" >

                                                <ValidationProvider name="Сахифа тексти"
                                                                    v-slot="{ errors }">
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
                                                                valid_elements:'a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev'
                                                                  +'|shape<circle?default?poly?rect|style|tabindex|title|target|type],'
                                                                +'abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase'
                                                                  +'|height|hspace|id|name|object|style|title|vspace|width],'
                                                                +'area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup'
                                                                  +'|shape<circle?default?poly?rect|style|tabindex|title|target],'
                                                                +'base[href|target],'
                                                                +'basefont[color|face|id|size],'
                                                                +'bdo[class|dir<ltr?rtl|id|lang|style|title],'
                                                                +'big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'blockquote[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title],'
                                                                +'body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink],'
                                                                +'br[class|clear<all?left?none?right|id|style|title],'
                                                                +'button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur'
                                                                  +'|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type'
                                                                  +'|value],'
                                                                +'caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
                                                                  +'|valign<baseline?bottom?middle?top|width],'
                                                                +'colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl'
                                                                  +'|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
                                                                  +'|valign<baseline?bottom?middle?top|width],'
                                                                +'dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'font[class|color|dir<ltr?rtl|face|id|lang|size|style|title],'
                                                                +'form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang'
                                                                  +'|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit'
                                                                  +'|style|title|target],'
                                                                +'frame[class|frameborder|id|longdesc|marginheight|marginwidth|name'
                                                                  +'|noresize<noresize|scrolling<auto?no?yes|src|style|title],'
                                                                +'frameset[class|cols|id|onload|onunload|rows|style|title],'
                                                                +'h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'head[dir<ltr?rtl|lang|profile],'
                                                                +'hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|size|style|title|width],'
                                                                +'html[dir<ltr?rtl|lang|version],'
                                                                +'iframe[align<bottom?left?middle?right?top|class|frameborder|height|id'
                                                                  +'|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style'
                                                                  +'|title|width],'
                                                                +'img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height'
                                                                  +'|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|src|style|title|usemap|vspace|width],'
                                                                +'input[accept|accesskey|align<bottom?left?middle?right?top|alt'
                                                                  +'|checked<checked|class|dir<ltr?rtl|disabled<disabled|id|ismap<ismap|lang'
                                                                  +'|maxlength|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
                                                                  +'|readonly<readonly|size|src|style|tabindex|title'
                                                                  +'|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text'
                                                                  +'|usemap|value],'
                                                                +'ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'isindex[class|dir<ltr?rtl|id|lang|prompt|style|title],'
                                                                +'kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick'
                                                                  +'|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title],'
                                                                +'legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang'
                                                                  +'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type'
                                                                  +'|value],'
                                                                +'link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type],'
                                                                +'map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'menu[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme],'
                                                                +'noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'noscript[class|dir<ltr?rtl|id|lang|style|title],'
                                                                +'object[align<bottom?left?middle?right?top|archive|border|class|classid'
                                                                  +'|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name'
                                                                  +'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap'
                                                                  +'|vspace|width],'
                                                                +'ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|start|style|title|type],'
                                                                +'optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|selected<selected|style|title|value],'
                                                                +'p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'param[id|name|type|value|valuetype<DATA?OBJECT?REF],'
                                                                +'pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
                                                                  +'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
                                                                  +'|onmouseover|onmouseup|style|title|width],'
                                                                +'q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'script[charset|defer|language|src|type],'
                                                                +'select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name'
                                                                  +'|onblur|onchange|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style'
                                                                  +'|tabindex|title],'
                                                                +'small[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title],'
                                                                +'strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'style[dir<ltr?rtl|lang|media|title|type],'
                                                                +'sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title],'
                                                                +'table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class'
                                                                  +'|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules'
                                                                  +'|style|summary|title|width],'
                                                                +'tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
                                                                  +'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
                                                                  +'|style|title|valign<baseline?bottom?middle?top|width],'
                                                                +'textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name'
                                                                  +'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
                                                                  +'|readonly<readonly|rows|style|tabindex|title],'
                                                                +'tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
                                                                  +'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
                                                                  +'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
                                                                  +'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
                                                                  +'|style|title|valign<baseline?bottom?middle?top|width],'
                                                                +'thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
                                                                  +'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
                                                                  +'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
                                                                  +'|valign<baseline?bottom?middle?top],'
                                                                +'title[dir<ltr?rtl|lang],'
                                                                +'tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class'
                                                                  +'|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title|valign<baseline?bottom?middle?top],'
                                                                +'tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
                                                                  +'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
                                                                +'ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
                                                                  +'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
                                                                  +'|onmouseup|style|title|type],'
                                                                +'var[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
                                                                  +'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
                                                                  +'|title]',
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
                                                          v-model="page.publish"
                                                          name="publish"></v-switch>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3">
                                                <v-switch
                                                    v-model="menu"
                                                    inset
                                                    :label="menu ? `Бош сахифада чиқарилсин` : `Бош сахифада чиқарилмасин`">
                                                </v-switch>
                                            </v-col>
                                            <v-col cols="3" sm="3" md="3" v-if="(menu && pageInMenu)" >
                                                <label>Юкори даража менюни танланг</label>
                                                <treeselect v-model="page.menu" :options="menus"
                                                            noChildrenText="Қуйи даража менюлар топилмади"
                                                            placeholder="Юкори даража менюни танланг"

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
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
    name: "PageCreate",
    data: () => ({
            content: '<h1>Initial Content</h1>',
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {
                        modules: ['Resize']
                    }
                }
            },
            breadcrumb_items:
                [
                    {text: 'Админ панел', to: '/admin', exact: true},
                    {text: 'Сахифалар', to: '/admin/pages', exact: true},
                    {text: 'Сахифаларни тахрирлаш', to: '#', exact: true, disabled: true},
                ],
            page: [],
            lang: 'uz',
            langtext: {
                oz: {
                    title: null,
                    description: null,
                },
                ru: {
                    title: null,
                    description: null,
                },
                en: {
                    title: null,
                    description: null,
                }


            },
            languages: [
                {text: 'Ўзбекча', value: 'uz'},
                {text: 'Русча', value: 'ru'},
                {text: 'Инглизча', value: 'en'},
                {text: 'Ozbekcha', value: 'oz'}
            ],
            pageInMenu:false,
            menus: [],
            menu: false,
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
            api.readPage(this.$route.params.id).then((response) => {
                this.page = response.data.data;

                if (typeof _this.page.translates !== 'undefined' && _this.page.translates && _this.page.translates.length>0 ) {
                    _this.page.translates.map(function(translate){
                        _this.langtext[translate.language]=translate;
                    })
                }


                if(this.page.menu > 0) {
                    this.menu = true;
                    this.pageInMenu = false;
                }
                if(this.page.menu < 0) {
                    this.menu = false;
                    this.pageInMenu=true;
                    this.page.menu=null;
                }
            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                this.$router.replace("/admin/pages").catch(() => {
                });
            })
            api.readMenusFront().then((response) => {
                this.menus = response.data.map(function (menu) {
                    if (menu.children)
                        return {
                            id: menu.id,
                            label: menu.title,
                            children: menu.children.map(function (child) {
                                return {
                                    id: child.id,
                                    label: child.title,
                                }
                            })
                        }
                    else return {
                        id: menu.id,
                        label: menu.title,
                    }


                });
                console.log(this.menus)

            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                console.log(error)
            })
        },
        close() {
            this.$router.replace('/admin/pages');
        },

        async save() {
            const isValid = await this.$refs.pageForm.validate();
            if (isValid) {
                this.page.inMenu=this.pageInMenu;
                this.page.translates=this.langtext;

                api.updatePage(this.page.id, this.page).then((response) => {
                    this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
                }).catch((error) => {
                    this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)

                })
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
            this.json = getJSON();
            this.html = getHTML();
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
