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
                <div class="top_menu_space" style="height: 60px; width: 100%;">


                </div>
                <!--==========End Logo area==========-->


                <!--==========Main Slider area==========-->
                <div class="main_slider_area" style="height: calc(100vh - 60px); width: 100%">
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
            <div class="section " >
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
                <div class="container">
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->

<!--                            <div class="card-image" style="background: url(../../../public/img/plane.svg)">-->

<!--                                <img src="../../../public/img/plane.svg" alt="">-->
<!--                            </div>-->


<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Exploring around</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.-->
<!--                                </p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">A new trail you can't miss</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Inside the Outdoors</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Essential hiking hacks</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Discovering this hidden gem</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">1 Day routes for this weekend</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">A new trail you can't miss</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Inside the Outdoors</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Essential hiking hacks</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">Discovering this hidden gem</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="cards">-->
<!--                        <div class="card-item">-->
<!--                            <div class="card-image">-->
<!--                            </div>-->
<!--                            <div class="card-info">-->
<!--                                <h2 class="card-title">1 Day routes for this weekend</h2>-->
<!--                                <p class="card-intro">Far far away, behind the word mountains, far from the countries-->
<!--                                    Vokalia and Consonantia, there live the blind texts.</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                    <a href="#" class="card education">
                        <div class="overlay"></div>
                        <div class="circle">

                            <svg width="71px" height="76px" viewBox="29 14 71 76" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                   transform="translate(30.000000, 14.000000)">
                                    <g id="Group-8" fill="#D98A19">
                                        <g id="Group-7">
                                            <g id="Group-6">
                                                <path
                                                    d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z"
                                                    id="Fill-1"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Group-20" transform="translate(0.000000, 14.114286)" stroke="#FFFFFF"
                                       stroke-linecap="square">
                                        <path d="M0.419998734,54.9642857 L4.70316223,54.9642857" id="Line"></path>
                                        <path d="M0.419998734,50.4404762 L4.70316223,50.4404762" id="Line"></path>
                                        <path d="M0.419998734,45.9166667 L4.70316223,45.9166667" id="Line"></path>
                                        <path d="M0.419998734,41.3928571 L2.93999114,41.3928571" id="Line"></path>
                                        <path d="M0.419998734,36.8690476 L4.70316223,36.8690476" id="Line"></path>
                                        <path d="M0.419998734,32.3452381 L4.70316223,32.3452381" id="Line"></path>
                                        <path d="M0.419998734,27.8214286 L4.70316223,27.8214286" id="Line"></path>
                                        <path d="M0.419998734,23.297619 L2.93999114,23.297619" id="Line"></path>
                                        <path d="M0.419998734,18.7738095 L4.70316223,18.7738095" id="Line"></path>
                                        <path d="M0.419998734,14.25 L4.70316223,14.25" id="Line"></path>
                                        <path d="M0.419998734,9.72619048 L4.70316223,9.72619048" id="Line"></path>
                                        <path d="M0.419998734,5.20238095 L2.93999114,5.20238095" id="Line"></path>
                                        <path d="M0.419998734,0.678571429 L4.70316223,0.678571429" id="Line"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p>Education</p>
                    </a>

                    <a href="#" class="card credentialing">
                        <div class="overlay"></div>
                        <div class="circle">

                            <svg width="64px" height="72px" viewBox="27 21 64 72" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
                                <desc>Created with Sketch.</desc>
                                <defs>
                                    <polygon id="path-1"
                                             points="60.9784821 18.4748913 60.9784821 0.0299638385 0.538377293 0.0299638385 0.538377293 18.4748913"></polygon>
                                </defs>
                                <g id="Group-12" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                   transform="translate(27.000000, 21.000000)">
                                    <g id="Group-5">
                                        <g id="Group-3" transform="translate(2.262327, 21.615176)">
                                            <mask id="mask-2" fill="white">
                                                <use xlink:href="#path-1"></use>
                                            </mask>
                                            <g id="Clip-2"></g>
                                            <path
                                                d="M7.17774177,18.4748913 L54.3387782,18.4748913 C57.9910226,18.4748913 60.9789911,15.7266455 60.9789911,12.3681986 L60.9789911,6.13665655 C60.9789911,2.77820965 57.9910226,0.0299638385 54.3387782,0.0299638385 L7.17774177,0.0299638385 C3.52634582,0.0299638385 0.538377293,2.77820965 0.538377293,6.13665655 L0.538377293,12.3681986 C0.538377293,15.7266455 3.52634582,18.4748913 7.17774177,18.4748913"
                                                id="Fill-1" fill="#59A785" mask="url(#mask-2)"></path>
                                        </g>
                                        <polygon id="Fill-4" fill="#FFFFFF"
                                                 transform="translate(31.785111, 30.877531) rotate(-2.000000) translate(-31.785111, -30.877531) "
                                                 points="62.0618351 55.9613216 7.2111488 60.3692832 1.50838775 5.79374073 56.3582257 1.38577917"></polygon>
                                        <ellipse id="Oval-3" fill="#25D48A" opacity="0.216243004" cx="30.0584472"
                                                 cy="21.7657707" rx="9.95169733" ry="9.17325562"></ellipse>
                                        <g id="Group-4" transform="translate(16.959615, 6.479082)" fill="#54C796">
                                            <polygon id="Fill-6"
                                                     points="10.7955395 21.7823628 0.11873799 11.3001058 4.25482787 7.73131106 11.0226557 14.3753897 27.414824 1.77635684e-15 31.3261391 3.77891399"></polygon>
                                        </g>
                                        <path
                                            d="M4.82347935,67.4368303 L61.2182039,67.4368303 C62.3304205,67.4368303 63.2407243,66.5995595 63.2407243,65.5765753 L63.2407243,31.3865871 C63.2407243,30.3636029 62.3304205,29.5263321 61.2182039,29.5263321 L4.82347935,29.5263321 C3.71126278,29.5263321 2.80095891,30.3636029 2.80095891,31.3865871 L2.80095891,65.5765753 C2.80095891,66.5995595 3.71126278,67.4368303 4.82347935,67.4368303"
                                            id="Fill-8" fill="#59B08B"></path>
                                        <path
                                            d="M33.3338063,67.4368303 L61.2181191,67.4368303 C62.3303356,67.4368303 63.2406395,66.5995595 63.2406395,65.5765753 L63.2406395,31.3865871 C63.2406395,30.3636029 62.3303356,29.5263321 61.2181191,29.5263321 L33.3338063,29.5263321 C32.2215897,29.5263321 31.3112859,30.3636029 31.3112859,31.3865871 L31.3112859,65.5765753 C31.3112859,66.5995595 32.2215897,67.4368303 33.3338063,67.4368303"
                                            id="Fill-10" fill="#4FC391"></path>
                                        <path
                                            d="M29.4284029,33.2640869 C29.4284029,34.2202068 30.2712569,34.9954393 31.3107768,34.9954393 C32.3502968,34.9954393 33.1931508,34.2202068 33.1931508,33.2640869 C33.1931508,32.3079669 32.3502968,31.5327345 31.3107768,31.5327345 C30.2712569,31.5327345 29.4284029,32.3079669 29.4284029,33.2640869"
                                            id="Fill-15" fill="#FEFEFE"></path>
                                        <path
                                            d="M8.45417501,71.5549073 L57.5876779,71.5549073 C60.6969637,71.5549073 63.2412334,69.2147627 63.2412334,66.3549328 L63.2412334,66.3549328 C63.2412334,63.4951029 60.6969637,61.1549584 57.5876779,61.1549584 L8.45417501,61.1549584 C5.34488919,61.1549584 2.80061956,63.4951029 2.80061956,66.3549328 L2.80061956,66.3549328 C2.80061956,69.2147627 5.34488919,71.5549073 8.45417501,71.5549073"
                                            id="Fill-12" fill="#5BD6A2"></path>
                                    </g>
                                </g>
                            </svg>

                        </div>
                        <p>Credentialing</p>
                    </a>

                    <a href="#" class="card wallet">
                        <div class="overlay"></div>
                        <div class="circle">

                            <svg width="78px" height="60px" viewBox="23 29 78 60" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                   transform="translate(23.000000, 29.500000)">
                                    <rect id="Rectangle-3" fill="#AC8BE9" x="67.8357511" y="26.0333433"
                                          width="9.40495664" height="21.8788565" rx="4.70247832"></rect>
                                    <rect id="Rectangle-3" fill="#6A5297" x="67.8357511" y="38.776399"
                                          width="9.40495664" height="10.962961" rx="4.70247832"></rect>
                                    <polygon id="Rectangle-2" fill="#6A5297"
                                             points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605"></polygon>
                                    <path
                                        d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"
                                        id="Rectangle" fill="#8B6FC0"></path>
                                    <path
                                        d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"
                                        id="Fill-12" fill="#F6F1FF"></path>
                                    <rect id="Rectangle-4" fill="#AC8BE9" x="58.0305835" y="26.1162588"
                                          width="15.6082259" height="12.863158"></rect>
                                    <ellipse id="Oval" fill="#FFFFFF" cx="65.8346965" cy="33.0919007" rx="2.20116007"
                                             ry="2.23319575"></ellipse>
                                </g>
                            </svg>

                        </div>
                        <p>Wallet</p>
                    </a>

                    <a href="#" class="card human-resources">
                        <div class="overlay"></div>
                        <div class="circle">

                            <svg width="66px" height="77px" viewBox="1855 26 66 77" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                   transform="translate(1855.000000, 26.000000)">
                                    <path
                                        d="M4.28872448,42.7464904 C4.28872448,39.3309774 5.4159227,33.7621426 6.40576697,30.4912557 C10.5920767,32.1098991 14.3021264,35.1207513 18.69596,35.1207513 C30.993618,35.1207513 42.5761396,28.7162991 49.9992251,17.9014817 C56.8027248,23.8881252 60.8188351,33.0463165 60.8188351,42.7464904 C60.8188351,60.817447 47.6104607,76.6693426 32.5537798,76.6693426 C17.4970989,76.6693426 4.28872448,60.817447 4.28872448,42.7464904"
                                        id="Fill-8" fill="#AFCEFF"></path>
                                    <path
                                        d="M64.3368879,31.1832696 L62.8424171,46.6027478 L60.6432609,46.7824348 L59.8340669,34.6791304 L47.6573402,25.3339478 C44.2906753,34.068487 34.3459503,40.2903304 24.4684093,40.2903304 C17.7559812,40.2903304 10.046244,37.4168 5.80469412,32.8004522 L5.80469412,34.6791304 L5.80469412,46.6027478 L4.28932167,46.6027478 L1.30187314,27.8802435 C1.30187314,20.9790957 3.52342407,15.5432 7.27229127,11.3578087 C13.132229,4.79558261 21.8124018,0.0492173913 30.5672235,0.342852174 C37.4603019,0.569286957 42.6678084,2.72991304 50.8299179,0.342852174 C51.4629405,1.44434783 51.8615656,3.00455652 51.5868577,5.22507826 C51.4629405,6.88316522 51.2106273,7.52302609 50.8299179,8.45067826 C58.685967,14.1977391 64.3368879,20.7073739 64.3368879,31.1832696"
                                        id="Fill-10" fill="#3B6CB7"></path>
                                    <path
                                        d="M58.9405197,54.5582052 C62.0742801,54.8270052 65.3603242,52.60064 65.6350321,49.5386574 C65.772386,48.009127 65.2617876,46.5570226 64.3182257,45.4584487 C63.3761567,44.3613357 62.0205329,43.6162922 60.4529062,43.4818922 L58.9405197,54.5582052 Z"
                                        id="Fill-13" fill="#568ADC"></path>
                                    <path
                                        d="M6.32350389,54.675367 C3.18227865,54.8492104 0.484467804,52.4957496 0.306803449,49.4264626 C0.217224782,47.8925496 0.775598471,46.4579757 1.75200594,45.3886191 C2.7284134,44.3192626 4.10792487,43.6165843 5.67853749,43.530393 L6.32350389,54.675367 Z"
                                        id="Fill-15" fill="#568ADC"></path>
                                </g>
                            </svg>

                        </div>
                        <p>Human Resources</p>
                    </a>

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
                    <div class="col-3">
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
                                Барча статистика
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 490.667 490.667" xml:space="preserve"><path d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z" style="fill: rgb(0, 150, 136);"></path>
                                    <path d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
	c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483 c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
	c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"
                                          style="fill: rgb(250, 250, 250);"></path></svg>
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
