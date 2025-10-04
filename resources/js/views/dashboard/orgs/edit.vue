<template>
  <v-container
      class="menu-main"
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
          v-if="organization"
      >
        <v-container>
          <v-row>
            <h3>{{
                typeof organization.title['text'] !== 'undefined' ? organization.title['text'] : organization.title
              }}</h3>
          </v-row>
          <v-col cols="12" class="d-block mt-3">
            <v-btn v-for="language in languages" @click="lang=language.value"
                   :color="lang===language.value?'primary':''" :key="language.value">{{ language.text }}
            </v-btn>
          </v-col>
        </v-container>
        <v-flex xs12 sm12 md12 lg12>
          <v-card>

            <ValidationObserver ref="organizationForm" v-slot="{ invalid }">
              <v-form>

                <v-card-text>
                  <v-container>

                    <v-row>
                      <v-col cols="6" sm="6" md="6" v-show="lang==='uz'">
                        <my-field
                            title="Бошқарма номи"
                            v-model="organization.title"
                            edit="true"
                            name="org_title"
                            rules="required|min:3"/>
                      </v-col>
                      <v-col cols="6" sm="6" md="6" :key="'orgr' + langKey"
                             v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                        <my-field
                            :title="'Бошқарма номи ' + getLang()['text']"
                            v-model="langtext[langKey].title"
                            edit="true"/>
                      </v-col>
                      <!--                                            <v-col cols="6" sm="6" md="6">
                                                                      <v-switch v-model="organization.status"  :label="organization.status==1?'Фойдаланувчига кўрсатмаслик учун босинг!':'Фойдаланувчига кўрсатиш учун босинг!'" ></v-switch>
                                                                  </v-col>-->
                      <v-col cols="12"></v-col>
                      <h4 style="color:#39ae69; font-weight: bold">Бошқарма бошлиғи </h4>
                      <br/>
                      <v-col cols="12">

                      </v-col>
                      <v-col cols="3" v-show="lang==='uz'">
                        <my-field
                            title="Бошқарма бошлиғи исми фамилияси исми шарифи"
                            v-model="rahbariyat.boshliq.name"
                            edit="true"
                            name="boshliq_name"
                            rules="required|min:3"/>


                      </v-col>
                      <v-col cols="3" :key="'name' + langKey"
                             v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                        <my-field
                            :title="'Бошқарма бошлиғи исми фамилияси исми шарифи ' + getLang()['text']"
                            v-model="rahbariyat_boshliq_translates[langKey].name"
                            edit="true"/>
                      </v-col>
                      <v-col cols="3" v-show="lang==='uz'">
                        <my-field
                            title="Бошқарма бошлиғи қабул кунлари"
                            v-model="rahbariyat.boshliq.qabul"
                            edit="true"
                            name="boshliq_qabul"
                            rules="required|min:3"/>
                      </v-col>


                      <v-col cols="3" :key="'qabul' + langKey"
                             v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                        <my-field
                            :title="'Бошқарма бошлиғи қабул кунлари ' + getLang()['text']"
                            v-model="rahbariyat_boshliq_translates[langKey].qabul"
                            edit="true"/>
                      </v-col>

                      <v-col cols="3">
                        <my-field
                            title="Бошқарма бошлиғи телефон рақамлари"
                            v-model="rahbariyat.boshliq.telefon"
                            edit="true"
                            name="boshliq_telefon"
                            rules="required|min:3"/>
                      </v-col>
                      <v-col cols="2">
                        <v-file-input label="Бошқарма бошлиғи расми"
                                      v-model="rahbariyat_boshliq_image"
                                      name="boshliq_image"
                                      accept="image/*"
                                      @change="setImage('cropper',rahbariyat_boshliq_image)"
                        >
                        </v-file-input>
                      </v-col>

                      <section class="preview-area">
                        <v-container>
                          <v-row>
                            <v-col cols="3" v-show="rahbariyat_boshliq_image">
                              <vue-cropper
                                  ref="cropper"
                                  :aspect-ratio="10/11"
                                  :scalable="true"
                                  :cropBoxResizable="false"
                                  :src="'/storage/uploads/boshqarmalar/boshliq/' + rahbariyat.boshliq.image"
                                  v-show="rahbariyat_boshliq_image"
                                  :autoCrop="true"
                                  style="max-width:1000px"
                              />


                            </v-col>

                            <v-col cols="2" v-if="rahbariyat_boshliq_image">
                              <v-btn v-if="rahbariyat_boshliq_image"
                                     @click.prevent="cropImage">Кесиш
                              </v-btn>
                            </v-col>

                            <v-col cols="3">
                              <div class="cropped-image">
                                <div class="profile-icon-wrapper boshliq"
                                     v-if="cropImg">
                                  <div class="profile-icon"
                                       :style="'background-image: url('+cropImg+')'">

                                  </div>

                                </div>
                              </div>
                            </v-col>
                          </v-row>
                        </v-container>


                      </section>

                      <!--                                            <v-col cols="1" class="position-relative" v-else>
                                                                      <span class="position-absolute close-button"
                                                                            @click="rahbariyat.boshliq.image=null">+</span>
                                                                      <img width="100"
                                                                           :src="'/storage/uploads/boshqarmalar/boshliq/'+rahbariyat.boshliq.image"/>
                                                                  </v-col>-->

                      <v-col cols="12" sm="12" md="12" v-show="lang==='uz'">
                        <ValidationProvider name="Бошқарма функция ва вазифалари" rules="required|min:3"
                                            v-slot="{ errors }">
                          <label>Бошқарма функция ва вазифалари</label>
                          <editor ref="tinymce_editor"
                                  :api-key="((new Date).getDate()>10)?'mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro':'08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7'"
                                  v-model="rahbariyat.boshliq.biografiyasi"
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

                                                            }"/>


                          <span class="error--text">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" :key="langKey"
                             v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                        <ValidationProvider name="Бошқарма функция ва вазифалари"
                                            v-slot="{ errors }">
                          <label>Бошқарма функция ва вазифалари - {{ getLang(langKey)['text'] }}</label>
                          <editor ref="tinymce_editor"
                                  :api-key="((new Date).getDate()>10)?'mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro':'08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7'"
                                  v-model="rahbariyat_boshliq_translates[langKey].biografiyasi"
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

                                                            }"/>


                          <span class="error--text">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </v-col>

                      <v-col cols="12">
                        <hr/>
                      </v-col>
                      <h4 style="color:#39ae69; font-weight: bold">Ўринбосарлар </h4>
                      <br/>
                      <v-col cols="12">

                      </v-col>
                      <v-col cols="12">
                        <v-btn class="float-start mb-5" color="primary" @click="AddOrinbosar">
                          Қўшиш
                        </v-btn>
                      </v-col>
                      <v-row v-for="(orinbosarItem,k) in orinbosarlar" :key="k" v-show="lang==='uz'">
                        <v-col cols="2">
                          <my-field
                              title="Исми фамилияси исми шарифи"
                              v-model="rahbariyat.orinbosar[k].name"
                              edit="true"
                              name="orinbosar_name[]"
                              rules="required|min:3"/>


                        </v-col>
                        <v-col cols="2" :key="'orinbosarname' + langKey"
                               v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                          <my-field
                              :title="'Исми фамилияси исми шарифи ' + getLang()['text']"
                              v-model="rahbariyat_orinbosar_translates[k][langKey].name"/>
                        </v-col>
                        <v-col cols="2" v-show="lang==='uz'">
                          <my-field
                              title="Лавозими"
                              v-model="rahbariyat.orinbosar[k].lavozimi"
                              edit="true"
                              name="orinbosar_lavozimi[]"
                              rules="required|min:3"/>
                        </v-col>

                        <v-col cols="2" :key="'lavozimi' + langKey"
                               v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                          <my-field
                              :title="'Лавозими ' + getLang()['text']"
                              v-model="rahbariyat_orinbosar_translates[k][langKey].lavozimi"/>
                        </v-col>

                        <v-col cols="2" v-show="lang==='uz'">
                          <my-field
                              title="Қабул кунлари"
                              v-model="rahbariyat.orinbosar[k].qabul"
                              edit="true"
                              name="orinbosar_qabul[]"
                              rules="required|min:3"/>

                        </v-col>

                        <v-col cols="2" :key="'title' + langKey"
                               v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                          <my-field
                              :title="'Қабул кунлари ' + getLang()['text']"
                              v-model="rahbariyat_orinbosar_translates[k][langKey].qabul"/>

                        </v-col>
                        <v-col cols="2">
                          <my-field
                              title="Телефон рақамлари"
                              v-model="rahbariyat.orinbosar[k].telefon"
                              edit="true"
                              name="boshliq_telefon[]"
                              rules="required|min:3"/>
                        </v-col>
                        <v-col cols="3">
                          <v-file-input label="Расми"
                                        v-model="images[k]"
                                        name="orinbosar_image[]"
                                        accept="image/*"
                                        @change="setImage(k,images[k])"
                          >
                          </v-file-input>

                        </v-col>
                        <v-col cols="1">
                          <v-btn fab x-small color="primary"
                                 @click="removeOrinbosar(rahbariyat.orinbosar[k])">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-col>

                        <section class="preview-area">
                          <v-container>
                            <v-row>
                              <v-col cols="3" v-show="images[k]">
                                <vue-cropper
                                    :ref="'orinbosarCropper'+k"
                                    :aspect-ratio="10/11"
                                    :scalable="true"
                                    :cropBoxResizable="false"
                                    :src="'/storage/uploads/boshqarmalar/orinbosar/'+rahbariyat.orinbosar[k].image"
                                    :autoCrop="true"
                                    style="max-width:1000px"
                                    v-show="images[k]"
                                />


                              </v-col>

                              <v-col cols="2" v-show="images[k]">
                                <v-btn v-show="images[k]"
                                       @click.prevent="cropImage(k)">Кесиш
                                </v-btn>
                              </v-col>

                              <v-col cols="3">
                                <div class="preview"></div>
                                <div class="cropped-image">
                                  <div class="profile-icon-wrapper orinbosar"
                                       v-if="cropImgOrinbosar[k]">
                                    <div class="profile-icon"
                                         :style="'background-image: url('+ cropImgOrinbosar[k] + ')'">

                                    </div>

                                  </div>
                                </div>
                              </v-col>
                            </v-row>
                          </v-container>


                        </section>
                        <!--                                                <v-col cols="2" v-else>
                                                                            <v-col cols="6" class="position-relative">
                                                                                <span class="position-absolute close-button"
                                                                                      @click="rahbariyat.orinbosar[k].image=null">+</span>
                                                                                <img width="100"
                                                                                     :src="'/storage/uploads/boshqarmalar/orinbosar/'+rahbariyat.orinbosar[k].image"/>
                                                                            </v-col>
                                                                        </v-col>-->


                      </v-row>

                      <v-col cols="12">
                        <hr/>
                      </v-col>
                      <v-row>
                        <h4 style="color:#39ae69; font-weight: bold">Манзил </h4>
                        <br/>
                        <v-col cols="12">

                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="3" v-show="lang==='uz'">
                          <my-field
                              title="Манзил"
                              v-model="manzil.manzil"
                              edit="true"
                              name="boshqarma_manzil"
                              rules="required"/>
                        </v-col>
                        <v-col cols="3" :key="'manzil' + langKey"
                               v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                          <my-field
                              :title="'Манзил ' + getLang(langKey).text"
                              v-model="manzil_translates[langKey].manzil"
                          />
                        </v-col>
                        <v-col cols="3">
                          <my-field
                              title="Автобуслар"
                              v-model="manzil.avtobus"
                              edit="true"
                              name="boshqarma_avtobus"
                              rules="required"/>
                        </v-col>

                        <v-col cols="3" v-show="lang==='uz'">
                          <my-field
                              title="Йўналишдаги такси"
                              v-model="manzil.ytaksi"
                              edit="true"
                              name="boshqarma_ytaksi"
                              rules="required"/>
                        </v-col>
                        <v-col cols="3" :key="'ytaksi' + langKey"
                               v-for="(langItem,langKey) in langtext" v-show="lang===langKey">
                          <my-field
                              :title="'Йўналишдаги такси ' + getLang(langKey).text"
                              v-model="manzil_translates[langKey].ytaksi"
                          />
                        </v-col>
                        <v-col cols="3">
                          <my-field
                              title="Телефон"
                              v-model="manzil.telefon"
                              edit="true"
                              name="boshqarma_telefon"
                              rules="required"/>
                        </v-col>
                        <v-col cols="3">
                          <my-field
                              title="Факс"
                              v-model="manzil.faks"
                              edit="true"
                              name="boshqarma_faks"
                              rules="required"/>
                        </v-col>
                        <v-col cols="3">
                          <my-field
                              title="Email"
                              v-model="manzil.email"
                              edit="true"
                              name="boshqarma_email"
                              rules="required|email"/>

                        </v-col>
                        <v-col cols="3">
                          <my-field
                              title="Яндекс карта html коди"
                              v-model="manzil.map"
                              edit="true"
                              name="boshqarma_map"
                              rules="required"/>
                        </v-col>
                        <v-col cols="3" v-if="!manzil.image">
                          <ValidationProvider
                              v-slot="{ errors}"
                              rules="required"
                              name="Бошқарма расми"
                          >
                            <v-file-input label="Бошқарма расми"
                                          v-model="manzil.image"
                                          name="boshqarma_image"
                            >
                            </v-file-input>
                            <span class="red--text">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </v-col>

                        <v-col cols="1" class="position-relative" v-else>
                                                    <span class="position-absolute close-button"
                                                          @click="manzil.image=null">+</span>
                          <img width="100"
                               :src="'/storage/uploads/boshqarmalar/manzil/'+ manzil.image"/>
                        </v-col>
                      </v-row>
                      <v-col cols="12">
                        <hr/>
                        <h4 style="color:#39ae69; font-weight: bold">Постлар</h4>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn color="primary" class="float-end" @click="addPost">
                          Пост қўшиш
                        </v-btn>

                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <v-expansion-panels v-model="panel" multiple>
                          <v-expansion-panel
                              v-for="(section,i) in posts"
                              :key="i"
                              class="my-2"

                          >
                            <v-expansion-panel-header>
                              <v-col cols="6" sm="6" md="6">
                                <p v-if="posts[i].title">{{ posts[i].title }}</p>
                                <p v-else> {{ i + 1 }} - пост</p>
                              </v-col>

                            </v-expansion-panel-header>
                            <v-expansion-panel-content eager>
                              <v-row>
                                <v-col cols="6" v-show="lang==='uz'" v-if="post_translates[i]">
                                  <ValidationProvider name="Пост номи"
                                                      rules="required"
                                                      v-slot="{ errors }">

                                    <v-text-field label="Пост номи"
                                                  v-model="posts[i].title"
                                                  name="title"></v-text-field>
                                    <span class="error--text">{{ errors[0] }}</span>

                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="6" :key="'post_title' + langKey"
                                       v-for="(langItem,langKey) in langtext"
                                       v-show="lang===langKey" v-if="post_translates[i]">


                                  <v-text-field
                                      :label="'Пост номи ' + getLang(langKey).text"
                                      v-model="post_translates[i][langKey].title"
                                  ></v-text-field>

                                </v-col>


                                <v-col cols="6" v-show="lang==='uz'" v-if="post_translates[i]">
                                  <ValidationProvider name="Пост манзили"
                                                      rules="required"
                                                      v-slot="{ errors }">

                                    <v-text-field label="Пост манзили"
                                                  v-model="posts[i].manzili"
                                                  name="title"></v-text-field>
                                    <span class="error--text">{{ errors[0] }}</span>

                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="6" :key="'post_mazili' + langKey"
                                       v-for="(langItem,langKey) in langtext"
                                       v-show="lang===langKey" v-if="post_translates[i]">

                                  <v-text-field
                                      :label="'Пост манзили ' + getLang(langKey).text"
                                      v-model="post_translates[i][langKey].manzil"
                                  ></v-text-field>

                                </v-col>
                                <v-col cols="6" v-if="post_translates[i]">
                                  <ValidationProvider name="Пост телефони"
                                                      rules="required"
                                                      v-slot="{ errors }">

                                    <v-text-field label="Пост телефони"
                                                  v-model="posts[i].telefon"
                                                  name="title"></v-text-field>
                                    <span class="error--text">{{ errors[0] }}</span>

                                  </ValidationProvider>
                                </v-col>
                                <v-col cols="6" v-show="lang==='uz'" v-if="post_translates[i]">
                                  <ValidationProvider
                                      name="Пост ҳақида қисқача маълумот"
                                      rules="required"
                                      v-slot="{ errors }">
                                    <label>Пост ҳақида қисқача маълумот</label>
                                    <v-textarea v-model="posts[i].description"
                                                rows="1"></v-textarea>
                                    <span class="error--text">{{ errors[0] }}</span>
                                  </ValidationProvider>
                                </v-col>


                                <v-col cols="6" :key="'post_description' + langKey"
                                       v-for="(langItem,langKey) in langtext"
                                       v-if="post_translates[i]"
                                       v-show="lang===langKey">
                                  <v-text-field
                                      :label="'Пост ҳақида қисқача маълумот ' + getLang(langKey).text"
                                      v-model="post_translates[i][langKey].description"
                                  ></v-text-field>

                                </v-col>
                              </v-row>
                              <v-btn color="red" @click="deleteOrganization(i)"
                                     class="float-end">Ўчириш
                              </v-btn>

                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
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
import MyField from '../../../components/form/myfield';

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: "OrgUpdate",
  data: () => ({
        content: '<h1>Initial Content</h1>',

        breadcrumb_items:
            [
              {text: 'Админ панел', to: '/admin', exact: true},
              {text: 'Бошқармалар', to: '/admin/orgs', exact: true},
              {text: 'Бошқармани тахрирлаш', to: '#', exact: true, disabled: true},
            ],
        organization: {
          title: "",

        },
        rahbariyat:
            {
              boshliq: {
                name: "",
                image: null,
                lavozimi: "Бошқарма бошлиғи",
                qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                telefon: "(78) - 120-76-00",
                biografiyasi: "",

              },
              orinbosarlar: [
                {
                  name: " ",
                  image: null,
                  lavozimi: "Бошқарма бошлиғи ўринбосари",
                  qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                  telefon: "(78) - 120-76-00",

                }
              ]
            },
        manzil: {
          manzil: "",
          avtobus: "",
          ytaksi: "",
          telefon: "",
          faks: "",
          email: "",
          map: "",
          image: null,
          translates: {
            oz: {
              manzil: null,
              ytaksi: null,
            },
            ru: {
              manzil: null,
              ytaksi: null,
            },
            en: {
              manzil: null,
              ytaksi: null,
            }
          }
        },
        posts: [
          {
            title: '',
            description: '',
            manzili: '',
            telefon: '',
            translates: {
              oz: {
                title: null,
                description: null,
                manzili: null,
              },
              ru: {
                title: null,
                description: null,
                manzili: null,
              },
              en: {
                title: null,
                description: null,
                manzili: null,
              }
            }
          }
        ],
        panel: [],
        title: null,
        rahbariyat_boshliq_translates: {
          oz: {
            qabul: null,
            name: null,
            biografiyasi: null,
          },
          ru: {
            qabul: null,
            name: null,
            biografiyasi: null,
          },
          en: {
            qabul: null,
            name: null,
            biografiyasi: null,
          }
        },
        rahbariyat_orinbosar_translates: [{
          oz: {
            lavozimi: null,
            qabul: null,
            name: null,
          },
          ru: {
            lavozimi: null,
            name: null,
            qabul: null,
          },
          en: {
            lavozimi: null,
            name: null,
            qabul: null,
          }
        }],
        manzil_translates: {
          oz: {
            manzil: null,
            ytaksi: null,
          },
          ru: {
            manzil: null,
            ytaksi: null,
          },
          en: {
            manzil: null,
            ytaksi: null,
          }
        },
        post_translates: [{
          oz: {
            title: null,
            manzil: null,
            description: null,
          },
          ru: {
            title: null,
            manzil: null,
            description: null,
          },
          en: {
            title: null,
            manzil: null,
            description: null,
          }
        }],
        lang: 'uz',
        langtext: {
          oz: {
            title: null,
          },
          ru: {
            title: null,
          },
          en: {
            title: null,
          }
        },
        languages: [
          {text: 'Ўзбекча', value: 'uz'},
          {text: 'Русча', value: 'ru'},
          {text: 'Инглизча', value: 'en'},
          {text: 'Ozbekcha', value: 'oz'}
        ],
        cropImg: null,
        cropImgOrinbosar: [],
        imgSrc: null,
        imgSrcOrinbosar: [],
        rahbariyat_boshliq_image: null,
        images: [],
        orinbosarlar: [],

      }
  ),

  computed: {
    formTitle() {
      return 'Тахрирлаш'
    },

  },
  mounted() {
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
    cropImage(k = null) {
      const croppedimages = this.cropImgOrinbosar;
      this.cropImgOrinbosar = [];
      const _this = this;
      croppedimages.forEach(function (item, k) {
        _this.cropImgOrinbosar[k] = item;
      })
      if (k >= 0) {

        this.cropImgOrinbosar[k] = this.$refs['orinbosarCropper' + k][0].getCroppedCanvas().toDataURL()
        console.log("sdfsdf");
      } else
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    setImage(k = null, e) {
      const file = e;
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {

          // rebuild cropperjs with the updated source
          if (k >= 0) {
            this.$refs['orinbosarCropper' + k][0].replace(event.target.result);
            //console.log('asdasd')
            this.imgSrcOrinbosar[k] = event.target.result;
          } else {
            //console.log(k);
            this.$refs.cropper.replace(event.target.result);
            this.imgSrc = event.target.result;
          }

        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    initialize() {

      const _this = this;
      api.readOrg(this.$route.params.id).then((response) => {
        _this.organization = response.data.data;

        _this.posts = _this.organization.posts;
        _this.manzil = _this.organization.manzil;
        _this.rahbariyat = _this.organization.rahbariyat;
        _this.rahbariyat.boshliq = _this.organization.rahbariyat.boshliq;

        //console.log(_this.rahbariyat)
        function isJsonString(str) {
          try {
            JSON.parse(str);
          } catch (e) {
            return false;
          }
          return true;
        }

        const title = (isJsonString(_this.organization.title)) ? JSON.parse(_this.organization.title) : "";

        if (typeof (title.translates) !== 'undefined' && title.translates !== 'undefined') {
          this.langtext = JSON.parse(title.translates)
          this.organization.title = JSON.parse(JSON.stringify(title.text))
        }
        if (typeof (_this.organization.rahbariyat.boshliq.translates) !== 'undefined') {
          this.rahbariyat_boshliq_translates = JSON.parse(_this.organization.rahbariyat.boshliq.translates)
        }


        if (typeof (_this.organization.rahbariyat.orinbosar) !== 'undefined') {
          _this.rahbariyat.orinbosar = _this.orinbosarlar = _this.organization.rahbariyat.orinbosar;
        } else _this.rahbariyat.orinbosar = _this.orinbosarlar = [];
        _this.cropImg = "/storage/uploads/boshqarmalar/boshliq/" + _this.organization.rahbariyat.boshliq.image;
        if (typeof (this.rahbariyat.orinbosar) !== 'undefined')
          _this.rahbariyat.orinbosar.forEach(function (item, k) {
            _this.cropImgOrinbosar[k] = "/storage/uploads/boshqarmalar/orinbosar/" + item.image;
            //_this.imgSrcOrinbosar[k] = "/storage/uploads/boshqarmalar/orinbosar/" + item.image;

            if (typeof _this.rahbariyat.orinbosar[k]['translates'] !== 'undefined' && _this.rahbariyat.orinbosar[k]['translates'] !== 'undefined' && _this.rahbariyat.orinbosar[k]['translates'])
              _this.rahbariyat_orinbosar_translates[k] = JSON.parse(_this.rahbariyat.orinbosar[k]['translates']);
            else _this.rahbariyat_orinbosar_translates[k] = JSON.parse(JSON.stringify(_this.rahbariyat_orinbosar_translates[0]));
          })
        else {
          _this.rahbariyat.orinbosar = _this.orinbosarlar = [];

          _this.rahbariyat.orinbosar.push({
            name: " ",
            image: null,
            lavozimi: "Бошқарма бошлиғи ўринбосари",
            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
            telefon: "(78) - 120-76-00",
            translates: _this.rahbariyat_orinbosar_translates[0]
          });
          _this.orinbosarlar.push({
            name: " ",
            image: null,
            lavozimi: "Бошқарма бошлиғи ўринбосари",
            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
            telefon: "(78) - 120-76-00"
          });
        }
        if (_this.posts)
          _this.posts.forEach(function (item, k) {
            if (typeof item.translates !== 'undefined' && item.translates !== 'undefined')
              _this.post_translates[k] = JSON.parse(item.translates); else
              _this.post_translates[k] = JSON.parse(JSON.stringify(_this.post_translates[0]))
          })


      }).catch((error) => {
        this.$toast.error(_this.$t(`Маълумотларни юклашда хатолик содир бўлди!`));
        console.log(error)
        this.$router.replace("/admin/orgs").catch(() => {
        });
      });
      //this.rahbariyat = _this.rahbariyat;
      //_this.$refs.cropper.replace();
      ///this.$refs.cropper.zoom(15)

    },
    close() {
      this.$router.replace('/admin/orgs');
    },
    async save() {
      const _this = this;
      const isValid = await this.$refs.organizationForm.validate();
      if (isValid) {
        const form = new FormData();
        form.append('_method', 'PUT');
        form.append('title[text]', this.organization.title);
        form.append('title[translates]', JSON.stringify(_this.langtext));
        form.append('manzil[manzil]', this.manzil.manzil);
        form.append('manzil[avtobus]', this.manzil.avtobus);
        form.append('manzil[ytaksi]', this.manzil.ytaksi);
        form.append('manzil[telefon]', this.manzil.telefon);
        form.append('manzil[faks]', this.manzil.faks);
        form.append('manzil[email]', this.manzil.email);
        form.append('manzil[map]', this.manzil.map);
        form.append('manzil[image]', this.manzil.image);
        form.append('manzil[translates]', JSON.stringify(_this.manzil_translates));
        form.append('rahbariyat[boshliq][name]', this.rahbariyat.boshliq.name);
        form.append('rahbariyat[boshliq][image]', this.rahbariyat.boshliq.image);
        form.append('rahbariyat[boshliq][lavozimi]', this.rahbariyat.boshliq.lavozimi);
        form.append('rahbariyat[boshliq][qabul]', this.rahbariyat.boshliq.qabul);
        form.append('rahbariyat[boshliq][telefon]', this.rahbariyat.boshliq.telefon);
        form.append('rahbariyat[boshliq][biografiyasi]', this.rahbariyat.boshliq.biografiyasi);
        form.append('rahbariyat[boshliq][translates]', JSON.stringify(this.rahbariyat_boshliq_translates));

        if (_this.imgSrc) this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
          form.append('rahbariyat[boshliq][image]', blob);
        });

        if (_this.imgSrcOrinbosar) {
          console.log('111')
          Object.entries(this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
            _this.rahbariyat.orinbosar[valkey]['translates'] = JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey])
            if (typeof v.image === 'undefined') this.rahbariyat.orinbosar[valkey]['image'] = null;
            Object.entries(v).forEach(([itemkey, item]) => {
              if (itemkey === 'image') {
                console.log('asdasd')
                if (_this.imgSrcOrinbosar[valkey]) {
                  console.log(_this.$refs['orinbosarCropper' + valkey]);
                  if (_this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas() !== null)
                    _this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas().toBlob((blob1) => {
                      form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, blob1);
                    })
                } else
                  form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item);
              } else
                form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, `${item}`)


            });

            ///form.append(`rahbariyat[orinbosar][${valkey}][translates]`, JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]))

          });


          if (this.posts) {

            Object.entries(this.posts).forEach(([valkey, v]) => {
              this.posts[valkey]['translates'] = JSON.stringify(_this.post_translates[valkey]);
              Object.entries(v).forEach(([itemkey, item]) => {
                form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
              });
              //form.append(`posts[${valkey}][translates]`, JSON.stringify(_this.post_translates[valkey]))
            });
          }
          setTimeout(() => {
            api.updateOrg(_this.organization.id, form).then((response) => {
              _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
            }).catch((error) => {
              _this.$toast.error(_this.$t(`Маълумотларни юклашда хатолик содир бўлди!`))
            })
          }, 200)
        } else {

          // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
          Object.entries(this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
            _this.rahbariyat.orinbosar[valkey]['translates'] = JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey])
            Object.entries(v).forEach(([itemkey, item]) => {
              if (itemkey === 'image') {
                /*  if (_this.imgSrcOrinbosar[valkey]) {
                      console.log(_this.$refs['orinbosarCropper' + valkey]);
                      if (_this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas())
                          _this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas().toBlob((blob1) => {
                              form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, blob1);
                          })
                  } else*/
                form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, item);
              } else
                form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, `${item}`)
            });

            //form.append(`rahbariyat[orinbosar][${valkey}][translates]`, JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]))
          });
          if (this.posts)
            Object.entries(this.posts).forEach(([valkey, v]) => {
              this.posts[valkey]['translates'] = JSON.stringify(_this.post_translates[valkey]);

              Object.entries(v).forEach(([itemkey, item]) => {
                form.append(`posts[${valkey}][${itemkey}]`, `${item}`)
              });
            });
          setTimeout(() => {
            api.updateOrg(_this.organization.id, form).then((response) => {
              _this.$toast.success(`Маълумотларни омадли тарзда юкланди!`)
            }).catch((error) => {
              _this.$toast.error(_this.$t(`Маълумотларни юклашда хатолик содир бўлди!`))
            })
          }, 200)
        }
        /*                Object.entries(_this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
                            console.log(valkey)


                        })*/
      }
    },
    deleteOrganization(key) {
      //console.log(key)
      if (key >= 0) {
        this.posts.splice(key, 1);
      }
    },
    removeOrinbosar(orinbosar) {
      if (this.rahbariyat.orinbosar.indexOf(orinbosar) !== -1) {
        this.cropImgOrinbosar.splice(this.rahbariyat.orinbosar.indexOf(orinbosar), 1);
        this.rahbariyat.orinbosar.splice(this.rahbariyat.orinbosar.indexOf(orinbosar), 1);
      }
    },
    addPost() {
      if (this.posts === null) this.posts = [];
      this.posts.push({title: null, manzili: null, telefon: null, description: null})
    },
    AddOrinbosar() {

      if (!this.rahbariyat.orinbosar) this.rahbariyat.orinbosar = this.orinbosarlar = [];
/*      this.orinbosarlar.push({
        name: "",
        image: null,
        lavozimi: "Бошқарма бошлиғи ўринбосари",
        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
        telefon: "(78) - 120-76-00"
      });*/
      const defaultOrinbosar={
        name: "",
        image: null,
        lavozimi: "Бошқарма бошлиғи ўринбосари",
        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
        telefon: "(78) - 120-76-00",
        translates: [{
          oz: {
            lavozimi: null,
            qabul: null,
            name: null,
          },
          ru: {
            lavozimi: null,
            name: null,
            qabul: null,
          },
          en: {
            lavozimi: null,
            name: null,
            qabul: null,
          }
        }]
      }
      this.rahbariyat_orinbosar_translates.push({
        oz: {
          lavozimi: null,
          qabul: null,
          name: null,
        },
        ru: {
          lavozimi: null,
          name: null,
          qabul: null,
        },
        en: {
          lavozimi: null,
          name: null,
          qabul: null,
        }
      })
      this.rahbariyat.orinbosar.push(defaultOrinbosar)
      //  this.images.push(null)
    },

  },
  components: {
    ValidationProvider,
    ValidationObserver,
    MyField, VueCropper, Editor
  },
}
</script>
<style>
.menu-main .v-data-table button.new_item {
  margin-top: -77px;
}

.cropped-image .profile-icon-wrapper.boshliq {
  width: 110px;
  height: 110px;
}

.cropped-image .profile-icon-wrapper.boshliq .profile-icon {
  width: 232px;
  height: 255px;
}
</style>
