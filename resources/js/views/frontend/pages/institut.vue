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
                            <h3 class="w-100">{{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Марказий аппарати тузилмаси") }}</h3>
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
                                            >
                                                <p>
                                                    <template v-if="rahbar.lavozimi==='1'">
                                                        {{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раиси") }}
                                                    </template>
                                                    <template v-else-if="rahbar.lavozimi==='2'">
                                                        {{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг биринчи ўринбосари") }}
                                                    </template>
                                                    <template v-else>
                                                        {{ $t("Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг ўринбосари") }}
                                                    </template>


                                                    <!--                                                v-if="rahbar.lavozimi==='1'">раиси</template>  <template
                                                                                                    v-else-if="rahbar.lavozimi==='2'">раисининг 1-ўринбосари </template>  <template
                                                                                                    v-else> раисининг ўринбосари</template>-->
                                                </p>
                                                <p class="fw-bold">{{ rahbar.fio ? rahbar.fio : '' }}</p>
                                                <p>{{ $t("мутасаддилигидаги таркибий тузилмалар") }}</p>
                                            </div>


                                        </div>


                                    </div>
                                    <div class="content-bar">
                                        <div class="rectangle">
                                            <span class=" triangle" :class="aktiv_content"></span>
                                            <div class="content row">
                                                <template v-for="rahbar in rahbariyat">

                                                    <div class="my-card col-4" :key="rahbar.id+'11'+bk"
                                                         v-for="(boshqarma,bk) in boshqarmalar[rahbar.id] "
                                                         v-show="aktiv_rahbar===rahbar.id">
                                                        <div class="row">
                                                            <div class="col-12 p-0">
                                                                <div>
                                                                    <div class="my-card-header">
                                                                        <p>{{ boshqarma.org_name }}</p>
                                                                        <div class="my-card-header-wrapper">
                                                                            <div class="profile-icon-wrapper">
                                                                                <div class="profile-icon"
                                                                                     @click="dialog_image=true; image='/storage/uploads/markaziy/' + boshqarma.image"
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
                                                                                <p>{{ $t("Бошқарма бошлиғи") }}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-row">
                                                                            <div class="fas fa-phone-alt">&nbsp;</div>
                                                                            <div class="column-text">
                                                                                <p>{{ $t("Хизмат телефони") }}</p>
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
                                                                                <p>{{ $t("Ҳодимлар") }}:</p>
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


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog v-model="dialog_image" content-class="my_dialog" v-show="image">
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
import i18n from "../../../i18n";

export default {
    name: "rahbariyat",
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
                    text: i18n.t('Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси марказий аппарати'),
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
            aktiv_rahbar: 4,
            aktiv_content: 1,
            dialog_image: false,
            image: null,
            mydata: {
                rahbariyat: [
                    {
                        id: 1,
                        fio: "ВАКАНТ",
                        lavozimi: "1",
                        qabul: "Душанба соат 9.00 дан 17.00 гача",
                        phone: "(71) - 202-99-90",
                        add_phone: null,
                        email: null,
                        rahbariyat: 0,
                        org_name: null,
                        image: "1650972408.png",
                        sort: 1,
                        translates: "{\"oz\":{\"qabul\":null},\"ru\":{\"qabul\":\"Прием граждан проводится ежедневно с 09:00 до 17:00\"},\"en\":{\"qabul\":\"Reception of citizens is held daily from 9:00 to 17:00\"}}"
                    },
                    {
                        id: 7,
                        fio: "МУХТОРОВ ИЛХОМ МУХТОРОВИЧ",
                        lavozimi: "2",
                        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        phone: "(78) - 120-76-00",
                        add_phone: null,
                        email: null,
                        rahbariyat: 0,
                        org_name: null,
                        image: "1665581517.png",
                        created_at: "2022-04-26T11:47:50.000000Z",
                        updated_at: "2022-11-22T09:29:02.000000Z",
                        sort: 2,
                        translates: "{\"oz\":{\"qabul\":null},\"ru\":{\"qabul\":\"Прием граждан проводится ежедневно с 9:00 до 17:00\"},\"en\":{\"qabul\":null}}"
                    },
                    {
                        id: 8,
                        fio: "МУСАМУХАМЕДОВ НОДИР КАМАЛИТДИНОВИЧ",
                        lavozimi: "3",
                        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        phone: "(78) - 120-76-00",
                        add_phone: null,
                        email: null,
                        rahbariyat: 0,
                        org_name: null,
                        image: "1654605868.png",
                        created_at: "2022-04-26T11:50:04.000000Z",
                        updated_at: "2022-12-05T05:48:40.000000Z",
                        sort: 3,
                        translates: "{\"oz\":{\"qabul\":null},\"ru\":{\"qabul\":\"Прием граждан проводится ежедневно с 9:00 до 17:00\"},\"en\":{\"qabul\":null}}"
                    },
                    {
                        id: 28,
                        fio: "ЧОРИЕВ ОТАБЕК БОБОМУРАТОВИЧ",
                        lavozimi: "3",
                        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        phone: "(78) - 120-76-00",
                        add_phone: null,
                        email: null,
                        rahbariyat: 0,
                        org_name: null,
                        image: "1654604871.png",
                        created_at: "2022-06-07T12:26:21.000000Z",
                        updated_at: "2022-11-22T09:29:33.000000Z",
                        sort: 4,
                        translates: "{\"oz\":{\"qabul\":null},\"ru\":{\"qabul\":\"Прием граждан проводится ежедневно с 9:00 до 17:00\"},\"en\":{\"qabul\":null}}"
                    },
                    {
                        id: 27,
                        fio: "ИБРАГИМОВ ОТАБЕК ИСМОИЛОВИЧ",
                        lavozimi: "3",
                        qabul: "Прием граждан осуществляется ежедневно с 09:00 до 17:00",
                        phone: "(78) - 120-76-00",
                        add_phone: null,
                        email: null,
                        rahbariyat: 0,
                        org_name: null,
                        image: "1654604688.",
                        created_at: "2022-06-07T12:24:48.000000Z",
                        updated_at: "2022-11-22T09:29:40.000000Z",
                        sort: 5,
                        translates: "{\"oz\":{\"qabul\":null},\"ru\":{\"qabul\":\"Прием граждан проводится ежедневно с 9:00 до 17:00\"},\"en\":{\"qabul\":null}}"
                    }
                ],
                boshqarma: [
                    {
                        id: 24,
                        fio: "ДУСТЁРОВ АЗИЗБЕК МУСИРМОНОВИЧ",
                        lavozimi: "undefined",
                        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                        phone: "120-76-96",
                        add_phone: "120-76-43",
                        email: "bojxona@umail.uz",
                        rahbariyat: 4,
                        org_name: "Юридик бошқарма",
                        image: "1659609423.png",
                        created_at: "2022-05-05T14:03:44.000000Z",
                        updated_at: "2022-11-22T10:51:50.000000Z",
                        sort: null,
                        translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Юридическое управление\"},\"en\":{\"org_name\":null}}"
                    },{
                            id: 15,
                            fio: "ОЛИМЖОНОВ ФАРХОД ОЛИМЖОНОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-53",
                            add_phone: "120-76-36",
                            email: "bojxona@umail.uz",
                            rahbariyat: 7,
                            org_name: "Стратегик режалаштириш ва божхона тартиб-таомилларини  соддалаштириш бошқармаси",
                            image: "1651760427.png",
                            created_at: "2022-05-05T13:51:39.000000Z",
                            updated_at: "2022-08-04T10:37:41.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 13,
                            fio: "НУРЖАВОВ ҒАЙРАТ ОҚБЎТАЕВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-44",
                            add_phone: "120-76-71",
                            email: "bojxona@umail.uz",
                            rahbariyat: 7,
                            org_name: "Хавфларни мониторинг қилиш ва баҳолаш бошқармаси",
                            image: "1651756279.",
                            created_at: "2022-05-05T13:11:19.000000Z",
                            updated_at: "2022-07-13T11:20:12.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 10,
                            fio: "КОБУЛОВ РУСТАМ КАХРАМАНОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "78 120-76-16",
                            add_phone: "78 120-76-46",
                            email: "bojxona@umail.uz",
                            rahbariyat: 7,
                            org_name: "Божхона назорати ва расмийлаштирувини ташкил этиш бош бошқармаси",
                            image: "1651755119.",
                            created_at: "2022-05-05T12:51:59.000000Z",
                            updated_at: "2022-08-29T12:07:10.000000Z",
                            sort: null,
                            translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Главное управление по организации таможенного контроля и оформления\"},\"en\":{\"org_name\":null}}"
                        },
                        {
                            id: 6,
                            fio: "ДУСМУХАМЕДОВ АЛИШЕР ИСМАТИЛЛАЕВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "+99878 - 120 -76-90",
                            add_phone: "+99878-120-76-66, +99878-120-76-38,+99878-120-76-39, +99878-120-76-70, +99878-120-76-29",
                            email: "info@customs.uz",
                            rahbariyat: 7,
                            org_name: "Ахборот коммуникация технологиялари ва киберхавфсизликни таъминлаш бошқармаси",
                            image: "1650981872.png",
                            created_at: "2022-04-22T15:00:27.000000Z",
                            updated_at: "2022-08-29T12:06:12.000000Z",
                            sort: null,
                            translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Управление информационно-коммуникационных технологий и обеспечения кибербезопасности\"},\"en\":{\"org_name\":null}}"
                        },
                        {
                            id: 21,
                            fio: "ТАДЖИЕВ УЛУҒБЕК ТИРКАШОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-59",
                            add_phone: "120-76-30",
                            email: "bojxona@umail.uz",
                            rahbariyat: 8,
                            org_name: "Валюта назорати бошқармаси",
                            image: "1651759183.",
                            created_at: "2022-05-05T13:59:43.000000Z",
                            updated_at: "2022-07-13T11:25:30.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 11,
                            fio: "ИНЯМИНОВ АХТАМХОН ЭСАНОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "78 120-76-51",
                            add_phone: "78 120-76-62",
                            email: "bojxona@umail.uz",
                            rahbariyat: 8,
                            org_name: "Даромадлар ва божхона статистикаси бош бошқармаси",
                            image: "1651755292.",
                            created_at: "2022-05-05T12:54:52.000000Z",
                            updated_at: "2022-08-29T12:08:40.000000Z",
                            sort: null,
                            translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Главное управление доходов и таможенной статистики\"},\"en\":{\"org_name\":null}}"
                        },
                        {
                            id: 26,
                            fio: "АБДУЛЛАЕВ ДОНИЁР БАТИЁРОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "1207624",
                            add_phone: "1207664",
                            email: "bojxona@umail.uz",
                            rahbariyat: 27,
                            org_name: "Молия иқтисодиёт бошқармаси",
                            image: "1651759817.",
                            created_at: "2022-05-05T14:10:17.000000Z",
                            updated_at: "2022-07-13T11:24:18.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 23,
                            fio: "Шокиров Абдуазиз Абдухамитович",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-50",
                            add_phone: "120-76-82",
                            email: "bojxona@umail.uz",
                            rahbariyat: 27,
                            org_name: "Моддий-техника таъминоти бошқармаси",
                            image: "1651759382.",
                            created_at: "2022-05-05T14:03:02.000000Z",
                            updated_at: "2022-07-13T11:24:37.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 29,
                            fio: "Толипов Улуғбек Музафарович",
                            lavozimi: "Бошқарма бошлиғи",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "78-120-76-00",
                            add_phone: "78-120-76-00",
                            email: "bojxona@umail.uz",
                            rahbariyat: 27,
                            org_name: "Капитал қурилиш бошқармаси",
                            image: "1659611400.",
                            created_at: "2022-08-04T11:10:00.000000Z",
                            updated_at: "2022-08-04T11:10:00.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 18,
                            fio: "АКРАМОВ РОВШАНХОН ТУЛКИНОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-22",
                            add_phone: "120-76-74",
                            email: "bojxona@umail.uz",
                            rahbariyat: 28,
                            org_name: "Халқаро ҳамкорлик бошқармаси",
                            image: "1651758994.",
                            created_at: "2022-05-05T13:56:34.000000Z",
                            updated_at: "2022-11-22T09:20:56.000000Z",
                            sort: null,
                            translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Управление международного сотрудничества\"},\"en\":{\"org_name\":null}}"
                        },
                        {
                            id: 30,
                            fio: "Касимов Улугбек Атабаевич",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "78-120-76-47",
                            add_phone: "78-120-76-47",
                            email: "bojxona@umail.uz",
                            rahbariyat: 28,
                            org_name: "Божхона аудити бошқармаси",
                            image: "1663247976.",
                            created_at: "2022-09-15T13:19:36.000000Z",
                            updated_at: "2022-11-22T09:22:08.000000Z",
                            sort: null,
                            translates: "{\"oz\":{\"org_name\":null},\"ru\":{\"org_name\":\"Управление таможенного аудита\"},\"en\":{\"org_name\":null}}"
                        },
                        {
                            id: 19,
                            fio: "АХЛИМИРЗАЕВ АКРАМЖОН МАХАММАДЖОНОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-56",
                            add_phone: "120-76-57",
                            email: "bojxona@umail.uz",
                            rahbariyat: 28,
                            org_name: "Суриштирув ва маъмурий амалиёт бошқармаси",
                            image: "1651759062.",
                            created_at: "2022-05-05T13:57:42.000000Z",
                            updated_at: "2022-07-13T11:21:38.000000Z",
                            sort: null,
                            translates: null
                        },
                        {
                            id: 12,
                            fio: "РАХМАНОВ КАБИЛЖОН КОДИРОВИЧ",
                            lavozimi: "undefined",
                            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
                            phone: "120-76-89",
                            add_phone: "120-76-72",
                            email: "bojxona@umail.uz",
                            rahbariyat: 28,
                            org_name: "Контрабандага қарши курашиш бош бошқармаси",
                            image: "1659609843.png",
                            created_at: "2022-05-05T12:57:48.000000Z",
                            updated_at: "2022-08-04T10:44:03.000000Z",
                            sort: null,
                            translates: null
                        }
                    ]
            }

        }
    },
    methods: {
        leftbarClick(id, key) {
            this.aktiv_rahbar = id;
            this.aktiv_content = 'rahbar' + (key + 1);

        }
        ,
        async initialize() {

            const _this = this;
            //await api.readMarkaziy().then((response) =>
            //{
                //let mydata = response.data.data;
                _this.rahbariyat=_this.mydata.rahbariyat;
                _this.boshqarmalar=_this.mydata.boshqarma;

            //}

        }
    }
    ,
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

            &:hover, &.active {
                p {
                    color: $first-color !important;

                    &:nth-of-type(2) {
                        color: #1b7a42 !important;
                    }

                }

            }

            &.active {
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

            &.rahbar1 {
                top: 20px;
            }

            &.rahbar2 {
                top: 175px;
            }

            &.rahbar3 {
                top: 350px;
            }

            &.rahbar4 {
                top: 530px;
            }

            &.rahbar5 {
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
                                    height: 20px !important;
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
