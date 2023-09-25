$("body").on("click", ".hududiy_boshqarmalar", function (e) {
    e.preventDefault()

      // setTimeout($('.hududiy').toggleClass('show'),2000);
    if ($('.hududiy.section').css("display") === 'none') {

        pageloaded = 0;
        if (typeof fullpage_api !== 'undefined' && !$(".v-application--wrap > div").hasClass("one-page")) {


            fullpage_api.moveTo('0');
        }
        $('.hududiy.section.fp-section').removeClass('skip');
        $('.hududiy.section').css("display", "table !important");

        window.scrollTo(0, 0);


        /*else {

            $('.hududiy.section').dropdown('hide');

        }*/
//    $('#sharedMap').animate({top:"0"},1500);




    } else {
       // $('.hududiy.section').dropdown('hide');

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
    $(".boshqarma_rasmi").css("background-image", "url(/images/hududiy/" + $dataId + ".jpg)");
    $mapCard.hide();
    $activeCardBody.fadeIn();
    if ($activeCardBody.length == 2) {
        $activeCardBody.first().addClass('d-none');
    }
});
/*
$(document).mouseup(function (e) {
    var container = $(".hududiy.section.collapse");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("show", "collapse");
    }

    /!*    var container = new Array();
        container.push($('#item_1'));
        container.push($('#item_2'));

        $.each(container, function(key, value) {
            if (!$(value).is(e.target) // if the target of the click isn't the container...
                && $(value).has(e.target).length === 0) // ... nor a descendant of the container
            {
                $(value).hide();
            }
        });*!/
});
*/







