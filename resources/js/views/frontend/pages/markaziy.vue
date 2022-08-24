<template>
    <div class="section page-container markaziy">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>
        <div class="container-fluid">
            <div class="row"><!---->
                <div class="col col-12">
                    <div class="single_blog_content">
                        <div class="widget_tittle">
                            <h3>Давлат божхона қўмитаси Марказий аппарати тузилмаси</h3>
                        </div>
                        <div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="left-bar">
                                        <div class="rahbar-items">
                                            <div class="rahbar-item"
                                                 :class="aktiv_rahbar===rahbar.id?'active':''"

                                                 :key="'aa'+1+key" v-for="(rahbar,key) in rahbariyat"
                                                 @click="leftbarClick(rahbar.id,key)"
                                            ><p>Давлат божхона қўмитаси <template
                                                v-if="rahbar.lavozimi==='1'">раиси</template>  <template
                                                v-else-if="rahbar.lavozimi==='2'">раисининг 1-ўринбосари </template>  <template
                                                v-else> раисининг ўринбосари</template></p>
                                                <p class="fw-bold">{{ rahbar.fio ? rahbar.fio : '' }}</p>
                                                <p>мутасаддилигидаги таркибидаги тузилмалар</p>
                                            </div>


                                        </div>


                                    </div>
                                    <div class="content-bar">
                                        <div class="rectangle">
                                            <span class=" triangle" :class="aktiv_content"></span>
                                            <div class="content row">
                                                <template  v-for="rahbar in rahbariyat" >

                                                    <div class="my-card col-4" :key="rahbar.id+'11'+bk"
                                                         v-for="(boshqarma,bk) in boshqarmalar[rahbar.id] " v-show="aktiv_rahbar===rahbar.id">
                                                        <div class="row">
                                                            <div class="col-12 p-0">
                                                                <div>
                                                                    <div class="my-card-header">
                                                                        <p>{{ boshqarma.org_name }}</p>
                                                                        <div class="my-card-header-wrapper">
                                                                            <div class="profile-icon-wrapper">
                                                                                <div class="profile-icon" @click="dialog_image=true; image='/storage/uploads/markaziy/' + boshqarma.image"
                                                                                     :style="'background-image: url(/storage/uploads/markaziy/'+ boshqarma.image">
                                                                                    &nbsp;
                                                                                </div>
                                                                            </div>
                                                                            <p>{{ boshqarma.fio }}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="my-card-info">
                                                                        <div class="text-row">
                                                                            <div class="far fa-user">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Бошқарма бошлиғи</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Хизмат телефони</p>
                                                                                <strong>{{ boshqarma.phone }}</strong>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                            <p>{{ boshqarma.email }}</p>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Ҳодимлар:</p>
                                                                                <strong>{{
                                                                                        boshqarma.add_phone
                                                                                    }}</strong>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </template>


                                            </div>
                                        </div>
                                    </div>


<!--                                    <div class="accordion" id="accordionExamplemarkaziy">
                                        <div class="accordion-item" :key="key" v-for="(rahbar,key) in rahbariyat">
                                            <h2 class="accordion-header" :id="'headingOne'+rahbar.id">
                                                <button class="accordion-button "
                                                        :class="rahbar.lavozimi==='1'?'':'collapsed'" type="button"
                                                        data-bs-toggle="collapse"
                                                        :data-bs-target="'#collapseOne'+rahbar.id" aria-expanded="true"
                                                        aria-controls="collapseOne"><span class="capital_text">Давлат божхона қўмитаси <template
                                                    v-if="rahbar.lavozimi==='1'">раиси</template>  <template
                                                    v-else-if="rahbar.lavozimi==='2'">раисининг 1-ўринбосари </template>  <template
                                                    v-else> раисининг ўринбосари</template> </span>
                                                    <span>&nbsp; {{ rahbar.fio ? rahbar.fio : '' }} </span>&nbsp;
                                                    мутасаддилигидаги таркибидаги тузилмалар
                                                </button>
                                            </h2>
                                            <div class="accordion-collapse collapse "
                                                 :class="rahbar.lavozimi==='1'?'show':''" :id="'collapseOne'+rahbar.id"
                                                 :aria-labelledby="'headingOne' + rahbar.id"
                                                 data-bs-parent="#accordionExample" style="">
                                                <div class="accordion-body row">&lt;!&ndash;begin  my-card&ndash;&gt;
                                                    <div class="my-card col-4" :key="bk"
                                                         v-for="(boshqarma,bk) in boshqarmalar[rahbar.id] ">
                                                        <div class="row">
                                                            <div class="col-12 p-0">
                                                                <div>
                                                                    <div class="my-card-header">
                                                                        <p>{{ boshqarma.org_name }}</p>
                                                                        <div class="my-card-header-wrapper">
                                                                            <div class="profile-icon-wrapper">
                                                                                <div class="profile-icon"
                                                                                     :style="'background-image: url(/storage/uploads/markaziy/'+ boshqarma.image">
                                                                                    &nbsp;
                                                                                </div>
                                                                            </div>
                                                                            <p>{{ boshqarma.fio }}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="my-card-info">
                                                                        <div class="text-row">
                                                                            <div class="far fa-user">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Бошқарма бошлиғи</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Хизмат телефони</p>
                                                                                <strong>{{ boshqarma.phone }}</strong>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                            <p>{{ boshqarma.email }}</p>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                <strong>{{
                                                                                        boshqarma.add_phone
                                                                                    }}</strong>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    &lt;!&ndash; my-card&ndash;&gt;&lt;!&ndash;begin  my-card&ndash;&gt;
                                                    &lt;!&ndash;                                <div class="my-card col-4">
                                                                                        <div class="row">
                                                                                            <div class="col-12">
                                                                                                <div>
                                                                                                    <div class="my-card-header">
                                                                                                        <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                                        <div class="my-card-header-wrapper">
                                                                                                            <div class="profile-icon-wrapper">
                                                                                                                <div class="profile-icon">&nbsp;</div>
                                                                                                            </div>
                                                                                                            <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="my-card-info">
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Бошқарма бошлиғи</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Хизмат телефони</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                                                            <p>info@customs.uz</p>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    &lt;!&ndash; my-card&ndash;&gt;&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                                    <div class="my-card col-4">
                                                                                        <div class="row">
                                                                                            <div class="col-12">
                                                                                                <div>
                                                                                                    <div class="my-card-header">
                                                                                                        <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                                        <div class="my-card-header-wrapper">
                                                                                                            <div class="profile-icon-wrapper">
                                                                                                                <div class="profile-icon">&nbsp;</div>
                                                                                                            </div>
                                                                                                            <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="my-card-info">
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Бошқарма бошлиғи</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Хизмат телефони</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                                                            <p>info@customs.uz</p>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    &lt;!&ndash; my-card&ndash;&gt;&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                                    <div class="my-card col-4">
                                                                                        <div class="row">
                                                                                            <div class="col-12">
                                                                                                <div>
                                                                                                    <div class="my-card-header">
                                                                                                        <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                                        <div class="my-card-header-wrapper">
                                                                                                            <div class="profile-icon-wrapper">
                                                                                                                <div class="profile-icon">&nbsp;</div>
                                                                                                            </div>
                                                                                                            <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="my-card-info">
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Бошқарма бошлиғи</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Хизмат телефони</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                                                            <p>info@customs.uz</p>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                                    <div class="my-card col-4">
                                                                                        <div class="row">
                                                                                            <div class="col-12">
                                                                                                <div>
                                                                                                    <div class="my-card-header">
                                                                                                        <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                                        <div class="my-card-header-wrapper">
                                                                                                            <div class="profile-icon-wrapper">
                                                                                                                <div class="profile-icon">&nbsp;</div>
                                                                                                            </div>
                                                                                                            <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="my-card-info">
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Бошқарма бошлиғи</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Хизмат телефони</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                                                            <p>info@customs.uz</p>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                                    <div class="my-card col-4">
                                                                                        <div class="row">
                                                                                            <div class="col-12">
                                                                                                <div>
                                                                                                    <div class="my-card-header">
                                                                                                        <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                                        <div class="my-card-header-wrapper">
                                                                                                            <div class="profile-icon-wrapper">
                                                                                                                <div class="profile-icon">&nbsp;</div>
                                                                                                            </div>
                                                                                                            <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="my-card-info">
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-user">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Бошқарма бошлиғи</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Хизмат телефони</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="far fa-envelope">&nbsp;</div>
                                                                                                            <p>info@customs.uz</p>
                                                                                                        </div>
                                                                                                        <div class="text-row">
                                                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                            <div class="column-text">
                                                                                                                <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                                <strong>(71) - 120 -76-00</strong></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>&ndash;&gt;
                                                    &lt;!&ndash; my-card&ndash;&gt;</div>
                                            </div>
                                        </div>
                                        &lt;!&ndash;                    <div class="accordion-item">
                                                                <h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span class="capital_text">Давлат божхона қўмитаси раиси биринчи ўринбосари </span><span>мухторов илхом мухторович</span>мутасаддилигидаги таркибидаги тузилмалар</button></h2>
                                                                <div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                    <div class="accordion-body">&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt;</div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span class="capital_text">Давлат божхона қўмитаси раиси ўринбосари</span><span>салиев муталибджан обиджонович </span>мутасаддилигидаги таркибидаги тузилмалар </button></h2>
                                                                <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                    <div class="accordion-body">&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt;</div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><span class="capital_text">Давлат божхона қўмитаси раиси ўринбосари</span><span>кодиров уткиржон гайратович </span>мутасаддилигидаги таркибидаги тузилмалар </button></h2>
                                                                <div class="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                    <div class="accordion-body">&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt;</div>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><span class="capital_text">Давлат божхона қўмитаси раиси ўринбосари</span><span>мусамухамедов нодир камалитдинович </span>мутасаддилигидаги таркибидаги тузилмалар </button></h2>
                                                                <div class="accordion-collapse collapse" id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                    <div class="accordion-body">&lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt; &lt;!&ndash;begin  my-card&ndash;&gt;
                                                                        <div class="my-card col-4">
                                                                            <div class="row">
                                                                                <div class="col-12">
                                                                                    <div>
                                                                                        <div class="my-card-header">
                                                                                            <p>Ахборот коммуникация технологиялари бошқармаси</p>
                                                                                            <div class="my-card-header-wrapper">
                                                                                                <div class="profile-icon-wrapper">
                                                                                                    <div class="profile-icon">&nbsp;</div>
                                                                                                </div>
                                                                                                <p>Дустмухаммедов Алишер Исматиллаевич</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="my-card-info">
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-user">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Бошқарма бошлиғи</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Хизмат телефони</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="far fa-envelope">&nbsp;</div>
                                                                                                <p>info@customs.uz</p>
                                                                                            </div>
                                                                                            <div class="text-row">
                                                                                                <div class="fas fa-phone-alt">&nbsp;</div>
                                                                                                <div class="column-text">
                                                                                                    <p>Ҳодимлар телефон рақамлари:</p>
                                                                                                    <strong>(71) - 120 -76-00</strong></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        &lt;!&ndash; my-card&ndash;&gt;</div>
                                                                </div>
                                                            </div>&ndash;&gt;
                                    </div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog v-model="dialog_image" content-class="my_dialog"  v-show="image"  >
            <v-btn
            icon
            dark
            @click="dialog_image = false"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
            <img :src="image" style="max-width: 100%; width: initial;"/></v-dialog>
    </div>
</template>

<script>

import api from "./../../../src/services/apiService";

export default {
    name: "rahbariyat",
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
                    text: 'Давлат божхона қўмитаси марказий аппарати',
                    to: '/page/rahbariyat',
                    disabled: true,
                    exact: true,
                },
            ],
            rahbariyat: null,
            boshqarmalar: [],
            rais: null,
            birinchi_orinbosar: null,
            orinbosarlar: [],
            aktiv_rahbar:4,
            aktiv_content:1,
            dialog_image:false,
            image:null,
        }
    },
    methods: {
        leftbarClick(id,key){
            this.aktiv_rahbar=id;
            this.aktiv_content='rahbar' + (key+1);

        },
        async initialize() {

            const _this = this;
            await api.readMarkaziy().then((response) => {
                let mydata = response.data.data;
                Object.entries(response.data.data).forEach(([valkey, v]) => {
                    valkey = parseInt(valkey);
                    if (valkey === 0) _this.rahbariyat = v; else _this.boshqarmalar[valkey] = v;
                    /*if(v.lavozimi==='1') _this.rais=v;
                    else if(v.lavozimi==='2') _this.birinchi_orinbosar=v;
                    else _this.orinbosarlar.push(v);*/
                })
            }).catch((error) => {
                this.$toast.error(`Маълумотларни юклашда хатолик содир бўлди!`)
                //this.$router.replace("/").catch(() => {
                //});
            });

        }
    },
    created() {
        this.initialize()
    }
}
</script>

<style lang="scss">
$first-color: #39ae69;



.section.page-container.markaziy .single_blog_content {
    padding: 0 20px;
    margin: 0 auto;

    p {
        font-size: 14px;
    }
}

.section.page-container.markaziy .single_blog_content .widget_tittle {
    h3 {
        color: $first-color;
        font-weight: 600;
        text-align: center;
        border-bottom: 4px solid $first-color;
        padding-bottom: 15px;
        font-size: 22px;

    }

    margin: 20px 20px 0;
    border: none;
    padding-bottom: 35px;
}

.section.page-container.markaziy .single_blog_content .my-card .my-card-info {
    padding-bottom: 0;

}

.section.page-container.markaziy .single_blog_content .my-card .my-card-info .text-row:last-child .column-text strong {
    height: 40px;
    display: block;
    overflow: hidden;

}

/*.section.page-container.markaziy .single_blog_content .my-card .my-card-header p:nth-of-type(1) {
    width: 97%;
    min-height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}*/

.section.page-container.markaziy .single_blog_content .my-card .text-row > div.far {
    margin-top: 12px;
}


.left-bar {
    flex: 0 0 25%;

    .rahbar-items {
        .rahbar-item {
            border-bottom: 2px solid #39ae69;
            margin-bottom: 40px;
            padding-bottom: 10px;
            cursor: pointer;
            transition: 0.5s ease top;

            p {

                /* font-family: Lato !important; */

                /* font-family: Lato !important; */
                font-weight: bolder;
                font-size: 16px !important;
                line-height: 35px !important;
                padding: 0px 0 !important;
                text-align: left;

                &:nth-of-type(2) {
                    font-weight: 600 !important;
                    font-size: 18px !important;
                }

            }

            &:hover,&.active {
                p {
                    color: $first-color !important;

                    &:nth-of-type(2) {
                        color: #1b7a42 !important;
                    }

                }

            }
            &.active{
                border-width: 4px;
            }

        }
    }
}

.content-bar {
    display: flex;
    flex: 0 0 75%;

    .rectangle {
        border: 4px solid $first-color;
        width: 100%;
        border-radius: 10px;
        position: relative;

        .triangle {
            position: absolute;
            content: '';
            border-radius: 4px;
            top: calc(100% / 10 - 14px);
            height: 47px;
            background-color: #fff;
            z-index: 26;
            left: -4px;
            width: 5px;

            transition: 0.5s ease;
            &.rahbar1{
                top: 20px;
            }
            &.rahbar2{
                top: 175px;
            }
            &.rahbar3{
                top: 350px;
            }
            &.rahbar4{
                top: 530px;
            }
            &.rahbar5{
                top: 685px;
            }

            &:before {
                transform: rotate(315deg);
                left: auto;
                content: "";
                display: block;
                height: 35px;
                width: 4px;
                background-color: $first-color;
                margin-left: -12px;
                margin-top: 18px;
            }

            &:after {
                transform: rotate(45deg);
                left: auto;
                content: "";
                display: block;
                height: 35px;
                width: 4px;
                background-color: #39ae69;
                margin-left: -12px;
                margin-top: -59px;
            }
        }

        .content {
            padding: 30px 45px;

            .my-card {
                padding: 12px 25px;

                .row {
                    margin: 0 -7px;
                    border: 2px solid #39ae69;
                    /* border-bottom: 9px solid #9d9217; */
                    border-radius: 10px;

                    .my-card-header {
                        display: flex;
                        align-items: center;
                        margin: 10px 0 -5px 10px;
                        /* border-bottom: 1px solid #ccc; */
                        padding-bottom: 5px;
                        flex-direction: column;
                        overflow: hidden;

                        p {
                            width: 97%;
                            min-height: 77px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                        }

                        .my-card-header-wrapper {
                            display: flex;
                            margin-top: 15px;
                            align-items: center;
                            justify-content: space-around;

                            .profile-icon-wrapper {
                                padding: 9px 3px;
                                width: 120px;
                                height: 110px;
                                display: flex;
                                align-items: center;
                                border: 1px solid #39ae69;
                                border-radius: 100%;
                                background-color: #fff;
                                margin-right: 24px;

                                .profile-icon {
                                    /* width: 85px; */
                                    /* height: 85px; */
                                    display: inline-block;
                                    float: left;
                                    /* margin: 22px 15px; */
                                    background-position: top;
                                    background-size: cover;
                                    border-radius: 100%;
                                    /* border: 1px solid #ccc; */
                                    padding: 0;
                                    margin-left: 0px;
                                    background-image: url("/images/business-man.png");
                                }
                            }

                            p {
                                background-color: #39ae69;
                                border-radius: 10px;
                                min-height: 40px;
                                padding: 10px;
                                margin-right: -25px;
                                color: #fff;

                            }
                        }
                    }

                    .my-card-info {
                        .text-row {
                            display: flex;
                            align-items: flex-start;
                            margin: 7px 0;

                            .column-text {
                                margin-top: -6px;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                strong {
                                    height: 20px!important;
                                    width: 140px;

                                }
                            ;

                                p {
                                    margin-right: 10px;

                                }

                            }

                            p {
                                padding: 0;
                            }

                            div.far {
                                margin-top: inherit;
                            }

                        }

                    }
                }
            }
        }
    }
}


</style>
