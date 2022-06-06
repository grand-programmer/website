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
                <!--==========Portfolio area==========-->
                <!--                <div class="bolimlar">-->
                <!--                    <div class="container-fluid">-->
                <!--                        <h3 class="text-center bolimlar_title"></h3>-->
                <!--                        <div class="row">-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"> <lottie-player src="![](../../../public/img/lottie/ser1.json)" background="transparent" speed="1"-->
                <!--                                                                         style="width: 100px; height: 100px;" loop-->
                <!--                                                                         autoplay></lottie-player></div>-->
                <!--                                <div class="bolim_title">Жисмоний шахслар учун</div>-->

                <!--                                <div class="bolim_description">Жисмоний шахслар учун керакли хизматлар ва маълумотларни-->
                <!--                                    билиб-->
                <!--                                    олинг-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image">-->
                <!--                                    <svg height="496pt" viewBox="0 0 496 496" width="496pt"-->
                <!--                                         xmlns="http://www.w3.org/2000/svg">-->
                <!--                                        <path-->
                <!--                                            d="m496 208h-17.976562l-26.792969 14.097656c-3.015625-1.664062-6.152344-3.074218-9.535157-3.921875l-33.703124-8.433593v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-31.078125-24.351562-57.085937-54.28125-57.992187-1.519531-.039063-3.015625.015624-4.519531.089843l8.738281-20.457031-42.363281-42.351562-24.972657 16.253906c-9.488281-5.34375-19.523437-9.503906-29.945312-12.421875l-6.167969-29.136719h-60.96875l-6.167969 29.144531c-10.421874 2.917969-20.464843 7.078125-29.945312 12.421875l-24.972656-16.253906-42.328125 42.328125 8.589843 20.472656c-.328124-.015625-.640624-.074219-.96875-.082031-15.320312-.445312-29.75 5.144531-40.710937 15.785156-10.976563 10.632813-17.015625 24.902344-17.015625 40.183594v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-21.984375 5.496093-39.847656-23.238281h-26.167969v165.769531l78.703125 26.230469h15.328125l1.914062-6.703125 24.125 14.480469c.394532 13.117187 10.914063 23.671875 24.019532 24.132812.460937 13.050782 10.949218 23.539063 24 24 .460937 13.050782 10.949218 23.539063 24 24 .476562 13.355469 11.414062 24.089844 24.878906 24.089844 5 0 9.902344-1.558594 14.023438-4.335938l7.085937 6.257813c4.441406 3.910156 10.160156 6.078125 16.097656 6.078125h1.480469c13.3125 0 24.144531-10.761719 24.3125-24.03125 13.167969-.167969 23.832031-10.832031 24-24 13.175781-.167969 23.847656-10.847656 24-24.023438 13.296875-.3125 24.03125-11.175781 24.03125-24.546874 0-.804688-.039062-1.597657-.121094-2.398438l144.121094-72.054688zm-80-61.984375v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 39.96875 9.984375-87.976562 46.304687v-21.550781c0-10.753906-4.34375-20.601563-11.457031-27.878906l27.457031-6.859375v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.222656-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187zm-155.9375 126.230469-36.214844-11.574219c-16.503906-5.289063-34.367187-6.078125-51.261718-2.335937l-4.585938 1.015624v-2.367187c0-11.03125 7.480469-20.609375 18.175781-23.289063l45.824219-11.449218v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.289062-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 45.816407 11.449218c10.695312 2.679688 18.175781 12.257813 18.175781 23.289063v29.976563l-1.976562 1.039062h-4.902344l-49.183594-14.054688c-3.875-1.097656-7.867188-1.546874-11.875-1.699218zm-90.269531-152.511719c15.023437-29.109375 45.261719-47.734375 78.207031-47.734375 32.632812 0 62.742188 18.375 77.878906 47.089844-3.808594 7.636718-5.878906 16.09375-5.878906 24.910156v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-32 8.011718-32.007812-8.011718v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-31.078125-24.351562-57.085937-54.28125-57.992187-15.3125-.449219-29.75 5.144531-40.710938 15.785156-10.96875 10.640625-17.007812 24.910156-17.007812 40.191406v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-32 8.011718-32.007812-8.011718v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-9.414063-2.265625-18.351563-6.207031-26.28125zm-36.792969-48.382813 25.558594-25.558593 22.496094 14.640625 4.304687-2.640625c10.785156-6.609375 22.441406-11.449219 34.640625-14.367188l4.921875-1.179687 5.566406-26.246094h35.03125l5.550781 26.238281 4.921876 1.175781c12.199218 2.921876 23.855468 7.761719 34.640624 14.371094l4.304688 2.640625 22.496094-14.640625 25.527344 25.535156-9.074219 21.246094c-6.175781 2.65625-11.902344 6.394532-16.886719 11.226563-.328125.320312-.609375.664062-.929688.992187-18.847656-29.960937-52.167968-48.785156-88.070312-48.785156-36.160156 0-69.574219 19-88.375 49.265625-5.03125-5.265625-11.015625-9.53125-17.648438-12.511719zm-29 150.894532v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.246094-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 27.449219 6.859375c-7.113281 7.277343-11.457031 17.125-11.457031 27.878906v5.925781l-24.953125 5.546875.648437-2.265625.304688-14.785156-42.191406-24.613281zm-88-14.246094h5.832031l57.535157 33.558594-29.03125 116.121094-34.335938-11.449219zm65.296875 160-15.746094-5.246094 28.203125-112.800781 18.246094 10.640625v2.285156l-30.03125 105.121094zm54.703125 23.03125c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm24 24c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm24 24c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm32.96875 32.96875c-4.945312 0-8.96875-4.023438-8.96875-8.96875 0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625zm38.6875 8h-1.480469c-2.039062 0-3.992187-.742188-5.511719-2.089844l-5.984374-5.277344 6.007812-6.007812c2.144531-2.144531 3.808594-4.695312 5.039062-7.433594l7.273438 6.054688c1.902344 1.585937 3 3.921875 3 6.410156 0 4.601562-3.742188 8.34375-8.34375 8.34375zm71.742188-72h-1.382813c-2.007813 0-3.96875-.710938-5.503906-2l-43.382813-36.152344-10.25 12.296875 42.128906 35.101563c1.894532 1.585937 2.992188 3.921875 2.992188 6.410156 0 4.601562-3.742188 8.34375-8.34375 8.34375h-1.746094c-1.941406 0-3.839844-.6875-5.335937-1.9375l-43.453125-36.207031-10.25 12.296875 42.128906 35.105468c1.902344 1.574219 3 3.910157 3 6.398438 0 4.601562-3.742188 8.34375-8.34375 8.34375-3.070312 0-6.0625-1.089844-8.417969-3.046875l-17.855469-14.882813c-3.933593-8.039062-12.015624-13.644531-21.480468-13.980468-.460938-13.050782-10.949219-23.539063-24-24-.460938-13.050782-10.949219-23.539063-24-24-.46875-13.355469-11.40625-24.089844-24.871094-24.089844-6.574219 0-13.007812 2.664062-17.65625 7.3125l-14.0625 14.0625c-.839844.839844-1.535156 1.792969-2.242188 2.738281l-24.574218-14.746093 21.542968-75.398438 54.007813-12.007812c14.167969-3.167969 29.105469-2.480469 42.921875 1.941406l11.785156 3.769531-39.953125 19.976563c-9.128906 4.574218-14.800781 13.757812-14.800781 23.96875v1.582031c0 14.777343 12.023438 26.800781 26.800781 26.800781 4.855469 0 9.632813-1.320312 13.785157-3.824219l29.789062-17.863281c5.984375-3.585938 14.015625-2.800781 19.183594 1.847656l67.59375 60.832032c1.808594 1.640624 2.847656 3.96875 2.847656 6.40625 0 4.746093-3.855469 8.601562-8.601562 8.601562zm152.601562-92.945312-134.777344 67.394531c-.4375-.464844-.894531-.90625-1.375-1.335938l-67.582031-60.832031c-5.921875-5.34375-13.578125-8.28125-21.554687-8.28125-5.832032 0-11.558594 1.585938-16.574219 4.59375l-29.800781 17.871094c-1.671876 1.007812-3.582032 1.535156-5.535157 1.535156-5.960937 0-10.800781-4.839844-10.800781-10.800781v-1.582031c0-4.121094 2.289062-7.816407 5.96875-9.65625l44.625-22.3125c7.636719-3.824219 16.703125-4.679688 24.933594-2.3125l50.273437 14.359374 12.175781.304688 150.023438-78.960938zm0 0"/>-->
                <!--                                    </svg>-->
                <!--                                </div>-->
                <!--                                <div class="bolim_title">ТИФ иштирокчилари учун</div>-->
                <!--                                <div class="bolim_description">ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни-->
                <!--                                    билиб-->
                <!--                                    олинг-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">Мурожаатлар</div>-->
                <!--                                <div class="bolim_description">-->
                <!--                                    Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги маълумотлар-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">Сўровнома</div>-->
                <!--                                <div class="bolim_description">Божхона Қўмитасининг очиқ маълумотларини кўчириб-->
                <!--                                    олишингиз-->
                <!--                                    мумкин-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">Қизил ва яшил йўлак</div>-->
                <!--                                <div class="bolim_description">-->
                <!--                                    Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                        <div class="row">-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image">-->
                <!--                                    <img src="/img/service/opendata.png">-->
                <!--                                </div>-->
                <!--                                <div class="bolim_title">Кузатув камералари</div>-->
                <!--                                <div class="bolim_description">Божхона қўмитаси кузатув камералари тўғрисидаги-->
                <!--                                    маълумотлар-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">Коррупцияга қарши курашиш</div>-->
                <!--                                <div class="bolim_description">Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги-->
                <!--                                    ишлари-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">Интеллектуал мулк объектлари</div>-->
                <!--                                <div class="bolim_description">Интеллектуал мулк объектлари божхона реестри</div>-->
                <!--                            </div>-->
                <!--                            <div class="col-md-3 bolim">-->
                <!--                                <div class="bolim_image"><img src="/img/service/opendata.png"></div>-->
                <!--                                <div class="bolim_title">ТИФ номенклатураси</div>-->
                <!--                                <div class="bolim_description">Интеллектуал мулк объектлари божхона реестри</div>-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <div class="container-fluid" >
                    <h3 class="text-center section_title">БЎЛИМЛАР</h3>

                    <div class="row pb-8" style="margin: 24px!important;">
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/man.svg" alt="" ></div>

                            <h3>Жисмоний шахслар учун</h3>
                            <p class="small_text">Жисмоний шахслар учун керакли хизматлар ва маълумотларни
                                билиб олинг</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/tif.svg" alt=""></div>

                            <h3>ТИФ иштирокчилари учун</h3>
                            <p class="small_text">ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни
                                билиб олинг</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/message.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Мурожаатлар</h3>
                            <p class="small_text">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/folder.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Сўровнома</h3>
                            <p class="small_text">Божхона Қўмитасининг очиқ маълумотларини кўчириб
                                олишингиз
                                мумкин</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/way.svg" alt=""></div>

                            <h3>Қизил ва яшил йўлак</h3>
                            <p class="small_text">Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/camera.svg" alt=""></div>

                            <h3>Кузатув камералари</h3>
                            <p class="small_text">Божхона қўмитаси кузатув камералари тўғрисидаги маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/corruption.svg" alt=""></div>

                            <h3>Коррупцияга қарши курашиш</h3>
                            <p class="small_text">Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги ишлари</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/artif.svg" alt=""></div>

                            <h3>Интеллектуал мулк</h3>
                            <p class="small_text">Интеллектуал мулк объектлари божхона реестри</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/barcode.svg" alt=""></div>

                            <h3>ТИФ номенклатураси</h3>
                            <p class="small_text">Интеллектуал мулк объектлари божхона реестри</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/message.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Мурожаатлар</h3>
                            <p class="small_text">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/man.svg" alt="" ></div>

                            <h3>Жисмоний шахслар учун</h3>
                            <p class="small_text">Жисмоний шахслар учун керакли хизматлар ва маълумотларни
                                билиб олинг</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/tif.svg" alt=""></div>

                            <h3>ТИФ иштирокчилари учун</h3>
                            <p class="small_text">ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни
                                билиб олинг</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/message.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Мурожаатлар</h3>
                            <p class="small_text">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/folder.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Сўровнома</h3>
                            <p class="small_text">Божхона Қўмитасининг очиқ маълумотларини кўчириб
                                олишингиз
                                мумкин</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/way.svg" alt=""></div>

                            <h3>Қизил ва яшил йўлак</h3>
                            <p class="small_text">Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/camera.svg" alt=""></div>

                            <h3>Кузатув камералари</h3>
                            <p class="small_text">Божхона қўмитаси кузатув камералари тўғрисидаги маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/corruption.svg" alt=""></div>

                            <h3>Коррупцияга қарши курашиш</h3>
                            <p class="small_text">Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги ишлари</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/artif.svg" alt=""></div>

                            <h3>Интеллектуал мулк</h3>
                            <p class="small_text">Интеллектуал мулк объектлари божхона реестри</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>

                        <div class="card4">
                            <div class="card_img "><img src="/img/service/barcode.svg" alt=""></div>

                            <h3>ТИФ номенклатураси</h3>
                            <p class="small_text">Интеллектуал мулк объектлари божхона реестри</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </div>
                        <div class="card4">
                            <div class="card_img "><img src="/img/service/message.svg" alt=""></div>

                            <h3 style="margin-top: -49px!important;">Мурожаатлар</h3>
                            <p class="small_text">Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги
                                маълумотлар</p>
                            <div class="dimmer"></div>
                            <div class="go-corner" href="#">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
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
