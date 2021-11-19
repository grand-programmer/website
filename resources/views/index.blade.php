<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bojxona rasmiy veb sayti</title>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

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
    <link href="{{secure_asset('/vendors/owl-carousel/css/owl.carousel.css')}}" rel="stylesheet">
    <link href="{{secure_asset('/css/style.css')}}" rel="stylesheet">
    <link href="{{secure_asset('/css/fullpage.css')}}" rel="stylesheet">
    <link href="{{secure_asset('/css/all.css')}}" rel="stylesheet">
    <link href="{{asset('/css/one.css')}}" rel="stylesheet">
    <link href="{{asset('/css/slick.css')}}" rel="stylesheet">
    <link href="{{asset('/css/slick-theme.css')}}" rel="stylesheet">
    <link href="{{asset('/css/responsive.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.carousel.css')}}">
    <link rel="stylesheet" href="{{asset('css/owl-carousel/owl.theme.default.css')}}">
    <link crossorigin="anonymous" rel="stylesheet" id="gillion-fonts-css"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic%7CMontserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&amp;subset=latin"
          type="text/css" media="all">

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
<script src="{{asset('js/vue-fullpage.min.js')}}"></script>
<script src="/js/app.js"></script>
<script src="/vendors/bootstrap-selector/js/bootstrap-select.min.js"></script>
<script src="/vendors/image-dropdown/jquery.dd.min.js"></script>
<script src="/vendors/camera-slider/jquery.easing.1.3.js"></script>
<script src="/vendors/camera-slider/camera.min.js"></script>
<script src="/vendors/isotop/imagesloaded.pkgd.min.js"></script>
<script src="/vendors/isotop/isotope.pkgd.min.js"></script>
<script src="/js/slick.min.js"></script>
<script src="/js/script.js"></script>


</body>
</html>
