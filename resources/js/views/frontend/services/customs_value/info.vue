<template>
    <div class="section customs-value-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content" v-if="app.general">
            <v-container>
                <v-row>
                    <h3 class="pb-5"><b>{{$t('Ариза рақами:')}} </b>{{ app.general.appNum }}</h3>
                    <br>
                </v-row>
                <v-row>
                    <v-tabs
                        v-model="tab"
                        left
                        class="fixed-color-tabs"

                    >
                        <v-tab
                            v-for="item in items"
                            :key="item.tab"
                            style="width: 400px"


                        >
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab" class="fixed-color-tabs">

                        <v-tab-item


                        >


                            <v-expansion-panels v-model="panel">
                                <!--               arizachi -->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header class="primary-color">
                                        {{$t('Аризачи тўғрисида маълумотлар')}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app.general">
                                            <template v-slot:default>
                                                <thead>
                                                <tr>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{$t('Ариза рақами')}}
                                                    </th>
                                                    <th class="text-left" style="font-weight: 550">
                                                        {{
                                                            typeof app.general.appNum !== 'undefined' ? app.general.appNum : ''
                                                        }}
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('ЖШШИР')}}</td>
                                                    <td>{{
                                                            typeof app.general.personPin !== 'undefined' ? app.general.personPin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Фамилияси, исми, шарифи')}}</td>
                                                    <td>{{
                                                            typeof app.general.personFio !== 'undefined' ? app.general.personFio : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('СТИР')}}</td>
                                                    <td>{{
                                                            typeof app.general.personTin !== 'undefined' ? app.general.personTin : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Ариза юборилган ҳудуд')}}</td>
                                                    <td>{{
                                                            typeof app.general.locationNm !== 'undefined' ? app.general.locationNm : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Манзили')}}</td>
                                                    <td>{{
                                                            typeof app.general.personAddr !== 'undefined' ? app.general.personAddr : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Телефон рақами')}}</td>
                                                    <td>{{
                                                            typeof app.general.personPhone !== 'undefined' ? app.general.personPhone : null
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Электрон манзили')}}</td>
                                                    <td>{{
                                                            typeof app.general.personMail !== 'undefined' ? app.general.personMail : null
                                                        }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                yuk-->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header>
                                        {{$t('Юк тўғрисида асосий маълумотлар')}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table v-if="app.general">
                                            <template v-slot:default>
                                                <tbody>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Юк жўнатувчи ташкилот / давлат')}}</td>
                                                    <td>{{
                                                            typeof app.general.senderOrg !== 'undefined' ? app.general.senderOrg : ""
                                                        }} / {{
                                                            typeof app.general.senderCountryNm !== 'undefined' ? app.general.senderCountryNm : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Сотувчи ташкилот')}}</td>
                                                    <td>{{
                                                            typeof app.general.sellerOrg !== 'undefined' ? app.general.sellerOrg : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Товарни етказиб бериш шарти')}}</td>
                                                    <td>{{
                                                            typeof app.general.termsNm !== 'undefined' ? app.general.termsNm : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Етказиб бериш манзили')}}</td>
                                                    <td>{{
                                                            typeof app.general.termsAddr !== 'undefined' ? app.general.termsAddr : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Товарнинг транспортлардаги ҳаракати')}}
                                                    </td>
                                                    <td>
                                                        <template v-if="typeof app.transports !=='undefined'"
                                                                  v-for="transport in app.transports">
                                                            <p>{{
                                                                    typeof transport.tarnsportTypeNm !== 'undefined' ? transport.tarnsportTypeNm : ""
                                                                }}
                                                                {{
                                                                    typeof transport.finishCountryNm !== 'undefined' ? transport.finishCountryNm : ""
                                                                }} >
                                                                {{
                                                                    typeof transport.endCountryNm !== 'undefined' ? transport.endCountryNm : ""
                                                                }}

                                                                {{
                                                                    typeof transport.transportPrice !== 'undefined' ? transport.transportPrice : ""
                                                                }}
                                                            </p>
                                                        </template>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-weight: 550">{{$t('Илова қилинган ҳужжатлар')}}</td>
                                                    <td>
                                                        <template v-if="typeof app.docs !=='undefined'"
                                                                  v-for="(doc,docindex) in app.docs">
                                                            {{ doc.docTypeName }} - {{ doc.docname }}
                                                            {{ docindex !== 0 ? ',' : '' }}
                                                        </template>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <!--                tovar-->
                                <v-expansion-panel

                                >
                                    <v-expansion-panel-header>
                                        {{ $t('Товар тўғрисида маълумотлар') }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-simple-table>
                                            <template v-slot:default>

                                                <tbody>
                                                <tr v-if="typeof app.product.hsCode !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('ТИФ ТН коди')}}</td>
                                                    <td>{{
                                                            typeof app.product.hsCode !== 'undefined' ? app.product.hsCode : ""
                                                        }} - {{
                                                            typeof app.product.hsName !== 'undefined' ? app.product.hsName : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.basicQty !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('Асосий ўлчов бирлигидаги миқдори')}}</td>
                                                    <td>{{
                                                            typeof app.product.basicQty !== 'undefined' ? app.product.basicQty : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.netto !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('Нетто оғирлиги')}}</td>
                                                    <td>{{
                                                            typeof app.product.netto !== 'undefined' ? app.product.netto : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.brutto !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('Брутто оғирлиги')}}</td>
                                                    <td>{{
                                                            typeof app.product.brutto !== 'undefined' ? app.product.brutto : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.price !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('Товарнинг шартномадаги қиймати')}}</td>
                                                    <td>{{
                                                            typeof app.product.price !== 'undefined' ? app.product.price : ""
                                                        }}
                                                        {{
                                                            typeof app.product.currencyNmSymbol !== 'undefined' ? app.product.currencyNm : ""
                                                        }}
                                                        {{
                                                            typeof app.product.currencyNmSymbol !== 'undefined' ? "(" + app.product.currencyNmSymbol +")" : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.customsPrice !=='undefined'">
                                                    <td style="font-weight: 550">{{$t('Товарнинг божхона қиймати')}}</td>
                                                    <td>{{
                                                            typeof app.product.customsPrice !== 'undefined' ? app.product.customsPrice : ""
                                                        }}
                                                        {{
                                                            typeof app.product.currencyNmSymbol !== 'undefined' ? app.product.currencyNm : ""
                                                        }}
                                                        {{
                                                            typeof app.product.currencyNmSymbol !== 'undefined' ? "(" + app.product.currencyNmSymbol +")" : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.tradeName !=='undefined' && app.product.tradeName">
                                                    <td style="font-weight: 550">{{$t('Тижорат номи')}}</td>
                                                    <td>{{
                                                            typeof app.product.tradeName !== 'undefined' ? app.product.tradeName : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.tradeMark !=='undefined' && app.product.tradeMark">
                                                    <td style="font-weight: 550">{{$t('Савдо белгиси')}}</td>
                                                    <td>{{
                                                            typeof app.product.tradeMark !== 'undefined' ? app.product.tradeMark : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.mark !=='undefined' && app.product.mark">
                                                    <td style="font-weight: 550">{{$t('Маркаси')}}</td>
                                                    <td>{{
                                                            typeof app.product.mark !== 'undefined' ? app.product.mark : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.model !=='undefined' && app.product.model ">
                                                    <td style="font-weight: 550">{{$t('Модели')}}</td>
                                                    <td>{{ app.product.model }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.article !=='undefined' && app.product.article">
                                                    <td style="font-weight: 550">{{$t('Артикули')}}</td>
                                                    <td>{{ app.product.article }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.sort !=='undefined' && app.product.sort && app.product.sort.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Нави')}}</td>
                                                    <td>{{ app.product.sort }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.sort !=='undefined' && app.product.sort  && app.product.sort.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Стандарти')}}</td>
                                                    <td>{{ app.product.sort }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.standarts !=='undefined' && app.product.standarts && app.product.standarts.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Нави')}}</td>
                                                    <td>{{ app.product.standarts }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.color !=='undefined' && app.product.color && app.product.color.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Ранги')}}</td>
                                                    <td>{{ app.product.color }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.productGoal !=='undefined' && app.product.productGoal && app.product.productGoal.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Фойдаланиш мақсади')}}</td>
                                                    <td>{{ app.product.productGoal }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.functions !=='undefined' && app.product.functions && app.product.functions.length>0 ">
                                                    <td style="font-weight: 550">
                                                        {{$t('Вазифаси')}}
                                                    </td>
                                                    <td>{{ app.product.functions }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.comProp !=='undefined' && app.product.comProp && app.product.comProp.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Тижорат хусусияти')}}</td>
                                                    <td>{{ app.product.comProp }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.techChar !=='undefined' && app.product.techChar && app.product.techChar.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Техник хусусияти')}}</td>
                                                    <td>{{ app.product.techChar }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.packTypeNm !=='undefined' && app.product.packTypeNm  && app.product.packTypeNm.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Ўрам тури')}}</td>
                                                    <td>{{ app.product.packTypeNm }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.packQty !=='undefined' && app.product.packQty && app.product.packQty.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Ўрамлар сони')}}</td>
                                                    <td>{{ app.product.packQty }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.orignCountrNm !=='undefined' && app.product.orignCountrNm && app.product.orignCountrNm.length>0 && typeof app.product.originOrg !=='undefined' && app.product.originOrg && app.product.originOrg.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Ишлаб чиқарувчи давлат / ташкилот')}}</td>
                                                    <td>{{ app.product.orignCountrNm }} / {{
                                                            app.product.originOrg
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="typeof app.product.hsDecNum !=='undefined' && app.product.hsDecNum  && app.product.hsDecNum.length>0  && app.product.hsDecNum && typeof app.product.hsDecDate !=='undefined' && app.product.hsDecDate.length>0  && app.product.hsDecDate">
                                                    <td style="font-weight: 550">{{$t('ТИФ ТН коди бўйича берилган қарор')}}
                                                        {{$t('рақами / санаси')}}
                                                    </td>
                                                    <td>{{ app.product.hsDecNum }} / {{ app.product.hsDecDate }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.hsDecNum !=='undefined' && app.product.hsDecNum && app.product.hsDecNum.length>0 && typeof app.product.hsDecDate !=='undefined'  && app.product.hsDecDate && app.product.hsDecDate.length>0  ">
                                                    <td style="font-weight: 550">{{$t('Илгари қабул қилинган дастлабки қарор')}}
                                                        {{$t('рақами / санаси')}}
                                                    </td>
                                                    <td>{{ app.product.inDecNum }} / {{ app.product.inDecDate }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.inDecNum !=='undefined' && app.product.inDecNum && app.product.inDecNum.length>0 && typeof app.product.inDecDate !=='undefined' && app.product.inDecDate  && app.product.inDecDate.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Илгари қабул қилинган дастлабки қарор')}}
                                                        {{$t('рақами / санаси')}}
                                                    </td>
                                                    <td>{{ app.product.inDecNum }} / {{ app.product.inDecDate }}</td>
                                                </tr>
                                                <tr v-if="typeof app.product.method !=='undefined' && app.product.method && app.product.method.length>0 && typeof app.product.methodNm !=='undefined' && app.product.methodNm.length>0 ">
                                                    <td style="font-weight: 550">{{$t('Божхона қийматини аниқлаш усули')}}</td>
                                                    <td>{{ app.product.method }} - {{ app.product.methodNm }}
                                                        <template
                                                            v-if="typeof app.product.methodDescription !=='undefined' && app.product.methodDescription!==null && app.product.methodDescription.length>0">
                                                            <div
                                                                v-if="typeof app.product.methodDescription !=='undefined' && app.product.methodDescription!==null && app.product.methodDescription.length>0"
                                                                v-for="(description,dkey) in (app.product.methodDescription.split('~~~~~'))">
                                                                <p>{{dkey+1}} {{$t('- усулни қўлламаслик сабаби:')}} {{ description }}</p>
                                                            </div>
                                                        </template>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                        </v-tab-item>
                        <v-tab-item>
                            <v-timeline
                                v-if="typeof app.statuses !=='undefined'"
                                dense
                                clipped
                                style="margin: 40px"
                            >

                                <template v-for="(appstatus,key,index) in app.statuses">
                                    <v-timeline-item
                                        class="mb-4"
                                        color="primary"
                                        icon-color="primary"
                                        small
                                    >
                                        <v-row justify="start">
                                            <v-col cols="10">
                                                <h4 class="active"> {{ $t(appstatus.statusComment) }}</h4>
                                                <p> {{ new Date(appstatus.insTime).toLocaleString() }}</p>
<!--                                                <p style="margin: 10px 20px; line-height: 20px; color: orange" v-if="(appstatus.status==='125' && app.general.status===125) || appstatus.status==='120' || appstatus.status==='125'" >
                                                    <template v-if="typeof appstatus.rolback !='undefined' && typeof appstatus.rolback.rollBackComment !='undefined'">{{ appstatus.rolback.rollBackComment }}</template>
                                                    <template  v-if ="typeof appstatus.rolback !='undefined' && typeof appstatus.rolback.rollBackAppList !='undefined' && typeof appstatus.rolback.rollBackAppList[rkey]!='undefined'" >
                                                    <template v-for="(rolback,rkey) in appstatus.rolback.rollBackAppList"><br> {{ rolback.rollbackName }} </template>
                                                    </template>
                                                </p>
                                                -->
                                                <p v-if="appstatus.comment!==null" style="color: orange;border: 1px dashed;padding: 0 16px;margin: 10px 0px;line-height: 16px;border-radius: 5px;" >
                                                    <template v-if="appstatus.comment!==null">{{ appstatus.comment}} </template>

                                                </p>
                                                <span style="color: #39ae69; margin-top: 10px; display: block">

                                                    <router-link color="primary" class="v-btn v-btn--has-bg" style="background: #39ae69; padding: 10px; color: #fff;"
                                                                 dark v-if="appstatus.status==='125' && app.general.status===125" :to="'/services/decisions/edit/'+app.general.id">
                                                        {{$t('Тузатиш учун босинг!')}}'
                                                    </router-link>
                                                <p v-if="appstatus.status==='170'">
                                                    {{$t('Сизнинг аризангиз бўйича дастлабки қарор шакллантирилди.')}}

                                                                  <v-btn
                                                                      color="primary"
                                                                      dark
                                                                      v-if="oferta">{{$t('Дастлабки қарорни юклаб олинг!')}}</v-btn>

                                                    <v-dialog
                                                        v-model="dialog"
                                                        persistent
                                                        max-width="600px"

                                                    >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                            color="primary"
                                                            dark
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            v-if="!oferta"
                                                        >
                                                          {{$t('Дастлабки қарорни юклаб олинг!')}}
                                                        </v-btn>
                                                  </template>
                                                    <v-card>
                                                        <v-card-title color="primary">
                                                          <span class="text-h5">{{$t('Хизматдан фойдаланиш шартларига розимисиз?')}}</span>
                                                        </v-card-title>
                                                        <v-card-text>
                                                          <v-container>
                                                            <v-row>
                                                                <a v-if="!showed" href="https://lex.uz/docs/5796669" target="_blank"
                                                                   @click="showed=true">{{$t('Хизматдан фойдаланиш шартлари билан танишиш')}}</a>



                                                    <div v-else class="form-field checkbox_agree"
                                                                     style="width: 100%;min-height: 45px">
                                                                         <v-checkbox v-model="oferta"
                                                                                     class="fs-6">
                                                                             <template v-slot:label>
                                                                                <span
                                                                                    class="fs-6 label-roziman">{{$t('Хизматдан фойдаланиш шартларига розиман!')}}</span>
                                                                             </template>
                                                                         </v-checkbox>
                                                                </div>

                                                            </v-row>
                                                          </v-container>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                color="blue darken-1"
                                                                text
                                                                @click="downloadPdf"
                                                                v-if="oferta"
                                                            >
                                                                {{$t('Юклаб олиш')}}
                                                            </v-btn>
                                                            <v-btn
                                                                color="blue darken-1"
                                                                text
                                                                @click="dialog = false"
                                                            >
                                                                {{$t('Ёпиш')}}
                                                            </v-btn>

                                                        </v-card-actions>
                                                        </v-card>
                                                        </v-dialog>
                                                </p>
                                                <p v-if="appstatus.status==='195'">
                                                    {{$t('Сизнинг аризангиз бўйича дастлабки қарор бериш бекор қилинди. Ариза бўйича хулосани')}} <a
                                                    @click="downloadPdf"> {{$T('юклаб олинг!')}}</a>
                                                </p>
                                                <p v-if=" ['110'].includes(appstatus.status)" style="font-size: 23px; margin-top: 10px" >
                                                    <a :href="'https://d-qaror.customs.uz/decisionPdfDownloadRollback?stId=' + appstatus.id" target="_blank">{{$t('Аризани юклаб олинг!')}}</a>
                                                </p>

                                                <p v-if=" ['125','120'].includes(appstatus.status)" style="font-size: 23px;margin-top: 10px " >
                                                    <a class="v-btn btn" :href="'https://d-qaror.customs.uz/decisionPdfDownloadRollback?stId=' + appstatus.id" target="_blank">{{$t('Ариза ҳолати бўйича хабарномани юклаб олинг!')}}</a>
                                                </p>

                                                </span>
                                            </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                    v-if="key === app.statuses.length - 1 && (app.general.status!==170 && app.general.status!==175 && app.general.status!==190 && app.general.status!==195)"
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4> {{$t('Якуний хулоса')}} </h4>
                                            <p></p>
                                            <p></p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                        </template>

<!--                                <v-timeline-item
                                    class="mb-4"
                                    color="primary"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4 class="active">Жараёнда </h4>
                                            <p> 16:59, 21 апр 2022</p>
                                            <p>Ариза божхона органлари томонидан ўрганилиб чиқилмоқда</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="start">
                                        <v-col cols="10">
                                            <h4> Хулоса </h4>
                                            <p></p>
                                            <p></p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>-->


</v-timeline>

</v-tab-item>
</v-tabs-items>

</v-row>


</v-container>


</div>
</div>
</template>
<script>
import {mapState} from 'vuex';
import i18n from "../../../../i18n";

export default {
    data() {
        return {
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },

                {
                    text: i18n.t('Менинг аризаларим'),
                    to: '/applications',
                    disabled: false,
                    exact: true,
                },

            ],
            tab: null,
            panel: 0,
            app: [],
            oferta: false,
            showed: false,
            dialog: false,

            items: [
                {tab: i18n.t("Ариза хақида умумий маълумот")},
                {tab: i18n.t('Ариза ҳолати')},

            ],

        }
    },
    mounted() {
        /*        setTimeout(() => {
                    this.$store.commit('setLoading', true)

                }, 2000)*/
        this.getAppData()


    },
    computed: {
        ...mapState(['loading'])
    },
    methods: {
        downloadPdf() {
            this.dialog = false;
            window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.app.product.id;
        },
        getAppData() {
            const _this = this;

            setTimeout(() => {
                this.$store.commit('setLoading', true)
                axios.get("/api/v1/ex_api/customprice-get", {
                    params: {
                        app_id: _this.$route.params.id
                    }
                }).then(function (response) {

                    if (typeof response.data.data !== "undefined") {
                        _this.app = response.data.data
                        _this.breadcrumb_items.push({
                            text: i18n.t("Дастлабки қарор -") + _this.app.general.appNum,
                            to: '/services/decisions/' + _this.app.general.appId,
                            disabled: true,
                            exact: true,
                        })
                        setTimeout(() => {
                            _this.$store.commit('setLoading', false)

                        }, 1000)

                    } else {
                        _this.$store.commit('setLoading', false)
                        _this.$toast.error(i18n.t("Маълумот топилмади!"))
                        _this.$router.push("/applications");

                    }


                }).catch(function (error) {
                    _this.$store.commit('setLoading', false)
                    _this.$toast.error(i18n.t("Маълумот топилмади!"))
                    _this.$router.push("/applications");
                })


            }, 500)

        }
    }
}
</script>
