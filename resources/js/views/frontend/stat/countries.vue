<template>
    <div class="slide_products" v-if="items.length">
        <VueSlickCarousel
            v-bind="settings"
        >
            <div class="slide_item" v-for="item in items.filter((filterItem,filterItemKey) => (filterItemKey<45))">
                <div class="slide_item_wrapper">
                    <div class="slide_item_sub_wrapper">
                        <div class="country_header">
                            <country-flag
                                :country="countries.filter(country => country.code===item.country)[0].slug"
                                size="big"
                                rounded
                                shadow
                                class="country-flag"
                            />
                            <span>{{ countries.filter(country => country.code===item.country)[0][$i18n.locale] }}</span>

                        </div>
                        <div class="slide_item_total_price" v-html="moneyFormat(item.total)"></div>
                        <div class="slide_item_total_difference">
                <span>

                    <p>{{ ((item.column1 * 100)/item.column2).toFixed(1) }} % <v-icon color="primary">mdi-trending-up</v-icon></p>
                    <p>ўтган йилга нисбатан</p>
                </span>
                            <span>

                    <p>{{ ((item.total * 100) / (items.map(el => { return el.total; }).reduce((x, y) => { return x + y },0))).toFixed(1) }} %</p>
                    <p>жамига  нисбатан</p>
                </span>
                        </div>
                    </div>
                </div>
            </div>
            <template #prevArrow="arrowOption">
                <div class="custom-arrow left-arrow">
                    <v-icon x-large :color="arrowOption.currentSlide  > 0 ? 'primary': 'default'">mdi-chevron-left
                    </v-icon>
                </div>
            </template>
            <template #nextArrow="arrowOption">
                <div class="custom-arrow">
                    <v-icon x-large
                            :color="arrowOption.currentSlide  <  arrowOption.slideCount - 4 ? 'primary': 'default'">
                        mdi-chevron-right
                    </v-icon>
                </div>
            </template>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CountryFlag from 'vue-country-flag'

export default {
    name: "statCountries",
    components: {VueSlickCarousel, CountryFlag},
    props: {
        regime: {
            type: [Number]
        },
        year: {
            type: [Number]
        },
        month: {
            type: [Number]
        }
    },
    data() {
        return {
            settings: {
                "dots": true,
                "arrows": true,
                "fade": true,
                "rtl": false,
                "infinite": false,
                "speed": 500,
                "rows": 3,
                "slidesPerRow": 3,
                "slidesToShow": 9,
                "slidesToScroll": 2,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            },
            items: [],
            countries: [
                {code: '004', uz: 'Афғонистон', oz: 'Аfgʼoniston', ru: 'Афганистан', en: 'Afghanistan', slug: 'af', slug1: 'afg' },
                {code: '248', uz: 'Аланд Ороллари', oz: 'Аland Orollari', ru: 'Аландские Острова', en: 'Åland Islands', slug: 'ax', slug1: 'ala' },
                {code: '008', uz: 'Албания', oz: 'Аlbaniya', ru: 'Албания', en: 'Albania', slug: 'al', slug1: 'alb' },
                {code: '012', uz: 'Жазоир', oz: 'Jazoir', ru: 'Алжир', en: 'Algeria', slug: 'dz', slug1: 'dza' },
                {code: '016', uz: 'Америка Самоаси', oz: 'Аmerika Samoasi', ru: 'Американское Самоа', en: 'American Samoa', slug: 'as', slug1: 'asm' },
                {code: '020', uz: 'Андорра', oz: 'Аndorra', ru: 'Андорра', en: 'Andorra', slug: 'ad', slug1: 'and' },
                {code: '024', uz: 'Ангола', oz: 'Аngola', ru: 'Ангола', en: 'Angola', slug: 'ao', slug1: 'ago' },
                {code: '660', uz: 'Ангилья', oz: 'Аngilьya', ru: 'Ангилья', en: 'Anguilla', slug: 'ai', slug1: 'aia' },
                {code: '010', uz: 'Антарктида', oz: 'Аntarktida', ru: 'Антарктида', en: 'Antarctica', slug: 'aq', slug1: 'ata' },
                {code: '028', uz: 'Антигуа ва Барбуда', oz: 'Аntigua va Barbuda', ru: 'Антигуа и Барбуда', en: 'Antigua and Barbuda', slug: 'ag', slug1: 'atg' },
                {code: '032', uz: 'Аргентина', oz: 'Аrgentina', ru: 'Аргентина', en: 'Argentina', slug: 'ar', slug1: 'arg' },
                {code: '051', uz: 'Арманистон', oz: 'Аrmaniston', ru: 'Армения', en: 'Armenia', slug: 'am', slug1: 'arm' },
                {code: '533', uz: 'Аруба', oz: 'Аruba', ru: 'Аруба', en: 'Aruba', slug: 'aw', slug1: 'abw' },
                {code: '036', uz: 'Австралия', oz: 'Аvstraliya', ru: 'Австралия', en: 'Australia', slug: 'au', slug1: 'aus' },
                {code: '040', uz: 'Австрия', oz: 'Аvstriya', ru: 'Австрия', en: 'Austria', slug: 'at', slug1: 'aut' },
                {code: '031', uz: 'Озарбайжон', oz: 'Ozarbayjon', ru: 'Азербайджан', en: 'Azerbaijan', slug: 'az', slug1: 'aze' },
                {code: '044', uz: 'Багам Ороллари', oz: 'Bagam Orollari', ru: 'Багамские Острова', en: 'Bahamas', slug: 'bs', slug1: 'bhs' },
                {code: '048', uz: 'Баҳрайн', oz: 'Bahrayn', ru: 'Бахрейн', en: 'Bahrain', slug: 'bh', slug1: 'bhr' },
                {code: '050', uz: 'Бангладеш', oz: 'Bangladesh', ru: 'Бангладеш', en: 'Bangladesh', slug: 'bd', slug1: 'bgd' },
                {code: '052', uz: 'Барбадос', oz: 'Barbados', ru: 'Барбадос', en: 'Barbados', slug: 'bb', slug1: 'brb' },
                {code: '112', uz: 'Беларусь', oz: 'Belarusь', ru: 'Беларусь', en: 'Belarus', slug: 'by', slug1: 'blr' },
                {code: '056', uz: 'Бельгия', oz: 'Belьgiya', ru: 'Бельгия', en: 'Belgium', slug: 'be', slug1: 'bel' },
                {code: '084', uz: 'Белиз', oz: 'Beliz', ru: 'Белиз', en: 'Belize', slug: 'bz', slug1: 'blz' },
                {code: '204', uz: 'Бенин', oz: 'Benin', ru: 'Бенин', en: 'Benin', slug: 'bj', slug1: 'ben' },
                {code: '060', uz: 'Бермуд Ороллари', oz: 'Bermud Orollari', ru: 'Бермудские Острова', en: 'Bermuda', slug: 'bm', slug1: 'bmu' },
                {code: '064', uz: 'Бутан', oz: 'Butan', ru: 'Бутан', en: 'Bhutan', slug: 'bt', slug1: 'btn' },
                {code: '068', uz: 'Боливия', oz: 'Boliviya', ru: 'Боливия', en: 'Bolivia (Plurinational State of)', slug: 'bo', slug1: 'bol' },
                {code: '535', uz: 'Бонэйр, Синт-Эсатиус ва Саба', oz: 'Boneyr, Sint-Esatius va Saba', ru: 'Бонэйр, Синт-Эсатиус и Саба', en: 'Bonaire, Sint Eustatius and Saba', slug: 'bq', slug1: 'bes' },
                {code: '070', uz: 'Босния ва Герцеговина', oz: 'Bosniya va Gertsegovina', ru: 'Босния и Герцеговина', en: 'Bosnia and Herzegovina', slug: 'ba', slug1: 'bih' },
                {code: '072', uz: 'Ботсвана', oz: 'Botsvana', ru: 'Ботсвана', en: 'Botswana', slug: 'bw', slug1: 'bwa' },
                {code: '074', uz: 'Буве', oz: 'Buve', ru: 'Буве', en: 'Bouvet Island', slug: 'bv', slug1: 'bvt' },
                {code: '076', uz: 'Бразилия', oz: 'Braziliya', ru: 'Бразилия', en: 'Brazil', slug: 'br', slug1: 'bra' },
                {code: '092', uz: 'Виргин Ороллари (Брит.)', oz: 'Virgin Orollari (Brit.)', ru: 'Виргин. Острова (Брит.)', en: 'Virgin Islands (British)', slug: 'vg', slug1: 'vgb' },
                {code: '086', uz: 'Британ Ҳудудлари', oz: 'Britan Hududlari', ru: 'Британские Территории', en: 'British Indian Ocean Territory', slug: 'io', slug1: 'iot' },
                {code: '096', uz: 'Бруней-Доруссалом', oz: 'Bruney-Dorussalom', ru: 'Бруней-Даруссалам', en: 'Brunei Darussalam', slug: 'bn', slug1: 'brn' },
                {code: '100', uz: 'Болгария', oz: 'Bolgariya', ru: 'Болгария', en: 'Bulgaria', slug: 'bg', slug1: 'bgr' },
                {code: '854', uz: 'Буркина-Фасо', oz: 'Burkina-Faso', ru: 'Буркина-Фасо', en: 'Burkina Faso', slug: 'bf', slug1: 'bfa' },
                {code: '108', uz: 'Бурунди', oz: 'Burundi', ru: 'Бурунди', en: 'Burundi', slug: 'bi', slug1: 'bdi' },
                {code: '116', uz: 'Камбожа', oz: 'Kamboja', ru: 'Камбоджа', en: 'Cambodia', slug: 'kh', slug1: 'khm' },
                {code: '120', uz: 'Камерун', oz: 'Kamerun', ru: 'Камерун', en: 'Cameroon', slug: 'cm', slug1: 'cmr' },
                {code: '124', uz: 'Канада', oz: 'Kanada', ru: 'Канада', en: 'Canada', slug: 'ca', slug1: 'can' },
                {code: '132', uz: 'Кабо-Верде', oz: 'Kabo-Verde', ru: 'Кабо-Верде', en: 'Cabo Verde', slug: 'cv', slug1: 'cpv' },
                {code: '136', uz: 'Кайман', oz: 'Kayman', ru: 'Кайман', en: 'Cayman Islands', slug: 'ky', slug1: 'cym' },
                {code: '140', uz: 'Марказий - Афр. Республикаси', oz: 'Markaziy - Аfr. Respublikasi', ru: 'Центр. - Афр. Республика', en: 'Central African Republic', slug: 'cf', slug1: 'caf' },
                {code: '148', uz: 'Чад', oz: 'Chad', ru: 'Чад', en: 'Chad', slug: 'td', slug1: 'tcd' },
                {code: '152', uz: 'Чили', oz: 'Chili', ru: 'Чили', en: 'Chile', slug: 'cl', slug1: 'chl' },
                {code: '156', uz: 'Хитой', oz: 'Xitoy', ru: 'Китай', en: 'China', slug: 'cn', slug1: 'chn' },
                {code: '344', uz: 'Гонконг', oz: 'Gonkong', ru: 'Гонконг', en: 'Hong Kong', slug: 'hk', slug1: 'hkg' },
                {code: '446', uz: 'Макао', oz: 'Makao', ru: 'Макао', en: 'Macao', slug: 'mo', slug1: 'mac' },
                {code: '162', uz: 'Рождество Ороли', oz: 'Rojdestvo Oroli', ru: 'Остров Рождества', en: 'Christmas Island', slug: 'cx', slug1: 'cxr' },
                {code: '166', uz: 'Кокос Ороллари', oz: 'Kokos Orollari', ru: 'Кокосовые Острова', en: 'Cocos (Keeling) Islands', slug: 'cc', slug1: 'cck' },
                {code: '170', uz: 'Колумбия', oz: 'Kolumbiya', ru: 'Колумбия', en: 'Colombia', slug: 'co', slug1: 'col' },
                {code: '174', uz: 'Комор Ороллари', oz: 'Komor Orollari', ru: 'Коморские Острова', en: 'Comoros', slug: 'km', slug1: 'com' },
                {code: '178', uz: 'Конго', oz: 'Kongo', ru: 'Конго', en: 'Congo', slug: 'cg', slug1: 'cog' },
                {code: '180', uz: 'Конго (КДР)', oz: 'Kongo (KDR)', ru: 'Конго (ДРК)', en: 'Congo, Democratic Republic of the', slug: 'cd', slug1: 'cod' },
                {code: '184', uz: 'Кук Ороллари', oz: 'Kuk Orollari', ru: 'Острова Кука', en: 'Cook Islands', slug: 'ck', slug1: 'cok' },
                {code: '188', uz: 'Коста-Рика', oz: 'Kosta-Rika', ru: 'Коста-Рика', en: 'Costa Rica', slug: 'cr', slug1: 'cri' },
                {code: '384', uz: 'Кот Д`ивуар', oz: 'Kot D`ivuar' , ru: 'Кот Д`ивуар', en: 'Côte d`Ivoire', slug: 'ci', slug1: 'civ'},
                {code: '191', uz: 'Хорватия', oz: 'Xorvatiya', ru: 'Хорватия', en: 'Croatia', slug: 'hr', slug1: 'hrv' },
                {code: '192', uz: 'Куба', oz: 'Kuba', ru: 'Куба', en: 'Cuba', slug: 'cu', slug1: 'cub' },
                {code: '531', uz: 'Кюрасао', oz: 'Kyurasao', ru: 'Кюрасао', en: 'Curaçao', slug: 'cw', slug1: 'cuw' },
                {code: '196', uz: 'Кипр', oz: 'Kipr', ru: 'Кипр', en: 'Cyprus', slug: 'cy', slug1: 'cyp' },
                {code: '203', uz: 'Чехия', oz: 'Chexiya', ru: 'Чехия', en: 'Czechia', slug: 'cz', slug1: 'cze' },
                {code: '208', uz: 'Дания', oz: 'Daniya', ru: 'Дания', en: 'Denmark', slug: 'dk', slug1: 'dnk' },
                {code: '262', uz: 'Джибути', oz: 'Djibuti', ru: 'Джибути', en: 'Djibouti', slug: 'dj', slug1: 'dji' },
                {code: '212', uz: 'Доминика', oz: 'Dominika', ru: 'Доминика', en: 'Dominica', slug: 'dm', slug1: 'dma' },
                {code: '214', uz: 'Доминика Республикаси', oz: 'Dominika Respublikasi', ru: 'Доминиканская Республика', en: 'Dominican Republic', slug: 'do', slug1: 'dom' },
                {code: '218', uz: 'Эквадор', oz: 'Ekvador', ru: 'Эквадор', en: 'Ecuador', slug: 'ec', slug1: 'ecu' },
                {code: '818', uz: 'Миср', oz: 'Misr', ru: 'Египет', en: 'Egypt', slug: 'eg', slug1: 'egy' },
                {code: '222', uz: 'Сальвадор', oz: 'Salьvador', ru: 'Сальвадор', en: 'El Salvador', slug: 'sv', slug1: 'slv' },
                {code: '226', uz: 'Экваториал Гвинея', oz: 'Ekvatorial Gvineya', ru: 'Экваториальная Гвинея', en: 'Equatorial Guinea', slug: 'gq', slug1: 'gnq' },
                {code: '232', uz: 'Эритрея', oz: 'Eritreya', ru: 'Эритрея', en: 'Eritrea', slug: 'er', slug1: 'eri' },
                {code: '233', uz: 'Эстония', oz: 'Estoniya', ru: 'Эстония', en: 'Estonia', slug: 'ee', slug1: 'est' },
                {code: '231', uz: 'Эфиопия', oz: 'Efiopiya', ru: 'Эфиопия', en: 'Ethiopia', slug: 'et', slug1: 'eth' },
                {code: '238', uz: 'Фолкленд Ороллари', oz: 'Folklend Orollari', ru: 'Фолклендские Острова', en: 'Falkland Islands (Malvinas)', slug: 'fk', slug1: 'flk' },
                {code: '234', uz: 'Фарер Ороллари', oz: 'Farer Orollari', ru: 'Фарерские Острова', en: 'Faroe Islands', slug: 'fo', slug1: 'fro' },
                {code: '242', uz: 'Фижи', oz: 'Fiji', ru: 'Фиджи', en: 'Fiji', slug: 'fj', slug1: 'fji' },
                {code: '246', uz: 'Финляндия', oz: 'Finlyandiya', ru: 'Финляндия', en: 'Finland', slug: 'fi', slug1: 'fin' },
                {code: '250', uz: 'Франция', oz: 'Frantsiya', ru: 'Франция', en: 'France', slug: 'fr', slug1: 'fra' },
                {code: '254', uz: 'Француз Гвианаси (Фр.)', oz: 'Frantsuz Gvianasi (Fr.)', ru: 'Французская Гвиана (Фр.)', en: 'French Guiana', slug: 'gf', slug1: 'guf' },
                {code: '258', uz: 'Француз Полинезияси', oz: 'Frantsuz Polineziyasi', ru: 'Французская Полинезия', en: 'French Polynesia', slug: 'pf', slug1: 'pyf' },
                {code: '260', uz: 'Фр. Жанубий Ҳудудлари', oz: 'Fr. Janubiy Hududlari', ru: 'Фр. Южные Территории', en: 'French Southern Territories', slug: 'tf', slug1: 'atf' },
                {code: '266', uz: 'Габон', oz: 'Gabon', ru: 'Габон', en: 'Gabon', slug: 'ga', slug1: 'gab' },
                {code: '270', uz: 'Гамбия', oz: 'Gambiya', ru: 'Гамбия', en: 'Gambia', slug: 'gm', slug1: 'gmb' },
                {code: '268', uz: 'Грузия', oz: 'Gruziya', ru: 'Грузия', en: 'Georgia', slug: 'ge', slug1: 'geo' },
                {code: '276', uz: 'Германия', oz: 'Germaniya', ru: 'Германия', en: 'Germany', slug: 'de', slug1: 'deu' },
                {code: '288', uz: 'Гана', oz: 'Gana', ru: 'Гана', en: 'Ghana', slug: 'gh', slug1: 'gha' },
                {code: '292', uz: 'Гибралтар', oz: 'Gibraltar', ru: 'Гибралтар', en: 'Gibraltar', slug: 'gi', slug1: 'gib' },
                {code: '300', uz: 'Греция', oz: 'Gretsiya', ru: 'Греция', en: 'Greece', slug: 'gr', slug1: 'grc' },
                {code: '304', uz: 'Гренландия', oz: 'Grenlandiya', ru: 'Гренландия', en: 'Greenland', slug: 'gl', slug1: 'grl' },
                {code: '308', uz: 'Гренада', oz: 'Grenada', ru: 'Гренада', en: 'Grenada', slug: 'gd', slug1: 'grd' },
                {code: '312', uz: 'Гваделупа', oz: 'Gvadelupa', ru: 'Гваделупа', en: 'Guadeloupe', slug: 'gp', slug1: 'glp' },
                {code: '316', uz: 'Гуам', oz: 'Guam', ru: 'Гуам', en: 'Guam', slug: 'gu', slug1: 'gum' },
                {code: '320', uz: 'Гватемала', oz: 'Gvatemala', ru: 'Гватемала', en: 'Guatemala', slug: 'gt', slug1: 'gtm' },
                {code: '831', uz: 'Гернси', oz: 'Gernsi', ru: 'Гернси', en: 'Guernsey', slug: 'gg', slug1: 'ggy' },
                {code: '324', uz: 'Гвинея', oz: 'Gvineya', ru: 'Гвинея', en: 'Guinea', slug: 'gn', slug1: 'gin' },
                {code: '624', uz: 'Гвинея-Бисау', oz: 'Gvineya-Bisau', ru: 'Гвинея-Бисау', en: 'Guinea-Bissau', slug: 'gw', slug1: 'gnb' },
                {code: '328', uz: 'Гайана', oz: 'Gayana', ru: 'Гайана', en: 'Guyana', slug: 'gy', slug1: 'guy' },
                {code: '332', uz: 'Гаити', oz: 'Gaiti', ru: 'Гаити', en: 'Haiti', slug: 'ht', slug1: 'hti' },
                {code: '334', uz: 'Херд ва Макдональд', oz: 'Xerd va Makdonalьd', ru: 'Херд и Макдональд', en: 'Heard Island and McDonald Islands', slug: 'hm', slug1: 'hmd' },
                {code: '336', uz: 'Ватикан', oz: 'Vatikan', ru: 'Ватикан', en: 'Holy See', slug: 'va', slug1: 'vat' },
                {code: '340', uz: 'Гондурас', oz: 'Gonduras', ru: 'Гондурас', en: 'Honduras', slug: 'hn', slug1: 'hnd' },
                {code: '348', uz: 'Венгрия', oz: 'Vengriya', ru: 'Венгрия', en: 'Hungary', slug: 'hu', slug1: 'hun' },
                {code: '352', uz: 'Исландия', oz: 'Islandiya', ru: 'Исландия', en: 'Iceland', slug: 'is', slug1: 'isl' },
                {code: '356', uz: 'Ҳиндистон', oz: 'Hindiston', ru: 'Индия', en: 'India', slug: 'in', slug1: 'ind' },
                {code: '360', uz: 'Индонезия', oz: 'Indoneziya', ru: 'Индонезия', en: 'Indonesia', slug: 'id', slug1: 'idn' },
                {code: '364', uz: 'Эрон', oz: 'Eron', ru: 'Иран', en: 'Iran (Islamic Republic of)', slug: 'ir', slug1: 'irn' },
                {code: '368', uz: 'Ироқ', oz: 'Iroq', ru: 'Ирак', en: 'Iraq', slug: 'iq', slug1: 'irq' },
                {code: '372', uz: 'Ирландия', oz: 'Irlandiya', ru: 'Ирландия', en: 'Ireland', slug: 'ie', slug1: 'irl' },
                {code: '833', uz: 'Мэн Ороли', oz: 'Men Oroli', ru: 'Остров Мэн', en: 'Isle of Man', slug: 'im', slug1: 'imn' },
                {code: '376', uz: 'Исроил', oz: 'Isroil', ru: 'Израиль', en: 'Israel', slug: 'il', slug1: 'isr' },
                {code: '380', uz: 'Италия', oz: 'Italiya', ru: 'Италия', en: 'Italy', slug: 'it', slug1: 'ita' },
                {code: '388', uz: 'Ямайка', oz: 'Yamayka', ru: 'Ямайка', en: 'Jamaica', slug: 'jm', slug1: 'jam' },
                {code: '392', uz: 'Япония', oz: 'Yaponiya', ru: 'Япония', en: 'Japan', slug: 'jp', slug1: 'jpn' },
                {code: '832', uz: 'Джерси', oz: 'Djersi', ru: 'Джерси', en: 'Jersey', slug: 'je', slug1: 'jey' },
                {code: '400', uz: 'Иордания', oz: 'Iordaniya', ru: 'Иордания', en: 'Jordan', slug: 'jo', slug1: 'jor' },
                {code: '398', uz: 'Қозоғистон', oz: 'Qozogʼiston', ru: 'Казахстан', en: 'Kazakhstan', slug: 'kz', slug1: 'kaz' },
                {code: '404', uz: 'Кения', oz: 'Keniya', ru: 'Кения', en: 'Kenya', slug: 'ke', slug1: 'ken' },
                {code: '296', uz: 'Кирибати', oz: 'Kiribati', ru: 'Кирибати', en: 'Kiribati', slug: 'ki', slug1: 'kir' },
                {code: '408', uz: 'Корея (КХДР)', oz: 'Koreya (KXDR)', ru: 'Корея (КНДР)', en: 'Korea (Democratic People`s Republic of)', slug: 'kp' , slug1: 'prk'},
                {code: '410', uz: 'Корея', oz: 'Koreya', ru: 'Корея', en: 'Korea, Republic of', slug: 'kr', slug1: 'kor' },
                {code: '414', uz: 'Қувайт', oz: 'Quvayt', ru: 'Кувейт', en: 'Kuwait', slug: 'kw', slug1: 'kwt' },
                {code: '417', uz: 'Қирғизистон', oz: 'Qirgʼiziston', ru: 'Кыргызстан', en: 'Kyrgyzstan', slug: 'kg', slug1: 'kgz' },
                {code: '418', uz: 'Лаос', oz: 'Laos', ru: 'Лаос', en: 'Lao People`s Democratic Republic', slug: 'la' , slug1: 'lao'},
                {code: '428', uz: 'Латвия', oz: 'Latviya', ru: 'Латвия', en: 'Latvia', slug: 'lv', slug1: 'lva' },
                {code: '422', uz: 'Ливан', oz: 'Livan', ru: 'Ливан', en: 'Lebanon', slug: 'lb', slug1: 'lbn' },
                {code: '426', uz: 'Лесото', oz: 'Lesoto', ru: 'Лесото', en: 'Lesotho', slug: 'ls', slug1: 'lso' },
                {code: '430', uz: 'Либерия', oz: 'Liberiya', ru: 'Либерия', en: 'Liberia', slug: 'lr', slug1: 'lbr' },
                {code: '434', uz: 'Ливия', oz: 'Liviya', ru: 'Ливия', en: 'Libya', slug: 'ly', slug1: 'lby' },
                {code: '438', uz: 'Лихтенштейн', oz: 'Lixtenshteyn', ru: 'Лихтенштейн', en: 'Liechtenstein', slug: 'li', slug1: 'lie' },
                {code: '440', uz: 'Литва', oz: 'Litva', ru: 'Литва', en: 'Lithuania', slug: 'lt', slug1: 'ltu' },
                {code: '442', uz: 'Люксембург', oz: 'Lyuksemburg', ru: 'Люксембург', en: 'Luxembourg', slug: 'lu', slug1: 'lux' },
                {code: '807', uz: 'Македония', oz: 'Makedoniya', ru: 'Македония', en: 'North Macedonia', slug: 'mk', slug1: 'mkd' },
                {code: '450', uz: 'Мадагаскар', oz: 'Madagaskar', ru: 'Мадагаскар', en: 'Madagascar', slug: 'mg', slug1: 'mdg' },
                {code: '454', uz: 'Малави', oz: 'Malavi', ru: 'Малави', en: 'Malawi', slug: 'mw', slug1: 'mwi' },
                {code: '458', uz: 'Малайзия', oz: 'Malayziya', ru: 'Малайзия', en: 'Malaysia', slug: 'my', slug1: 'mys' },
                {code: '462', uz: 'Мальдив', oz: 'Malьdiv', ru: 'Мальдивы', en: 'Maldives', slug: 'mv', slug1: 'mdv' },
                {code: '466', uz: 'Мали', oz: 'Mali', ru: 'Мали', en: 'Mali', slug: 'ml', slug1: 'mli' },
                {code: '470', uz: 'Мальта', oz: 'Malьta', ru: 'Мальта', en: 'Malta', slug: 'mt', slug1: 'mlt' },
                {code: '584', uz: 'Маршалл Ороллари', oz: 'Marshall Orollari', ru: 'Маршалловы Острова', en: 'Marshall Islands', slug: 'mh', slug1: 'mhl' },
                {code: '474', uz: 'Мартиника', oz: 'Martinika', ru: 'Мартиника', en: 'Martinique', slug: 'mq', slug1: 'mtq' },
                {code: '478', uz: 'Мавритания', oz: 'Mavritaniya', ru: 'Мавритания', en: 'Mauritania', slug: 'mr', slug1: 'mrt' },
                {code: '480', uz: 'Маврикий', oz: 'Mavrikiy', ru: 'Маврикий', en: 'Mauritius', slug: 'mu', slug1: 'mus' },
                {code: '175', uz: 'Майотта', oz: 'Mayotta', ru: 'Майотта', en: 'Mayotte', slug: 'yt', slug1: 'myt' },
                {code: '484', uz: 'Мексика', oz: 'Meksika', ru: 'Мексика', en: 'Mexico', slug: 'mx', slug1: 'mex' },
                {code: '583', uz: 'Микронезия', oz: 'Mikroneziya', ru: 'Микронезия', en: 'Micronesia (Federated States of)', slug: 'fm', slug1: 'fsm' },
                {code: '498', uz: 'Молдова', oz: 'Moldova', ru: 'Молдова', en: 'Moldova, Republic of', slug: 'md', slug1: 'mda' },
                {code: '492', uz: 'Монако', oz: 'Monako', ru: 'Монако', en: 'Monaco', slug: 'mc', slug1: 'mco' },
                {code: '496', uz: 'Мўғулистон', oz: 'Moʼgʼuliston', ru: 'Монголия', en: 'Mongolia', slug: 'mn', slug1: 'mng' },
                {code: '499', uz: 'Черногория', oz: 'Chernogoriya', ru: 'Черногория', en: 'Montenegro', slug: 'me', slug1: 'mne' },
                {code: '500', uz: 'Монтсеррат', oz: 'Montserrat', ru: 'Монтсеррат', en: 'Montserrat', slug: 'ms', slug1: 'msr' },
                {code: '504', uz: 'Марокаш', oz: 'Marokash', ru: 'Марокко', en: 'Morocco', slug: 'ma', slug1: 'mar' },
                {code: '508', uz: 'Мозамбик', oz: 'Mozambik', ru: 'Мозамбик', en: 'Mozambique', slug: 'mz', slug1: 'moz' },
                {code: '104', uz: 'Мьянма', oz: 'Mьyanma', ru: 'Мьянма', en: 'Myanmar', slug: 'mm', slug1: 'mmr' },
                {code: '516', uz: 'Намибия', oz: 'Namibiya', ru: 'Намибия', en: 'Namibia', slug: 'na', slug1: 'nam' },
                {code: '520', uz: 'Науру', oz: 'Nauru', ru: 'Науру', en: 'Nauru', slug: 'nr', slug1: 'nru' },
                {code: '524', uz: 'Непал', oz: 'Nepal', ru: 'Непал', en: 'Nepal', slug: 'np', slug1: 'npl' },
                {code: '528', uz: 'Нидерландия', oz: 'Niderlandiya', ru: 'Нидерланды', en: 'Netherlands', slug: 'nl', slug1: 'nld' },
                {code: '540', uz: 'Янги Каледония (Фр.)', oz: 'Yangi Kaledoniya (Fr.)', ru: 'Новая Каледония (Фр.)', en: 'New Caledonia', slug: 'nc', slug1: 'ncl' },
                {code: '554', uz: 'Янги Зеландия', oz: 'Yangi Zelandiya', ru: 'Новая Зеландия', en: 'New Zealand', slug: 'nz', slug1: 'nzl' },
                {code: '558', uz: 'Никарагуа', oz: 'Nikaragua', ru: 'Никарагуа', en: 'Nicaragua', slug: 'ni', slug1: 'nic' },
                {code: '562', uz: 'Нигер', oz: 'Niger', ru: 'Нигер', en: 'Niger', slug: 'ne', slug1: 'ner' },
                {code: '566', uz: 'Нигерия', oz: 'Nigeriya', ru: 'Нигерия', en: 'Nigeria', slug: 'ng', slug1: 'nga' },
                {code: '570', uz: 'Ниуэ (Янги Зел.)', oz: 'Niue (Yangi Zel.)', ru: 'Ниуэ (Н.Зел.)', en: 'Niue', slug: 'nu', slug1: 'niu' },
                {code: '574', uz: 'Норфолк', oz: 'Norfolk', ru: 'Норфолк', en: 'Norfolk Island', slug: 'nf', slug1: 'nfk' },
                {code: '580', uz: 'Мариан Ороллари', oz: 'Marian Orollari', ru: 'Марианские Острова', en: 'Northern Mariana Islands', slug: 'mp', slug1: 'mnp' },
                {code: '578', uz: 'Норвегия', oz: 'Norvegiya', ru: 'Норвегия', en: 'Norway', slug: 'no', slug1: 'nor' },
                {code: '512', uz: 'Уммон', oz: 'Ummon', ru: 'Оман', en: 'Oman', slug: 'om', slug1: 'omn' },
                {code: '586', uz: 'Покистон', oz: 'Pokiston', ru: 'Пакистан', en: 'Pakistan', slug: 'pk', slug1: 'pak' },
                {code: '585', uz: 'Палау', oz: 'Palau', ru: 'Палау', en: 'Palau', slug: 'pw', slug1: 'plw' },
                {code: '275', uz: 'Фаластин', oz: 'Falastin', ru: 'Палестина', en: 'Palestine, State of', slug: 'ps', slug1: 'pse' },
                {code: '591', uz: 'Панама', oz: 'Panama', ru: 'Панама', en: 'Panama', slug: 'pa', slug1: 'pan' },
                {code: '598', uz: 'Папуа - Янги Гвинея', oz: 'Papua - Yangi Gvineya', ru: 'Папуа - Новая Гвинея', en: 'Papua New Guinea', slug: 'pg', slug1: 'png' },
                {code: '600', uz: 'Парагвай', oz: 'Paragvay', ru: 'Парагвай', en: 'Paraguay', slug: 'py', slug1: 'pry' },
                {code: '604', uz: 'Перу', oz: 'Peru', ru: 'Перу', en: 'Peru', slug: 'pe', slug1: 'per' },
                {code: '608', uz: 'Филиппин', oz: 'Filippin', ru: 'Филиппины', en: 'Philippines', slug: 'ph', slug1: 'phl' },
                {code: '612', uz: 'Питкэрн', oz: 'Pitkern', ru: 'Питкэрн', en: 'Pitcairn', slug: 'pn', slug1: 'pcn' },
                {code: '616', uz: 'Польша', oz: 'Polьsha', ru: 'Польша', en: 'Poland', slug: 'pl', slug1: 'pol' },
                {code: '620', uz: 'Португалия', oz: 'Portugaliya', ru: 'Португалия', en: 'Portugal', slug: 'pt', slug1: 'prt' },
                {code: '630', uz: 'Пуэрто-Рико', oz: 'Puerto-Riko', ru: 'Пуэрто-Рико (США)', en: 'Puerto Rico', slug: 'pr', slug1: 'pri' },
                {code: '634', uz: 'Қатар', oz: 'Qatar', ru: 'Катар', en: 'Qatar', slug: 'qa', slug1: 'qat' },
                {code: '638', uz: 'Реюньон', oz: 'Reyunьon', ru: 'Реюньон', en: 'Réunion', slug: 're', slug1: 'reu' },
                {code: '642', uz: 'Руминия', oz: 'Ruminiya', ru: 'Румыния', en: 'Romania', slug: 'ro', slug1: 'rou' },
                {code: '643', uz: 'Россия', oz: 'Rossiya', ru: 'Россия', en: 'Russian Federation', slug: 'ru', slug1: 'rus' },
                {code: '646', uz: 'Руанда', oz: 'Ruanda', ru: 'Руанда', en: 'Rwanda', slug: 'rw', slug1: 'rwa' },
                {code: '652', uz: 'Сен-Бартелеми', oz: 'Sen-Bartelemi', ru: 'Сен-Бартелеми', en: 'Saint Barthélemy', slug: 'bl', slug1: 'blm' },
                {code: '659', uz: 'Сент-Китс ва Невис', oz: 'Sent-Kits va Nevis', ru: 'Сент-Китс и Невис', en: 'Saint Kitts and Nevis', slug: 'kn', slug1: 'kna' },
                {code: '662', uz: 'Сент-Люсия', oz: 'Sent-Lyusiya', ru: 'Сент-Люсия', en: 'Saint Lucia', slug: 'lc', slug1: 'lca' },
                {code: '534', uz: 'Сен-Мартен (Нид.)', oz: 'Sen-Marten (Nid.)', ru: 'Сен-Мартен (Нид.)', en: 'Saint Martin (French part)', slug: 'mf', slug1: 'maf' },
                {code: '666', uz: 'Сен-Пьер ва Микелон', oz: 'Sen-Pьer va Mikelon', ru: 'Сен-Пьер и Микелон', en: 'Saint Pierre and Miquelon', slug: 'pm', slug1: 'spm' },
                {code: '670', uz: 'Сент-Винсент ва Гренадин', oz: 'Sent-Vinsent va Grenadin', ru: 'Сент-Винсент и Гренадины', en: 'Saint Vincent and the Grenadines', slug: 'vc', slug1: 'vct' },
                {code: '882', uz: 'Самоа', oz: 'Samoa', ru: 'Самоа', en: 'Samoa', slug: 'ws', slug1: 'wsm' },
                {code: '674', uz: 'Сан-Марино', oz: 'San-Marino', ru: 'Сан-Марино', en: 'San Marino', slug: 'sm', slug1: 'smr' },
                {code: '678', uz: 'Сан-Томе ва Принсипи', oz: 'San-Tome va Prinsipi', ru: 'Сан-Томе и Принсипи', en: 'Sao Tome and Principe', slug: 'st', slug1: 'stp' },
                {code: '682', uz: 'Саудия Арабистони', oz: 'Saudiya Аrabistoni', ru: 'Саудовская Аравия', en: 'Saudi Arabia', slug: 'sa', slug1: 'sau' },
                {code: '686', uz: 'Сенегал', oz: 'Senegal', ru: 'Сенегал', en: 'Senegal', slug: 'sn', slug1: 'sen' },
                {code: '688', uz: 'Сербия', oz: 'Serbiya', ru: 'Сербия', en: 'Serbia', slug: 'rs', slug1: 'srb' },
                {code: '690', uz: 'Сейшел', oz: 'Seyshel', ru: 'Сейшелы', en: 'Seychelles', slug: 'sc', slug1: 'syc' },
                {code: '694', uz: 'Сьерра-Леоне', oz: 'Sьerra-Leone', ru: 'Сьерра-Леоне', en: 'Sierra Leone', slug: 'sl', slug1: 'sle' },
                {code: '702', uz: 'Сингапур', oz: 'Singapur', ru: 'Сингапур', en: 'Singapore', slug: 'sg', slug1: 'sgp' },
                {code: '663', uz: 'Сен-Мартен (Фр.)', oz: 'Sen-Marten (Fr.)', ru: 'Сен-Мартен (Фр.)', en: 'Sint Maarten (Dutch part)', slug: 'sx', slug1: 'sxm' },
                {code: '703', uz: 'Словакия', oz: 'Slovakiya', ru: 'Словакия', en: 'Slovakia', slug: 'sk', slug1: 'svk' },
                {code: '705', uz: 'Словения', oz: 'Sloveniya', ru: 'Словения', en: 'Slovenia', slug: 'si', slug1: 'svn' },
                {code: '090', uz: 'Соломонороллари', oz: 'Solomonorollari', ru: 'Соломоновы Острова', en: 'Solomon Islands', slug: 'sb', slug1: 'slb' },
                {code: '706', uz: 'Сомали', oz: 'Somali', ru: 'Сомали', en: 'Somalia', slug: 'so', slug1: 'som' },
                {code: '710', uz: 'Жанубий Африка', oz: 'Janubiy Аfrika', ru: 'Южная Африка', en: 'South Africa', slug: 'za', slug1: 'zaf' },
                {code: '239', uz: 'Жанубий Жоржия ва Жанубий Сандвич Ороллари', oz: 'Janubiy Jorjiya va Janubiy Sandvich Orollari', ru: 'Южная Джорджия и Южные Сандвичевы Острова', en: 'South Georgia and the South Sandwich Islands', slug: 'gs', slug1: 'sgs' },
                {code: '728', uz: 'Жанубий Судан', oz: 'Janubiy Sudan', ru: 'Южный Судан', en: 'South Sudan', slug: 'ss', slug1: 'ssd' },
                {code: '724', uz: 'Испания', oz: 'Ispaniya', ru: 'Испания', en: 'Spain', slug: 'es', slug1: 'esp' },
                {code: '144', uz: 'Шри-Ланка', oz: 'Shri-Lanka', ru: 'Шри-Ланка', en: 'Sri Lanka', slug: 'lk', slug1: 'lka' },
                {code: '736', uz: 'Судан', oz: 'Sudan', ru: 'Судан', en: 'Sudan', slug: 'sd', slug1: 'sdn' },
                {code: '740', uz: 'Суринам', oz: 'Surinam', ru: 'Суринам', en: 'Suriname', slug: 'sr', slug1: 'sur' },
                {code: '744', uz: 'Шпицберген ва Ян-Майен', oz: 'Shpitsbergen va Yan-Mayen', ru: 'Шпицберген и Ян-Майен', en: 'Svalbard and Jan Mayen', slug: 'sj', slug1: 'sjm' },
                {code: '748', uz: 'Свазиленд', oz: 'Svazilend', ru: 'Свазиленд', en: 'Eswatini', slug: 'sz', slug1: 'swz' },
                {code: '752', uz: 'Швеция', oz: 'Shvetsiya', ru: 'Швеция', en: 'Sweden', slug: 'se', slug1: 'swe' },
                {code: '756', uz: 'Швейцария', oz: 'Shveytsariya', ru: 'Швейцария', en: 'Switzerland', slug: 'ch', slug1: 'che' },
                {code: '760', uz: 'Сурия', oz: 'Suriya', ru: 'Сирия', en: 'Syrian Arab Republic', slug: 'sy', slug1: 'syr' },
                {code: '158', uz: 'Тайвань', oz: 'Tayvanь', ru: 'Тайвань', en: 'Taiwan, Province of China', slug: 'tw', slug1: 'twn' },
                {code: '762', uz: 'Тожикистон', oz: 'Tojikiston', ru: 'Таджикистан', en: 'Tajikistan', slug: 'tj', slug1: 'tjk' },
                {code: '834', uz: 'Танзания', oz: 'Tanzaniya', ru: 'Танзания', en: 'Tanzania, United Republic of', slug: 'tz', slug1: 'tza' },
                {code: '764', uz: 'Таиланд', oz: 'Tailand', ru: 'Таиланд', en: 'Thailand', slug: 'th', slug1: 'tha' },
                {code: '626', uz: 'Тимор-Лесте', oz: 'Timor-Leste', ru: 'Тимор-Лесте', en: 'Timor-Leste', slug: 'tl', slug1: 'tls' },
                {code: '768', uz: 'Того', oz: 'Togo', ru: 'Того', en: 'Togo', slug: 'tg', slug1: 'tgo' },
                {code: '772', uz: 'Токелау', oz: 'Tokelau', ru: 'Токелау', en: 'Tokelau', slug: 'tk', slug1: 'tkl' },
                {code: '776', uz: 'Тонга', oz: 'Tonga', ru: 'Тонга', en: 'Tonga', slug: 'to', slug1: 'ton' },
                {code: '780', uz: 'Тринидад ва Тобаго', oz: 'Trinidad va Tobago', ru: 'Тринидад и Тобаго', en: 'Trinidad and Tobago', slug: 'tt', slug1: 'tto' },
                {code: '788', uz: 'Тунис', oz: 'Tunis', ru: 'Тунис', en: 'Tunisia', slug: 'tn', slug1: 'tun' },
                {code: '792', uz: 'Туркия', oz: 'Turkiya', ru: 'Турция', en: 'Turkey', slug: 'tr', slug1: 'tur' },
                {code: '795', uz: 'Туркманистон', oz: 'Turkmaniston', ru: 'Туркмения', en: 'Turkmenistan', slug: 'tm', slug1: 'tkm' },
                {code: '796', uz: 'Теркс ва Кайкос', oz: 'Terks va Kaykos', ru: 'Теркс и Кайкос', en: 'Turks and Caicos Islands', slug: 'tc', slug1: 'tca' },
                {code: '798', uz: 'Тувалу', oz: 'Tuvalu', ru: 'Тувалу', en: 'Tuvalu', slug: 'tv', slug1: 'tuv' },
                {code: '800', uz: 'Уганда', oz: 'Uganda', ru: 'Уганда', en: 'Uganda', slug: 'ug', slug1: 'uga' },
                {code: '804', uz: 'Украина', oz: 'Ukraina', ru: 'Украина', en: 'Ukraine', slug: 'ua', slug1: 'ukr' },
                {code: '784', uz: 'Бирл. Араб Амирликлари', oz: 'Birl. Аrab Аmirliklari', ru: 'Объед. Арабские Эмираты', en: 'United Arab Emirates', slug: 'ae', slug1: 'are' },
                {code: '826', uz: 'Бирлашган Қироллик', oz: 'Birlashgan Qirollik', ru: 'Соединенное Королевство', en: 'United Kingdom of Great Britain and Northern Ireland', slug: 'gb', slug1: 'gbr' },
                {code: '840', uz: 'АҚШ', oz: 'АQSh', ru: 'США', en: 'United States of America', slug: 'us', slug1: 'usa' },
                {code: '581', uz: 'Тинч Океани Кичик Ороллари (АҚШ)', oz: 'Tinch Okeani Kichik Orollari (АQSh)', ru: 'Малые Тихоокеанские Острова (США)', en: 'United States Minor Outlying Islands', slug: 'um', slug1: 'umi' },
                {code: '858', uz: 'Уругвай', oz: 'Urugvay', ru: 'Уругвай', en: 'Uruguay', slug: 'uy', slug1: 'ury' },
                {code: '860', uz: 'Ўзбекистон', oz: 'Oʼzbekiston', ru: 'Узбекистан', en: 'Uzbekistan', slug: 'uz', slug1: 'uzb' },
                {code: '548', uz: 'Вануату', oz: 'Vanuatu', ru: 'Вануату', en: 'Vanuatu', slug: 'vu', slug1: 'vut' },
                {code: '862', uz: 'Венесуэла', oz: 'Venesuela', ru: 'Венесуэла', en: 'Venezuela (Bolivarian Republic of)', slug: 've', slug1: 'ven' },
                {code: '704', uz: 'Вьетнам', oz: 'Vьetnam', ru: 'Вьетнам', en: 'Viet Nam', slug: 'vn', slug1: 'vnm' },
                {code: '850', uz: 'Виргин Ороллари (АҚШ)', oz: 'Virgin Orollari (АQSh)', ru: 'Виргин. Острова (США)', en: 'Virgin Islands (U.S.)', slug: 'vi', slug1: 'vir' },
                {code: '876', uz: 'Уоллис ва Футуна', oz: 'Uollis va Futuna', ru: 'Уоллис и Футуна', en: 'Wallis and Futuna', slug: 'wf', slug1: 'wlf' },
                {code: '732', uz: 'Ғарбий Сахрои Кабир', oz: 'Gʼarbiy Saxroi Kabir', ru: 'Западная Сахара', en: 'Western Sahara', slug: 'eh', slug1: 'esh' },
                {code: '887', uz: 'Яман', oz: 'Yaman', ru: 'Йемен', en: 'Yemen', slug: 'ye', slug1: 'yem' },
                {code: '894', uz: 'Замбия', oz: 'Zambiya', ru: 'Замбия', en: 'Zambia', slug: 'zm', slug1: 'zmb' },
                {code: '716', uz: 'Зимбабве', oz: 'Zimbabve', ru: 'Зимбабве', en: 'Zimbabwe', slug: 'zw', slug1: 'zwe' },

            ]
        }
    },
    created() {
        this.run()
    },
    watch: {
        async regime(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        },
        async year(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        },
        async month(val, oldVal) {
            if (val !== oldVal) {
                await this.run()
            }
        }
    },
    methods: {
        async run() {
            await axios.get('/api/v1/stat', {
                params: {
                    name: 'davlatimex_n',
                    rejim: this.regime,
                    month: this.month ? this.month : 0,
                    year: this.year ? this.year : 0
                }
            }).then(res => {
                this.items = res.data.data
            })
        },
        moneyFormat(price) {
            if ((price / 1000000000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000000000).toFixed(1) + '</span> ' + this.$t('трл') + '. $';
            else if ((price / 1000000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000000).toFixed(1) + '</span> ' + this.$t('млрд') + '. $';
            if ((price / 1000).toFixed(1) !== '0.0')
                return '<span>' + (price / 1000).toFixed(1) + '</span> ' + this.$t('млн') + '. $'
        }
    }
}
</script>

<style scoped lang="scss">
.v-picker.v-card.v-picker--date {
    margin: 0;
}

.slide_products {
    margin-top: 20px;

    .statfilterRow {
        display: flex;
        justify-content: end;
        margin-bottom: 20px;
        margin-right: 15px;

        .regimeButtons {
            margin-right: 30px;
            font-weight: bold;
        }

        .date_rangers {
            display: flex;
            align-items: center;

            .begin_date {
                margin-right: 5px;
                box-shadow: 0 3px 8px 2px #C9D9E8;
                border-radius: 6px;
                padding: 5px 10px;
                background-color: #F1F5F9;
                color: #39ae69;

                i {
                    border-left: 1px dashed #ccc;
                    margin-left: 5px;
                    padding-left: 7px;
                }
            }

            .end_date {
                box-shadow: 0 3px 8px 2px #C9D9E8;
                border-radius: 6px;
                padding: 2px 10px;
                background-color: #F1F5F9;
                color: #39ae69;
                font-size: 17px;
                margin-left: 10px;

                i {
                    border-left: 1px dashed #ccc;
                    margin-left: 5px;
                    padding-left: 7px;
                }
            }
        }
    }

}

.custom-arrow {
    .v-icon {
        right: 25px;
        font-size: 70px !important;
    }

    &.left-arrow i {
        left: -25px;
        right: initial;
    }

}

.slide_item {

    .slide_item_wrapper {
        margin: 10px;
        padding: 5px;
        border: 1px solid #1372aa4a;
        border-radius: 5px;

        .slide_item_sub_wrapper {
            box-shadow: 0 0 11px 2px #d8d8d8;
            padding: 10px 0;
            border-radius: 5px;

            .country_header {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: -15px;

                span:nth-of-type(2) {
                    font-size: 24px;
                    font-weight: 600;
                    color: #1372aa;
                }
            }
        }

        .slide_item_title {
            font-size: 20px;
            text-align: center;
            margin: 15px auto;
            font-weight: 600;
        }

        h4 {
            text-align: center;
            color: #39ae69;
            margin: 10px auto;
            padding-top: 10px;
        }

        .slide_item_total_price {
            text-align: center;
            font-size: 20px;
            padding: 25px 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: baseline;
            color: #777;

            span {
                font-size: 25px;
                font-weight: 600;
                margin-right: 6px;
                color: #000;
                letter-spacing: 1px;
            }
        }

        img {
            max-width: 50px;
            margin: 0 auto;
        }

        .slide_item_total_difference {
            display: flex;
            padding: 0 10px;
            position: relative;
            justify-content: space-around;

            span {
                text-align: center;

                &:nth-of-type(1) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 20px;
                            line-height: 30px;
                        }

                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-green);
                            margin: 0 auto;
                        }
                    }
                }

                &:nth-of-type(2) {
                    > p {
                        &:nth-of-type(1) {
                            font-size: 20px;
                            line-height: 30px;
                        }

                        &:nth-of-type(2) {
                            font-size: 10px;
                            color: var(--bs-cyan);
                            margin: 0 auto;
                        }
                    }
                }
            }
        }

        .slide_item_cats {
            .slide_item_cat_tem {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 20px;

                span {
                    &:nth-of-type(1) {
                        width: 70%;
                    }

                    &:nth-of-type(2) {
                        width: 30%;
                        display: block;
                        text-align: center;
                        line-height: 10px;
                        padding-top: 5px;

                        p {
                            &:nth-of-type(1) {
                                font-weight: bold;
                                font-size: 15px;
                            }

                            &:nth-of-type(2) {
                                font-size: 9px;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>
<style lang="scss">
.slick-arrow.slick-prev:before, .slick-arrow.slick-next:before {
    display: none;
}

.slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    bottom: -45px;

    li {
        position: relative;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        display: flex;
        height: min-content;
        width: max-content;
        justify-content: center;
        align-items: center;

        button {
            width: 30px;

            &:before {
                content: "";
                height: 4px;
                background-color: #39ae69;
                border-radius: 10px;
            }
        }

        &.slick-active button {
            width: 40px !important;

            &:before {
                width: 30px !important;
            }
        }
    }
}
.slide_item_total_price span {
    font-size: 25px;
    font-weight: 600;
    margin-right: 6px;
    color: #000;
    letter-spacing: 1px;
}

</style>
