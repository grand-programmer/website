$("body").on("click", ".hududiy_boshqarmalar a", function () {

    if ($('.hududiy.section').css("display") == 'none') {
        pageloaded = 0;

        fullpage_api.moveTo('0');
        $('.hududiy.section').css("display", "table !important");
        $('.hududiy.section').removeClass('skip');
//    $('#sharedMap').animate({top:"0"},1500);


    } else {
        pageloaded = 1;
        //  $('#sharedMap').animate({top:"-100%"},1500);
        $('.hududiy').css("display", "none !important");
        $('.hududiy').addClass('skip');
        /*$('.hududiy').removeClass(['fp-completely', 'collapse','show']);*/
        $(this).attr('aria-expanded', false);
        /* fullpage.moveTo('1');*/
    }
});
$("body").on("click", ".footer_links_arrow", function () {
    if ($(this).closest(".footer_links").hasClass('active')) {
        $(this).closest(".footer_links").removeClass('active');
    } else {
        $(this).closest(".footer_links").addClass('active');
    }
});
var $mapCard = $('#sharedMap').find('.card-body');
$mapCard.hide().first().show();
var $mapSection = $('#sharedMap').find('path');

$("body").on('click', "#sharedMap path", function () {
    $('#sharedMap').find('path').removeClass('active');
    $mapSection.filter('.active').removeClass('active');
    $(this).addClass('active');
    $dataId = $(this).attr('data-id');
    $('#sharedMapInfo .card-body').css('display', 'none');
    $activeCardBody = $('.card-body').filter('[data-id="' + $dataId + '"]').show();
    $mapCard.hide();
    $activeCardBody.fadeIn();
    if ($activeCardBody.length == 2) {
        $activeCardBody.first().addClass('d-none');
    }
});

$description = $(".map-description");

$mapSection.hover(function () {
    $(this).attr("class", "enabled_heyo");
    $description.addClass('active');
    $description.html($(this).attr('data-title'));
}, function () {
    $description.removeClass('active');
});

