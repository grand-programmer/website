<template>
    <div class="section nomzod-section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="page-content">
            <div class="container">
                <section id="printme" v-if="vacancy">
                    <div class="single-vacancy">
                        <div class="container">
                            <div class="single-vacancy__main">
                                <div class="d-flex flex-col gap-2 single-vacancy__main-left">
                                    <div class="d-flex align-items-center gap-3"> <i class="inline-block">
                                        <svg width="25" height="25" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M3.75 13.5V6.75H8.25V13.5H3.75ZM6.75 8.25V12H5.25V8.25H6.75Z"
                                                  fill="#fff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M9.75 13.5V6.75H14.25V13.5H9.75ZM12.75 8.25V12H11.25V8.25H12.75Z"
                                                  fill="#fff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M14.25 13.5H3.75C3.33579 13.5 3 13.8358 3 14.25C3 14.6642 3.33579 15 3.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5ZM3.75 12C2.50736 12 1.5 13.0074 1.5 14.25C1.5 15.4926 2.50736 16.5 3.75 16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25C16.5 13.0074 15.4926 12 14.25 12H3.75Z"
                                                  fill="#fff"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M15 6.00005V5.42412C15 5.09291 14.7827 4.80092 14.4655 4.70575L9.21551 3.13075C9.07493 3.08858 8.92507 3.08858 8.78449 3.13075L3.53449 4.70575C3.21725 4.80092 3 5.09291 3 5.42412V6.00005C3 6.41427 3.33579 6.75005 3.75 6.75005H14.25C14.6642 6.75005 15 6.41427 15 6.00005ZM3.10347 3.26901C2.15175 3.55453 1.5 4.4305 1.5 5.42412V6.00005C1.5 7.24269 2.50736 8.25005 3.75 8.25005H14.25C15.4926 8.25005 16.5 7.24269 16.5 6.00005V5.42412C16.5 4.4305 15.8482 3.55453 14.8965 3.26901L9.64653 1.69401C9.2248 1.56749 8.77521 1.56749 8.35347 1.69401L3.10347 3.26901Z"
                                                  fill="#fff"></path>
                                        </svg>
                                    </i>
                                    <h2
                                    class="single-vacancy__main-title">
                                        {{ vacancy.boshqarma_name }}{{ vacancy.guruh? ', '+vacancy.guruh:'' }}{{ (vacancy.lavozim)?', '+vacancy.lavozim:'' }}
                                </h2>
                                        </div>


                                        <h2 class="single-vacancy__main-wage" style="margin-left: 40px">
                                            {{ vacancy.seven ? vacancy.seven : '' }}

                                        </h2>
                                </div>
                                <div class="not-print d-flex flex-col single-vacancy__main-right gap-2">

                                    <v-tooltip nudge-left="0" bottom v-if="vacancy.applied ">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-fab-transition>
                                                <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    elevation="2"
                                                    outlined
                                                    raised
                                                    color="#fff"
                                                >
                                                    <v-icon>mdi-account-check</v-icon>
                                                    Ариза юборилган


                                                </v-btn>
                                            </v-fab-transition>

                                            <!--                                                            <v-btn
                                                                                                            color="primary"
                                                                                                            dark

                                                                                                        >
                                                                                                            Left
                                                                                                        </v-btn>-->
                                        </template>
                                        <span>Сиз ариза бергансиз</span>
                                    </v-tooltip>
                                    <template v-else>
                                        <div class="not-print d-flex items-center" v-if="!this.$route.query.result">
                                            <a
                                                class="vacancy-btn" @click="sendApplication">
                                                Ариза юбориш </a>
                                        </div>
                                        <div class="not-print d-flex items-center flex-column" v-else>
                                            <h5>Сизнинг аризангиз қабул қилинган</h5>
                                            <br>
                                            <p>Аризангиз ҳолати кутиш босқичида</p>
                                        </div>
                                    </template>
                                </div>
                                <div class=" single-vacancy__place d-flex align-items-center py-5 gap-30"
                                     v-if="vacancy.boshqarma">
                                    <p class="single-vacancy__location"><i class="inline-block">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M4.1665 15V7.5H9.1665V15H4.1665ZM7.49984 9.16667V13.3333H5.83317V9.16667H7.49984Z"
                                                  fill="#79838E"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.8332 15V7.5H15.8332V15H10.8332ZM14.1665 9.16667V13.3333H12.4998V9.16667H14.1665Z"
                                                  fill="#79838E"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M15.8332 15.0002H4.1665C3.70627 15.0002 3.33317 15.3733 3.33317 15.8335C3.33317 16.2937 3.70627 16.6668 4.1665 16.6668H15.8332C16.2934 16.6668 16.6665 16.2937 16.6665 15.8335C16.6665 15.3733 16.2934 15.0002 15.8332 15.0002ZM4.1665 13.3335C2.78579 13.3335 1.6665 14.4528 1.6665 15.8335C1.6665 17.2142 2.78579 18.3335 4.1665 18.3335H15.8332C17.2139 18.3335 18.3332 17.2142 18.3332 15.8335C18.3332 14.4528 17.2139 13.3335 15.8332 13.3335H4.1665Z"
                                                  fill="#79838E"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M16.6665 6.66678V6.02686C16.6665 5.65885 16.4251 5.33441 16.0726 5.22867L10.2393 3.47867C10.0831 3.43181 9.91658 3.43181 9.76038 3.47867L3.92705 5.22867C3.57456 5.33441 3.33317 5.65885 3.33317 6.02686V6.66678C3.33317 7.12702 3.70627 7.50011 4.1665 7.50011H15.8332C16.2934 7.50011 16.6665 7.12702 16.6665 6.66678ZM3.44813 3.63229C2.39067 3.94953 1.6665 4.92283 1.6665 6.02686V6.66678C1.6665 8.04749 2.78579 9.16678 4.1665 9.16678H15.8332C17.2139 9.16678 18.3332 8.04749 18.3332 6.66678V6.02686C18.3332 4.92284 17.609 3.94953 16.5515 3.63229L10.7182 1.88229C10.2496 1.74171 9.75007 1.74171 9.28147 1.88229L3.44813 3.63229Z"
                                                  fill="#79838E"></path>
                                        </svg>
                                    </i>
                                        {{ vacancy.boshqarma_name }}
                                    </p>
                                    <p class="single-vacancy__location"><i class="block float-left mr-2">
                                        <svg class="mr-[8px]" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M15.8333 10.0002H11.6667V16.6668H15.8333C16.2936 16.6668 16.6667 16.2937 16.6667 15.8335V10.8335C16.6667 10.3733 16.2936 10.0002 15.8333 10.0002ZM10 8.3335V18.3335H15.8333C17.214 18.3335 18.3333 17.2142 18.3333 15.8335V10.8335C18.3333 9.45278 17.214 8.3335 15.8333 8.3335H10Z"
                                                  fill="#79838E"></path>
                                            <path
                                                d="M14.9997 12.4998C14.9997 12.0396 14.6266 11.6665 14.1663 11.6665C13.7061 11.6665 13.333 12.0396 13.333 12.4998C13.333 12.9601 13.7061 13.3332 14.1663 13.3332C14.6266 13.3332 14.9997 12.9601 14.9997 12.4998Z"
                                                fill="#79838E"></path>
                                            <path
                                                d="M14.9997 14.9998C14.9997 14.5396 14.6266 14.1665 14.1663 14.1665C13.7061 14.1665 13.333 14.5396 13.333 14.9998C13.333 15.4601 13.7061 15.8332 14.1663 15.8332C14.6266 15.8332 14.9997 15.4601 14.9997 14.9998Z"
                                                fill="#79838E"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M4.16699 18.3332C2.78628 18.3332 1.66699 17.2139 1.66699 15.8332V4.1665C1.66699 2.78579 2.78628 1.6665 4.16699 1.6665H9.16699C10.5477 1.6665 11.667 2.78579 11.667 4.1665V18.3332H4.16699ZM4.16699 3.33317H9.16699C9.62723 3.33317 10.0003 3.70627 10.0003 4.1665V16.6665H8.33366V15.8332C8.33366 15.3729 7.96056 14.9998 7.50032 14.9998H5.83366C5.37342 14.9998 5.00032 15.3729 5.00032 15.8332V16.6665H4.16699C3.70675 16.6665 3.33366 16.2934 3.33366 15.8332V4.1665C3.33366 3.70627 3.70675 3.33317 4.16699 3.33317Z"
                                                  fill="#79838E"></path>
                                            <path
                                                d="M7.5 5C7.96024 5 8.33333 5.3731 8.33333 5.83333C8.33333 6.29357 7.96024 6.66667 7.5 6.66667H5.83333C5.3731 6.66667 5 6.29357 5 5.83333C5 5.3731 5.3731 5 5.83333 5H7.5Z"
                                                fill="#79838E"></path>
                                            <path
                                                d="M7.5 8.33333C7.96024 8.33333 8.33333 8.70643 8.33333 9.16667C8.33333 9.6269 7.96024 10 7.5 10H5.83333C5.3731 10 5 9.6269 5 9.16667C5 8.70643 5.3731 8.33333 5.83333 8.33333H7.5Z"
                                                fill="#79838E"></path>
                                            <path
                                                d="M8.33333 12.5C8.33333 12.0398 7.96024 11.6667 7.5 11.6667H5.83333C5.3731 11.6667 5 12.0398 5 12.5C5 12.9602 5.3731 13.3333 5.83333 13.3333H7.5C7.96024 13.3333 8.33333 12.9602 8.33333 12.5Z"
                                                fill="#79838E"></path>
                                        </svg>
                                    </i>
                                        {{ vacancy.guruh }}<br>{{ vacancy.lavozim }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">


                        <div class="tab_panel" style="width: max-content; float: right" v-if="vacancy.applied">
                            <!--                            <v-tabs background-color="primary"
                                                                slider-color="white"
                                                                color="white"
                                                        >
                                                            <v-tab>Эълон ҳақида</v-tab>
                                                            <v-tab>Аризангиз жорий ҳолати</v-tab>
                                                        </v-tabs>-->

                            <ul class="nav nav-tabs" id="vacancyTab" role="tablist">
                                <li class="nav-item" @click="showTab=1">
                                    <a class="nav-link " :class="showTab===1?'active':''" id="home-tab" data-toggle="tab" href="#education"
                                       role="tab"
                                       aria-controls="home" aria-selected="false">Эълон ҳақида
                                    </a>
                                </li>
                                <li class="nav-item" @click="showTab=2" >
                                    <a class="nav-link" id="cert-tab" :class="showTab===2?'active':''" data-toggle="tab" href="#cert" role="tab"
                                       aria-controls="profile" aria-selected="false">Аризангиз ҳолати
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div v-if="showTab===1" class="vacancy-description mx-auto">
                            <div class="d-flex align-items-center flex-direction-nav gap-20px ">
                                <div class="vacancy-description__card"><span>
                                    <svg
                                        width="48" height="48" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48"
                                                                                 rx="12" fill="#5EA963"
                                                                                 fill-opacity="0.1"></rect> <path
                                        fill-rule="evenodd" clip-rule="evenodd"
                                        d="M29.3386 24.2873L24.3579 21.3665C23.9049 21.1008 23.7353 20.5294 23.9702 20.0596C24.2284 19.5433 24.8695 19.3531 25.3674 19.6451L30.2331 22.4984C31.3749 23.0693 31.9231 24.393 31.5195 25.6041C31.0258 27.085 29.3349 27.7854 27.9386 27.0873L25.5528 25.8944C25.0589 25.6474 24.8586 25.0467 25.1056 24.5528C25.3526 24.0588 25.9533 23.8585 26.4473 24.1055L28.8331 25.2984C29.1407 25.4523 29.5133 25.2979 29.6221 24.9716C29.711 24.7047 29.5902 24.4131 29.3386 24.2873Z"
                                        fill="#5EA963"></path> <path fill-rule="evenodd"
                                                                     clip-rule="evenodd"
                                                                     d="M20.5909 20L18.3636 29.6518C18.2788 30.0193 18.408 30.4033 18.6978 30.6448L21.3597 32.8631C21.7306 33.1721 22.2692 33.1721 22.6401 32.8631L25.302 30.6448C25.5918 30.4033 25.721 30.0193 25.6362 29.6518L23.4089 20H20.5909ZM25.1788 18.7751C25.0741 18.3214 24.67 18 24.2044 18H19.7954C19.3298 18 18.9257 18.3214 18.821 18.7751L16.4148 29.202C16.1603 30.3047 16.5481 31.4568 17.4174 32.1813L20.0793 34.3995C21.1919 35.3267 22.8079 35.3267 23.9205 34.3995L26.5824 32.1813C27.4517 31.4568 27.8395 30.3047 27.585 29.202L25.1788 18.7751Z"
                                                                     fill="#5EA963"></path> <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M24.3945 14H19.6056C19.2713 14 18.959 14.1671 18.7736 14.4453L18.7173 14.5298C18.5029 14.8513 18.493 15.2676 18.6918 15.599L19.8411 17.5145C20.0219 17.8157 20.3474 18 20.6986 18H23.3015C23.6528 18 23.9783 17.8157 24.159 17.5145L25.3083 15.599C25.5071 15.2676 25.4972 14.8513 25.2829 14.5298L25.2266 14.4453C25.0411 14.1671 24.7289 14 24.3945 14ZM19.6056 12C18.6026 12 17.6659 12.5013 17.1095 13.3359L17.0532 13.4204C16.4101 14.385 16.3804 15.6338 16.9768 16.6279L18.1262 18.5435C18.6683 19.4471 19.6449 20 20.6986 20H23.3015C24.3553 20 25.3318 19.4471 25.874 18.5435L27.0233 16.6279C27.6198 15.6338 27.5901 14.385 26.947 13.4204L26.8907 13.3359C26.3343 12.5013 25.3976 12 24.3945 12H19.6056Z"
                                        fill="#5EA963"></path></svg></span>
                                    <div class="d-flex flex-col gap-4px"><p>
                                        Номзодлар сони</p>
                                        <h2>{{ vacancy.vac_soni }}</h2></div>
                                </div>
                                <div class="vacancy-description__card"><span>
                                    <svg
                                        width="48" height="48" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48"
                                                                                 rx="12" fill="#CD5446"
                                                                                 fill-opacity="0.1"></rect> <path
                                        fill-rule="evenodd" clip-rule="evenodd"
                                        d="M28.659 22.6783C29.1839 22.0428 29.5483 21.2659 29.6982 20.4148C29.8671 19.4556 30 18.4114 30 17.5V12H18V17.5C18 18.4114 18.1329 19.4556 18.3018 20.4148C18.4517 21.2659 18.8161 22.0428 19.341 22.6783C19.8125 23.2492 20.4136 23.706 21.105 24C20.4136 24.294 19.8125 24.7508 19.341 25.3217C18.8161 25.9572 18.4517 26.7341 18.3018 27.5852C18.1329 28.5444 18 29.5886 18 30.5V36H30V30.5C30 29.5886 29.8671 28.5444 29.6982 27.5852C29.5483 26.7341 29.1839 25.9572 28.659 25.3217C28.1875 24.7508 27.5864 24.294 26.895 24C27.5864 23.706 28.1875 23.2492 28.659 22.6783ZM28 34V30.5C28 29.7568 27.8889 28.8427 27.7285 27.9321C27.5575 26.9606 26.9297 26.1881 26.1124 25.8405L24 24.9423L21.8876 25.8405C21.0703 26.1881 20.4425 26.9606 20.2715 27.9321C20.1111 28.8427 20 29.7568 20 30.5V34H28ZM24 23.0577L26.1124 22.1595C26.9297 21.8119 27.5575 21.0394 27.7285 20.0679C27.8889 19.1573 28 18.2432 28 17.5V14H20V17.5C20 18.2432 20.1111 19.1573 20.2715 20.0679C20.4425 21.0394 21.0703 21.8119 21.8876 22.1595L24 23.0577Z"
                                        fill="#CD5446"></path> <path
                                        d="M16 35C16 34.4477 16.4477 34 17 34H31C31.5523 34 32 34.4477 32 35C32 35.5523 31.5523 36 31 36H17C16.4477 36 16 35.5523 16 35Z"
                                        fill="#CD5446"></path> <path
                                        d="M16 13C16 12.4477 16.4477 12 17 12H31C31.5523 12 32 12.4477 32 13C32 13.5523 31.5523 14 31 14H17C16.4477 14 16 13.5523 16 13Z"
                                        fill="#CD5446"></path> <path

                                        d="M20 33.9998C20 33.3869 20.3463 32.8266 20.8944 32.5526L23.1056 31.447C23.6686 31.1655 24.3314 31.1655 24.8944 31.447L27.1056 32.5526C27.6537 32.8266 28 33.3869 28 33.9998H20Z"
                                        fill="#CD5446"></path></svg>
                                </span>
                                    <div class="d-flex flex-col gap-4px" v-if="kun > 0"><p>Қабул
                                        ёпилишига қолган вақт</p>
                                        <div class="d-flex align-end gap-1"><h2>{{ kun }}
                                            кун</h2> <span style="color: #cd5446"
                                                           class=" text-sm font-semibold">{{ vacancy.isactive }}
          </span></div>
                                    </div>
                                    <div class="d-flex flex-col gap-4px" v-else><p>Вакансия қабул қилиш тугатилган</p>

                                    </div>
                                </div>
                            </div>
                            <div class="vacancy-description__item"><h2>Малакавий
                                талаблар</h2>
                                <p v-html="vacancy.talablar">
                                </p>
                            </div>
                            <div class="vacancy-description__item"><h2>Лавозимий
                                мажбуриятлари</h2>
                                <ul>
                                    <li v-html="vacancy.majbur">
                                    </li>
                                </ul>
                            </div>
                            <div class="vacancy-description__item"><h2>Иш
                                шароитлари</h2>
                                <p>{{ vacancy.shart }}</p></div>
                            <div class="vacancy-description__item" :data="boshqarma" v-if="boshqarma">
                                <h2>Ташкилот тўғрисида маълумот</h2>
                                <div
                                    class="vacancy-description__contacts grid grid-cols-12 gap-20px">
                                    <div class="md:col-span-4 col-span-12 d-flex flex-col gap-20px">
                                        <div><p>Манзил</p>
                                            <h3>
                                                {{ boshqarma.address }}
                                            </h3></div>
                                        <div><p>Электрон почта</p> <a
                                            :href="'mailto:'+ boshqarma.email">
                                            {{ boshqarma.email }}
                                        </a></div>
                                        <div><p>Телефон рақам</p> <a
                                            :href="'tel:'+boshqarma.telefon">
                                            {{ boshqarma.telefon }}
                                        </a></div>
                                    </div>
                                    <!--
                                    <div class="md:col-span-4 col-span-12 d-flex flex-col gap-20px">
                                        <div><p>Почта манзили</p>
                                            <h3>Марғилон шаҳар, Муктсақиллик кўчаси, 448 а уй</h3>
                                        </div>
                                    </div>-->
                                    <div id="map"
                                         class="md:col-span-4 col-span-12 rounded not-print">
                                        <div style="position: relative; overflow: hidden;">
                                            <iframe width="100%" height="auto"
                                                    allowfullscreen="allowfullscreen" loading="lazy"
                                                    style="border: 0px;" class="lazyLoad isLoaded"
                                                    :src="'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d191885.50263767486!2d'+ boshqarma.kod_x +'!3d'+ boshqarma.kod_y +'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1643194486766!5m2!1sen!2s'"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vacancy-description__edit">
                                <div class="d-flex align-items-center gap-8px"><i class="inline-block">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M18.3 5.60078H5.7C5.20294 5.60078 4.8 6.00373 4.8 6.50078V17.3008C4.8 17.7978 5.20294 18.2008 5.7 18.2008H18.3C18.7971 18.2008 19.2 17.7978 19.2 17.3008V6.50078C19.2 6.00372 18.7971 5.60078 18.3 5.60078ZM5.7 3.80078C4.20883 3.80078 3 5.00961 3 6.50078V17.3008C3 18.792 4.20883 20.0008 5.7 20.0008H18.3C19.7912 20.0008 21 18.792 21 17.3008V6.50078C21 5.00961 19.7912 3.80078 18.3 3.80078H5.7Z"
                                              fill="#39ae69"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.1996 11C9.70255 11 9.29961 11.4029 9.29961 11.9C9.29961 12.3971 9.70255 12.8 10.1996 12.8H16.4996C16.9967 12.8 17.3996 12.3971 17.3996 11.9C17.3996 11.4029 16.9967 11 16.4996 11H10.1996ZM7.49961 14.6C7.00255 14.6 6.59961 15.0029 6.59961 15.5C6.59961 15.9971 7.00255 16.4 7.49961 16.4H12.8996C13.3967 16.4 13.7996 15.9971 13.7996 15.5C13.7996 15.0029 13.3967 14.6 12.8996 14.6H7.49961Z"
                                              fill="#39ae69"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.49961 2C7.00255 2 6.59961 2.40294 6.59961 2.9V6.5C6.59961 6.99706 7.00255 7.4 7.49961 7.4C7.99667 7.4 8.39961 6.99706 8.39961 6.5V2.9C8.39961 2.40294 7.99667 2 7.49961 2ZM16.4996 2C16.0026 2 15.5996 2.40294 15.5996 2.9V6.5C15.5996 6.99706 16.0026 7.4 16.4996 7.4C16.9967 7.4 17.3996 6.99706 17.3996 6.5V2.9C17.3996 2.40294 16.9967 2 16.4996 2Z"
                                              fill="#39ae69"></path>
                                    </svg>
                                </i>
                                    <p>{{ vacancy.raqam }}</p></div>
                                <div class="d-flex align-items-center gap-8px"><span><i
                                    class="inline-block">
                                    <svg width="24" height="24"
                                         viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.9997 17.8803C16.0429 17.8803 18.9181 15.3397 20.6019 13.2238C21.1859 12.4899 21.1859 11.5102 20.6019 10.7763C18.9181 8.66042 16.0429 6.11976 11.9997 6.11976C7.95655 6.11976 5.08139 8.66042 3.39761 10.7763C2.8136 11.5102 2.8136 12.4899 3.39761 13.2238C5.08139 15.3397 7.95655 17.8803 11.9997 17.8803ZM22.1356 14.4443C23.2881 12.996 23.2881 11.0041 22.1356 9.5558C20.3046 7.25491 16.926 4.15967 11.9997 4.15967C7.0735 4.15967 3.69488 7.25491 1.86388 9.5558C0.71139 11.0041 0.711389 12.996 1.86388 14.4443C3.69488 16.7452 7.0735 19.8404 11.9997 19.8404C16.926 19.8404 20.3046 16.7452 22.1356 14.4443Z"
                                fill="#39ae69"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.9604 12.0003C13.9604 13.0828 13.0828 13.9604 12.0003 13.9604C10.9177 13.9604 10.0402 13.0828 10.0402 12.0003C10.0402 11.9724 10.0408 11.9448 10.0419 11.9172C10.1947 11.971 10.359 12.0003 10.5302 12.0003C11.3421 12.0003 12.0003 11.3421 12.0003 10.5302C12.0003 10.359 11.971 10.1947 11.9172 10.0419C11.9448 10.0408 11.9724 10.0402 12.0003 10.0402C13.0828 10.0402 13.9604 10.9177 13.9604 12.0003ZM15.9204 12.0003C15.9204 14.1653 14.1653 15.9204 12.0003 15.9204C9.83521 15.9204 8.08008 14.1653 8.08008 12.0003C8.08008 9.83521 9.83521 8.08008 12.0003 8.08008C14.1653 8.08008 15.9204 9.83521 15.9204 12.0003Z"
                                fill="#39ae69"></path>
                        </svg></i></span>
                                    <p>{{ vacancy.viewed }}</p></div>
<!--                                <span class="d-flex align-items-center gap-8px cursor-pointer"><i
                                    class="inline-block">
                                    <svg width="24" height="24"
                                         viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6 5C6 3.34315 7.34315 2 9 2H15C16.6569 2 18 3.34315 18 5V10H16V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V10H6V5Z"
                              fill="#39ae69"></path>
                        <path
                            d="M5 12H19C19.5523 12 20 12.4477 20 13V16C20 16.5523 19.5523 17 19 17H18V19H19C20.6569 19 22 17.6569 22 16V13C22 11.3431 20.6569 10 19 10H5C3.34315 10 2 11.3431 2 13V16C2 17.6569 3.34315 19 5 19H6V17H5C4.44772 17 4 16.5523 4 16V13C4 12.4477 4.44772 12 5 12Z"
                            fill="#39ae69"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16 17H8V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V17ZM6 15V19C6 20.6569 7.34315 22 9 22H15C16.6569 22 18 20.6569 18 19V15H6Z"
                              fill="#39ae69"></path>
                      </svg></i>
      Чоп этиш
    </span>--></div>
                        </div>
                        <div class="vacancy-timeline" v-else>
                            <v-btn class="ariza-button"  color="primary"
                                     depressed
                                     elevation="2"
                                     large
                                     outlined
                                     raised
                            ><h3>Ариза рақами {{ nomzod.kod ? nomzod.kod : '' }}</h3></v-btn>
                            <v-timeline
                                dense
                                clipped
                            >


                                <v-timeline-item
                                    class="mb-4"
                                    :color="status.applied?'primary':'grey'"
                                    icon-color="primary"
                                    small
                                    :key="key"
                                    v-for="(status,key) in statuses"
                                >
                                    <v-row justify="space-between" v-if="status">
                                        <v-col cols="10">
                                            <h4 :class="status.applied?'active':''"> {{ status.bosqich_nomi }}</h4>
                                            <p> {{ status.created_at?status.created_at:'' }}</p>
                                            <p>{{status.comment}}</p>


                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
<!--
                                <v-timeline-item
                                    class="mb-4"
                                    color="primary"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4 class="active"> Номзодни малакавий талабларга мослигини текшириш</h4>


                                        </v-col>
                                    </v-row>
                                </v-timeline-item>

                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Номзодга тест синови мавжудлигини белгилаш</h4>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Тест натижасини киритиш</h4>
                                            <p>Изоҳ: Тест натижасини киритиш</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Сухбат ўтказиш санасини белгилаш</h4>
                                            <p>Изоҳ: Суҳбат ўтказиш санасини белгилаш</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Сухбат натижасини киритиш</h4>
                                            <p>Изоҳ: Суҳбат натижасини киритиш</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Номзодни тегишли ташкилотлар билан келишиш лозимлигини белгилаш</h4>
                                            <p>Изоҳ: Номзодни тегишли ташкилотлар билан келишиш лозимлигини белгилаш</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Номзодни тегишли ташкилотлар билан келишиш натижасини киритиш</h4>
                                            <p>Изоҳ: Номзодни тегишли ташкилотлар билан келишиш натижасини киритиш
                                            </p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Баённомани юклаш</h4>
                                            <p>Изоҳ: Баённомани юклаш</p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item
                                    class="mb-4"
                                    color="grey"
                                    icon-color="primary"
                                    small
                                >
                                    <v-row justify="space-between">
                                        <v-col cols="10">
                                            <h4> Ишга қабул қилиш
                                            </h4>
                                            <p>Изоҳ: Ишга қабул қилиш
                                            </p>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>-->

                            </v-timeline>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>
</template>
<script>
import i18n from "../../../../i18n";

export default {
    name: "InitialVacancy",
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
                    text: 'Хизматлар',
                    to: '/services',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Вакансиялар',
                    to: '/services/vacancy',
                    disabled: false,
                    exact: true,
                },
                {
                    text: 'Катта инспектор',
                    to: '/services/vacancy/show',
                    disabled: true,
                    exact: true,
                },
            ],
            vacancy: null,
            statuses:null,
            nomzod:null,
            showTab: 1,
            boshqarma: null
        }
    },
    methods: {
        async initialize() {
            if (!(this.$route.params.id > 0)) this.$router.back();
            const _app = this;
            let pinRequest=""
            if(this.$auth.user()) pinRequest = "&pnfl=" + this.$auth.user().pin
            await axios.get("/api/v1/ex_api/vacancy-show?vacancy=" + this.$route.params.id + pinRequest).then(function (response) {
                if (response.status === 200) {
                    _app.vacancy = response.data.data.vakant;
                    _app.statuses = response.data.data.status;
                    _app.nomzod = (typeof response.data.data.nomzodlar[0]!=='undefined')?response.data.data.nomzodlar[0]:null;
                    if(typeof _app.$route.query.status!=='undefined') _app.showTab=2;
                }
                /*if (response.data.success === true) {
                    _app.vacancies=_app.filteredVacancies=response.data.data;
                }*/
            });

            if (this.vacancy && this.vacancy.b_id > 0)
                await axios.get("/api/v1/ex_api/boshqarma-show?boshqarma=" + this.vacancy.b_id).then(function (response) {
                    if (response.status === 200) {
                        _app.boshqarma = response.data.data[0];
                    }
                    /*if (response.data.success === true) {
                        _app.vacancies=_app.filteredVacancies=response.data.data;
                    }*/
                });
        },
        sendApplication() {

            const _this = this;
            setTimeout(() => {
                if (_this.$auth.user() != null) _this.$router.push('/services/vacancy/'+ _this.vacancy.id +'/resume'); else {
                    _this.$toast.warning('Хизматдан фойдаланиш учун авторизациядан ўтишингиз лозим');
                    _this.$router.push('/login?request=/services/vacancy/'+ _this.vacancy.id +'/resume');
                }
            }, 500)

        }
    },
    created() {
        this.initialize()
    },
    computed: {
        kun() {
            const diffTime = Math.abs((new Date(this.vacancy.isactive)).getTime() - (new Date()).getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return (new Date(this.vacancy.isactive)).getTime() > (new Date()).getTime()?diffDays:0;//new Date((new Date(this.vacancy.isactive)).getTime() - (new Date()).getTime()).getDate()
        }

    }


}


</script>
<style lang="css">

@import "/public/css/mix/vacancy.css";
</style>
