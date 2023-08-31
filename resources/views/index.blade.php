<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" >
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Font -->
    <link href="{{asset('css/font-awesome.min.css') }}" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="{{asset('/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{asset('/css/bootstrap-theme.min.css') }}" rel="stylesheet">
    <link href="{{asset('/css/bootstrap5.1.min.css')}}" rel="stylesheet" crossorigin="anonymous">
    <script src="{{('/js/bootstrap5.1.bundle.min.js')}}" crossorigin="anonymous"></script>
    <link href="/vendors/image-dropdown/dd.css" rel="stylesheet">
    <!-- Extra plugin css -->
    {{--<link href="{{asset('/vendors/bootstrap-selector/css/bootstrap-select.min.css')}}" rel="stylesheet">--}}
    <link href="{{asset('/vendors/camera-slider/camera.css')}}" rel="stylesheet">
    <link href="{{asset('/vendors/animate/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('/vendors/owl-carousel/css/owl.carousel.css')}}" rel="stylesheet">
    <link href="{{asset('/css/style.css')}}" rel="stylesheet">
    <link href="{{asset('/css/fullpage.css')}}" rel="stylesheet">
    <link href="{{asset('/css/all.css')}}" rel="stylesheet">
    <link href="{{asset('/css/mix/one.css')}}" rel="stylesheet" type="text/css" charset="utf-8">
    <link href="{{asset('/css/mix/app.css')}}" rel="stylesheet" type="text/css" charset="utf-8">
    <link href="{{asset('/css/slick.css')}}" rel="stylesheet">
    <link href="{{asset('/css/slick-theme.css')}}" rel="stylesheet">
    <link href="{{asset('/css/responsive.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.carousel.css')}}">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.theme.default.css')}}">
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

    function loadScriptInBody(script) {
        let Script = document.createElement('script')
        Script.setAttribute('src', script)
        Script.async = true
        document.body.appendChild(Script)
        return Script;
    }

</script>
<script src="/js/jquery.js"></script>
{{--<script src="{{asset('js/11vue-fullpage.min.js')}}"></script>--}}
<script src="/js/mix/app.js"></script>
<script src="/vendors/bootstrap-selector/js/bootstrap-select.min.js"></script>
<script src="/vendors/image-dropdown/jquery.dd.min.js"></script>
<script src="/vendors/camera-slider/jquery.easing.1.3.js"></script>
<script src="/vendors/camera-slider/camera.min.js"></script>
<script src="/vendors/isotop/imagesloaded.pkgd.min.js"></script>
<script src="/vendors/isotop/isotope.pkgd.min.js"></script>
<script src="/js/slick.min.js"></script>
<script src="/js/script.js"></script>


<!-- START WWW.UZ TOP-RATING -->
<SCRIPT language="javascript" type="text/javascript">
    <!--
    document.addEventListener("DOMContentLoaded", () => {
        top_js = "1.0";
        top_r = "id=46694&r=" + escape(document.referrer) + "&pg=" + escape(window.location.href);
        document.cookie = "smart_top=1; path=/";
        top_r += "&c=" + (document.cookie ? "Y" : "N")
    })
    //-->
</SCRIPT>
<SCRIPT language="javascript1.1" type="text/javascript">
    <!--
    document.addEventListener("DOMContentLoaded", () => {
        top_js = "1.1";
        top_r += "&j=" + (navigator.javaEnabled() ? "Y" : "N")
    })//-->
</SCRIPT>
<SCRIPT language="javascript1.2" type="text/javascript">
    <!--
    document.addEventListener("DOMContentLoaded", () => {
        top_js = "1.2";
        top_r += "&wh=" + screen.width + 'x' + screen.height + "&px=" +
            (((navigator.appName.substring(0, 3) == "Mic")) ? screen.colorDepth : screen.pixelDepth)
    })
    //-->
</SCRIPT>
<SCRIPT language="javascript1.3" type="text/javascript">
    <!--
    top_js="1.3";
    //-->
</SCRIPT>
<SCRIPT language="JavaScript" type="text/javascript">
    <!--
    document.addEventListener("DOMContentLoaded", () => {

        // console.log(document.getElementsByClassName('mycounter1')[0])
        top_rat="&col=133E43&t=ffffff&p=86C439";top_r+="&js="+top_js+"";

        if(typeof document.getElementsByClassName('mycounter1')[0] !=='undefined')
        document.getElementsByClassName('mycounter1')[0].innerHTML ='<a href="http://www.uz/ru/res/visitor/index?id=46694" target=_top>' +
            '<img src="http://cnt0.www.uz/counter/collect?'+top_r+top_rat+'" width=88 height=31 border=0 alt="Топ рейтинг www.uz"/></a>'
    });
    //-->


</SCRIPT>
<NOSCRIPT >
    <A href="http://www.uz/ru/res/visitor/index?id=46694" target="_top" class="mycounter" >
        <IMG height=31 src="http://cnt0.www.uz/counter/collect?id=46694&pg=http%3A//uzinfocom.uz&&col=133E43&amp;t=ffffff&amp;p=86C439" width=88 border=0 alt="Топ рейтинг www.uz"/></A>
</NOSCRIPT>
<!-- FINISH WWW.UZ TOP-RATING -->


<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
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
                document.getElementsByClassName('mycounter1')[0].innerHTML =document.getElementsByClassName('mycounter1')[0].innerHTML + '<div><img src="https://mc.yandex.ru/watch/90773745" style="position:absolute; left:-9999px;" alt="" /></div>'
        },500)

    })
</script>

<noscript><div><img src="https://mc.yandex.ru/watch/90773745" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!-- webim button generation date: 2023-04-19 version: 10.5.67 -->
<a class="webim_button" href="#" rel="webim">
    <img src="https://beltelekomuz.webim.ru/button.php" border="0"/>
</a>
<script type="text/javascript">
    webim = {
        accountName: "beltelekomuz",
        domain: "beltelekomuz.webim.ru",
        location: "default"
    };

    (function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://beltelekomuz.webim.ru/js/button.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    })();
</script>
<!-- /webim button -->

<!--<script src="//code.jivosite.com/widget/4yZcWqNleE" async></script>-->
<script src="https://code.responsivevoice.org/responsivevoice.js?key=vNL4fpv9"></script>
</body>
</html>
