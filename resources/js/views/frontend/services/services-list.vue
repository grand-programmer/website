<template>
    <div>
        <service-card v-for="service in services"
                      :name="service.text"
                      :img="service.img"
                      :key="service.text"
                      @open="openApp(service)"
                      :corner_text="(news.includes(service.name))?'Янги':null"
        />
        <form ref="AppForm" id="appForm" method="get" target="_blank" class="d-none">
            <input type="hidden" name="userInfoTR" v-model="JSON.stringify(appData)"/>
        </form>
        <!--        <div class="col-md-2 portfolio_single p1 ">
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
                            <p>{{ $t("Маиший техникаларнинг импорти қонунийлигини текшириш") }}</p>
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
                </div>-->
    </div>
</template>

<script>
import ServiceCard from "./service-card";

export default {
    name: "services-list",
    components: {ServiceCard},
    data() {
        return {
            news:[
                'vacancy',
                'decision',
                'intellectual',
                'recycle',
                'refund',
                'tftn',
                'ombor',
                'cargo',
                'murojaat',
                'navbat',
                'arxiv',
            ],
            services: [
                {
                    name: 'vacancy',
                    img: '/img/icons/ishga-kirish-uchun-navbat.png',
                    text: this.$t("Божхона органларига ишга жойлашиш"),
                    href: '/services/vacancy',
                    sort: 1,
                },
                {
                    name: 'decision',
                    img: '/img/icons/customs-brokerage.png',
                    text: this.$t("Божхона тўловлари бўйича дастлабки қарор олиш"),
                    href: '/services/decisions',
                    sort: 2,
                },
                {
                    name: 'intellectual',
                    img: '/img/icons/patent.png',
                    text: this.$t("Интеллектуал мулк объектлари божхона реестрига киритиш учун ариза юбориш"),
                    href: '/services/intellectual',
                    sort: 3,
                },
                {
                    name: 'refund',
                    img: '/img/icons/refund.png',
                    text: this.$t("ТИФ субъектининг божхона органлари ғазна ҳисобварағидаги маблағларини қайтариш"),
                    href: '/services/refund',
                    sort: 4,
                },
                {
                    name: 'recycle',
                    img: '/img/icons/recycle.png',
                    text: this.$t("Товарни божхона ҳудудида қайта ишлаш учун рухсатнома олиш"),
                    href: '/services/recycle',
                    sort: 5,
                },
                {
                    name: 'tftn',
                    img: '/img/icons/customs-clearance-icon.png',
                    text: this.$t("ТИФ ТН кодини аниқлаш юзасидан ариза бериш"),
                    href: '/services/tftn',
                    sort: 6,
                },
                {
                    name: 'ombor',
                    img: '/img/icons/warehouse.png',
                    text: this.$t("Юк операциялари"),
                    href: null,
                    sort: 7,
                },
                {
                    name: 'cargo',
                    img: '/img/icons/etranzit.png',
                    text: 'E-Tranzit',
                    href: null,
                    sort: 8,
                },
                {
                    name: 'murojaat',
                    img: '/img/icons/elektron-murojaat.png',
                    text: this.$t("Электрон мурожаат йўлаш"),
                    href: '/services/appeals',
                    sort: 9,
                },
                {
                    name: 'navbat',
                    img: '/img/icons/e-navbat.png',
                    text: this.$t("E-Navbat"),
                    href: null,
                    sort: 10,
                },
                {
                    name: 'arxiv',
                    img: '/img/icons/e-arxiv.png',
                    text: this.$t("E-Arxiv"),
                    href: null,
                    sort: 11,
                },
                {
                    name: 'singlewindow',
                    img: '/img/icons/singlewindow.png',
                    text: this.$t("Ягона дарча божхона ахборот тизими"),
                    href: null,
                    sort: 11,
                },
                {
                    name: 'maishiy',
                    img: '/img/icons/maishiy.png',
                    text: this.$t("Маиший техникаларнинг импорти қонунийлигини текшириш"),
                    href: 'https://ed1.customs.uz/Markirovka/',
                    sort: 12,
                },
                {
                    name: 'mevaSabzavot',
                    img: '/img/icons/meva.png',
                    text: this.$t("Мева-сабзавот маҳсулотлари экспорти тўғрисида маълумот"),
                    href: 'http://service.customs.uz/autogtd_report/index.jsp?pc=4#',
                    sort: 13,
                },
                {
                    name: 'import-tovar-qiymati',
                    img: '/img/icons/import_malumot.png',
                    text: this.$t("Ўзбекистон Республикасига импорт қилинаётган товарларнинг божхона қиймати тўғрисида маълумот"),
                    href: 'http://service.customs.uz/autogtd_report/index.jsp?pc=4',
                    sort: 14,
                },
                {
                    name: 'mygov555',
                    img: '/img/icons/oversize-load-icon.png',
                    text: this.$t("Халқаро йўлларда ташиш (ХЙТ) дафтарчасидан фойдаланиш учун рухсатнома олиш"),
                    href: 'https://my.gov.uz/uz/service/555',
                    sort: 15,
                },
                {
                    name: 'mygov222',
                    img: '/img/icons/Enterprise.png',
                    text: this.$t("Корхонани хорижий товарлар учун божхона тўловлари бўйича корхоналар маълумотномасига киритиш"),
                    href: 'https://my.gov.uz/uz/service/222',
                    sort: 16,
                },
                {
                    name: 'mygov322',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Божхона омборхонаси фаолиятига янги лицензия олиш"),
                    href: 'https://my.gov.uz/uz/service/322',
                    sort: 17,
                },
                {
                    name: 'mygov326',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Божхона омборхонаси фаолияти учун лицензияни қайта расмийлаштириш"),
                    href: 'https://my.gov.uz/uz/service/326',
                    sort: 18,
                },
                {
                    name: 'mygov344',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Бож олинмайдиган савдо дўкони фаолияти учун янги лицензия олиш"),
                    href: 'https://my.gov.uz/uz/service/344',
                    sort: 19,
                },
                {
                    name: 'mygov331',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Эркин омбор фаолияти учун янги лицензия олиш"),
                    href: 'https://my.gov.uz/uz/service/331',
                    sort: 20,
                },
                {
                    name: 'mygov345',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Бож олинмайдиган савдо дўкони фаолияти учун лицензияни қайта расмийлаштириш"),
                    href: 'https://my.gov.uz/uz/service/345',
                    sort: 21,
                },
                {
                    name: 'mygov343',
                    img: '/img/icons/warehouse-license.png',
                    text: this.$t("Эркин омбор фаолияти учун лицензияни қайта расмийлаштириш"),
                    href: 'https://my.gov.uz/uz/service/343',
                    sort: 22,
                },
                {
                    name: 'mygov209',
                    img: '/img/icons/elektron-deklaratsiyalash.png',
                    text: this.$t("Товарларни электрон декларациялаш"),
                    href: 'https://my.gov.uz/uz/service/209',
                    sort: 23,
                },
                {
                    name: 'mygov220',
                    img: '/img/icons/solishtiruv-dalolatnomalari.png',
                    text: this.$t("Божхона тўловлари бўйича солиштирув далолатномалари"),
                    href: 'https://my.gov.uz/uz/service/220',
                    sort: 24,
                },
                {
                    name: 'mygov82',
                    img: '/img/icons/avtotransportda-olib-kirilayotgan-yuk-haqida-malumot.png',
                    text: this.$t("Автотранспортда олиб кирилаётган юк ҳақида маълумот олиш"),
                    href: 'https://my.gov.uz/uz/service/82',
                    sort: 25,
                },
                {
                    name: 'mygov81',
                    img: '/img/icons/temiryoltransportidaolibkirilayotgan.png',
                    text: this.$t("Темир йўл транспортида олиб кирилаётган юк ҳақида маълумот олиш"),
                    href: 'https://my.gov.uz/uz/service/81',
                    sort: 26,
                },
                {
                    name: 'mygov127',
                    img: '/img/icons/chet-el-tovarlariga.png',
                    text: this.$t("Чет эл товарларига божхона тўловлари тўланишини таъминлаш"),
                    href: 'https://my.gov.uz/uz/service/127',
                    sort: 27,
                },
                {
                    name: 'mygov91',
                    img: '/img/icons/pochta.png',
                    text: this.$t("Почта декларацияси"),
                    href: 'https://my.gov.uz/uz/service/91',
                    sort: 28,
                },
                {
                    name: 'mygov-list-of-declaration',
                    img: '/img/icons/deklaratsiyalovchi-shaxlar-ruyhati.png',
                    text: this.$t("Декларацияловчи шахслар рўйхати"),
                    href: 'https://my.gov.uz/uz/list-of-declaration-persons/default/force',
                    sort: 29,
                },
                {
                    name: 'tarif',
                    img: '/img/icons/calculator.png',
                    text: this.$t("Интеграциялашган тариф"),
                    href: 'http://tarif.customs.uz/',
                    sort: 30,
                },
                {
                    name: 'bojxona-qoida-buzilishi',
                    img: '/img/icons/bojxona-qoida-buzilishi.png',
                    text: this.$t("Божхона қоида бузилиши"),
                    href: 'https://ed1.customs.uz/REESTR_BQB/',
                    sort: 31,
                },
                {
                    name: 'tovarlar-importi',
                    img: '/img/icons/tovarlar-importi.png',
                    text: this.$t("Товарлар импорти"),
                    href: 'http://service.customs.uz/autogtd_report/index.jsp?pc=9#',
                    sort: 32,

                },
                {
                    name: 'cabinet',
                    img: '/img/icons/tadbirkor-shaxsiy-kabineti.png',
                    text: this.$t("Тадбирконинг шахсий кабинети"),
                    href: null,
                    sort: 33,
                },
                {
                    name: 'mygov365',
                    img: '/img/icons/bojxona-tolovlarini-kechiktirib.png',
                    text: this.$t("Божхона тўловларини кечиктириб ёки бўлиб тўлаш"),
                    href: 'https://my.gov.uz/uz/service/365',
                    sort: 34,
                },
                {
                    name: 'mygov331',
                    img: '/img/icons/ombor-litsenziyalari.png',
                    text: this.$t("Омбор лицензиялари"),
                    href: 'https://my.gov.uz/uz/service/331',
                    sort: 35,
                },
                {
                    name: 'chet-el-transport',
                    img: '/img/icons/chet-el-transport.png',
                    text: this.$t("Чет эл транспорт воситаларини Ўзбекистон Республикасида бўлиш муддатини узайтириш"),
                    href: 'https://fast.upay.uz/merchant/597',
                    sort: 36,
                },
                {
                    name: 'dep',
                    img: '/img/icons/tif-ishtirokchisining-dastlabki-pul.png',
                    text: this.$t("ТИФ иштирокчисининг дастлабки пул маблағлари"),
                    href: null,
                    sort: 37,
                },
                {
                    name: 'chiqish-vaqtini-tadqiqot',
                    img: '/img/icons/chiqish-vaqtini-tadqiqot-va-monitoring.png',
                    text: this.$t("Чиқиш вақтини тадқиқот ва мониторинг қилиш ахборот платформаси"),
                    href: 'http://time.customs.uz/',
                    sort: 38,
                },
                {
                    name: 'corruption',
                    img: '/img/icons/korrupsiya-boyicha-xabar-berish.png',
                    text: this.$t("Корупция бўйича ҳабар бериш"),
                    href: 'https://axborot.customs.uz/Xabar/#',
                    sort: 39,
                },
            ],
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
    methods: {

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
        async openApp(service) {
            const _this = this;
            if(service.href!==null){
                if(service.href.indexOf("http")!==-1){
                    window.open(service.href)
                }else {
                    await _this.$router.push(service.href);
                }
            }
            console.log('1')
const appName=service.name
            $(".personalcabinet").remove()
            //this.$refs.AppForm.action="http://singlewindow.uz/oauthTR";
            //console.log(this.$refs.AppForm);

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

<style scoped>

</style>
