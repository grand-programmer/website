<template>
    <div class="logo_area">
<div class="container-fluid">
    <router-link to="/" class="logo_link">
        <div class="pull-left logo_neno" >
            <img src="/img/gtk_image.png" alt="">
            <p>Ўзбекистон Республикаси Давлат божхона қўмитаси</p>
        </div></router-link >
    <!--==========Menu area==========-->
    <div class="main_menu_area">
        <nav class="navbar navbar-default">
            <div class="menu_container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <top-v-menu></top-v-menu>
                    <ul class="nav navbar-nav">
                        <li class="hududiy_boshqarmalar"><i class="fas fa-map-marker-alt"></i>

                            <a href=".hududiy" class="dropdown-toggle" data-toggle="collapse" role="button"
                               aria-expanded="false">Ҳудудий бошқармалар</a>
                            <!--                                <ul class="dropdown-menu">
                                                                <li><a href="contact.html">Contact</a></li>
                                                                <li><a href="contact-2.html">Contact - 02</a></li>
                                                            </ul>-->
                        </li>
                    </ul>
                    <ul class="search_menu">
                        <li class="dropdown search_bar">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false"><span class="menu_slider"></span><i
                                class="fa fa-search"></i></a>
                            <ul class="dropdown-menu">
                                <li><input type="text" placeholder="Search for..."></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
    <!--==========End Menu area==========-->
    <div class="pull-right contact_details_area">
        <div class="container">
            <div class="pull-right header_language">
                <ul class="header_social">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
                <div class="selector">
                    <select name="countries" id="countries" style="width:300px;">
                        <option value='uz' data-image="/img/uz-flag.jpg" data-imagecss="flag uz"
                                data-title="Uzbek">Uzbek
                        </option>
                        <option value='en' data-image="/img/aus-flag.jpg" data-imagecss="flag yt"
                                data-title="English">English
                        </option>
                        <option value='ru' data-image="/img/ru_flag.png" data-imagecss="flag yt"
                                data-title="Русский">Русский
                        </option>
                    </select>
                </div>

            </div>
        </div>
    </div>
</div>
        <component is="script" >
            $(document).ready(function () {
            $("select").msDropdown({roundedBorder: false});
            });
        </component>
</div>

</template>
<script>
export default{
    name: "Header"

}

</script>
