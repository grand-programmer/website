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
        <div class="portfolio_area">


            <h2 class="text-center portfolio_title">Рақамли божхона</h2>

            <div class="container">
                <ul class="nav nav-pills mb-3 portfolio_menu" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Интерактив хизматлар
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Очиқ маълумотлар
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Фойдали ресурслар
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="mobil-ilovalar-tab" data-bs-toggle="pill"
                                data-bs-target="#mobil-ilovalar" type="button" role="tab" aria-controls="mobil-ilovalar"
                                aria-selected="false">Мобил иловалар
                        </button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="portfolio-background1"></div>
                    <div class="tab-container">
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="//my.gov.uz/uz/service/209" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/elektron-deklaratsiyalash.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Товарларни электрон декларациялаш</p>

                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a target="_blank" href="//my.gov.uz/uz/service/220" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/solishtiruv-dalolatnomalari.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Божхона тўловлари бўйича солиштирув далолатномалари</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/82" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/avtotransportda-olib-kirilayotgan-yuk-haqida-malumot.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Автотранспортда олиб кирилаётган юк ҳақида маълумот олиш</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/81" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/temiryoltransportidaolibkirilayotgan.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Темир йўл транспортида олиб кирилаётган юк ҳақида маълумот олиш</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://cargo.customs.uz/" target="_blank" class="portfolio-card">
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
                                    <p>Чет эл товарларига божхона тўловлари тўланишини таъминлаш</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="//my.gov.uz/uz/service/91" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/pochta.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Почта декларацияси</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/list-of-declaration-persons/default/force" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/deklaratsiyalovchi-shaxlar-ruyhati.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Декларацияловчи шахслар рўйхати</p>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://tarif.customs.uz/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/calculator.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Интеграциялашган тариф</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://ed1.customs.uz/REESTR_BQB/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/bojxona-qoida-buzilishi.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Божхона қоида бузилиши</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://service.customs.uz/autogtd_report/index.jsp?pc=9#" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tovarlar-importi.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Товарлар импорти</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://ed1.customs.uz/PersonCabinet/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tadbirkor-shaxsiy-kabineti.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Тадбирконинг шахсий кабинети</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/service/365" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/bojxona-tolovlarini-kechiktirib.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Божхона тўловларини кечиктириб ёки бўлиб тўлаш</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://my.gov.uz/uz/service/331" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/ombor-litsenziyalari.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Омбор лицензиялари</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://fast.upay.uz/merchant/597" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/chet-el-transport.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Чет эл транспорт воситаларини Ўзбекистон Республикасида бўлиш муддатини
                                        узайтириш</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://nomzod.customs.uz/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/ishga-kirish-uchun-navbat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Ишга кириш учун электрон навбат</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://dep.customs.uz/qarzdor/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/tif-ishtirokchisining-dastlabki-pul.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>ТИФ иштирокчисининг дастлабки пул маблағлари</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="/services/appeals" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/elektron-murojaat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Электрон мурожаат йўлаш</p>

                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://e-navbat.customs.uz" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/e-navbat.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>E-Navbat</p>

                                </div>
                            </a>
                        </div>

                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://e-arxiv.customs.uz" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/e-arxiv.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>E-Arxiv</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://www.customs.uz/uz/lists/view/268" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/online-tulov.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>On-Line Тўлов</p>

                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="http://time.customs.uz/" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/chiqish-vaqtini-tadqiqot-va-monitoring.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Чиқиш вақтини тадқиқот ва мониторинг қилиш ахборот платформаси</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-2 portfolio_single p1">
                            <a href="https://axborot.customs.uz/Xabar/#" target="_blank" class="portfolio-card">
                                <div class="portfolio_image">
                                    <img src="/img/icons/korrupsiya-boyicha-xabar-berish.png"/>
                                </div>
                                <div class="portfolio_text">
                                    <p>Корупция бўйича ҳабар бериш</p>

                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="opendata-container">
                            <div class="opendata">
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Импорт <br>қилинадиган товарларнинг нарх
                                            маълумотлари бюллетени
                                        </div>
                                        <div class="download_links"><p><a href="https://data.gov.uz/uz/datasets/download/7/xml">XML</a><br/><a href="https://data.gov.uz/uz/datasets/download/7/json">JSON</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/7/csv">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Расмийлаштир <br/>илган божхона юк декларациялари
                                            сони
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256952a2e256d868e82d3&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Божсиз савдо дўконларига оид маълумотлар
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=2&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257982a2e256d868e82db&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Ҳудудий божхона бошқармаларнинг ғазна шахсий ҳисоб
                                            варағи <br/> маълумотлари
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610255a12a2e256d868e82cc&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Божхона омборлари тўғрисида маълумотлар
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610258012a2e256d868e82dd&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Ҳалқаро йўл-ташувчилар конвенциясини бузган <br/>ташувчилар
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025bcb2a2e256d868e82f3&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text">Божхона <br/> имтиёзларини назарда тутувчи норматив
                                            ҳужжатлар <br/>базаси
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=6102560e2a2e256d868e82d0&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Ҳалқаро шартномалар рўйҳати
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025ab02a2e256d868e82f1&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Эркин омборлар тўғрисида маълумотлар
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610257632a2e256d868e82d9&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Экспорт расмийлаштируви учун сарфланган вақт бўйича
                                            постлар рейтинги
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d552a2e256d868e8300&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Импорт расмийлаштируви учун сарфланган вақт бўйича
                                            постлар рейтинги
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025d852a2e256d868e8304&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Божхона постлари классификаторлари
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=610256d82a2e256d868e82d5&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Давлат <br/> чегарасидан темир йўл ва автомобиллар
                                            ўтказиш пунктлари рўйхати
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025dd82a2e256d868e8306&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Чегара орқали ҳаракатланган юк автотранспорти
                                            божхона расмийлаштрувига сарфланган <br/> вақт
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025e382a2e256d868e830c&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Республикага импорт қилинган товарлар ҳақида
                                            маълумот
                                        </div>
                                        <div class="download_links"><p><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=2&tableType=2">XML</a><br/><a href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=1&tableType=2">JSON</a><br/><a
                                            href="https://data.egov.uz/apiData/MainData/GetByFile?id=61025cab2a2e256d868e82fc&fileType=4&tableType=2">CSV</a></p></div>
                                    </div>

                                </div>
                                <div class="portfolio_single p2">
                                    <div class="shadow-right"></div>
                                    <div class="portfolio_content">
                                        <div class="portfolio_text"> Давлат божхона қўмитасига келиб тушган мурожаатлар
                                            статистикаси
                                        </div>
                                        <div class="download_links"><p><a href="https://data.gov.uz/uz/datasets/download/16697/xml">XML</a><br/><a href="https://data.gov.uz/uz/datasets/download/16697/json">JSON</a><br/><a
                                            href="https://data.gov.uz/uz/datasets/download/16697/csv">CSV</a></p></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="foydali-resurslar row">
                            <a class="foydali-resurs col-4" href="#">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/ombor.png)">
                                </div>
                                <div class="foydali-resurs-text">Божхона омборлари реестри

                                </div>
                            </a>
                            <a class="foydali-resurs col-4" href="#">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/intellektual-mulk.png)">
                                </div>
                                <div class="foydali-resurs-text">интеллектуал мулк объектлари реестри

                                </div>
                            </a>
                            <a class="foydali-resurs col-4" href="#">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/meva-sabzavot.png)">
                                </div>
                                <div class="foydali-resurs-text">Экспорт қилинган мева-сабзавот махсулотлари

                                </div>
                            </a>
                            <a class="foydali-resurs col-4" href="#">
                                <div class="foydali-resurs-image" style="background-image: url(/img/icons/nohalol.png)">
                                </div>
                                <div class="foydali-resurs-text">ноҳалол экспортчилар реестри

                                </div>
                            </a>
                            <a class="foydali-resurs col-4" href="#">
                                <div class="foydali-resurs-image"  style="background-image: url(/img/icons/import-qiymati.png)">
                                </div>
                                <div class="foydali-resurs-text">Импорт товарларнинг божхона қиймати

                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                <div class="tab-pane" id="mobil-ilovalar" role="tabpanel" aria-labelledby="mobil-ilovalar-tab">
                    <div class="background"></div>
                    <div class="tab-container">
                        <div class="mobil-ilovalar row">
                            <a class="mobil-ilova col-6"href="https://data.gov.uz/uz/datasets/download/16697/xml" target="_blank">
                                <div class="mobil-ilova-image" style="background-image: url(/img/service/akt-sverki.png)">
                                </div>
                                <div class="mobil-ilova-text">Божхона тўловлари бўйича солиштирув далолатномаси бўйича он-лайн маълумот олиш мобил иловаси

                                </div>
                            </a>


                            <a class="mobil-ilova col-6" target="_blank" href="https://play.google.com/store/apps/details?id=uz.uzbi.audit">
                                <div class="mobil-ilova-image" style="background-image: url(/img/service/bojxona-auditi.png)">
                                </div>
                                <div class="mobil-ilova-text">Божхона аудити бўйича билим ва кўникмаларни оширишга мўлжалланган мобил илова

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
export default {
    name: 'Services',
    data() {
        return {
            breadcrumb_items: [
                {
                    text: 'Асосий саҳифа',
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: true,
                    exact: true,
                },
            ],
        }
    },

}
</script>
