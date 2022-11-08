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


            <h3 class="text-center portfolio_title my-5 py-5" style="

    width: max-content;
    margin: 0 auto;
    padding: 50px;
    border-bottom: 1px solid #39ae69;
">Божхона органлари ягона дарча хизматлари</h3>

            <!--            <div class="container">
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
                        </div>-->
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane" :class="nav_link===1?'active':''" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <div class="portfolio-background1"></div>
                    <div class="tab-container">
                        <services-list></services-list>
                    </div>

                </div>
                <div class="tab-pane" :class="nav_link===2?'active':''" id="pills-profile" role="tabpanel"
                     aria-labelledby="pills-profile-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="opendata-container">
                            <div class="opendata">
                                <div class="portfolio_single p2">
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
            <form ref="AppForm" id="appForm" method="get" target="_blank" class="d-none">
                <input type="hidden" name="userInfoTR" v-model="JSON.stringify(appData)"/>
            </form>

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
                    text: i18n.t('Ягона божхона хизматлари'),
                    to: '/singlewindow',
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
        async getSessionId(type = null) {
            let returnObject;
            if (type === 'cabinet')
                await axios.post("/api/v1/ex_api/gen_session", {type: 'cabinet'}).then(function (response) {
                    returnObject = response;
                }); else {
                if (type === "dep") {
                    await axios.post("/api/v1/ex_api/gen_session", {type: 'dep'}).then(function (response) {
                        returnObject = response;
                    })
                } else
                    await axios.get("/api/v1/ex_api/gen_session").then(function (response) {
                        returnObject = response;
                    })
            }
            return returnObject;
        },
        async openApp(appName) {
            $(".personalcabinet").remove()
            //this.$refs.AppForm.action="http://singlewindow.uz/oauthTR";
            //console.log(this.$refs.AppForm);
            const _this = this;
            if (!_this.$auth.user()) {
                _this.$toast("Сиз авторизациядан ўтишингиз талаб этилади")
                _this.$router.push('/login');
                return;
            }
            if ($(".personalcabinet")) {
                $(".personalcabinet").remove();
            }

            _this.appData.subjectName = "CN=" + encodeURIComponent(_this.$auth.user().sur_name + ' ' + _this.$auth.user().first_name + ' ' + _this.$auth.user().mid_name) + ",Name=" + _this.$auth.user().first_name + ",SURNAME=" + _this.$auth.user().sur_name + ",O=Не указано,L=" + _this.$auth.user().birth_place + ",ST= ,C=UZ,UID=" + _this.$auth.user().tin + ",1.2.860.3.16.1.2=" + _this.$auth.user().pin + ",T=(noaniq)";
            const formData = new FormData();
            let queryStr = "";
            let appData;
            let result_data;
            switch (appName) {
                case 'cargo':

                    formData.append('userInfoTR', JSON.stringify(this.appData));
                    queryStr = new URLSearchParams(formData).toString();
                    console.log('http://cargo.customs.uz/oauthTR?' + queryStr)
                    window.open('http://cargo.customs.uz/oauthTR?' + queryStr);
                    break;
                case 'singlewindow':
                    this.$refs.AppForm.action = "//yagonadarcha.uz/oauthTR";
                    this.$nextTick(() => {
                        //console.log($("#appForm").serialize());
                        this.$refs['AppForm'].submit();
                    })
                    break;
                case 'cabinet':

                    this.$refs.AppForm.action = "//ed1.customs.uz/PersonCabinet/MainMenu";
                    this.$refs.AppForm.method = "post";

                    appData = JSON.parse(JSON.stringify(_this.appData));
                    result_data = null;
                    this.$store.commit('setLoading', true);
                    result_data = await this.getSessionId('cabinet');
                    //this.$refs.AppForm.
                    this.$store.commit('setLoading', false);
                    if (result_data && result_data.status === 200) {

                        var s = document.createElement('div'); // is the node
                        s.classList.add('personalcabinet');
                        s.innerHTML = '<input type="hidden" name="SessionID" value="' + result_data.data.data.sesid + '"/>'
                            + '<input type="hidden" name="serialNumberHex" value="' + result_data.data.data.serialnumber + '"/>'
                            + '<input type="hidden" name="INN" value="' + result_data.data.data.userinn + '"/>'
                            + '<input type="hidden" name="PNFL" value="' + _this.$auth.user().pin + '"/>'
                            + '<input type="hidden" name="username" value="' + result_data.data.data.name.replaceAll("", "'") + '"/>'
                            + '<input type="hidden" name="SHK" value="SHK"/>'
                            + '<input type="hidden" name="prcod" value="' + result_data.data.data.prcod + '"/>';


                        _this.appData = "";
                        _this.$refs.AppForm.appendChild(s);
                        //console.log(_this.$refs.AppForm);
                        /*$("#SessionID").attr('value', result_data.data.data.sesid)
                        $("#serialNumberHex").attr('value', result_data.data.data.serialnumber)
                        //$("#serialNumberHex").attr('value',result_data.data.data.serialnumber)
                        $("#INN").attr('value', result_data.data.data.userinn)
                        $("#PNFL").attr('value', _this.$auth.user().pin)

                        $("#username").attr('value', result_data.data.data.name.replaceAll("", "'"))
                        ///!*_this.$toast.success(result_data.data.data.name)
                        //console.log(_this.$refs['arxivSubmit'])*!/
                        //console.log(_this.$refs['arxivSubmit']);
                        _this.$refs['AppForm'].submit();*/
                    }
                    this.$nextTick(() => {
                        //console.log($("#appForm").serialize());
                        this.$refs['AppForm'].submit();
                        _this.appData = JSON.parse(JSON.stringify(appData));
                    })
                    break;
                case 'arxiv':

                    this.$refs.AppForm.action = "//ed2.customs.uz/E_ARXIV/authentication";
                    this.$refs.AppForm.method = "post";

                    appData = JSON.parse(JSON.stringify(_this.appData));
                    result_data = null;
                    this.$store.commit('setLoading', true);
                    result_data = await this.getSessionId();
                    //this.$refs.AppForm.
                    this.$store.commit('setLoading', false);
                    if (result_data && result_data.status === 200) {


                        var s = document.createElement('div'); // is the node
                        s.classList.add('personalcabinet');
                        s.innerHTML = '' +
                            '<input type="hidden" name="SessionID" value="' + result_data.data.data.sesid + '"/>'
                            + '<input type="hidden" name="serialNumberHex" value="' + result_data.data.data.serialnumber + '"/>'
                            + '<input type="hidden" name="INN" value="' + result_data.data.data.userinn + '"/>'
                            + '<input type="hidden" name="PNFL" value="' + _this.$auth.user().pin + '"/>'
                            + '<input type="hidden" name="username" value="' + result_data.data.data.name.replaceAll("", "'") + '"/>'
                            + '<input type="hidden" name="ETR" value="ETR"/>';


                        _this.appData = "";
                        _this.$refs.AppForm.appendChild(s);
                    }
                    this.$nextTick(() => {
                        //console.log($("#appForm").serialize());
                        this.$refs['AppForm'].submit();

                        _this.appData = JSON.parse(JSON.stringify(appData));
                    })
                    break;
                case 'dep':

                    this.$refs.AppForm.action = "//dep.customs.uz/qarzdor/MainMenu";
                    this.$refs.AppForm.method = "post";

                    appData = JSON.parse(JSON.stringify(_this.appData));
                    result_data = null;
                    this.$store.commit('setLoading', true);
                    result_data = await this.getSessionId("dep");
                    //this.$refs.AppForm.
                    this.$store.commit('setLoading', false);
                    if (result_data && result_data.status === 200) {


                        var s = document.createElement('div'); // is the node
                        s.classList.add('personalcabinet');
                        s.innerHTML = '' +
                            '<input type="hidden" name="SessionID" value="' + result_data.data.data.sesid + '"/>'
                            + '<input type="hidden" name="serialNumberHex" value="' + result_data.data.data.ser_num + '"/>'
                            + '<input type="hidden" name="INN" value="' + result_data.data.data.inn + '"/>'
                            //+ '<input type="hidden" name="PNFL" value="' + _this.$auth.user().pin + '"/>'
                            + '<input type="hidden" name="clName" value="' + result_data.data.data.name.replaceAll("", "'") + '"/>'
                            + '<input type="hidden" name="DEP" value="DEP"/>';


                        _this.appData = "";
                        _this.$refs.AppForm.appendChild(s);
                    }
                    this.$nextTick(() => {
                        console.log($("#appForm").serialize());
                        this.$refs['AppForm'].submit();

                        _this.appData = JSON.parse(JSON.stringify(appData));
                    })
                    break;
                case 'navbat':

                    this.$refs.AppForm.action = "//e-navbat.customs.uz/navbat/check_login_newcustoms";
                    this.$refs.AppForm.method = "post";

                    appData = JSON.parse(JSON.stringify(_this.appData));
                    result_data = null;
                    this.$store.commit('setLoading', true);

                    //this.$refs.AppForm.
                    this.$store.commit('setLoading', false);

                    var s = document.createElement('div'); // is the node
                    s.classList.add('personalcabinet');
                    ///String passnum = "", ism = "", pinfl = "";
                    s.innerHTML = ''
                        + '<input type="hidden" name="passnum" value="' + _this.$auth.user().pport_no + '"/>'
                        // + '<input type="hidden" name="ism" value="' + _this.$auth.user().sur_name + ' ' + _this.$auth.user().name +'"/>'
                        + '<input type="hidden" name="ism" value="' + _this.$auth.user().name + '"/>'
                        + '<input type="hidden" name="pinfl" value="' + _this.$auth.user().pin + '"/>';


                    _this.appData = "";
                    _this.$refs.AppForm.appendChild(s);

                    this.$nextTick(() => {
                        //console.log($("#appForm").serialize());
                        this.$refs['AppForm'].submit();

                        _this.appData = JSON.parse(JSON.stringify(appData));
                    })
                    break;
                case 'ombor':
                    //console.log(this.appData)
                    formData.append('userInfoTR', JSON.stringify(this.appData));
                    let queryStr = new URLSearchParams(formData).toString();
                    //console.log('http://e-ombor.customs.uz/LinkForAnotherSites?' + queryStr)
                    window.open('http://e-ombor.customs.uz/LinkForAnotherSites?' + queryStr);
                    break;
            }
            //this.$refs.AppForm.submit();


        }
    }

}
</script>
<style>
 @import '/public/css/services.css';





</style>
