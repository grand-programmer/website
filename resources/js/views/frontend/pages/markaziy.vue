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
                            <h3>Давлат божхона қўмитаси Марказий аппарати марказий тузилмаси</h3>
                        </div>
                        <div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="accordion" id="accordionExamplemarkaziy">
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
                                                <div class="accordion-body row"><!--begin  my-card-->
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
                                                    <!-- my-card--><!--begin  my-card-->
                                                    <!--                                <div class="my-card col-4">
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
                                                                                    </div>-->
                                                    <!-- my-card--></div>
                                            </div>
                                        </div>
                                        <!--                    <div class="accordion-item">
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
                                                            </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            orinbosarlar: []
        }
    },
    methods: {
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

<style scoped>
.section.page-container.markaziy .single_blog_content{
        width: 90vw;
        margin: 0 auto;
}
.section.page-container.markaziy .single_blog_content .widget_tittle{
    margin: 20px 20px 45px;
}
.section.page-container.markaziy .single_blog_content .my-card .my-card-info{
    padding-bottom: 0;
    padding-left: 90px;
}.section.page-container.markaziy .single_blog_content .my-card .my-card-info .text-row:last-child .column-text strong{
     height: 40px;
     display: block;
     overflow: hidden;

}
.section.page-container.markaziy .single_blog_content .my-card .my-card-header p:nth-of-type(1){
    width: 97%;
    min-height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section.page-container.markaziy .single_blog_content .my-card .text-row > div.far{
    margin-top: 12px;
}

</style>
