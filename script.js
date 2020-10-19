jQuery(document).ready(function() {
    var $button = $(".button");
    var $exit = $(".btn_esc");
    var $go = $("#btn");
    var $wb1 = $(".btn-brdr50_1");
    var $bb = $(".btn-brdr50_black");
    var $wb2 = $(".btn-brdr50_2");

    $button.click(function(e) {

        $(".form").addClass("active");

    })

    $exit.click(function(e) {

        $(".form").removeClass("active");

    })

    $go.click(function(e) {

        $(".form").removeClass("active");

    })

    $('.bg-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.italian__slider'
    });
    $('.italian__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots slider__dots',
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.bg-img',
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });


    var $left = $("#left");
    var $right = $("#right");
    var widthElement = 0;
    var x = 0;

    $left.click(function() {
        $('.slider-wrap').animate({
            marginLeft: -widthElement
        }, 700, function() {
            $(this).css('margin-left', '0');
            var $first = $('.slide').filter(':first');
            $('.slider-wrap').append($first);
            var $slide2 = $('.slide').eq(1);
            $slide2.children('.block').append($('.black-box'));
            winSize();
        })

    })


    $right.click(function() {
        $('.slider-wrap').animate({
            marginLeft: widthElement
        }, 700, function() {
            $(this).css('margin-left', '0');
            var $last = $('.slide').filter(':last');
            $('.slider-wrap').prepend($last);
            var $slide2 = $('.slide').eq(1);
            $slide2.children('.block').append($('.black-box'));
            winSize();
        })
    })

    function setWidth() {
        var widthSlider = $('.slider').innerWidth();
        widthElement = widthSlider / x;
        $('.slide').innerWidth(widthElement);
    }

    function winSize() {
        var winBr = $(window).width(); //ширина окна бпаузера
        if (winBr > 1224) x = 4;
        if (winBr > 1070 && winBr < 1224) x = 3;
        if (winBr > 550 && winBr < 1070) x = 2;
        if (winBr < 550) {
            x = 1;   
            var $slide1 = $('.slide').eq(0);
            $slide1.children('.block').append($('.black-box'));
            
        }
        
        setWidth();
    }

    $(window).resize(function() {
        winSize();
        setWidth();
    })

    winSize();
    setWidth();

});