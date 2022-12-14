<template>

    <div class="section" id="section1">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>

        <!--==========Portfolio area==========-->
        <div class="portfolio_area 1">

            <v-container fluid class="p-0" style="max-width: unset">
                <v-row>
                    <v-col cols="1" offset="10" class="p-0 d-flex justify-content-end">
                        <div class="position-absolute py-8 " style="z-index:11">
                            <a href="#" class="d-none">{{ $t("Login") }}</a>

                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <!--
                        <h2 class="text-center portfolio_title">Рақамли божхона</h2>-->

            <div class="container">
                <ul class="nav nav-pills mb-3 portfolio_menu" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link " @click="nav_link=1" :class="nav_link===1?'active':''"
                                id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">{{ $t("Интерактив хизматлар") }}
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" @click="nav_link=2" :class="nav_link===2?'active':''"
                                id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">{{ $t("Очиқ маълумотлар") }}
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" @click="nav_link=3" :class="nav_link===3?'active':''"
                                id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">{{ $t("Фойдали ресурслар") }}
                        </button>
                    </li>
                    <li class="nav-item" @click="nav_link=4" :class="nav_link===4?'active':''" role="presentation">
                        <button class="nav-link" id="mobil-ilovalar-tab" data-bs-toggle="pill"
                                data-bs-target="#mobil-ilovalar" type="button" role="tab" aria-controls="mobil-ilovalar"
                                aria-selected="false">{{ $t("Мобил иловалар") }}
                        </button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane" :class="nav_link===1?'active':''" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <div class="portfolio-background1"></div>
                    <div class="tab-container">
                        <services-list/>
                    </div>
                    <!--
                    <div class="tab-container">
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/vacancy" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/ishga-kirish-uchun-navbat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона органларига ишга жойлашиш") }}</p>

                                </div>
                            </router-link>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/decisions" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/customs-brokerage.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона тўловлари бўйича дастлабки қарор олиш") }}</p>

                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/intellectual" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/patent.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("Интеллектуал мулк объектлари божхона реестрига киритиш учун ариза юбориш")
                                        }}</p>

                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/refund" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/refund.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("ТИФ субъектининг божхона органлари ғазна ҳисобварағидаги маблағларини қайтариш")
                                        }}</p>

                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/recycle" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/recycle.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Товарни божхона ҳудудида қайта ишлаш учун рухсатнома олиш") }}</p>

                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/tftn" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/customs-clearance-icon.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("ТИФ ТН кодини аниқлаш юзасидан ариза бериш") }}</p>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" @click="openApp('ombor')" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Юк операциялари") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" @click="openApp('singlewindow')" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/singlewindow.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Ягона дарча божхона ахборот тизими") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://ed1.customs.uz/Markirovka/" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/maishiy.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Маиший техникаларнинг импорти қонунийлигини текшириш ") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="http://service.customs.uz/autogtd_report/index.jsp?pc=4#"
                               class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/meva.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Мева-сабзавот маҳсулотлари экспорти тўғрисида маълумот") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="http://service.customs.uz/autogtd_report/index.jsp?pc=4#"
                               class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/import_malumot.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("Ўзбекистон Республикасига импорт қилинаётган товарларнинг божхона қиймати тўғрисида маълумот")
                                        }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/555" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/oversize-load-icon.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("Халқаро йўлларда ташиш (ХЙТ) дафтарчасидан фойдаланиш учун рухсатнома олиш")
                                        }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/222" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/Enterprise.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("Корхонани хорижий товарлар учун божхона тўловлари бўйича корхоналар маълумотномасига киритиш")
                                        }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/322" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона омборхонаси фаолиятига янги лицензия олиш") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/326" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона омборхонаси фаолияти учун лицензияни қайта расмийлаштириш") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/344" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Бож олинмайдиган савдо дўкони фаолияти учун янги лицензия олиш") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/331" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Эркин омбор фаолияти учун янги лицензия олиш") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/345" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{
                                            $t("Бож олинмайдиган савдо дўкони фаолияти учун лицензияни қайта расмийлаштириш")
                                        }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="https://my.gov.uz/uz/service/343" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/warehouse-license.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Эркин омбор фаолияти учун лицензияни қайта расмийлаштириш") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="//my.gov.uz/uz/service/209" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/elektron-deklaratsiyalash.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Товарларни электрон декларациялаш") }}</p>

                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="//my.gov.uz/uz/service/220" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/solishtiruv-dalolatnomalari.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона тўловлари бўйича солиштирув далолатномалари") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/82" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/avtotransportda-olib-kirilayotgan-yuk-haqida-malumot.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Автотранспортда олиб кирилаётган юк ҳақида маълумот олиш") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/81" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/temiryoltransportidaolibkirilayotgan.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Темир йўл транспортида олиб кирилаётган юк ҳақида маълумот олиш") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a @click="openApp('cargo')" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/etranzit.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>E-Tranzit</p>

                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/127" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/chet-el-tovarlariga.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Чет эл товарларига божхона тўловлари тўланишини таъминлаш") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/91" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/pochta.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Почта декларацияси") }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/list-of-declaration-persons/default/force" target="_blank"
                               class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/deklaratsiyalovchi-shaxlar-ruyhati.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Декларацияловчи шахслар рўйхати") }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://tarif.customs.uz/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/calculator.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Интеграциялашган тариф") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://ed1.customs.uz/REESTR_BQB/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/bojxona-qoida-buzilishi.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона қоида бузилиши") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://service.customs.uz/autogtd_report/index.jsp?pc=9#" target="_blank"
                               class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tovarlar-importi.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Товарлар импорти") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a @click="openApp('cabinet')" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tadbirkor-shaxsiy-kabineti.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Тадбирконинг шахсий кабинети") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/service/365" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/bojxona-tolovlarini-kechiktirib.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Божхона тўловларини кечиктириб ёки бўлиб тўлаш") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/service/331" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/ombor-litsenziyalari.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Омбор лицензиялари") }}</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://fast.upay.uz/merchant/597" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/chet-el-transport.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>
                                        {{
                                            $t("Чет эл транспорт воситаларини Ўзбекистон Республикасида бўлиш муддатини узайтириш")
                                        }}</p>

                                </div>
                            </a>
                        </div>


                        <div class="col-md-2 portfolio_single p1">
                            <a @click="openApp('dep')" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tif-ishtirokchisining-dastlabki-pul.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("ТИФ иштирокчисининг дастлабки пул маблағлари") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <router-link to="/services/appeals" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/elektron-murojaat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Электрон мурожаат йўлаш") }}</p>

                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a @click="openApp('navbat')" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/e-navbat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>E-Navbat</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a @click="openApp('arxiv')"  target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/e-arxiv.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>E-Arxiv</p>
                                </div>
                            </a>
                        </div>&lt;!&ndash;
                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://www.customs.uz/uz/lists/view/268" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/online-tulov.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("On-Line Тўлов") }}</p>

                                </div>
                            </a>
                        </div>&ndash;&gt;
                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://time.customs.uz/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/chiqish-vaqtini-tadqiqot-va-monitoring.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Чиқиш вақтини тадқиқот ва мониторинг қилиш ахборот платформаси") }}</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://axborot.customs.uz/Xabar/#" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/korrupsiya-boyicha-xabar-berish.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>{{ $t("Корупция бўйича ҳабар бериш") }}</p>

                                </div>
                            </a>
                        </div>
                    </div>-->

                </div>
                <div class="tab-pane" :class="nav_link===2?'active':''" id="pills-profile" role="tabpanel"
                     aria-labelledby="pills-profile-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="opendata-container">
                            <div class="opendata">
                                <div class="portfolio_single p2 d-none">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">{{
                                                $t("Импорт қилинадиган товарларнинг нарх маълумотлари бюллетени")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.gov.uz/uz/datasets/download/7/xml">XML</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/7/json">JSON</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/7/csv">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">
                                            {{ $t("Расмийлаштирилган божхона юк декларациялари сони") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">{{ $t("Божсиз савдо дўконларига оид маълумотлар") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=2&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">
                                            {{
                                                $t("Ҳудудий божхона бошқармаларнинг ғазна шахсий ҳисоб варағи маълумотлари")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">{{ $t("Божхона омборлари тўғрисида маълумотлар") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Ҳалқаро йўл - ташувчилар конвенциясини бузган ташувчилар")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">{{
                                                $t("Божхона имтиёзларини назарда тутувчи норматив ҳужжатлар базаси")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{ $t("Ҳалқаро шартномалар рўйҳати") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{ $t("Эркин омборлар тўғрисида маълумотлар") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Экспорт расмийлаштируви учун сарфланган вақт бўйича постлар рейтинги")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Импорт расмийлаштируви учун сарфланган вақт бўйича постлар рейтинги")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{ $t("Божхона постлари классификаторлари") }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                ("Давлат чегарасидан темир йўл ва автомобиллар ўтказиш пунктлари рўйхати")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Чегара орқали ҳаракатланган юк автотранспорти божхона расмийлаштрувига сарфланган вақт")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Республикага импорт қилинган товарлар ҳақида маълумот")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=2&tableType=2">XML</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=4&tableType=2">CSV</a>
                                        </p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> {{
                                                $t("Давлат божхона қўмитасига келиб тушган мурожаатлар статистикаси")
                                            }}
                                        </div>
                                        <div class="download_links"><p><a
                                            href="https://data.gov.uz/uz/datasets/download/16697/xml">XML</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/16697/json">JSON</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/16697/csv">CSV</a></p></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" :class="nav_link===3?'active':''" id="pills-contact" role="tabpanel"
                     aria-labelledby="pills-contact-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="foydali-resurslar row">
                            <router-link class="foydali-resurs col-3" to="/registries/services">
                                <div class="foydali-resurs-image"
                                     style="background-image: url(/img/icons/gov-services.png); background-size: 40%">
                                </div>
                                <div class="foydali-resurs-text">{{
                                        $t("Давлат хизматлари бўйича мурожаатлар реестри")
                                    }}

                                </div>
                            </router-link>
                            <router-link class="foydali-resurs col-3" to="/registries/decisions">
                                <div class="foydali-resurs-image"
                                     style="background-image: url(/img/icons/patent-white.png); background-size: 30%">
                                </div>
                                <div class="foydali-resurs-text">
                                    {{ $t("Божхона тўловлари бўйича дастлабки қарорлар реестри") }}

                                </div>
                            </router-link>
                            <a class="foydali-resurs col-3" target="_blank"
                               href="https://data.gov.uz/uzbKr/data/610258012a2e256d868e82dd">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/ombor.png)">
                                </div>
                                <div class="foydali-resurs-text">{{ $t("Божхона омборлари реестри") }}

                                </div>
                            </a>
                            <a class="foydali-resurs col-3" target="_blank" href="http://imo.customs.uz/IMO_REESTR/">
                                <div class="foydali-resurs-image"
                                     style="background-image: url(/img/icons/intellektual-mulk.png)">
                                </div>
                                <div class="foydali-resurs-text">{{ $t("интеллектуал мулк объектлари реестри") }}

                                </div>
                            </a>
                            <a class="foydali-resurs col-3" target="_blank" href="http://ed1.customs.uz/selhoz/">
                                <div class="foydali-resurs-image"
                                     style="background-image: url(/img/icons/meva-sabzavot.png)">
                                </div>
                                <div class="foydali-resurs-text">{{
                                        $t("Экспорт қилинган мева - сабзавот махсулотлари")
                                    }}

                                </div>
                            </a>
                            <a class="foydali-resurs col-3" target="_blank" href="http://ed1.customs.uz/REESTR_GTK/">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/nohalol.png)">
                                </div>
                                <div class="foydali-resurs-text">{{ $t("ноҳалол экспортчилар реестри") }}

                                </div>
                            </a>
                            <a class="foydali-resurs col-3" target="_blank"
                               href="http://service.customs.uz/autogtd_report/index.jsp?pc=9">
                                <div class="foydali-resurs-image"
                                     style="background-image: url(/img/icons/import-qiymati.png)">
                                </div>
                                <div class="foydali-resurs-text">{{ $t("Импорт товарларнинг божхона қиймати") }}

                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                <div class="tab-pane" :class="nav_link===4?'active':''" id="mobil-ilovalar" role="tabpanel"
                     aria-labelledby="mobil-ilovalar-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="mobil-ilovalar row">
                            <a class="mobil-ilova col-4"
                               href="https://play.google.com/store/apps/details?id=uz.eskishahar.app.aktsverki"
                               target="_blank">
                                <div class="mobil-ilova-image"
                                     style="background-image: url(/img/service/akt-sverki.png)">
                                </div>
                                <div class="mobil-ilova-text">{{
                                        $t("Божхона тўловлари бўйича солиштирув далолатномаси бўйича он - лайн маълумот олиш мобил иловаси")
                                    }}

                                </div>
                            </a>


                            <a class="mobil-ilova col-4" target="_blank"
                               href="https://play.google.com/store/apps/details?id=uz.uzbi.audit">
                                <div class="mobil-ilova-image"
                                     style="background-image: url(/img/service/bojxona-auditi.png)">
                                </div>
                                <div class="mobil-ilova-text">{{
                                        $t("Божхона аудити бўйича билим ва кўникмаларни оширишга мўлжалланган мобил илова")
                                    }}

                                </div>
                            </a>
                            <a class="mobil-ilova col-4" target="_blank"
                               href="https://play.google.com/store/apps/details?id=uz.eskishahar.app.tranzitlite">
                                <div class="mobil-ilova-image"
                                     style="background-image: url(/img/service/transit-mobil.png)">
                                </div>
                                <div class="mobil-ilova-text">{{
                                        $t("Чегара божхона пости орқали ҳаракатланувчи транспорт воситалари ҳақида олдиндан маълумот тақдим этиш мобил иловаси")
                                    }}

                                </div>
                            </a>

                        </div>

                    </div>
                </div>
            </div>


        </div>
        <!--==========End Portfolio area==========-->
        <!--        <component is="script" src="vendors/isotop/imagesloaded.pkgd.min.js"></component>
                <component is="script">
                    function portfolio_isotope() {
                    if ($('.portfolio_inner').length) {

                    // Activate isotope in container
                    $(".portfolio_inner").imagesLoaded(function () {
                    $(".portfolio_inner").isotope({
                    itemSelector: ".portfolio_single",
                    layoutMode: "fitRows",
                    });
                    });


                    var selector = $('.portfolio_menu li:first-child').attr("data-filter");
                    $(".portfolio_inner").isotope({
                    filter: selector,
                    animationOptions: {
                    duration: 450,
                    easing: "linear",
                    queue: false,
                    }
                    });

                    // Add isotope click function
                    $(".portfolio_menu li").on('click', function () {
                    $(".portfolio_menu li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $(".portfolio_inner").isotope({
                    filter: selector,
                    animationOptions: {
                    duration: 450,
                    easing: "linear",
                    queue: false,
                    }
                    });
                    return false;
                    });
                    }
                    }
                    $(document).ready(function(){
                    portfolio_isotope();
                    });
                </component>-->
    </div>


</template>
<script>
import i18n from "../../../i18n";
import ServicesList from "./services-list";

export default {
    name: 'Services',
    components: {ServicesList},
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
                    text: i18n.t('Хизматлар'),
                    to: '/services',
                    disabled: true,
                    exact: true,
                },
            ],
            nav_link: 1,
            appData: {
                //issuerName:"CN=OMONOV OTAJON JURAQULOVICH,T=Директор,O=DUK YANGI TEXNOLOGIYALAR ILMIY-AXBOROT MARKAZI,OU=ЭРИ яратиш ва реестрини юритиш,L=100096 Тошкент ш. Чилонзор тум. Муқимий кўч. 166-уй,E=info@yt.uz,C=UZ",
                issuerName: "CN=OMONOV OTAJON JURAQULOVICH,T=Директор,O=DUK YANGI TEXNOLOGIYALAR ILMIY-AXBOROT MARKAZI,OU=ЭРИ яратиш ва реестрини юритиш,L=100096 Тошкент ш. Чилонзор тум. Муқимий кўч. 166-уй,E=info@yt.uz,C=UZ",
                success: true,
                serialNumberHex: "778ba2c3",
                validFrom: "2021.03.26 09:35:55",
                //subjectName:"CN=SHAMSIDDINOV XUMOYUN SHAROFIDDIN O\\u2018G\\u2018LI,Name=XUMOYUN,SURNAME=SHAMSIDDINOV,O=Не указано,L=ЯШНАБАДСКИЙ РАЙОН,ST=ГОРОД ТАШКЕНТ,C=UZ,UID=598668804,1.2.860.3.16.1.2=32911930250104,T=(noaniq)",
                subjectName: "", //"CN=Abdullayev Surat Ilhomboy O\\u2018G\\u2018LI,Name=Surat,SURNAME=Abdullayev,O=Не указано,L=ЯШНАБАДСКИЙ РАЙОН,ST=ГОРОД ТАШКЕНТ,C=UZ,UID=547854884,1.2.860.3.16.1.2=31103927250012,T=(noaniq)",
                validTo: "2023.03.26 23:59:59"
            },
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            if (this.$route.query.page) {
                this.nav_link = parseInt(this.$route.query.page);
            }
        },

    }

}
</script>
