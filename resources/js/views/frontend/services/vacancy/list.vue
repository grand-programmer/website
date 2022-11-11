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


                <div class="vacancy-wrapper ml-4">
                    <v-row>
                        <h3 class="mb-5 vacancies-title">Давлат божхона қўмитаси вакант лавозимларининг ягона очиқ
                            портали </h3>

                        <!--                    <p>Мазкур бўлимда сиз вакант ўринлар тўғрисида маълумот оласиз ҳамда ушбу вакант ўринларга ариза топширишингиз мумкин бўлади</p>-->

                    </v-row>
                    <v-row>
                        <v-col lg="8" md="7" sm="12" xs="12">
                            <v-row class="filters">
                                <v-col lg="6" md="7" sm="7" xs="12" cols="12">
                                    <v-text-field
                                        v-model="searchVacancy"
                                        placeholder="Қидириш"
                                        prepend-inner-icon="mdi-magnify">

                                    </v-text-field>
                                </v-col>
                                <v-col lg="6" md="5" sm="5" cols="12">
                                    <div class="filterByRegion">
                                        <v-autocomplete
                                            clearable
                                            v-model="myRegion"
                                            placeholder="Ҳудудлар кесимида"
                                            item-text="name"
                                            item-value="kod_id"
                                            :items="regions"
                                        >
                                        </v-autocomplete>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row class="vacancy-list">
                                <v-container>
                                    <v-col cols="12">
                                        <h3 style="color: #39ae69; font-weight: bold"
                                            class="d-flex justify-content-between align-items-center"> Вакант лавозимлар
                                            рўйхати <span v-if="!loading && filteredVacancies.length>0"
                                                          class="float-end"
                                                          style="font-size: 15px">Жами: {{
                                                    filteredVacancies.length
                                                }}</span>
                                        </h3>

                                    </v-col>
                                </v-container>
                                <v-col cols="12" class="text-center" v-if="!filteredVacancies.length>0">
                                    Бўш иш ўринлари топилмади.
                                </v-col>
                                <v-col cols="12" :key="key" v-for="(vacancy,key) in filteredVacancies" v-if="!loading"
                                       data-aos="fade-up">
                                    <v-card class="vacancy-card mx-auto m-0">
                                        <div class="v-card-item" data-aos="flip-up">
                                            <h3>
                                                {{ vacancy.seven }}
                                                <div class="d-inline-block float-end" v-if="vacancy.applied && 1===2">

                                                    <v-tooltip nudge-left="0" left>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-fab-transition>
                                                                <v-btn
                                                                    icon
                                                                    color="primary"
                                                                    v-bind="attrs"
                                                                    v-on="on"
                                                                    fab
                                                                    dark
                                                                    small
                                                                >
                                                                    <v-icon>mdi-account-check</v-icon>


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

                                                </div>
                                            </h3>
                                            <p class="vac-card__unit">

                                                {{ vacancy.guruh }}<br>
                                                {{ vacancy.lavozim }}
                                            </p>
                                        </div>
                                        <div class="v-card-item">

                                            <!--                                                <p class="vac-card__payment">
                                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z"
                                                                                                          fill="#3165CB"></path>
                                                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                          d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z"
                                                                                                          fill="#3165CB"></path>
                                                                                                    <path
                                                                                                        d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
                                                                                                        fill="#3165CB"></path>
                                                                                                </svg>
                                                                                                <span>Штат жадвали бўйича</span>
                                                                                            </p>-->
                                            <p class="vac-card__location">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M3.75 13.5V6.75H8.25V13.5H3.75ZM6.75 8.25V12H5.25V8.25H6.75Z"
                                                          fill="#3165CB"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M9.75 13.5V6.75H14.25V13.5H9.75ZM12.75 8.25V12H11.25V8.25H12.75Z"
                                                          fill="#3165CB"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M14.25 13.5H3.75C3.33579 13.5 3 13.8358 3 14.25C3 14.6642 3.33579 15 3.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.8358 14.6642 13.5 14.25 13.5ZM3.75 12C2.50736 12 1.5 13.0074 1.5 14.25C1.5 15.4926 2.50736 16.5 3.75 16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25C16.5 13.0074 15.4926 12 14.25 12H3.75Z"
                                                          fill="#3165CB"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M15 6.00005V5.42412C15 5.09291 14.7827 4.80092 14.4655 4.70575L9.21551 3.13075C9.07493 3.08858 8.92507 3.08858 8.78449 3.13075L3.53449 4.70575C3.21725 4.80092 3 5.09291 3 5.42412V6.00005C3 6.41427 3.33579 6.75005 3.75 6.75005H14.25C14.6642 6.75005 15 6.41427 15 6.00005ZM3.10347 3.26901C2.15175 3.55453 1.5 4.4305 1.5 5.42412V6.00005C1.5 7.24269 2.50736 8.25005 3.75 8.25005H14.25C15.4926 8.25005 16.5 7.24269 16.5 6.00005V5.42412C16.5 4.4305 15.8482 3.55453 14.8965 3.26901L9.64653 1.69401C9.2248 1.56749 8.77521 1.56749 8.35347 1.69401L3.10347 3.26901Z"
                                                          fill="#3165CB"></path>
                                                </svg>
                                                <span> {{ vacancy.boshqarma_name }} </span>
                                            </p>
                                            <p class="vac-card__location">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M13.6893 1.85856C15.2347 1.21462 16.7852 2.76504 16.1412 4.31048L11.6986 14.9728C10.8297 17.058 7.77364 16.7056 7.40227 14.4773L6.84801 11.1518L3.52245 10.5975C1.29421 10.2261 0.941754 7.17003 3.02696 6.3012L13.6893 1.85856ZM14.7566 3.73356C14.8854 3.42447 14.5753 3.11439 14.2662 3.24317L3.60389 7.68581C2.90882 7.97542 3.0263 8.99412 3.76905 9.11792L7.09461 9.67218C7.72682 9.77754 8.22223 10.273 8.3276 10.9052L8.88186 14.2307C9.00565 14.9735 10.0244 15.091 10.314 14.3959L14.7566 3.73356Z"
                                                          fill="#3165CB"></path>
                                                </svg>
                                                <span>{{
                                                        typeof regions.filter(item => item.kod_id === vacancy.b_id)[0]['address'] !== 'undefined' ? regions.filter(item => item.kod_id === vacancy.b_id)[0]['address'] : ''
                                                    }} </span>
                                            </p>
                                            <p class="vac-card__payment">
                                                <svg
                                                    width="40" height="40" viewBox="0 0 48 48"
                                                    style="margin-left: -10px; margin-right:-10px" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M29.3386 24.2873L24.3579 21.3665C23.9049 21.1008 23.7353 20.5294 23.9702 20.0596C24.2284 19.5433 24.8695 19.3531 25.3674 19.6451L30.2331 22.4984C31.3749 23.0693 31.9231 24.393 31.5195 25.6041C31.0258 27.085 29.3349 27.7854 27.9386 27.0873L25.5528 25.8944C25.0589 25.6474 24.8586 25.0467 25.1056 24.5528C25.3526 24.0588 25.9533 23.8585 26.4473 24.1055L28.8331 25.2984C29.1407 25.4523 29.5133 25.2979 29.6221 24.9716C29.711 24.7047 29.5902 24.4131 29.3386 24.2873Z"
                                                        fill="#5EA963"></path>
                                                    <path fill-rule="evenodd"
                                                          clip-rule="evenodd"
                                                          d="M20.5909 20L18.3636 29.6518C18.2788 30.0193 18.408 30.4033 18.6978 30.6448L21.3597 32.8631C21.7306 33.1721 22.2692 33.1721 22.6401 32.8631L25.302 30.6448C25.5918 30.4033 25.721 30.0193 25.6362 29.6518L23.4089 20H20.5909ZM25.1788 18.7751C25.0741 18.3214 24.67 18 24.2044 18H19.7954C19.3298 18 18.9257 18.3214 18.821 18.7751L16.4148 29.202C16.1603 30.3047 16.5481 31.4568 17.4174 32.1813L20.0793 34.3995C21.1919 35.3267 22.8079 35.3267 23.9205 34.3995L26.5824 32.1813C27.4517 31.4568 27.8395 30.3047 27.585 29.202L25.1788 18.7751Z"
                                                          fill="#5EA963"></path>
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M24.3945 14H19.6056C19.2713 14 18.959 14.1671 18.7736 14.4453L18.7173 14.5298C18.5029 14.8513 18.493 15.2676 18.6918 15.599L19.8411 17.5145C20.0219 17.8157 20.3474 18 20.6986 18H23.3015C23.6528 18 23.9783 17.8157 24.159 17.5145L25.3083 15.599C25.5071 15.2676 25.4972 14.8513 25.2829 14.5298L25.2266 14.4453C25.0411 14.1671 24.7289 14 24.3945 14ZM19.6056 12C18.6026 12 17.6659 12.5013 17.1095 13.3359L17.0532 13.4204C16.4101 14.385 16.3804 15.6338 16.9768 16.6279L18.1262 18.5435C18.6683 19.4471 19.6449 20 20.6986 20H23.3015C24.3553 20 25.3318 19.4471 25.874 18.5435L27.0233 16.6279C27.6198 15.6338 27.5901 14.385 26.947 13.4204L26.8907 13.3359C26.3343 12.5013 25.3976 12 24.3945 12H19.6056Z"
                                                        fill="#5EA963"></path>
                                                </svg>
                                                <span>{{ vacancy.vac_soni }} та номзод</span>
                                            </p>
                                            <p class="vac-card__payment"
                                               v-if="typeof vacancy.shroit !=='undefined' && vacancy.shroit">
                                                <img src="/public/img/icons/talab.png"
                                                     style="max-width:15px; max-height:15px"/>
                                                <span>{{ vacancy.shroit }}</span>
                                            </p>


                                            <!--                                        <p class="vac-card__location">
                                                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                  d="M8 13.5C11.3137 13.5 14 10.8137 14 7.5C14 4.18629 11.3137 1.5 8 1.5C4.68629 1.5 2 4.18629 2 7.5C2 10.8137 4.68629 13.5 8 13.5ZM8 15C12.1421 15 15.5 11.6421 15.5 7.5C15.5 3.35786 12.1421 0 8 0C3.85786 0 0.5 3.35786 0.5 7.5C0.5 11.6421 3.85786 15 8 15Z"
                                                                                                  fill="#3165CB"></path>
                                                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                                  d="M8 3C8.41421 3 8.75 3.33579 8.75 3.75V7.18934L10.4053 8.84467C10.6982 9.13756 10.6982 9.61244 10.4053 9.90533C10.1124 10.1982 9.63756 10.1982 9.34467 9.90533L7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5V3.75C7.25 3.33579 7.58579 3 8 3Z"
                                                                                                  fill="#3165CB"></path>
                                                                                        </svg>
                                                                                        <span> Тўлиқ </span>
                                                                                    </p>-->
                                        </div>
                                        <div class="py-5 d-flex justify-content-between">
                                            <div class=" d-flex align-items-center ">
                                                <div class="date mr-2">
                                            <span><i class="inline-block">
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                                              clip-rule="evenodd"
                                                                                              d="M14.25 5H3.75C3.33579 5 3 5.33579 3 5.75V14.75C3 15.1642 3.33579 15.5 3.75 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V5.75C15 5.33579 14.6642 5 14.25 5ZM3.75 3.5C2.50736 3.5 1.5 4.50736 1.5 5.75V14.75C1.5 15.9926 2.50736 17 3.75 17H14.25C15.4926 17 16.5 15.9926 16.5 14.75V5.75C16.5 4.50736 15.4926 3.5 14.25 3.5H3.75Z"
                                                                                              fill="#79838E"></path> <path
                                                    fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.5 9.5C7.08579 9.5 6.75 9.83579 6.75 10.25C6.75 10.6642 7.08579 11 7.5 11H12.75C13.1642 11 13.5 10.6642 13.5 10.25C13.5 9.83579 13.1642 9.5 12.75 9.5H7.5ZM5.25 12.5C4.83579 12.5 4.5 12.8358 4.5 13.25C4.5 13.6642 4.83579 14 5.25 14H9.75C10.1642 14 10.5 13.6642 10.5 13.25C10.5 12.8358 10.1642 12.5 9.75 12.5H5.25Z"
                                                    fill="#79838E"></path> <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                 d="M5.25 2C4.83579 2 4.5 2.33579 4.5 2.75V5.75C4.5 6.16421 4.83579 6.5 5.25 6.5C5.66421 6.5 6 6.16421 6 5.75V2.75C6 2.33579 5.66421 2 5.25 2ZM12.75 2C12.3358 2 12 2.33579 12 2.75V5.75C12 6.16421 12.3358 6.5 12.75 6.5C13.1642 6.5 13.5 6.16421 13.5 5.75V2.75C13.5 2.33579 13.1642 2 12.75 2Z"
                                                                                 fill="#79838E"></path></svg>
                                            </i></span>

                                                    {{ vacancy.raqam }}
                                                </div>
                                                <div class="date inline-block mr-2">
                                                    <i class="inline-block">
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                  clip-rule="evenodd"
                                                                  d="M12.8179 8.56694C13.1885 8.11832 13.4457 7.5699 13.5515 6.96914C13.6707 6.29209 13.7645 5.55497 13.7645 4.91165V1.0293H5.29395V4.91165C5.29395 5.55497 5.38775 6.29209 5.50697 6.96914C5.61276 7.5699 5.87 8.11832 6.24055 8.56694C6.57339 8.9699 6.99766 9.29235 7.48573 9.49989C6.99766 9.70742 6.57339 10.0299 6.24055 10.4328C5.87 10.8815 5.61276 11.4299 5.50697 12.0306C5.38775 12.7077 5.29395 13.4448 5.29395 14.0881V17.9705H13.7645V14.0881C13.7645 13.4448 13.6707 12.7077 13.5515 12.0306C13.4457 11.4299 13.1885 10.8815 12.8179 10.4328C12.4851 10.0299 12.0608 9.70742 11.5727 9.49989C12.0608 9.29235 12.4851 8.9699 12.8179 8.56694ZM12.3528 16.5587V14.0881C12.3528 13.5635 12.2743 12.9182 12.1611 12.2755C12.0404 11.5897 11.5973 11.0444 11.0203 10.7991L9.52924 10.1651L8.03817 10.7991C7.46118 11.0444 7.01809 11.5897 6.89735 12.2755C6.78416 12.9182 6.70571 13.5635 6.70571 14.0881V16.5587H12.3528ZM9.52924 8.83472L11.0203 8.2007C11.5973 7.95535 12.0404 7.41002 12.1611 6.72431C12.2743 6.08152 12.3528 5.43627 12.3528 4.91165V2.44106H6.70571V4.91165C6.70571 5.43627 6.78416 6.08152 6.89735 6.72431C7.01809 7.41002 7.46118 7.95535 8.03817 8.2007L9.52924 8.83472Z"
                                                                  fill="#79838E"></path>
                                                            <path
                                                                d="M3.88232 17.2645C3.88232 16.8746 4.19836 16.5586 4.58821 16.5586H14.4706C14.8604 16.5586 15.1764 16.8746 15.1764 17.2645C15.1764 17.6543 14.8604 17.9704 14.4706 17.9704H4.58821C4.19836 17.9704 3.88232 17.6543 3.88232 17.2645Z"
                                                                fill="#79838E"></path>
                                                            <path
                                                                d="M3.88232 1.73518C3.88232 1.34533 4.19836 1.0293 4.58821 1.0293H14.4706C14.8604 1.0293 15.1764 1.34533 15.1764 1.73518C15.1764 2.12503 14.8604 2.44106 14.4706 2.44106H4.58821C4.19836 2.44106 3.88232 2.12503 3.88232 1.73518Z"
                                                                fill="#79838E"></path>
                                                            <path
                                                                d="M6.70605 16.5589C6.70605 16.1263 6.95048 15.7308 7.33742 15.5374L8.89822 14.757C9.29567 14.5582 9.76349 14.5582 10.1609 14.757L11.7218 15.5374C12.1087 15.7308 12.3531 16.1263 12.3531 16.5589H6.70605Z"
                                                                fill="#79838E"></path>
                                                        </svg>
                                                    </i>
                                                    <span class="inline-block">{{ vacancy.isactive }}</span>
                                                </div>
                                                <div class="date d-flex align-items-center">
                                                <span><i class="inline-block">
                                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M9.00017 14C12.0943 14 14.2946 12.0557 15.5831 10.4365C16.03 9.87487 16.03 9.12513 15.5831 8.56352C14.2946 6.94429 12.0943 5 9.00017 5C5.90605 5 3.70577 6.94429 2.41722 8.56352C1.9703 9.12513 1.9703 9.87487 2.41722 10.4365C3.70577 12.0557 5.90605 14 9.00017 14ZM16.7568 11.3705C17.6388 10.2622 17.6388 8.73781 16.7568 7.6295C15.3556 5.86869 12.7701 3.5 9.00017 3.5C5.23027 3.5 2.64471 5.86869 1.24351 7.6295C0.36154 8.73781 0.36154 10.2622 1.24351 11.3705C2.64471 13.1313 5.23027 15.5 9.00017 15.5C12.7701 15.5 15.3556 13.1313 16.7568 11.3705Z"
                                                              fill="#79838E"></path> <path
                                                        fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.5 9.5C10.5 10.3284 9.82843 11 9 11C8.17157 11 7.5 10.3284 7.5 9.5C7.5 9.47871 7.50044 9.45752 7.50132 9.43645C7.61824 9.47761 7.74401 9.5 7.875 9.5C8.49632 9.5 9 8.99632 9 8.375C9 8.24401 8.97761 8.11824 8.93645 8.00132C8.95752 8.00044 8.97871 8 9 8C9.82843 8 10.5 8.67157 10.5 9.5ZM12 9.5C12 11.1569 10.6569 12.5 9 12.5C7.34315 12.5 6 11.1569 6 9.5C6 7.84315 7.34315 6.5 9 6.5C10.6569 6.5 12 7.84315 12 9.5Z"
                                                        fill="#79838E"></path></svg>
                                            </i></span>
                                                    <p>{{ vacancy.viewed }}</p></div>
                                            </div>
                                            <router-link :to="'vacancy/' + vacancy.id">
                                                <v-btn color="primary"
                                                       outlined
                                                       raised>Батафсил
                                                </v-btn>
                                            </router-link>
                                        </div>

                                    </v-card>


                                </v-col>
                                <v-skeleton-loader
                                    class="mx-auto my-5"
                                    type="list-item-avatar-line, article" v-else
                                ></v-skeleton-loader>
                            </v-row>
                        </v-col>
                        <v-col lg="4" md="5" sm="12" xs="12">
                            <v-row>
                                <v-container>
                                    <v-list class="vacancy-sidebar">
                                        <p>Божхона органларида хизмат ўташ бўйича </p>
                                        <v-list-item to="/services/vacancy/questions">

                                            <div>
                                                <v-icon>mdi-frequently-asked-questions</v-icon>
                                                <span>Савол ва жавоблар</span></div>
                                        </v-list-item>
                                        <v-list-item to="/services/vacancy/documents">
                                            <div>
                                                <v-icon>mdi-file-document-multiple-outline</v-icon>
                                                <span>Меъёрий-ҳуқуқий ҳужжатлар </span>
                                            </div>
                                        </v-list-item>

                                    </v-list>
                                </v-container>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>


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
                    disabled: true,
                    exact: true,
                },
            ],
            loading: true,
            myRegion: null,
            searchVacancy: "",
            vacancies: [],
            regions: [],
            filteredVacancies: []

        }
    },
    methods: {
        filterVacancies() {
            if (this.myRegion == null) this.filteredVacancies = this.vacancies;
            else {

                this.filteredVacancies = this.vacancies.filter(item => item.b_id == this.myRegion)

            }
        },
        filterVacanciesByTitle() {
            let _this = this;

            if (this.myRegion == null) this.filteredVacancies = this.vacancies;
            else {
                this.filteredVacancies = [];
                this.filteredVacancies = this.vacancies.filter(item => item.b_id == this.myRegion)
                //console.log(this.filteredVacancies);
            }
        },
        async getVacancies() {
            const _app = this;
            //if (this.$auth.user()) {
            await axios.get("/api/v1/ex_api/vakantlar").then(function (response) {
                if (response.data.success === true) {
                    setTimeout(() => {
                        _app.loading = false;
                    }, 800)

                    _app.vacancies = _app.filteredVacancies = response.data.data;
                } else _app.loading = false;
            });

            /*} else {
                await axios.get("/api/v1/ex_api/vakantlar").then(function (response) {
                    if (response.data.success === true) {
                        _app.loading=false;
                        _app.vacancies = _app.filteredVacancies = response.data.data;
                    }
                });
            }*/
        },
        async getRegions() {
            const _app = this;
            await axios.get("/api/v1/ex_api/boshqarma").then(function (response) {
                if (response.status === 200) {
                    _app.regions = response.data.data;
                    _app.regions = _app.regions.map(function (item) {
                        item.name = item.name.replace("Ўзбекистон Республикаси Давлат божхона қўмитасининг ", "")
                        return item;
                    })
                }
            });
        }
    },

    mounted: function () {
        //this.filterVacancies();
        this.getVacancies();
        this.getRegions();

    },
    watch: {
        myRegion: function (val) {
            this.filterVacancies();
        },
        searchVacancy: function (val) {
            if (val.length > 0) {
                // val='/' + val + '/i';
                this.filteredVacancies = this.vacancies.filter(item => {
                    return item.seven.toLowerCase().includes(val.toLowerCase())
                });
            } else this.filteredVacancies = this.vacancies;
        }

    }
}

</script>
<style lang="css">

@import "/public/css/mix/vacancy.css";
</style>
