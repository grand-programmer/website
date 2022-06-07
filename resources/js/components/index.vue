<template>
    <div>
        <v-overlay
            :opacity="1"
            color="#fff"
            :value="overlay"
        >
            <v-progress-circular indeterminate size="200" color="#39ae69">
                <img src="/img/gtk_image.png" height="160" width="160"/>
            </v-progress-circular>
        </v-overlay>
        <loading-bar></loading-bar>
        <full-page :options="options" ref="fullpage" id="fullpage" :skip-init="false">
            <v-hududiy></v-hududiy>
            <div class="section" id="section0">

                <!--==========Logo area==========-->
                <div class="top_menu_space" style=" width: 100%;">


                </div>
                <!--==========End Logo area==========-->


                <!--==========Main Slider area==========-->
                <div class="main_slider_area" style="padding-top: 70px; width: 100%">
                    <router-link class="all_news" to="/services">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;"
                             xml:space="preserve">
<path style="fill:#009688;" d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"/>
                            <path style="fill:#FAFAFA;" d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
	c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483
	c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
	c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"/>

</svg>


                        <p> Барча хизматлар </p></router-link>
                    <div class="slider_inner">


                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/077.png">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">Шаффофлик замирида <br> иқтисодий хавфсизлик</h3>
                                    <!-- <p class="fadeInUp animated">Божхона ахборот тизмиларига =ужжатларингизни жойланг</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="https://ed2.customs.uz/E_ARXIV/authentication">Хизматдан фойдаланиш</a>-->
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>

                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/logistics.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">E-ARHIV</h3>
                                    <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                    <p class="fadeInUp animated">Божхона ахборот тизмиларига =ужжатларингизни
                                        жойланг</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="https://ed2.customs.uz/E_ARXIV/authentication">Хизматдан фойдаланиш</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>
                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/transit.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">Э-транзит</h3>
                                    <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                    <p class="fadeInUp animated">Чегарадан юкларни электрон декларация қилинг</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="http://cargo.customs.uz">Хизматдан фойдаланиш</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>


                        <div data-thumb="/img/custom/slider-5.jpg" data-src="/img/custom/slider-5.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">Интеграциялашган таъриф</h3>
                                    <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                    <p class="fadeInUp animated">Божхона тўловлари ҳисобини олинг</p>
                                    <a class="s_readmore_btn fadeInUp animated" href="http://tarif.customs.uz"
                                       target="_blank">Хизматдан фойдаланиш</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>


                        <div data-thumb="/img/main-slider/slide3.jpg" data-src="/img/main-slider/slide3.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">Ягона дарча</h3>
                                    <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                    <p class="fadeInUp animated">Чегарадан товарлар олиб ўтишда сертификат ва
                                        рухсатномаларни
                                        ушбу ахборот тизими ёрдамида олинг.</p>
                                    <a class="s_readmore_btn fadeInUp animated" href="http://singlewindow.uz"
                                       target="_blank">Хизматдан фойдаланиш</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>

                        <div data-thumb="/img/main-slider/slide4.jpg" data-src="/img/main-slider/slide4.jpg">
                            <div class="container">
                                <div class="slider_text absolute_left">
                                    <h3 class="fadeInLeft animated">Ишга кириш учун онлайн ариза бериш</h3>
                                    <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                    <p class="fadeInUp animated">Божхона хизмати органларидаги вакансиялар рўйхатини
                                        билиб олинг ҳамда ишга кириш учун онлайн ариза юборинг</p>
                                    <a class="s_readmore_btn fadeInUp animated" to="/services/vacancy"
                                       target="_blank">Хизматдан фойдаланиш</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>
                        <!--                        <div data-thumb="/img/main-slider/slide2.jpg" data-src="/img/main-slider/slide2.jpg">
                                                    <div class="container">
                                                        <div class="slider_text absolute_left" style="top:315px">
                                                            <h3 class="fadeInLeft animated">Э-назорат</h3>
                                                            <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                                            <p class="fadeInUp animated"></p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                        <div class="slider_image slider-2">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-thumb="/img/custom/slide-6.jpg" data-src="/img/custom/slider-6.jpg">
                                                    <div class="container">

                                                        <div class="slider_image">

                                                        </div>
                                                        <div class="slider_text absolute_right text-center">
                                                            <h3 class="fadeInLeft animated">Экспорт ва импорт</h3>
                                                            <h4 class="fadeInLeft animated">товарлар тўғрисидаги маълумотларни олиш</h4>
                                                            <p class="fadeInUp animated">Ўзбекистон Республикасидан эспорт қилинган ва импорт
                                                                қилинган
                                                                товарларнинг миқдори қиймати тўғрисида маълумотларни олинг.</p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-thumb="/img/custom/dron.jpg" data-src="/img/custom/dron.jpg">
                                                    <div class="container">
                                                        <div class="slider_text">
                                                            <h3 class="fadeInLeft animated">Мурожаатлар</h3>
                                                            <h4 class="fadeInLeft animated">Фуқаролар ва ТИФ қатнашчилари мурожаатларини кўриб
                                                                чиқиш</h4>
                                                            <p class="fadeInUp animated">Давлат божхона қўмитасига фуқаролар ва ТИФ қатнашчилари
                                                                томонидан <br>берилган мурожаатларни қабул қилиш, кўриб чиқиш, Рахбарият
                                                                қабуллари
                                                                тўғрисида маълумотларни шу ердан олинг </p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-thumb="/img/custom/slider-8.jpg" data-src="/img/custom/slider-8.jpg">
                                                    <div class="container">
                                                        <div class="slider_text">
                                                            <h3 class="fadeInLeft animated">Е-Навбат</h3>
                                                            <h4 class="fadeInLeft animated">Чегарадан ўтиш учун электрон навбат олиш</h4>
                                                            <p class="fadeInUp animated">Автотранспорт воситасида чегара орқали ҳаракатланиш
                                                                учун
                                                                олдиндан навбат олиш хизматидан фойдаланинг </p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                    </div>
                                                </div>-->

                    </div>
                </div>
                <!--==========End Main Slider area==========-->
                <component is="script" src="js/theme.js"></component>
            </div>
            <div class="section ">
                <div class="row"><h3 class="text-center section_title">БЎЛИМЛАР</h3></div>
                <div class="container-fluid">


                    <div class="row pb-8" style="margin: 24px!important; justify-content: center;">



                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/man.svg"></div>
                                <div class="cardContent">
                                    <h3>Жисмоний шахслар учун</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Жисмоний шахслар учун керакли хизматлар ва маълумотларни
                                        билиб олинг</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/tif.svg"></div>
                                <div class="cardContent">
                                    <h3>ТИФ иштирокчилари учун</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни
                                        билиб олинг</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/message.svg"></div>
                                <div class="cardContent">
                                    <h3>Мурожаатлар</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                        маълумотлар</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/folder.svg"></div>
                                <div class="cardContent">
                                    <h3>Сўровнома</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">ожхона Қўмитасининг очиқ маълумотларини кўчириб
                                        олишингиз
                                        мумкин</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/way.svg"></div>
                                <div class="cardContent">
                                    <h3>Қизил ва яшил йўлак</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/camera.svg"></div>
                                <div class="cardContent">
                                    <h3>Кузатув камералари</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Божхона қўмитаси кузатув камералари тўғрисидаги маълумотлар</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/corruption.svg"></div>
                                <div class="cardContent">
                                    <h3>Коррупцияга қарши курашиш</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги ишлари</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/artif.svg"></div>
                                <div class="cardContent">
                                    <h3>Интеллектуал мулк </h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Интеллектуал мулк объектлари божхона реестри</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/barcode.svg"></div>
                                <div class="cardContent">
                                    <h3>ТИФ номенклатураси</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Интеллектуал мулк объектлари божхона реестри</a>
                                </li>

                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="img"><img src="/img/service/message.svg"></div>
                                <div class="cardContent">
                                    <h3>Мурожаатлар</h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style="text-align: center;">
                                    <a href="#">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                        маълумотлар</a>
                                </li>

                            </ul>
                        </div>

                    </div>


                </div>


                <!--==========End Portfolio area==========-->
            </div>
            <div class="section yangiliklar" id="section3">

                <news-in-home></news-in-home>
            </div>
            <div v-if="stat" class="section asosiy_korsatkichlari slide-charts">
                <div class="slider2 ">

                    <div class="chartslider-item11" height="800px">
                        <div class="first_line">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-4">

                                        <h2>Статистик маълумотлар</h2>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="chart1">Божхона чегараларидан ўтган автомобиллар сони (Вилоятлар
                                            бўйича)
                                        </div>
                                        <div id="chart1" class="chart-item"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="chart2">Божхона чегараларидан ўтган автомобиллар сони (Вилоятлар
                                            бўйича)
                                        </div>
                                        <div id="chart2" class="chart-item"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="second_line">
                            <!-- <div id="chartslider-item1" class="chart-item"></div>-->
                            <div class="second_line_title">
                                <div class="chart12">Жорий йилдаги товар айланмаси</div>
                                <div class="chart13">Жорий йилдаги экпорт ва импорти тўғрисида</div>
                            </div>
                            <div id="chart12" class="chart-item">
                            </div>
                            <div id="chart13" class="chart-item"></div>

                        </div>
                        <div class="third_line">
                            <div class="third_line_title">
                                <div class="chart12">Жорий йилдаги экспорти харитада</div>
                                <div class="chart13">Вилоятлар бўйича жорий йилдаги экпорт ва импорти тўғрисида</div>
                            </div>
                            <div id="chart10" class="chart-item"></div>
                            <div id="chart11" class="chart-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="section asosiy_korsatkichlari2">
                <div class="row content">
                    <div class="col-12">
                        <div class="stat_menu">
                            <h3> Божхона статистикаси</h3>
                            <ul>
                                <li><a :class="(stat_type==1)?'active':''" href="#" @click="stat_type=1">Ўзбекистон
                                    Республикаси товарлар импорти ва экспорти ҳудудлар кесимида</a></li>
                                <li><a :class="(stat_type==2)?'active':''" href="#" @click="stat_type=2">Божхона
                                    чегараларидан ўтган автомобиллар сони </a></li>
                                <li><a :class="(stat_type==3)?'active':''" href="#" @click="stat_type=3">Ўзбекистон
                                    Республикасида кунлик товарлар импорти ва экспорти</a></li>
                                <!--                                <li><a :class="(stat_type==4)?'active':''" href="#" @click="stat_type=4">Ўзбекистон
                                                                    Республикасида товарлар импорти ва экспорти</a></li>
                                                                <li><a :class="(stat_type==5)?'active':''" href="#" @click="stat_type=5">Ўзбекистон
                                                                    Республикасида товарлар импорти ва экспорти</a></li>-->
                            </ul>
                            <a class="all_stats" href="https://charts.customs.uz" target="_blank">
                                Барча статистика <i class="fa fa-arrow-right"></i>

                            </a>
                        </div>
                    </div>
                    <div class="col-9" v-if="stat_type==1">
                        <h3>Ўзбекистон Республикаси товарлар импорти ва экспорти ҳудудлар кесимида</h3>
                        <div id="columnchart1" ref="clusteredColumn" class="chart"></div>
                        <div class="filter row">
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto"
                                    label="Ойлар бўйича"
                                    v-model="month"
                                    :items="months"
                                    auto-select-first
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto1"
                                    label="Йиллар бўйича"
                                    v-model="year"
                                    :items="years"
                                    hide-selected
                                    auto-select-first
                                ></v-autocomplete>
                            </v-col>
                        </div>

                    </div>
                    <div class="col-9" v-if="stat_type==2">
                        <h3>Ўзбекистон Республикаси кунлик товарлар импорти ва экспорти</h3>
                        <div id="columnchart2" class="chart"></div>
                        <div class="filter row">
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto"
                                    label="Ойлар бўйича"
                                    v-model="month"
                                    :items="months"
                                    auto-select-first
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto1"
                                    label="Йиллар бўйича"
                                    v-model="year"
                                    :items="years"
                                    hide-selected
                                    auto-select-first
                                ></v-autocomplete>
                            </v-col>
                        </div>

                    </div>
                    <div class="col-9" v-if="stat_type==3">
                        <h3>Ўзбекистон Республикаси кунлик товарлар импорти ва экспорти</h3>
                        <div id="columnchart3" class="chart"></div>
                        <div class="filter row">
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto"
                                    label="Ойлар бўйича"
                                    v-model="month"
                                    :items="months"
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="3">
                                <v-autocomplete
                                    ref="auto1"
                                    label="Йиллар бўйича"
                                    v-model="year"
                                    :items="years"
                                    hide-selected
                                    auto-select-first
                                ></v-autocomplete>
                            </v-col>
                        </div>

                    </div>
                </div>

            </div>

            <!--==========End Our partner area==========-->
            <div class="section">
                <div class="container-fluid contact_faq">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="chose_inner_area">
                                <div class="section_tittle">
                                    <h2>Кўп бериладиган саволлар</h2>
                                </div>
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="false">

                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a role="button" data-bs-toggle="collapse" data-bs-parent="#accordion"
                                                   href="#chose3" aria-expanded="true" aria-controls="chose3">
                                                    Тариф преференциялари қайси қонун ҳужжатларига мувофиқ қай тартибда
                                                    қўлланилади?
                                                    <span>
                                                    <i class="fa fa-plus" aria-hidden="false"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="chose3" class="panel-collapse collapse  in show" role="tabpanel"
                                             aria-labelledby="headingThree">
                                            <div class="panel-body">
                                                Ўзбекистон Республикаси Божхона кодексининг 300-моддасига мувофиқ
                                                тартибга
                                                солиниб, тариф преференсиялари божхона божларини тўлашдан озод етиш,
                                                божхона
                                                божлари ставкаларини камайтириш ёки муайян давлатларда ишлаб чиқарилган
                                                товарларни божхона ҳудудига преференсиал олиб кириш ёки ушбу ҳудуддан
                                                преференсиал олиб чиқишда квоталар белгилаш тарзида берилади.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a role="button" class="collapsed" data-bs-toggle="collapse"
                                                   data-bs-parent="#accordion" href="#chose1"
                                                   aria-expanded="false" aria-controls="chose1">
                                                    Қандай қилиб ҳудудий божхона бошқармалари билан солиштирма
                                                    далолатнома
                                                    тузиш мумкин?
                                                    <span>
                                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="chose1" class="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                Давлат божхона қўмитасининг расмий веб сайти “Електрон хизматлар”
                                                рукнида
                                                “Тадбиркорнинг шахсий кабинети” (http://ed1.customs.uz/PersonCabinet)
                                                орқали
                                                олиш мумкин.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-bs-toggle="collapse"
                                                   data-bs-parent="#accordion"
                                                   href="#chose2" aria-expanded="false" aria-controls="chose2">

                                                    Божхона тўловларини бўлиб-бўлиб ёки кечиктириб тўлаш тўғрисида
                                                    маълумот
                                                    берсангиз?
                                                    <span>
                                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="chose2" class="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                                Божхона кодексининг 329, 330, 331-моддаларига мувофиқ божхона
                                                тўловларини
                                                кечиктириб ёки бўлиб-бўлиб тўлаш божхона декларацияси қабул қилинган
                                                кундан
                                                еътиборан олтмиш календар кундан ошмаслиги лозим. Божхона тўловларини
                                                кечиктириб ёки бўлиб-бўлиб тўлаш имконияти Ўзбекистон Республикаси
                                                Президентининг ёхуд Ўзбекистон Республикаси Вазирлар Маҳкамасининг
                                                қарорига
                                                биноан узоқроқ муддатларга ва божхона тўловлари тўланиши таъминланмаган
                                                ҳолда берилиши мумкин.

                                                Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имкониятини олиш
                                                учун
                                                тўловчи божхона органига божхона тўловлари суммаларини тўлаш бўйича ёзма
                                                мажбуриятни ўз ичига олган аризани ва жхона тўловлари тўланиши
                                                таъминланганлигини тасдиқловчи ҳужжатни тақдим етади.

                                                Божхона тўловлари тўланишини таъминлаш тўловчининг танловига кўра
                                                исталган –
                                                пул маблағларини божхона органининг шахсий ғазна ҳисобварағига киритиш,
                                                товарларни гаровга қўйиш, банк кафолатини тақдим етиш, божхона
                                                тўловларини
                                                тўлаш мажбуриятини суғурталаш ёки кафиллик орқали амалга оширилади.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFive">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-bs-toggle="collapse"
                                                   data-bs-parent="#accordion"
                                                   href="#chose5" aria-expanded="false" aria-controls="chose5">
                                                    Енг кўп қулайлик бериш режимини белгиланган давлатлар ҳамда тариф
                                                    ставкалари қандай?
                                                    <span><i class="fa fa-plus" aria-hidden="true"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="chose5" class="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="headingFive">
                                            <div class="panel-body">
                                                Ўзбекистон Республикаси билан енг кўп қулайлик бериш режимини
                                                белгиланган
                                                давлатлар (рўйхат рақами 3267, 30.06.2020й.) сони 47 та бўлиб,
                                                Ўзбекистон
                                                Республикаси савдо-иқтисодий муносабатларда енг кўп қулайлик бериш
                                                режимини
                                                қўллаётган мамлакатларда ишлаб чиқарилган товарларга нисбатан, товарни
                                                жўнатувчи ва експорт қилувчи мамлакатдан қатъи назар бож тарифи билан
                                                белгиланган ставкалар (бир баровар) миқдоридаги божхона божлари
                                                қўлланилади.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingSix">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-bs-toggle="collapse"
                                                   data-bs-parent="#accordion"
                                                   href="#chose6" aria-expanded="false" aria-controls="chose6">
                                                    Товарни муайян мамлактда ишлаб чиқарилганлигини тасдиқловчи ҳужжат
                                                    нима
                                                    ва унинг турлари?
                                                    <span><i class="fa fa-plus" aria-hidden="true"></i>
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="chose6" class="panel-collapse collapse" role="tabpanel"
                                             aria-labelledby="headingFive">
                                            <div class="panel-body">
                                                Божхона кодекси 363-моддасида, товарнинг муайян мамлакатда ишлаб
                                                чиқарилганлиги, експорт ёки реекспорт қилувчи мамлакатда белгиланган
                                                тартиб
                                                ва шаклга мувофиқ ваколатли орган томонидан берилган, шу жумладан
                                                електрон
                                                шаклда берилган товарнинг келиб чиқиши тўғрисидаги сертификат билан
                                                тасдиқланади.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <front-calendar></front-calendar>

                    </div>
                </div>


                <!--==========Footer area==========-->
                <div class="footer_link"></div>
                <footer class="footer_area">
                    <div class="footer_widget_area">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="footer_widget_inner">
                                        <div class="f_about_widget">
                                            <div class="logo"><img src="/img/gtk_image.png" alt="">Ўзбекистон
                                                Республикаси
                                                Давлат
                                                божхона қўмитаси
                                            </div>
                                            <p>Сайтдан олинган ҳар қандай
                                                маълумотлардан фойдаланганда
                                                Ўзбекистон Республикаси ДБҚ сайтидан
                                                олинганлиги кўрсатиб ўтилиши шарт.</p>
                                            <p>
                                                ЎзМАА Интернет-ОАВ гувоҳномаси № 0902
                                            </p>
                                            <p> © 2001-2021 Ўзбекистон Республикаси Давлат божхона қўмитаси.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-5">
                                    <div class="footer_widget_inner">
                                        <div class="f_navigation_widget">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Қўмита
                                                    ҳақида</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Фаолият</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right"
                                                                   aria-hidden="true"></i>Ҳужжатлар</a></li>
                                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Очиқ
                                                    қўмита</a>
                                                </li>
                                                <li><a href="https://charts.customs.uz"><i class="fa fa-angle-right"
                                                                                           aria-hidden="true"></i>Статистика</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Оав
                                                    учун</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Боғланиш</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="footer_widget_inner">
                                        <div class="f_contact_widget">
                                            <ul class="contact_lsit">
                                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>100003,
                                                    Тошкент шаҳри,Ислом Каримов кўчаси 3 уй</a></li>
                                                <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>(+998-78)
                                                    120-76-00</a>
                                                </li>
                                                <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>info@customs.uz</a>
                                                </li>
                                            </ul>
                                            <ul class="f_widget_social">
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
                <!--==========End Footer area==========-->
            </div>

        </full-page>
        <index_scripts ref="scripts"></index_scripts>


    </div>
</template>

<script>

import index_scripts from '../components/homepage/scripts';
import NewsInHome from './homepage/news';
import FrontCalendar from './homepage/calendar';
import loadingBar from "../components/base/loadingbar.vue";


export default {


    name: "Index-Page",
    data() {
        return {
            stat_type: 1,
            month: 0,
            months: [
                {
                    text: 'Барчаси',
                    value: 0
                }, {
                    text: 'Январ',
                    value: 1
                },
                {
                    text: 'Феврал',
                    value: 2
                },
                {
                    text: 'Март',
                    value: 3
                },
                {
                    text: 'Апрел',
                    value: 4
                },
                {
                    text: 'Май',
                    value: 5
                },
                {
                    text: 'Июн',
                    value: 6
                },
                {
                    text: 'Июл',
                    value: 7
                },
                {
                    text: 'Август',
                    value: 8
                },
                {
                    text: 'Сентябр',
                    value: 9
                },
                {
                    text: 'Октябр',
                    value: 10
                },
                {
                    text: 'Ноябр',
                    value: 11
                },
                {
                    text: 'Декабр',
                    value: 12
                }
            ],
            year: 2022,
            firstStart: 1,
            years: [
                2018, 2019, 2020, 2021, 2022
            ],
            overlay: true,
            stat: false,
            options: {
                lockAnchors: true,
                anchors: ['0', '1', '2', '3', '4', '5'],
                sectionsColor: ['#fff', '#faf9f9', '#fff', '#efefef', '#fff', '#fff'],
                //css3: true,
                menu: '.logo_area',
                fixedElements: 'body > .footer_links',
                lazyLoading: false,
                navigation: true,
                slideSelector: '.fslide',
                sectionSelector: '.section',
                normalScrollElements: '.select,.v-autocomplete__content, .submenu.dropdown-menu',
                scrollOverflow: false,
                scrollOverflowOptions: {
                    scrollbars: false,
                    mouseWheel: false,
                    hideScrollbars: true,
                    fadeScrollbars: true,
                    disableMouse: true,
                },
                //recordHistory:false,


                //events
                afterLoad: function (origin, destination, direction) {
                    //fullpage_api.init();

                    skipPages(origin, destination, direction);
                    $('body').on('click', 'a.logo_link', function () {
                        fullpage_api.moveTo(1);
                    })
                }
            },

        }

    },
    mounted() {
        if (this.year == 2022) this.months.map(function (item) {
            if (item.value > 2) item.disabled = true;
            return item;
        })
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        setTimeout(() => {
            this.overlay = false
        }, 2500);
        if (this.$route.query.stat == 1)
            this.stat = true;
        this.clusteredColumn();
    },
    watch: {
        stat_type: function (v) {
            if (v == 1) {
                setTimeout(() => this.$refs.scripts.createRootColumnChart(), 100);
                setTimeout(() => this.clusteredColumn(true), 100)
            }
            if (v == 2) {
                setTimeout(() => this.$refs.scripts.createRootPieChart(), 100);
                setTimeout(() => this.pieChart(true), 100)
            }
            if (v == 3) {
                setTimeout(() => this.$refs.scripts.createRootMultipleValue(), 100);
                setTimeout(() => this.multipleValue(true), 100)
            }
        },
        year: function (v) {
            if (this.year == (new Date).getYear()) {
                if (this.month >= (new Date).getMonth()) this.month = 0;
                this.months.map(function (item) {
                    if (item.value >= (new Date).getMonth()) item.disabled = true;
                    return item;
                })
            } else this.months.map(function (item) {
                item.disabled = false;
                return item;
            })
            if (this.stat_type == 1) {
                this.clusteredColumn(true);
            }
            if (this.stat_type == 2) {
                this.pieChart(true);
            }
            if (this.stat_type == 3) {
                this.multipleValue(true);
            }
        },
        month: function (v, old) {

            if (this.stat_type == 1) {
                this.clusteredColumn(true);
            }
            if (this.stat_type == 2) {
                this.pieChart(true);
            }
            if (this.stat_type == 3) {
                this.multipleValue(true);
            }
        }

    },
    created() {
        if (this.$route.query.stat == 1)
            this.stat = true;

        // this.clusteredColumn();
    },
    methods: {
        clusteredColumn(change = false) {

            this.$refs.scripts.year = this.year;
            this.$refs.scripts.month = this.month;
            setTimeout(() => {
                this.$refs.scripts.clusteredColumn()
            }, 50);
        },
        pieChart(change = false) {
            if (change) this.$refs.scripts.data = [
                {
                    "country": "Қорақалпоғистон Респ.",
                    "import": 89,
                    "export": 25
                }, {
                    "country": "Хоразм вилояти",
                    "import": 54,
                    "export": 39
                }, {
                    "country": "Бухоро вилояти",
                    "import": 57,
                    "export": 53
                }, {
                    "country": "Навоий вилояти",
                    "import": 50,
                    "export": 28
                }, {
                    "country": "Самарқанд вилояти",
                    "import": 63,
                    "export": 75
                }, {
                    "country": "Сурхондарё вилояти",
                    "import": 90,
                    "export": 57
                }
            ];
            setTimeout(() => {
                this.$refs.scripts.pieChart()
            }, 50);
        },
        multipleValue(change = false) {
            setTimeout(() => {
                this.$refs.scripts.multipleValue()
            }, 50);
        }


    },
    components: {
        index_scripts,
        NewsInHome,
        FrontCalendar,
        loadingBar,

    }


}

function skipPages(origin, destination, direction) {
    if (destination.index == 1) {
        $('#fp-nav ul li span').css('background', '#fff');
    } else $('#fp-nav ul li span').css('background', '#000')
    if (origin.index === 0 && destination.index === 1 && pageloaded == 0) {
        fullpage_api.moveTo('2', 2);
    }
    if (origin.index === 1 && destination.index === 0 && pageloaded == 1) {
        fullpage_api.moveTo('1', 1);
    }
    if (destination.item.classList.contains('skip')) {
        if (destination.index === 0 && pageloaded == 0) {
            pageloaded = 1;
            fullpage_api.moveTo(destination.index + 1);
        }
    } else {
        if (destination.index != 0 && pageloaded == 0) {

            $('.hududiy.section').addClass('skip');
            $('.hududiy.section').css("display", "none !important;");
            fullpage_api.silentMoveTo(destination.index - 1);
            pageloaded = pageloaded + 1;
        }
    }
}


</script>


<style scoped>
.v-application {
    font-family: "Montserrat", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
}
</style>
