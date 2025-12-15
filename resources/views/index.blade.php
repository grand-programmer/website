<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <meta name="description" content="O'zbekiston Respublikasi Bojxona qo'mitasi rasmiy veb-sayti. Bojxona xizmatlari, ariza topshirish, yangiliklar, hujjatlar va onlayn xizmatlar">
    <meta name="keywords" content="bojxona, customs, O'zbekiston bojxonasi, bojxona qo'mitasi, bojxona to'lovlari, импорт, экспорт, to'lovlar, ariza">
    <meta name="author" content="O'zbekiston Respublikasi Bojxona qo'mitasi">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="canonical" href="{{ url()->current() }}">
    <link rel="shortcut icon" href="/favicon.ico">

    <!-- Open Graph / Facebook / Telegram -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="Bojxona qo'mitasi rasmiy veb sayti - Customs.uz">
    <meta property="og:description" content="O'zbekiston Respublikasi Bojxona qo'mitasi rasmiy veb-sayti. Bojxona xizmatlari, ariza topshirish, yangiliklar va onlayn xizmatlar.">
    <meta property="og:image" content="{{ asset('/img/og-image.jpg') }}">
    <meta property="og:locale" content="uz_UZ">
    <meta property="og:locale:alternate" content="ru_RU">
    <meta property="og:locale:alternate" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:title" content="Bojxona qo'mitasi rasmiy veb sayti">
    <meta name="twitter:description" content="O'zbekiston Respublikasi Bojxona qo'mitasi rasmiy veb-sayti. Bojxona xizmatlari va onlayn xizmatlar.">
    <meta name="twitter:image" content="{{ asset('/img/og-image.jpg') }}">

    <!-- Multilanguage hreflang -->
    @php
        $currentPath = request()->getPathInfo();
        $pathWithoutLocale = preg_replace('#^/(oz|uz|ru|en)(/|$)#', '$2', $currentPath);
        $cleanPath = $pathWithoutLocale ?: '/';
    @endphp
    <link rel="alternate" hreflang="uz-Latn" href="https://new.customs.uz/oz{{ $cleanPath }}" />
    <link rel="alternate" hreflang="uz-Cyrl" href="https://new.customs.uz/uz{{ $cleanPath }}" />
    <link rel="alternate" hreflang="ru" href="https://new.customs.uz/ru{{ $cleanPath }}" />
    <link rel="alternate" hreflang="en" href="https://new.customs.uz/en{{ $cleanPath }}" />
    <link rel="alternate" hreflang="x-default" href="https://new.customs.uz/oz{{ $cleanPath }}" />

    <!-- Search Engine Verification -->
    <!-- <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE"> -->
    <!-- <meta name="yandex-verification" content="YANDEX_VERIFICATION_CODE"> -->

    <!-- Font -->
    <link href="{{asset('css/font-awesome.min.css') }}" rel="stylesheet">
    <title>Bojxona qo'mitasi rasmiy veb sayti</title>
    <!-- Bootstrap -->
    <link href="{{asset('/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{asset('/css/bootstrap-theme.min.css') }}" rel="stylesheet">
    <link href="{{asset('/css/bootstrap5.1.min.css')}}" rel="stylesheet" crossorigin="anonymous">
    <script src="{{('/js/bootstrap5.1.bundle.min.js')}}" crossorigin="anonymous"></script>
    <link href="/vendors/image-dropdown/dd.css" rel="stylesheet">
    <!-- Extra plugin css -->
    {{--<link href="{{asset('/vendors/bootstrap-selector/css/bootstrap-select.min.css')}}" rel="stylesheet">--}}
    <link href="{{asset('/vendors/camera-slider/camera.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet">
    <link href="{{asset('/vendors/animate/animate.min.css')}}" rel="stylesheet">
    <link href="{{secure_asset('/vendors/owl-carousel/css/owl.carousel.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet">
    <link href="{{secure_asset('/css/style.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet">
    <link href="{{secure_asset('/css/fullpage.css')}}" rel="stylesheet">
    <link href="{{secure_asset('/css/all.css')}}" rel="stylesheet">
    <link href="{{asset('/css/mix/one.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet" type="text/css">
    <link href="{{asset('/css/mix/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('/css/slick.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet">
    <link href="{{asset('/css/slick-theme.css')}}" rel="stylesheet">
    <link href="{{asset('/css/responsive.css?version=' . (Date::now()->getTimestamp()) )}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.carousel.css')}}">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.theme.default.css')}}">
    <link rel="stylesheet" href="//chat.customs.uz/widget/style.css">
<!--    <script src="public/js/anychart/anychart-base.min.js"></script>-->
<!--    <link crossorigin="anonymous" rel="stylesheet" id="gillion-fonts-css"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic%7CMontserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=latin"
          type="text/css" media="all">-->

</head>
<body>

<div id="app">

    <!--==========Logo area==========-->
    <v-app app>
    <!--==========End Logo area==========-->
        <router-view></router-view>
    </v-app>
</div>

<script>
    var pageloaded = 0;

/*    function loadScriptInBody(script) {
        let Script = document.createElement('script')
        Script.setAttribute('src', script)
        Script.async = true
        document.body.appendChild(Script)
        return Script;
    }*/

</script>
<script src="/js/jquery.js"></script>
{{--<script src="{{asset('js/11vue-fullpage.min.js')}}"></script>--}}
<script src="/js/mix/manifest.js?version=<?=(Date::now()->getTimestamp()) ?>"></script>
<script src="/js/mix/vendor.js?version=<?=(Date::now()->getTimestamp()) ?>"></script>
<script src="/js/mix/app.min.js?version=<?=(Date::now()->getTimestamp()) ?>"></script>
<script src="/vendors/bootstrap-selector/js/bootstrap-select.min.js"></script>
<script src="/vendors/image-dropdown/jquery.dd.min.js"></script>
<script src="/vendors/camera-slider/jquery.easing.1.3.js"></script>
<script src="/vendors/camera-slider/camera.min.js"></script>
<script src="/vendors/isotop/imagesloaded.pkgd.min.js"></script>
<script src="/vendors/isotop/isotope.pkgd.min.js"></script>
<script src="/js/slick.min.js"></script>

<script src="/js/script.js"></script>



<!-- START WWW.UZ TOP-RATING -->
<script>
    top_js = "1.0";
    top_r = "id=46694&r=" + encodeURIComponent(document.referrer) + "&pg=" + encodeURIComponent(window.location.href);
    document.cookie = "smart_top=1; path=/";
    top_r += "&c=" + (document.cookie ? "Y" : "N");
</script>

<script>
    top_js = "1.1";
    top_r += "&j=" + (navigator.javaEnabled() ? "Y" : "N");
</script>

<script>
    top_js = "1.2";
    top_r += "&wh=" + screen.width + 'x' + screen.height + "&px=" +
        ((navigator.appName.substring(0, 3) === "Mic") ? screen.colorDepth : screen.pixelDepth);
</script>

<script>
    top_js = "1.3";
</script>

<script>
    top_rat = "&col=340F6E&t=ffffff&p=BD6F6F";
    top_r += "&js=" + top_js;
    document.write('<img src="https://cnt0.www.uz/counter/collect?' + top_r + top_rat + '" width="0" height="0" alt="">');
</script>

<noscript>
    <img src="https://cnt0.www.uz/counter/collect?id=46694&pg=http%3A//uzinfocom.uz&col=340F6E&t=ffffff&p=BD6F6F" width="0" height="0" alt="">
</noscript>
<!-- FINISH WWW.UZ TOP-RATING -->


<!-- Yandex.Metrika counter -->
<script>
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(90773745, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(()=>{
            if(typeof document.getElementsByClassName('mycounter1')[0] !=='undefined')
                document.getElementsByClassName('mycounter1')[0].innerHTML =document.getElementsByClassName('mycounter1')[0].innerHTML + '<div>' +
                    '<img src="https://mc.yandex.ru/watch/90773745" style="position:absolute; left:-9999px;" alt="" ></div>'
        },500)

    })
</script>

<noscript><div><img src="https://mc.yandex.ru/watch/90773745" style="position:absolute; left:-9999px;" alt="" ></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- webim button generation date: 2023-04-19 version: 10.5.67 -->
{{--<a class="webim_button" href="#" rel="webim">
    <img src="https://beltelekomuz.webim2.ru/button.php" border="0"/>
</a>
<script type="text/javascript">
    webim = {
        accountName: "beltelekomuz",
        domain: "beltelekomuz.webim2.ru",
        location: localStorage.language
    };

    (function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://beltelekomuz.webim2.ru/js/button.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    })();
</script>--}}
<!-- /webim button -->

<!---- chatbot --->
<chat-widget></chat-widget>
<script src="//chat.customs.uz/widget/chat-widget.iife.js"></script>


<!---chatbot -->

<!--<script src="//code.jivosite.com/widget/4yZcWqNleE" async></script>-->

<!-- Structured Data (JSON-LD) for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "O'zbekiston Respublikasi Bojxona qo'mitasi",
  "alternateName": {
    "@language": "ru",
    "@value": "Таможенный комитет Республики Узбекистан"
  },
  "url": "https://new.customs.uz",
  "logo": "https://new.customs.uz/img/logo.png",
  "image": "https://new.customs.uz/img/og-image.jpg",
  "description": "O'zbekiston Respublikasi Bojxona qo'mitasi rasmiy veb-sayti. Bojxona xizmatlari, ariza topshirish, yangiliklar, hujjatlar va onlayn xizmatlar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Islom Karimov ko'chasi",
    "addressLocality": "Toshkent",
    "addressRegion": "Toshkent shahri",
    "postalCode": "100003",
    "addressCountry": "UZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+998-55-502-76-00",
    "contactType": "customer service",
    "areaServed": "UZ",
    "availableLanguage": ["uz", "ru", "en"]
  },
  "sameAs": [
    "https://t.me/customschannel",
    "https://www.facebook.com/UZDBQ",
    "https://www.instagram.com/bojxona.official"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bojxona qo'mitasi rasmiy veb sayti",
  "url": "https://new.customs.uz",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://new.customs.uz/oz/page/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["uz", "ru", "en"],
  "publisher": {
    "@type": "GovernmentOrganization",
    "name": "O'zbekiston Respublikasi Bojxona qo'mitasi"
  }
}
</script>

<script src="https://code.responsivevoice.org/responsivevoice.js?key=vNL4fpv9"></script>
</body>
</html>
